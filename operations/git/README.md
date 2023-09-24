## Cloning a Repository

To start working with a Git repository, you need to clone it to your local machine. Use the following command to clone a repository:

```bash
git clone <repository-url>
```

## Working with Branches

Branches are essential for isolating your work and collaborating with others.

- **Create a new branch:**

  ```bash
  git checkout -b <branch-name>
  ```

- **Switch to an existing branch:**

  ```bash
  git checkout <branch-name>
  ```

- **List all branches:**

  ```bash
  git branch
  ```

- **Delete a branch (locally):**

  ```bash
  git branch -d <branch-name>
  ```

## Making Changes

Make changes to your code and use Git to track them.

- **Check the status of your repository:**

  ```bash
  git status
  ```

- **Add changes to the staging area:**

  ```bash
  git add <file-name>
  ```

- **Commit changes:**

  ```bash
  git commit -m "Your commit message"
  ```

## Pushing Changes

Push your changes to a remote repository.

- **Push changes to a branch:**

  ```bash
  git push origin <branch-name>
  ```

## Merging Branches

Combine changes from one branch into another.

- **Switch to the target branch:**

  ```bash
  git checkout <target-branch>
  ```

- **Merge changes from a source branch:**

  ```bash
  git merge <source-branch>
  ```

## Pulling Changes

Update your local repository with changes from a remote repository.

- **Pull changes from a remote repository:**

  ```bash
  git pull origin <branch-name>
  ```
