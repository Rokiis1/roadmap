# Content of Python modules and import 2 level

- [Organizing code with folders](#organizing-code-with-folders)
- [Creating and using your own modules](#creating-and-using-your-own-modules)
- [Ways to import modules and names](#ways-to-import-modules-and-names)
- [What happens when a module is imported](#what-happens-when-a-module-is-imported)
- [Running a file vs importing a file](#running-a-file-vs-importing-a-file)
- [The `__name__` variable and `"__main__"`](#the-__name__-variable-and-__main__)
- [The `__init__` file](#the-__init__-file)
- [Importing and controlling exports](#importing-and-controlling-exports)

In the previous level, we explored what a **module** is and how Python allows us to use code that already exists through the `import` keyword. We worked with **built-in modules** such as `math` and saw how Python gives us access to **ready-made functionality**.

As we continue writing programs, we naturally move from small scripts to larger files that hold more and more code. In the beginning, this feels convenient and nothing seems wrong. Over time **reuse becomes difficult**.

This is the moment where imports stop being just a way to access built-in features and start becoming a **design tool**.

Instead of treating a **Python file as a single script**, we begin to split across multiple files. One file focuses on **calculations**, another handles **configuration**, another deals with **validation** or **formatting**. Each file becomes a module with a clear purpose.

In this level, we focus on how to work with modules. We will create **our own modules**, **import them in different ways**, and **examine what Python actually does when a module is imported**. We will also look at how to **control what a module exposes** and **how to write files that behave correctly** when they are imported or executed directly.

Before creating our own modules, it helps to take a step back and look at how code is organized.

## Organizing code with folders

As programs grow, splitting code into multiple files is often not enough. Even with modules, a project can quickly end up with many files living side by side in the same directory.

To keep related modules together, Python projects commonly use **folders** to group files that serve a similar purpose. These folders do not describe how Python works internally. Instead, they describe how **we** think about the structure of the program.

Folder names usually reflect the **role** of the code they contain.

For example, a folder named `utils` often contains small helper modules that can be reused in many places. A folder named `services` may group code that performs specific operations or business logic. A folder named `config` usually contains configuration-related code, while a folder named `data` may contain files responsible for loading or managing datasets.

At this level, it is enough to understand folders as a way to **group related modules**. We are not concerned yet with how Python imports from folders or how packages work internally. The goal is simply to organize code in a way that reflects its purpose.

## Creating and using your own modules

A module is simply a Python file that **contains code we want to reuse**. There is nothing special about it beyond the fact that it can be imported from another file.

Let’s start by creating a module that works with a simple dataset. We will place this code in a file called `user_utils.py`.

```py
# user_utils.py
users = [
    {"id": 1, "name": "example1", "active": True},
    {"id": 2, "name": "example2", "active": False},
    {"id": 3, "name": "example3", "active": True},
]

def get_active_users(data):
    return [user for user in data if user["active"]]

def get_user_names(data):
    return [user["name"] for user in data]
```

This file **groups together** everything related to working with users. It does not print anything and does **not control program flow**. Its only purpose is to provide reusable functionality.

Now we create another file `main.py` where the program is executed.

```py
# main.py
import user_utils

active_users = user_utils.get_active_users(user_utils.users)
names = user_utils.get_user_names(active_users)

print(names)
```

When Python executes `import user_utils`, it loads the file once and makes its contents available through the name `user_utils`. The dataset and functions defined in that file can now be reused anywhere in the program.

After running this program, you may notice that a new folder named `__pycache__` appears next to your files. This folder is created automatically by Python.

When a module is imported, Python reads the source file (`.py`) and prepares it for execution in an internal format called **bytecode**. This process is handled entirely by Python and is not something we need to manage ourselves. The result is stored in the `__pycache__` folder to make future imports faster.

The details of how this works will be covered later in **Python under the hood Level 3**. For now, it is enough to know that this is a **normal and automatic part** of how Python runs code.

You do not need to **create**, **edit**, or **commit** this folder manually. It is managed entirely by Python and can be deleted at any time. If it is missing, Python will simply recreate it when the module is imported again.

So far, we have focused on what Python does automatically when a **module is imported**. Now it is time to look at the part we **control**.

Python provides more than one way to **import a module or specific names from it**. Each approach affects how we access the code and how it reads inside our programs.

## Ways to import modules and names

Python allows us to import code in more than one way. The choice we make affects how the imported code is accessed and how readable the program becomes.

The most straightforward approach is to import the entire module.

```py
import user_utils

active_users = user_utils.get_active_users(user_utils.users)
names = user_utils.get_user_names(active_users)
```

This style makes it clear where each function comes from. When reading the code, we can immediately see that `get_active_users` and `get_user_names` belong to the `user_utils` module. For larger programs, this clarity becomes important.

In some situations, repeatedly typing the module name can feel verbose. Python allows us to import specific names directly from a module.

```py
from user_utils import get_active_users, get_user_names, users
```

With this approach, the imported names can be used without the module prefix.

```py
active_users = get_active_users(users)
names = get_user_names(active_users)
```

This can make code shorter and easier to read, especially when a small number of functions are used frequently. However, it also means that the origin of a function is no longer visible at the call site. In larger files, this can make code harder to follow.

To balance **readability** and **convenience**, Python also allows imported modules to be given an **alias**.

```py
import user_utils as utils
```

The **alias** becomes the name we use throughout the file.

```py
active_users = utils.get_active_users(utils.users)
names = utils.get_user_names(active_users)
```

Aliasing is commonly used when module names are long or when a shorter.

Each of these import styles is valid. As a code grow, **readability** often matters more than saving a few characters.

So far, we have looked at different ways to write import statements and how they affect the readability of our code. Regardless of which style we choose, all imports share the same underlying behavior.

To understand this behavior, it helps to look at what actually happens when Python encounters an **`import` statement**.

## What happens when a module is imported

When Python encounters an import statement, it does more than simply make functions available. Importing a module is an action that triggers a specific sequence of steps.

The first time a module is imported, Python locates the corresponding file and starts executing it **from top to bottom**, just like a normal script.

Consider the following module:

```py
# demo_module.py

print("Step 1: module code starts executing")

value = 42 # Step 2: variables are created

def get_value(): # Step 3: functions are defined
    return value

print("Step 4: module code finished executing")
```

Nothing special has happened yet. This file is just a Python script. The important part is **what happens when it is imported**.

Now look at the file that imports this module.

```py
# main.py

print("Before import")

import demo_module

print("After import")
```

When `main.py` is run, the output looks like this.

```py
Before import
Step 1: module code starts executing
Step 4: module code finished executing
After import
```

This output shows the order clearly. When Python reaches the `import demo_module` line, it pauses the execution of `main.py`, runs all the top-level code inside `demo_module.py` from top to bottom, and only then continues executing `main.py`.

Because of this behavior, any code placed at the top level of a module runs immediately when the module is imported. This is why `print` statements or other side effects can appear even though the module was only imported.

This distinction between **defining code** and **executing code** becomes important when a file can be both **imported** and **run directly**. The same Python file may behave differently depending on how it is used.

To understand this difference, we need to look at what happens when a file is **executed as a program** versus **when it is imported as a module**.

## Running a file vs importing a file

A Python file can be used in two different ways. It can be **run directly as a program**, or it can be **imported as a module** into another file. Although the file itself does not change, Python treats these two cases differently.

To see this difference clearly, let’s reuse the same example module.

```py
# demo_module.py

print("demo_module: top-level code is running")

def greet():
    print("Hello from demo_module")
```

If we run this file directly `python demo_module.py` and the output is `demo_module: top-level code is running`.

In this case, the behavior is expected. The file is the program, and Python executes its code from top to bottom.

Now let’s import the **same file from another program**.

```py
# main.py

print("main.py starts")

import demo_module

print("main.py continues")
```

Running `main.py` produces this output.

```tex
main.py starts
demo_module: top-level code is running
main.py continues
```

This output shows that Python executes all top-level code in `demo_module.py` at the moment it is imported.

So far, this behavior may not look problematic. However, the issue becomes clear when the file is intended to be **used as a reusable module** rather than a standalone script.

Because **top-level code** runs automatically on import, a module cannot distinguish between **being executed** and **being reused**. Any code placed at the top level will run in both cases. As a result, simply importing a module can trigger actions such as **printing output**, **loading data**, **opening files**, or **starting computations**.

In programs, this creates a **design problem**. A module should be able to **define functions** and **data** without performing actions automatically. Program logic should run only when the file is used as the entry point, not every time it is imported.

Python solves this problem by giving each module a way to identify **how it is being used**.

## The `__name__` variable and `"__main__"`

In the previous section, we saw that Python executes all top-level code in a file when that file is imported. This makes it difficult for a module to know whether it is being **run as a program** or **imported for reuse**.

To solve this problem, Python gives every module a built-in way to identify **how it is being used**.

Every Python file is treated by Python as a **module object**. Like other objects, a module has attributes that Python creates automatically. One of these attributes is `__name__`.

Consider a simple file named `demo_module.py`.

```py
# demo_module.py
print("running demo module")
```

When this file is imported into another program, Python treats it as a module object. Just like other objects, it has attributes that we can inspect.

One way to see these attributes is by using `vars()`.

```py
# main.py
import demo_module
print(vars(demo_module))
```

The output is a **dictionary** containing the module attributes. Among the many entries, one of them is `'__name__': 'demo_module'`.

This shows that `__name__` already exists on the module. We did not define it ourselves, and we did not assign it manually. Python created it automatically.

Because `vars()` returns a dictionary, we can also access the value directly.

```py
print(demo_module.__name__)
```

The value printed is the module’s name. This confirms that `__name__` is a built-in attribute of every module and that it stores identifying information about how the module is being used.

The value of `__name__` is **set differently depending on how the file is started**.

When `demo_module.py` is run as a program, Python treats it as the **entry point** of execution. In this case, the file is still a module, but it is given a special name.

```py
# demo_module.py
print(__name__)
```

Running this file directly prints `__main__`.

The string `"__main__"` is simply the name Python assigns to the module where program execution starts. It represents the entry point of the program.

This entry point module can also be inspected like any other module.

```py
import __main__
print(vars(__main__))
```

`__main__` is a special module object created by Python to represent the starting point of the program.

When a file is imported, its `__name__` is set to the module’s name. When a file is executed directly, its `__name__` is set to `"__main__"`. This difference allows a file to determine **whether it is being run** or **reused**.

Because a file can check the value of `__name__`, it can prevent executable code from running automatically when the file is imported.

```py
# main.py
import user_utils

def main():
    active_users = user_utils.get_active_users(user_utils.users)
    names = user_utils.get_user_names(active_users)
    print(names)

if __name__ == "__main__":
    main()
```

In this structure, the program’s executable logic is placed inside a `main()` function and guarded by a conditional check.

When the file is executed directly, `__name__` is set to `"__main__"`, the condition evaluates to `True`, and the program runs. When the file is imported, `__name__` contains the module name, the condition fails, and no executable code runs automatically.

This pattern allows Python files to be safely reused as modules while still behaving correctly when executed as programs.

Controlling **when** code runs is only one part of writing reusable modules. Another important concern is deciding **what a module exposes** to the outside world.

As projects grow and modules are grouped into folders, Python needs a way to define how those folders behave when they are imported.

## The `__init__` file

In Python, a folder that contains modules can itself be treated as a module. This is where the `__init__.py` file comes in.

Traditionally, the presence of an `__init__.py` file marked a folder as a Python module and gave Python a place to run initialization code when that folder was imported. Even if the file was empty, its presence signaled that the folder should be treated as a single logical unit.

In modern versions of Python, the `__init__.py` file is **not strictly mandatory** for a folder to be importable. Python can treat folders without it as modules as well. However, `__init__.py` is still commonly used because it provides **explicit structure and control**.

Consider a folder structure like this.

```text
utils/
    __init__.py
    user_utils.py
    auth_utils.py
```

Each file inside the folder is a module, but the folder itself can also be imported as a module because it contains an `__init__.py` file.

```py
import utils
```

When this import happens, Python executes the code inside `utils/__init__.py`. The files inside the folder are not imported automatically unless `__init__.py` explicitly imports them.

If `__init__.py` is empty, importing the folder only makes the folder itself available.

```py
# utils/__init__.py
```

In this case, accessing anything inside the folder requires importing the modules directly.

```py
from utils import user_utils
from utils import auth_utils
```

The purpose of `__init__.py` is to allow the folder to expose a **clean and intentional interface**.

By adding imports inside `__init__.py`, the folder can decide what should be available when it is imported.

```py
# utils/__init__.py
from .user_utils import get_active_users, get_user_names
from .auth_utils import is_authenticated
```

Now the folder behaves like a single module.

```py
from utils import get_active_users, is_authenticated
```

The internal file structure is hidden, and users of the module interact only with the names that `__init__.py` chooses to expose.

In this way, `__init__.py` is not about running program logic. Its role is to define **how a folder behaves when it is imported and what it represents as a module**.

Once a folder behaves like a **module**, the next question becomes **what that module should expose to the outside world**. Not every **function**, **variable**, or **helper** inside a module needs to be accessible when it is imported.

Python provides mechanisms that allow a module to define a clear **public interface** and **hide internal details**. Understanding this helps keep imports clean and prevents accidental use of implementation details.

## Importing and controlling exports

When a module or a folder is imported, Python makes its contents available to other parts of the program. However, not everything inside a module needs to be exposed.

So far, we have imported specific names explicitly.

```py
from utils import get_active_users
```

This form of import is always clear and predictable. Only the names we ask for are brought into the current namespace.

Python also allows importing everything from a module using the `*` syntax.

```py
from utils import *
```

At first glance, this may seem convenient. However, it raises an important question, **what does “everything” mean?**

By default, Python decides this based on naming conventions. Any name that does not start with an **underscore `_`** is considered public and will be imported. This can quickly lead to cluttered namespaces and accidental name conflicts.

To avoid this, Python provides a way for modules to explicitly declare what should be exported. This is done using a special variable called `__all__`.

The `__all__` variable is a list of strings that defines which names should be imported when `*` is used.

```py
# utils/__init__.py
from .user_utils import get_active_users, get_user_names
from .auth_utils import is_authenticated

__all__ = ["get_active_users", "is_authenticated"]
```

With this setup, importing everything becomes controlled and predictable.

```py
from utils import *
```

Only the names listed in `__all__` are imported. Other names inside the module still exist, but they are not exposed by default.

It is important to note that `__all__` does not restrict direct imports.

```py
from utils.user_utils import get_user_names
```

This still works, even if `get_user_names` is not listed in `__all__`. The purpose of `__all__` is not security. It is about defining a **public interface**.

In small scripts, `__all__` is often unnecessary. Explicit imports are usually clearer and safer.

As projects grow, however, defining a public interface becomes more important. `__all__` helps communicate which parts of a module are intended for use and which parts are internal details.

In this way, `__all__` works together with `__init__.py` to give structure and intention to a module design.
