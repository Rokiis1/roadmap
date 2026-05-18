# Content of Python inputs/outputs operations 4 level

- [Pathlib and Path Objects](#pathlib-and-path-objects)
- [Current Working Directory](#current-working-directory)
- [Joining Paths](#joining-paths)
- [Listing Files](#listing-files)
- [Glob Patterns](#glob-patterns)
- [CSV Files](#csv-files)
- [Reading CSV Files](#reading-csv-files)
- [Writing CSV Files](#writing-csv-files)
- [DictReader and DictWriter](#dictreader-and-dictwriter)

In the previous level, we learned how to work with files using the built-in `open()` function. We explored how to read and write files, work with file paths, handle text and binary files, and process encodings.

However, real projects often involve working with entire directories, constructing paths dynamically, searching for files, and processing structured data formats such as **CSV** files.

Python provides additional modules that simplify these tasks and make file handling more powerful and portable across operating systems.

One of the most important modern tools for working with files and directories in Python is the `pathlib` module.

Instead of manipulating file paths as plain strings, `pathlib` provides dedicated objects that represent paths and offer convenient methods for navigating and managing the file system.

Before working with file searching and structured file processing, it is important to understand how `pathlib` and path objects work.

## Pathlib and Path Objects

In previous examples, file paths were written as regular strings.

```py
file = open("data.txt", "r")
```

This approach works, but when projects become larger, working with paths as plain strings can become harder to manage. A program may need to work with files inside folders, build paths dynamically, or run on different operating systems.

To make path handling cleaner, Python provides the built-in `pathlib` module.

The `pathlib` module provides the `Path` class, which represents file system paths as objects instead of plain strings.

```py
from pathlib import Path
```

After importing `Path`, we can create a path object.

```py
from pathlib import Path

path = Path("data.txt")

print(path)
print(type(path))
```

The output will look similar to.

```bash
data.txt
<class 'pathlib.WindowsPath'>
```

On macOS or Linux, the type may appear as.

```bash
<class 'pathlib.PosixPath'>
```

The exact type depends on the operating system, but the idea is the same. The variable `path` now represents a file path object.

A `Path` object can represent a **file**, **folder**, **relative path** or **absolute path**.

```py
from pathlib import Path

file_path = Path("data.txt")
folder_path = Path("data")
```

Unlike a regular string, a `Path` object has methods that help us work with the file system.

For example, the `exists()` method checks whether the path exists.

```py
from pathlib import Path

path = Path("data.txt")

print(path.exists())
```

The output will be either `True` or `False`

A path object can also be used directly with `open()`.

```py
from pathlib import Path

path = Path("data.txt")

with open(path, "r") as file:
    content = file.read()

print(content)
```

Python also allows opening the file directly from the path object using the `open()` method.

```py
from pathlib import Path

path = Path("data.txt")

with path.open("r") as file:
    content = file.read()

print(content)
```

This makes file handling more organized because the path and the file operation are connected through the same object.

Before working with path joining, listing files, and searching folders, it is important to understand the current working directory, because relative paths are resolved from that location.

## Current Working Directory

When working with relative paths such as `"data.txt"` or `"files/data.txt"`, Python must determine where those paths begin from.

This location is called the **current working directory**.

The current working directory is the folder from which the Python program is currently running. When a relative path is used, Python searches for files relative to this directory.

For example

```py
from pathlib import Path

path = Path("data.txt")

print(path.exists())
```

Python will look for `"data.txt"` inside the current working directory.

To see the current working directory, the `cwd()` method can be used.

```py
from pathlib import Path

current_directory = Path.cwd()

print(current_directory)
```

The output may look similar to.

```bash
C:\Users\Name\Projects
```

Or on macOS/Linux.

```bash
/home/user/projects
```

This path represents the directory from which the script is being executed.

Understanding the current working directory is important because relative paths depend on it.

For example, suppose the current working directory is

```text
project/
```

And inside the project folder there is another folder named.

```text
data/
```

With a file called.

```text
users.txt
```

The structure would look similar to.

```txt
project/
│
├── main.py
│
└── data/
    └── users.txt
```

The file can then be accessed using a relative path.

```py
from pathlib import Path

path = Path("data/users.txt")

print(path.exists())
```

Python starts from the current working directory and then moves into the `data` folder.

If the program is executed from a different directory, the same relative path may no longer work.

For this reason, understanding the current working directory is essential when building file paths in larger projects.

In the next section, we will explore how paths can be combined safely using path joining.

## Joining Paths

In previous examples, paths were written manually as strings.

```py
path = "data/users.txt"
```

Although this works, manually building paths using strings can become difficult and error prone, especially when working with multiple folders or different operating systems.

The `pathlib` module provides a cleaner way to combine paths using path objects.

Paths can be joined using the `/` operator.

```py
from pathlib import Path

path = Path("data") / "users.txt"

print(path)
```

The output may look like

```bash
data/users.txt
```

On Windows, Python automatically handles the correct path format internally.

The `/` operator does not divide values in this case. When used with `Path` objects, it joins parts of a path together.

This makes path construction easier to read and safer than manually concatenating strings.

For example, instead of writing.

```py
path = "data/" + "users.txt"
```

We can write.

```py
from pathlib import Path

path = Path("data") / "users.txt"

Multiple path parts can also be joined together.

from pathlib import Path

path = Path("projects") / "python" / "files" / "data.txt"

print(path)
```

The output will look similar to

```bash
projects/python/files/data.txt
```

Path objects can also represent absolute paths.

```py
from pathlib import Path

path = Path("C:/Users/Name/Documents") / "notes.txt"

print(path)
```

This creates a complete path to the file.

Another common way to combine paths is with the `joinpath()` method.

```py
from pathlib import Path

path = Path("data").joinpath("users.txt")

print(path)
```

This produces the same result as using the `/` operator.

Both approaches are valid, but the `/` operator is often preferred because it is shorter and easier to read.

Joining paths with `pathlib` makes programs more portable because Python automatically handles path separators for different operating systems.

Now that we can build paths safely, the next step is learning how to work with directories and examine the files they contain.

## Listing Files

Programs often need to examine the contents of a directory. A program may need to process multiple text files, load datasets, search for images, or organize documents automatically.

The `pathlib` module provides methods for listing files and folders inside a directory.

To represent a directory, a `Path` object can be created.

```py
from pathlib import Path

path = Path("data")

The iterdir() method returns all items inside the directory.

from pathlib import Path

path = Path("data")

for item in path.iterdir():
    print(item)
```

Suppose the data folder contains.

```text
data/
├── users.txt
├── report.pdf
├── image.png
```

The output may look similar to.

```bash
data/users.txt
data/report.pdf
data/image.png
```

The `iterdir()` method returns both files and folders.

Because each item is also a `Path` object, additional methods can be used.

The `is_file()` method checks whether an item is a file.

```py
from pathlib import Path

path = Path("data")

for item in path.iterdir():
    if item.is_file():
        print(item)
```

The `is_dir()` method checks whether an item is a directory.

```py
from pathlib import Path

path = Path("data")

for item in path.iterdir():
    if item.is_dir():
        print(item)
```

The file name itself can also be accessed using the `name` attribute.

```py
from pathlib import Path

path = Path("data")

for item in path.iterdir():
    print(item.name)
```

The output may look like.

```bash
users.txt
report.pdf
image.png
```

Listing files allows programs to work with directories dynamically instead of manually specifying every file path.

In the next section, we will explore glob patterns, which allow files to be searched using patterns such as `"*.txt"` or `"*.png"`.

## Glob Patterns

When working with directories, it is common to search only for specific types of files instead of listing every file manually.

For example, a program may need to find all `.txt` files, locate image files, or process multiple `.csv` datasets automatically.

The `pathlib` module provides the `glob()` method, which searches for files using patterns.

A pattern such as `"*.txt"` means that `*` can match any file name, while `.txt` limits the results to text files.

For example

```py
from pathlib import Path

path = Path("data")

for file in path.glob("*.txt"):
    print(file)
```

Suppose the data folder contains

```text
data/
├── users.txt
├── notes.txt
├── image.png
├── report.pdf
```

The output will look similar to

```bash
data/users.txt
data/notes.txt
```

Only files ending with `.txt` are returned.

Different patterns can also be used.

```py
path.glob("*.png")
```

This searches for PNG image files.

```py
path.glob("*.csv")
```

This searches for CSV files.

The `glob()` method searches only inside the current directory.

If the search should also include nested folders, the `rglob()` method can be used.

```py
from pathlib import Path

path = Path("project")

for file in path.rglob("*.txt"):
    print(file)
```

Suppose the directory structure looks like

```txt
project/
├── notes.txt
├── data/
│   └── users.txt
└── logs/
    └── system.txt
```

The output may look similar to

```bash
project/notes.txt
project/data/users.txt
project/logs/system.txt
```

The `rglob()` method searches through all subdirectories recursively.

Glob patterns are useful because they allow programs to locate files automatically instead of manually specifying every file path.

In the next section, we will begin working with CSV files, which are commonly used for storing structured tabular data.

## CSV Files

CSV stands for **Comma-Separated Values**. A CSV file is a text file used to store **tabular data**, where each line represents a row and commas separate individual values.

CSV files are commonly used when working with spreadsheets, databases, exported reports, and datasets shared between applications.

A simple CSV file might look like this.

```csv
name,age,city
Example1,25,Vilnius
Example2,30,Paris
```

Each line represents a row in the table, while each comma separates one value from another.

Although CSV files are stored as plain text, manually processing their contents can quickly become difficult when working with larger datasets.

To simplify this process, Python provides the built-in csv module, which allows CSV data to be read and written in a structured way.

Before working with CSV files, the module must first be imported.

```py
import csv
```

In the next sections, we will learn how to read CSV files and how to write structured data back into them.

## Reading CSV Files

Once the `csv` module has been imported, CSV files can be read using the `csv.reader()` function.

```py
import csv

with open("data.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)
```

Suppose `"data.csv"` contains the following data.

```csv
name,age,city
Example1,25,Vilnius
Example2,30,Paris
```

The output will look similar to this.

```py
['name', 'age', 'city']
['Example1', '25', 'Vilnius']
['Example2', '30', 'Paris']
```

Each row is returned as a list of strings.

The `csv.reader()` function automatically separates values based on commas, making it easier to process structured tabular data.

The first row in many CSV files usually contains column headers. These describe the meaning of the values stored in each column.

For example, the first row.

```csv
name,age,city
```

acts as the header row.

Sometimes it is useful to skip the header row before processing the remaining data.

```py
import csv

with open("data.csv", "r") as file:
    reader = csv.reader(file)

    next(reader)

    for row in reader:
        print(row)
```

The `next(reader)` statement reads and skips the first row before the loop begins.

CSV files are still text files, which means all values are read as strings by default.

For example, even though `"25"` represents a number, it is still returned as a string.

```py
row = ['Example1', '25', 'Vilnius']

print(type(row[1]))
```

Output.

```text
<class 'str'>
```

If numeric operations are needed, values must be converted manually.

```py
age = int(row[1])

print(age + 5)
```

Reading CSV files allows programs to process structured datasets row by row.

In the next section, we will learn how to write data into CSV files.

## Writing CSV Files

In addition to reading CSV files, Python can also write structured tabular data into them using the `csv.writer()` function.

```py
import csv

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["name", "age", "city"])
    writer.writerow(["Example1", 25, "Vilnius"])
    writer.writerow(["Example2", 30, "Paris"])

After running this code, "data.csv" will contain.

name,age,city
Example1,25,Vilnius
Example2,30,Paris

The `writer.writerow()` method writes a single row into the CSV file.

Each value inside the list becomes a separate column in the row.

Multiple rows can also be written at once using the `writerows()` method.

```py
import csv

rows = [
    ["name", "age", "city"],
    ["Example1", 25, "Vilnius"],
    ["Example2", 30, "Paris"]
]

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(rows)
```

The `writerows()` method writes each nested list as a separate row in the CSV file.

Notice the `newline=""` argument used when opening the file.

```py
with open("data.csv", "w", newline="") as file:
```

This prevents extra blank lines from appearing between rows on some operating systems, especially Windows.

CSV files are commonly used for exporting structured datasets because they can be opened by many applications such as spreadsheet software and database tools.

In the next section, we will explore `DictReader` and `DictWriter`, which allow CSV data to be accessed using column names instead of numeric indexes.

## DictReader and DictWriter

When working with CSV files, accessing values by numeric indexes can sometimes make code harder to read.

For example.

```py
row = ["Example1", "25", "Vilnius"]

print(row[0])
print(row[1])
```

It may not always be immediately clear what each index represents.

To make CSV processing more readable, the `csv` module provides `DictReader` and `DictWriter`.

These allow rows to be handled as dictionaries, where column headers become dictionary keys.

Suppose `"data.csv"` contains the following data.

```csv
name,age,city
Example1,25,Vilnius
Example2,30,Paris
```

The `DictReader` class reads each row as a dictionary.

```py
import csv

with open("data.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row)

The output will look similar to this.

```bash
{'name': 'Example1', 'age': '25', 'city': 'Vilnius'}
{'name': 'Example2', 'age': '30', 'city': 'Paris'}
```

Now values can be accessed using column names.

```py
import csv

with open("data.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["name"])
        print(row["city"])
```

This often makes code easier to understand because the meaning of each value is explicit.

Python also provides `DictWriter` for writing dictionaries into CSV files.

```py
import csv

with open("data.csv", "w", newline="") as file:
    fieldnames = ["name", "age", "city"]

    writer = csv.DictWriter(file, fieldnames=fieldnames)

    writer.writeheader()

    writer.writerow({
        "name": "Example1",
        "age": 25,
        "city": "Vilnius"
    })

    writer.writerow({
        "name": "Example2",
        "age": 30,
        "city": "Paris"
    })
```

After running this code, `"data.csv"` will contain.

```csv
name,age,city
Example1,25,Vilnius
Example2,30,Paris
```

The `writeheader()` method writes the column names into the first row of the CSV file.

`DictReader` and `DictWriter` are especially useful when working with larger datasets because they make the relationship between column names and values much clearer.
