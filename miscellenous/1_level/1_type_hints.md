# Content of Python Type Hints Level 1

- [Introduction to type hints](#introduction-to-type-hints)
- [Why type hints exist in Python](#why-type-hints-exist-in-python)
- [Function annotations](#function-annotations)
- [Variable annotations](#variable-annotations)
- [Basic data types](#basic-data-types)
- [Collection types](#collection-types)
- [Optional types](#optional-types)
- [Union types](#union-types)
- [Any type](#any-type)
- [Type aliases](#type-aliases)
- [Generic types](#generic-types)
- [Callable types](#callable-types)
- [Literal types](#literal-types)
- [NewType](#newtype)
- [Static type checking](#static-type-checking)

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

Function annotations make this distinction explicit. They show whether a function is meant to compute and return a value, or whether it is meant to perform an action only.

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

Function and method annotations therefore serve as a contract. They communicate which functions return data, which functions perform side effects, and what types are involved, even though Python continues to execute dynamically.

## Variable annotations

Variable annotations describe the expected type of a variable. They communicate what kind of value a variable is intended to hold, but they do not restrict assignment at runtime.

```py
name: str = "Alice"
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

```py
nickname: str | None = None
```

In this example, the annotation states that `nickname` is expected to be either a string or `None`. This makes it explicit that the absence of a value is a valid and expected state, not an error.

Optional types are especially useful when working with data that may or may not be provided, such as user input, configuration values, or optional fields in request data.

```py
def greet(name: str, nickname: str | None) -> str:
    if nickname is None:
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

This annotation makes it clear that callers must be prepared to handle a missing result. Static analysis tools use this information to require explicit handling of the `None` case, reducing the risk of runtime errors.

Optional types therefore make absence explicit. They force developers to acknowledge and handle missing values intentionally, improving clarity and robustness while Python continues to run dynamically.

## Union types

Union types describe values that are allowed to be one of several different types. They make mixed-type behavior explicit by clearly listing all accepted types.

```py
value: int | str = "42"
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

Union types are especially useful at boundaries where data originates from external sources such as APIs, configuration files, or user input. They allow flexibility while still documenting and constraining the acceptable shapes of values in a clear and explicit way.

## Any type

The `Any` type disables static type checking for a value. When a variable is annotated with `Any`, static analysis tools assume that any operation on that value is valid.

```py
from typing import Any

data: Any = get_external_data()
```

In this example, `data` can hold a value of any type. Static analysis tools do not attempt to verify how `data` is used, and no type errors are reported regardless of the operations performed on it.

At runtime, `Any` has no special behavior. Python treats the value exactly the same as any other variable.

```py
data = 10
data = "text"
data = [1, 2, 3]
```

All of these assignments are valid at runtime, and static analysis tools also accept them because the variable is annotated as `Any`.

The effect of `Any` becomes clearer when it is used in function parameters.

```py
def process(value: Any) -> None:
    print(value.upper())
```

Static analysis tools do not report an error here, even though calling `.upper()` is only valid for certain types. If a value without an `upper` method is passed at runtime, the error appears only when the code executes.

Because of this behavior, `Any` should be used carefully. It is most appropriate at system boundaries, where data enters the program from external sources such as APIs, files, environment variables, or user input.

```py
def load_config() -> dict[str, Any]:
    return read_config_file()
```

Here, `Any` allows the program to accept loosely structured data while still providing some typing information for the overall structure.

Excessive use of `Any` reduces the effectiveness of static type checking. When `Any` spreads through a codebase, type information is lost and fewer errors can be detected before runtime.

The general goal is to confine `Any` to narrow boundaries and convert values into more specific types as soon as possible. This preserves flexibility at entry points while maintaining strong guarantees within the core logic of the application.

## Type aliases

Type aliases allow complex or frequently used types to be given meaningful names. They do not create new types at runtime, but they improve readability by making type intent explicit.

```py
UserId = int
UserName = str
```

In these examples, `UserId` and `UserName` are aliases for existing types. Python treats them exactly the same as `int` and `str` at runtime, but static analysis tools and readers see them as descriptive labels.

Type aliases are especially useful when the same type appears repeatedly throughout a codebase.

```py
def get_user_name(user_id: UserId) -> UserName:
    return "Alice"
```

Here, the function signature becomes more expressive. Even though both aliases resolve to built-in types, the annotations communicate the role of each value rather than just its underlying type.

At runtime, aliases have no special behavior.

```py
user_id: UserId = 10
print(type(user_id))
```

The value is still an integer. Python does not distinguish between `UserId` and `int` during execution.

Type aliases are commonly used to simplify complex types.

```py
UserRecord = dict[str, str | int]
```

Without the alias, this type would need to be repeated everywhere it is used. The alias provides a single name that describes the structure more clearly.

Aliases are also useful when working with APIs or data models, where the same shape appears across multiple functions or modules. If the underlying structure changes, only the alias definition needs to be updated, rather than every usage.

Type aliases therefore improve clarity, reduce duplication, and make type annotations easier to maintain, while Python continues to run dynamically.

## Generic types

Generic types allow code to work with many different types while still preserving type relationships. Instead of locking a function or class to a single concrete type, generics describe how types relate to each other.

```py
def first_item[T](items: list[T]) -> T:
    return items[0]
```

In this example, `T` represents a placeholder type. It does not refer to a specific concrete type such as `int` or `str`. Instead, it stands for whatever type the list contains.

When the function is called, the type of `T` is inferred from the argument.

```py
result_int = first_item([1, 2, 3])
result_str = first_item(["a", "b", "c"])
```

In the first call, `T` becomes `int`, so the return type is `int`. In the second call, `T` becomes `str`, so the return type is `str`. The same function adapts to different input types while maintaining correctness.

At runtime, Python does not enforce generic constraints.

```py
value = first_item([1, "two", 3])
```

This code executes successfully, even though the list contains mixed types. Static analysis tools detect this as a type error because the list does not match the expected `list[T]` structure.

Generics are especially useful when the return type depends directly on the input type. Without generics, this relationship would be lost.

```py
def first_item(items: list) -> object:
    return items[0]
```

In this version, the return type is too vague. Callers lose information about what type is returned. Generics preserve this information and make code safer to use.

The same idea applies to classes.

```py
class Box[T]:
    def __init__(self, value: T) -> None:
        self.value = value

    def get(self) -> T:
        return self.value
```

Here, the `Box` class can hold any type, but each instance is consistent. A `Box[int]` always returns an integer, and a `Box[str]` always returns a string.

Generic types therefore provide flexibility without sacrificing clarity. They allow reusable code to remain type-safe, expressive, and predictable, while Python continues to execute dynamically.

## Callable types

Callable types are used to describe functions as values. They specify the types of arguments a function accepts and the type of value it returns. This makes it possible to type functions that are passed around, stored in variables, or used as parameters.

```py
from typing import Callable

Operation = Callable[[int, int], int]
```

In this example, `Operation` describes any function that takes two integers as arguments and returns an integer. The name does not refer to a specific function, but to a shape that functions must match.

Functions that follow this signature can be assigned to variables annotated with this type.

```py
def add(a: int, b: int) -> int:
    return a + b

def multiply(a: int, b: int) -> int:
    return a * b

operation: Operation = add
```

Here, both `add` and `multiply` match the `Operation` type. The annotation makes it clear what kind of callable is expected.

Callable types are especially useful when functions are passed as arguments.

```py
def apply_operation(x: int, y: int, op: Operation) -> int:
    return op(x, y)
```

The annotation on `op` communicates that the function must accept two integers and return an integer. This makes the function contract explicit and easy to understand.

At runtime, Python does not enforce callable annotations.

```py
def wrong_op(a: str, b: str) -> str:
    return a + b

result = apply_operation(1, 2, wrong_op)
```

This code executes at runtime, but static analysis tools report a type error because `wrong_op` does not match the expected callable signature.

Callable types are also useful when functions are stored in collections or configuration structures.

```py
operations: dict[str, Operation] = {
    "add": add,
    "multiply": multiply,
}
```

Here, the annotation ensures that all values in the dictionary follow the same callable interface.

Callable types therefore make higher-order code safer and clearer. They document how functions are expected to behave, help static analysis tools detect mismatches, and improve readability when functions are treated as data, while Python itself continues to execute dynamically.

## Literal types

Literal types restrict a value to a fixed set of specific constants. Instead of describing a general type such as `str` or `int`, literal annotations describe exactly which values are allowed.

```py
from typing import Literal

status: Literal["open", "closed"] = "open"
```

In this example, the annotation states that `status` may only ever be the string `"open"` or `"closed"`. Other string values are not considered valid according to the type definition.

Literal types are useful when a variable represents a limited set of states or modes.

```py
def set_status(status: Literal["open", "closed"]) -> None:
    print(f"Status set to {status}")
```

The function annotation clearly communicates which values are acceptable. Callers know immediately which inputs are valid without reading the function implementation.

At runtime, Python does not enforce literal annotations.

```py
status = "open"
status = "closed"
status = "pending"
```

All of these assignments execute successfully at runtime, even though `"pending"` does not match the declared literal values. Static analysis tools detect this mismatch and report it as a type error.

Literal types are especially useful when combined with conditional logic.

```py
def handle_status(status: Literal["open", "closed"]) -> str:
    if status == "open":
        return "The system is active"
    return "The system is inactive"
```

Because the possible values are explicitly listed, static analysis tools understand that all cases are handled. This reduces the risk of missing branches and makes the code easier to reason about.

Literal types are commonly used in APIs, configuration values, and protocol definitions, where only a small, predefined set of values is allowed. They provide stronger guarantees than plain strings or integers while remaining simple and readable.

Literal types therefore improve correctness and clarity by turning implicit assumptions about valid values into explicit, machine-checkable rules, while Python itself continues to execute dynamically.

## NewType

`NewType` allows the creation of logically distinct types that are based on existing ones. It is used when two values share the same runtime type but represent different concepts and should not be mixed accidentally.

```py
from typing import NewType

UserId = NewType("UserId", int)
```

In this example, `UserId` is defined as a new type that is based on `int`. At runtime, a `UserId` is still an integer, and Python treats it exactly like an `int`.

```py
user_id = UserId(10)
print(type(user_id))
```

The printed type is still `int`. Python does not create a new runtime class.

The difference appears during static type checking. Type checkers treat `UserId` as a distinct type that is not interchangeable with `int`.

```py
def get_user(user_id: UserId) -> str:
    return "Alice"
```

This function explicitly requires a `UserId`. Passing a plain integer is considered a type error by static analysis tools.

```py
get_user(10)
```

Even though this call works at runtime, type checkers report it as invalid because `10` is an `int`, not a `UserId`.

To pass a value correctly, it must be explicitly wrapped.

```py
get_user(UserId(10))
```

This makes the conversion intentional and visible in the code.

`NewType` is especially useful when multiple identifiers share the same underlying type but represent different meanings.

```py
ProductId = NewType("ProductId", int)

def load_product(product_id: ProductId) -> None:
    ...
```

Here, `UserId` and `ProductId` are both integers at runtime, but static analysis tools prevent them from being mixed accidentally. This reduces subtle bugs caused by passing the wrong identifier to a function.

Unlike type aliases, `NewType` creates a new logical type rather than a simple name. Type aliases improve readability, while `NewType` improves correctness by enforcing stronger separation during static checking.

`NewType` therefore provides an extra layer of safety without changing runtime behavior. It allows developers to model domain concepts more precisely while keeping Python code efficient and dynamic.

To make use of the information provided by type annotations, an additional step is required. This step is **static type checking**, where tools analyze annotated code and verify that values are used consistently with their declared types before the program is run.

## Static type checking

Type hints become effective when they are used together with static analysis tools such as **mypy** or **pyright**. These tools analyze Python code without executing it and report type mismatches, incompatible assignments, and unsafe operations based on declared annotations.

Static type checking does not change Python’s runtime behavior. Code continues to execute dynamically, and no checks are enforced while the program is running. Instead, static checking acts as an early verification step that helps identify entire categories of errors before execution.

One commonly used tool for static type checking is **mypy**. It must be installed separately, usually into the same environment as the project.

```bash
pip install mypy
```

When a project is managed using Poetry, mypy is typically added as a development dependency so it is available only during development.

```bash
poetry add --group dev mypy
```

After installation, mypy can be executed directly or through Poetry to ensure the correct virtual environment is used.

```bash
mypy main.py
```

```bash
poetry run mypy .
```

Mypy analyzes the specified files or directories and reports issues using file names, line numbers, and short descriptions. If no problems are found, the analysis completes without errors.

Static type checking behavior can be configured using the project’s `pyproject.toml` file. A minimal configuration looks like this.

```toml
[tool.mypy]
python_version = "3.12"
ignore_missing_imports = true
```

The `ignore_missing_imports` option controls how mypy handles external libraries that do not provide type information. Many third-party packages do not include type hints or do not declare them properly. When this option is enabled, mypy suppresses errors related to those imports and treats their types as unknown, allowing analysis to continue.

This setting is commonly used to reduce noise during development and to focus type checking on the project’s own code rather than on external dependencies. As a project matures, this option can be disabled or replaced with more selective rules.

Stricter checking can be enabled by adding the `strict` option to the configuration.

```toml
[tool.mypy]
python_version = "3.12"
ignore_missing_imports = true
strict = true
```

Static type checking does not replace runtime testing or validation. Instead, it complements them by reducing the likelihood of type-related errors and improving confidence when refactoring or extending code over time.
