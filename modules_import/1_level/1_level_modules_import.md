# Content of Python modules and import 1 level

- [What is `import`?](#what-is-import)
- [Built-in modules](#built-in-modules)
- [What is a module?](#what-is-a-module)

In the previous levels, we learned how to write functions, which allow us to group logic and reuse it inside a program.

As programs grow, another problem appears, **too much code in one place becomes hard to read and hard to manage**.

To understand the solution, let’s start with a simple analogy.

Imagine you are cooking. You don’t grow rice, make salt, or extract oil every time you cook a meal. Instead, you use ingredients prepared by others.

In Python, a similar idea appears in the form of the keyword `import`.

## What is `import`?

`import` allows you to **use code that already exists**, instead of writing everything yourself.

```py
import math
```

*This line tells Python that you want to use math-related functionality that already exists.*

Python already provides many useful modules, so you don’t have to reinvent common tools.

## Built-in modules

Python comes with many built-in modules that are ready to use.

These modules are, **written by Python developers**, **available by default**, **commonly used in real programs**

Let’s look at a few common built-in modules and see **what they contain**.

The `math` module provides mathematical functions and constants.

```py
import math

print(math.sqrt(16))
print(math.pi)
```

But how do we know what else the math module can do?

We can use the built-in function `dir()` to inspect it.

```py
import math
print(dir(math))
```

This prints a list of **all attributes and functions** inside the module.

We can also use the built-in function `help()` to see **instructions and documentation**. It explains **what the module does, what its functions mean**, and **what arguments they accept**.

```py
import math

print(math.sqrt(16))
print(math.pi)

print(help(math))
```

The `help()` output shows, a **description of the module**, available **functions** and **constants**, explanations of **parameters** and return **values**.

At this level, you don’t need to understand everything in the documentation. The important part is knowing that **Python provides built-in help**, and you can always use it to learn how something works.

There are many other built-in modules as well. When we want to **generate random values**, we can use the `random` module or when we work with **dates and time**, we use the `datetime` module.

By now, we have **practically touched built-in modules**, used them, and explored what they contain.

## What is a module?

A **module** is simply a **container for code**. Contain **functions**, **variables**, **constants**

In Python, **anything that stores reusable code is considered a module**.

In **Modules and Import Level 2**, we will learn how to **create our own modules**.

For now, it is enough to understand the **basic idea** of what a module is and why it exists.
