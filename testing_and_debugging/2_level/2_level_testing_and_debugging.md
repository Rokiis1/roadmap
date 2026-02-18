# Content of Python Testing and Debugging 2 level

- [Reading and Understanding Tracebacks Deeply](#reading-and-understanding-tracebacks-deeply)
- [Observing Program State](#observing-program-state)
- [Object Observation](#object-observation)
- [Introspection Techniques](#introspection-techniques)
- [Instance vs Class Debugging](#instance-vs-class-debugging)

In **Python Testing and Debugging Level 1**, we learned how to recognize errors, identify their types, and use basic tools like **print statements**, **tracebacks**, and **introspection** to understand what went wrong.

At that level, most examples involved **small programs**, where an error usually happened close to the line that caused it. The traceback was short, and the source of the problem was easy to spot.

As logic grow, this changes.

Functions begin to call other functions. Files import other files. Objects interact across multiple layers of logic. When something goes wrong, the error often appears **far away from where the mistake was actually introduced**.

At this point, debugging is no longer about finding *a bad line*.  
It becomes about understanding **execution flow**, **program state**, and **how Python arrived at the failure**.

In this level, we move from reacting to errors to **investigating them systematically**.  
We focus on reading tracebacks as **stories of execution**, observing how state changes over time, and diagnosing problems that occur across multiple layers of code.

We begin with how to read and understand **tracebacks deeply**.

## Reading and Understanding Tracebacks Deeply

When Python raises an error, it prints a **traceback**. In **Python Testing and Debugging Level 1**, we treated the traceback mainly as a message that tells us *what error happened* and *on which line*.

At this level, a traceback is understood differently.

A traceback is a **record of the call history** that led to the failure. It shows how execution moved through the program, step by step, until Python could no longer continue.

Instead of reading a traceback as a single error message, we now read it as a **stack of function calls**.

Consider a small example with multiple function calls.

```py
def divide(a, b):
    return a / b

def calculate(value):
    return divide(value, 0)

def process():
    return calculate(10)

process()
```

Running this raises a **traceback**, error does not appear in `process()` or `calculate()`, even though they are part of execution, actual failure happens inside `divide()` when Python attempts to divide by zero.

**Traceback** shows path followed by entered `process()`, then `calculate()`, then `divide()`, and only then did it fail.

Each entry in **traceback** represents a **file being executed**, a **function being entered**, and a **specific line that was reached during execution**.

Final line of **traceback** tells us **what failed** and lines above it explain **how Python got there**.

This distinction matters because point of failure is often not same place where bug was introduced.

For example, mistake in this program is not inside `divide()`. The division function behaves correctly. The real bug is that `calculate()` passed an invalid value.

Understanding this difference helps prevent a common debugging mistake fixing wrong part of code. Instead of asking *“Where did it crash?”*, we begin asking *“How did execution arrive here?”*

Reading a **traceback** from bottom to top allows us to answer that question. **bottom shows failure**, while **upper lines show sequence of decisions** and **calls** that led to it.

Tracebacks explain **how execution arrived at failure**, but they do not always explain **why state became incorrect**.

To answer that, we must observe program state while code is running.

## Observing Program State

Observing program state means examining **values that exist during execution**, not only after an error occurs.

In **Python Testing and Debugging Level 1**, observation was limited to printing simple variables. At this level, observation becomes intentional. We check values **before failure**, **between steps**, and **across function boundaries** to confirm assumptions.

Consider a case where code fails even though logic appears correct.

```py
def apply_discount(price, discount):
    return price - (price * discount)

def checkout(data):
    total = data["price"]
    discount = data["discount"]
    return apply_discount(total, discount)

order = {"price": 100, "discount": "0.2"}
checkout(order)
```

This program raises an error, but traceback alone does not show why incorrect values reached `apply_discount()`.

To understand this, we observe state.

```py
def checkout(data):
    print(data)
    print(type(data["discount"]))
    total = data["price"]
    discount = data["discount"]
    return apply_discount(total, discount)
```

Printed output reveals that `discount` is a **string**, not a **number**. Execution followed correct path, but state was already invalid.

Observing program state allows us to verify **what values exist at each step**, instead of assuming correctness.

This kind of observation is especially important when **data comes from user input**, **values are passed across multiple functions**.

At this level, observation focuses on **confirming reality during execution**, not fixing code immediately.

Values rarely exist in isolation. In code, values live **inside objects**, move through methods, and change as execution continues.

To understand bugs, observing individual values is not enough. We must observe **objects as complete units**.

## Object Observation

In **Python Testing and Debugging Level 1**, objects were treated mainly as containers of values. At this we try objects are treated as **entities that evolve during execution**.

Consider a simple object used across several steps.

```py
class User:
    def __init__(self, name):
        self.name = name
        self.active = False

    def activate(self):
        self.active = True

def process_user(user):
    user.activate()

user = User("Example")
process_user(user)
print(user.active)
```

This program works, but object observation asks a different question. Not *“Did it work?”* but *“What state does this object hold now?”*.

Now consider other case.

```py
class User:
    def __init__(self, name):
        self.name = name
        self.active = False
        self.session = None

    def activate(self):
        self.active = True

user = User("Example")
user.activate()
```

Here, user becomes active, but session remains `None`. Individually, each value looks okay, but together, object state may be invalid.

Object observation means checking whether **object state makes sense as a whole**, not only whether individual attributes exist.

This becomes critical when objects are **passed between functions**, **methods modify internal state**, **one object influences another**.

By observing objects instead of isolated values, we detect bugs caused by **invalid state combinations**, not just incorrect values.

Observation shows **what exists** during execution, sometimes, that still is not enough.

In many debugging situations, we do not fully know **what an object is**, **what it contains**, or **what operations it supports**. This often happens when code uses **external libraries**, **shared utilities**.

To remove assumptions, Python provides tools that allow objects to **describe themselves**.

## Introspection Techniques

Introspection techniques allow a program to examine objects **while execution is in progress**, instead of guessing **how an object behaves**, Python allows the **object to describe itself**.

Observation confirms **what values exist** in other hand introspection confirms **what an object is**, **what it supports**, and **what assumptions are safe**.

This becomes important when objects come from **imports**, **external modules**, or **deep call chains**, where structure is not obvious at call site.

A common first step is confirming object type.

```py
value = get_data()
print(type(value))
```

Knowing type often explains why an **operation fails**, but some programs accept more than one valid type.To confirm whether an object belongs to an allowed family of types, use `isinstance()`.

```py
def apply_discount(price):
    if not isinstance(price, (int, float)):
        raise TypeError("price must be numeric")
    return price * 0.9
```

This check answers whether object behaves like a valid input, not whether it matches one exact type.

When debugging **class relationships**, it is sometimes necessary to confirm **inheritance**.

```py
class Animal:
    pass

class Dog(Animal):
    pass

print(issubclass(Dog, Animal)) # True
```

Another frequent source of failure is assuming an attribute exists. Instead of letting code crash, introspection allows capability checks.

```py
obj = get_data()

if hasattr(obj, "save"):
    obj.save()
```

This pattern is common when objects may come from different implementations but share similar roles.

When attribute names are unknown or guessed incorrectly, `dir()` reveals available names.

```py
print(dir(obj))
```

This helps identify correct method names and supported operations.

Some objects store data internally using attributes. When this happens, Python keeps attribute data inside a special dictionary called `__dict__`.

```py
class User:
    def __init__(self, name):
        self.name = name
        self.active = True

user = User("Example")

print(user.__dict__)
```

This dictionary shows exact attribute state at runtime.

For such objects, `vars(obj)` returns same dictionary.

```py
print(vars(user))
```

Not every object has `__dict__`. Many **built-in types** do not store attribute state this way.

```py
x = 10
vars(x)
```

This raises an error, which only means object does not expose attribute storage.

When `__dict__` is unavailable, introspection relies on `type()` and `dir()` instead.

If meaning or usage remains unclear, documentation can be inspected directly.

```py
help(obj)
```

Modules are also objects. They store their contents inside a **namespace**, which can be inspected using `vars()`.

```py
import math
data = vars(math)

print(data["pi"])
print(data)
```

Introspection replaces assumptions with confirmation.

Once object structure and capabilities are understood, another common source of bugs appears, confusion between **what belongs to a class** and **what belongs to an instance**.

Many programs behave incorrectly not because logic is wrong, but because data is stored or modified at the wrong level.

To debug these cases, we must distinguish **shared state** from **per-object state**.

## Instance vs Class Debugging

Instance vs class debugging focuses on identifying whether a value or behavior belongs to a **specific object** or to **all objects created from a class**.

At a glance, class attributes and instance attributes look similar. Both are accessed using dot notation.  
During execution, however, they behave very differently.

Understanding this distinction is essential when debugging unexpected **side effects**, **shared mutations**, or **values that change across objects without direct interaction**.

Consider a class with a shared attribute.

```py
class User:
    roles = []

u1 = User()
u2 = User()

u1.roles.append("admin")
print(u2.roles)
```

Both objects appear separate, yet modifying `roles` through one object affects the other. This happens because `roles` belongs to the **class**, not to each instance.

The bug is not in `append()`. The bug is misunderstanding **where state lives**.

Now consider a different case.

```py
class Counter:
    count = 0

c = Counter()
c.count += 1

print(Counter.count)
print(c.count)
```

Here, updating `c.count` does not change `Counter.count`.

A new instance attribute is created, shadowing the class attribute.

Without understanding this behavior, debugging becomes confusing. One value appears to change, while another remains untouched.

Introspection helps confirm what is happening.

```py
print(vars(Counter))
print(vars(c))
```

Objects do not store values automatically. Values live either on the **class** or on the **instance**, and debugging requires knowing which one holds responsibility.
