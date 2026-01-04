# Content of Python inputs/outputs operations 1 level

- [Input and Print](#input-and-print)
- [Escape Characters](#escape-characters)
- [Raw Strings](#raw-strings)
- [String Formatting](#string-formatting)

## Input and Print

A program becomes useful when it can **interact with the outside world**. This interaction happens through **input and output**, often referred to as **I/O**.

*Input* is the data a program receives, and **output** is the data a program produces. The common form of input comes from the users keyboard, and the most common form of output is text displayed on the screen.

Python provides two **built-in functions** for these purposes: `input()` and `print()`.

The `input()` function allows a program to pause and wait for the user to enter data. When `input()` is executed, Python reads the characters typed by the user until the Enter key is pressed.

```py
name = input("Enter your name: ")
```

The value returned by `input()` is **always a string**, regardless of what the user types.

If the user types `Vardenis`, the variable `name` will reference the string `"Vardenis"`.

This design choice makes input consistent, but it also means that numerical input must be **explicitly converted** when arithmetic operations are required.

```py
age = int(input("Enter your age: "))
```

Here, the string returned by `input()` is converted into an integer before being assigned to the variable.

Here is the **built-in function** used for producing output `print()`.

The `print()` function is used to send output to the screen. It converts the given values into text and writes them to the standard output stream.

```py
print("Hello, world")
```

The `print()` function can display **literal text**, **variables**, **multiple values at once**.

Here is an example

```py
name = "Vardenis"
age = 25
print(name, age)
```

By default, `print()` separates multiple values with a space and ends the output with a newline.

We can modify the behavior of `print()`. The `sep` argument controls how multiple values are separated.

```py
print("Good", "2026", "years", sep="-")
```

The `end` argument controls what is printed at the end of the output.

```py
print("Loading", end="...")
```

This cycle forms the foundation of interactive software.

1. Ask the user for input
2. Process that input
3. Display a result

```py
value = input("Enter a value: ")
print("You entered:", value)
```

More advanced input/output mechanisms such as **files**, **networks**, and **streams** build upon the same fundamental idea. We will touch on these later in other levels.

To continue, we need to understand how text itself can be **controlled and manipulated when displayed**. One of the first tools for this is the use of **escape characters**, which allow us to change how strings appear in output.

## Escape Characters

Escape characters use a backslash (`\`) to modify how strings are interpreted. An escape character is a character preceded by a backslash, which tells the **interpreter** that the following sequence has a special meaning.

Here are some of the most commonly used escape characters in Python.

- `\\`: Inserts a literal backslash (`\`)
- `\'`: Inserts a literal single quote (`'`)
- `\"`: Inserts a literal double quote (`"`)
- `\n`: Inserts a new line (line break)
- `\t`: Inserts a tab (horizontal tab space)

And here is example how we implement.

```py
example = "He said, \"Hello, World!\"\nWelcome to Python programming.\tEnjoy your learning!"
print(example)
```

## Raw Strings

When you add the prefix `r` to a string, it tells Python to treat the backslashes as literal characters and not as the beginnings of escape sequences. This is known as a "raw string."

```py
example_raw = r"He said, \"Hello, World!\"\nWelcome to Python programming.\tEnjoy your learning!"
print(example_raw)
```

Most of the time, we use the `r` prefix when working with regular expressions (which we'll cover in Regular **Expressions Level 1**) or when handling file paths, especially on Windows.

```py
r"C:\Users\Name\Documents"
```

## String Formatting

With strings, we also have the ability to format them in various ways. In **Input/Output Level 2**, we'll explore more advanced formatting techniques. For now, let's start with **f-strings** and the `%` (modulo) operator.

F-strings allow you to embed expressions inside string literals. The "f" in an **f-string** stands for "formatted" and by prefixing a string with an "f", you create an **f-string**. Inside the string, curly braces `{}` act as placeholders that are filled with **variables**, **expressions**, or **function calls**.

```py
name = "Test"
age = 30
greeting = f"Hello, {name}. You are {age} years old."
print(greeting)
```

Another method for string formatting is using the `%` operator, often referred to as the string formatting operator. This operator inserts values into placeholders defined by format specifiers within a string.

- `%s` is a placeholder for a string.
- `%d` is a placeholder for an integer.

```py
name = "Test"
age = 30
greeting = "Hello, %s, You are %d years old." % (name, age)
print(greeting)
```

*Most of the time, when it comes to string formatting, **f-strings** are the preferred method.*
