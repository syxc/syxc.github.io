---
pubDatetime: 2012-06-20T15:22:00+08:00
title: 使用 Gitolite 搭建 Git 服务器
slug: self-host-gitolite-server
featured: false
draft: false
description: ""
tags:
  - Git
  - Ubuntu
---

## 需要用到的软件

- [Git](http://git-scm.com/)
- [Gitolite](https://github.com/sitaramc/gitolite)
- [Gitweb](https://git.wiki.kernel.org/index.php/Gitweb)
- Apache

> 其实 Gitolite 的搭建过程中，Gitweb、Apache 不是必须的，Gitweb、Apache 跟 Gitolite 一起使用，看到的效果就像这个一样 [http://git.chromium.org/gitweb/](http://git.chromium.org/gitweb/)

## 环境

假设 Server 用的是 Ubuntu 12.04，Client 能通过 SSH 连接至 Ubuntu Server，Server、Client 都安装好 Git，怎么安装？Google 一下吧！

## 如何搭建？

### Server

- 添加一个计算机用户，并设置密码，如 git

  `sudo useradd -m git`  
  `sudo passwd git`

### Client

- 设置你本机的 git 用户信息

  `git config --global user.name “xxx”`  
  `git config --global user.email xxx@email.com`

- 创建一个 SSH 公钥/私钥对

  `ssh-keygen -t rsa`

- 上传公钥到服务器

  `scp ~/.ssh/id_rsa.pub git@server(ip):/home/git/admin.pub`

- SSH 连接到 Server

  `ssh user@server`

### Server

- server 取得 root，安装 gitolite

  `sudo -sH`  
  `apt-get install gitolite`

- 切换至 git 用户，运行 gitolite 安装脚本

  `su - git`  
  `gl-setup /home/git/admin.pub`

- 客户端获取 gitolite 管理库

  `git clone git@server:gitolite-admin.git`  
  `cd gitolite-admin`

- 编辑 gitolite 配置文件，进行项目、用户添加等操作

  `sudo vim conf/gitolite.conf`

  怎么对库进行管理、用户添加、授权等操作，gitolite 的文档里都有详细介绍的。

- 配置好以后，push 到 Server 上即可！

## Gitweb 的安装、配置(都是在 Server 上)

- 首先安装一下 Apache

  `sudo apt-get install apache2`

- 安装 Gitweb

  `sudo apt-get install gitweb`

- 安装完成后，修改下 gitweb.conf

  `sudo vim /etc/gitweb.conf`  
  `$projectroot = "/home/git/repositories"`

- 重启下 Apache

  `sudo service apache2 restart`

  若 `/home/git/repositories` 可被访问，即可通过 `http://(server)/gitweb` 访问你的 git 库了！

### Tips

- 显示 gitolite-admin.git

  `sudo chmod 777 -R gitolite-admin.git/`

- 隐藏 gitolite-admin.git

  `sudo chmod 700 -R gitolite-admin.git/`

## 问题/参考

- [http://blog.airmio.com/2012/05/install-git-server-on-ubuntu-12/](http://blog.airmio.com/2012/05/install-git-server-on-ubuntu-12/)
- [http://silas.sewell.org/blog/2011/01/08/setup-gitolite-on-ubuntu/](http://silas.sewell.org/blog/2011/01/08/setup-gitolite-on-ubuntu/)
- [http://sitaramc.github.com/gitolite/master-toc.html](http://sitaramc.github.com/gitolite/master-toc.html)
- [http://www.giocc.com/public-repositories-in-gitolite-with-umasks.html](http://www.giocc.com/public-repositories-in-gitolite-with-umasks.html)
- [http://computercamp.cdwilson.us/git-gitolite-git-daemon-gitweb-setup-on-ubunt](http://computercamp.cdwilson.us/git-gitolite-git-daemon-gitweb-setup-on-ubunt)
