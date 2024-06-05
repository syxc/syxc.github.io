---
pubDatetime: 2012-08-20T15:22:00+08:00
title: 在终端配置 Ubuntu 的 IP/DNS
slug: config-ubuntu-ip-dns
featured: false
draft: false
description: ""
tags:
  - Ubuntu
---

## 启动终端，打开配置文件

`sudo cp /etc/network/interfaces  /etc/network/interfacesbak  # 备份原有配置文件`
`sudo vim /etc/network/interfaces  # 编辑网卡配置文件`

## 接着修改相应内容，例如

```bash
auto eth0
iface eth0 inet static  # static 固定ip，dhcp 动态ip
address 192.168.1.88
netmask 255.255.255.0
gateway 192.168.1.1

echo "nameserver 8.8.8.8" > /etc/resolv.conf  # 写入DNS服务器信息至resolv.conf
```

## 重启网络

`/etc/init.d/networking restart  # 重启网络`
这样，IP、DNS 就算配置好了！
