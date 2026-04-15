# Content of Python Type Hints Level 3

- [Protocols (Structural Subtyping)](#protocols-structural-subtyping)
- [Abstract Base Classes vs Protocols](#abstract-base-classes-vs-protocols)
- [Advanced TypeVar (Bounds and Constraints)](#advanced-typevar-bounds-and-constraints)
- [ParamSpec](#paramspec)
- [TypeVarTuple (Variadic Generics)](#typevartuple-variadic-generics)
- [Self Type](#self-type)
- [Overload](#overload)
- [Advanced Type Narrowing](#advanced-type-narrowing)
- [Forward References and Circular Types](#forward-references-and-circular-types)
- [Annotated Types](#annotated-types)
- [TypedDict Advanced Usage](#typeddict-advanced-usage)
- [Dataclasses and Type Hinting](#dataclasses-and-type-hinting)
- [TYPE_CHECKING and Conditional Imports](#type_checking-and-conditional-imports)
- [Stub Files (`.pyi`)](#stub-files-pyi)
- [Strict Type Checking Configuration](#strict-type-checking-configuration)
- [Designing Typed APIs](#designing-typed-apis)
- [Common Advanced Pitfalls](#common-advanced-pitfalls)

In the previous levels, type hints were introduced as a way to describe values, structure data and define reusable and flexible types.

In the previous levels, type hints were introduced as a way to describe values, structure data and define reusable and flexible types. This included annotating variables, functions and collections, as well as working with more expressive typing tools to model structured data, define function behavior and improve static analysis. Together, these concepts established how type hints can be used to make code more readable, predictable and easier to maintain.

However,  applications often require more than just describing values and structures.

As codebases grow, types begin to play a role in how systems are designed. Different parts of an application must interact safely, abstractions must remain flexible and type definitions must adapt to more complex patterns.

This is where the third level begins.

Instead of focusing only on writing type hints, this level focuses on how types behave in larger systems and how they can be used to model real-world architectures.

It introduces concepts such as structural typing, advanced generics, function overloading, forward references and integration with tools and frameworks.

These topics allow types to move beyond simple annotations and become part of how software is designed and maintained.

To understand how types can describe behavior and not just structure, we begin with a concept that changes how compatibility between types is defined.

## Protocols (Structural Subtyping)

In previous levels, types were used to describe the shape of data and the structure of values. These types defined what a variable contains or what a function returns.

However, in applications, it is often more important to describe what an object can do rather than what it is.

For example, different objects may implement the same behavior without sharing a common base class. In such cases, requiring inheritance is too restrictive.

Protocols solve this problem.

A **protocol** defines a set of methods and attributes that a type must have, without requiring explicit inheritance. This approach is known as **structural subtyping**.

Instead of checking whether a type inherits from a specific class, structural typing checks whether the required structure is present.

For example, consider objects that can be saved.

```py
class File:
    def save(self) -> None:
        print("Saving file")

class Database:
    def save(self) -> None:
        print("Saving to database")
```

These two classes are unrelated, but they both implement a save method.

A protocol can describe this shared behavior.

```py
from typing import Protocol

class Savable(Protocol):
    def save(self) -> None:
        pass
```

Any object that has a `save` method matching this signature is considered compatible with the protocol.

```py
def persist(item: Savable) -> None:
    item.save()
```

This function accepts both `File` and `Database`, even though they do not inherit from a common base class.

```py
persist(File())
persist(Database())
```

Static analysis tools verify that the provided object matches the required structure.

If a type does not implement the expected method, it is reported as an error.

```py
class Logger:
    def log(self) -> None:
        print("Logging")

persist(Logger()) # type checker error
```

At runtime, Python still executes the code dynamically, but static analysis tools enforce that the required structure is present.

Protocols therefore shift the focus from inheritance to behavior.

They allow types to be compatible based on what they implement, not what they inherit from. This makes code more flexible and easier to extend, especially in larger systems where strict class hierarchies are not always practical.

This raises an important question.

If protocols allow types to be defined by behavior instead of inheritance, how do they compare to traditional approaches that rely on explicit class hierarchies?

To understand this difference, we now look at how protocols relate to abstract base classes and when each approach should be used.

## Abstract Base Classes vs Protocols

Protocols define behavior based on structure. They allow types to be compatible if they implement the required methods and attributes, without needing to inherit from a specific class.

However, this is not the only way to define shared behavior in Python.

Another common approach is using **abstract base classes** (ABCs).

Abstract base classes define a common interface through inheritance. A class must explicitly inherit from an abstract base class and implement its abstract methods to be considered compatible.

```py
from abc import ABC, abstractmethod

class Savable(ABC):
    @abstractmethod
    def save(self) -> None:
        pass
```

Any class that inherits from `Savable` must implement the `save` method.

```py
class File(Savable):
    def save(self) -> None:
        print("Saving file")
```

If a class does not implement the required method, it cannot be instantiated.

```py
class Database(Savable):
    pass

db = Database() # runtime error
```

Abstract base classes therefore enforce structure through inheritance and runtime checks.

Protocols work differently.

They do not require inheritance and do not enforce behavior at runtime. Instead, they rely on static analysis to verify that a type matches the expected structure.

```py
from typing import Protocol

class Savable(Protocol):
    def save(self) -> None:
        pass
```

Any class with a compatible `save` method satisfies this protocol, even without explicit inheritance.

```py
class File:
    def save(self) -> None:
        print("Saving file")
```

This makes protocols more flexible.

The key difference can be summarized as follows **Abstract base classes** require explicit inheritance and enforce behavior at runtime and **Protocols** rely on structure and are checked by static analysis tools.

Each approach is useful in different situations.

Abstract base classes are appropriate when you want to enforce a strict contract and control class hierarchies. They are often used when building frameworks or defining core application interfaces.

Protocols are more suitable when flexibility is important and when types should be compatible based on behavior alone. They are especially useful when working with independent components or external libraries.

In practice, both approaches can be used together. Abstract base classes define explicit relationships, while protocols provide flexible compatibility based on structure.

## Advanced TypeVar (Bounds and Constraints)

## ParamSpec

## TypeVarTuple (Variadic Generics)

