# Content of Python Package Management Level 1

- [Why Python needs package management](#why-python-needs-package-management)
- [Installing external packages](#installing-external-packages)
- [Capturing dependencies with requirements.txt](#capturing-dependencies-with-requirementstxt)
- [Using Poetry to manage the project](#using-poetry-to-manage-the-project)

In earlier stages of learning Python, programs are usually small and self contained. A file is written, executed, and finishes its work. The program relies only on Python itself and whatever functionality is already available.

As projects grow, development changes. Programs become longer lived, shared with others, and expected to run reliably across different machines and environments.

At this stage, a Python program is no longer defined only by its source files. It also depends on how and where it is executed.

This level introduces how Python projects handle that responsibility by **installing required software**, **keeping project setups isolated**, and **recording dependency information** so the same setup can be recreated elsewhere.

## Why Python needs package management

Python encourages reuse instead of rewriting the same functionality in every project.

Common problems such as **HTTP requests**, **data validation**, **parsing**, **formatting**, **testing**, and many others have already been solved by other developers. These solutions are shared as packages so they can be reused across many projects.

Once a project depends on code written outside the project itself, that code must be obtained, installed, and made available to the program. This cannot be handled by source files alone.

Package management exists to support this reuse. It provides a standard way to install external functionality, make it available to projects, and manage it as a separate concern from the project own code.

To make this reuse practical, Python needs a way to obtain and install packages so they can be used by a program. This is where package installation comes in. Before looking at how dependencies are isolated or recorded, the first step is understanding how external packages are installed.

## Installing external packages

Python includes a tool called `pip`, which installs external packages from [PyPI](https://pypi.org/).

Installing a package looks like this.

```bash
pip install requests
```

After installation, the package becomes available to the Python interpreter. The program can now import it and use its functionality.

To confirm that a package is installed, the list of installed packages can be inspected.

```bash
pip list
```

Information about a specific package can also be viewed.

```bash
pip show requests
```

Packages can be upgraded when a newer version is needed.

```py
pip install -U requests
```

Packages can be removed when they are no longer needed.

```bash
pip uninstall requests
```

All pip commands operate on the currently active Python environment. If a virtual environment is active, packages are installed there. If no environment is active, packages are installed into the global environment.

For this reason, the important detail is not the command itself, but which environment is active when the command is executed.

Once packages are installed into the correct environment, the next concern is reproducibility. An environment exists only on one machine, so a project needs a way to record which dependencies were installed so the same setup can be recreated elsewhere.

## Capturing dependencies with requirements.txt

Isolation alone is not enough, project must also be reproducible.

A virtual environment exists only on one machine. If the project is copied to another computer, the environment does not come with it. The new machine needs a way to install the same dependencies in the same versions.

Once packages are installed, `pip` can record the current environment state.

```bash
pip freeze > requirements.txt
```

The generated file contains a list of installed packages together with their versions, each line represents one dependency that was present in the environment at the time the file was created.

```txt
requests==2.31.0
Jinja2==3.0.3
Django>=4.2,<5
```

This file is part of the project and should be committed to version control. It describes what the project needs in order to run, not how those dependencies were installed locally.

Another machine can recreate the environment by installing from the file.

```bash
pip install -r requirements.txt
```

This command installs the listed packages into the currently active environment.

When dependencies change, the environment state changes as well. After adding, removing, or upgrading packages, the dependency file should be regenerated so it continues to reflect the project’s expected setup.

```bash
pip freeze > requirements.txt
```

This workflow works well for many projects. As projects grow and involve more tooling, configuration, and automation, managing everything through separate files and commands becomes harder to maintain.

To reduce manual setup and keep dependencies, environments, and configuration in sync, many teams use Poetry to manage their Python projects.

## Using Poetry to manage the project

Poetry is a developer tool used to manage project dependencies and environments using `pyproject.toml` as the single source of truth.

Because Poetry is not a project dependency, it must be installed on the system before it can be used. It is installed once and then reused across projects.

A common way to install Poetry is using `pipx`, which installs Python command-line tools in isolated environments while exposing their commands globally.

Installing `pipx` looks the same on macOS, Linux, and Windows.

```bash
python -m pip install --user pipx
python -m pipx ensurepath
```

After running `ensurepath`, restart the terminal so the **PATH** changes take effect.

Verify that `pipx` is available.

```bash
pipx --version
```

Once `pipx` is available, install Poetry.

```bash
pipx install poetry
```

Verify that Poetry is available.

```bash
poetry --version
```

At this point, the `poetry` command is available and can be used to manage projects.

A new project can be created with Poetry.

```bash
poetry init
```

When this command runs, Poetry creates a file named `pyproject.toml` in the project directory.

This file becomes part of the project source code and describes **what the project is** and **what it depends on**. It replaces the role that `requirements.txt` played earlier, while also storing additional project information.

A minimal `pyproject.toml` created by Poetry looks like this.

```toml
[project]
name = "demo"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
  "requests",
]
```

The `[project]` section defines the project metadata.

Projects may also define optional dependency groups.

```toml
[project.optional-dependencies]
dev = [
  "pytest",
]
```

These dependencies are not required to run the project, but are commonly used for development tasks such as testing or linting.

Once the project is initialized, dependencies are added using Poetry commands. Poetry updates `pyproject.toml` automatically.

```bash
poetry add requests
```

When a dependency is added, Poetry also creates or updates a file named `poetry.lock`. The `poetry.lock` file records the exact versions that were resolved for the project, including indirect dependencies required by the packages you installed. This allows the same dependency set to be installed again later on another machine. Both files are part of the project and should be committed to version control.

Development or optional dependencies can be added separately.

```bash
poetry add --group dev pytest
```

After dependencies are defined, Poetry installs them into an isolated environment managed internally by the tool.

```bash
poetry install
```

Poetry handles virtual environment creation automatically. The developer does not manually create or activate a virtual environment.

Dependencies can be removed or updated through Poetry.

```bash
poetry remove requests
poetry update
```

Commands can be executed inside the project environment using Poetry.

```bash
poetry run python main.py
```
