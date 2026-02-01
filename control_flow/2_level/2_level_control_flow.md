# Content of Python control flow 2 level

- [The `break` Statement](#the-break-statement)
- [The `continue` Statement](#the-continue-statement)
- [The `pass` Statement](#the-pass-statement)

In this level, we'll discuss jump statements why we use them, what they are, and the different types available `break`, `continue`, `pass`.

Let's begin with `break`. It is used to immediately exit the current loop and continue execution with the first statement following the loop.

So below there is diagram how the flow looks

![Break statment](../assets/images/break_statment.png)

The diagram shows the flow of a `break` statement in a loop.

## The `break` Statement

The `break` statement is most commonly used when a loop no longer needs to continue because its goal has already been achieved. This often happens when searching for a specific value, validating input, or stopping execution once a condition is satisfied.

```py
looping statement:
   condition check:
      break
```

Here is a simple example using a `for` loop. The loop runs through a range of numbers, but stops as soon as the condition is met.

```py
for i in range(10):
    print(f"Iteration {i}")
    if i == 5:
        break # Exit the loop when i equals 5
```

Once `i` reaches `5`, the loop exits immediately.

The `break` statement is also very common in `while` loops, especially when the number of iterations is not known in advance.

```py
while True: # Infinite loop, will break once condition is met
    command = input("Type 'exit' to stop: ")

    if command == "exit": # Exit the loop when is "exit"
        print("Program stopped")
        break

    print("Command received:", command)
```

Here, the loop runs indefinitely and relies on `break` to stop execution when the user enters a `"exit"` command.

Another common use case is searching for a value in a collection.

```py
orders = ["ORD-1001", "ORD-1002", "ORD-1003", "ORD-1004"]
target_order = "ORD-1003"

for order in orders:
    if order == target_order:
        print(f"Order found: {order}")
        break
```

Once the target order is found, there is no reason to continue scanning the remaining items.

Now, let's see how you can implement searching for a specific element using a function, as discussed in **Functions and Modules 1 Level**.

Instead of using `break`, this logic is often placed inside a function, where `return` is used to exit the function early once process end.

```py
def find_order(orders, target):
    for order in orders:
        if order == target:
            return True
    return False
```

In this example, the function scans through the list of orders one by one. As soon as the target order is found, `return True` is executed. This immediately stops the function, and because the loop is inside the function, the loop stops as well. If the loop finishes without finding the target, the function reaches the final `return False`.

```py
if find_order(orders, target_order):
    print("Search successful")
else:
    print("Order not found")
```

Here, the function communicates the result of the search without requiring an explicit `break`. The key difference at this level is understanding where execution stops. A `break` exits only the loop, allowing the surrounding code to continue running. A `return` exits the entire function, which naturally ends any loop inside it.

Other `continue` statement skips the remainder of the current iteration and moves directly to the next iteration of the loop.

## The `continue` Statement

The `continue` statement is commonly used when certain values should be ignored during iteration, but the loop itself should keep running. This pattern is often used when **filtering data**, **ignoring invalid values**, or applying conditions where only specific elements should be processed.

Below is the diagram that shows the flow of a `continue` statement

![continue_statment](../assets/images/continue_statment.png)

The diagram shows the flow of a `continue` statement in a loop.

```py
looping statement:
   condition check:
      continue
```

The `continue` statement works the same way in `while` loops. It skips the rest of the current iteration and immediately moves to the next loop check.

```py
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue # Skip the rest of the loop for even numbers
    print(f"Odd number: {i}")
```

In this example, when the number is **even**, the `continue` statement skips the `print` statement. Only **odd** numbers reach the `print` line. The loop itself keeps running until the condition `i < 10` becomes **false**.

This pattern is commonly used when some values should be **ignored**, but the loop should `continue` processing the rest of the data.

In programs, this kind of **filtering logic** is often placed inside a function so it can be reused.

```py
def process_valid_emails(records):
    for record in records:
        if record["email"] == "":
            continue
        print("Sending email to:", record["email"])

records = [
    {"name": "Example1", "email": "example1@example.com"},
    {"name": "Example2", "email": ""},
    {"name": "Example3", "email": "example3@example.com"}
]

process_valid_emails(records)
```

Here, the function loops over all records. If a record does not contain an `email` address, `continue` skips that entry and moves directly to the next one. Only valid `email` addresses are processed.

You might encounter situations where you need to leave a block of code intentionally empty. That's where the `pass` statement comes in.

## The `pass` Statement

The `pass` statement acts as a placeholder for when a statement is syntactically required but no action is needed. It does nothing and is used to fill gaps in code during development.

Below is the syntax for `pass`.

```py
if condition:
    pass # No action is taken
```

For example, you might use `pass` as a placeholder in a function definition when you haven't implemented the function yet. This ensures that the function is syntactically valid.

```py
def my_function():
    pass # Implement this later
```

Similarly, in conditional blocks where you require a syntactically valid statement but don't need any action, `pass` can be used.

```py
if some_condition:
    pass # No action is needed in this case
else:
    print("Condition not met")
```
