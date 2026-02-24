# Content of Python command line 2 level

- [How the command line controls](#how-the-command-line-controls)
- [Command line options and flags](#command-line-options-and-flags)
- [Execution context, files and modules](#execution-context-files-and-modules)
- [Passing arguments into programs](#passing-arguments-into-programs)
- [Environment influence on execution](#environment-influence-on-execution)

In **Python command line level 2** we will talk that no longer just something that runs code, it becomes a process that is configured by the command line before any program logic begins. The way Python starts, what it executes, and what environment it uses are all determined by how it is invoked.

## How the command line controls

Command line starts with the command `python` or `py` and is your gateway to interacting with the **Python interpreter** directly from your terminal or Command Prompt. You can also run **Python programs** by specifying a file name,`py main.py`. To check the installed Python version, you can use `python --version`.

This difference is not caused by different versions, but by the arguments passed to the same executable.

Command line is responsible for shaping behavior before user code is loaded.

Python can also execute code directly from the command line without loading a file.

```bash
python -c "print(2 + 2)"
```

In this case, the provided code string is executed immediately, and Python exits after execution finishes.

## Command line options and flags

Command line options modify how starts, some options use **short forms**, while others use **longer descriptive names**. These options are processed before any user code runs.

```bash
python -V
python --version
```

Both commands display the installed version.

```bash
python -h
python --help
```

These commands display help information provided by itself, no program code is executed when these options are used.

Because options are handled before loading user code, they are commonly used by **tools**, **automation scripts**, and **environment management** to control startup behavior.

## Execution context, files and modules

When a program is executed, runs it within a specific working directory. This directory is determined by where the command is run, not by where the file itself is located.

```bash
cd project
python main.py
```

In this case, the working directory is `project`, **relative paths** inside `main.py` are resolved from this directory.

Running a file means, given a direct path to a file on disk and executes that file exactly as specified.

```bash
python main.py
```

Before any user code runs, Python constructs a list of locations where it will search for modules.

This list is available at runtime as `sys.path`.

```py
import sys
print(sys.path)
```

When a file is executed directly, the directory containing that file is placed first in `sys.path`, searches this location before any others when resolving imports.

A file can also be executed using an **absolute path**.

On **macOS** and **Linux**, an **absolute path** looks like this.

```bash
python /home/user/project/main.py
```

On **Windows**, an **absolute path** looks like this.

```bash
python C:\Users\User\project\main.py
```

When an **absolute path** is used we still uses the current working directory for resolving relative paths inside the program, **absolute path** only tells where to find the file, not how to resolve its internal paths.

Running a module means that looks up code by name using its import system instead of a filesystem path.

```bash
python -m my_package
```

In this case, the current working directory is placed first in `sys.path` instead of file location, imports are resolved using the **package structure** rather than the **physical location** of a single file.

As a code grow into packages, running modules becomes the preferred approach, avoids **path related issues** and ensures execution happens in the same way Python resolves imports during normal operation.

## Passing arguments into programs

Once has finished processing its own options, any remaining command line values are passed directly to the program being executed.

```bash
python main.py input.txt --verbose
```

In this case, `input.txt` and `--verbose` are not handled by Python itself, they are passed unchanged to the program.

Inside the program, these values are available through `sys.argv`.

```py
import sys

print(sys.argv)
```

When running the command `sys.argv` contains the script name followed by each argument in the order they were provided.

The first element always refers to the program being executed, other remaining elements represent the arguments passed from the command line.

Arguments are **positional** and **ordered**, Python does not interpret their meaning or structure, Only delivers them to the program, which is responsible for deciding how they are used.

A program can also communicate its result back to the command line using an **exit code**.

```py
import sys

if not sys.argv[1:]:
    sys.exit(1)

sys.exit(0)
```

An exit code of `0` indicates successful execution, a **non zero exit** code indicates failure, this allows other **tools** and **scripts** to detect whether a program ran correctly.

## Environment influence on execution

Execution is also influenced by the surrounding environment. Variables such as `PYTHONPATH` can alter where searches for **modules**, changing how **imports** are resolved.

For example, a module can be imported only if its location is part of Python’s search path.

```bash
python main.py
```

If the module is not on the search path, the import fails.

```py
import utils
```

One way to make the import work is modifying `PYTHONPATH`.

On **macOS** and **Linux**, this can be done when running the command.

```bash
PYTHONPATH=src python main.py
```

On **Windows**, the same idea looks like this.

```bash
set PYTHONPATH=src
python main.py
```

In these cases, Python is instructed to search the `src` directory when resolving imports.

This approach works, but it couples program behavior to the execution environment, if the variable is not set, the program fails.

```bash
python main.py
```

If the variable is set differently on another machine, imports may resolve in unexpected ways `ModuleNotFoundError: No module named 'utils'`.

```bash
PYTHONPATH=src python main.py
```

On a different system, the same variable may point somewhere else.

```bash
PYTHONPATH=old_src python main.py
```

In this case, may import a different module with the same name, or fail to import the expected one.

As projects grow, this becomes difficult to maintain, environment variables are invisible to the code itself and must be **remembered**, **documented** and **reproduced exactly**.

```py
# works on one machine
PYTHONPATH=src python app.py

# forgotten on another machine
python app.py
```

For this reason, structured projects usually prefer **explicit package layouts** and **controlled execution methods**.

```bash
python -m my_package
```

Running modules this way ensures Python resolves imports using the project package structure rather than relying on external environment configuration.
