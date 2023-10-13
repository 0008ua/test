[< Back to main page](../readme.md)

# Linux CLI

## File options

Find file by name in home directory -> docs, file starts with 'my'

```
find ~/docs -name "my*"
```

### List files </br>
**-l** flag means long listing (with additional info) </br>
**-la** flag means long listing and show hidden files </br>
```
ls -la
```

**-rwr---r-x**
 + **-** - file or </br> **d** - dir
 + **rwx** - owner can read, write and execute
 + **---** - group members can't read, write and execute
 +  **r-x** - others can read and execute, but can't write

```
ls -l
```

### Change permissions
Allow read, write and execute to all categories (user, group, other)

```
chmod ugo+rwx target-file

```
## System

View which groups you're in

```
groups
```

View user info

```
finger user1
```

Free space (disk free)

```
df
```

Get current location </br>
(print working directory)

```
pwd
```

Process status

```
ps aux
```

Pipe (result on first command use as input for second)

```
cat joke-1 joke-2 | lpr
```

Filter. Show only processes where 'root' appears

```
ps aux | grep root
```

Kill process 'gracefully' with id (PID)

```
kill 725
```

Kill process 'immediately' with id (PID)

```
kill -9 725
```

## Directories manipulations

Copy dir (subtree)

```
cp -r ~another-user/subdir ~
```

Create directory

```
mkdir new-dir
```

Delete (remove) empty directory

```
rmdir dir-to-delete
```

Delete (remove) directory with subtree

```
rm -r dir-to-delete
```

## Files manipulations

Move file

```
mv file-to-move target-dir
```

Rename file

```
mv old-filename new-filename
```

Copy file

```
cp filename .new/new-name
```

Delete (remove) file

```
rm file-to-delete
```

## File view

View file content

```
more file-to-view.txt
```

Concatinate files

```
cat file1 file2
```

Concatinate files to new file use **>** (overwrite) or **>>** (append)

```
cat file1 file2 > new-file
```

## Print

Print file on default printer

```
lpr file1
```

View default printer queue

```
lpq
```

Remove print job number 155 from default printer queue

```
lprm 155
```

## VCS

Difference between file1 and file2 save in result.diff</br>
**-u** flag means more detailed output

```
diff -u file1.js file2.js > result.diff
```

Patch. Apply difference from .diff file to original file
```
patch original.js < result.diff
```


