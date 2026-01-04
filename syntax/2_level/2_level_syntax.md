# Content of Python syntax 2 level

Literals are the constant, hard-coded values in your code, written directly in your source file.

**Numeric literals** represent numbers directly and form the backbone of arithmetic operations in Python. They come in various forms, including integers, floating-point numbers, and complex numbers.

```py
# Integer literal
integer_literal = 30

# Large integer literal
large_integer = 1_000_000

# Floating-point literal
floating_literal = 19.99

# Large floating-point literal
large_float = 1_234.56
```

**String Literals** represent any **sequence of characters** enclosed within quotes and are used to store text. They can be written using different quoting styles.

```py
# Using single quotes
regular_string1 = 'Hello'
  
# Using double quotes
regular_string2 = "Hello"

# Escape sequences: Here \n represents a newline, and \t represents a tab
escape_string = "Hello,\nWorld!\tAnd good night."

# Prefix the string with r so that escape characters are not processed
raw_string = r"C:\folder\file"

# Prefix the string with `f` to embed expressions inside using curly braces
name = "Example"
formatted_string = f"Hello, {name}"
```

**Boolean Literals** represent **truth values** in Python. There are only two Boolean literals: `True` and `False`. Commonly used in **conditional statements**, **comparisons**, and **logical operations**.

```py
# Boolean literals
boolean_true = True
boolean_false = False
```

**None Literal** represents the **absence of a value** in Python. The literal `None` is a special constant that indicates “no value” or “nothing”. Often used to initialize variables or signal that a function does not return any value.

```py
# None literal
none_literal = None
```

**List Literals** represent **ordered collections** of items in Python. They are **mutable sequences** that can store elements of various data types, and the order of the elements is preserved.

```py
# Empty list literal
empty_list = []
```

**Tuple Literals** are similar to lists but are **immutable** (their contents cannot be changed after creation).

```py
# An empty tuple
empty_tuple = ()
```

**Dictionary Literals** represent **key-value pairs** `{'key': 'value'}` in Python. Dictionaries are **mutable** and allow you to organize data by associating each key with a corresponding value.

```py
# An empty dictionary
empty_dict = {}

# A dictionary literal
dict_literal = {"key1": "value1", "key2": 42, "key3": True}

# Dictionary with various data types as values
mixed_dict = {
    "name": "Example",
    "age": 30,
    "is_member": True,
    "balance": 99.95
}

# Nested dictionary literal
nested_dict = {
    "user": {
        "id": 1,
        "username": "Example"
    },
    "settings": {
        "theme": "dark",
        "notifications": True
    }
}
```

**Set Literals** represent **unordered collections** of unique items in Python. They allow you to store values without any specific order, and **duplicate elements** are **automatically removed**.

```py
# A set literal with numeric values
number_set = {1, 2, 3}

# A set literal with string values
string_set = {"apple", "banana", "cherry"}

# A set literal with mixed data types
mixed_set = {1, "apple", True}
```
