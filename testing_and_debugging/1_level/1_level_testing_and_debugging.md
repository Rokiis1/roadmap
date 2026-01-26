# Content of Python Testing and Debugging 1 level

- [Why Bugs Happen](#why-bugs-happen)
- [Types of Errors](#types-of-errors)
- [Traceback Messages](#traceback-messages)
- [Observation](#observation)
- [Introspection](#introspection)

Programming is not only about writing code. It is also about **recognizing why code fails** and learning how to correct it. Errors are a natural part of programming, and every programmer, beginner or expert, encounters them regularly.

In this level, we focus on learning how to **read**, **observe**, and **analyze** errors.

## Why Bugs Happen

Bugs appear because programs are created by humans, and humans naturally make mistakes. Sometimes we forget to **define a variable**, sometimes we write the **wrong condition**, and sometimes we misinterpret how **Python evaluates an expression**.

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

A useful is to read a traceback from the **bottom upward**. The **final line describes the error type**, and the earlier lines s**how how Python reached that point.**

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

Sometimes, however, seeing values is not enough. We also need to **examine what those values really represent**. This leads us to introspection.

## Introspection

Introspection is the ability to examine an object **type** and **properties** while a program is running. It allows us to discover an objects **class**, **attributes**, and **methods**, even when its structure is unfamiliar.

Rather than relying on assumptions, we allow Python to describe the object. We use `type()` to understand **what kind of object it is**, `dir()` to see what **operations it supports**, and `vars()` to **inspect the values stored inside it**. When additional clarification is needed, `help()` provides documentation.

Sometimes, two variables may appear similar but actually refer to the same object. The `id()` function allows us to verify object identity in memory.

Through introspection, we examine objects before using them. This reduces errors. Introspection does not change the object. It only provides information about it.
