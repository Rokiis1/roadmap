# Content of Python Testing and Debugging 4 level

- [Logging Fundamentals](#logging-fundamentals)
- [Structured Logging](#structured-logging)
- [Log Levels and Filtering](#log-levels-and-filtering)
- [Assertions and Validation](#assertions-and-validation)
- [Testing Environment Setup](#testing-environment-setup)
- [Unit Testing](#unit-testing)
- [Testing Multiple Scenarios](#testing-multiple-scenarios)
- [Fixtures and Test Setup](#fixtures-and-test-setup)
- [Testing Exceptions](#testing-exceptions)
- [Deterministic Testing](#deterministic-testing)

In earlier levels, debugging focused on understanding failures, inspecting runtime state, and controlling execution interactively through breakpoints, debuggers, and exception analysis.

At this level, focus shifts toward diagnosing and preventing failures in larger applications where execution may span multiple files, services, and runtime environments. In these situations, developers cannot always rely on paused execution or manual inspection directly. Failures may appear long after incorrect state was introduced, sometimes in environments where debugger access is unavailable entirely.

Because of this, debugging becomes more systematic. Instead of depending only on interactive investigation, applications begin recording runtime behavior through logs, protecting assumptions through assertions, and verifying behavior automatically through tests.

This level introduces practical debugging workflows commonly used in real software projects. We examine how applications expose diagnostic information during execution, how failures are reproduced consistently, and how automated testing helps detect problems before they reach production systems.

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

Not every runtime event has same importance. Some logs describe normal execution, while others indicate warnings, failures, or critical system problems. Logging systems organize these events into severity levels so applications can control which messages remain visible during execution.

```py
import logging

logging.debug("Loaded configuration file") # detailed diagnostics
logging.info("Server started") # normal execution event
logging.warning("Retrying database connection") # unexpected situation
logging.error("Payment processing failed") # failed operation
logging.critical("Database unavailable") # severe system failure
```

`DEBUG` logs usually contain detailed diagnostic information useful during development and investigation. `INFO` logs describe normal runtime behavior, while `WARNING` logs indicate unexpected situations that still allow execution to continue. `ERROR` logs represent failed operations, and `CRITICAL` logs describe severe failures that may affect entire application stability.

Applications can filter messages by configuring minimum log level.

```py
import logging

logging.basicConfig(level=logging.WARNING)
```

With this configuration, lower severity logs such as `DEBUG` and `INFO` remain hidden while warnings and more serious failures continue appearing.

Filtering becomes especially important in larger systems where applications may generate thousands of log messages during execution. Development environments often enable `DEBUG` logs for deeper investigation, while production systems usually display only higher severity events to reduce unnecessary diagnostic noise.

Log levels also improve collaboration between developers, operators, and monitoring systems because different teams can focus on specific categories of runtime behavior without manually reading every log entry.

## Assertions and Validation

Programs constantly rely on assumptions during execution. Some assumptions involve external input such as user data, files, configuration values, or API responses, while others involve internal program state that developers expect to remain valid while application is running. If these assumptions become incorrect silently, invalid state may continue spreading through execution long before visible failure finally appears.

Validation protects program from invalid external data before execution continues further.

```py
def register(username):
    if len(username) < 3:
        raise ValueError("username too short")

    print("User created")
```

Here, program verifies input before allowing application logic to continue. This prevents invalid data from entering deeper parts of system where failures may become harder to diagnose later.

Assertions solve different problem. Instead of validating external input, assertions verify assumptions developers believe should already be true internally during execution.

```py
def divide(a, b):
    assert b != 0

    return a / b
```

If assertion becomes false, Python raises `AssertionError` immediately instead of allowing incorrect execution to continue silently.

This makes assertions useful for detecting invalid runtime state at exact moment assumptions break.

```py
def process(items):
    assert isinstance(items, list)

    return len(items)
```

Here, assertion confirms that function received expected data structure before continuing execution further.

Assertions should not replace proper validation for external input.

```py
assert password == "admin123"
```

External data should be validated explicitly because assertions may be disabled when Python runs in optimized mode.

Validation protects application behavior from invalid external state, while assertions protect internal developer assumptions and expose incorrect runtime behavior earlier during execution.

As applications grow larger, however, manually checking behavior after every code change quickly becomes impractical. Developers need reliable way to verify behavior repeatedly without rerunning entire application manually each time.

This leads into automated testing.

Before tests themselves can be written consistently, projects first need proper testing environment where tools, file structure, and execution workflow are configured predictably across development process.

## Testing Environment Setup

Before automated tests can be written consistently, project first needs testing environment capable of discovering, executing, and reporting tests reliably across development workflow. Without predictable testing setup, debugging becomes inconsistent because developers may run tests differently, skip important checks accidentally, or execute code in environments that behave differently from production systems.

Most modern Python projects use `pytest` because it keeps test structure simple while still providing powerful testing capabilities.

Pytest can be installed using `pip`.

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

Pytest automatically searches for files and functions matching these naming patterns during execution.

Consider simple application file.

```py
def add(a, b):
    return a + b
```

Tests are usually written inside separate test files.

```py
# test_app.py

from app import add

def test_add():
    assert add(2, 3) == 5
```

Here, test imports `add()` from app.py so its behavior can be verified independently inside separate testing file.

Tests are executed from terminal using `pytest`.

```bash
pytest
```

Pytest automatically discovers matching test files, executes tests independently, and reports whether execution passed or failed.

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

This makes failures reproducible and significantly easier to diagnose because incorrect behavior can be verified repeatedly under controlled conditions instead of relying on manual testing every time code changes.

As projects grow larger, testing environments often expand further using virtual environments, configuration files, coverage tools and continuous integration systems. At this level, focus remains on building reliable local testing workflow capable of executing tests consistently during development.

Once testing environment is configured correctly, next step becomes understanding how individual behaviors are verified through unit testing.

## Unit Testing

Unit testing focuses on verifying small isolated parts of program independently. Instead of testing entire application at once, unit tests target specific functions, methods, or components under controlled conditions so behavior can be verified consistently and repeatedly during development.

Consider simple function stored inside application file.

```py
# app.py

def add(a, b):
    return a + b
```

A separate test file can now verify its behavior independently.

```py
# test_app.py

from app import add

def test_add():
    assert add(2, 3) == 5
```

Here, test imports `add()` from application file and verifies expected behavior using known input values.

If assertion becomes false, pytest reports failure immediately and displays which behavior no longer matches expectations.

Good unit tests usually focus on one behavior at a time.

```py
def multiply(a, b):
    return a * b

def test_multiply():
    assert multiply(3, 4) == 12
```

Keeping tests small and isolated makes failures easier to diagnose because incorrect behavior usually exists inside very small section of logic.

Unit tests can also verify expected exceptions and failure behavior.

```py
import pytest

def divide(a, b):
    return a / b

def test_divide_zero():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)
```

Here, test succeeds only if expected exception appears during execution. This allows applications to verify both successful behavior and failure behavior intentionally instead of treating exceptions as unpredictable crashes.

As projects grow larger, collections of unit tests become safety net against regressions introduced by later code changes. Developers can modify implementation, rerun tests, and confirm external behavior still matches expectations after modifications.

Good unit tests focus on observable behavior rather than internal implementation details. Tests should verify what code does externally instead of depending heavily on exact internal structure, variable names, or implementation order.

At this level, most important testing concepts are understanding how to structure test files, execute tests using pytest, verify expected behavior with assertions, and test expected exceptions reliably.

Once individual behaviors can be tested successfully, next step becomes verifying same logic across multiple input combinations and runtime scenarios.

## Testing Multiple Scenarios

Testing one successful case is usually not enough to verify real program behavior. Functions often behave differently depending on input values, edge cases, invalid state, or unusual runtime conditions. Good tests verify behavior across multiple scenarios instead of relying on single example only.

Consider simple function.

```py
# app.py

def add(a, b):
    return a + b

A separate test file can verify same behavior using multiple input combinations.

```py
# test_app.py

from app import add

def test_add():
    assert add(2, 3) == 5
```

This test verifies one successful case, but it still does not confirm how function behaves with negative numbers, zero values, or different combinations of input.

Pytest allows same behavior to be tested across multiple scenarios using parameterized tests.

```py
# test_app.py

import pytest
from app import add

@pytest.mark.parametrize(
    "a, b, expected",
    [
        (2, 3, 5),
        (10, 5, 15),
        (-1, 1, 0),
        (0, 0, 0)
    ]
)
def test_add(a, b, expected):
    assert add(a, b) == expected
```

Pytest now executes same test multiple times automatically using different input values.

This improves test coverage while keeping test structure small and readable.

Testing multiple scenarios becomes especially important around edge cases where behavior often fails unexpectedly.

```py
# app.py

def get_first(items):
    return items[0]
```

Normal input succeeds correctly.

```py
# test_app.py

from app import get_first

def test_get_first():
    assert get_first(["a", "b"]) == "a"
```

Edge cases should also be tested intentionally.

```py
# test_app.py

import pytest
from app import get_first

def test_get_first_empty():
    with pytest.raises(IndexError):
        get_first([])
```

Without these additional scenarios, bugs may remain hidden until unusual runtime conditions appear in production.

Testing multiple scenarios also helps developers think more carefully about expected behavior, invalid input, and failure conditions instead of only verifying ideal execution paths.

As test suites grow larger, many tests begin sharing repeated setup logic and repeated runtime state. Repeating same setup code manually quickly becomes difficult to maintain.

To solve this, pytest provides reusable test setup through fixtures.

## Fixtures and Test Setup

As test suites grow larger, many tests begin sharing repeated setup logic. Multiple tests may require same objects, configuration values, sample input data, or temporary runtime state before execution can begin. Repeating this setup manually inside every test quickly becomes difficult to maintain and increases unnecessary duplication across testing files.

Pytest solves this problem using fixtures.

A fixture provides reusable setup code that can be shared automatically across multiple tests.

Consider simple application file.

```py
# app.py

def get_user():
    return {
        "username": "Example1",
        "active": True
    }
```

A separate test file can now define reusable fixture setup.

```py
# test_app.py

import pytest
from app import get_user

@pytest.fixture
def user():
    return {
        "username": "Example1",
        "active": True
    }
```

Tests can now receive fixture data simply by declaring fixture name as function argument.

```py
# test_app.py

def test_username(user):
    assert user["username"] == "Example1"

def test_user_active(user):
    assert user["active"] is True
```

Before each test executes, pytest creates fixture automatically and provides returned value to test function.

This removes repeated setup code and keeps tests focused on behavior being verified instead of setup details.

Fixtures are especially useful when setup becomes more complex.

```py
def create_numbers():
    return [1, 2, 3]
```

A reusable fixture can now provide predictable test data for multiple tests automatically.

```py
# test_app.py

import pytest

@pytest.fixture
def numbers():
    return [1, 2, 3]

def test_length(numbers):
    assert len(numbers) == 3

def test_sum(numbers):
    assert sum(numbers) == 6
```

Each test now receives clean predictable state before execution begins.

Fixtures also help isolate tests from one another. One test should not accidentally modify state used by another test because this can create inconsistent failures that become difficult to reproduce reliably.

Good test setup keeps tests independent, predictable, and easy to maintain as projects continue growing.

Once reusable setup exists, another important requirement becomes ensuring tests remain deterministic and produce consistent results every time they execute.

## Testing Exceptions

Programs should not only be tested for successful behavior. Many failures are expected parts of normal execution, and tests should verify that these failures occur correctly under invalid conditions.

Consider following function.

```py
# app.py

def divide(a, b):
    return a / b
```

Normal execution can be tested directly.

```py
# test_app.py
from app import divide

def test_divide():
    assert divide(10, 2) == 5
```

However, function should also behave correctly when invalid input appears.

```py
# test_app.py

import pytest
from app import divide

def test_divide_zero():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)
```

This test succeeds only if `ZeroDivisionError` is raised during execution.

Without exception testing, programs may appear correct during normal execution while still failing unpredictably under invalid runtime conditions.

Exception testing also helps verify validation logic.

```py
# app.py

def register(username):
    if len(username) < 3:
        raise ValueError("username too short")
```

Tests can now confirm that invalid data is rejected intentionally.

```py
# test_app.py

import pytest
from app import register

def test_short_username():
    with pytest.raises(ValueError):
        register("ab")
```

Tests like this confirm that invalid state produces expected failure instead of silently continuing execution incorrectly.

Pytest can also verify exception messages directly.

```py
# app.py

def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("insufficient funds")

    return balance - amount
```

```py
# test_app.py

import pytest
from app import withdraw

def test_insufficient_funds():
    with pytest.raises(ValueError, match="insufficient funds"):
        withdraw(100, 200)
```

This ensures both exception type and failure message match expected behavior.

Testing exceptions is important because reliable software must behave correctly not only when execution succeeds, but also when failures occur intentionally and predictably under invalid conditions.

As tests become larger and more numerous, another important challenge appears ensuring tests remain deterministic and produce consistent results every time they execute.

## Deterministic Testing

Good tests should produce same result every time they execute under same conditions. Tests that sometimes pass and sometimes fail unpredictably become difficult to trust and extremely difficult to debug.

This property is called deterministic behavior.

Consider following example.

```py
# app.py

import random

def roll():
    return random.randint(1, 6)
```

A poorly designed test may depend directly on random runtime behavior.

```py
# test_app.py

from app import roll

def test_roll():
    assert roll() == 6
```

This test may pass sometimes and fail other times even when application itself works correctly.

Tests should avoid depending on uncontrolled randomness, changing system state, current time, external APIs, databases, or network behavior whenever possible because these factors can produce inconsistent results between executions.

Instead of verifying exact random value, test should verify predictable behavior.

```py
# test_app.py

from app import roll

def test_roll_range():
    value = roll()

    assert 1 <= value <= 6
```

Now test verifies stable expected behavior instead of unpredictable output.

Deterministic testing also becomes important when working with mutable state.

```py
# app.py

items = []

def add_item(value):
    items.append(value)

    return items
```

Shared state between tests can create inconsistent failures depending on execution order.

```py
# test_app.py

from app import add_item

def test_add_first():
    assert add_item("a") == ["a"]

def test_add_second():
    assert add_item("b") == ["b"]
```

Second test may fail because list already contains values left behind by earlier execution.

Good tests isolate state so each test begins with predictable environment and produces repeatable results independently from other tests.

Deterministic tests are important because unreliable tests eventually lose diagnostic value. If failures appear randomly, developers can no longer trust whether failing test represents real bug or inconsistent execution environment.

Reliable debugging depends on reliable tests.
