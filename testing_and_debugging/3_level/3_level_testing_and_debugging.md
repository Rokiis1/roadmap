# Content of Python Testing and Debugging 3 level

- [Execution Control and Debugging Mindset](#execution-control-and-debugging-mindset)
- [Step-by-Step Execution](#step-by-step-execution)
- [Breakpoints and Paused Execution](#breakpoints-and-paused-execution)
- [Inspecting Runtime State](#inspecting-runtime-state)
- [Using pdb](#using-pdb)
- [Exception Flow and Handling](#exception-flow-and-handling)

In earlier levels, debugging focused on understanding errors, reading tracebacks, inspecting runtime state, and reasoning about execution flow across functions and objects. Most debugging happened after execution already failed.

At this level, debugging becomes interactive. Instead of only analyzing failures afterward, we begin controlling execution while program is still running. Execution can pause before critical operations occur, move step by step through instructions, inspect live runtime values, and follow behavior across nested function calls and multiple layers of logic.

This level introduces practical debugging techniques used during real execution. We work with breakpoints, runtime inspection, `pdb`, exception propagation, and structured exception handling. The goal is no longer only understanding why execution failed. The goal is understanding what execution is doing while it is happening.

We begin with execution control and debugging mindset.

## Execution Control and Debugging Mindset

In earlier levels, debugging focused mostly on observing failures after execution already stopped. We printed values, inspected objects, and analyzed traceback messages to understand what went wrong. These techniques remain important, but larger programs introduce a new problem. By the time an error appears, program state may already be very different from state that originally caused failure.

At this level, debugging becomes interactive. Instead of only examining results afterward, we begin controlling execution while program is still running. Execution can pause before important operations occur, move step by step through instructions, and expose runtime values before they change further.

Consider following example.

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

This program eventually fails because `discount` contains string instead of numeric value. A traceback shows where execution stopped, but it does not fully explain how invalid value moved through execution before failure happened.

Interactive debugging focuses on answering those missing questions. We inspect where incorrect value first appeared, which function received invalid state, and what variables contained before execution crashed.

This changes debugging mindset completely. Instead of guessing what program probably did, we inspect what program is actually doing during runtime. Instead of assuming values are correct, we confirm them directly from live execution.

Modern debugging tools make this possible by allowing execution to pause temporarily while runtime state remains active in memory. During this pause, variables, function calls, object state, and execution flow can all be inspected safely before program continues running.

Controlling execution begins with understanding how Python moves through code one instruction at a time.

## Step-by-Step Execution

Python executes programs one instruction at a time. In small programs this execution flow is usually easy to follow mentally, but larger systems contain multiple functions, loops, conditions, and nested calls that become difficult to track correctly through observation alone.

Step-by-step execution means following runtime behavior gradually while program is still running. Instead of only seeing final output or traceback messages after failure appears, we observe how execution moves between instructions and how state changes during each step.

Consider following example.

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

Execution first enters `checkout()`. Before `subtotal` can receive value, Python temporarily leaves current function and enters `calculate_total()`. Inside loop, execution processes one item at a time, updates total, and finally returns computed result back into `checkout()` before continuing further.

Following execution step by step makes this movement visible directly during runtime.

This becomes especially useful when invalid state appears only during specific execution path.

```py
products = [
    {"price": 10},
    {"price": "20"}
]

checkout(products)
```

Here, first iteration succeeds correctly while second iteration introduces invalid value into arithmetic operation.

A traceback shows where execution failed, but step-by-step execution reveals when runtime behavior first began diverging from expectations.

Debugger tools allow this execution to be controlled interactively. Execution can pause after individual instructions, enter nested function calls, continue gradually through loops, and expose runtime state safely between steps.

This allows developers to follow execution flow directly instead of reconstructing behavior afterward from traceback messages alone.

Once execution can move step by step, next important capability becomes deciding where execution should pause automatically.

## Breakpoints and Paused Execution

Following execution step by step is useful, but manually moving through every instruction quickly becomes inefficient in larger programs. In many situations, developers already suspect where incorrect behavior begins and want execution to stop directly at important location. Breakpoints solve this problem by pausing execution automatically when specific line is reached.

Consider following example.

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

This program eventually fails because discount contains string instead of numeric value. A traceback shows where execution stopped, but breakpoints allow execution to pause earlier before invalid operation happens.

```py
def process_payment(data):
    total = calculate_total(data)

    breakpoint()

    discount = data["discount"]
    final_total = total - (total * discount)

    return final_total
```

When execution reaches `breakpoint()`, program pauses temporarily while runtime state remains active in memory. Variables, function arguments, objects, and execution flow can now be inspected before execution continues further.

Modern programming environments usually provide graphical breakpoints directly inside editor by clicking next to line numbers. Internally, these tools perform same idea execution pauses at specific locations so runtime behavior can be investigated interactively.

Once execution pauses successfully, next important skill becomes inspecting runtime state effectively while program remains active.

## Inspecting Runtime State

Pausing execution is only useful if runtime state can be inspected while program remains active. During paused execution, Python still holds current variables, objects, function arguments, and execution context in memory. Runtime inspection allows these values to be examined directly before execution continues further.

Consider following example.

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

This program eventually fails because comparison inside `determine_category()` receives string instead of numeric value. If execution pauses before comparison occurs, runtime state can be inspected directly while values still exist in memory.

```py
print(age)
print(type(age))
```

This immediately reveals that `age` contains string instead of integer.

Runtime inspection becomes especially useful when values move across multiple functions and change gradually during execution. A variable may begin correctly in one function but later become invalid because of reassignment, mutation, transformation, or external input. Instead of guessing where state changed incorrectly, runtime inspection allows values to be verified directly while execution is active.

Objects can also be inspected during paused execution.

```py
class User:
    def __init__(self, name):
        self.name = name
        self.active = False

user = User("Example")
print(user.__dict__)
```

This reveals exact object state currently stored inside instance.

Runtime inspection is not limited to simple variables. Debugging tools can expose local variables, function arguments, object attributes, current execution line, active call stack, and changing values across execution flow while execution remains paused.

Modern debugging environments display this information dynamically as execution moves forward, allowing runtime behavior to be followed interactively instead of reconstructed afterward from traceback messages alone.

Once runtime state can be inspected effectively, next step is learning how Python exposes these debugging capabilities directly through built in debugger called `pdb`.

## Using pdb

Python includes built in debugger called `pdb`. While modern programming environments usually provide graphical debugging tools, `pdb` exposes debugging process directly inside terminal and helps explain how interactive debugging works internally.

Unlike `print()` debugging, `pdb` pauses execution while program is still running and allows runtime state to be inspected interactively. Variables can be examined, expressions evaluated, execution moved step by step, and function calls entered directly during active execution.

A common way to start debugger is inserting `breakpoint()` into code.

```py
def calculate(price, tax):
    total = price + tax

    breakpoint()

    result = total * 2
    return result

calculate(100, 20)
```

When execution reaches `breakpoint()`, Python pauses program and opens interactive debugger session.

```bash
(Pdb)
```

At this moment execution has not finished yet, which means runtime state still exists in memory and can be inspected directly.

Variables can be evaluated by typing their names.

```bash
(Pdb) total
120
```

Expressions can also be executed interactively.

```bash
(Pdb) total * 2
240
```

Execution itself can now be controlled through debugger commands. `n` moves execution to next instruction without entering called functions.

```bash
(Pdb) n
```

`s` enters called function directly.

```bash
(Pdb) s
```

Consider following example.

```py
def multiply(value):
    return value * 2

def calculate(price, tax):
    total = price + tax

    breakpoint()

    result = multiply(total)
    return result
```

If execution pauses on `multiply(total)`, using s enters function body instead of skipping over call.

Execution can continue normally using `c`.

```bash
(Pdb) c
```

Debugger can also display current execution context.

```bash
(Pdb) where
```

This shows active call stack during runtime, similar to traceback, but while execution is still paused instead of after crash already occurred.

Current local variables can be inspected using `locals()`.

```bash
(Pdb) locals()
```

This reveals all values currently accessible inside paused execution frame.

Using `pdb` removes need for repeatedly modifying code with temporary `print()` statements. Execution can pause exactly where needed and runtime behavior can be inspected interactively in real time.

Although graphical debuggers automate many of these features visually, most debugging tools internally perform same operations pausing execution, stepping through instructions, inspecting runtime state, and controlling execution flow interactively.

Interactive debugging becomes especially useful when failures can be reproduced directly and execution can pause at correct moment. In larger programs, however, failures often travel through several layers of function calls before becoming visible. An exception may begin deep inside execution while actual crash appears much later somewhere else in program.

To understand these situations correctly, we must understand how exceptions move through execution flow and how programs control that behavior during runtime.

## Exception Flow and Handling

When an error occurs, Python does not immediately terminate entire program. Instead, exception begins moving upward through active function calls until it either gets handled or reaches top level of execution. This movement is called **exception propagation**.

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

Failure begins inside `divide()`, but exception does not stop there immediately. Python exits `divide()`, moves exception into calculate(), then into `process()`, and finally reaches top level where traceback is printed.

This is why traceback behaves like execution history. It shows path exception followed while moving through stack of active function calls.

Exceptions continue propagating upward until some part of program handles them intentionally.

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

Exception still begins inside `divide()`, but propagation stops once `calculate()` handles failure.

Instead of crashing entire program, execution now follows alternate recovery path inside `except` block.

This behavior becomes especially important when failures are expected as part of normal execution.

```py
data = ["10", "20", "hello", "30"]

for item in data:
    try:
        value = int(item)
        print(value)

    except ValueError:
        print("Skipped invalid value")
```

Without exception handling, loop would terminate on first invalid value. With handling, execution continues safely while invalid input is managed intentionally.

Handling should remain as specific as possible.

```py
try:
    value = int(user_input)

except ValueError:
    print("Input must be numeric")
```

Overly broad handling can hide real bugs and make debugging significantly harder.

```py
try:
    process_data()

except:
    pass
```

This pattern suppresses every exception silently, including unexpected failures that should remain visible.

Exceptions themselves also contain useful debugging information.

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

Code inside `finally` always executes, even if exception occurs. This is commonly used for cleanup operations such as closing files or releasing resources safely.

Programs are not limited to handling exceptions raised automatically by Python. Exceptions can also be raised intentionally when program detects invalid state directly.

```py
age = -5

if age < 0:
    raise ValueError("age cannot be negative")
```

Here, program logic identifies invalid value before Python encounters built in failure automatically.

Raising exceptions intentionally improves debugging because failures appear immediately at exact moment invalid state is detected.

```py
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("insufficient funds")

    return balance - amount
```

Exceptions can also be re raised after partial handling.

```py
try:
    process()

except Exception:
    print("Logging failure")
    raise
```

Using `raise` without specifying exception preserves original traceback and allows failure to continue propagating upward.

Programs may also define custom exception types for application specific failures.

```py
class ValidationError(Exception):
    pass

def validate(username):
    if len(username) < 3:
        raise ValidationError("username too short")
```

As systems grow larger, exceptions become more than simple crash events. They become structured signals used to communicate failure, invalid state, and recovery behavior across different layers of execution.
