# Content of Python control flow 1 level

Let's take these core concepts and start with conditional branching to see how it works. Python uses the keywords `if`, `elif`, and `else` for decision-making. You start with an `if` statement followed by a boolean expression and a colon (`:`). The colon begins an indented block of code that runs only if the expression is **True**.

Below you can see syntax:

```py
if condition:
    # code block executed if the condition is True
elif another_condition:
    # code block executed if the previous condition is False and this condition is True
else:
    # code block executed if all above conditions are False
```

If the boolean expression in the `if` statement is **False**, Python will skip that indented block and look for an `elif` statement (if one exists) to evaluate the next condition. If none of the `if` or `elif` conditions are met, and there is an `else` statement, then the code inside the `else` block will run.

## if-statement

Let's start with `if` statements to see how they work. In Python, an `if` statement begins with the keyword `if`, followed by a boolean expression and a colon (`:`). The colon marks the beginning of an indented block of code that executes only if the condition evaluates to **True**.

![if_statment](../assets/images/if_statment.png)

Below this image, we can see the syntax:

```py
if condition:
    # code block executed if the condition is True
```

And here is a simple example of how to write an `if` statement in code.

```py
temperature = 25

if temperature > 20:
    print("It's warm outside")
```

You can also write an `if` statement on a single line, like this.

```py
if condition: print("Condition is True")
```

*However, this concise format is fit for very simple actions.*

Additionally, when combining conditions using logical operators such as `and` or `or`, it's recommended to use parentheses for clarity.

```py
temperature = 25
humidity = 45

if (temperature > 20) and (humidity < 50):
    print("It's warm and not too humid!")
```

When using an `if` statement, the code block inside it runs only if the condition is true. If the condition is false, nothing is displayed or executed.

However, when you combine `if` with `else`, the code inside the `else` block will run if the condition is false, allowing you to display an alternative message or perform different actions.

![if_else_statment](../assets/images/if_else_statment.png)

Below this image, you can see the syntax for using `if` and `else` statements.

```py
if condition:
    # code block executed if the condition is True
else:
    # code block executed if the condition is False
```

And here's an example of how to implement `if` and `else` statements.

```py
temperature = 15

if temperature > 20:
    print("It's warm outside")
else:
    print("It's not warm outside")
```

You can extend your decision making using `elif` (short for "else if"). Basically, if the condition in your initial `if` statement is false, Python will check the `elif` conditions one by one.

In this image, we can see the complete flow of `if`, `elif`, and `else` statements.

![if_elif_else_statement](../assets/images/if_elif_else_statement.png)

If one of those conditions is true, its block of code will execute, and the rest will be skipped. If none of the `if` or `elif` conditions are met, the `else` block will execute as a default.

Below is the syntax for using `if`, `elif`, and `else`.

```py
if condition1:
    # code block executed if condition1 is True
elif condition2:
    # code block executed if condition1 is False and condition2 is True
else:
    # code block executed if none of the above conditions are True
```

Here's an example that uses `elif` to handle multiple conditions.

```py
temperature = 15

if temperature > 30:
    print("It's very hot outside")
elif temperature > 20:
    print("It's warm outside")
elif temperature > 10:
    print("It's cool outside")
else:
    print("It's cold outside")
```

Next, we will explore how **loops** work, starting with string data types. In the **data types 2 level**, we will discuss how to implement loops with other **iterable** data types such as **lists**, **dictionaries**, **sets**, and **tuples**.

A **loop** is a control structure in programming that allows you to repeatedly execute a block of code as long as a specified condition is met or for each item in a collection. There are different types of loops available in programming, including the `for` loop and the `while` loop.

Let's start with the `for` loop. Below, you can see an image that illustrates its structure.

![Loop](../assets/images/loop_in.png)

And here is the basic syntax for a `for` loop.

```py
for item in collection:
    # code block to execute for each item
```

*Loops are designed to work with **sequences** or **collections** of multiple elements. Single values such as a **number**, **boolean**, or **None** are not **iterable** and cannot be used directly in loops.*

And there is example image that illustrates how for loop works.

![alt text](../assets/images/example_for_loop_chart.png)

Below this image, you can see a code snippet demonstrating how the `for` loop is implemented in code.

```py
text = "Hello"

for letter in text: # Loop condition: is there more in data?
    print("letter:", letter) # Display result for each item

print("Done.") # Stop after all items are processed
```

*We have seen how to iterate over strings because they are sequences containing individual characters. Although individual numeric values cannot be iterated over.*

There is appear sequential data type called `range()` that represents an interval of numbers.

```py
print(range(5))
```

When we print the range, we see an output like `range(0, 5)`, which indicates that it represents an interval starting at 0 and ending before 5.

*For now, it's important to understand that `range()` creates a sequence of numbers, and in **Data Types Level 2**, we will explore how to work with it more closely.*

Below is an example of how to implement `range()` in a `for` loop.

```py
# This loop iterates over numbers from 0 to 4
for i in range(5):
    print(i)
```

Next, we will see how the `while` loop works.

A `while` loop repeatedly executes a block of code as long as a specified condition remains True.

Below is a flowchart that illustrates how a `while` loop operates.

![while loop chart](../assets/images/while_loop_chart.png)

And here is the syntax for a `while` loop.

```py
while condition:
    # code block that executes as long as the condition is True
```

Below is an image that illustrates how a `while` loop works in code.

![example chart while loop](../assets/images/example_while_loop_chart.png)

And here is an example of how the `while` loop looks in code.

```py
count = 0
while count < 5:
    count += 1
    print(count)
```

If we write a `while` loop without a condition that eventually becomes False, we'll end up with an infinite loop.

```py
while True:
    print("Infinite loop")

# Press Ctrl + C to stop the program
```
