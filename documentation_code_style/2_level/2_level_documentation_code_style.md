# Python Documentation and Code Style Level 2

- [Why automation becomes necessary](#why-automation-becomes-necessary)
- [Formatting code automatically](#formatting-code-automatically)
- [Detecting style and logic issues with linting](#detecting-style-and-logic-issues-with-linting)

## Why automation becomes necessary

In **Documentation and Code Style Level 1**, attention was placed on learning how formatting, naming, comments, and docstrings improve readability when applied manually. This approach is essential for understanding what clean code looks like and why it matters.

However, manual discipline does not scale beyond small examples.

As projects grow, code is modified repeatedly and often by more than one person. Even when developers understand the same style conventions, inconsistencies appear naturally. Small spacing differences, forgotten imports, or unused variables accumulate over time and gradually reduce clarity.

At this stage, the responsibility for enforcing style shifts away from the developer’s memory and toward automated tools. These tools apply the same rules every time code is written or modified. They do not replace understanding. Instead, they ensure that understanding is applied consistently.

This level introduces automated formatting and linting as part of normal Python development.

## Formatting code automatically

Formatting tools exist to control how code is structured visually. They manage indentation, spacing, line breaks, and layout without changing how the program behaves.

In modern Python projects, formatting is commonly handled by Black. Black applies a single, consistent formatting style so developers do not make individual layout decisions.

Black is largely based on the **PEP 8 style guide**. In places where **PEP 8** allows multiple valid formatting choices.

To use Black, it must first be installed.

When using `pip`, Black is installed into the active environment.

```bash
pip install black
```

When a project is managed with Poetry, Black is added as a development dependency.

```bash
poetry add --group dev black
```

Consider the following function.

```py
def calculate(total, increment): return total + increment
```

The function works, but its structure is compressed and difficult to scan. When a formatter is applied, the same code becomes.

```py
def calculate(total, increment):
    return total + increment
```

When using Poetry, the same Black commands are executed through `poetry run` so they run inside the project managed environment. When Black is installed globally or inside an activated virtual environment with `pip`, the same commands are run directly using `black`.

After installation, Black is applied by running it on files or directories.

```bash
black .
```

This command formats all Python files in the current project directory.

```bash
black src/
```

This command formats all Python files inside the `src` directory.

```bash
black path/to/file.py
```

This command formats a single Python file.

Sometimes formatting should be checked without modifying files.

```bash
black --check .
```

This command reports whether files need formatting but does not rewrite them.

```bash
black --diff .
```

This command shows what changes Black would make without applying them.

Black does not report logical or stylistic errors. It only validates formatting and rewrites code to match its rules.

When a project uses `requirements.txt`, formatting rules cannot be described inside that file. Any customization requires separate **configuration files** or **command-line options**.

When using Poetry, formatting rules are described directly in `pyproject.toml`. This allows formatting configuration to live alongside the project definition and remain consistent across environments.

Black is intentionally opinionated and supports very few configuration options. In most projects, the only setting that is adjusted is line length, while all other behavior relies on Blacks defaults.

```toml
[tool.black]
line-length = 88
```

In modern Python projects, formatting is not a matter of personal preference. It is handled automatically so that all code follows the same visual rules across the entire project.

## Detecting style and logic issues with linting

Formatting controls appearance, but it does not identify questionable code patterns. This is the role of linting.

Linting tools analyze source code without executing it. They look for patterns that commonly indicate mistakes, incomplete logic, or unnecessary complexity. These issues may not cause immediate errors, but they often lead to problems later.

In modern Python projects, linting is commonly handled by **Ruff**. Ruff checks code against a set of well-known Python style and correctness rules and reports potential problems.

Consider the following example.

```py
def process_items(items):
    result = []

    for item in items:
        pass

    return result
```

This code runs without error, but several issues are present. The variable `result` is created but never modified, and the loop body does nothing. This often indicates unfinished or forgotten logic.

When Ruff checks this file, it reports these patterns so they do not go unnoticed. Ruff does not decide what the correct behavior should be, but it highlights code that deserves closer inspection.

To use Ruff, it must first be installed.

When using `pip`, Ruff is installed into the active environment.

```bash
pip install ruff
```

When a project is managed with Poetry, Ruff is added as a development dependency.

```bash
poetry add --group dev ruff
```

After installation, Ruff is run on files or directories.

```bash
ruff check .
```

This command analyzes the project and reports potential issues without modifying any files.

Ruff can also automatically fix some safe issues, such as **unused imports**, **unused variables**, and **import ordering problems**, where the fix does not change program behavior.

Consider the following example.

```py
import math

def calculate(values):
    total = 0

    for value in values:
        total += value

    return total
```

The code works correctly, but the `math` import is never used. This is a common situation during development.

When Ruff is run with automatic fixing enabled.

```bash
ruff check . --fix
```

the unused `import` is removed automatically.

When using Poetry, the same Ruff commands are executed through `poetry run` so they run inside the project managed environment. When Ruff is installed globally or inside an activated virtual environment with `pip`, the same commands are run directly using `ruff`.

Ruff configuration is defined in pyproject.toml, just like formatting configuration.

Ruff organizes its checks into rule groups. In most projects, a small set of rule groups is enabled.

- `E` covers style issues based on PEP 8.
- `F` covers likely bugs such as unused imports and undefined names.
- `I` covers import ordering and grouping.

These rule groups catch the most common problems.

For this reason, a minimal Ruff configuration usually looks like this.

```toml
[tool.ruff]
line-length = 88
select = ["E", "F", "I"]
```

Although Ruff supports many additional rule groups, most projects intentionally start with these defaults and expand only when needed.

Linting acts as an early warning system. It does not decide correctness, but it draws attention to code that deserves a closer look.
