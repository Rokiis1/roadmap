# Content of Python Operations Level 2

- [Comparison operators](#comparison-operators)
- [Logical operators and truthiness](#logical-operators-and-truthiness)
- [Membership operators](#membership-operators)
- [Identity operators](#identity-operators)
- [Operator precedence and associativity](#operator-precedence-and-associativity)

In **Operations Level 1**, we covered basic **arithmetic operations**, **augmented assignments**, and the **order of operations for arithmetic expressions**.

In this level, we build on that foundation by exploring how Python compares values, evaluates logical conditions, checks membership in containers, identifies objects, and determines the evaluation order when different kinds of operators are combined.

## Comparison operators

Comparison operators allow us to compare two values and determine the relationship between them.

```py
equal_to = a == b # True if a equals b
not_equal_to = a != b # True if a is not equal to b
greater_than = a > b # True if a is greater than b
less_than = a < b # True if a is less than b
greater_or_equal = a >= b # True if a is greater than or equal to b
less_or_equal = a <= b # True if a is less than or equal to b
```

While these operators are straightforward, some edge cases are important to understand especially when working with **floating-point numbers**.

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

Once **comparisons** are understood, we can combine them to form more complex conditions using **logical operators**.

## Logical operators and truthiness

Logical operators allow us to combine or modify comparison results. Python evaluates values based on their **truthiness**, meaning **non-boolean** values can still be treated as `True` or `False` in **logical expressions**.

- **Truthy:** Values that are considered true (*non-empty strings, non-zero numbers*).

- **Falsy:** Values that are considered false (*empty strings, 0, `None`*).

The `and` operator returns the first **falsy** value it encounters, or the last value if all are truthy.

```py
x = ""
y = "Python"
result = x and y # Returns x because it's falsy
print("x and y:", result) # Output: ""

a = 10
b = 20
result = a and b # Both are truthy, so returns b (the last operand)
print("a and b:", result) # Output: 20
```

The `or` operator returns the first truthy value, or the last value if all are falsy.

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
result = not x # Inverts True to False
print("not x:", result) # Output: False

y = ""
result = not y # Inverts falsy (empty string) to True
print("not y:", result) # Output: True
```

Logical operators are often used together with comparisons, which makes it important to understand how Python **evaluates combined expressions**.

Before exploring that, we’ll look at two additional operator types used for **collections** and **objects**.

## Membership operators

Membership operators allow us to check whether a value exists inside a container such as a **list**, **string**, or **dictionary**.

```py
# To check if an element is in a container
element in container
# To check if an element is not in a container
element not in container
```

There is examples how we can check if the element `in` or `not in` in the container.

```py
fruits = ["apple", "banana", "cherry"]

# Check if "apple" is in the list of fruits
print("apple" in fruits) # Output: True
# Check if "orange" is not in the list of fruits
print("orange" not in fruits) # Output: True
```

When you use the membership operator with a dictionary, it checks for `keys`.

```py
person = {"name": "Testas", "age": 25}

# Check if "name" is a key in the dictionary
print("name" in person) # Output: True
# Check if "Example" is not a key in the dictionary
print("Example" not in person) # Output: True
```

When used with **dictionaries**, membership checks apply to `keys`, not `values`.

```py
fruits = ["apple", "banana", "cherry"]

# This will return False because "Apple" (with a capital "A") does not match "apple".
print("Apple" in fruits) # Output: False
```

This means that the membership check takes the exact case of the characters into account.

While **membership** checks whether a `value` exists in a container, **identity** operators answer a different question, **whether two variables refer to the same object**.

## Identity operators

Identity operators check whether two **variables** reference the same **object in memory**.

Here is the syntax.

```py
# Check if object1 and object2 refer to the same object
object1 is object2

# Check if object1 and object2 do not refer to the same object
object1 is not object2
```

Below are examples of how we can implement the identity operators

```py
a = [1, 2, 3]
b = a # b is the same object as a
c = [1, 2, 3]

print(a is b)
print(a is c)
print(a is not c) 
```

*In this example, when we assign `a` to `b`, both variables refer to the same object in memory, so `a is b` returns `True`. However, `c` is a different object with the same content as `a`, so `a is c` returns `False`, and consequently, `a is not c` returns `True`.*

Also, remember that, like **membership operators**, **identity comparisons** are **case-sensitive** when dealing with **strings**.

```py
string1 = "hello"
string3 = "Hello"

print(string1 is string3) # Output: False, because the strings differ in case
```

Now that we’ve covered **comparison, logical, membership, and identity operators** individually, we can look at how Python evaluates expressions that combine multiple types of operators.

## Operator precedence and associativity

When an expression contains multiple types of operators, Python determines the evaluation order using **operator precedence** and **associativity**.

**Operator precedence** defines which operators are evaluated first.

**Associativity** determines direction of evaluation for operators with the same precedence.

In **Operations Level 1**, we worked primarily with arithmetic operators. Some of these operators are evaluated from **left to right**.

Some of them evaluates **left to right**.

```py
result = 10 - 5 - 2
print(result) # 3
```

Python evaluates this expression `result = (10 - 5) - 2`

Other operators, such as exponentiation `**`, are evaluated from **right to left**.

```py
result = 2 ** 3 ** 2
print(result) # 512
```

Python evaluates this expression `result = 2 ** (3 ** 2)`

In **Operations Level 2**, we also learned how **comparison** and **logical** operators work individually. Now we consider how they **behave** when combined with other operations.

Comparison operators such as `==`, `<`, and `>` are evaluated after **arithmetic operations**, but before **logical operators**.

```py
result = 3 + 2 > 4
print(result) # True
```

Here, the **addition** is evaluated first, followed by the comparison.

Logical operators are evaluated **after comparisons**, which includes both `and` and `or`.

```py
result = 3 + 2 > 4 and 10 > 5
print(result) # True
```

In this example, Python first evaluates the **arithmetic** expressions, then applies the **comparison** operations, and finally evaluates the **logical** `and` operator.

```py
result = 3 + 2 > 4 or 10 > 5
print(result) # True
```

This follows the same evaluation order Python evaluates the **arithmetic** expressions first, then the **comparisons**, and finally the **logical** `or` operator.
