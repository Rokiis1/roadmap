# Content of Python Type Hints Level 1

- [Introduction to type hints](#introduction-to-type-hints)
- [Why type hints exist in Python](#why-type-hints-exist-in-python)
- [Function annotations](#function-annotations)
- [Variable annotations](#variable-annotations)
- [Basic data types](#basic-data-types)
- [Collection types](#collection-types)
- [Optional types](#optional-types)
- [Union types](#union-types)

Python type hints were introduced in **PEP 484** to bring some of the advantages of static typing into a dynamically typed language. They allow developers to describe the expected types of values without changing Pythons runtime behavior.

Type hints do not enforce type checking when the program runs. Instead, they act as structured documentation that can be analyzed by external tools. This improves code readability, makes debugging easier, and helps maintain large codebases by catching type-related mistakes before execution.

Type hints are expressed using **annotations attached to variables**, **function parameters** and **return values**. These annotations are optional and do not affect how Python executes the program.

## Introduction to type hints

A type hint is an annotation that describes the expected type of a value. It is written using the same syntax as variable assignment and function definitions, but it carries no runtime enforcement.

Python remains dynamically typed even when type hints are present. The interpreter does not block assignments or function calls based on annotations.

The following example shows a function with type hints and how Python executes it regardless of the provided types.

```py
def repeat(text: str, count: int) -> str:
    return text * count
```

When the function is called with the expected types, it behaves as intended.

```py
result = repeat("hi", 3)
print(result)
```

This produces a string result.

```py
hihihi
```

If the function is called with values that do not match the annotations, Python still runs the code.

```py
result = repeat(5, 2)
print(result)
```

In this case, the operation is still valid at runtime because Python allows integer multiplication. The type hints are ignored by the interpreter, even though a static type checker would report this as a type mismatch.

This example demonstrates that type hints describe intent rather than enforce behavior. They communicate how code is expected to be used and allow tools to detect incorrect usage, while Python itself continues to execute code dynamically.

## Why type hints exist in Python

Dynamic typing provides flexibility, but it also allows certain errors to appear only at runtime. Type hints exist to reduce this risk by making developer intent explicit and by making code behavior easier to read, without executing it.

By describing expected types, type hints **enable static analysis tools** to detect mismatches early. They also serve as precise **documentation for anyone reading or maintaining the code**.

Type hints are especially important when building **public-facing APIs** and **shared libraries**. In frameworks such as **FastAPI**, type hints are not only used for static analysis but also to **generate request validation**, **response schemas**, and **interactive documentation automatically**.

When an API function is annotated with types, those annotations become part of the **public contract**. They clearly define what inputs are accepted and what outputs are produced. This makes APIs easier to use correctly, easier to document.

At the same time, type hints are not mandatory and are not always required. In **small programs**, **automation scripts**, and **short-lived tools**, the overhead of writing and maintaining detailed type annotations may outweigh their benefits. In these cases, clear naming and simple logic are often sufficient.

Type hints are most effective when applied where **clarity**, **correctness**, and **long-term maintenance matter**. Used selectively, they act as both a **development tool** and a **communication mechanism**, while still preserving Pythons dynamic nature.

## Function annotations

Function annotations describe the expected types of parameters and the value returned by a function. They explain how a function is intended to be used and what kind of result it produces.

```py
def add(a: int, b: int) -> int:
    return a + b
```

In this function, `a` and `b` are expected to be integers, and the function is expected to return an integer. The return annotation `-> int` describes the type of value produced by the `return` statement.

When a function returns a value, the return annotation should describe that value.

```py
result = add(2, 3)
print(type(result))
```

The result is an integer, matching the annotation.

In Python, functions that do not explicitly return a value still return something. That value is always `None`.

```py
def log_message(message: str) -> None:
    print(message)
```

This function performs an action but does not return a meaningful value. The return annotation `-> None` explicitly communicates that the function is not intended to return data.

Calling the function shows this behavior clearly.

```py
result = log_message("Hello")
print(result)
print(type(result))
```

The output shows that the function returns `None`, even though it executed successfully.

In other programming languages, functions that return nothing are often called void functions. In Python, there is no `void` keyword. Instead, `None` is used to represent the absence of a return value, and `-> None` is used in type hints to express this intent.

The built-in `print` function follows this same pattern.

```py
value = print("Hello world")
print(value)
print(type(value))
```

Even though `print` produces output on the screen, it returns `None`. This makes it clear that its purpose is side effects, not returning data.

The same idea applies to methods inside classes.

```py
class Counter:
    def __init__(self) -> None:
        self.count = 0

    def increment(self) -> None:
        self.count += 1

    def value(self) -> int:
        return self.count
```

In this class, the constructor and the `increment` method perform actions and return `None`. The `value` method returns an integer. The annotations make these roles clear without reading the implementation.

Function and method annotations therefore serve as a contract. They communicate which functions return data, which functions perform actions, and what types are involved.

Even when no value is returned explicitly, Python always returns `None`, and type hints should reflect that behavior.

## Variable annotations

Variable annotations describe the expected type of a variable. They communicate what kind of value a variable is intended to hold, but they do not restrict assignment at runtime.

```py
name: str = "Example"
count: int = 10
```

In these examples, the annotations indicate that `name` is expected to hold a string and `count` is expected to hold an integer. Python stores the values normally and does not enforce the annotations.

The behavior becomes clearer when values are reassigned.

```py
count = 20
print(type(count))
```

The reassignment matches the annotation and behaves as expected.

If a value of a different type is assigned, Python still executes the code.

```py
count = "twenty"
print(count)
print(type(count))
```

At runtime, the variable now holds a string. The annotation is ignored by the interpreter, even though the value no longer matches the intended type.

Static analysis tools detect this mismatch and report it as a type error. This allows the problem to be caught early, without waiting for runtime failures.

Variable annotations are especially useful when variables are initialized with values that do not clearly indicate their intended type.

```py
total: float
total = 0
```

Here, the annotation makes it clear that `total` is intended to store floating-point values, even though the initial assignment is an integer.

Variable annotations are also commonly used for attributes inside classes.

```py
class User:
    def __init__(self, name: str) -> None:
        self.name: str = name
        self.age: int = 0
```

In this example, the annotations document the expected types of the instance attributes. Tools can use this information to verify assignments and detect incorrect usage across methods.

Variable annotations therefore serve as a form of documentation and static validation. They make code easier to understand, help tools track how values flow through the program, and reduce ambiguity in larger codebases, while Python continues to run dynamically.

## Basic data types

Type hints can describe Pythons built-in data types such as integers, floating-point numbers, strings, and booleans.

```py
age: int = 30
price: float = 19.99
title: str = "Book"
is_active: bool = True
```

These annotations express intent and help ensure consistent usage.

## Collection types

Collection type annotations describe both the container type and the types of values stored inside the container. They make it clear not only that a value is a collection, but also what kind of elements the collection is expected to hold.

```py
numbers: list[int] = [1, 2, 3]
prices: dict[str, float] = {"apple": 1.2}
```

This uses the modern built-in generic syntax (`list[int]`, `dict[str, float]`).

In older code, these types may be written using the typing module, such as `List[int]` or `Dict[str, float]`.

In these examples, `numbers` is expected to be a list containing integers, and `prices` is expected to be a dictionary where keys are strings and values are floating-point numbers. Python stores and executes these values normally without enforcing the annotations.

When values added to the collection match the annotation, behavior is straightforward.

```py
numbers.append(4)
prices["banana"] = 0.8
```

If values of an unexpected type are added, Python still allows the operation at runtime.

```py
numbers.append("five")
prices[10] = "cheap"
```

At runtime, these operations succeed because Python does not enforce collection annotations. However, the collections now contain values that do not match the intended structure.

Static analysis tools detect these mismatches and report them as type errors. This helps identify incorrect usage early, especially when collections are modified in multiple places throughout a codebase.

Collection annotations are particularly useful when collections are initially empty.

```py
scores: list[int] = []
```

Without the annotation, it would be unclear what type of values `scores` is meant to store. The annotation communicates intent even before any values are added.

The same principle applies to collections used as class attributes.

```py
class Inventory:
    def __init__(self) -> None:
        self.items: list[str] = []
        self.prices: dict[str, float] = {}
```

Here, the annotations describe the expected structure of the collections stored on the object. Tools can use this information to verify assignments and detect incorrect mutations across methods.

Collection type annotations therefore improve readability, reduce ambiguity, and help static analysis tools track how structured data flows through a program, while Python itself continues to operate dynamically.

## Optional types

Optional types are used when a value is allowed to be missing. They indicate that a variable or parameter can hold either a specific type or `None`.

This uses the modern union syntax (`|`). The same idea can also be written using `Optional` from the `typing` module.

```py
nickname: str | None = None
```

Equivalent using `typing.Optional`.

```py
from typing import Optional

nickname: Optional[str] = None
```

In this example, the annotation states that `nickname` is expected to be either a string or `None`. This makes it explicit that the absence of a value is a valid and expected state, not an error.

Optional types are especially useful when working with data that may or may not be provided, such as user input, configuration values, or optional fields in request data.

```py
def greet(name: str, nickname: str | None) -> str:
    if nickname is None:But I
        return f"Hello, {name}"
    return f"Hello, {nickname}"
```

Here, the function explicitly handles the case where `nickname` is missing. The annotation communicates that callers are allowed to pass `None`, and the function logic reflects that expectation.

At runtime, Python does not enforce the annotation.

```py
nickname = "Example"
nickname = None
nickname = 123
```

All of these assignments are allowed at runtime, even though the last one does not match the intended type. Static analysis tools detect this mismatch and report it as a type error.

Optional types are also important for return values. A function may return a value in some cases and `None` in others.

```py
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return "Example"
    return None
```

Optional types therefore make absence explicit. They force developers to acknowledge and handle missing values intentionally, improving clarity and robustness while Python continues to run dynamically.

## Union types

Union types describe values that are allowed to be one of several different types. They make mixed-type behavior explicit by clearly listing all accepted types.

This also uses the modern union syntax (`|`). The same idea can be written using `Union` from the `typing` module.

```py
value: int | str = "42"
```

Equivalent using `typing.Union`.

```py
from typing import Union

value: Union[int, str] = "42"
```

In this example, the annotation states that `value` is expected to be either an integer or a string. Both assignments are valid according to the annotation, and the intent is clearly communicated to readers and tools.

Union types are commonly used when a value can legitimately appear in different forms depending on context.

```py
def normalize_id(value: int | str) -> str:
    return str(value)
```

Here, the function accepts either an integer or a string. The annotation makes it clear that both input forms are supported and intentionally handled.

At runtime, Python does not enforce union annotations.

```py
value = 10
value = "ten"
value = 10.5
```

All of these assignments execute successfully, even though the last assignment does not match the intended types. Static analysis tools detect this mismatch and report it as a type error.

Union types are often used together with conditional logic to handle different behaviors based on the actual type.

```py
def double(value: int | str) -> int | str:
    if isinstance(value, int):
        return value * 2
    return value * 2
```

In this example, the function handles both possible types explicitly. Static analysis tools understand this pattern and can verify that all declared cases are covered.

Union types are especially useful at boundaries where data originates from external sources such as APIs, configuration files or user input. They allow flexibility while still documenting and constraining the acceptable shapes of values in a clear and explicit way.
