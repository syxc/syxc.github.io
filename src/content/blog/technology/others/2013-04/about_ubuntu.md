---
pubDatetime: 2013-04-20T15:22:00+08:00
title: Ubuntu 上 MySQL 的那些事
slug: about-ubuntu-mysql
featured: false
draft: false
description: ""
tags:
  - Ubuntu
  - MySQL
---

> 在利用 SQL 脚本导入数据的时候记住了：先检查有没有创建数据库的语句，若没有，则先手动把数据库给创建了，不然，就有可能悲剧了！举个例子：MySQL 的 mysql 库里面有个 user 表，这个大家都懂的，若你要导入的数据库刚好也有一个 user 表，假设你在用 GUI 工具导入数据之前选择的数据库刚好是 mysql... 太巧了吧！！！然后悲剧就发生了，你的 MySQL 就别想再连上去了！重装吧，恢复 mysql 库吧，随便怎么办吧，反正就是蛋疼了，最好你的数据不多，最好你之前是有过备份的！

完全卸载 MySQL

`sudo apt-get autoremove --purge mysql-server-5.5 mysql-common`

重装 MySQL

`sudo apt-get install mysql-server-5.5 mysql-client-5.5 php5-mysql`

ps：记得删除 mysql 那个库，不然你重新安装的时候可能会提示设置密码错误的问题！它在这：

`/var/lib/mysql/`

下面记录一下我在重装 MySQL 的时候发生的一些情况

debconf: DbDriver "config": mkdir :没有那个文件或目录

```
Setting up man-db (2.5.7-8) ...
debconf: DbDriver "config": could not open /var/cache/debconf/config.dat
dpkg: error processing man-db (--configure):
subprocess installed post-installation script returned error exit status 1
```

A web search quickly revealed the solution:

```bash
mkdir /var/cache/debconf
sudo apt-get install debconf --reinstall
```
