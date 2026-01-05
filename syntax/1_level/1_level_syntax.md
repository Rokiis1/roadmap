# Content of Python syntax 1 level

- [Indentation & blocks](#indentation--blocks)
- [Comments](#comments)
- [Variables (as names)](#variables-as-names)
- [Literals & basic types](#literals--basic-types)
- [What is an object?](#what-is-an-object)
- [Built-in functions](#built-in-functions)

## Indentation & blocks

Python uses indentation (typically 4 spaces) to form code blocks for structures such as `if` **statements**, **loops**, and **functions** each block following a colon (`:`) without needing brackets `{}` or semicolons `;`.

```py
if True:
    print ("True")
else:
    print ("False")
```

```py
def greet(name):
    print("Hello, " + name)

greet("World")
```

*Many modern code editors convert a `tab` press into 4 spaces automatically to keep your code consistent.*

Let's dive in and explore how we write comments and what structure exists.

## Comments

Comments are lines in your code that the **Python interpreter** ignores. They serve as notes to explain what your code does, making it easier for you (and others) to understand and maintain the code.

- **Single-line Comments:** Use the `#` symbol to create a comment that occupies a single line.

  ```py
  # This is a single-line comment
  ```

- **Multi-line Comments:** You can create multi-line by using triple `""" """` quotes. Typically used for `docstrings`, which can also serve as multi-line comments. Although you can also use triple single quotes (`''' '''`), this is less common.

  ```py
  """
  This is a multi-line comment.
  This is second line.
  This is third line.
  """
  ```

Now that we've seen how comments provide clarity in our code, let's look at another feature is variables.

## Variables (as names)

**Variables in Python are labels (names) that refer to data stored somewhere in memory**. When you create a variable, you give a name to a value so you can reuse it later in your code.

By convention, variable names are written in **snake_case** (`user_name`, `item_count`). Names written in **UPPERCASE** (like `DEBUG` or `CONFIG`) are used by convention to represent constants, but Python does not enforce immutability, they can still be changed and are often used for configuration values.

## Literals & basic types

When starting out with Python, you'll mostly work with simple data types like **strings** (text), **numbers** (for calculations), and **booleans** (`True`/`False` values) the fundamental building blocks of any program.

For now, we'll use **literals** (*fixed values*) to see how we can work with simple strings and other basic data. Later on, we'll explore other data structures and how to work with them.

Below, you can see various ways to assign values to variables.

```py
# Assigning a string to a variable
# Double quotation
user_name = "example"
# Single quotation
user_name = 'example'

# Assigning a number to a variable
item_count = 5

# Assiging a Floating-point number to a variable
floating_number = 19.99

# Reassigning a variable to a value of a different type
user_name = 100  # Now user_name is an integer

# Using uppercase for configuration constants
DEBUG = True

# Simple assignment value as other variable
a = b

# You can also declare multiple variables in one line
a, b, c = 1, 2, 3

# Chain assignment: All variables get the same value
x = y = z = 10
```

With a solid grasp of variables, it’s important to understand what those variables actually refer to. In Python, variables do not hold values directly. Instead, they point to values that Python treats as objects.

## What is an object?

In Python, everything you work with is an **object**. An object is simply a value that exists in your program and can be passed around, stored in variables, and used by functions.

You have already been using objects without realizing it. When you write a **string**, a **number**, or a **boolean** value, you are creating an object.

```py
user_name = "example"
item_count = 5
is_active = True
```

In these examples, `"example"`, `5`, and `True` are objects. The variable names do not store the values themselves, they reference these objects so you can use them later in your code.

Now that we know values in Python are objects, we can better understand how functions interact with them. Many of the tools provided by Python are designed to work with objects directly, regardless of whether they are **strings**, **numbers**, or other types. These tools are called **built-in functions**.

## Built-in functions

Built-in functions in Python are ready to use functions provided by the language. They are available by default. When you type the name `print` of a built-in function in the **Python interpreter**, you get the output like `<built-in function print>`, which indicates that the function is provided by Python itself.

For example, the built-in function `print(object)` displays output to the console. The built-in function `type(object)` returns the type of an object, helping you understand what kind of value you are working with. The built-in function `len(object)` returns the number of elements in an object such as a string, list, or other collection.

The built-in function `dir(object)` is a built-in function that returns a list of names representing all the **attributes** (*Imagine a face is like a Python object. Its **attributes** are the **characteristics** of that face*) and methods (*These are **functions** the face can perform*) linked to an object, and `help(object)` provides the help documentation for a function, module, or object.

When calling these functions, you use parentheses `()`, which is known as **function call notation**. Think of the parentheses as a container that holds any input called `arguments` or `parameters` that the function needs to perform its task. For instance, in `print("Hello, world!")`, the string `"Hello, world!"` is passed as an argument to the `print()`.
