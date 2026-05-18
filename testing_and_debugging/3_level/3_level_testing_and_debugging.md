# Content of Python Testing and Debugging 4 level

- [Execution Control and Debugging Mindset](#execution-control-and-debugging-mindset)
- [Step-by-Step Execution](#step-by-step-execution)
- [Breakpoints and Paused Execution](#breakpoints-and-paused-execution)
- [Inspecting Runtime State](#inspecting-runtime-state)
- [Using pdb](#using-pdb)
- [Exception Propagation](#exception-propagation)
- [Handling Exceptions](#handling-exceptions)
- [Raising Exceptions Intentionally](#raising-exceptions-intentionally)

In **Python Testing and Debugging Level 1**, debugging focused on recognizing failures and understanding why programs break. We learned how to identify common errors, read traceback messages, observe program behavior using simple output and inspect objects through basic introspection techniques. Most examples involved small programs where failures appeared close to the real source of the problem, making bugs easier to identify directly from the error message itself.

In **Python Testing and Debugging Level 2**, debugging became more investigative. Instead of only focusing on what failed, we focused on understanding how execution reached failure. We examined tracebacks as execution history rather than isolated error messages, observed changing program state across multiple functions, inspected objects more deeply during runtime, analyzed relationships between instances, classes and shared state. At that level, debugging shifted from simply reading errors toward reasoning about execution flow and runtime behavior.

At this level, debugging changes again. Programs now contain larger execution paths, deeper call chains, more moving state, more interactions between functions, objects and imported modules. In many situations, observing output after failure is no longer enough. A traceback may show where execution stopped, but it may not explain what state existed before failure occurred, which function introduced incorrect data, or how execution evolved step by step before the crash appeared.

Because of this, debugging becomes an active process of controlling execution itself. Instead of waiting for failures and analyzing results afterward, we begin interacting with programs while they are still running. We pause execution before critical operations occur, inspect runtime values before they change, move through code one instruction at a time, follow execution across function boundaries and observe how exceptions propagate through different layers of the call stack.

This level introduces practical debugging techniques used during real execution. We learn how to control execution flow, work with breakpoints, inspect runtime state interactively, use debugger tools such as `pdb`, analyze exception propagation across multiple layers of code and manage failures intentionally through structured exception handling.

The goal is no longer only understanding failures after they appear. The goal is understanding execution while it is happening.

We begin with mindset required for this kind of debugging.

## Execution Control and Debugging Mindset

In earlier levels, debugging focused mostly on observation. We printed values, inspected objects, and analyzed tracebacks after failures occurred. These techniques remain important, but larger programs introduce a new challenge. By the time an error appears, program state may already be very different from state that originally caused the problem.

At this level, debugging becomes more interactive. Instead of only observing results after execution finishes, we begin controlling execution while program is still running. This allows us to inspect values before they change, stop execution before failure happens, and follow logic step by step as Python processes instructions.

Consider a small example.

```py
def process_order(order):
    total = calculate_total(order)
    total = apply_discount(total, order["discount"])
    save_order(total)

def calculate_total(order):
    return order["price"] * order["quantity"]

def apply_discount(total, discount):
    return total - (total * discount)

order = {
    "price": 100,
    "quantity": 2,
    "discount": "0.2"
}

process_order(order)
```

This program eventually fails because `discount` is a string instead of a numeric value. The traceback identifies where execution stopped, but deeper debugging questions still remain. We still need to understand when invalid value first appeared, which function received incorrect state, whether earlier logic already contained warning signs, and what variables contained before failure occurred.

Answering these questions requires observing execution during runtime, not only after crash appears.

This changes debugging mindset completely.

Instead of guessing what program probably did, we inspect what program is actually doing. Instead of assuming values are correct, we confirm them directly during execution. Instead of treating execution as hidden internal behavior, we expose execution step by step and inspect how state changes over time.

Modern debugging tools make this possible. They allow execution to pause temporarily so runtime state can be inspected safely before program continues. During this pause, we can examine variables, follow function calls, inspect object state and verify assumptions directly from live execution.

This kind of debugging becomes especially important when programs contain deeper call chains, multiple interacting objects, external input or failures that appear only under very specific runtime conditions.

Controlling execution begins with understanding how Python moves through code one instruction at a time.

## Step-by-Step Execution

Programs do not execute all at once. Python processes code one instruction at a time, moving through statements in a specific order during runtime. In small programs this flow is usually easy to follow mentally, but as logic grows across multiple functions and files, execution paths become harder to track correctly through observation alone.

Step-by-step execution means following program behavior one instruction at a time while execution is happening. Instead of only seeing final output or traceback messages after failure occurs, we observe how state changes between individual lines of code.

Consider the following example.

```py
def calculate_total(items):
    total = 0

    for item in items:
        total += item["price"]

    return total

def checkout(items):
    subtotal = calculate_total(items)
    final_total = subtotal * 0.8
    return final_total

products = [
    {"price": 10},
    {"price": 20}
]

checkout(products)
```

When Python executes this program, execution does not jump directly to final result. It moves through code step by step.

Execution first reaches `checkout()`. After entering function, Python assigns result of `calculate_total(items)` to subtotal. To do this, execution temporarily leaves `checkout()` and enters `calculate_total()`. Inside `calculate_total()`, Python creates variable total, enters loop, processes each item individually, updates running value, and finally returns computed result back to `checkout()`.

Only after returning does execution continue with next instruction.

Understanding this movement is extremely important during debugging because many bugs are introduced before failure actually appears.

Consider slightly modified example.

```py
products = [
    {"price": 10},
    {"price": "20"}
]

checkout(products)
```

Now execution fails during addition inside loop. Traceback shows where crash occurred, but step-by-step execution reveals something more important. First iteration succeeds correctly, while second iteration introduces invalid state when string value reaches arithmetic operation.

Without following execution step by step, it is easy to misunderstand where incorrect state actually entered program.

This is why debuggers allow controlled execution. Instead of running entire program continuously, they allow execution to pause after individual instructions so runtime behavior can be inspected safely between steps.

During step-by-step execution, we can observe how variables change, how functions enter and return, how objects evolve during runtime, and exactly where execution begins to diverge from expectations.

Once execution can be controlled step by step, next important capability is deciding where execution should pause automatically.

## Breakpoints and Paused Execution

Step-by-step execution allows us to follow program behavior gradually, but manually moving through every instruction quickly becomes inefficient in larger programs. In many situations, we already suspect where incorrect behavior begins. Instead of starting from beginning every time, debugging tools allow execution to pause automatically at specific locations. These locations are called breakpoints.

A breakpoint is a temporary stopping point placed inside running code. When execution reaches that line, program pauses before continuing further. This pause gives us an opportunity to inspect runtime state while execution is still active.

Consider the following example.

```py
def process_payment(data):
    total = calculate_total(data)
    discount = data["discount"]
    final_total = total - (total * discount)

    return final_total

def calculate_total(data):
    return data["price"] * data["quantity"]

order = {
    "price": 100,
    "quantity": 2,
    "discount": "0.2"
}

process_payment(order)
```

This program eventually fails because `discount` contains a string instead of numeric value. A traceback identifies where execution stopped, but breakpoints allow inspection before failure occurs.

If execution pauses before `final_total` is calculated, runtime state can be inspected directly.

```py
total = calculate_total(data)
discount = data["discount"]

# breakpoint here

final_total = total - (total * discount)
```

At this moment, variables still exist in memory and execution has not yet crashed. We can inspect values safely and confirm whether assumptions match reality.

For example, inspecting `discount` immediately reveals unexpected type.

```bash
print(discount)
print(type(discount))
```

This kind of debugging is much more powerful than observing only final failure because it allows inspection before invalid operations happen.

Breakpoints are especially useful when bugs appear deep inside long execution paths. Instead of repeatedly running entire program and waiting for crash, execution can jump directly to important location and pause automatically.

Modern programming environments usually provide graphical breakpoints. A breakpoint can often be placed simply by clicking next to a line number in editor. When execution reaches that line, program pauses and debugger interface displays current runtime state.

Python also supports breakpoints directly in code.

```py
breakpoint()
```

When execution reaches this statement, Python enters debugging mode automatically.

```py
def calculate(value):
    breakpoint()
    result = value * 2
    return result

calculate(10)
```

Paused execution allows inspection of local variables, function arguments, object state and current execution flow before continuing further.

During paused execution, debugging tools usually allow several forms of control. Execution may continue normally until next breakpoint, move to next instruction only, or enter called functions step by step for deeper inspection.

This transforms debugging from passive observation into active runtime investigation.

Once execution is paused successfully, next important step is understanding how to inspect runtime state effectively while program remains active.

## Inspecting Runtime State

```py
Pausing execution is only useful if we understand how to inspect the program while it is stopped. During paused execution, Python still holds current variables, objects, function arguments, and execution context in memory. Runtime inspection allows us to examine this live state directly before execution continues.

In earlier levels, observation mostly relied on `print()` statements placed manually inside code. While this approach still works, paused execution provides something much more powerful. Instead of modifying code repeatedly, we can inspect values interactively at exact moment execution reaches a specific state.

Consider the following example.

```py
def process_user(data):
    username = data["username"]
    age = data["age"]

    profile = create_profile(username, age)

    return profile

def create_profile(username, age):
    category = determine_category(age)

    return {
        "username": username,
        "category": category
    }

def determine_category(age):
    if age >= 18:
        return "adult"

    return "minor"

user = {
    "username": "Example1",
    "age": "20"
}

process_user(user)
```

This program eventually fails because comparison inside `determine_category()` receives a string instead of numeric value.

If execution pauses before comparison happens, runtime state can be inspected directly. At that moment, debugger reveals current variables, function arguments, active objects, current execution line, and current position inside call stack.

Inspecting `age` immediately explains failure.

```py
print(age)
print(type(age))
```

Instead of guessing whether state is correct, runtime inspection confirms exact values that exist during execution.

This becomes especially important when values change across multiple functions. A variable may begin correctly in one function but become invalid later because of reassignment, transformation, mutation, or external input. Runtime inspection allows us to follow these changes directly while execution is active.

Inspecting runtime state also helps reveal problems involving mutable objects.

```py
def update(items):
    items.append("new")

data = ["a", "b"]

update(data)
```

During paused execution, debugger can confirm whether multiple variables reference same object, whether object state changed unexpectedly, and whether mutation occurred earlier than expected.

Runtime inspection is not limited to simple variables. Complete object state can also be inspected.

```py
class User:
    def __init__(self, name):
        self.name = name
        self.active = False

user = User("Example")
```

While execution is paused, object attributes can be examined directly.

```py
print(user.__dict__)
```

This reveals exact internal state currently stored inside object.

Modern debugging environments usually expose runtime state visually while execution remains paused. Variables update dynamically as execution moves forward, object attributes can be expanded interactively, and changing state can be monitored step by step across execution flow.

This ability to inspect live runtime behavior is one of most important differences between simple observation and real interactive debugging.

Once runtime state can be inspected effectively, next step is learning how Python provides these capabilities directly through built-in debugger called `pdb`.

## Using pdb

Python includes built in debugger called `pdb`. While modern programming environments often provide graphical debugging tools, `pdb` exposes debugging process directly inside terminal and reveals how execution control works internally.

Unlike `print()` debugging, `pdb` allows execution to pause interactively while program is still running. At any paused moment, variables can be inspected, expressions evaluated, execution continued, or next lines executed one step at a time.

A common way to start debugger is inserting breakpoint directly into code.

```py
def calculate(price, tax):
    total = price + tax

    breakpoint()

    result = total * 2
    return result

calculate(100, 20)
```

When execution reaches `breakpoint()`, Python pauses program and opens interactive debugger session.

Debugger now waits for commands.

One of most useful commands is `n`, meaning next. It executes current line and moves to next one without entering called functions.

```bash
(Pdb) n
```

This allows execution to move line by line while observing changing state.

To inspect variables during paused execution, variable names can be typed directly.

```bash
(Pdb) total
120
```

Expressions can also be evaluated interactively.

```bash
(Pdb) total * 2
240
```

Another important command is `s`, meaning step. Unlike `n`, this command enters called functions instead of skipping over them.

```py
def multiply(value):
    return value * 2

def calculate(price, tax):
    total = price + tax

    breakpoint()

    result = multiply(total)
    return result
```

Using `s` while paused on `multiply(total)` enters function body directly.

```bash
(Pdb) s
```

This is useful when bug may exist inside deeper function calls.

To continue execution until next breakpoint or program completion, debugger uses `c`.

```bash
(Pdb) c
```

Debugger can also display execution context.

```bash
(Pdb) where
```

This command shows current call stack, similar to traceback, but during active execution instead of after crash.

Variables available in current scope can be inspected using `locals()`.

```py
(Pdb) locals()
```

This reveals all values currently accessible inside paused function.

Debugger sessions become especially powerful when execution paths are complex. Instead of repeatedly modifying code with temporary `print()` statements, execution can be paused exactly where needed and state inspected interactively in real time.

Although graphical debuggers automate many of these features visually, understanding `pdb` helps explain what debugger is actually doing underneath. Most debugging tools internally perform same actions pausing execution, stepping through code, inspecting state, and controlling execution flow interactively.

Interactive debugging is powerful when failure can be reproduced directly and execution can be paused at correct moment. In larger programs, however, exceptions often travel through many layers before becoming visible.

A function may fail deep inside execution, while actual crash appears somewhere completely different. By time traceback becomes visible, several functions may already have passed exception upward through call chain.

To understand these situations, we must understand how Python moves exceptions across execution flow and how failures propagate between functions during runtime.

## Exception Propagation

When an error occurs, Python does not immediately terminate entire program. Instead, exception begins moving upward through active function calls until it either gets handled or reaches top level of execution.

This movement is called exception propagation.

Understanding propagation is important because place where program crashes is often different from place where problem actually began.

Consider following example.

```py
def divide(a, b):
    return a / b

def calculate():
    return divide(10, 0)

def process():
    return calculate()

process()
```

Failure begins inside `divide()`, but exception does not stop there immediately. Python first exits `divide()`, then moves exception into `calculate()`, then into `process()` and finally to top level where traceback is printed.

Each function in call chain receives exception and either handles it or passes it upward automatically.

This explains why traceback behaves like execution history. Traceback shows propagation path exception followed while moving through stack of active calls.

Propagation becomes easier to understand when exceptions are handled directly.

```py
def divide(a, b):
    return a / b

def calculate():
    try:
        return divide(10, 0)

    except ZeroDivisionError:
        print("Cannot divide by zero")

calculate()
```

Here, exception still begins inside `divide()`, but propagation stops once `calculate()` handles failure.

Program no longer crashes because exception was intercepted before reaching top level.

Not every exception should be handled immediately. In many programs, lower level functions intentionally allow exceptions to continue upward because higher layers understand broader context better.

```py
def load_config():
    return open("missing.txt").read()

def start_application():
    return load_config()

start_application()
```

`load_config()` does not handle failure itself. Instead, it allows `FileNotFoundError` to propagate upward.

This is often correct behavior because lower level utility may not know how application should respond.

Propagation also explains why exceptions sometimes appear disconnected from original bug. A bad value introduced early in execution may travel through several functions before eventually triggering failure elsewhere.

Because of this, debugging exceptions requires following propagation path carefully instead of focusing only on final crash location.

Once exceptions can propagate through program, next step is learning how to control that behavior intentionally using exception handling.

## Handling Exceptions

Exception handling allows a program to respond to failures without immediately terminating execution. Instead of letting every exception crash program, Python allows specific errors to be intercepted and managed intentionally.

This is done using `try` and `except`.

```py
try:
    number = int("hello")

except ValueError:
    print("Invalid number")
```

Python first executes code inside `try` block. If no exception occurs, execution continues normally.

If matching exception appears, Python immediately stops remaining lines inside `try` block and moves execution into corresponding `except` block.

In this example, conversion fails because `"hello"` cannot become integer. Instead of terminating program, exception is handled and custom response is produced.

Handling exceptions becomes especially important when failures are expected as part of normal program behavior.

```py
data = ["10", "20", "hello", "30"]

for item in data:
    try:
        value = int(item)
        print(value)

    except ValueError:
        print("Skipped invalid value")
```

Without exception handling, loop would terminate on first invalid item. With handling, execution continues safely.

Exception handling should focus on situations program can reasonably recover from. It should not be used to hide bugs silently.

```py
try:
    process_data()

except:
    pass
```

This pattern is dangerous because it suppresses every exception without explanation. Real failures become invisible and debugging becomes much harder.

Handling should remain as specific as possible.

```py
try:
    value = int(user_input)

except ValueError:
    print("Input must be numeric")
```

Specific handling makes debugging clearer because unexpected exceptions still remain visible.

Sometimes exception object itself contains useful information.

```py
try:
    result = 10 / 0

except ZeroDivisionError as error:
    print(error)
```

Variable `error` stores actual exception instance raised during execution.

Handling can also include cleanup logic using `finally`.

```py
file = open("data.txt")

try:
    content = file.read()

finally:
    file.close()
```

Code inside `finally` always executes, even if exception occurs. This is commonly used for cleanup operations such as closing files, releasing resources or restoring program state.

Exception handling changes execution flow directly. Instead of propagating automatically to top level, exceptions can be **intercepted**, **transformed**, **logged** or **redirected intentionally**.

Sometimes, however, program should create its own exceptions deliberately instead of waiting for Python to raise them automatically.

This leads into raising exceptions intentionally.

## Raising Exceptions Intentionally

Not every failure originates from Python itself. In many situations, program detects invalid state or incorrect behavior before Python encounters a built in error automatically.

To signal these situations clearly, exceptions can be raised intentionally using `raise`.

```py
age = -5

if age < 0:
    raise ValueError("age cannot be negative")
```

Here, Python itself did not detect problem automatically. Program logic identified invalid value and raised exception intentionally.

This allows failures to appear immediately at exact moment invalid state is detected, instead of allowing incorrect data to continue through execution.

Raising exceptions intentionally improves debugging because error messages become more meaningful and connected to actual business logic.

```py
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("insufficient funds")

    return balance - amount
```

Without explicit exception, incorrect state might continue silently and produce confusing failures later.

Exceptions can also be raised after catching another exception.

```py
try:
    number = int(data)

except ValueError:
    raise ValueError("configuration contains invalid number")
```

This pattern transforms low level errors into messages that better describe higher level program context.

Sometimes existing exception should continue propagating unchanged.

```py
try:
    process()

except Exception:
    print("Logging failure")
    raise
```

Using `raise` without specifying exception re raises current exception and preserves original traceback.

This is important because replacing exceptions incorrectly can destroy debugging information about where failure originally began.

Programs may also define custom exception types.

```py
class ValidationError(Exception):
    pass

def validate(username):
    if len(username) < 3:
        raise ValidationError("username too short")
```

Custom exceptions allow failures to describe program specific problems more precisely.

As systems become larger, intentional exception design becomes part of overall architecture. Exceptions stop being only crash events and become structured signals that communicate failure between layers of execution.

At this level, most important idea is understanding that exceptions are not only reactions to failures. They are also tools programs use intentionally to protect execution from invalid state and unsafe behavior.
