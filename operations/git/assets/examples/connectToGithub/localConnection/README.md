1. Step:

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

2. Step:

```bash
git touch text.txt
git status
git add .
git commit -m "Try to push from local to upstream"
git branch -M main
```

3. Step:

- [Page: Github](https://github.com/)


