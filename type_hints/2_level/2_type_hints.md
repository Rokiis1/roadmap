# Content of Python Type Hints Level 2

- [Any type](#any-type)
- [Type aliases](#type-aliases)
- [Collection typing patterns](#collection-typing-patterns)
- [Generic types](#generic-types)
- [Custom generic classes](#custom-generic-classes)
- [Callable types](#callable-types)
- [Literal types](#literal-types)
- [TypedDict](#typeddict)
- [Static type checking](#static-type-checking)

In the previous **Type Hints Level 1**, type hints were introduced as a way to describe the expected types of variables, function parameters, return values and common collection types.

That level focused on the basic purpose of type hints.

They improve readability, make developer intent explicit and allow tools to detect certain mistakes before the code is executed.

However, once the basic syntax is understood, a new set of questions appears.

In real code, types are not always written out explicitly.

Sometimes Python can determine them automatically. Sometimes values may need to follow more specific rules. In other cases, types must be reused, combined, narrowed or made flexible enough to describe more complex structures.

This is where the second level begins.

Instead of focusing only on how to write type hints, this level focuses on how typed code behaves in more realistic situations.

It introduces ideas such as inference, reusable type definitions, more expressive collection patterns, callable signatures, literal constraints and stronger static analysis.

These topics make type hints more practical and more useful in larger codebases.

## Any type

The `Any` type disables static type checking for a value. When a variable is annotated with `Any`, static analysis tools assume that any operation on that value is valid.

```py
from typing import Any

data: Any = get_external_data()
```

In this example, `data` can hold a value of any type. Static analysis tools do not attempt to verify how `data` is used and no type errors are reported regardless of the operations performed on it.

At runtime, `Any` has no special behavior. Python treats the value exactly the same as any other variable.

```py
data = 10
data = "text"
data = [1, 2, 3]
```

All of these assignments are valid at runtime and static analysis tools also accept them because the variable is annotated as `Any`.

The effect of `Any` becomes clearer when it is used in function parameters.

```py
def process(value: Any) -> None:
    print(value.upper())
```

Static analysis tools do not report an error here, even though calling `.upper()` is only valid for certain types. If a value without an `upper` method is passed at runtime, the error appears only when the code executes.

Because of this behavior, `Any` should be used carefully. It is most appropriate at system boundaries, where data enters the program from external sources such as APIs, files, environment variables or user input.

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

Type aliases therefore improve clarity, reduce duplication and make type annotations easier to maintain, while Python continues to run dynamically.

## Collection typing patterns

Collection typing patterns describe how to annotate collections when their structure becomes more complex than simple lists or dictionaries.

In **Type Hints Level 1**, collections were annotated using straightforward forms such as `list[int]` or `dict[str, float]`. These describe a single level of structure.

```py
numbers: list[int] = [1, 2, 3]
prices: dict[str, float] = {"apple": 1.2}
```

In practice, collections are often nested or combined. This requires more expressive type annotations to clearly describe how data is organized.

For example, a list may contain other lists.

```py
matrix: list[list[int]] = [
    [1, 2, 3],
    [4, 5, 6],
]
```

Here, the annotation shows that `matrix` is a list of lists of integers.

Dictionaries can also contain collections as values.

```py
groups: dict[str, list[str]] = {
    "admins": ["Example1", "Example2"],
    "users": ["Example3"],
}
```

In this case, the dictionary maps strings to lists of strings.

Collections can be combined in different ways depending on the data structure.

```py
records: list[dict[str, int]] = [
    {"id": 1, "score": 10},
    {"id": 2, "score": 20},
]
```

This annotation describes a list where each element is a dictionary with string keys and integer values.

As structures grow more complex, annotations can become nested.

```py
data: dict[str, list[dict[str, int]]] = {
    "group1": [{"id": 1}, {"id": 2}],
}
```

While this may look more complicated, it provides a precise description of how the data is organized.

Collection typing patterns are especially useful when working with structured data from external sources such as APIs, configuration files or database queries. These sources often return nested data that must be clearly understood and validated.

It is also important to distinguish between collections that allow modification and those that do not.

For example, tuples represent fixed-size, ordered collections.

```py
point: tuple[int, int] = (10, 20)
```

Unlike lists, tuples have a fixed structure. The annotation reflects both the number of elements and their types.

Collections can also express variable length tuples.

```py
values: tuple[int, ...] = (1, 2, 3, 4)
```

Here, the annotation indicates a tuple containing any number of integers.

In all these cases, Python does not enforce the annotations at runtime.

```py
matrix.append(["invalid"])
```

This operation still succeeds at runtime, even though it violates the intended structure. Static analysis tools detect such mismatches and report them as type errors.

Collection typing patterns therefore extend basic collection annotations to more realistic data structures. They allow developers to describe nested, structured and constrained data clearly, making code easier to understand and safer to work with.

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

Generic types therefore provide flexibility without sacrificing clarity. They allow reusable code to remain type-safe, expressive and predictable, while Python continues to execute dynamically.

## Custom generic classes

Custom generic classes allow you to define classes that can operate on different types while preserving type information.

In **Type Hints Level 1**, types such as `list[int]` and `dict[str, float]` were used. These are examples of generic types provided by Python.

A generic type is a type that is parameterized by another type.

For example, a list does not have a single fixed type. Instead, it becomes more specific when a type is provided.

```py
numbers: list[int] = [1, 2, 3]
names: list[str] = ["Example1", "Example2"]
```

Both variables use the same generic type `list`, but with different type parameters.

Custom generic classes follow the same idea.

They allow you to define your own reusable structures that work with different types, while keeping type information precise.

To define a generic class, the `TypeVar` and `Generic` types from the `typing` module are used.

```py
from typing import TypeVar, Generic

T = TypeVar("T")
```

Here, `T` represents a placeholder type. It can later be replaced with any concrete type.

A class can then be defined using this type variable.

```py
class Box(Generic[T]):
    def __init__(self, value: T) -> None:
        self.value = value

    def get(self) -> T:
        return self.value
```

This class does not specify a concrete type. Instead, it works with whatever type is provided when the class is used.

```py
int_box = Box
str_box = Box[str]("hello")
```

In the first case, `T` becomes `int`. In the second case, `T` becomes `str`.

This means `int_box.value` is inferred as `int` and `str_box.value` is inferred as `str`.

The class adapts its type behavior based on how it is used.

If a value of the wrong type is provided, static analysis tools can detect the issue.

```py
int_box = Box
int_box.value = "wrong" # type checker error
```

At runtime, Python still allows this assignment, but static analysis tools report it as a type mismatch.

Custom generic classes are useful when building reusable data structures, containers or abstractions that should work with different types without losing type safety.

For example, a simple stack implementation can be written generically.

```py
class Stack(Generic[T]):
    def __init__(self) -> None:
        self.items: list[T] = []

    def push(self, item: T) -> None:
        self.items.append(item)

    def pop(self) -> T:
        return self.items.pop()
```

This allows the same class to be used with different types while preserving correct type information.

```py
stack = Stack[int]()
stack.push(1)
stack.push(2)
```

Here, the stack is explicitly typed to store integers.

Custom generic classes therefore extend the idea of generic types to user-defined structures. They allow code to remain flexible while still providing precise type information, making reusable components safer and easier to understand.

## Callable types

Callable types are used to describe functions as values. They specify the types of arguments a function accepts and the type of value it returns. This makes it possible to type functions that are passed around, stored in variables or used as parameters.

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

Callable types therefore make higher-order code safer and clearer. They document how functions are expected to behave, help static analysis tools detect mismatches and improve readability when functions are treated as data, while Python itself continues to execute dynamically.

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

## TypedDict

`TypedDict` is used to describe the structure of dictionaries with specific keys and value types.

In **Type Hints Level 1**, dictionaries were annotated using general types such as `dict[str, int]`. This describes the types of keys and values, but it does not specify which keys are expected.

```py
data: dict[str, int] = {"id": 1, "score": 10}
```

This annotation allows any string key, as long as the value is an integer. It does not enforce a fixed structure.

In many cases, dictionaries represent structured data with a known set of fields. For example, data returned from an API or a database record often has a predefined shape.

`TypedDict` allows this structure to be described explicitly.

```py
from typing import TypedDict

class User(TypedDict):
    id: int
    name: str
```

This defines a dictionary type where the key `"id"` must exist and have an integer value and the key `"name"` must exist and have a string value

A variable can then be annotated using this type.

```py
user: User = {"id": 1, "name": "Example"}
```

If a required key is missing or a value has the wrong type, static analysis tools report an error.

```py
user: User = {"id": 1} # missing "name"
```

At runtime, Python still accepts the dictionary, but type checkers detect the issue.

`TypedDict` is especially useful when working with structured data stored in dictionaries.

```py
class Product(TypedDict):
    name: str
    price: float
    in_stock: bool

product: Product = {
    "name": "Book",
    "price": 19.99,
    "in_stock": True,
}
```

This makes the expected structure of the dictionary explicit and easier to understand.

It is also possible to define optional keys by using `total=False`.

```py
class PartialUser(TypedDict, total=False):
    id: int
    name: str
```

In this case, the keys are not required, and the dictionary may contain any subset of them.

```py
user: PartialUser = {"id": 1}
```

This is useful when working with partial updates or optional fields.

`TypedDict` differs from regular classes.

It does not create a new runtime object. Instead, it describes the expected shape of a dictionary for static analysis.

```py
user = {"id": 1, "name": "Example"}
```

This is still a normal dictionary at runtime.

`TypedDict` therefore provides a way to add structure and clarity to dictionary-based data. It is especially useful when dictionaries represent records, configurations or data exchanged between systems.

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
    return "Example"
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
