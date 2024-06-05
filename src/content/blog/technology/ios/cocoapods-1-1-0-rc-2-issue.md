---
pubDatetime: 2016-09-20T15:22:00+08:00
title: 解决因 Cocoapods 版本原因导致的 pod trunk push 问题
slug: fix-pod-trunk-push-issue
featured: false
draft: false
description: ""
tags:
  - iOS
  - Cocoapods
---

## 缘由

最近对 [FYLogger](https://github.com/syxc/FYLogger) 做 Swift 3.0 的适配，在提交新版本到 Cocoapods 的时候，执行 `pod lib lint` 时遇到以下莫名其妙的问题：

```
- ERROR | [iOS] xcodebuild: Returned an unsuccessful exit code. You can use `--verbose` for more information.
- NOTE  | [iOS] xcodebuild: xcodebuild: error: 'App.xcworkspace' does not exist.
```

经查证，是 Cocoapods 版本的问题导致(在 CocoaPods 1.1.0.rc.2 已修复，见 [https://github.com/CocoaPods/CocoaPods/issues/5843](https://github.com/CocoaPods/CocoaPods/issues/5843))。

但在执行 `sudo gem install cocoapods --pre` 升级 Cocoapods 版本的时候，更新到的是 1.1.0.beta.2 版本，反复多次尝试还是一样，以上问题仍然存在。

后来想，是不是因为 gem 源导致更新到的 Cocoapods 不是最新版本，执行 `gem sources -l` 查看，原来是把源修改成了 `https://ruby.taobao.org/`。

> gem 源改成 `https://ruby.taobao.org/` 的优势是速度比 `https://rubygems.org/` 快，但是淘宝的源更新并没有官方及时，导致部分情况下不同步的问题，这个 Cocoapods 版本就是个案例。

## 方案

把 gem 源改成官方的：

`gem sources --add https://rubygems.org/ --remove https://ruby.taobao.org/`

然后执行 `sudo gem install cocoapods --pre` 升级 Cocoapods 到最新的 1.1.0.rc.2 版本(截至目前是)，然后 `pod lib lint` 的问题就解决了。

## 环境

- macOS 10.12 (16A323)
- Xcode 8.0 (8A218a)
- Swift 2.3 & 3.0
- pod env
  ```
   CocoaPods : 1.1.0.rc.2
        Ruby : ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]
    RubyGems : 2.6.6
        Host : Mac OS X 10.12 (16A323)
       Xcode : 8.0 (8A218a)
         Git : git version 2.8.4 (Apple Git-73)
  Ruby lib dir : /usr/local/Cellar/ruby/2.3.1/lib
  Repositories : master - https://github.com/CocoaPods/Specs.git @ 4c6b006e04df8bde3561a9517e7aa3997767fa50
  ```

## 参考

- [https://ruby.taobao.org/](https://ruby.taobao.org/)
- [pod trunk push: "xcodebuild: error: 'App.xcworkspace' does not exist."](https://github.com/CocoaPods/CocoaPods/issues/5843)
