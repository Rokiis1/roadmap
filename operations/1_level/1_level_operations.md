# Content of Python operations 1 level

- [Operators and operands](#operators-and-operands)
- [Assignment and augmented assignment operators](#assignment-and-augmented-assignment-operators)
- [Order of operations (arithmetic expressions)](#order-of-operations-arithmetic-expressions)

Before we dive deeper into common operations, it's important to understand a few key concepts about **operators** and **operands** in Python.

## Operators and operands

**Unary operators** require just one operand, the negation operator (`-`) turns a positive number into a negative one.

**Binary operators**, on the other hand, require two operands, take addition (`+`) as an example, which combines two values to produce their sum. The `variables`, `values`, or `expressions` on which these operators act are called operands.

Below are some examples demonstrating how assignment and arithmetic operators work together.

We'll start with a Unary Operator, which acts on a single operand.

```py
# Unary operator: negation
num = 20
negative_num = -num  # This gives -20
```

On the other hand, we have Binary Operators which combine two values.

```py
num1 = 2
num2 = 3

addition = num1 + num2
subtraction = num1 - num2
division = num1 / num2
remainder = num1 % num2
power = num1 ** num2
```

## Assignment and augmented assignment operators

We've touched on some basic operators, and now let's dive deeper to explore **augmented assignment**. Instead of writing `a = a + b`, you can simply write `a += b` this is shorthand.

And below are some examples of the kinds of operators you can use.

```py
a = 10
a += 5 # a = a + 5

b = 20
b -= 4 # b = b - 4

c = 3
c *= 3 # c = c * 3

d = 40
d /= 4 # d = d / 4

e = 17
e %= 5 # e = e % 5

f = 2
f **= 3 # f = f ** 3
```

When you attempt to perform division by zero using either `/` or `%` Python will raise a `ZeroDivisionError`. This error indicates that dividing by zero is not allowed.

```py
result = 10 / 0

print(result)
```

*Running this code will raise a `ZeroDivisionError`.*

You cannot add two different types. For example, adding an integer and a string will raise a `TypeError`.

```py
a = 10
b = "hello"
result = a + b # TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Up to this point, we’ve learned about different kinds of operators and how they work individually. However, in real-world problems especially in math and physics you’ll often encounter expressions that combine multiple operations.

To correctly evaluate these expressions, Python follows a specific set of rules that determine the order in which operations are performed. In this section, we’ll focus on the order of operations for arithmetic expressions and learn how to control it using parentheses.

## Order of operations (arithmetic expressions)

When an arithmetic expression contains more than one operator, Python follows a specific set of rules similar to those used in mathematics to decide which operation is evaluated first. These rules are applied whenever an expression includes multiple arithmetic operators.

The first rule involves **parentheses** `( )`. Expressions inside parentheses are always evaluated first, allowing you to explicitly control the order of evaluation.

```py
result = (2 + 3) * 4
print(result) # 20
```

If no parentheses are present, Python next evaluates **exponentiation** `**`. Exponentiation is evaluated from **right to left**.

```py
result = 2 ** 3 ** 2
print(result) # 512
```

After exponentiation, Python evaluates **multiplication, division, and modulus** operators `*`, `/`, `%`. These operations are evaluated from **left to right**.

```py
result = 10 / 2 * 5
print(result) # 25.0
```

Finally, Python evaluates **addition and subtraction** operators `+` and `-`, which are also evaluated from **left to right**.

```py
result = 10 - 3 + 2
print(result) # 9
```

Even though Python already follows a defined order of operations, parentheses are often required when writing math or physics equations in code to represent the correct grouping of values.

```py
distance = speed * (time + delay)
```

In this expression, the parentheses indicate that `time + delay` must be calculated first and treated as a single quantity before multiplying by `speed`. Without these parentheses, the expression would represent a different equation. Python evaluates it as `(speed * time) + delay`, which is mathematically valid but does not match the intended formula.

Using parentheses in this way ensures that the code matches the intended mathematical formula and produces the correct result.
