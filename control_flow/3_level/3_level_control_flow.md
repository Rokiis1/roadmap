# Content of Python control flow 3 level

- [Match-Case Statement](#match-case-statement)
- [Nested If Statements](#nested-if-statements)
- [Conditional Expressions (Ternary Operator)](#conditional-expressions-ternary-operator)
- [Nested Loops](#nested-loops)
- [List Comprehension](#list-comprehension)

So far, we have used control flow to make decisions using `if`, `elif`, and `else`, and to repeat actions using loops. These tools allow programs to respond to conditions and handle repeated logic, but as programs grow, decision-making logic can become more complex and harder to read.

In many programs, decisions are based on the **value of a single variable**, such as a **command**, a **status code**, or a **user choice**. Writing long chains of `if` and `elif` statements for these cases can make code difficult to follow and maintain.

To address this, Python provides a more structured way to express multi-branch decisions using the **match-case statement**.

## Match-Case Statement

The `match-case` statement allows a program to compare a value against multiple possible patterns and execute different code blocks based on which pattern matches.

Conceptually, `match-case` serves a similar purpose to a long `if-elif-else` chain, but it is designed to be **clearer**, **more readable**, and **easier to extend** when working with many possible cases.

A `match-case` statement begins with the `match` keyword, followed by the value being examined. Each possible outcome is defined using a `case`.

```py
match value:
    case pattern_1:
        # code to execute if pattern_1 matches
    case pattern_2:
        # code to execute if pattern_2 matches
    case _:
        # default case
```

The underscore (`_`) acts as a default case, similar to `else`, and is used when none of the other patterns match.

Here is a simple example that replaces a multi-branch conditional with `match-case`.

```py
command = "start"

match command:
    case "start":
        print("Program started")
    case "stop":
        print("Program stopped")
    case "pause":
        print("Program paused")
    case _:
        print("Unknown command")
```

In this example, the value of `command` is compared against each case. When a match is found, the corresponding block of code runs, and the remaining cases are skipped.

This pattern is most effective when decisions are based on **one variable** whose possible values are **known and discrete**, such as **commands**, **modes**, or **status values**.

In practice, `match-case` is commonly placed inside functions, allowing decision logic to be reused and kept separate from input and output concerns.

```py
def handle_command(command):
    match command:
        case "start":
            return "Program started"
        case "stop":
            return "Program stopped"
        case "pause":
            return "Program paused"
        case _:
            return "Unknown command"

result = handle_command("start")
print(result)
```

Here, the function **encapsulates** the decision logic and returns a result instead of printing it directly, making the behavior to integrate into programs.

In applications, `match-case` is frequently used to handle application **states**, **roles**, or **configuration values**.

```py
def get_access_level(role):
    match role:
        case "admin":
            return "Full access"
        case "editor":
            return "Edit access"
        case "viewer":
            return "Read-only access"
        case _:
            return "No access"
```

Each case represents a clearly defined state. Adding new roles requires only adding a new `case`, without changing existing logic.

Another common use case is handling **status values** returned by a process or system.

```py
def handle_status(status):
    match status:
        case "success":
            return "Operation completed"
        case "pending":
            return "Waiting for completion"
        case "failed":
            return "Operation failed"
        case "timeout":
            return "Operation timed out"
        case _:
            return "Unknown status"
```

Here, the program reacts differently depending on a single status value, while keeping the logic easy to read and maintain.

In applications, a case often represents a **high-level category**, but additional rules still need to be applied inside that category.

This is where **`if` statements** are commonly used **inside a `case`**.

```py
def get_dashboard(role, active):
    match role:
        case "admin":
            if not active:
                return "Admin account inactive"
            return "Admin dashboard"
        case "editor":
            if not active:
                return "Editor account inactive"
            return "Editor dashboard"
        case "viewer":
            return "Viewer dashboard"
        case _:
            return "Unknown role"
```

In this example, `match-case` selects the **role**, which is a single controlling value. The `if` inside each case **applies additional conditions** that are relevant only for that role.

While `match-case` improves clarity for **value-based decisions**, it is not suitable for all scenarios.

A common mistake is trying to use `match-case` for decisions that depend on **multiple interacting conditions**.

```py
if role == "admin" and active:
    pass
```

Logic like this is better handled by **`if` statements**, because `match-case` is designed for **value matching**, not **relationship checking**.

Another pitfall is omitting the default (`_`) case.

```py
def handle_command(command):
    match command:
        case "start":
            return "Program started"
        case "stop":
            return "Program stopped"

result = handle_command("restart")
print(result)
```

Here, `"restart"` does not match any case. Because there is no default case, none of the branches execute and the function returns `None` implicitly. If the rest of the program assumes a valid result, this can introduce bugs.

Finally, using `match-case` for very small decisions can reduce clarity. When there are only **one** or **two** branches, a simple `if-else` statement is often easier to read.

When decision-making depends on multiple checks or hierarchical rules, nested `if` statements are a more appropriate choice.

## Nested If Statements

Nested `if` statements are used when a decision depends on **multiple conditions**, where one condition must be checked **only if another condition is already satisfied**.

Instead of evaluating all conditions at the same level, nested `if` statements allow programs to express **step-by-step decision logic**, where each decision leads to another check.

Conceptually, this represents a decision tree, where each branch depends on the outcome of the previous one.

The basic structure of a nested `if` statement looks like this.

```py
if condition_1:
    if condition_2:
        # code executed if both conditions are True
```

Here, `condition_2` is evaluated **only if** `condition_1` is `True`.

Below is a simple example that demonstrates nested decision logic.

```py
user_logged_in = True
user_role = "editor"

if user_logged_in:
    if user_role == "admin":
        print("Admin dashboard loaded")
    elif user_role == "editor":
        print("Editor tools loaded")
    else:
        print("Viewer access only")
else:
    print("Please log in")
```

In this example, the program first checks whether the user is logged in. Only if that condition is True does it then check the user’s role. This ensures that role-based logic is evaluated only when it is relevant.

Nested `if` statements are commonly used when rules must be applied in sequence, such as checking authentication before permissions, validating steps in a process, or handling dependent states.

In practice, nested `if` statements are often placed inside functions to keep decision logic reusable and organized.

```py
def get_user_view(user_logged_in, user_role):
    if user_logged_in:
        if user_role == "admin":
            return "Admin dashboard loaded"
        elif user_role == "editor":
            return "Editor tools loaded"
        else:
            return "Viewer access only"
    else:
        return "Please log in"

result = get_user_view(True, "editor")
print(result)
```

Here, the nested conditions are **encapsulated** inside a function, allowing the same logic to be reused across a program.

A common pitfall with nested `if` statements is placing a dependent check in the wrong scope. For example, if a program checks a user role without first confirming that the user is logged in, it can lead to incorrect behavior.

```py
user_logged_in = False
user_role = "admin"

if user_role == "admin":
    print("Admin dashboard loaded")
else:
    print("Please log in")
```

In this example, the program loads the admin dashboard even though the user is not logged in, because the login check is not protecting the role check. This kind of mistake happens when conditions that should be sequential are written as independent checks.

While nested `if` statements are powerful, deeply nested logic can become difficult to read.

```py
user_logged_in = True
account_active = True
has_subscription = True
is_admin = False

if user_logged_in:
    if account_active:
        if has_subscription:
            if is_admin:
                print("Admin dashboard loaded")
            else:
                print("User dashboard loaded")
        else:
            print("Subscription required")
    else:
        print("Account inactive")
else:
    print("Please log in")
```

Although this code works, understanding **which condition leads to which** outcome requires tracing several levels of indentation. As more conditions are added, the logic becomes harder to follow and easier to break.

At this point, even small changes, such as **adding a new rule**, require adjusting multiple nested blocks, increasing the risk of bugs.

Deep nesting like this is often a sign that the logic should be **simplified** using clearer control flow patterns.

Here is **early exits (guard clauses)**, where invalid or failure cases return early, reducing nesting.

```py
def load_dashboard(user_logged_in, account_active, has_subscription, is_admin):
    if not user_logged_in:
        return "Please log in"
    if not account_active:
        return "Account inactive"
    if not has_subscription:
        return "Subscription required"
    if is_admin:
        return "Admin dashboard loaded"

    return "User dashboard loaded"

print(load_dashboard(True, True, True, False))
```

In this version, each failure condition is handled immediately. As soon as a condition fails, the function returns and no further checks are performed. This keeps the main logic flat and prevents it from being buried inside multiple nested blocks.

Another way to reduce nesting is **combining related conditions logically** when they are truly dependent.

```py
if user_logged_in and account_active and has_subscription:
    if is_admin:
        print("Admin dashboard loaded")
    else:
        print("User dashboard loaded")
else:
    print("Access conditions not met")
```

This approach works when several conditions must all be `True` before continuing. It reduces indentation, but it should be used carefully, since combining too many conditions can hide decision steps and make debugging harder.

In some cases, the decision logic itself is simple, but writing a full `if-else` block can feel unnecessarily verbose. When a program needs to choose **one of two values** based on a single condition, Python provides a more compact form known as a **conditional expression**, also referred to as the **ternary operator**.

This construct allows decisions to be expressed in a single line.

## Conditional Expressions (Ternary Operator)

Conditional expressions, also known as the **ternary operator**, provide a compact way to choose between two values based on a single condition.

Instead of writing a full `if-else` block, a conditional expression allows the same logic to be expressed **in one line**, making simple decisions easier to read when used appropriately.

A conditional expression has the following structure.

```py
value_if_true if condition else value_if_false
```

The condition is evaluated first, `if` it is `True`, the expression returns `value_if_true`, `if` it is `False`, the expression returns `value_if_false`.

Here is a example where a program selects a message based on application state.

```py
user_logged_in = True
message = "Welcome back" if user_logged_in else "Please log in"
print(message)
```

In this example, the program chooses between two messages based on whether the user is logged in. The conditional expression replaces a longer `if-else` block while keeping the intent clear.

The same logic written using a traditional `if-else` block would look like this.

```py
if user_logged_in:
    message = "Welcome back"
else:
    message = "Please log in"
```

Conditional expressions are commonly used when assigning values, returning results from functions, or selecting simple outputs based on a condition.

In practice, conditional expressions are often placed inside functions to keep logic concise.

```py
def get_greeting(user_logged_in):
    return "Welcome back" if user_logged_in else "Please log in"

result = get_greeting(False)
print(result)
```

While conditional expressions improve readability for **simple binary decisions**, they can cause problems when used in real application logic that involves multiple outcomes.

A common mistake is using a conditional expression when a value can take more than two meaningful states.

```py
status = "maintenance"
message = "Service available" if status == "online" else "Service unavailable"
print(message)
```

In this example, `"maintenance"` is treated the same as `"offline"`, even though the meanings are different. The conditional expression silently collapses multiple states into a single outcome, hiding logic.

As requirements grow, developers may try to extend the expression further.

```py
message = (
    "Service available"
    if status == "online"
    else "Maintenance mode"
    if status == "maintenance"
    else "Service unavailable"
)
```

The **parentheses `()`** here are used to **group the conditional expression and allow it to span multiple lines**. They do not change the logic of the **expression**. Instead, they make the code syntactically valid without using line continuation characters and help with formatting.

Although the parentheses **improve layout**, they do **not improve clarity**. The logic is still compressed into a single **expression**, making it difficult to see which condition produces which result.

In situations like this, traditional `if-elif-else` statements are clearer.

```py
if status == "online":
    message = "Service available"
elif status == "maintenance":
    message = "Maintenance mode"
else:
    message = "Service unavailable"
```

When decision logic grows beyond this, standard conditional statements provide better readability.

So far, we have focused on making decisions within a program. However, many problems require not only decision-making, but also **repeating logic inside other repeated logic**.

In these situations, a single loop is not sufficient. Instead, loops are placed **inside other loops**, allowing programs to work with structured data such as **tables**, **grids**, **grouped records**, or **multi-level collections**.

This pattern is known as **nested loops**.

## Nested Loops

Nested loops are used when a program needs to **repeat an action inside another repeated action**. This happens when working with data that is structured in multiple levels, such as **rows** and **columns**, **grouped values**, or **collections that contain other collections**.

Conceptually, a nested loop represents a loop **inside another loop**. The **outer loop** selects a group (row, user, session, day), while the **inner loop** processes items inside that group.

```py
for outer_item in outer_collection:
    for inner_item in inner_collection:
        # code executed for each inner_item
```

A common example is working with **cinema seating**, where seats are organized by rows.

```py
cinema_seats = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"]
]

for row in cinema_seats:
    for seat in row:
        print("Checking seat:", seat)
```

Here, the **outer loop** moves through each row in the cinema, and the **inner loop** checks each seat within that row. A single loop would not be sufficient, because seats belong to rows.

Nested loops are also used when **filtering** grid-based data, such as checking which seats are available.

```py
cinema_seats = [
    ["free", "free", "taken"],
    ["taken", "free", "free"],
    ["free", "taken", "taken"]
]

for row in cinema_seats:
    for seat in row:
        if seat == "free":
            print("Seat available")
```

In this example, each seat must be checked individually, but only after selecting the row it belongs to.

In programs, nested loops are often placed inside **functions** to keep logic organized and reusable.

```py
def find_free_seats(seats):
    for row in seats:
        for seat in row:
            if seat == "free":
                print("Free seat found")

find_free_seats(cinema_seats)
```

This pattern (nested loops inside a function) is important because it makes the looping logic reusable and easier to test.

Nested loops are not limited to **lists**. They are very common when working with **dictionaries that contain collections**, where a `key` defines context and the value contains multiple related items.

```py
role_permissions = {
    "admin": ["read", "write", "delete"],
    "editor": ["read", "write"],
    "viewer": ["read"]
}

for role, permissions in role_permissions.items():
    for permission in permissions:
        print(role, "can", permission)
```

The **outer loop** selects a `role`, and the **inner loop** processes each `permission` for that `role`.

Nested loops are also common when the inner collection must contain **unique values**. In real applications, this is where **sets** are often used.

For example, a system may track which users registered for each workshop session. A user should not appear twice in the same session, so a **set** is a natural fit.

```py
session_attendees = {
    "python_basics": {"Example1", "Example2", "Example3"},
    "data_analysis": {"Example4", "Example5"},
    "web_dev": {"Example6", "Example7", "Example8"}
}

for session, attendees in session_attendees.items():
    for person in attendees:
        print(session, "attendee:", person)
```

Here, the **dictionary** `key` defines the session, and the **set** guarantees each attendee is unique. Nested loops are required because attendees are grouped by session.

A common pitfall is assuming sets have a stable order. Because sets are **unordered(no indexing)**, code should not depend on which attendee appears **first**.

```py
for session, attendees in session_attendees.items():
    for person in attendees:
        print(person)
```

This is valid only when order does not matter.

Tuples commonly appear in nested loops when values belong together as a **fixed record**, such as **coordinates** or **structured entries**.

For example, delivery routes can be represented as a sequence of **coordinate pairs**, where each pair is a **tuple**.

```py
routes = [
    [("A", 1), ("A", 2), ("A", 3)],
    [("B", 1), ("B", 2)],
    [("C", 1), ("C", 2), ("C", 3), ("C", 4)]
]

for route in routes:
    for stop in route:
        print("Stop:", stop)
```

Here, each `stop` is a **tuple** that stays together as a single unit.

A common pitfall is **unpacking** tuples incorrectly.

```py
route = [("A", 1, "north"), ("B", 2, "south")]

for stop, position in route:
    print(stop, position)
```

This code fails because each **tuple** contains **three values**, but the loop attempts to **unpack** only **two variables**. Python raises a `ValueError` because the structure of the data does not match the unpacking pattern.

To fix this, the number of variables must match the structure of the tuple.

```py
for stop, position, direction in route:
    print(stop, position, direction)
```

When all values are not needed, the unused ones can be intentionally ignored using `_`.

```py
for stop, position, _ in route:
    print(stop, position)
```

Using `_` makes it explicit that the extra value exists but is not relevant for the current logic.

Nested loops with `range()` are used when the number of iterations is fixed and the values are positions or attempts rather than real data items.

An example is retry logic with attempts and retries per attempt.

```py
max_attempts = 3
retries_per_attempt = 2

for attempt in range(max_attempts):
    for retry in range(retries_per_attempt):
        print("Attempt:", attempt, "Retry:", retry)
```

A frequent pitfall here is placing `break` and expecting it to stop both loops.

```py
for attempt in range(max_attempts):
    for retry in range(retries_per_attempt):
        if retry == 1:
            break
    print("Attempt finished:", attempt)
```

This breaks only the **inner loop**. The **outer loop** continues with the next attempt.

When the loop variable is not meaningful and the loop exists only for repetition, `_` is used to show the variable is intentionally ignored.

```py
for _ in range(3):
    for _ in range(2):
        print("Sending heartbeat")
```

Nested loops should be used thoughtfully. Deeply nested loops can become difficult to read and may impact performance when working with **large datasets**.

```py
users = [
    {"name": "Example1", "actions": ["login", "view", "logout"]},
    {"name": "Example2", "actions": ["login", "error", "retry", "logout"]},
    {"name": "Example3", "actions": ["login", "view", "purchase", "logout"]}
]
```

A straightforward approach checks every action for every user.

```py

def find_error_users(users):
    for user in users:
        for action in user["actions"]:
            if action == "error":
                print("Error found for user:", user["name"])
```

Although this works, it continues scanning actions even after an error has already been detected for that user.

A common first improvement is using `break` to stop the **inner** loop once the error is found.

```py
for user in users:
    for action in user["actions"]:
        if action == "error":
            print("Error found for user:", user["name"])
            break
```

This `break` stops only the **inner loop**. The program still continues with the next `user`. This is correct only if the goal is *report every user that has an error*.

If the goal is to *find only the first user with an error*, an early `return` is clearer and more efficient.

```py
def find_first_error_user(users):
    for user in users:
        for action in user["actions"]:
            if action == "error":
                return user["name"]
    return None

result = find_first_error_user(users)
print(result)
```

Early return silently stops processing. If requirements change to “find all users with errors”, this logic becomes incorrect because later users are never checked.

Another subtle mistake happens when `return` is placed at the wrong nesting level.

```py
def find_first_error_user(users):
    for user in users:
        for action in user["actions"]:
            if action == "error":
                return user["name"]
        return None
```

This stops after checking only the first user, even if later users contain errors. The loops look correct, but the control flow is not.

These examples show that nested loops are great, but each `break` and `return` changes **how much data is processed** and **when execution stops**. Keeping these decisions aligned with the goal prevents silent bugs as programs grow.

In many situations, nested loops are used not because the logic itself is complex, but because data is **grouped**. Often, the real goal is simply to **filter**, **transform**, or **collect** data into a new list.

When the logic follows a simple pattern and the result is a **list**, writing full loop blocks can feel unnecessarily verbose. For these cases, Python provides a more compact construct called **list comprehension**.

## List Comprehension

A list comprehension creates a new list by applying an expression to each element of an iterable, optionally including only elements that satisfy a condition.

Conceptually, a **list** comprehension combines three ideas into a single expression - **iterating over data**, **optionally filtering items**, **producing a new list**.

The general structure looks like this.

```py
[expression for item in iterable]
```

A common example is selecting only **active records** from a dataset.

```py
users = [
    {"name": "Example1", "active": True, "role": "admin", "last_login": 45},
    {"name": "Example2", "active": False, "role": "editor", "last_login": 10},
    {"name": "Example3", "active": True, "role": "user", "last_login": 60}
]

active_users = [user for user in users if user["active"]]
print(active_users)
```

Here, the **list comprehension** produces a **filtered list** that contains only the `users` that meet the condition. This new **list** can then be reused elsewhere in the program, such as for **reporting** or **further processing**.

The same task written with a **traditional loop** requires more lines of code, even though the underlying logic and result remain exactly the same.

```py
active_users = []

for user in users:
    if user["active"]:
        active_users.append(user)

print(active_users)
```

Here, the program explicitly creates an **empty list** and then fills it by checking each user one by one. While this version is perfectly valid, it requires more boilerplate code for a simple filtering task.

List comprehensions are also commonly used to **extract specific values** from structured records.

```py
orders = [
    {"id": "ORD-1001", "status": "shipped"},
    {"id": "ORD-1002", "status": "pending"},
    {"id": "ORD-1003", "status": "shipped"}
]

shipped_order_ids = [
    order["id"] for order in orders if order["status"] == "shipped"
]

print(shipped_order_ids)
```

In this example, the program builds a list of identifiers that match a given condition. This pattern appears frequently in applications where only part of a dataset is needed for the next step.

The same task written using a **regular loop** makes each step explicit.

```py
shipped_order_ids = []

for order in orders:
    if order["status"] == "shipped":
        shipped_order_ids.append(order["id"])

print(shipped_order_ids)
```

Just like **loops**, **list comprehensions** are often placed inside functions to keep logic reusable and well-scoped.

```py
def get_admin_users(users):
    return [user for user in users if user["role"] == "admin"]

admins = get_admin_users(users)

print(admins)
```

While **list comprehensions** improve readability for **simple filtering** and **transformation**, they should be used with care. When conditions grow more complex or multiple decisions are involved, compressing everything into a single expression can make the code harder to read.

The same logic written using a **regular loop** inside the function is more verbose but equally valid.

```py
def get_admin_users(users):
    result = []

    for user in users:
        if user["role"] == "admin":
            result.append(user)

    return result

admins = get_admin_users(users)
print(admins)
```

A common mistake is attempting to encode too much logic into one comprehension.

```py
result = [
    user["name"]
    for user in users
    if user["active"] and user["role"] == "admin" and user["last_login"] > 30
]
```

Although this code works, understanding the decision logic now requires careful reading. At this point, the list comprehension is no longer simplifying the logic, it is **hiding it**.

The same logic written using a **regular loop** makes each decision explicit.

```py
result = []

for user in users:
    if not user["active"]:
        continue

    if user["role"] != "admin":
        continue

    if user["last_login"] <= 30:
        continue

    result.append(user["name"])
```
