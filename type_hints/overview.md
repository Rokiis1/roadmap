# Content of Python Dynamic Typing Level 1

- [Static typing vs dynamic typing](#static-typing-vs-dynamic-typing)
- [Values have types, variables are names](#values-have-types-variables-are-names)
- [Rebinding and type changes](#rebinding-and-type-changes)
- [Python is dynamically typed and strongly typed](#python-is-dynamically-typed-and-strongly-typed)
- [Runtime errors and safe conversion](#runtime-errors-and-safe-conversion)
- [Duck typing](#duck-typing)
- [Practical guidelines](#practical-guidelines)

One of the standout features of the Python language is that it is a **dynamically typed** language. Many compiler-based languages such as **C/C++** and **Java** are commonly described as **statically typed**. Understanding the difference helps explain why Python allows flexible reassignment while still raising type errors during execution.

## Static typing vs dynamic typing

In a **statically typed** language, each variable has a type that is fixed by declaration. The compiler checks type correctness before the program runs. If you assign a value of the wrong type, you get a compile-time error.

For example, in Java.

```java
public class MyClass {
   public static void main(String args[]) {
      int var;
      var = "Hello";

      System.out.println("Value of var = " + var);
   }
}
```

Here `var` is declared as an `int`. Assigning `"Hello"` (a `String`) is not allowed, so the compiler reports an error similar to.

```bash
/MyClass.java:4: error: incompatible types: String cannot be converted to int
   var="Hello";
      ^
1 error
```

In **dynamic typing**, the type is not locked to the variable name. Instead, the type belongs to the value at runtime. This is why Python lets the same variable name refer to different kinds of values while the program is running.

## Values have types, variables are names

In Python, the **object** has a type, and the **variable** is just a name pointing to an object.

```py
object1 = 10
print(type(x))

object2 = "hello"
print(type(x))
```

The name `object1` is reused, but the values are different objects with different types.

## Rebinding and type changes

Assignment in Python rebinds a name to a new value.

```py
object1 = 5
object1 = object1 + 1
object1 = "five"
```

This is normal and expected in Python. The language does not require you to declare types before assignment.

## Python is dynamically typed and strongly typed

Dynamic typing means types are decided at runtime, but Python is also **strongly typed**, meaning it does not automatically mix incompatible types.

```py
"5" + 2
```

This raises a `TypeError`, because Python will not silently convert an integer into a string.

Explicit conversion is required.

```py
"5" + str(2)
```

or

```py
int("5") + 2
```

## Runtime errors and safe conversion

Because Python checks types at runtime, some mistakes only show up when that line of code executes.

```py
value = "10"
result = value + 5
```

This fails at runtime because `value` is a string.

Safe conversion can be done explicitly.

```py
value = "10"
result = int(value) + 5
```

If conversion might fail, handle it safely.

```py
value = "ten"

try:
    result = int(value) + 5
except ValueError:
    result = None
```

## Duck typing

Python code often relies on behavior instead of strict type declarations. This is known as duck typing.

```py
def shout(text):
    return text.upper()
```

The function works for any object that provides an `.upper()` method. If the object does not support it, the error appears at runtime.

## Practical guidelines

When working with dynamically typed code, variable usage should remain clear and consistent throughout its lifetime. Even though Python allows a variable to be rebound to values of different types, doing so without a clear reason can make code harder to understand and debug.

External input such as user input, request data, file contents, or network responses should be converted as early as possible. Treat incoming data as untrusted and normalize it into the expected form before it reaches core logic.

It is important not to assume a value’s type based on how it looks. A value that appears numeric may still be a string, and treating it as a number without conversion can lead to runtime errors or incorrect behavior.

When a function or module expects values of a certain kind, those expectations should be documented clearly. This can be done through **docstrings**, **comments**, or by using **type hints**, which help communicate intent even though Python remains dynamically typed.
