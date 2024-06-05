---
pubDatetime: 2014-12-20T15:22:00+08:00
title: 关于 Android 开发中经典的 65536 问题的一些总结
slug: about-android-65536
featured: false
draft: false
description: ""
tags:
  - Android
---

## 65536 问题/解决方案

Android 开发中，经典的 65536 问题不少人应该都碰到过，也就是这个：

`Conversion to Dalvik format failed: Unable to execute dex: method ID not in [0, 0xffff]: 65536`

对于这个问题的原因，这里我借用[这篇文章](http://www.infoq.com/cn/news/2014/11/android-multidex)的一段话概括下，感谢文章作者的总结。

> 这个错误是 Android 应用的方法总数限制造成的。Android 平台的 Java 虚拟机 Dalvik 在执行 DEX 格式的 Java 应用程序时，使用原生类型 short 来索引 DEX 文件中的方法。这意味着单个 DEX 文件可被引用的方法总数被限制为 65536。通常 APK 包含一个 classes.dex 文件，因此 Android 应用的方法总数不能超过这个数量，这包括 Android 框架、类库和你自己开发的代码。

原因了解了，如何解决，这里我简单汇总一些方案：

### Google 官方的 MultiDex 方案

[Configure Apps with Over 64K Methods](https://developer.android.com/studio/build/multidex.html)

### 美团的多 Dex 分包、动态异步加载方案

[美团 Android DEX 自动拆包及动态加载简介](http://tech.meituan.com/mt-android-auto-split-dex.html)

### 插件化，动态加载方案

- [DynamicLoadApk](https://github.com/singwhatiwanna/dynamic-load-apk)
- [AndroidDynamicLoader](https://github.com/mmin18/AndroidDynamicLoader)
- [android-pluginmgr](https://github.com/houkx/android-pluginmgr)
- [DroidPlugin](https://github.com/DroidPluginTeam/DroidPlugin)
- [DroidFix](https://github.com/bunnyblue/DroidFix)

### 其它

Hack Dalvik VM 解决 Android 2.3 DEX/LinearAllocHdr 超限

- [http://viila.info/2014/04/android-2-3-dex-max-function-problem/](http://viila.info/2014/04/android-2-3-dex-max-function-problem/)
- [https://github.com/viilaismonster/LinearAllocFix](https://github.com/viilaismonster/LinearAllocFix)

## 一些经验

> 要预防 65536 问题，其实可以理解为就是如何尽可能的控制目标 method 数。

关于第三方库的选择(尽量用小而美的工具包来辅助开发)

- JSON 类库的选择，在 Jackson, Gson, Fastjson 中，综合来说，Gson 比较均衡，method 总数在 1k 左右；
- 不建议使用 Guava 这个工具包，method 总数在 1w 以上，可以考虑用 Apache 的 commons 相关工具包代替，另外，[Jodd](https://github.com/oblac/jodd) 也是不错的选择；
- 如果 App 有用到 Google Protobuf，那么推荐用 Square 的 Wire；
- 相同功能的第三方库，选择其中一个合适的即可，如上面说的 JSON 相关的，还有图片加载、网络库等；
- 如果可以，尝试用合适的方式抽取一些类库中需要的那部分代码来辅助开发；
- [dex-method-counts](https://github.com/mihaip/dex-method-counts) 是个好工具，还有 [http://www.methodscount.com](http://www.methodscount.com/)

总之，慎用第三方库。

另外，再推荐一篇文章，[預防 Android Dex 64k Method Size Limit](https://ingramchen.io/blog/2014/09/prevention-of-android-dex-64k-method-size-limit.html)

## 题外话

当遇到问题时，我习惯这样来思考：

- 问题出现的原因是什么？
  - 低级错误，粗心大意造成？
  - 对某些原理(API)不了解？
  - 确实是某(些)疑难杂症？
- 如何解决？
  - Review, Review, Review
  - 查文档，找相关资料
  - 善用 Google 找解决方案(大部分问题都是有靠谱的方案的)

概括来说就是：

> 发现问题 - 分析问题 - 解决问题 - 总结经验(教训)

## 参考资料

- [Android 打包多个 dex 并运行时动态加载类](http://android-developers.blogspot.hk/2011/07/custom-class-loading-in-dalvik.html)
- [Android 插件化，动态升级](http://www.trinea.cn/android/android-plugin/)
- [Android 应用打破 65K 方法数限制](http://www.infoq.com/cn/news/2014/11/android-multidex)
- [美团 Android DEX 自动拆包及动态加载简介](http://tech.meituan.com/mt-android-auto-split-dex.html)
- [Hack Dalvik VM 解决 Android 2.3 DEX/LinearAllocHdr 超限](https://github.com/viilaismonster/LinearAllocFix)
- [Dex65536](https://github.com/mmin18/Dex65536)
- [dynamic-load-apk](https://github.com/singwhatiwanna/dynamic-load-apk)
- [AndroidDynamicLoader](https://github.com/mmin18/AndroidDynamicLoader)
- [android-pluginmgr](https://github.com/houkx/android-pluginmgr)
- [DroidPlugin](https://github.com/DroidPluginTeam/DroidPlugin)
- [DynamicAPK](https://github.com/CtripMobile/DynamicAPK)
- [Nuwa](https://github.com/jasonross/Nuwa)
- [AndFix](https://github.com/alibaba/AndFix)
- [Small](https://github.com/wequick/Small)
- [DroidFix](https://github.com/bunnyblue/DroidFix)
- [微信 Android 热补丁实践演进之路](http://mp.weixin.qq.com/s?spm=a1z2e.7794127.0.0.Q7LExa&__biz=MzAwNDY1ODY2OQ==&mid=2649286306&idx=1&sn=d6b2865e033a99de60b2d4314c6e0a25&scene=0&__nc=1#wechat_redirect)
- [dex-method-counts](https://github.com/mihaip/dex-method-counts)
- [http://www.methodscount.com](http://www.methodscount.com/)
