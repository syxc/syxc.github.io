---
pubDatetime: 2024-06-12T00:41:00+08:00
title: 如何隐藏 Starlight 顶部的 Navbar
slug: how-to-hide-starlight-navbar
featured: false
draft: false
description: ""
tags:
  - Astro
  - Starlight
---

在用 MkDocs、VitePress、Starlight 这样的工具来做文档网站的时候，某些情况下，我们可能会需要页面上只显示文案内容，不需要显示导航栏（navbar）这些多余的部分。

目前 [Starlight](https://github.com/withastro/starlight/) 暂不支持类似 [VitePress](https://vitepress.dev/reference/frontmatter-config#navbar) 那样来隐藏顶部的 navbar，不过可以利用 [Astro](https://docs.astro.build/zh-cn/basics/layouts/) 的自定义 layout 的方式来达到目的。

方法如下：

1、我们自定义一个 layout，例如：

HideNavbarLayout.astro

```astro
---
// Access frontmatter and other data using Astro.props
// const { frontmatter } = Astro.props;
---

<!-- main content -->
<slot />

<style is:inline>
  /* Hide navbar */
  :root {
    --sl-nav-height: 0px;
  }
  .header {
    display: none;
  }
  /* Fix for doc template */
  nav button:where(.astro-jif73yzw) {
    top: calc((3rem - var(--sl-menu-button-size)) / 2);
  }
</style>
```

2、在 markdown 文档中引用这个 layout 就可以了，例如：

test.md

```md
---
title: Page Title
description: A guide in my new Starlight docs site.
template: splash
layout: ../../layouts/HideNavbarLayout.astro
---

Make your docs shine with Starlight.
```
