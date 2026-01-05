# Content of Python function programming 1 level

- [What is a function?](#what-is-a-function)
- [Function definition vs function call](#function-definition-vs-function-call)
- [Parameters vs arguments](#parameters-vs-arguments)
- [Return vs print](#return-vs-print)
- [Control flow inside functions](#control-flow-inside-functions)
- [Functions with collections](#functions-with-collections)
- [Built-in numeric utility functions](#built-in-numeric-utility-functions)

## What is a function?

Functions are reusable blocks of code designed to perform a specific task and help you organize your code.

![function_syntax](../assets/images/fucntion_image.png)

## Function definition vs function call

We define a function with the keyword `def` and give it a name. As discussed in **Syntax Level 1**, if the name consists of multiple words, use **snake_case** for clarity.

Syntax for defining a function is.

```py
def function_name(parameters, parameters2):
    # Function body
```

## Parameters vs arguments

In **Syntax Level 1**, parameters were introduced as variables listed inside the parentheses `()` in a function definition. They serve as placeholders for the values (**arguments**) that will be passed to the function when it is called.

Inside the function block, you can use the `return` keyword to send back a value, or you can use `print()` a result directly without returning it.

## Return vs print

*Using `print()` inside a function is generally for debugging purposes. It's best to use `return` to send a value back, allowing the function's output to be reused elsewhere.*

Here's an example using `print()` within a function.

```py
def function_name(parameters):
    # Function body
    print(expression)
```

And when we write using `return`, the function sends a value back so that it can be reused.

```py
def function_name(parameters):
    # Function body
    return expression
```

To get an answer in your console, you must call the function after defining it, and if you don't use `print()` within the function, you need use `print()` when calling the function.

```py
def function_name(parameters):
    # Function body
    return expression

# Calling the function and printing its returned result
print(function_name(argument))
```

Consider the following sequential code that adds two numbers

```py
number1 = 10
number2 = 20

sum_result = number1 + number2

print(sum_result)
```

*This approach works fine for a one-time calculation, but the result cannot be reused elsewhere in your program.*

In contrast, by defining a **function**, you can reuse it this logic, and return the result to be used in other parts of your code. Inside a **function block**, you can use the `return` keyword to send a value back, or you can use `print()` to display it directly.

```py
def add_numbers(a, b):
    # Function body
    return a + b

# Now you can reuse the function wherever needed
result = add_numbers(10, 20)
print(result)
```

*Using `print()` inside a function is generally for debugging purposes. It's best to use `return` to send a value back, allowing the function's output to be reused elsewhere.*

## Control flow inside functions

But most of the time, simple logic isn’t enough. We need to handle more complex decision-making to solve problems. One way to do this is by combining control flow constructs like **conditionals** and **loops** within a function and then using a loop to call the function with multiple inputs.

Below is an example that demonstrates a more advanced control flow using a function with conditional logic and a for-loop for iteration.

```py
def classify_number(num):
    if num < 0:
        return "Negative"
    elif num == 0:
        return "Zero"
    else:
        return "Positive"

for i in range(-2, 3):
    print(f"{i} is {classify_number(i)}")
```

There is another example with the membership operator.

## Functions with collections

This function checks if a target element is present in a given collection.

```py
def demo_membership(target, collection):
    if target in collection:
        print(f"{target} is in the collection.")
    else:
        print(f"{target} is not in the collection.")

my_list = [1, 2, 3, 4]
demo_membership(3, my_list)
demo_membership(5, my_list)
```

Example with identity operator.

```py
def demo_identity(obj1, obj2):
    if obj1 is obj2:
        print("Both objects are identical (the same object).")
    else:
        print("The objects are not identical (different objects).")

a = [1, 2]
b = a
c = [1, 2]

demo_identity(a, b) # Output: Both objects are identical (the same object).
demo_identity(a, c) # Output: The objects are not identical (different objects).
```

So far, we have learned **how functions work**, how they take **parameters**, and how they **return values**. We have also already used some **built-in functions** provided by Python.

Now, let’s focus on a specific group of built-in functions that are commonly used when working with numbers.

## Built-in numeric utility functions

So far, we have learned **how functions work**, how they take **parameters**, and how they **return values**.

Now let’s look at some **built-in functions** that Python provides to help us work with numbers.

These are called **numeric utility functions**.

The `abs()` function returns the absolute value of a number. It basically converts a **negative number into a positive one** (or leaves a positive number unchanged).

```py
print(abs(10)) # 10
print(abs(-10)) # 10
```

The `round()` function rounds a number to the nearest value.

```py
print(round(3.6)) # 4
print(round(3.14159, 2)) # 3.14
```

The first argument is the number to round, and the second argument is **optional** and specifies how many **decimal places** to keep.

Another useful pair of functions is `min()` and `max()`.

- The `min()` function returns the **smallest value**
- The `max()` function returns the **largest value**

```py
print(min(3, 7, 1)) # 1
print(max(3, 7, 1)) # 7
```

They also work with **collections**, such as lists.

```py
numbers = [4, 9, 2, 8]
print(min(numbers)) # 2
print(max(numbers)) # 9
```

The `sum()` function adds all numeric values in a collection.

```py
numbers = [1, 2, 3, 4]
print(sum(numbers)) # 10
```

This function is useful when working with lists of numbers.

Another useful numeric utility is the `pow()` function, which raises a number to a power.

```py
print(pow(2, 3)) # 8
```

This is equivalent to using the exponent operator `**`, which I already introduced earlier.

```py
print(2 ** 3) # 8
```
