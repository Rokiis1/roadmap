# Table of Contents

- [Introduction to Operating Systems and General Knowledge](#introduction-to-operating-systems-and-general-knowledge)
    - [OS and General Knowledge](#os-general-knowledge)
        - [What is an Operating System?](#what-is-an-operating-system)
        - [Why is OS Knowledge Important?](#why-is-os-knowledge-important)
    - [Terminal Usage](#terminal-usage)
        - [Introduction to the Terminal](#introduction-to-the-terminal)
        - [Why Learn Terminal Usage?](#why-learn-terminal-usage)
    - [POSIX Basics](#posix-basic)
        - [Understanding POSIX](#understanding-posix)
        - [Benefits of Learning POSIX](#benefits-of-learning-posix)
    - [Basic Terminal Commands](#basic-terminal-commands)
        - [Bash commands](#bash-commands)
            - [(Bash)Navigating the File System](#navigating-the-file-system)
            - [(Bash)Working with Files](#working-with-files)
            - [(Bash)Text Editing](#text-editing)
            - [(Bash)File Permissions](#file-permissions)
            - [(Bash)System Information](#system-information)
            - [(Bash)Miscellaneous](#miscellaneous)
        - [Shell commands](#shell-commands)
            - [(Shell)Navigating the File System](#navigating-the-file-system)
            - [(Shell)Working with Files](#working-with-files)
            - [(Shell)File Permissions](#file-permissions)
            - [(Shell)System Information](#system-information)
            - [(Shell)Miscellaneous](#miscellaneous)
- [Operating Systems Knowledge](#operating-system-knowledge)
    - [How OSs work in General](#os-work-in-general)
    - [Memory Management](#memory-management)
    - [Interprocess Communication](#interprocess-communication)
    - [I/O Management](#management)
    - [Basic Networking Concepts](#basic-networking-concepts)
    - [Threads and Concurrency](#threads-and-concurrency)
    - [Process Managment](#process-managment)
- [Learn about APIs](#apis)
    - [REST](#rest)
    - [JSON APIs](#json-apis)
- [Authentication](#authentication)
    - [Cookie Based](#cookie-based)
    - [OAuth](#oauth)
    - [Basic Auth](#basic-auth)
    - [Token Auth](#token-auth)
    - [JWT](#jwt)
- [Web Security Knowledge](#web-security-knowledge)
    - [HTTPS](#https)
    - [Content Security Policy](#content-security-policy)
    - [CORS](#cors)
    - [OWASP Security Risks](#owasp-security-risks)
    - [Secure Sockets Layer (SSL) and Transport Layer Security (TLS)](#ssl-tls)
    - [Server Security](#server-security)
    - [Hashing Algorithms](#hashing-algorithms)
- [Web Servers](#web-server)
    - [Nginx](#nginx)
    - [Apache](#apache)

# Introduction to Operating Systems and General Knowledge

## OS and General Knowled

### What is an Operating System?

An operating system (OS) is the software that manages hardware resources and provides essential services for computer programs. It acts as an intermediary between users and the computer hardware. Common examples of operating systems include Windows, macOS, and Linux.

### Why is OS Knowledge Important?

Understanding operating systems is crucial because they form the foundation of all computing devices. Whether you're using a smartphone, laptop, or desktop computer, an OS is working behind the scenes to make everything possible.

## Terminal Usage

### Introduction to the Terminal

The terminal, also known as the command line or console, is a text-based interface for interacting with your computer. It allows you to perform various tasks by entering text commands instead of using a graphical user interface (GUI).

### Why Learn Terminal Usage?

Terminal usage is a valuable skill for anyone working with computers. It provides greater control, efficiency, and automation capabilities. Learning the terminal can help you become a more effective and versatile computer user.

## POSIX Basics

### Understanding POSIX

POSIX, which stands for Portable Operating System Interface, is a set of standards that define the behavior of operating systems. These standards ensure compatibility and portability between different Unix-like operating systems, such as Linux and macOS.

### Benefits of Learning POSIX

Learning POSIX basics is essential if you want to work with Unix-like systems. It helps you understand how these systems work and enables you to write scripts and programs that are compatible with a wide range of platforms.

## Basic Terminal Commands

### Bash commands

#### (Bash)Navigating the File System

- `cd`: Change directory

```bash
cd /path/to/directory
```

- `pwd`: Print working directory

```bash
pwd
```

- `ls`: List files and directories

```bash
ls
```

- `mkdir`: Create a new directory

```bash
mkdir my_folder
```

- `rmdir`: Remove a directory

```bash
rmdir my_folder
```

- `touch`: Create an empty file

```bash
touch my_file.txt
```

#### (Bash)Working with Files

- `cp`: Copy files and directories

```bash
cp file.txt /path/to/destination/
```

- `mv`: Move or rename files and directories

```bash
# Example 1: Move a file to a different directory.
mv file.txt /path/to/destination/
# Example 2: Rename a file.
mv old_name.txt new_name.txt
```

- `rm`: Remove files and directories

```bash
# Example: Remove a file named "unwanted_file.txt"
rm unwanted_file.txt
# Example: Remove a directory named "my_directory" and its contents.
rm -r my_directory
```

#### (Bash)Text Editing

- `nano`: A simple terminal text editor
- `vi` or `vim`: A more advanced terminal text editor

#### (Bash)File Permissions

- `chmod`: Change file permissions

```bash
# Example 1: Give the owner of a file read and write permissions.
chmod u+rw file.txt

# Example 2: Remove write permissions from the group.
chmod g-w file.txt

# Example 3: Give everyone execute permission.
chmod +x file.sh
```

- `chown`: Change file ownership

```bash
# Example 1: Change the owner of a file to a new user.
chown newuser file.txt

# Example 2: Change the group owner of a file to a new group.
chown :newgroup file.txt

# Example 3: Change both the owner and group owner of a file.
chown newuser:newgroup file.txt
```

#### (Bash)System Information

- `top`: Display system processes

```bash
top
```

- `df`: Show disk space usage

```bash
df
```

- `free`: Display free and used memory

```bash
free
```

#### (Bash)Miscellaneous

- `man`: Access manual pages for commands

```bash
# Example: Access the manual page for the "ls" command.
man ls
```

- `history`: View command history

```bash
history
```

### Shell commands

#### (Shell)Navigating the File System

- `Set-Location`: Change directory

```powershell
Set-Location C:\Path\To\Directory
```

- `Get-Location`: Print working directory

```powershell
Get-Location
```

- `Get-ChildItem`: List files and directories

```powershell
Get-ChildItem
```

- `New-Item`: Create a new directory

```powershell
New-Item -ItemType Directory -Path C:\NewDirectory
```

- `Remove-Item`: Remove a directory

```powershell
Remove-Item -Path C:\Path\To\Directory -Recurse
```

- `New-Item`: Create an empty file

```powershell
New-Item -ItemType File -Path C:\Path\To\File.txt
```

#### (Shell)Working with Files

- `Copy-Item`: Copy files and directories

```powershell
Copy-Item -Path C:\Source\File.txt -Destination C:\Destination\
```

- `Move-Item`: Move or rename files and directories

```powershell
Move-Item -Path C:\Source\File.txt -Destination C:\Destination\NewName.txt
```

- `Remove-Item`: Remove files and directories

```powershell
Remove-Item -Path C:\Path\To\File.txt
```

#### (Shell)File Permissions

- `Get-Acl`: Get file or folder permissions

```powershell
Get-Acl -Path C:\Path\To\File.txt
```

- `Set-Acl`: 

```powershell
Set-Acl -Path C:\Path\To\File.txt -AclObject $acl
```

#### (Shell)System Information

- `Get-Process`: Display system processes

```powershell
Get-Process
```

- `Get-WmiObject`: Retrieve system information using Windows Management Instrumentation (WMI).

```powershell
Get-WmiObject -Class Win32_OperatingSystem
```

- `Get-WmiObject`: 

```powershell
Get-WmiObject -Class Win32_LogicalDisk
```

- `Get-WmiObject`: Display free and used memory

```powershell
Get-WmiObject -Class Win32_OperatingSystem | Select-Object TotalVisibleMemorySize, FreePhysicalMemory
```

#### (Shell)Miscellaneous

- `Get-History`: View command history

```powershell
Get-History
```