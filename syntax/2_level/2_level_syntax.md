# Content of Python syntax 2 level

- [Objects Revisited](#objects-revisited)
- [Class Syntax Introduction](#class-syntax-introduction)
- [Creating Objects from Classes](#creating-objects-from-classes)

In previous levels, we learned how literals are written and how they are assigned to variables.

In this level, we use literals as **building blocks** to show how Python creates objects
and how those objects are later reused by functions and classes.

```py
number = 42
text = "Hello"
items = [1, 2, 3]
```

## Objects Revisited

In **Syntax Level 1**, we learned that everything in Python is an object. At this level, we move one step forward and focus on **where objects come from**.

Objects can be created from **literals**, **function calls**, **class instantiation**

```py
x = 10
name = str(42)
```

Variables do not store values themselves. They are names that refer to objects created by Python.

So far, all objects we used were created using Python **built-in types**. That include **numbers**, **strings**, **lists**, and **dictionaries**.

Python also allows programmers to define their own object types.
This is done using a special syntax called a **class**.

A class does not create an object by itself.
Instead, it defines how objects of that type should be created.

## Class Syntax Introduction

The syntax used to define a new object type in Python is the `class` keyword.

```py
class User:
    pass
```

This code defines a new type called `User`. At this level, the class does not contain data or behavior. The `pass` keyword is used only to keep the syntax valid.

## Creating Objects from Classes

Once a class is defined, it can be used to create objects.

```py
user1 = User()
user2 = User()
```

Each call to `User()` creates a new object.
Even though both objects come from the same class, they are separate instances.

The behavior of objects and class design is covered later in **OOP Level 1**.
