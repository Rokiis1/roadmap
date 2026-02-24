# Python Documentation and Code Style Level 2

## Why automation becomes necessary

In **Documentation and Code Style Level 1**, attention was placed on learning how formatting, naming, comments, and docstrings improve readability when applied manually. This approach is essential for understanding what clean code looks like and why it matters.

However, manual discipline does not scale beyond small examples.

As projects grow, code is modified repeatedly and often by more than one person. Even when developers understand the same style conventions, inconsistencies appear naturally. Small spacing differences, forgotten imports, or unused variables accumulate over time and gradually reduce clarity.

At this stage, the responsibility for enforcing style shifts away from the developer’s memory and toward automated tools. These tools apply the same rules every time code is written or modified. They do not replace understanding. Instead, they ensure that understanding is applied consistently.

This level introduces automated formatting and linting as part of normal Python development.

## Formatting code automatically

Formatting tools exist to control how code is structured visually. They manage indentation, spacing, line breaks, and layout without changing how the program behaves.

When formatting is handled manually, developers must constantly make small decisions about where to place spaces or how to wrap lines. These decisions distract from the actual problem the code is meant to solve.

An automated formatter removes this burden.

Consider the following function.

```py
def calculate(a,b): return a+b
```

The function works, but its structure is compressed and difficult to scan. When a formatter is applied, the same code becomes:

```py
def calculate(a, b):
    return a + b
```

Nothing about the logic has changed. What changed is visibility. The structure of the function is now clear at a glance.

In modern Python projects, formatting is not a matter of personal preference. It is handled automatically so that all code follows the same visual rules across the entire project.

## Detecting style and logic issues with linting

Formatting controls appearance, but it does not identify questionable code patterns. This is the role of linting.

Linting tools analyze source code without executing it. They look for patterns that commonly indicate mistakes, incomplete logic, or unnecessary complexity. These issues may not cause immediate errors, but they often lead to problems later.

Consider the following example.

```py
def process_items(items):
    for item in items:
        pass
```

The code executes without error, but the loop body does nothing. This may be intentional, or it may indicate unfinished logic. A linter highlights this situation so it does not go unnoticed.

Linting acts as an early warning system. It does not decide correctness, but it draws attention to code that deserves a closer look.

## Installing style tools with pip

To use automated formatting and linting, the tools must be installed into the Python environment used by the project.

When working with virtual environments, the environment should be activated before installation. Once active, the tools can be installed using the package installer.

```bash
pip install black ruff
```

After installation, the tools become available as commands within that environment. Running them outside the correct environment may result in missing commands or incorrect versions being used.

Because package installation always targets the active environment, understanding which environment is in use remains essential.

## Installing style tools with Poetry

When a project is managed with Poetry, formatting and linting tools are added as development dependencies. They are part of the project workflow but not required to run the final program.

Adding these tools updates the project configuration automatically.

```bash
poetry add --group dev black ruff
```

Once dependencies are installed, commands are executed through Poetry so that they run inside the project’s managed environment.

```bash
poetry run black .
poetry run ruff check .
```

This ensures that everyone working on the project uses the same tool versions and rules.

## Project configuration with pyproject.toml

Modern Python projects store tool configuration in a single file named `pyproject.toml`. This file becomes part of the project source code and is shared through version control.

A minimal configuration for formatting and linting may look like this.

```toml
[tool.black]
line-length = 88

[tool.ruff]
line-length = 88
select = ["E", "F", "I"]
```

This configuration defines how code is formatted and which linting rules are applied. Because the configuration lives inside the project, it travels with the code and applies consistently across machines and environments.

Rather than relying on personal editor settings or individual habits, the project itself defines how code should look and what should be checked.

## Using formatting and linting in daily development

Once installed and configured, formatting and linting become part of normal development rather than special cleanup steps.

A typical development cycle involves writing code, formatting it automatically, and checking it with a linter before it is committed or shared. Formatting tools rewrite code to match the project standard. Linting tools report potential issues that should be reviewed and addressed.

Over time, this workflow keeps the codebase consistent and reduces the need for manual corrections. Instead of reviewing formatting decisions, developers can focus on correctness, structure, and intent.

At this level, the goal is not to memorize tool behavior or configuration options. The goal is to understand why automation exists and how it supports readable, maintainable Python code in real projects.
