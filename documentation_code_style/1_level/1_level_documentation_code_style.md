# Content of Python Documentation and Code style 1 level

- [Why Code Style Matters](#why-code-style-matters)
- [Basic Formatting Rules](#basic-formatting-rules)
- [Naming Conventions](#naming-conventions)
- [Comments](#comments)
- [Docstrings](#docstrings)

## Why Code Style Matters

In earlier stages, programs were evaluated primarily by whether they executed correctly. If the output matched expectations, the task was considered complete. At this level, the perspective changes.

Code is read far more often than it is written. It may be reviewed by teammates, maintained by future developers, or revisited months later by the original author. When structure is inconsistent and naming is unclear, understanding the logic becomes unnecessarily difficult.

Python strongly emphasizes readability. Clear formatting and consistent structure reduce cognitive load. Well written code makes logical flow visible and mistakes easier to detect.

Good code style is not about appearance. It is about clarity. Clean structure improves collaboration, debugging, and long-term maintenance.

To see this difference clearly, consider a simple example.

```py
def f(x,y):
    if(x>0):
        print("positive")
    else:
        print("not positive")
```

The program works correctly. It produces the expected result. However, the structure and naming provide little clarity about purpose.

Now consider a revised version.

```py
def check_positive(number):
    if number > 0:
        print("positive")
    else:
        print("not positive")
```

The logic has not changed. The behavior is identical. What changed is readability. The second version communicates intent immediately. The structure supports understanding rather than forcing the reader to decode it.

At this stage, students are encouraged to compare both versions and identify what specifically improved.

## Basic Formatting Rules

In Python, formatting directly reflects structure. Indentation determines how blocks of code are grouped and executed. Because indentation affects behavior, formatting must be deliberate and consistent.

Standard practice uses four spaces per indentation level. Logical sections of code are separated by blank lines. Spacing around operators improves readability. Line length should remain reasonable so that code does not become difficult to scan horizontally.

Although formatting rules do not change program logic, they influence how easily logic can be understood.

These formatting conventions are not **arbitrary**. Python provides an official style guide known as **PEP 8** and **PEP 328**, which defines recommended practices for writing code.

**PEP 8** establishes conventions for **indentation**, **spacing**, **naming**, **line length**, and overall structure. While Python itself does not enforce these rules, the broader Python community follows them.

Rather than memorizing every rule, developers typically rely on automated tools that apply **PEP 8** formatting consistently.

We will explore those tools in **Documentation and Code Style Level 2**, where we focus on using packages to automate formatting and enforce style guidelines.

For now, however, the goal is to understand how these conventions work by applying them manually. Before relying on automation, it is important to recognize formatting issues yourself and learn how to correct them intentionally.

Consider the following function.

```py
def calculate(a,b):
 return a+b
```

Although the function executes correctly, inconsistent indentation and missing spacing reduce readability.

Rewriting it with consistent formatting improves clarity.

```py
def calculate(total_price, tax_amount):
    return total_price + tax_amount
```

Identifying formatting inconsistencies and correcting them. Even small spacing adjustments help reinforce structural and visual clarity.

## Naming Conventions

Names communicate intent. A variable name represents meaning, not just stored data. A function name represents behavior, not just execution.

Descriptive names reduce mental effort. Ambiguous names force readers to infer purpose from context. Clear naming eliminates unnecessary guesswork.

Python follows consistent naming conventions. Variables and functions use lowercase words separated by underscores. Class names use capitalized words. Constants are written in uppercase to signal stability.

Naming is part of design. A well chosen name often explains more than a comment.

Consider this function.

```py
def p(d):
    for x in d:
        if x["a"] == True:
            print(x["n"])
```

The code may function correctly, but the names obscure meaning. The reader must decode what each symbol represents.

Now consider a clearer version.

```py
def print_active_users(users):
    for user in users:
        if user["active"]:
            print(user["name"])
```

Without reading the internal logic in detail, the purpose of the function is immediately understandable. Clear naming reduces cognitive effort and makes the program easier to maintain.

## Comments

Comments exist to clarify reasoning. They should explain intent, not restate obvious behavior.

Redundant comments add noise. Useful comments explain decisions, constraints, or non-obvious design choices. They capture why something is done in a particular way.

Outdated comments create confusion and can mislead readers. Comments should be maintained with the same care as the code itself.

Clear code reduces the need for excessive comments. Comments support understanding when code alone cannot fully communicate intent.

Not all comments improve clarity. Consider the following example.

```py
retry_count = retry_count + 1 # increment retry_count by 1
```

This comment simply restates what the code already expresses. Anyone reading the line can clearly see that the value is being incremented. The comment adds no new information.

Now consider a different example.

```py
# Prevent infinite retry loop
retry_count += 1
```

Here, the comment explains rather than mechanics. It provides context that cannot be inferred directly from the statement itself. Without the comment, the reader might not understand why the increment is necessary or what risk it mitigates.

## Docstrings

As programs grow, functions and modules need structured documentation. Docstrings provide this internal documentation layer.

A docstring describes what a function does, what kind of input it expects, and what result it produces. Unlike inline comments, docstrings form part of the function’s public interface.

At this introductory level, docstrings remain simple and focused on clarity. The goal is to develop the habit of documenting behavior consistently.

Documentation is not an afterthought. It is part of writing maintainable and understandable software.

Consider a function without documentation.

```py
def calculate_discount(price, rate):
    return price * (1 - rate)
```

While the implementation is simple, its purpose may not be immediately clear without inspecting the body.

Adding a docstring clarifies intent.

```py
def calculate_discount(price, rate):
    """Return the discounted price based on the given rate."""
    return price * (1 - rate)
```

The function now communicates its behavior directly. Even before reading the internal logic, a reader understands what it is meant to do.

Docstrings are also accessible at runtime.

```py
help(calculate_discount)
```

Python reads the docstring and displays it as part of the function’s documentation. This makes docstrings part of the public interface, not just internal notes.

A docstring is stored inside the function object itself and can be accessed directly.

```py
print(calculate_discount.__doc__)
```

This prints the string defined between the triple quotes. It confirms that a docstring is not ignored by the interpreter. It becomes part of the function’s metadata.
