# Table of Contents

- [Setup and Config](#setup-and-config)
- [Basic Snapshotting](#basic-snapshotting)
- [Sharing and Updating Projects](#sharing-and-updating-projects)
- [Branching and Merging](#branching-and-merging)
- [Plumbing Commands](#plumbing-commands)

# Setup and Config

- [Version Controller](#version-controller)
    - [Git](#git)
        - [Install](#install)
        - [Help](#help)
- [Getting and Creating Projects](#getting-and-creating-projects)
- [Config](#config)
    - [Scopes](#scopes)
        - [Local](#local)
        - [Global](#global)
    - [core.editor](#coreeditor)

## Version Controller

**Explanation:**

This technology addresses a fundamental issue – the loss of previous versions when changes are made and saved. Think about it: without version control, every tweak or modification could potentially erase the history of your file.

**Key Concepts:**

1. **Challenges Without Version Control:**

- Without version control, saving changes results in the loss of previous versions, making it difficult to track and revert to specific states. The traditional approach of creating manual copies is impractical and leads to file clutter.

2. **Version Control Solutions - Commit and Branch:**

- Version control software, like Git, monitors changes and introduces the concept of "commit" – saving a snapshot of the file at a specific point. Additionally, "branching" allows the creation of separate versions for different purposes, ensuring organized and purpose-driven development.

3. **Benefits of Version Control:**

- The primary benefit of version control is maintaining a single local copy while the system systematically tracks changes. This streamlined approach avoids clutter, simplifies branching, and facilitates easy switching between different versions.

4. **Technologies - Git and GitHub:**

Git serves as the local version control system, monitoring changes on the user's system. GitHub, built on Git, acts as a social networking service where users can share their work through public or private repositories.

5. **Branching for Different Objectives:**

- Branching allows users to manage different versions of a file concurrently. For instance, creating branches for public releases or personal modifications keeps the development process organized and purpose-oriented.

**Example:**

![What is Version Control?](./assets/images/setupAndConfig/whatIsVersionControl/versionControl.png)

### Git

**Explanation:**

Git is a distributed version control system designed to track changes in computer files, primarily used in collaborative software development. Unlike centralized systems, Git allows each programmer to have a local repository, providing a complete version history on their machine. This decentralized approach enhances flexibility and supports collaborative workflows.

The core purpose of Git is to facilitate the coordination of work among programmers who are collectively developing source code. It achieves this by systematically tracking changes made to files, creating a comprehensive history that helps developers understand the evolution of the codebase.

**Key Concepts:**

1. **Centralized Version Control (SVN):**

```plaintext
   A---B---C        (Master)
        |  
    Developers
```

- Commits A, B, and C represent different versions.

- Developers interact with a central repository (SVN) for version control.

2. **Decentralized Version Control (Git):**

```plaintext
   A---B---C          Developer 1
    \
    D---E---F        Developer 2
```

- Commits A, B, C, D, E, and F represent different versions.

- Each developer has their local repository and can work independently.

- Developers can share changes directly with each other without a central server.

**Resources:**

- [Docs: Git](https://git-scm.com/docs)

### Install

**Explanation:**

1. Check If you have git in CLI:

```cmd
git --version
# Your version
```

2. If you don't have install

- [Link: Download git](https://git-scm.com/downloads)

### Help

There is two types to ask help in CLI:

```bash
git help <command>
# OR
git <command> -h
```
Also you can go to dosc and read:

- [Docs: Git](https://git-scm.com/docs)

## Getting and Creating Projects

- [git init](#git-init)
- [git clone](#git-clone)

### git init

**Explanation:**

The `git init` command is used to initialize a new Git repository in an existing or new directory. This command sets up the necessary data structures and files for Git version control in the specified directory.

**Key Concepts:**

1. **Initialization of Version Control:**

- `git init` initializes a new Git repository, enabling version control for the project in the specified directory.

2. **Creation of the `.git` Directory:**

- The main function of `git init` is to create a hidden directory called `.git`. This directory contains the version control information, including configuration settings, object database, and other files needed for Git to manage the repository.

3. **Tracking Changes:**
   
- Once a repository is initialized, Git starts tracking changes in the project. It allows you to commit snapshots of your project at different points in time, making it possible to review or revert to previous versions.

4. **Branches and Commits:**

- `git init` sets up the basic structure for branches and commits. You can create branches to work on different features or bug fixes independently, and commits capture the changes made at a specific point in time.

5. **Staging Area:**

- Git introduces the concept of a staging area (also known as the index), where you can selectively choose which changes to include in the next commit. This allows for more controlled and organized commits.

**Syntax:**

```bash
git init [directory]
```

- `directory`: The optional argument specifies the path to the directory where you want to initialize the Git repository. If not provided, `git init` initializes the current directory.

**Example:**

```bash
# Create a new directory for the project
mkdir my_project
# Navigate to the project directory
cd my_project
# Initialize a new Git repository
git init
```

### git clone

**Explanation:**

The `git clone` command is used to create a copy of an existing Git repository. It allows you to duplicate a remote repository onto your local machine, providing a complete copy of the repository's files, commit history, and branches.

**Key Concepts:**

1. **Copy of Remote Repository:**

- `git clone` creates a copy of a remote Git repository, allowing you to work with the project locally on your machine.

2. **Complete Repository Copy:**

- The cloned repository includes all the files, commit history, branches, and configurations from the original repository. This provides a full snapshot of the project.

3. **Remote Tracking:**

- When you clone a repository, Git automatically sets up remote tracking. This means that your local clone is aware of the remote repository, and you can synchronize your local copy with any changes made on the remote.

4. **Read-Only Access:**

- By default, the cloned repository is configured for read-only access. You can pull in changes from the remote repository, but you cannot push changes directly unless you have the necessary permissions.

5. **HTTPS or SSH Protocol:**

- You can clone a repository using either the HTTPS or SSH protocol. The choice depends on your authentication preferences and the access rights to the repository.

**Syntax:**

```bash
git clone <repository-url> [destination-directory]
```

- `<repository-url>`: The URL of the remote Git repository you want to clone.
- `[destination-directory]`: The optional argument specifying the directory name for the local clone. If not provided, Git creates a directory with the name of the cloned repository.

**Example:**

```bash
# Clone a repository from a URL
git clone https://github.com/example/repo.git

# Clone a repository into a specific directory
git clone https://github.com/example/repo.git my_project
```

## Config

**Explanation:**

The most basic use case for git config is to invoke it with a configuration name, which will display the set value at that name. Configuration names are dot delimited strings composed of a 'section' and a 'key' based on their hierarchy.

**Key Concepts:**

1. **`--local`:**

- By default, `git config` will write to a local level if no configuration option is passed. Local level configuration is applied to the context repository `git config` gets invoked in. Local configuration values are stored in a file that can be found in the repo's `.git` directory: `.git/config`

2. **`--global`:**

- Global level configuration is user-specific, meaning it is applied to an operating system user. Global configuration values are stored in a file that is located in a user's home directory. `~ /.gitconfig` on unix systems and `C:\Users\\.gitconfig` on windows

3. **`--system`:**

- System-level configuration is applied across an entire machine. This covers all users on an operating system and all repos. The system level configuration file lives in a gitconfig file off the system root path. `$(prefix)/etc/gitconfig` on unix systems. On windows this file can be found `C:\ProgramData\Git\config` 

### Local

**Explanation:**

Will write to a local level if no configuration option is passed. Local level configuration is applied to the context repository `git config` gets invoked in.

**Key Concepts:**

1. File that can be found in the repo's `.git` directory: `.git/config`

**Syntax:**

*Input*

```bash
git config user.name Your Name
git config user.email your.email@example.com
```

*Output*

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

**Example:**

```bash
mkdir MyProject
cd MyProject
git init
# Initialized empty Git repository in C:/Users/rokas/OneDrive/Desktop/MyProject/.git/
git config user.name Test
git config user.email your.email@example.com
# git config --get user.name
# Test
# =git config --get user.email
# your.email@example.com
git config --list --local
# core.repositoryformatversion=0
# core.filemode=false
# core.bare=false
# core.logallrefupdates=true
# core.symlinks=false
# core.ignorecase=true
# user.name Test
# user.email your.email@example.com
```

### core.editor

**Explanation:**

The `core.editor` configuration in Git determines the default text editor that Git will use when opening text-based files for tasks such as editing commit messages, resolving conflicts, or viewing configuration settings.

**Syntax:**

```bash
git config --global core.editor
```

**Example:**

```bash
git config --global core.editor "code --wait"
```

**Resources:**

- [Docs: Config Editor](https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config#ch_core_editor)

# Basic Snapshotting

- [git add](#git-add)
- [git status](#git-status)
- [git commit](#git-commit)
- [git log](#git-log)


## git add

**Explanation:**

- The staging area is an intermediate area where changes are prepared before committing them to the Git repository.
- Files in the staging area are in a state between the working directory and the committed repository.
- You use the `git add` command to move changes from the working directory to the staging area.

**Syntax:**

```bash
git add <path>
```

**Example:**

```bash
git add file1.js # Stages a single file
git add file1.js file2.js # Stage multple files
git add *.js # Stages with a pattern
git add . # Stages the current directory and all it's content
```

## git status

**Explanation:**

`git status` gives information on the current status of a git repository and it's contents

**Syntax:**

```bash
git status
```

**Example:**

```bash
git status # Full status
git status -s # Short status
# ? = Not tracked
# A = Added
# M = Modified
```

## git commit 

**Explanation:**

The `git commit` command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.

**Key Concepts:**

1. Limit the subject line to 50 characters.
2. Capitalize only the first letter in the subject line.
3. Don't put a period at the end of the subject line.
4. Put a blank line between the subject line and the body.
5. Use the imperative mood
    - "Fix bug" and not "Fixed bug" or "Fixes bug".
6. Describe what was done and why, but not how.

**Syntax:**

```bash
git commit <flag>
```

**Example:**

```bash
git commit -m "Message" # Commits with a one-line message
git commit -am "Message" # Skipping the staging area (not recommended)
# To change the last commit, you can simply commit again, using the --amend flag:
 # Amend only works with the very last commit.
 # Amend rewrites the commit is replaced by a completely new one
  # the old commit is replaced by a completely new one
 # Don't amend (= rewrite) commits that you've already published to a remote repository!
git commit --amend -m "New and correct message"
# You could also add another couple of changes you forget:
git add another/changed/file.txt
git commit --amend -m "message"
```

```bash
# Bad
git commit -m "Fix bug"

# Good
git commit -m "Add auto login for verified users - Closes BLG-20"
```

```bash
# Bad
git commit -m "Implemented automatic login for new verified signups because currently new users have to maually log in after signing up."

# Good
git commit -m "Implement automatic login for new verified signups"
```

## git log

**Explanation:**

The `git log` command is used to display a detailed history of commits in a Git repository. It provides a chronological list of commits, showing commit messages, authors, dates, and other relevant information.

**Key Concepts:**

1. **Commit History:**

- `git log` shows a log of commits, with the most recent commits appearing first. Each entry includes details such as the commit hash, author, date, and commit message.

2. **Commit Hash:**

- The commit hash is a unique identifier for each commit. It allows you to reference and identify specific commits in the repository.

3. **Author and Date:**

- The log displays the author of each commit along with the date and time when the commit was made. This information helps track who made the changes and when.

4. **Commit Message:**

- The commit message provides a concise summary of the changes made in the commit. It is essential for understanding the purpose and context of each commit.

5. **Navigating the Log:**

- You can navigate through the log using arrow keys or specific keyboard shortcuts depending on your terminal. Press `q` to exit the log view.

**Syntax:**

```bash
git log [options]
```

- `[options]`: Optional parameters to customize the output. Common options include `--oneline`, `--graph`, `--all`.

**Example:**

```bash
# Display the commit log for the current branch
git log
#  Displays each commit as a single line, showing only the commit hash and the first line of the commit message.
git log --oneline
#   Adds an ASCII graph representation of the branch and merge history to the commit log.
git log --graph
# Shows the commit history for all branches, not just the current branch.
git log --all
```

# Branching and Merging

- [git branch](#git-branch)
- [git checkout](#checkout)
- [git switch](#switch)
- [git merge](#merge)

## git branch

**Explanation:**

Branches in Git are pointers to a specific commit, and they allow you to work on different parts of your project simultaneously without affecting the main codebase. Here's a simple explanation along with

**Key Concepts:**

1. **Branch Creation:**

- In Git, a branch is essentially a lightweight movable pointer to a commit.
Creating a new branch allows you to diverge from the main line of development and work on separate features or bug fixes.

2. **Master/Main Branch:**

- The default and often primary branch in Git is commonly named `master` or `main`.
It represents the stable, production-ready version of your project.

**Syntax:**

```bash
git branch # List, create, or delete branches
```

**Example:**

```plaintext
    A---B---C (main branch) 
```

```bash
# Create initial files
echo "Content A" > file1.txt
echo "Content B" > file2.txt
git init
git add file1.txt file2.txt
git commit -m "Commit A"

# Make changes and commit
echo "Updated Content A" > file1.txt
git add file1.txt
git commit -m "Commit B"

# Make more changes and commit
echo "Updated Content B" > file2.txt
git add file2.txt
git commit -m "Commit C"

git log --graph --oneline --all
```

## git checkout

**Explanation:**

The git `checkout command` in Git is a versatile command that primarily serves two purposes: switching branches and restoring working tree files. Its behavior varies depending on the provided 

**Key Concepts:**

1. **Branch Switching:** git checkout is fundamental for navigating between branches in Git, allowing developers to work on different features or bug fixes in isolation.

2. **Detached HEAD State:** Understanding the concept of a "detached HEAD" state is crucial. It indicates that the HEAD is pointing to a specific commit but not a branch, and any new commits will not belong to any branch.

**Syntax:**

```bash
git checkout <branch-name> # Switch branches
git checkout <commit-hash> # To view previous commits Detached HEAD
```

**Example:**

*Branch*

```plaintext
    A---B---C (main branch)
              \
               D---E (feature branch)
```

```bash
git branch
git branch bug fix
git checkout bug-fix
# Or
git checkout -b bug-fix 
```

*Commits*

```plaintext
   A---B---C (main branch, HEAD)
```

```bash
# Create an initial state
git init
echo "Content A" > file1.txt
git add file1.txt
git commit -m "Commit A"

echo "Content B" > file2.txt
git add file2.txt
git commit -m "Commit B"

echo "Content C" > file3.txt
git add file3.txt
git commit -m "Commit C"
# Switch to commit B (replace <commit-hash> with the actual hash of commit B)
git checkout <commit-hash>
# Confirm that you are in a "detached HEAD" state
git status
```
*Output*

```plaintext
   A---B---C (main branch)
        \
        B (detached HEAD at commit B)
```

## git switch

**Explanation:**

The `git switch` command is used to switch branches in Git. It is an alternative to the `git checkout` command and is designed specifically for changing branches. Introduced to provide a clearer and more straightforward interface for branch switching, `git switch` simplifies the process compared to the multi-purpose `git checkout`.

**Key Concepts:**

1. **Switching Branches:**

- The primary purpose of git switch is to switch between branches in a Git repository. This command allows you to move your working directory to the specified branch.

2. **Creating and Switching to New Branches:**

- With the `-c` or `--create` option, git switch can create a new branch and switch to it in a single command.

**Syntax:**

```bash
git switch <branch-name> # Switch branches
```

**Example:**

```plaintext
    A---B---C (main branch)
              \
               D---E (feature branch)
```

```bash
git branch
git branch bug fix
git switch bug-fix
# Or
git switch -c bug-fix 
```

## git merge

**Explanation:**

The `git merge` command in Git is used to integrate changes from one branch into another. It combines the changes made in separate branches and creates a new commit to capture the result. Merging is a fundamental operation in Git, allowing collaboration on different features, bug fixes, or code enhancements.

**Key Concepts:**

1. **Branch Integration:**

- `git merge` is primarily used to integrate changes from one branch into another. This is essential in collaborative workflows where different developers work on separate branches and need to bring their changes together.

2. **Fast-Forward Merge:**

- In a fast-forward merge, Git simply moves the branch pointer forward to the commit of the branch being merged in. This occurs when the target branch (main in most cases) has not diverged from the source branch.

3. **Merge Conflicts:**

- Merge conflicts occur when Git is unable to automatically resolve differences between the branches. This can happen when changes in the same part of a file conflict with each other. Developers need to manually resolve these conflicts before completing the merge.

4. **Merge Commit:**

- A merge commit is created when a merge is successful. This commit has multiple parents, representing the history of both the merged branches. The message typically indicates that a merge has occurred.

**Syntax:**

```bash
git merge # Combine two branches
```

**Example:**

**fast-forward merge:**

*Input*

```plaintext
    A---B---C---F (main branch, after merging feature)
              \ /
               D---E (feature branch)
```

```bash
echo "Content A" > file1.txt
echo "Content B" > file2.txt
git add file1.txt file2.txt
git commit -m "Commit A"
git checkout -b feature-branch
echo "Feature Content D" > file3.txt
git add file3.txt
git commit -m "Commit D"
echo "Feature Content E" > file4.txt
git add file4.txt
git commit -m "Commit E"
git checkout master
git merge feature-branch
```

*Output*

```plaintext
    A---B---C
             \
              E (main branch, after fast-forward merge with feature)
               \
                D---E (feature branch)

```

**Merge Conflicts:**

*Input*

```plaintext
    A---B---C---D (main branch, HEAD)
                \
                E (dev branch)
```

```bash
# Create file1.txt and make an initial commit in the main branch
echo "Content in main branch" > file1.txt
git add file1.txt
git commit -m "Initial commit in main branch"

# Create dev branch and switch to it
git checkout -b dev

# Make changes in file1.txt on the dev branch
echo "Content in dev branch" > file1.txt
git add file1.txt
git commit -m "Initial commit in dev branch"
```

```plaintext
    A---B---C---D (main branch, HEAD)
             \ /
              F (merge commit with conflict)
```

```bash
# Switch back to the main branch
git checkout main

# Make different changes to file1.txt on the main branch
echo "Updated content in main branch" > file1.txt
git add file1.txt
git commit -m "Updated content in main branch"

# Merge changes from dev branch into main (conflict will occur)
git merge dev
```

```plaintext
<<<<<<< HEAD
Updated content in main branch
=======
Content in dev branch
>>>>>>> dev

```

```plaintext
   A---B---C---D---F' (main branch, HEAD)
              \ /
               E (dev branch)
```

# Sharing and Updating Projects

- [Manager repositories](#manager-repositories)
    - [Github](#github)
- [git remote](#remote)
- [git push](#push)
- [git pull](#pull)
- [git fetch](#fetch)

## Manager repositories

### Github

**Example:**

- [Example: Local Connection setup](./assets/examples/connectToGithub/localConnection/README.md)

## remote

**Explanation:**

SVN uses a single centralized repository to serve as the communication hub for developers, and collaboration takes place by passing changesets between the developers’ working copies and the central repository. This is different from Git's distributed collaboration model, which gives every developer their own copy of the repository, complete with its own local history and branch structure. Users typically need to share a series of commits rather than a single changeset. Instead of committing a changeset from a working copy to the central repository, Git lets you share entire branches between repositories.

**Key Concepts:**

1. The `git remote` command is one piece of the broader system which is responsible for syncing changes. 

**Syntax:**

```bash
git remote # command is essentially an interface for managing a list of remote entries that are stored in the repository's
git remote -v # show remote url after name.
git remote add # Add a remote named <name> for the repository at <URL>.
git get-url # Retrieves the URLs for a remote.
git set-url # Changes URLs for the remote. Sets first URL for remote <name> that matches regex <oldurl> (first URL if no <oldurl> is given) to <newurl>. If <oldurl> doesn’t match any URL, an error occurs and nothing is changed.
```

**Example:**

- [Example: How git remote work](./assets/examples/managerRepositories/remote/README.md)

## push

**Explanation:**

The `git push` command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.

**Key Concepts:**

1. Push the specified branch to , along with all of the necessary commits and internal objects. 

**Syntax:**

```bash
git push # Update remote refs along with associated objects
```

## pull

**Explanation:**

`git pull` Fetch from and integrate with another repository or a local branch

**Key Concepts:**

**Syntax:**

```bash
git pull # Fetch from and integrate with another repository or a local branch
```

## fetch

**Explanation:**

git fetch Download objects and refs from another repository

**Key Concepts:**

**Syntax:**

```bash
git fetch # Download objects and refs from another repository
```

# Plumbing Commands
