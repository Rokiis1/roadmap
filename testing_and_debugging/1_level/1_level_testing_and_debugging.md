# Content of Python Testing and Debugging 1 level

- [Why Bugs Happen](#why-bugs-happen)
- [Types of Errors](#types-of-errors)
- [Traceback Messages](#traceback-messages)
- [Observation](#observation)
- [Introspection](#introspection)

Programming is not only about writing code. It is also about **recognizing why code fails** and learning how to correct it. Errors are a natural part of programming, and every programmer, beginner or expert, encounters them regularly.

In this level, we focus on learning how to **read**, **observe**, and **analyze** errors.

## Why Bugs Happen

Bugs appear because programs are created by humans, and humans naturally make mistakes. Sometimes forget to **define a variable**, sometimes we write the **wrong condition**, and sometimes misinterpret how **evaluates**.

In many situations, a bug is not caused by a complex problem, but by a very small detail, such as a **missing character**, an **incorrect name**, or an **unexpected value**.

Consider the following code:

```py
total = 10
print(Total)
```

Although the two words look similar, Python treats `total` and `Total` as completely different names. As a result, Python raises an error. This demonstrates how minor differences can lead to failures.

Other bugs appear when we assume a variable has a certain value, while in reality it holds something else. This is why it is important to verify program behavior instead of relying only on assumptions.

```py
price = "10"
total = price + 5
print(total)
```

At first glance, `price` may appear to be a number. In reality, it is a string. Because of this, Python cannot combine a string and a number.

To identify the real cause, we can inspect the variable.

```py
print(type(price))
```

Now it becomes clear that `price` is a string. After recognizing this, we can correct the code.

```py
price = "10"
total = int(price) + 5
print(total)
```

This example shows how false assumptions about variable values often lead to bugs, and why verification plays a key role in **debugging**.

Having explored why **bugs appear**, we can now examine how Python categorizes these problems.

## Types of Errors

When a program does not work as expected, the problem usually belongs to one of three main **categories**.

- **Syntax errors**  
- **Runtime errors** (exceptions)  
- **Logic errors**

Each category represents a different kind of problem in either the **structure** or **behavior** of the program.

**Syntax errors** occur when Python cannot interpret the code structure. These errors stop the program before it runs.

```py
if True
    print("Hello")
```

Here, Python cannot interpret the code because the syntax is incomplete.

**Runtime errors** occur during execution. The code is syntactically correct, but an operation fails.

Common runtime exceptions:

- `NameError` when a variable does not exist

    ```py
    print(score)
    ```

- `TypeError` when an operation uses the wrong data type

    ```py
    text = "10"
    print(text + 5)
    ```

- `ValueError` when a value is invalid for its type

    ```py
    number = int("hello")
    print(number)
    ```

- `AttributeError` when an object does not have a requested attribute

    ```py
    text = "hello"
    print(text.push())
    ```

- `IndexError` when an index is outside the valid range

    ```py
    numbers = [1, 2, 3]
    print(numbers[5])
    ```

Each of these produces a different exception that describes the specific problem.

**Logic errors** do not stop the program. The code runs successfully, but the output is incorrect.

```py
result = 10 - 5 * 2
print(result)
```

Python follows mathematical rules correctly, but if our expectation was different, the mistake exists in our logic.

Recognizing these categories allows us to respond to errors more effectively instead of treating all problems the same way.

Next, we examine how Python reports these problems.

## Traceback Messages

When Python encounters an error, it produces a **traceback message**. This message shows where the problem occurred and what type of error caused the failure.

A traceback usually includes the **file name**, **line number**, **line of code**, and **type of error**.

```py
print(data)
```

From the traceback, we can determine the location of the error, the statement that caused it, and the type of exception raised.

Although tracebacks may look intimidating at first, they are designed to guide us.

A useful is to read a traceback from the **bottom upward**. The **final line describes the error type**, and the earlier lines **how python reached that point.**

Next, we explore **how to observe** program behavior directly.

## Observation

Observation means watching how a program **behaves while it runs**. Bugs occur because our **expectations** do not match **actual execution**.

At this level, observation focuses on **checking variable values** and **execution flow in small programs**. The goal is not system monitoring.

The simplest way to observe a program is by printing values.

```py
x = 10
y = 0
print(x)
print(y)
print(x / y)
```

Before the crash occurs, the printed values already explain the failure.

Observation also helps verify assumptions.

```py
price = "10"
print(price)
print(type(price))
```

Here, the printed output immediately reveals the true nature of the value.

Observation does not correct the bug, but it reveals the facts needed to correct it.

In **bigger systems**, observation expands into **logs**, **metrics**, and **traces**. At this level, it simply means **confirming program state during execution**.

Observation allows us to see **what values are produced**, but sometimes this is not enough. To debug effectively, we also need to understand **what kind of object a value is**, **what it can do**, and **what it contains**. This process is called **introspection**.

## Introspection

Introspection means letting **Python describe objects to us**, instead of relying on assumptions. Rather than guessing how something works, we ask Python direct questions about it.

At this level, introspection is used to **investigate unexpected behavior**, not to change how the program runs.

The first and most important introspection tool is `type()`. It tells us **what kind of object** a value refers to.

```py
value = "10"
print(type(value))
```

Output.

```text
<class 'str'>
```

Although `"10"` looks like a number, Python confirms that it is a string. This immediately explains why numeric operations fail.

Whenever an operation behaves unexpectedly, checking the object’s type should be the **first step**.

Knowing an object’s type tells us what it *is*, but not what it *can do*. The `dir()` function lists all **attributes and methods** available on an object.

```py
text = "hello"
print(dir(text))
```

The output contains method names such as `upper`, `lower`, and `split`. These are operations Python allows on string objects.

If an operation is missing from this list, Python does not support it.

```py
print(text.push())
```

This fails because `push` does not appear in `dir(text)`.

`dir()` helps confirm what operations are valid before using them.

Some objects store data internally using **attributes**. The `vars()` function reveals this internal state.

At this level, we do not create our own complex objects yet, but it is important to understand what `vars()` reveals when an object *does* store information.

Consider an object that contains named values.

```py
user = {"name": "Example1", "age": 30}
print(user)
```

Here, the data is clearly visible. However, some objects store data inside themselves, not in plain sight.

When an object supports **attributes**, `vars()` exposes them.

```py
print(vars(user))
```

This produces an error, because dictionaries do not store data as attributes `TypeError: vars() argument must have __dict__ attribute`.

Now consider an object that **does** store values internally

```py
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

user = User("Example1", 30)
print(vars(user))
```

Output `{'name': 'Example1', 'age': 30}`

This output confirms exactly what data the object contains at runtime.

If an object behaves incorrectly, `vars()` allows us to verify whether its internal values match our expectations.

We will work with these objects more deeply in **Object Programming Level 1**, where object structure and behavior are explained step by step.

`vars()` is not only for objects you create yourself. It also works on **modules** you import.

A module is an object that contains its own **namespace** meaning it stores names like **variables**, **functions**, and **constants**. When you call `vars(module)`, Python returns a dictionary of everything stored in that module.

```py
import math
print(vars(math))
```

The output is a large dictionary. You will usually see two types of entries **Built-in module information (dunder names)** and **actual content of the module**.

So when you see a big dictionary, it simply means module stores many names inside it, and `vars()` is showing them.

At this level, you do not need to understand every `__dunder__` name. The key idea is that `vars()` reveals the names stored inside an object (its internal **namespace**/**state**) when that object supports it.

We explore **how `import` works**, what modules are, and how their contents are organized in **Modules Import Level 1**, where this topic is explained in detail. We also explain, at an introductory level, **what namespaces and object state are** in **Under the Hood Level 1**, to clarify where these names come from and how Python stores them internally.

When we see a method but are unsure how it works, `help()` provides documentation directly from Python.

```py
help(str.upper)
```

This explains **what the method does**, **what it returns**, **how it should be used**.

Using `help()` avoids guessing and confirms expected behavior.

Sometimes, two variables appear separate but actually reference the **same object**. The `id()` function allows us to verify object identity.

```py
a = [1, 2, 3]
b = a

print(id(a))
print(id(b))
```

If both values are the same, the variables point to the same object in memory. This explains why modifying one variable affects the other.

We explore **how Python manages object identity, references, and memory** in much more detail in **Python Under the Hood Level 3**. In earlier levels, you will occasionally encounter this behavior in practice, and `id()` can be used as a simple tool to confirm whether two variables point to the same object.
