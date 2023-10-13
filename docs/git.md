[< Back to main page](../readme.md)

# GIT

## Config

Set config
```
git config --global user.name MyName
git config --global user.email myemail@dot.com
```

Check config
```
git config -l
```

## Basics

`git init` or `git clone`

### Git flow

0. Clean **Nothing to commit, working tree clean**
1. Modified **Changes not staged for commit** - After file modification.
2. Staged **Changes to be commited** - After `git add file1.js`
3. Commited (and again clean) **Nothing to commit, working tree clean** - After `git commit -m "My message"`

Show changes that hasn't been added to stage area (file changed, but not 'git add')

```
git diff
```

Show changes that was added to stage area ('git add'), but hasn't been commited

```
git diff
```

### View general info
```
git status
```

### View history of commits </br>
**-a**  flag means more detailed output about commits (like diff -u) </br>
**--stat**  flag means statistics of the commits </br>
**-p**  flag produces patch text (like diff)
```
git log -a
```

Graphical log
**-graph**  flag means graphical</br>
**--oneline**  flag means first line of commit message</br>
```
git log --graph --oneline
```

### View info about commit
```
git show 0fb9
```

### Commit </br>
**-a**  flag adds all tracked files to staging area and commit in one step (skip staging step).
```
git commit -a
```



## Operations

Start tracking file or add changes of already tracked file to staging area </br>
**-p**  flag shows changes before add to staging area

```
git add file.js
```

Remove file from working directory, stop tracking and stage that changes (changes are ready for commit)

```
git rm file.js
```

Rename file and stage that changes (changes are ready for commit)
```
git mv file.js new-file-name.js
```

Remove changes that haven't been staged (file modified, but not 'git add' command)
```
git checkout file.js
```

Changes that already staged becomes unstaged
```
git reset HEAD file.js
```

Update last **local** commit. Everythin that now in staging area will be combined with last commit. **Use only localy**. </br> Also can update commit message. If need to update only message, staging area can be empty.
```
git --ammend
```

Update **remote** commit (last use Head or by hash use 0fb95). It creates new commit that contains inverse changes made in a bad commit in order to cancel them out.
```
git revert HEAD
```
## Branches
List branches
```
git branch
```
Create branch</br>
**-b** flag creates new branch and swithches on it
```
git branch feature-branch
```
Switch to branch
```
git checkout feature-branch
```
Delete branch
```
git branch -d feature-branch
```
Merge branches. Switch to master and point on branch which should be merged
```
git checkout master
git merge feature-branch
```

Abort merge (if conflict and not commited yet)
```
git merge --abort
```

Abort merge (if already commited). Merge commit has parent commits.Use hex of one of them
```
git reset hexOfParentCommit
```

## Remotes
Check remote origin
```
git remote -v
```
Show detailed remote config
```
git remote show origin
```
View remote branches that git repo is currently tracking
```
git branch -r
```

## --

move HEAD for 1 commit up

```
git checkout HEAD^
```

move HEAD for 7 commits up
```
git checkout HEAD~7
```

move current branch for 3 commits up relatively to HEAD (force)
```
git branch -f main HEAD~3
```

(undo) move branch for 1 commit up. Use localy
```
git reset HEAD~1
```

(undo) git creates new commit. </br>
**old <- current <- new** </br>
It contains undo changes of current commit
(new commit is eq to old commit)
Use to share undo with remote users
```
git revert HEAD
```

copy any commits (commit4 commit7) to current branch
```
git cherry-pick commit4 commit7
```

Interactive. Take 4 commits. You can delete or reorder some commits.
```
git rebase -i HEAD~4
```