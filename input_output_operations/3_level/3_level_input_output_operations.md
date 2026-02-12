# Content of Python inputs/outputs operations 3 level

- [Introduction to File Handling](#introduction-to-file-handling)
- [Opening and Closing Files](#opening-and-closing-files)
- [File Paths](#file-paths)
- [File Modes](#file-modes)
- [Reading from Files](#reading-from-files)
- [Writing to Files](#writing-to-files)
- [Working with Context Managers](#working-with-context-managers)
- [Text vs Binary Files](#text-vs-binary-files)
- [Encoding and Decoding](#encoding-and-decoding)

In the previous levels, we focused on interacting with users through the console and controlling how output appears on the screen. However, many programs need to store information permanently so that it can be accessed later.

This is where **file handling** becomes important.

A file allows a program to read data from external storage and write data that persists even after the program finishes running. Unlike console input and output, which exist only during execution, files provide a way to work with data that remains available over time.

In Python, file handling is done using the built-in `open()` function, which creates a connection between a program and a file stored on the system.

Before learning how to read and write data, it is important to understand how files are opened and managed.

## Introduction to File Handling

In previous levels, we worked with input and output through the console. We learned how to receive data from the user and display formatted results on the screen. However, console input and output only exist while the program is running.

Many programs need to store data permanently so that it can be used later. For example, applications may need to save user information, configuration settings, logs, or results of calculations.

To achieve this, programs use **files**.

A file is a container stored on a computer’s storage system that allows data to be saved and retrieved. Unlike **console output**, which disappears **after execution ends**, **data written** to a file remains available until it is **modified** or **removed**.

In Python, file handling is performed using the built-in `open()` function. This function creates a connection between the program and a file, allowing the program to read data from it or write data to it.

Working with files typically involves three main steps **opening the file** then **performing operations such as reading or writing**, **closing the file**

Understanding these steps is essential before learning the specific methods used to read from and write to files.

In the following sections, we will explore how files are opened, how different file modes work, and how data can be safely written and retrieved.

## Opening and Closing Files

Before a program can read from or write to a file, it must first establish a connection to that file. In Python, this is done using the built-in `open()` function.

The `open()` function creates a **file object**, which represents the connection between the program and the file stored on the system.

```py
file = open("example.txt")
```

In this example, Python attempts to open the file named `"example.txt"` and assigns the file object to the variable `file`.

The basic syntax of the `open()` function is `filename` specifies the name (or path) of the file and `mode` determines how the file will be used (for **reading**, **writing**, or other operations).

If no mode is specified, Python opens the file in read mode (`"r"`) by default.

After completing operations on a file, it is important to close it.

```py
file.close()
```

Closing a file releases system resources and ensures that any changes made to the file are properly saved. Failing to close a file may lead to unexpected behavior, especially when writing data.

When a file is opened, the operating system allocates resources to manage the connection. Closing the file signals that the program has finished working with it, allowing those resources to be freed.

To understand the consequences of not closing files, consider the following example

```py
for i in range(100000):
    file = open("data.txt", "w")
    file.write("Testing file handling")
```

In this program, a file is opened repeatedly inside a loop, but it is never closed. Each time the file is opened, the operating system allocates resources to manage it. Because the files remain open, those resources are never released.

After a certain number of iterations, the program will stop and produce an error similar to.

```py
OSError: [Errno 24] Too many open files
```

This error occurs because the operating system limits the number of files that can be open at the same time. When that limit is reached, no additional files can be opened.

Now consider the corrected version.

```py
for i in range(100000):
    file = open("data.txt", "w")
    file.write("Testing file handling")
    file.close()
```

In this case, the file is properly closed during each iteration. The operating system releases the allocated resources, and the program runs without encountering the error.

This example demonstrates why closing files is an essential part of safe file handling. Because manually closing files can sometimes be forgotten, Python provides a safer and more reliable approach using context managers, which will be introduced later in this level.

Before exploring additional file operations, it is also important to understand how Python locates files on the system. So far, we have used simple file names such as `"data.txt"`, but files may be stored in **different directories**.

To work with files correctly, we must understand the concept of **file paths**.

## File Paths

When opening a file, Python must know where the file is located on the system. The location of a file is described using a **file path**.

So far, we have used simple file names such as `"data.txt"`. In this case, Python looks for the file in the **current working directory**, which is the folder from which the program is being executed.

```py
file = open("data.txt", "r")
```

If the file exists in the same directory as the script, Python will open it successfully. If it does not exist in that location, Python will raise a `FileNotFoundError`.

A **relative path** specifies the location of a file relative to the current working directory.

For example, if a file is located inside a folder named `"files"`.

```py
file = open("files/data.txt", "r")
```

Here, Python looks inside the `files` folder within the current directory.

Relative paths are commonly used when working within a project structure.

An **absolute path** specifies the complete path to a file starting from the root of the file system.

On **Windows**, an absolute path may look like this

```py
file = open("C:\\Users\\Name\\Documents\\data.txt", "r")
```

Notice that double backslashes (`\\`) are used. This is necessary because a single backslash (`\`) is treated as an escape character in Python strings.

For example, `\n` represents a **newline** and `\t` represents a **tab**. If a Windows path is written using single backslashes, Python may interpret parts of the path as escape sequences.

To avoid this issue, a **raw string** can be used by adding the prefix `r` before the string.

```py
file = open(r"C:\Users\Name\Documents\data.txt", "r")
```

A raw string tells Python to treat backslashes as literal characters.

On **macOS** or **Linux** systems, an absolute path may look like

```py
file = open("/home/user/data.txt", "r")
```

Absolute paths provide the exact location of a file regardless of the current working directory.

Using relative paths is generally preferred within projects because they make programs more portable. Absolute paths, while precise, may not work on different systems or user accounts.

In the next section, we will examine the different file `modes` that **control how a file is opened and used**.

## File Modes

When opening a file in Python, it is important to specify how the file will be used. This is done by providing a mode as the second argument to the `open()` function.

The file mode determines whether the file will be used for **reading**, **writing**, **appending**, or a **combination of these operations**.

The general syntax is `file = open("filename", "mode")`

If no `mode` is specified, Python automatically opens the file in read mode (`"r"`).

Read mode is used to read the contents of an existing file. The file must already exist, otherwise, Python will **raise an error**.

```py
file = open("data.txt", "r")
content = file.read()
file.close()
```

If `"data.txt"` does not exist, Python will generate a `FileNotFoundError`.

Write mode (`"w"`) is used to create a new file or overwrite an existing one. If the file already exists, its previous content is permanently deleted.

```py
file = open("data.txt", "w")
file.write("New content")
file.close()
```

After running this code, any previous data in `"data.txt"` will be replaced.

Append mode (`"a"`) allows new data to be added to the end of an existing file without removing its current content. If the file does not exist, Python creates it.

```py
file = open("data.txt", "a")
file.write("\nAdditional content")
file.close()
```

The existing content remains, and the new data is added at the end.

Exclusive creation (`"x"`) mode creates a new file but raises an error if the file already exists.

```py
file = open("data.txt", "x")
file.write("Created safely")
file.close()
```

If `"data.txt"` already exists, Python raises a `FileExistsError`.

File modes can also be combined with `"+"` to allow both **reading** and **writing**.

```py
file = open("data.txt", "r+")
```

This opens the file for both reading and writing.

Understanding file modes is essential because they determine what operations are allowed once a file is opened. After selecting the appropriate mode, the next step is learning how to retrieve data from a file.

Reading from a file allows a program to access stored information and use it during execution.

## Reading from Files

Once a file has been opened in **read mode**, its contents can be accessed using various built-in methods. Reading from a file allows a program to retrieve stored data and use it during execution.

The most commonly used methods for reading from a file are `read()`, `readline()`, and `readlines()`.

The `read()` method reads the entire content of a file as a single string.

```py
file = open("data.txt", "r")
content = file.read()
file.close()

print(content)
```

In this example, the full contents of `"data.txt"` are stored in the variable `content`.

The `read()` method can also accept a number as an argument to read a specific number of characters.

```py
file = open("data.txt", "r")
content = file.read(10)
file.close()
```

This reads only the first ten characters from the file.

The `readline()` method reads one line at a time from the file.

```py
file = open("data.txt", "r")
line = file.readline()
file.close()

print(line)
```

The `readlines()` method reads the entire file and returns its contents as a list of strings, where each element in the list represents one line from the file.

```py
file = open("data.txt", "r")
lines = file.readlines()
file.close()

print(lines)
```

If `"data.txt"` contains

```text
First line
Second line
Third line
```

The output will look like

```py
['First line\n', 'Second line\n', 'Third line\n']
```

Notice that each line includes the newline character `\n` at the end. This is because the newline character is part of the file’s content.

The `readlines()` method is useful when you need to process or manipulate lines individually, since it provides direct access to them as elements in a list.

A file can also be read line by line using a loop.

```py
file = open("data.txt", "r")

for line in file:
    print(line)

file.close()
```

This approach is often more memory efficient when working with larger files.

Reading from files allows programs to process previously stored information.

In the next section, we will explore how to write data to files.

## Writing to Files

In addition to reading data, programs often need to store information for later use. Writing to a file allows a program to save results, user input, logs, or generated data permanently.

To write to a file, it must be opened in a mode that allows writing, such as `"w"`, `"a"`, or `"x"`.

The `write()` method is used to write a string to a file.

```py
file = open("data.txt", "w")
file.write("Hello, world")
file.close()
```

In this example, the text `"Hello, world"` is written to `"data.txt"`.

If the file does not exist, it will be created. If the file already exists and is opened in `"w"` mode, its previous contents will be overwritten.

To write multiple lines, newline characters (`\n`) must be added manually.

```py
file = open("data.txt", "w")
file.write("First line\n")
file.write("Second line\n")
file.close()
```

Each `\n` creates a new line in the file.

The `writelines()` method allows multiple strings to be written at once.

```py
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]

file = open("data.txt", "w")
file.writelines(lines)
file.close()
```

Unlike `write()`, the `writelines()` method does not automatically add newline characters, so they must be included in the strings if needed.

When a file is opened in append mode (`"a"`), new content is added to the end of the file without removing the existing data.

```py
file = open("data.txt", "a")
file.write("Additional content\n")
file.close()
```

This mode is useful when preserving previously stored information.

Writing to files allows programs to preserve data beyond a single execution. To ensure files are handled safely, Python provides a more reliable method using **context managers**, which we will explore next.

## Working with Context Managers

When working with files, it is important to ensure that they are properly closed after operations are completed. In previous examples, we manually called the `close()` method to release system resources.

However, manually **closing** files can sometimes be forgotten, which may lead to **unexpected behavior** or **resource leaks**.

To make file handling safer and more reliable, Python provides **context managers**, which automatically handle **opening** and **closing** files.

The general syntax.

```py
with open("filename", "mode") as file:
    # file operations
```

Inside the `with` block, the file can be read from or written to as usual.

```py
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
```

When the block of code finishes executing, Python automatically closes the file. There is no need to call `file.close()` manually.

Context managers can also be used when **writing** to files.

```py
with open("data.txt", "w") as file:
    file.write("Saved safely\n")
```

After the block ends, the file is closed automatically.

`with` statement is considered goof when working with files in Python.

With file **opening**, **reading**, **writing**, and **safe handling understood**, we now have a complete foundation for basic file operations in Python.

So far, we have worked only with files that contain readable text. However, not all files store information in the same way. Some files contain **plain text**, while others store data in a binary format, such as **images**, **audio files**, or **executable programs**.

Text files may contain simple human readable content, such as **notes** or **logs**, but they can also store structured data formats like **JSON**, which is commonly used to represent data in applications and **APIs**.

To understand how Python handles different types of files, it is important to examine the distinction between text files and binary files.

## Text vs Binary Files

Files can store data in different formats depending on how the information is represented. In Python, files are generally categorized as **text files** or **binary files**.

Understanding the difference between these two types is important because it determines how data is **read** from and **written** to a file.

Text files store data as **sequences of characters**. These characters are **encoded** using a character **encoding standard** such as `UTF-8`, which allows the file to be **read** and understood by humans.

Examples of text files include `.txt`, `.csv`, `.json`, `.py`, files can be opened using text mode, which is the default mode in Python.

A simple `.txt` file might look like this

```text
Hello World
This is a text file.
```

A `.csv` file might contain

```csv
name,age,city
Example1,25,Vilnius
Example2,30,Paris
```

A `.json` file might contain

```py
{
  "name": "Alice",
  "age": 25,
  "active": true
}
```

Although `JSON` contains structured data, it is still stored as **plain text**.

Text files are opened in text mode (default mode in Python).

```py
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
```

The data is read as a string.

The same applies to `CSV` or `JSON` files.

```py
with open("data.csv", "r") as file:
    content = file.read()
    print(content)
```

`.json` example

```py
with open("data.json", "r") as file:
    content = file.read()
    print(content)
```

Because text files store readable characters, they are commonly used for **configuration files**, **logs**, and **source code**.

In each case, the content is **read** as text. Python does not automatically interpret **CSV** or **JSON** structure unless additional modules are used.

When working with structured text formats such as **JSON** or **CSV**, Python provides **built-in modules** that help process the data properly.

For **JSON** files, the `json` module is commonly used.

```py
import json

with open("data.json", "r") as file:
    data = json.load(file)

print(data)
```

The `json.load()` function reads the text from the file and converts it into Python objects such as dictionaries or lists.

For CSV files, the `csv` module is typically used.

```py
import csv

with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```

The `csv.reader()` function reads each row and separates values based on commas.

While both **JSON** and **CSV** files are **stored as text**, these modules allow Python to correctly interpret their structure instead of treating them as plain strings.

Not all files, however, are stored as **readable text**. Files such as **images**, **audio** files, **videos**, and other **media formats** store data in binary form. These files do not represent characters or structured text but instead contain raw bytes that represent visual, sound, or compiled information.

Unlike **text files**, **binary files** are **not** meant to be **opened in a text editor**. If you attempt to open an image file in a text editor, you will see **unreadable symbols because** the content does not represent characters.

Binary files store data as **raw bytes**. To understand this, it is helpful to first see what a bytes object looks like in Python.

```py
text = "Hello"
binary_text = b"Hello"

print(text)
print(binary_text)
print(type(text))
print(type(binary_text))
```

The output will show that `"Hello"` is a **string** (`str`), while `b"Hello"` is a **bytes object** (`bytes`). The letter `b` before the quotes indicates that the value is stored as raw bytes rather than as text.

When working with **binary files**, Python **reads** and **writes** data as **bytes** instead of **strings**.

To open a **binary file**, the file must be opened using binary mode by adding `"b"` to the file mode.

```py
with open("image.png", "rb") as file:
    data = file.read()

print(type(data))
print(data[:20])
```

In this case, `"rb"` means **read binary**. The data is returned as a **bytes object**. When printed, it may look similar to

```py
b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR'
```

The unreadable sequences such as `\x89` represent raw byte values written in hexadecimal form. These bytes define the internal structure of the image file.

If writing **binary data** to a file, binary write mode must be used.

```py
with open("copy.png", "wb") as file:
    file.write(data)
```

Binary mode ensures that the file is handled exactly as stored, without applying character encoding or newline transformations. This is essential when working with **non-text data** to prevent corruption.

When working with **text files**, Python does apply character **encoding automatically**. This raises an question, *how are characters converted into bytes when writing to a file*, and *how are bytes converted back into characters when reading?*

To understand this process, we need to examine the concepts of **encoding and decoding**, which define **how text is transformed between human-readable characters and binary data**.

## Encoding and Decoding

When working with **text files**, Python automatically converts data between **characters** and **bytes**. This conversion process is known as **encoding and decoding**.

Computers do not store text as characters. Internally, all data is stored as binary values (**bytes**). To represent human-readable text such as `"Hello"`, those characters must first be converted into **bytes** before being **written** to a file. This process is called **encoding**.

Encoding transforms a **string** (`str`) into a **bytes object** (`bytes`).

```py
text = "Hello"
encoded_text = text.encode("utf-8")

print(encoded_text)
print(type(encoded_text))
```

The output will look.

```py
b'Hello'
<class 'bytes'>
```

Here, the string `"Hello"` is converted into its **UTF-8** byte representation.

Decoding performs the reverse operation. It converts bytes back into a string.

```py
binary_data = b"Hello"
decoded_text = binary_data.decode("utf-8")

print(decoded_text)
print(type(decoded_text))
```

The output will show

```py
Hello
<class 'str'>
```

This demonstrates how raw bytes are transformed back into readable text.

When a file is opened in text mode, Python automatically decodes the file’s bytes into strings using **UTF-8** by default (unless a different **encoding** is specified).

```py
with open("data.txt", "r") as file:
    content = file.read()
```

However, the encoding can be explicitly specified using the `encoding` parameter.

```py
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

Specifying the encoding makes the program more predictable, when working with files created on different systems.

A `UnicodeDecodeError` occurs when Python tries to decode bytes using an encoding that does not match the file’s actual encoding.

For example, suppose a file was saved using a different **encoding**, but Python attempts to **decode** it using **UTF-8**.

```py
with open("data.txt", "r", encoding="ascii") as file:
    content = file.read()
```

If the file contains characters that are not supported by **ASCII** (such as `ę`, `ū`, or other **non-English characters**), Python will raise an error similar to `UnicodeDecodeError: 'ascii' codec can't decode byte 0xc3 in position 5: ordinal not in range(128)`

This error indicates that Python encountered a **byte sequence** that cannot be interpreted using the **specified encoding**.

When opening a file, the `errors` parameter can be used to control how decoding problems are handled.

```py
with open("data.txt", "r", encoding="utf-8", errors="ignore") as file:
    content = file.read()
```

Common options include `"ignore"` which is **skips** problematic characters and `"replace"` which invalid characters with a **placeholder**

Here is example

```py
with open("data.txt", "r", encoding="utf-8", errors="replace") as file:
    content = file.read()
```

Using the correct **encoding** is always preferred, but the `errors` parameter provides additional control when working with uncertain file formats.
