# Content of Python data types 2 level

- [Collections Overview](#collections-overview)
- [Sequence Types](#sequence-types)
- [Mapping Types (Dictionary)](#mapping-types-dictionary)
- [Set Types](#set-types)
- [Collection Type Casting](#collection-type-casting)
- [len() Function](#len-function)

In the previous Level 1, we covered the basics of data types and discussed their differences. We examined simple data types such as **strings**, **numbers**, **booleans**, and **None**.

Let's move on to collections.

## Collections Overview

Collections allow you to group multiple items into a single container. Imagine a container like a box where you can store different objects, each one may be distinct, yet they all reside together in one place.

In Python, collections include data types such as **strings**, **range**, **lists**, **tuples**, **sets**, **dictionaries**.

We already have a glimpse of collection types specifically **sequences** through **strings** and **range**.

Let's see how we can write a simple format for these data types. We'll start with **sequences**.

## Sequence Types

A **list** is an **ordered** and **mutable** collection that can store various data types.

Lists are commonly used when working with **collections of items that may change over time**, such as product lists, or records fetched from a database.

Here's how you can create a list.

```py
# Empty list literal
empty_list = []
```

You can check the type of this variable by writing,

```py
print(type(empty_list))
```

This should display `<class 'list'>`, indicating that your variable is of type **list**.

You can also create a list with elements of a single data type.

```py
# Single data type list literal
single_data_type_list = ["apple", "orange", "banana"]
```

This kind of list is commonly used for things like **shopping items**, **menu options**, or **tags**.

And a list that contains elements of different data types.

```py
# Multiple data type list literal
multi_data_type_list = ["Hello", 20, True]
```

A **tuple** is an **ordered** and **immutable** collection that can store various data types.

Tuples are typically used when **values belong together** and should **not change** during the program execution.

Here's how you can create a tuple.

```py
# Empty tuple literal
empty_tuple = ()
```

We can create **tuple** with single or different data types elements container and check what the length are in my container by using `len()`.

```py
# Single data type tuple literal
single_data_type_tuple = ("apple", "orange", "banana")
# Multiple data type list literal
multi_data_type_tuple = ("Hello", 20, True)
# length of the tuple
print(len(multi_data_type_tuple))
```

A common use of tuples is storing **fixed records**, such as coordinates, configuration values, or personal details where each position has a specific meaning.

*Use tuples only if you are sure that the data will not change during the execution of the program.*

And the last **sequence** type we'll discuss is `range`, which we briefly touched on in **Control Flow Level 2**.

The `range` data type is **ordered** and **immutable**, and it's most often used for looping.

The syntax for `range` is.

```py
range(start, stop, step)
```

- **start:** The starting position (optional, default is 0).
- **stop:** The ending position (mandatory).
- **step:** The increment (optional, default is 1).

For example, if you want to generate a range of numbers up to a specified interval, you can write.

```py
element_length = range(5)
```

This will produce a sequence of numbers from `0` up to `4`, but not including, `5`.

You might be wondering why the output doesn't show every number.

This is because the `range` object represents an interval in Python, and you typically iterate over it to see each number.

Additionally, you can define a specific range by providing both a start and stop value

```py
element_length = range(1, 5)
```

You can also specify the step parameter to control the increment

```py
element_length = range(1, 5, 2)
```

In programs, `range` is often used to represent positions, iterations, or controlled numeric sequences, without storing unnecessary **data in memory**.

## Mapping Types (Dictionary)

There are also **mapping** types. Mapping types are **mutable** and store data as **key–value pairs**.

Unlike sequences (**lists**, **tuples**, **strings**), dictionaries are not accessed by position. Instead, values are retrieved using a `key`, which acts as a unique identifier for the data.

Dictionaries are commonly used when data has **labels**, **names**, such as **configuration settings**, **user profiles**.

Dictionaries are represented using curly braces `{}`.

```py
dict_element = {}
```

And there is simple example of `dict`.

```py
example_dict = {
    "name": "Example",
    "age": 30,
    "is_member": True,
    "balance": 99.95
}
```

*Remember that the keys in a dictionary must be **unique**.*

## Set Types

And finally, our last collection type is **sets**. Sets are **non-indexed** collections that store **unique elements**. If duplicate values are provided, only one instance of each element is kept.

Typical use cases include **filtering duplicates**, **tracking** **unique values**, or **omparing groups of data**.

Python provides both **mutable sets** (created using `set`) and **immutable sets** (created using `frozenset`).

The syntax for writing a mutable set in Python uses `set()`.

```py
element_set = set()
```

For example, consider the following set.

```py
example_set = {1, 2, 3, 3, 2, 4}
print(example_set) # Output: {1, 2, 3, 4}
```

*Duplicates are automatically removed, leaving only one instance of each element.*

Also, we have **frozenset**, which is an immutable version of a set. Unlike mutable sets that are created using literal curly braces `{}`.

Frozensets are created using the built-in function `frozenset()`.

```py
frozen_set_element = frozenset({1, 2, 3, 3, 2, 4})
print(frozen_set_element) # Output: frozenset({1, 2, 3, 4})
```

*In this example, duplicates are automatically removed, similar to a mutable set, but the resulting frozenset cannot be modified.*

We touched `frozenset()` built-in function, but there is more those build in functions `list()`, `tuple()`, `set()`, `dict()` so there is what we can do in **Data Types Level 1** we have touch type casting with basic data types

## Collection Type Casting

Let's see how we can writte when we use collection type casting

The syntax is.

```py
# Create an empty list
list([])

# Create an empty tuple
tuple(())

# Create an empty set
set([])

# Create an empty dictionary
dict({})
```

So if we convert a string into a list of characters

For example, consider the following.

```py
string = "apple"
new_list = list(string)
```

*After printing `new_list`, you should see: `['a', 'p', 'p', 'l', 'e']`, which means each character of the string is used as an individual element.*

And you can convert a list into a tuple.

```py
numbers = [1, 2, 3]
new_tuple = tuple(numbers)
print(new_tuple) # Output: (1, 2, 3)
```

We discussed in **Syntax Level 1** that you can use the built-in function `len()` to determine the number of elements in a container.

## len() Function

Most of the time, we use the `len()` function on these collection data types **lists**, **dictionaries**, and **strings** because they are commonly used for managing a list of items, validating input, or storing configuration data.

```py
# List
my_list = [1, 2, 3, 4]
print(len(my_list))
# Dictionary
my_dict = {"name": "Test", "age": 30, "city": "New York"}
print(len(my_dict))
# String
my_string = "Hello"
print(len(my_string))
```

While you can use `len()` with various collection data types, it's most commonly applied to **lists**, **dictionaries**, and **strings**.
