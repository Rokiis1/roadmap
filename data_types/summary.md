# Content of Python data types summary

- [Data Types Level 1](data-types-level-1)
- [Data Types Level 2](data-types-level-2)
- [Data Types Level 3](data-types-level-3)

## Data Types Level 1

### Summary Data Types Level 1

In this level, we learned the fundamentals of **Python data types**. Data types define **what kind of value** a variable can store and **how that value behaves** in a program.

We started by exploring the difference between **mutable** and **immutable** data types. Mutable types, such as lists, dictionaries, and sets, can be modified **in place**, while immutable types, such as numbers, strings, booleans, and `None`, cannot be changed once they are created.

Next, we discussed **ordered** and **non-indexed** data types. Ordered types, like lists, tuples, and strings, allow elements to be accessed using **indexes**, while non-indexed types, such as sets and dictionaries, do not use numeric positions to access their data.

We then examined the most common **built-in data types**, including numbers (`int` and `float`), text (`str`), boolean values (`True` and `False`), and the special `None` value, which represents the absence of data.

Finally, we learned about **type casting**, which allows us to convert values from one data type to another using built-in constructors like `int()`, `float()`, `str()`, and `bool()`. This helps us work more flexibly with different kinds of data in Python.

## Data Types Level 2

### Summary Data Types Level 2

In this level, we focused on **collection data types** in Python. Collections allow us to group multiple values into a single container, making it easier to store, organize, and work with related data.

We began by introducing **sequences**, starting with **lists**, **tuples**, and **range**. We learned that lists are **ordered and mutable**, meaning their elements can be changed after creation, while tuples and ranges are **ordered but immutable**, making them useful when data should not change.

Next, we explored **mapping types**, specifically **dictionaries**. We learned that dictionaries store data as **key–value pairs** and are accessed by **keys rather than indexes**, which makes them ideal for representing structured data such as user profiles or configuration settings.

We examined **sets**, which are **non-indexed collections of unique elements**. We learned how sets automatically remove duplicate values and how Python provides both **mutable sets** (`set`) and **immutable sets** (`frozenset`).

Finally, we learned how to convert between different collection types using **collection type casting**, and how the built-in `len()` function can be used to determine the number of elements in common collection types such as lists, dictionaries, and strings.
