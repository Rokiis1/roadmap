# Content of Python Async programming Level 1

- [Synchronous waiting vs cooperative waiting](#synchronous-waiting-vs-cooperative-waiting)
- [Coroutine functions and coroutine objects](#coroutine-functions-and-coroutine-objects)
- [Sequential await vs concurrent start](#sequential-await-vs-concurrent-start)

This level introduces **async programming in Python** from a language perspective. The focus is on **async** and **await** as core concepts, while treating the runtime as an implementation detail rather than the main subject.

The goal is to understand **why async exists**, **how async code behaves**, and **how to structure simple async programs correctly** without diving into advanced `asyncio` internals.

Many programs are slow not because the CPU is busy, but because they spend time waiting **network responses**, **database queries**, **files**, **timers**

In traditional synchronous code, waiting blocks execution. While the program waits, no other work can continue.

Async programming allows waiting to be **cooperative**. A task can pause while waiting and allow other tasks to run. This makes programs more efficient when dealing with many slow input output operations.

Async is not meant to speed up CPU heavy computation. It is meant to overlap waiting time.

Async and await do not run by themselves. They describe how a function can pause and resume, but something must be responsible for executing and resuming that work.

In Python, this role is handled by asyncio. Asyncio is the standard runtime that drives async code, manages waiting, and resumes execution when operations are ready to continue.

At this level, asyncio can be thought of as the engine that runs async functions. Its internal details are handled automatically and are not required knowledge yet.

## Synchronous waiting vs cooperative waiting

Each file operation blocks the program. While one file is being processed, nothing else can run. Adding more work only makes everything slower.

Cooperative waiting pauses only the current task.

```py
import time

def read_file(filename):
    print(filename, "start file read")
    
    start = time.time()
    
    with open(filename, "r") as f:
        content = f.read()
        time.sleep(2) # simulate slow reading
    
    print("Content:", content)
    print(filename, "end file read")
    print("Time:", round(time.time() - start, 2), "seconds\n")

def main():
    total_start = time.time()
    
    read_file("A.txt")
    read_file("B.txt")
    read_file("C.txt")
    
    print("Total time:", round(time.time() - total_start, 2), "seconds")

main()
```

Output appears in strict order. The program waits for each file operation to finish before starting the next one.

```ascii
A start file read -> A end file read -> B start file read -> B end file read -> C start file read -> C end file read -> total 6.0 seconds
```

Each file operation blocks the program. While one file is being processed, nothing else can run. Adding more work only makes everything slower.

Cooperative waiting pauses only the current task.

```py
import asyncio
import aiofiles
import time

async def read_file(filename):
    print(filename, "start file read")

    async with aiofiles.open(filename, "r") as f:
        content = await f.read()
        time.sleep(2)

    print("Content:", content)
    print(filename, "end file read")

async def main():
    start = time.time()

    await asyncio.gather(
        read_file("A.txt"),
        read_file("B.txt"),
        read_file("C.txt"),
    )

    print("total", round(time.time() - start, 2), "seconds")

asyncio.run(main())
```

In this example, file reading is performed using `aiofiles` instead of Pythons built in file functions.

Pythons standard file operations such as `open` and `read` are synchronous. When they are used, the program waits until the file operation finishes. Even if they are written inside an async def function, they still block execution and prevent other tasks from running.

Aiofiles provides an `async` compatible file interface. Its file operations can be awaited, which allows the current task to pause while waiting for the file system. During that pause, other `async` tasks can continue running.

This is why `aiofiles` is used together with `async` and `await`. It allows file related waiting to become cooperative instead of blocking.

Output shows overlapping execution. All file operations start before any of them finish.

```ascii
A start file read -> B start file read -> C start file read -> A end file read -> B end file read ->  C end file read -> total 0.1 seconds
```

The reason this overlapping behavior is possible is that each file operation is executed inside an async function.

These async functions do not run continuously from start to finish. Instead, they can pause when they reach an await expression and resume later. While one function is paused waiting for a file `read`, another function is allowed to run.

To understand how this works, it is necessary to look at what an `async` function actually creates when it is called.

This leads to the concept of coroutine functions and **coroutine objects**.

## Coroutine functions and coroutine objects

A function defined with `async def` is called a coroutine function.

It is called a coroutine because it does not run from start to finish in one go. Instead, it can **pause**, **yield control** and **continue later**. This ability to cooperate with other running code is where the name coroutine comes from.

When a coroutine function is called, Python does not execute the function body immediately. Instead, it creates a **coroutine object**.

```py
async def greet():
    print("inside greet")
    return "hello"

coro = greet()
print(coro)
```

Running this code prints something like.

```bash
<coroutine object greet at 0x7f0e2fff4a00>
sys:1: RuntimeWarning: coroutine 'greet' was never awaited
```

At this point, nothing inside `greet` has run yet. The coroutine object represents **work that could run**, but has not started.

The warning appears because the coroutine was created but never awaited. Python detects that the program finished without ever running the coroutine and reports this as a mistake.

A coroutine object is like a paused function at the very beginning. It contains the function code and its state, but execution has not begun.

To actually run a coroutine, it must be **awaited** or **scheduled**.

```py
import asyncio

async def main():
    result = await greet()
    print(result)

asyncio.run(main())
```

When `await greet()` is reached, the coroutine starts executing. It runs until it either finishes or reaches an `await` inside its body.

Because coroutines only run when they are awaited, how they are awaited directly affects program behavior.

Awaiting one coroutine at a time causes work to run sequentially. Starting multiple coroutines before awaiting their results allows waiting to overlap.

This difference leads to the distinction between **sequential await** and **concurrent start**.

## Sequential await vs concurrent start

Awaiting file operations one after another is still sequential. Each file is fully processed before the next one starts.

```py
import asyncio
import aiofiles
import time

# Async function that reads a file
# This function can pause at await points
async def read_file(filename):
    # This line runs immediately when the coroutine starts
    print(filename, "open file")

    # Opening the file using an async compatible file handler
    async with aiofiles.open(filename, "r") as f:
        print(filename, "start reading")

        # Execution pauses here until the file is fully read
        content = await f.read()

        # Execution resumes here after the read completes
        print(filename, "finished reading")

    # Returning the file content to the caller
    return content


# Main async entry point
async def main():
    # Record start time
    start = time.time()

    # First await
    # The program waits here until A.txt is fully read
    a = await read_file("A.txt")

    # Second await
    # This does NOT start until the first await finishes
    b = await read_file("B.txt")

    # These lines run only after both file reads are complete
    print("A length", len(a))
    print("B length", len(b))

    # Print total execution time
    print("total", round(time.time() - start, 2), "seconds")


# Starts the async runtime and runs main()
asyncio.run(main())
```

Even though `read_file` is `async`, the second file is not read until the first one finishes. Waiting still happens in sequence.

To overlap waiting, operations must be started before awaiting their results.

```py
import asyncio
import aiofiles
import time

# Async function that reads a file
# This function can pause while waiting for disk I O
async def read_file(filename):
    # File is opened in an async compatible way
    async with aiofiles.open(filename, "r") as f:
        # Execution pauses here while the file is being read
        content = await f.read()
    # Return the file content after reading completes
    return content


# Main async entry point
async def main():
    # Record start time
    start = time.time()

    # Both coroutines are created first
    # File reads for A.txt and B.txt start before awaiting results
    results = await asyncio.gather(
        read_file("A.txt"),
        read_file("B.txt"),
    )

    # These lines run only after both file reads are finished
    print("A length", len(results[0]))
    print("B length", len(results[1]))

    # Total time is close to the longest single file read
    print("total", round(time.time() - start, 2), "seconds")


# Starts the async runtime and runs main()
asyncio.run(main())
```

In this version, both file reads are started before waiting for their results. While one file is waiting on disk input, the other file operation can also make progress.

The files are not read faster individually, but the total waiting time is reduced because waiting overlaps.
