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

`git status`

Git flow

0. Clean **Nothing to commit, working tree clean**
1. Modified **Changes not staged for commit** - After file modification.
2. Staged **Changes to be commited** - After `git add file1.js`
3. Commited (and again clean) **Nothing to commit, working tree clean** - After `git commit -m "My message"`

View history of commits </br>
**-a**  flag means more detailed output (like diff -u)
```
git log -a
```

Commit </br>
**-a**  flag adds all tracked files to staging area and commit in one step (skip staging step).
```
git commit -a
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