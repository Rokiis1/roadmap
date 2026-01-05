# Content of Python operations 1 level

- [Operators and operands](#operators-and-operands)
- [Assignment and augmented assignment operators](#assignment-and-augmented-assignment-operators)
- [Comparison operators](#comparison-operators)
- [Logical operators and truthiness](#logical-operators-and-truthiness)
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

When you attempt to perform division by zero—using either `/` or `%` Python will raise a `ZeroDivisionError`. This error indicates that dividing by zero is not allowed.

```py
result = 10 / 0

print(result)
```

*Running this code will raise a `ZeroDivisionError`.*

You cannot add two different types. For example, adding an integer and a string will raise a `TypeError`.

```py
a = 10
b = "hello"
result = a + b  # TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Up to this point, we've touched on basic and augmented operators. Now, we'll move on to comparing values using comparison operators. This will show you how to evaluate relationships (*equal to* `==`, *not equal to* `!=`, *greater than* `>`, or *less than* `<`) between values.

## Comparison operators

Let's see what the syntax is when using different comparison operators.

```py
equal_to = a == b # True if a equals b
not_equal_to = a != b # True if a is not equal to b
greater_than = a > b # True if a is greater than b
less_than = a < b # True if a is less than b
greater_or_equal = a >= b # True if a is greater than or equal to b
less_or_equal = a <= b # True if a is less than or equal to b
```

And it's important to be aware of some edge cases with these operators, especially when dealing with `float` numbers.

```py
x = 0.1 + 0.2
y = 0.3

print(x == y) # False
```

*Due to limitations in how floating-point numbers are represented, `x` is not exactly equal to `y`.*

Also, if we compare different data types like strings and integers using ordering operators (such as `<` or `>`), Python will raise a `TypeError`.

```py
a = 10
b = "hello"

result = a < b # TypeError: '<' not supported between instances of 'int' and 'str'
```

*This error occurs because Python does not support ordering comparisons between non-compatible types like integers and strings.*

And the last operator we need to cover at this level is Logical Operations.

## Logical operators and truthiness

When using logical operators, Python evaluates values based on their truthiness whether they're **"truthy"** or **"falsy"**. Non-boolean values are interpreted as either **True** or **False** in a boolean context depending on their inherent properties.

- **Truthy:** Values that are considered true (*non-empty strings, non-zero numbers*).

- **Falsy:** Values that are considered false (*empty strings, 0, `None`*).

Let's see what kind of logical operators exist

The `and` operator returns the first falsy operand it encounters, or the last operand if all are truthy.

```py
x = ""
y = "Python"
result = x and y # Returns x because it's falsy
print("x and y:", result)  # Output: ""

a = 10
b = 20
result = a and b # Both are truthy, so returns b (the last operand)
print("a and b:", result)  # Output: 20
```

The `or` operator returns the first truthy operand, or the last operand if all are falsy.

```py
x = ""
y = "Python"
result = x or y # Returns y because it's the first truthy operand
print("x or y:", result) # Output: "Python"

a = 0
b = 0
result = a or b # Both are falsy, so returns the last operand, b (which is 0)
print("a or b:", result) # Output: 0
```

The `not` operator simply inverts the truth value.

```py
x = True
result = not x  # Inverts True to False
print("not x:", result)  # Output: False

y = ""
result = not y  # Inverts falsy (empty string) to True
print("not y:", result)  # Output: True
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
