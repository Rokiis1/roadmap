# Content of Python Package Management Level 1

- [Why Python needs package management](#why-python-needs-package-management)
- [Installing external packages](#installing-external-packages)
- [The problem with global installations](#the-problem-with-global-installations)
- [Creating an isolated environment with venv](#creating-an-isolated-environment-with-venv)
- [Capturing dependencies with requirements.txt](#capturing-dependencies-with-requirementstxt)
- [The role of pyproject.toml](#the-role-of-pyprojecttoml)
- [Using Poetry to manage the project](#using-poetry-to-manage-the-project)

In earlier stages of learning Python, programs are usually small and **self-contained**. A file runs, prints output, and finishes. Everything needed to run the program already exists inside Python itself.

As soon as a program needs to do something practical, this changes. Fetching data from an **API**, **formatting terminal** output, **validating input** or **writing tests** usually requires external libraries. These libraries are not part of Python and must be installed separately.

At this point, a Python program stops being just code. It becomes a project that depends on other software. Managing those dependencies is what package management is about.

This level introduces how Python installs packages, how those packages are isolated per project, and how a project records its dependencies so it can be reproduced on another machine.

## Why Python needs package management

Instead of solving the same problems repeatedly, developers share solutions as packages. These packages are published so other projects can install them and build on top of them.

When a program imports a library that was installed separately, that library becomes a dependency. The program now relies on that dependency being present and compatible.

As packages evolve, versions change. Bugs are fixed, features are added, and breaking changes appear. Without control, projects become unpredictable.

## Installing external packages

Python includes a tool called `pip`, which installs external packages from [PyPI](https://pypi.org/).

Installing a package looks like this.

```bash
pip install requests
```

After installation, the package becomes available to the Python interpreter. The program can import it and use it.

The important detail is not the command itself, but where the package is installed.

## The problem with global installations

If no isolated environment is active, `pip` installs packages globally. This means every project shares the same set of installed libraries.

As projects accumulate, conflicts appear. One project upgrades a package and another silently breaks. Diagnosing these failures becomes increasingly difficult.

The solution is isolation.

## Creating an isolated environment with venv

An isolated environment is a directory that contains its own Python interpreter and installed packages. Python provides this through the `venv` module.

Creating an environment inside a project directory looks like this.

```bash
python -m venv .venv
```

The name `.venv` is a convention, not a requirement, any name can be used so dot is often chosen to indicate that the folder is an internal project artifact.

Many tools and editors also recognize `.venv` automatically.

After this command runs, a new directory appears in the project. This directory contains a copy of the Python **interpreter** and supporting files needed to run Python independently of the system installation.

The environment must be activated before it is used. Activation does not change Python itself. It only updates the shell so that `python` and `pip` point to the versions inside the environment.

On macOS and Linux, activation looks like this.

```bash
source .venv/bin/activate
```

On Windows, activation looks different because Windows uses a different directory layout and shell system.

```bash
.venv\Scripts\activate
```

After activation, running `python` uses the interpreter inside `.venv`, and running `pip` installs packages into the environment instead of globally.

From this point on, any package installed with `pip` is installed only inside the environment.

```bash
deactivate
```

Deactivation does not remove the environment, it only affects the current shell session.

If the environment is no longer needed, it can be removed by deleting the directory itself.

On macOS and Linux, this looks like deleting any other folder.

```bash
rm -rf .venv
```

On Windows, the folder can be deleted using File Explorer or from the command line.

```bash
rmdir /s .venv
```

Once the directory is removed, the environment no longer exists. Any packages that were installed inside it are removed with it.

## Capturing dependencies with requirements.txt

Isolation alone is not enough, project must also be reproducible.

A virtual environment exists only on one machine. If the project is copied to another computer, the environment does not come with it, new machine needs a way to install the same dependencies in the same versions.

Once packages are installed, `pip` can record their exact versions.

```bash
pip freeze > requirements.txt
```

The generated file contains a list of installed packages together with their versions, each line represents one dependency that was present in the environment at the time the file was created.

```txt
base58
biscuit-python<0.3.0
cabarchive
celery
Django>=4.2,<5
django-cors-headers
djangorestframework<3.15
django_filter
drf-extensions
drf-standardized-errors
drf-yasg
Jinja2==3.0.3
requests
lxml
pyyaml
```

This file is part of the project and should be committed to version control. It describes what the project needs in order to run, not how those dependencies were installed locally.

Another machine can recreate the environment by installing from the file.

```bash
pip install -r requirements.txt
```

This command installs the listed packages into the currently active environment, it no environment is active, the packages are installed globally, which is usually not what is intended.

When dependencies change, the file must be **updated**, **adding**, **removing**, or **upgrading** a package changes the environment state and should be followed by regenerating `requirements.txt`.

Adding a package means installing it into the active environment.

```bash
pip install rich
```

Removing a package means uninstalling it from the active environment.

```bash
pip uninstall rich
```

Upgrading a package means installing a newer version into the active environment.

```bash
pip install -U rich
```

After any of these changes, the dependency file should be regenerated so it matches the current environment.

```bash
pip freeze > requirements.txt
```

This workflow is simple and widely used.

## The role of pyproject.toml

As a code grows, Python tools converged on a single configuration file called `pyproject.toml`, this file provides a structured way to describe a project, its dependencies, and its tooling configuration.

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "spam-eggs"
version = "2020.0.0"
dependencies = [
  "httpx",
  "gidgethub[httpx]>4.0.0",
  "django>2.1; os_name != 'nt'",
  "django>2.0; os_name == 'nt'",
]
requires-python = ">=3.8"
authors = [
  {name = "Pradyun Gedam", email = "pradyun@example.com"},
  {name = "Tzu-Ping Chung", email = "tzu-ping@example.com"},
  {name = "Another person"},
  {email = "different.person@example.com"},
]
maintainers = [
  {name = "Brett Cannon", email = "brett@example.com"}
]
description = "Lovely Spam! Wonderful Spam!"
readme = "README.rst"
license = "MIT"
license-files = ["LICEN[CS]E.*"]
keywords = ["egg", "bacon", "sausage", "tomatoes", "Lobster Thermidor"]
classifiers = [
  "Development Status :: 4 - Beta",
  "Programming Language :: Python"
]

[project.optional-dependencies]
gui = ["PyQt5"]
cli = [
  "rich",
  "click",
]

[project.urls]
Homepage = "https://example.com"
Documentation = "https://readthedocs.org"
Repository = "https://github.com/me/spam.git"
"Bug Tracker" = "https://github.com/me/spam/issues"
Changelog = "https://github.com/me/spam/blob/master/CHANGELOG.md"

[project.scripts]
spam-cli = "spam:main_cli"

[project.gui-scripts]
spam-gui = "spam:main_gui"

[project.entry-points."spam.magical"]
tomatoes = "spam:main_tomatoes"
```

## Using Poetry to manage the project

Poetry builds on `pyproject.toml` and manages dependencies and environments automatically.

When a project is initialized with Poetry, the `pyproject.toml` file becomes the source of truth for the project dependencies.

```bash
poetry init
```

The developer does not manually create or activate a **virtual environment**, poetry handles this internally and ensures consistency.

The result is the same isolation and reproducibility with fewer manual steps.