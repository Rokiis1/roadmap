# Python Async programming Level 1

- [Synchronous waiting vs cooperative waiting](#synchronous-waiting-vs-cooperative-waiting)
- [Coroutine functions and coroutine objects](#coroutine-functions-and-coroutine-objects)
- [Await points and yielding control](#await-points-and-yielding-control)
- [How async code starts running](#how-async-code-starts-running)
- [Sequential await vs concurrent start](#sequential-await-vs-concurrent-start)

This level introduces **async programming in Python** from a language perspective. The focus is on **async** and **await** as core concepts, while treating the runtime as an implementation detail rather than the main subject.

The goal is to understand **why async exists**, **how async code behaves**, and **how to structure simple async programs correctly** without diving into advanced `asyncio` internals.

Many programs are slow not because the CPU is busy, but because they spend time waiting **network responses**, **database queries**, **files**, **timers**

In traditional synchronous code, waiting blocks execution. While the program waits, no other work can continue.

Async programming allows waiting to be **cooperative**. A task can pause while waiting and allow other tasks to run. This makes programs more efficient when dealing with many slow input output operations.

Async is not meant to speed up CPU heavy computation. It is meant to overlap waiting time.

## Synchronous waiting vs cooperative waiting

Blocking waiting stops the entire program.

```py
import time

def read_file(name, seconds):
    print(name, "start file read")
    time.sleep(seconds)
    print(name, "end file read")

def main():
    start = time.time()
    read_file("A", 2)
    read_file("B", 1)
    read_file("C", 3)
    print("total", round(time.time() - start, 2), "seconds")

main()
```

Output appears in strict order.

```ascii
A start read -> A end read -> B start read -> B end read -> C start read -> C end read
```

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

Output shows overlapping execution. All file operations start before any of them finish.

```ascii
A start file read -> B start file read -> C start file read -> A end file read -> B end file read ->  C end file read -> total 0.1 seconds
```

## Coroutine functions and coroutine objects

A function defined with `async` def is a coroutine function.

Calling it does not execute its body immediately. It creates a coroutine object.

```py
async def greet():
    return "hello"

coro = greet()
print(coro)
```

The coroutine does nothing until it is awaited or scheduled.

## Await points and yielding control

Await marks a point where a coroutine can pause.

When a coroutine reaches an `await` expression, it yields control so other coroutines can run. When the awaited operation completes, execution resumes from the same point.

```py
import asyncio

async def step():
    await asyncio.sleep(1)
    return "step done"
```

Coroutines can `await` other coroutines, forming a chain of execution that pauses and resumes naturally.

## How async code starts running

Async code requires a runner. In standard Python programs, this runner is provided by asyncio.

```py
import asyncio

async def main():
    print("start")
    await asyncio.sleep(1)
    print("end")

asyncio.run(main())
```

Frameworks such as web servers already run the async runtime.

## Sequential await vs concurrent start

Awaiting operations one after another is still sequential.

```py
import asyncio

async def job(name, seconds):
    await asyncio.sleep(seconds)
    return name

async def main():
    a = await job("A", 2)
    b = await job("B", 1)
    print(a, b)

asyncio.run(main())
```

To overlap waiting, operations must be started before awaiting their results.

```py
import asyncio

async def job(name, seconds):
    await asyncio.sleep(seconds)
    return name

async def main():
    results = await asyncio.gather(
        job("A", 2),
        job("B", 1),
    )
    print(results)

asyncio.run(main())
```
