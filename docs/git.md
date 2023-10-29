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
**--all** flag means all branches
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
git reset HEAD^ file.js
```

Update last **local** commit. Everythin that now in staging area will be combined with last commit. **Use only localy**. </br> Also can update commit message. If need to update only message, staging area can be empty.
```
git commit --amend
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
Check remote repos </br>
**-v** flag means verbosely
```
git remote -v
```
Check remote repo named 'origin'. Check is **local up to date**? </br>
If **local is out of date** use `git fetch` to download new commits from server, then check `git log origin/main` to see where is HEAD and origin/main, alternatively use `git status`. Than can merge remote origin/main branch with local main branch `git merge origin/main`
```
git remote show origin
```
View remote branches that git repo is currently tracking
```
git branch -r
```
View all branches
```
git branch -a
```
Fetches content of remote branches without auto merging it into local branches. To copy remote branch to local `git checkout new-branch` or `git merge origin/new-branch`
```
git remote update
```
Download remote commits
```
git fetch
```
Download remote commits and merge with local </br>
(git fetch + git merge origin/master)
```
git pull
```
Download remote commits and rebase local </br>
(git fetch + git rebase origin/master)
```
git pull --rebase
```

`git remote update` can update all of your branches set to track remote ones, however not merge any changes in. `git fetch` can update only the branch you are on, however not merge any changes in. `git pull` can update and merge any remote changes of the present branch you are on

Add origin</br>
'github.com' between '@' and ':' is 'Host' from file .ssh/config
```
git remote add origin git@github.com:0008ua/test.git
```

If local branch does not exist on the remote </br>
**--set-upstream origin** flag same as **-u**
```
git push -u origin created-branch-name
```

## Rebase
Take 4 commits. You can delete or reorder some commits </br>
**-i** flag means interactive
```
git rebase -i HEAD~4
```
Rebase by default use **pick** command, but can change command if use interactive mode </br> **squash** command combines several commits into one

move branch *bugFix* on commit *ff45*
```
git rebase ff45 bugFix
```
### Usecase 1. Changes made on feature branch

user1 create 'refactor' branch
```
git checkout -b refactor
```
user1 make some changes on 'refactor' branch and some commits
```
git commit -a -m 'commitOnRefactor'
```
user2 make some changes on 'main' branch and some commits
```
git commit -a -m 'commitOnMain'
```
user2 push commits from 'main' to 'origin/main'
```
git push
```
user1 push commits from 'refactor' to 'origin/refactor' at first time
```
git push -u origin refactor
```
**Rebase**. user1 can merge or rebase 'refactor' with 'main'

user1 checkout on main branch
```
checkout main
```
user1 pull from origin/main commits that user2 have made
```
git pull
```
changes can't be merged fast forvward</br>
because there is an extra commit in the master that not present in the refactor </br>
user1 checkout to refactor branch and rebase last commits </br>
```
git checkout refactor
```
move the current branch (refactor) on top of the main branch </br>
make main as new base for current
```
git rebase main
```
now can merge fast forward
```
git checkout main
git merge refactor
```
now can remove remote refactor branch
```
git push --delete origin refactor
```
and can remove local refactor branch
```
git branch -d refactor
```
than push changes back in to remote repo
```
git push
```
user2 can fetch changes
```
git pull
```
### Usecase 2. Changes made on main branch

user1 make some changes on main branch and some commits
```
git commit -a -m 'commitOnMain'
```
user2 make some changes on 'main' branch and some commits
```
git commit -a -m 'commitOnMain'
```
user2 push commits from 'main' to 'origin/main'
```
git push
```
user 1 check that **main (local out of date)** and fetch new commits from origin/main
```
git remote show origin
git fetch
```
to avoid 3 way merge use rebase (user1 set origin/main as new base for his last commits)
```
git rebase origin/main
```
if merge conflict, solve it, then add and continue rebase
```
git add index.js
git rebase --continue
```
if rebase finished successfully push to remote
```
git push
```

## Pull request
### Squash


If there are several commits was pushed on pull request, git can combine them in one and then rebase
```
git rebase -i main
```
Then in text editor change last commit command on **squash**. Save and exit </br>
Then edit message (comment). Save and exit</br>

So we got combined commit on local branch </br>
But remote branch still have several commits and merge can't be fast forwarded</br>
In this case we don't want to create a merge, we want replace the old commits with the new one </br>
**-f** flag means force
```
git push -f
```

## Other commands
move HEAD for 1 commit up

```
git checkout HEAD^
```

move HEAD for 7 commits up
```
git checkout HEAD~7
```

reset branch **main** to new start point (for 3 commits up relatively to HEAD)</br>
**-f** flag means force
```
git branch -f main HEAD~3
```

(undo) move branch for 1 commit up. Use localy
```
git reset HEAD~1
```
copy any commits (commit4 commit7) to current HEAD
```
git cherry-pick commit4 commit7
```
## Tags
create tag *v0* on commit *ff213* and move HEAD there
```
git tag v0 ff213
git checkout v0
```
describe *main* branch (can describe any commit)</br>
output looks like: **v2_1_ff213** </br>
nearest tag *v2* is *1* commit from current HEAD of main (ff213)
```
git describe main
```

