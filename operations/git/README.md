# Table of Contents

- [Setup and Config](#setup-and-config)
- [Getting and Creating Projects](#getting-and-creating-projects)
- [Basic Snapshotting](#basic-snapshotting)
- [Sharing and Updating Projects](#sharing-and-updating-projects)
- [Branching and Merging](#branching-and-merging)
- [Plumbing Commands](#plumbing-commands)

# Setup and Config

- [What is Version Control?](#what-is-version-control)
- [Git](#git)
    - [Config](#config)
        - [Local](#local)
        - [Global](#global)
        - [System](#system)

## What is Version Control?

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

## Git

**Explanation:**

Git is a distributed version control system designed to track changes in computer files, primarily used in collaborative software development. Unlike centralized systems, Git allows each programmer to have a local repository, providing a complete version history on their machine. This decentralized approach enhances flexibility and supports collaborative workflows.

The core purpose of Git is to facilitate the coordination of work among programmers who are collectively developing source code. It achieves this by systematically tracking changes made to files, creating a comprehensive history that helps developers understand the evolution of the codebase.

**Key Concepts:**

- **Centralized Version Control (SVN):**

```plaintext
   A---B---C        (Master)
        |  
    Developers
```

## Config

**Explanation:**

The most basic use case for git config is to invoke it with a configuration name, which will display the set value at that name. Configuration names are dot delimited strings composed of a 'section' and a 'key' based on their hierarchy.

**Key Concepts:**

### Local

**Explanation:**

**Key Concepts:**

**Syntax:**

**Example:**

### Global

### System