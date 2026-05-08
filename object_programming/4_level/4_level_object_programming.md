# Content of Python object programming 4 level

- [Advanced Inheritance](#advanced-inheritance)
- [Composition vs Inheritance](#composition-vs-inheritance)
- [Mixins](#mixins)
- [Advanced Dunder Methods](#advanced-dunder-methods)
- [Data Classes](#data-classes)
- [Enums](#enums)
- [UML Class Diagrams](#uml-class-diagrams)

In the previous levels, we explored the core ideas of object-oriented programming. We learned what classes and objects are, how attributes and methods work, how inheritance allows classes to reuse behavior, and how abstraction and polymorphism help organize larger systems.

Up to this point, most of our inheritance examples were relatively simple because a class usually inherited from only one parent class. This made the flow of attributes and methods easy to follow. However, real applications can become more complex, and sometimes a class may need to inherit behavior from multiple parent classes at the same time.

This gives us more flexibility, but it also introduces new challenges. For example, what happens if two parent classes contain methods with the same name. Which method should Python use first. What happens when multiple classes share the same parent class. And how does `super()` behave when inheritance becomes more complex.

To understand how Python solves these situations, we need to explore **advanced inheritance**. In this section, we’ll learn how multiple inheritance works, what the diamond problem is, how Python determines method lookup order using **MRO**, and how `super()` behaves in complex inheritance structures.

## Advanced Inheritance

In the previous level, we learned inheritance structures such as **single inheritance**, **multi-level inheritance**, and **hierarchical inheritance**. In those examples, a class usually inherited from one parent class, but Python also allows a class to inherit from multiple parent classes at the same time. This is called **multiple inheritance**, and it allows a child class to combine attributes and methods from different parent classes into a single class.

The structure looks like this.

```py
class Parent1:
    pass

class Parent2:
    pass

class Child(Parent1, Parent2):
    pass
```

Here, the `Child` class inherits from both `Parent1` and `Parent2`.

Let’s see a real example.

```py
class Walker:
    def walk(self):
        print("Walking...")

class Talker:
    def talk(self):
        print("Talking...")

class Person(Walker, Talker):
    pass

p1 = Person()

p1.walk()
p1.talk()
```

Output.

```bash
Walking...
Talking...
```

The `Person` class automatically receives behavior from both parent classes. This allows us to combine functionality from multiple sources without rewriting code.

At first, multiple inheritance may look simple and useful, but once inheritance structures become larger, new problems begin to appear. One common question is what happens if multiple parent classes contain a method with the same name.

```py
class Father:
    def greet(self):
        print("Hello from Father")

class Mother:
    def greet(self):
        print("Hello from Mother")

class Child(Father, Mother):
    pass

c1 = Child()

c1.greet()
```

Output.

```bash
Hello from Father
```

Python uses the method from `Father` because it searches parent classes from left to right, following the order written inside the inheritance parentheses.

But inheritance structures can become even more complicated when two parent classes inherit from the same base class. This creates a situation known as the diamond problem.

The structure looks like this.

![Diamond Problem](.assets/images/diamond-problem.png)

Let’s see this in code.

```py
class Person:
    def introduce(self):
        print("I am a person")

class Student(Person):
    pass

class Worker(Person):
    pass

class Assistant(Student, Worker):
    pass

a1 = Assistant()

a1.introduce()
```

Output.

```bash
I am a person
```

At first, everything still works correctly. However, Python now has multiple possible paths when searching for methods.

```text
Assistant -> Student -> Person
Assistant -> Worker -> Person
```

This means Python needs a clear rule system that determines exactly which class should be searched first. This system is called **Method Resolution Order**, also known as **MRO**. MRO defines the exact order Python follows when searching for attributes and methods inside inheritance hierarchies.

We can inspect this order using the `.mro()` method.

```py
class Person:
    pass

class Student(Person):
    pass

class Worker(Person):
    pass

class Assistant(Student, Worker):
    pass

print(Assistant.mro())
```

Output.

```bash
[
    <class '__main__.Assistant'>,
    <class '__main__.Student'>,
    <class '__main__.Worker'>,
    <class '__main__.Person'>,
    <class 'object'>
]
```

Python searches classes in this exact order, `Assistant`, `Student`, `Worker`, `Person` and finally `object`. The last class `object` is the default base class of all Python classes.

This order is important because it determines which method Python uses first.

Let’s see another example.

```py
class A:
    def greet(self):
        print("Hello from A")

class B:
    def greet(self):
        print("Hello from B")

class C(A, B):
    pass

c1 = C()

c1.greet()
```

Output.

```bash
Hello from A
```

Because `A` appears first in the inheritance list, Python finds `greet()` there before checking `B`.

We can confirm this using MRO.

```py
print(C.mro())
```

Output.

```bash
[
    <class '__main__.C'>,
    <class '__main__.A'>,
    <class '__main__.B'>,
    <class 'object'>
]
```

Now let’s understand how `super()` works in multiple inheritance. In simple inheritance, we usually think of `super()` as calling the parent class method. But in multiple inheritance, `super()` does not simply mean “call my direct parent”. Instead, it means “call the next class in the MRO chain”.

Here’s an example.

```py
class A:
    def show(self):
        print("A")
        super().show()

class B:
    def show(self):
        print("B")
        super().show()

class C:
    def show(self):
        print("C")

class D(A, B, C):
    pass

d1 = D()

d1.show()
```

Output.

```bash
A
B
C
```

The calls follow the MRO order.

![MRO Flow](.assets/images/mro-flow.png)

Each `super()` call moves to the next class in the MRO chain.

We can inspect the order directly.

```py
print(D.mro())
```

Output.

```bash
[
    <class '__main__.D'>,
    <class '__main__.A'>,
    <class '__main__.B'>,
    <class '__main__.C'>,
    <class 'object'>
]
```

This behavior is called cooperative inheritance, where multiple classes cooperate together through `super()` and MRO. Without MRO and `super()`, Python would not know which method should execute next in complex inheritance structures.

Although multiple inheritance is powerful, it should be used carefully. Large inheritance hierarchies can become difficult to understand and maintain, so in many situations, composition is often a simpler and safer solution.

## Composition vs Inheritance

In the previous section, we explored advanced inheritance and saw how classes can inherit behavior from one or multiple parent classes. Inheritance is powerful because it allows classes to reuse existing attributes and methods without rewriting code, but inheritance is not always the best solution. As class hierarchies become larger, inheritance can make programs more difficult to understand, maintain, and extend, which is why many modern designs often prefer composition instead.

To understand the difference, we first need to remember what inheritance represents. Inheritance models an **is a** relationship.

For example.

```py
class Animal:
    pass

class Dog(Animal):
    pass
```

Here, a `Dog` **is an** `Animal`. This relationship makes sense because the child class is a more specific version of the parent class.

However, not every relationship in programming should use inheritance. Sometimes an object does not is a another object. Instead, it simply has a another object inside it. This is called **composition** and composition models a **has a** relationship.

For example, a `Car` is not an `Engine`, but a `Car` has an `Engine`.

![Composition vs Inheritance](./assets/images/composition-vs-inheritance.png)

Here’s how composition looks in code.

```py
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()

car = Car()

car.engine.start()
```

Output.

```bash
Engine started
```

Instead of inheriting from `Engine`, the `Car` class simply stores an `Engine` object as one of its attributes. The object gains functionality by containing another object rather than inheriting from it.

Let’s compare both approaches side by side.

Here is inheritance.

```py
class Engine:
    def start(self):
        print("Engine started")

class Car(Engine):
    pass

car = Car()

car.start()
```

Output.

```bash
Engine started
```

Technically, this works, but conceptually it is incorrect because a `Car` is not an `Engine`. This is exactly where inheritance becomes dangerous. Just because code can inherit does not mean it *should inherit*. Inheritance should only be used when the child class truly represents a specialized version of the parent class.

Composition avoids this problem.

```py
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()

    def drive(self):
        self.engine.start()
        print("Car is driving")

car = Car()

car.drive()
```

Output.

```bash
Engine started
Car is driving
```

Here, the relationship is much more natural because the `Car` has an `Engine`, the `Engine` performs engine related behavior and the `Car` coordinates the objects together. This design is easier to understand and maintain.

Composition also gives us more flexibility because objects can be replaced dynamically without changing the inheritance hierarchy itself.

```py
class PetrolEngine:
    def start(self):
        print("Petrol engine started")

class ElectricEngine:
    def start(self):
        print("Electric engine started")

class Car:
    def __init__(self, engine):
        self.engine = engine

    def drive(self):
        self.engine.start()
        print("Car is driving")

petrol_car = Car(PetrolEngine())
electric_car = Car(ElectricEngine())

petrol_car.drive()
electric_car.drive()
```

Output.

```bash
Petrol engine started
Car is driving

Electric engine started
Car is driving
```

The `Car` class works with different engine objects without changing its internal logic. This flexibility is one of the biggest advantages of composition.

This idea is also closely related to polymorphism and duck typing because the `Car` class only expects the object to provide a `.start()` method. It does not care about the exact type of engine object being used.

As programs become larger, deep inheritance hierarchies can create several problems. Classes often become **tightly connected**, meaning changes in a parent class may unexpectedly affect many child classes. Large inheritance trees can also become difficult to understand and maintain, especially when multiple inheritance introduces more complex MRO behavior. Because of this, inheritance can sometimes create unnecessary complexity instead of simplifying code.

Composition helps reduce these issues by keeping classes smaller and more independent, which is why many modern software designs follow the principle *Prefer composition over inheritance*.

![Composition Flexibility](./assets/images/composition-flexibility.png)

This does not mean inheritance is bad. Inheritance is still very useful when there is a clear is a relationship between classes, but when objects simply need to work together, composition is often the cleaner and safer solution.

In simple terms, inheritance means one class becomes a specialized version of another class, while composition means one object contains and uses another object.

Understanding when to use each approach is one of the most important skills in object-oriented programming. Sometimes we don’t want a full parent child relationship, but we still want to reuse a small piece of functionality across multiple classes. This is where mixins become useful.

A mixin is a small class designed to provide a specific reusable behavior that can be shared between different classes. Unlike traditional inheritance, mixins are not meant to represent real-world entities. Their purpose is simply to inject useful functionality into other classes without creating large inheritance hierarchies.

## Mixins

In the previous sections, we learned how inheritance allows classes to reuse behavior and how composition can help create more flexible designs. However, sometimes we don’t need a full inheritance hierarchy just to share a small piece of functionality between classes.

For example, multiple classes may need the ability to log messages, export JSON data, validate input, or save files. Creating large parent classes for these small reusable behaviors would make the inheritance structure unnecessarily complicated. This is where **mixins** become useful.

A mixin is a small class designed to provide one specific reusable behavior that can be added to other classes through inheritance. Unlike normal parent classes, mixins are not meant to represent real-world objects. Their purpose is simply to inject useful functionality into other classes without creating large inheritance hierarchies.

Here is a simple example.

```py
class LoggerMixin:
    def log(self, message):
        print(f"[LOG]: {message}")

class User(LoggerMixin):
    def create_user(self):
        self.log("User created")

u1 = User()

u1.create_user()
```

Output.

```bash
[LOG]: User created
```

The `LoggerMixin` class is not meant to represent an actual object. Its only purpose is to provide reusable logging behavior, while the `User` class inherits that functionality without needing to rewrite the `log()` method.

Mixins are usually small and focused on a single responsibility. For example, we could create a mixin for exporting JSON data.

```py
import json

class JsonMixin:
    def to_json(self):
        return json.dumps(self.__dict__)

class Person(JsonMixin):
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("Jonas", 20)

print(p1.to_json())
```

Output.

```bash
{"name": "Jonas", "age": 20}
```

Here, the `JsonMixin` adds serialization behavior to the `Person` class, while the main class itself remains clean because the reusable functionality is separated into a small independent mixin.

![Mixin Structure](./assets/images/mixin-structure.png)

One of the biggest advantages of mixins is that multiple mixins can be combined together.

```py
class LoggerMixin:
    def log(self, message):
        print(f"[LOG]: {message}")

class SaveMixin:
    def save(self):
        print("Saving data...")

class User(LoggerMixin, SaveMixin):
    pass

u1 = User()

u1.log("Starting save")
u1.save()
```

Output.

```bash
[LOG]: Starting save
Saving data...
```

The `User` class now combines behavior from multiple mixins, which is one reason mixins are commonly used together with multiple inheritance.

However, mixins should still be used carefully. A mixin should remain small and focused on one reusable behavior. It should not represent a standalone real-world object, and it generally should avoid storing large amounts of state or complex object data. The goal of a mixin is simply to inject a small reusable feature into other classes.

For example, this would be a poor mixin design.

```py
class EmployeeMixin:
    def __init__(self, name, salary, department, manager):
        self.name = name
        self.salary = salary
        self.department = department
        self.manager = manager
```

This behaves more like a normal parent class instead of a mixin because it tries to represent a complete object with large amounts of data.

A better mixin design would stay lightweight and focused on one responsibility.

```py
class TimestampMixin:
    def get_timestamp(self):
        from datetime import datetime
        return datetime.now()
```

This mixin has only one clear purpose.

Mixins are also closely connected to **MRO** and `super()` because they rely internally on multiple inheritance.

Let’s see an example.

```py
class A:
    def show(self):
        print("A")
        super().show()

class B:
    def show(self):
        print("B")
        super().show()

class Base:
    def show(self):
        print("Base")

class Child(A, B, Base):
    pass

c1 = Child()

c1.show()
```

Output.

```bash
A
B
Base
```

Python follows the MRO chain when calling methods.

```py
print(Child.mro())
```

Output.

```bash
[
    <class '__main__.Child'>,
    <class '__main__.A'>,
    <class '__main__.B'>,
    <class '__main__.Base'>,
    <class 'object'>
]
```

This is why mixins are often designed to cooperate with `super()` and MRO instead of directly calling parent class methods.

In real-world Python frameworks, mixins are extremely common because they allow developers to combine reusable behaviors without creating massive inheritance hierarchies.

In simple terms, a mixin is a small reusable class whose only purpose is to add a specific behavior to other classes.

So far throughout object-oriented programming, we have already worked with several special methods such as `__init__`, `__str__` and `__repr__`. These methods allowed us to customize how objects are created and represented. However, Python provides many more special methods that can completely change how objects behave inside the language itself.

Using these methods, we can make objects behave like functions, containers, dictionaries, or even intercept attribute access dynamically. These special methods are commonly called dunder methods or magic methods because their names begin and end with double underscores.

In the next section, we’ll explore more advanced dunder methods and learn how they allow us to deeply customize object behavior in Python.

## Advanced Dunder Methods

In the previous level, we already explored some basic dunder methods such as `__init__`, `__str__`, and `__repr__`. These methods allowed us to customize how objects are created and displayed. However, Python provides many more special methods that allow objects to behave like built-in Python types.

Using these methods, objects can act like functions, containers, dictionaries, or even dynamically control how attributes are accessed and modified. These methods are called **dunder methods** because their names begin and end with double underscores.

One commonly used advanced dunder method is `__len__()`. This method allows an object to work with the built-in `len()` function.

Here’s an example.

```py
class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

playlist = Playlist(["Song A", "Song B", "Song C"])

print(len(playlist))
```

Output.

```bash
3
```

Without `__len__()`, Python would not know how to calculate the length of the object.

Another useful dunder method is `__call__()`, which allows an object to behave like a function.

```py
class Greeter:
    def __call__(self, name):
        print(f"Hello {name}")

g1 = Greeter()

g1("Jonas")
```

Output.

```bash
Hello Jonas
```

Even though `g1` is an object, Python allows it to be called like a function because of the `__call__()` method. Objects that implement `__call__()` are known as callable objects.

Python also allows objects to behave like containers using methods such as `__getitem__()` and `__setitem__()`.

The `__getitem__()` method controls what happens when we access values using square brackets `[]`.

```py
class Store:
    def __init__(self):
        self.products = {
            "apple": 2,
            "banana": 3
        }

    def __getitem__(self, key):
        return self.products[key]

store = Store()

print(store["apple"])
```

Output.

```bash
2
```

The `__setitem__()` method controls assignment using square brackets.

```py
class Store:
    def __init__(self):
        self.products = {}

    def __setitem__(self, key, value):
        self.products[key] = value

store = Store()

store["apple"] = 5

print(store.products)
```

Output.

```bash
{'apple': 5}
```

Together, these methods allow custom objects to behave similarly to dictionaries or lists.

Another powerful group of dunder methods controls attribute access itself. The `__getattr__()` method is called when Python cannot find an attribute normally.

```py
class Person:
    def __init__(self, name):
        self.name = name

    def __getattr__(self, attribute):
        return f"Attribute '{attribute}' does not exist"

p1 = Person("Jonas")

print(p1.age)
```

Output.

```bash
Attribute 'age' does not exist
```

Instead of raising an `AttributeError`, Python calls `__getattr__()`.

The `__setattr__()` method intercepts every attribute assignment.

```py
class Person:
    def __setattr__(self, key, value):
        print(f"Setting {key} = {value}")
        super().__setattr__(key, value)

p1 = Person()

p1.name = "Jonas"
p1.age = 20
```

Output.

```bash
Setting name = Jonas
Setting age = 20
```

Inside `__setattr__()`, we usually use `super().__setattr__()` to avoid infinite recursion. Without `super()`, assigning attributes inside `__setattr__()` would repeatedly call itself forever.

Python also provides `__delattr__()` which intercepts attribute deletion.

```py
class Person:
    def __init__(self, name):
        self.name = name

    def __delattr__(self, attribute):
        print(f"Deleting attribute: {attribute}")
        super().__delattr__(attribute)

p1 = Person("Jonas")

del p1.name
```

Output.

```bash
Deleting attribute: name
```

Another very important dunder method is `__hash__()`, which controls how objects behave inside hash-based collections such as `set` and `dict`.

Here’s an example.

```py
class Person:
    def __init__(self, name):
        self.name = name

    def __hash__(self):
        return hash(self.name)

p1 = Person("Jonas")
p2 = Person("Jonas")

print(hash(p1))
print(hash(p2))
```

Output.

```bash
-728364827364
-728364827364
```

The exact numbers will differ each time Python runs, but both objects produce the same hash because they use the same name.

The `__hash__()` method is closely connected to `__eq__()` because objects that compare as equal should usually produce the same hash value.

Advanced dunder methods are powerful because they allow objects to integrate deeply into Python itself. Instead of behaving like simple custom classes, objects can behave similarly to built-in language features.

This is one reason Python feels so flexible and expressive. Much of Python’s behavior is actually powered internally by dunder methods.

In simple terms, advanced dunder methods allow developers to customize how objects behave with built-in Python operations such as function calls, indexing, attribute access, hashing, and container behavior.

However, writing all of these methods manually can sometimes become repetitive, especially for classes whose main purpose is simply to store data. Developers often end up rewriting the same constructors, representations, comparisons, and hashing logic over and over again.

To simplify this process, Python provides a special feature called data classes. Data classes automatically generate many common dunder methods, allowing classes focused mainly on storing data to remain much cleaner and easier to maintain.

## Data Classes

In many programs, some classes exist mainly to store and organize data. These classes often contain constructors, object representation methods, comparison logic, and sometimes hashing behavior. Writing all of this manually works correctly, but when many classes are focused mostly on storing structured data, developers can end up repeating the same boilerplate code again and again.

For example, consider this class.

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Person(name='{self.name}', age={self.age})"

p1 = Person("Jonas", 20)

print(p1)
```

Output.

```bash
Person(name='Jonas', age=20)
```

This works correctly, but manually writing constructors and representation methods becomes repetitive when many classes mostly exist to store data.

To simplify this process, Python provides data classes. Data classes automatically generate common dunder methods such as `__init__()`, `__repr__()` and `__eq__()`, allowing data-focused classes to remain much cleaner and easier to maintain.

To create a data class, we use the `@dataclass` decorator from the built-in `dataclasses` module.

```py
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

p1 = Person("Jonas", 20)

print(p1)
```

Output.

```bash
Person(name='Jonas', age=20)
```

Even though we did not manually write `__init__()` or `__repr__()`, Python automatically created them for us. The type annotations `str` and `int` describe the expected data types of the attributes.

![Dataclass Auto Generated Methods](./assets/images/dataclass-generated-methods.png)

Data classes also automatically generate comparison behavior using `__eq__()`.

```py
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

p1 = Person("Jonas", 20)
p2 = Person("Jonas", 20)

print(p1 == p2)
```

Output.

```bash
True
```

Normally, regular objects compare memory addresses by default, but data classes automatically compare attribute values instead.

Data classes can also contain default values.

```py
from dataclasses import dataclass

@dataclass
class Person:
    name: str = "Unknown"
    age: int = 0

p1 = Person()

print(p1)
```

Output.

```bash
Person(name='Unknown', age=0)
```

Just like normal constructors, required attributes must appear before default values.

```py
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int = 0
```

However, we must still be careful with mutable default values such as lists or dictionaries.

This is incorrect.

```py
from dataclasses import dataclass

@dataclass
class Person:
    hobbies: list = []
```

Python raises an error because mutable default values should not be shared between objects.

Instead, we use `field()` together with `default_factory`.

```py
from dataclasses import dataclass, field

@dataclass
class Person:
    hobbies: list = field(default_factory=list)

p1 = Person()
p2 = Person()

p1.hobbies.append("Reading")

print(p1.hobbies)
print(p2.hobbies)
```

Output.

```bash
['Reading']
[]
```

Each object now receives its own separate list instead of sharing the same mutable object.

Data classes also support a special method called `__post_init__()`. This method runs automatically after the generated `__init__()` finishes and is useful when additional setup or validation is needed after object creation.

```py
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

    def __post_init__(self):
        print(f"{self.name} object created")

p1 = Person("Jonas", 20)
```

Output.

```bash
Jonas object created
```

Data classes can also be made immutable using `frozen=True`.

```py
from dataclasses import dataclass

@dataclass(frozen=True)
class Person:
    name: str
    age: int

p1 = Person("Jonas", 20)

print(p1.name)

p1.name = "Petras"
```

Output.

```bash
Jonas
FrozenInstanceError
```

A frozen data class prevents attributes from being modified after object creation, creating immutable objects.

Frozen data classes are also closely connected to hashing behavior because immutable objects are safer to use inside sets and dictionaries since their values cannot unexpectedly change.

Data classes can automatically generate hashing methods as well.

```py
from dataclasses import dataclass

@dataclass(frozen=True)
class Person:
    name: str
    age: int

p1 = Person("Jonas", 20)

print(hash(p1))
```

Output.

```bash
-4837264837264
```

The exact number will differ between Python runs.

One important thing to remember is that data classes do not remove the need to understand object-oriented programming fundamentals. Internally, data classes still rely heavily on dunder methods such as `__init__()`, `__repr__()`, `__eq__()` and `__hash__()`.

Data classes simply automate much of the repetitive boilerplate code developers would otherwise write manually, which is why they are extremely common in modern Python applications, especially when creating objects whose main responsibility is storing structured data.

In simple terms, a data class is a special type of class that automatically generates common methods for objects focused mainly on storing data.

While data classes help organize structured object data, programs also often need a safe way to represent a fixed collection of constant values. For example, an application may contain predefined states such as `ACTIVE`, `INACTIVE` or `PENDING`, along with categories like user roles, directions, or statuses.

Using regular strings or numbers for these values can become dangerous because typing mistakes or invalid values may silently introduce bugs into the program.

To solve this problem, Python provides Enums. Enums allow us to create named constant values that are grouped together in a clear and controlled way, making programs easier to read, safer, and more maintainable.

## Enums

In many programs, we work with values that should belong to a limited predefined set. For example, an application may contain user roles, order statuses, directions, days of the week or game states. Without special tools, developers often represent these values using regular strings or integers.

```py
status = "ACTIVE"
```

At first, this seems simple. However, regular strings can easily introduce bugs.

```bash
status = "ACTVE"
```

Python will not raise an error because `"ACTVE"` is still a valid string, even though the value itself is incorrect.

To solve this problem, Python provides **Enums**. Enums allow us to create a fixed collection of named constant values, making programs safer and easier to maintain.

![Enum Structure](./assets/images/enum-structure.png)

To create an enum, we import `Enum` from the built-in `enum` module.

```py
from enum import Enum

class Status(Enum):
    ACTIVE = 1
    INACTIVE = 2
    PENDING = 3
```

Here, `Status` is an enum containing three predefined values.

We can access enum members using dot notation.

```py
print(Status.ACTIVE)
print(Status.PENDING)
```

Output.

```py
Status.ACTIVE
Status.PENDING
```

Each enum member contains both a name and a value, which we can access separately.

```py
print(Status.ACTIVE.name)
print(Status.ACTIVE.value)
```

Output.

```bash
ACTIVE
1
```

Enums improve safety because only predefined values should be used.

```py
status = Status.ACTIVE

if status == Status.ACTIVE:
    print("Account is active")
```

Output.

```bash
Account is active
```

This approach is much safer and more readable than comparing random strings throughout a program.

Enums also support iteration.

```py
from enum import Enum

class Direction(Enum):
    NORTH = 1
    SOUTH = 2
    EAST = 3
    WEST = 4

for direction in Direction:
    print(direction)
```

Output.

```bash
Direction.NORTH
Direction.SOUTH
Direction.EAST
Direction.WEST
```

Python also provides `auto()` which automatically generates values for enum members.

```py
from enum import Enum, auto

class Role(Enum):
    ADMIN = auto()
    USER = auto()
    GUEST = auto()

print(Role.ADMIN.value)
print(Role.USER.value)
```

Output.

```bash
1
2
```

This is useful when the actual numeric values themselves are not important.

Enums are commonly used together with classes because they help make object state more controlled and predictable.

```py
from enum import Enum

class Status(Enum):
    ACTIVE = "active"
    BANNED = "banned"

class User:
    def __init__(self, name, status):
        self.name = name
        self.status = status

u1 = User("Jonas", Status.ACTIVE)

print(u1.status)
```

Output.

```bash
Status.ACTIVE
```

Instead of allowing any random string, the program now expects one of the predefined enum values.

Enums are especially useful in larger applications because they reduce typing mistakes, improve readability, and make programs easier to maintain since all allowed values are grouped together in one place.

In simple terms, an enum is a special type that represents a fixed collection of named constant values.

So far throughout object-oriented programming, we have mostly focused on writing and understanding classes directly in code. However, as programs become larger, class relationships and system structures can become much more difficult to visualize mentally.

When applications contain many classes connected through inheritance, composition, mixins, and other relationships, developers often use visual diagrams to represent how objects interact inside the system.

One of the most common tools for this is the UML class diagram. **UML class diagrams** help developers visually model classes, attributes, methods, and relationships between objects, making larger systems easier to understand, design, and communicate.

## UML Class Diagrams

As programs grow larger, class relationships can become difficult to understand just by reading code. A project may contain many classes connected through inheritance, composition, mixins, and other object relationships. Once systems become more complex, developers often need a visual way to represent how classes and objects interact together.

To solve this problem, developers commonly use **UML class diagrams**.

UML stands for **Unified Modeling Language**. It is a visual language used to represent the structure of object-oriented systems. UML class diagrams help developers model classes, attributes, methods, and relationships between objects, making larger systems easier to understand, design, and communicate.

A UML class is usually divided into three sections. The top section contains the class name, the middle section contains attributes, and the bottom section contains methods.

The symbols inside UML diagrams also have meaning. The symbol `+` represents public access, `-` represents private access and `#` represents protected access.

For example.

![Basic UML Class](./assets/images/basic-uml-class.png)

This diagram represents the same access control concepts we learned earlier with encapsulation.

UML diagrams can also represent inheritance relationships.

![UML Inheritance](./assets/images/uml-inheritance.png)

The arrow pointing upward represents inheritance. This means `Student` inherits from `Person`.

Composition is represented differently.

![UML Composition](./assets/images/uml-composition.png)

The filled diamond represents composition. This means the `Car` object contains and owns an `Engine` object.

Aggregation is similar to composition but represents a weaker relationship.

![UML Aggregation](./assets/images/uml-aggregation.png)

The empty diamond represents aggregation. This means a `School` contains students, but students can still exist independently from the school itself.

UML diagrams can also represent multiple inheritance.

![UML Multiple Inheritance](./assets/images/uml-multiple-inheritance.png)

Here, `Person` inherits behavior from both `Walker` and `Talker`.

UML diagrams are especially useful during software design because they help developers organize systems before writing actual code. Developers can visually identify which classes should inherit from others, which objects should use composition, how objects communicate together, and which parts of the system may be becoming too large or overly complex.

This becomes extremely valuable in larger applications where dozens or even hundreds of classes may interact together.

UML diagrams also improve communication between developers because complex systems are often easier to explain visually than through raw source code alone.

Even though UML diagrams are visual tools, they still represent the same object-oriented programming principles we learned throughout all previous levels. Inheritance, composition, encapsulation, abstraction and polymorphism can all be represented visually inside UML class diagrams.

In simple terms, UML class diagrams are visual representations of object-oriented systems that help developers model classes, attributes, methods, and relationships between objects.
