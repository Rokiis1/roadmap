# Content of Python control flow 4 level

- [yield](#yield)

In the previous levels, we explored how Python programs control execution using **conditional logic**, **loops**, and **structured decision patterns**.

First, we learned how programs make decisions using `if`, `elif`, `else` and how they repeat operations using `for` and `while` loops.

Next, we examined how loops can be controlled more precisely with **jump statements** such as `break`, `continue` and `pass`.

Then we introduced more advanced ways to organize decision logic, including **`match-case` statements**, **nested control structures** and **list comprehensions** for concise iteration.

All of these constructs share one common idea, a block of code runs **from start to finish** when it is executed.

Functions follow the same pattern. A function is called, it runs its code and eventually it finishes by returning a value using `return`.

However, some problems require a different behavior. Instead of producing **one final result**, a function may need to produce **a sequence of values over time**, yielding one value at a time while preserving its internal state.

This is where **generators** and the `yield` statement become useful.

The `yield` statement allows a function to **pause execution**, return a value and then **resume later from the same point** when the next value is requested. This makes it possible to create efficient data streams without storing all results in memory at once.

## yield

The `yield` statement is used inside a function to produce a value and pause the functions execution. When the function is called again through iteration, execution continues from the point where it previously stopped.

A function that contains `yield` becomes a **generator function**. Instead of returning a single value, it returns a **generator object** that can be iterated over.

The basic structure of a generator function looks like this.

```py
def generator_function():
    yield value
```

Each time the generator produces a value, the function pauses. When the next value is requested, the function resumes execution from the line after the `yield` statement.

Here is a simple example that generates numbers one at a time and shows how execution pauses and resumes.

```py
def count_up_to(limit):
    i = 1
    while i <= limit:
        yield i
        i += 1

for number in count_up_to(5):
    print(number)
```

and output would be like this.

```bash
Preparing to yield value: 1
Received from generator: 1
Resuming function after yielding 1
Preparing to yield value: 2
Received from generator: 2
Resuming function after yielding 2
Preparing to yield value: 3
Received from generator: 3
Resuming function after yielding 3
```

In this example, the function does not return all numbers at once. Instead, each iteration of the loop requests the next value from the generator.

This approach is especially useful when working with **large datasets**, **streams of data** or situations where producing values one at a time is more efficient than building a full list in memory.

The key difference between `return` and `yield` is how the function behaves after producing a value.

- `return` ends the function completely.

- `yield` pauses the function and allows it to continue later.

Because of this behavior, generator functions allow programs to work with **data lazily**, producing values only when they are needed.
