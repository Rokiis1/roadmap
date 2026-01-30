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

Logical operators are most often used to combine **comparison results** into a single condition.

```py
age = 20
has_id = True

result = age >= 18 and has_id
print(result) # True
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

`or` in a practical scenario

```py
is_admin = False
is_owner = True

result = is_admin or is_owner
print(result) # True
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

Using `not` in practice

```py
is_logged_in = False

result = not is_logged_in
print(result) # True
```

Logical expressions often depend on whether a value exists in a collection or whether two variables refer to the same object. For this, Python provides **membership** and **identity** operators.

## Membership operators

Membership operators allow us to check whether a value exists inside a container such as a **list**, **string**, or **dictionary**.

```py
# To check if an element is in a container
element in container
# To check if an element is not in a container
element not in container
```

There is examples how we can check whether a value is present in a container using the `in` and `not in` operators.

```py
allowed_users = ["admin", "editor", "viewer"]
current_user = "editor"
blocked_user = "guest"

# Check if a user is allowed
print(current_user in allowed_users) # True

# Check if a user is not allowed
print(blocked_user not in allowed_users) # True
```

When used with **lists or strings**, membership checks whether a value exists as an element in the container and is **case-sensitive**.

```py
allowed_users = ["antanas", "virgis", "petras"]

# Case-sensitive membership check
print("antanas" in allowed_users) # True
print("Antanas" in allowed_users) # False
```

This means that the membership check takes the exact case of the characters into account.

When you use the membership operator with a **dictionary**, it checks for **`keys`**, not values.

```py
user = {
    "username": "testas",
    "email": "testas@example.com"
}

# Check if "email" is a key in the dictionary
print("email" in user) # Output: True
# Check if "password" is not a key in the dictionary
print("password" not in user) # Output: False
```

While **membership** checks whether a `value` exists in a container, **identity** operators answer a different question, **whether two variables refer to the same object**.

## Identity operators

Identity operators check whether two **variables** reference the same **object in memory**. They do **not** compare values, they compare **object identity**.

Here is the syntax.

```py
# Check if object1 and object2 refer to the same object
object1 is object2

# Check if object1 and object2 do not refer to the same object
object1 is not object2
```

Below are examples of how we can implement the identity operators

```py
config = {"theme": "dark", "language": "en"}
active_config = config # Both variables refer to the same object
default_config = {"theme": "dark", "language": "en"}

print(config is active_config) # True
print(config is default_config) # False
print(config is not default_config) # True
```

*In this example, when we assign `config` to `active_config`, both variables refer to the same object in memory, so `config is active_config` returns `True`. However, `default_config` is a different object with the same content, so `config is default_config` returns `False`, and consequently, `config is not default_config` returns `True`.*

Like **membership operators**, **identity comparisons** are **case-sensitive** when dealing with **strings**.

```py
status1 = "active"
status2 = "Active"

print(status1 is status2) # False, because the strings differ in case
```

A very common and correct use of identity operators is checking for `None`.

```py
value = None

print(value is None) # True
print(value is not None) # False
```

`None` represents the **absence of a value**, and there is only **one `None` object** in Python. For this reason, `is` the recommended way to compare with `None`.

It is important to understand that `None` and an empty string `""` are **not the same thing**.

```py
text = ""

print(text == "") # True
print(text is None) # False
```

An empty string is still a **valid value**, while `None` means **no value at all**. Use `==` to compare values and `is` to check identity, especially with `None`

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
total_score = 40
bonus_points = 15

result = total_score + bonus_points >= 50
print(result) # True
```

Or this

```py
hours_worked = 7
required_hours = 8

result = hours_worked + 2 > required_hours
print(result) # True
```

Here, the **addition** is evaluated first, followed by the comparison.

Logical operators are evaluated **after comparisons**, which includes both `and` and `or`.

```py
score = 85
passed_exam = score >= 60
attendance_ok = True

result = passed_exam and attendance_ok
print(result) # True
```

In this example, Python first evaluates the **arithmetic** expressions, then applies the **comparison** operations, and finally evaluates the **logical** `and` operator.

```py
is_admin = False
has_special_access = True

result = is_admin or has_special_access
print(result) # True
```

This follows the same evaluation order Python evaluates the **arithmetic** expressions first, then the **comparisons**, and finally the **logical** `or` operator.
