[< Back to main page](../readme.md)

# Linux CLI

## File options

Find file by name in home directory -> docs, file starts with 'my'

```
find ~/docs -name "my*"
```

### List files </br>
**-l** flag means long listing (with additional info) </br>
**-a** flag means show all (including hidden) files </br>
```
ls -la
```

### Change permissions
Allow read, write and execute to all categories (user, group, other)

```
chmod ugo+rwx target-file
```
Allow only for owner
```
chmod 700 .ssh
```

**-rwr---r-x**
 + **-** - file or </br> **d** - dir
 + **rwx** - owner can read, write and execute
 + **---** - group members can't read, write and execute
 +  **r-x** - others can read and execute, but can't write

| Number | Access |
| :-:    | :-:    |
| 0 | --- |
| 1 | --x |
| 2 | -w- |
| 3 | -wx |
| 4 | r-- |
| 5 | r-x |
| 6 | rw- |
| 7 | rwx |

( r=4, w=2, x=1 )

Change owner
```bash
sudo chown newowner .somefille
```

Change group
```bash
sudo chgrp newowner .somefille
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

## Applications
https://packages.ubuntu.com/

Install app (finger)
```bash
sudo apt-get install finger
```

Check updates
```bash
sudo apt-get update
```
Install updates
```bash
sudo apt-get upgrade
```

## User
/etc/passwd - all users</br>
/etc/sudoers - superuser permissions file for default root access</br>
/etc/sudoers.d - superuser permissions dir, here add file with user permissions

```bash
sudo adduser newuser
```

login as 'newuser'
```bash
ssh newuser@127.0.0.1 -p 2222
```

to add root (sudo) permissions to 'newuser' copy from old account
```bash
sudo cp /etc/sudoers.d/oldsuperuser /etc/sudoers.d/newuser
```
or create new
```bash
sudo nano /etc/sudoers.d/newuser
```
`newuser ALL=(ALL) NOPASSWD:ALL`

https://help.ubuntu.com/community/Sudoers

force 'newuser' to change password at next login
```bash
sudo passwd -e newuser
```

generate ssh keys (on local machine). Can use without any flags
```bash
ssh-keygen -t rsa -b 4096 -C mail@gmail.com
```
copy public key to clipboard<br>
on sever run
```bash
mkdir .ssh
nano ~/.ssh/authorized_keys
```
paste from clipboard and save

set permissions
```bash
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
```
now can login with key
```bash
ssh newuser@127.0.0.1 -p 2222 -i c:/Users/new/.ssh/key
```

disable password auth on server, only by key
```bash
sudo nano /etc/ssh/sshd_config
```
set
`PasswordAuthentication no`
and restart

```bash
sudo service ssh restart
```

## Ports and firewall
https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

Ubuntu can use the UFW firewall to make sure only connections to certain services are allowed. Different applications can register their profiles with UFW upon installation

```bash
sudo ufw status
```

deny incomig and allow outgoing
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```
allow ssh (and vagrant 2222/tcp), www and enable firewall
```bash
sudo ufw allow ssh
sudo ufw allow 2222/tcp
sudo ufw allow www
sudo ufw enable
```


## Ubuntu Server
add user
```bash
sudo adduser newuser
```
add root (sudo) permissions to 'newuser'
```bash
sudo usermod -aG sudo newuser
```
or add file
```bash
sudo nano /etc/sudoers.d/newuser
```
`newuser ALL=(ALL) NOPASSWD:ALL`

generate ssh keys (on local machine)
```bash
ssh-keygen -t rsa -b 4096 -C mail@gmail.com
```
copy public key to clipboard<br>
on sever run
```bash
mkdir .ssh
nano ~/.ssh/authorized_keys
```
paste from clipboard and save

config git
```bash
git config --global user.name MyName
git config --global user.email myemail@dot.com
nano ~/.ssh/config
nano ~/.ssh/first_private_key
nano ~/.ssh/second_private_key
```
```
Host github.com
	HostName github.com
	IdentityFile ~/.ssh/first_private_key
	User MyName

Host github.com-second
	HostName github.com
	IdentityFile ~/.ssh/second_private_key
	User MyName2
```

set permissions
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys ~/.ssh/config ~/.ssh/first_private_key ~/.ssh/second_private_key
```
clone apps
```bash
cd ~/apps
git clone git@github.com:Myname/points.git
git clone git@github.com-second:Myname2/points.git
```

disable password auth on server, only by key
```bash
sudo nano /etc/ssh/sshd_config
```
set
```
PasswordAuthentication no
PermitRootLogin no
```
and restart
```bash
sudo systemctl reload sshd
```
now can login with key
```bash
ssh newuser@127.0.0.1 -p 2222 -i c:/Users/new/.ssh/key
```
```bash
sudo ufw status
```
deny incomig and allow outgoing
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```
allow ssh (and vagrant 2222/tcp), www and enable firewall
```bash
sudo ufw allow ssh
sudo ufw allow 2222/tcp
sudo ufw allow 22/tcp
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
```

**option 1**: Virtual box </br>
network settings, port forwardings </br>
| Name | Protocol | Main IP | Main Port | Guest IP | Guest Port |
|-|-|-|-|-|-|
| http | TCP | | 8080 | | 80 |
| ssh | TCP | | 2222 | | 22 |

**option 2**: Vagrant </br>
update Varantfile and restart service.
This configuration change will setup port forwarding from port 8080 on the host machine (your computer) to the guest machine (your Vagrant virtual machine) when your virtual machine is running. This will allow you to access your web server using the URL http://localhost:8080
`config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"`

install nginx, nodejs, curl
```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx nodejs curl finger
```
install node
https://github.com/nodesource/distributions#installation-instructions
```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt-get update
sudo apt-get install nodejs -y
```

install nvm
```bash
sudo apt-get update
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```
relogin and check version
```bash
nvm --version
```
install node version
```bash
nvm install 16.16.0
nvm install 8.9.4
```
use node version
```bash
nvm use 8.9.4
```

install pm2
```bash
sudo npm i -g pm2
```
start pm2
```bash
sudo pm2 start server.js
sudo pm2 startup
sudo pm2 save
sudo reboot
```
pm2 commands
```bash
sudo pm2 delete
pm2 start, pm2 stop, pm2 restart, pm2 reload, sudo pm2 ls
```

```bash
nano ~/apps/app1/ecosystem.config.js
chmod 644 ~/apps/app1/ecosystem.config.js

```

```bash
sudo pm2 start ~/apps/points/ecosystem.config.js --env production --interpreter=/home/ken/.nvm/v16.16.0/bin/node
sudo pm2 start ~/apps/grabo/ecosystem.config.js --env production --interpreter=/home/ken/.nvm/v8.9.4/bin/node
```

restart 0-process(all | 1 | ...) after updating environment variables
```bash
sudo pm2 restart 0 --update-env
```



-----------
edit nginx file
```bash
sudo nano /etc/nginx/sites-enabled/default
```
restart nginx
```bash
sudo service nginx restart
```
check nginx status
```bash
sudo systemctl status nginx.service
```
check nginx config
```bash
sudo nginx -t
```

---


