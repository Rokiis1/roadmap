# Content of Python Testing and Debugging 4 level

- [Logging Fundamentals](#logging-fundamentals)
- [Structured Logging](#structured-logging)
- [Log Levels and Filtering](#log-levels-and-filtering)
- [Assertions and Validation](#assertions-and-validation)
- [Testing Environment Setup](#testing-environment-setup)
- [Unit Testing](#unit-testing)

In earlier levels, debugging focused on understanding failures, inspecting runtime state, and controlling execution interactively.

At this level, focus shifts toward debugging larger applications where failures may appear across multiple files, services, and execution environments.

Instead of relying only on breakpoints or manual inspection, we begin using logs, assertions, and automated tests to diagnose problems systematically and reproduce failures reliably.

This level introduces practical debugging workflows commonly used in real software projects.

## Logging Fundamentals

`print()` debugging becomes difficult in larger applications because execution may span multiple files or continue running long after developer interaction ends.

Logging provides persistent runtime diagnostics that remain available after execution finishes.

Python provides built in `logging` module.

```py
import logging

logging.warning("Something unexpected happened")
```

Applications usually configure logging once during startup.

```py
import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application started")
```

Logs are commonly placed around important execution paths.

```py
def process_order(order_id):
    logging.info(f"Starting order {order_id}")

    result = calculate_total(order_id)

    logging.info(f"Finished order {order_id}")

    return result
```

Unlike temporary `print()` statements, logs are intended to remain part of application diagnostics permanently.

## Structured Logging

Basic logging records messages as plain text. Larger systems often require more consistent diagnostic information.

Structured logging stores runtime context inside predictable fields.

```py
logging.info(
    "User login failed",
    extra={
        "username": "Example1",
        "ip": "192.168.1.10"
    }
)
```

This makes logs easier to search, filter, and analyze automatically.

Structured logs become especially useful when requests move across multiple services or execution layers.

```py
logging.info(
    "Request received",
    extra={
        "request_id": "REQ-1042",
        "path": "/orders"
    }
)
```

Shared identifiers help reconstruct execution history across entire systems.

## Log Levels and Filtering

Not every runtime event has same importance. Logging systems organize messages into severity levels.

```py
import logging

logging.debug("Debug message")
logging.info("Information message")
logging.warning("Warning message")
logging.error("Error message")
logging.critical("Critical failure")
```

`DEBUG` logs usually contain detailed diagnostics.

```py
logging.debug(f"Loaded configuration {config}")
```

`INFO` logs describe normal execution events.

```py
logging.info("Server started")
```

`WARNING` logs indicate unexpected situations that still allow execution to continue.

```py
logging.warning("Retrying database connection")
```

`ERROR` logs describe failed operations.

```py
logging.error("Payment processing failed")
```

`CRITICAL` logs represent severe failures affecting entire systems.

```py
logging.critical("Database unavailable")
```

Applications can filter messages using configured log levels.

```py
logging.basicConfig(level=logging.WARNING)
```

This allows production systems to reduce unnecessary diagnostic noise.

Filtering becomes essential in larger systems. During development, applications may enable `DEBUG` logs for detailed investigation. In production, systems often display only higher severity events to reduce noise.

Log levels also improve collaboration between teams. Developers, operators, and monitoring systems can focus on specific categories of runtime behavior without reading every message manually.

## Assertions and Validation

Programs constantly rely on assumptions during execution.

Validation checks whether external or runtime data satisfies expected rules.

```py
def register(username):
    if len(username) < 3:
        raise ValueError("username too short")

    print("User created")
```

Assertions verify internal developer assumptions.

```py
def divide(a, b):
    assert b != 0

    return a / b
```

If assertion becomes false, Python raises `AssertionError`.

Assertions expose invalid program state immediately instead of allowing incorrect execution to continue silently.

```py
def process(items):
    assert isinstance(items, list)

    return len(items)
```

Assertions should not replace proper runtime validation for external input.

```py
assert password == "admin123"
```

Assertions help detect invalid state during execution, but manually checking behavior after every code change quickly becomes impractical.

As applications grow, developers need reliable way to verify behavior repeatedly without rerunning entire program manually each time.

This leads into automated testing.

Before writing tests themselves, however, project needs proper testing setup. Test files must follow predictable structure, testing tools must be installed, and execution environment must be configured so tests can run consistently across development workflow.

## Testing Environment Setup

Before writing automated tests, project needs testing environment capable of discovering, executing, and reporting test results consistently.

Most modern Python projects use pytest because it keeps test structure simple and readable while providing powerful testing features.

Pytest can be installed using pip.

```bash
pip install pytest
```

After installation, tests are usually stored inside separate files whose names begin with `test_`.

```text
project/
│
├── app.py
└── test_app.py
```

Pytest automatically searches for files and functions matching these naming patterns.

Consider simple application file.

```py
def add(a, b):
    return a + b
```

A separate test file can verify its behavior.

```py
from app import add

def test_add():
    assert add(2, 3) == 5
```

Tests are executed from terminal using pytest.

```bash
pytest
```

Pytest discovers matching test files automatically, executes tests independently, and reports passing or failing results.

Successful execution usually appears similar to this.

```bash
================ test session starts ================
collected 1 item

test_app.py .                                  [100%]

================= 1 passed ==========================
```

If a test fails, pytest displays assertion details, expected values, actual values, and traceback information explaining where failure occurred.

```py
E assert 7 == 5
```

This makes failures reproducible and easier to diagnose.

As projects grow, testing environments often expand further using virtual environments, configuration files, coverage tools, and continuous integration systems. At this level, focus remains on building reliable local testing workflow capable of executing tests consistently.

Once testing environment is co

## Unit Testing

Unit testing focuses on verifying small isolated parts of program independently. Instead of testing entire application at once, unit tests target specific functions, methods, or components under controlled conditions.

Consider simple function.

```py
def add(a, b):
    return a + b
```

A unit test executes function with known input and verifies expected result.

```py
def test_add():
    assert add(2, 3) == 5
```

If assertion becomes false, pytest reports test failure immediately.

Unit tests should focus on one behavior at a time.

```py
def multiply(a, b):
    return a * b

def test_multiply():
    assert multiply(3, 4) == 12
```

Keeping tests small and isolated makes failures easier to diagnose because problem usually exists inside very small section of logic.

Unit tests can also verify expected exceptions.

```py
def divide(a, b):
    return a / b
import pytest

def test_divide_zero():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)
```

Here, test succeeds only if expected exception appears during execution.

This allows programs to verify both successful behavior and failure behavior intentionally.

As projects grow, collections of unit tests become safety net against regressions introduced by later code changes.

Developers can modify internal implementation, rerun tests, and confirm external behavior still matches expectations.

Good unit tests focus on observable behavior rather than internal implementation details. They verify what code does externally instead of depending on exact internal structure.
