---
pubDatetime: 2026-05-13T00:00:00+08:00
title: AI Builders 早报 - 2026-05-13
slug: ai-builders-2026-05-13
featured: true
draft: false
description: "AI Builders Morning Briefing - AI 开发者每日精华"
tags:
  - AI
  - Builders
  - News
---

# AI Builders 早报｜2026-05-13

**今天最重要的事:**

Long Lake 宣布以 63 亿美元收购 Amex Global Business Travel，这是全球首个 AI 驱动的私有化交易。

**为什么重要:**

它验证了"AI 收购"模式的可行性——通过自研的 Nexus AI 平台，被收购企业可在数天内实现效率提升。这种模式可能开启传统服务业的大规模 AI 整合浪潮。

**我今天要不要跟进:**

观察 Long Lake 的执行案例，阅读 No Priors 播客完整采访了解其 AI 平台架构细节。

---

## 事件 1: Long Lake 以 63 亿美元收购 Amex Global Business Travel

**发生了什么:**

Long Lake Management 宣布以 63 亿美元收购 Amex Global Business Travel，这是全球首个 AI 驱动的私有化交易。Long Lake 此前已收购约 30 家公司，通过其自研的 Nexus AI 平台进行改造。该平台让员工能快速处理工作流程、集成数据源、自动化任务，新收购的公司可在数天内部署并看到成效。

**大家在讨论什么:**

- 这是 AI 在传统服务业规模化落地的标志性案例
- Nexus 平台 80% 基础设施在各业务线共享，20% 针对特定行业定制
- Long Lake 声称通过 AI 赋能实现 20%+ 年增长率，而行业平均为 0-5%

**代表来源:**

- No Priors: [Amex Global Business Travel: The World's First AI Take Private][ref-1] | 播客采访
- Twitter @swyx: [thinkymachines realtime 更新][ref-2] | 798 likes

**我的判断:**

这是 AI 整合传统行业的里程碑。Long Lake 的模式本质是"AI 版伯克希尔哈撒韦"——长期持有、深度改造。但核心挑战在于：复 制性是否足够？每行业务差异大，Nexus 平台的可扩展性待验证。对 AI 开发者而言，关注其招聘动态和工程实践更具实操价值。

**建议动作:**

观察 Long Lake 的公开技术分享（如有），或搜索其工程团队博客了解 Nexus 架构细节。

---

## 事件 2: Andrej Karpathy 预测 AI 输入输出的演进方向

**发生了什么:**

Andrej Karpathy 在推文中指出，当前 AI 的标准输出是 Markdown，但他认为 HTML 正在成为新的更好的默认输出格式。他在查询末尾要求 LLM 将响应结构化为 HTML，然后在浏览器中查看，效果很好。他进一步预测，AI I/O 的演进路径可能是：raw text → markdown → HTML → 交互式神经视频/模拟。

同时他认为，音频是人类给 AI 的首选输入方式，但视觉（图像/动画/视频）是 AI 给人类的最佳输出形式——人脑约三分之一是视觉处理区域。他建议在当前阶段可以尝试让 LLM 输出 HTML 来改善体验。

**大家在讨论什么:**

- HTML 作为 AI 输出格式的实用价值
- 视觉信息在 AI 交互中的重要性被低估
- 未来交互式神经视频的可能性

**代表来源:**

- Andrej Karpathy (前 Tesla AI 总监，前 OpenAI 创始团队): [推文][ref-3] | 13038 likes, 1338 retweets, 662 replies

**我的判断:**

这个判断来自 Karpathy 对 AI 产品的深度实践经验。HTML 输出相比 Markdown 的核心优势是更强的布局和图形能力，甚至可交互。对开发者而言，这是一个低门槛的体验优化技巧——只需在 prompt 末尾加一句"structure your response as HTML"。至于神经视频/模拟，目前技术尚不成熟，但方向值得关注。

**建议动作:**

尝试在日常 LLM 使用中，让模型输出 HTML 并在浏览器查看，记录体验差异。

---

## 事件 3: Claude Code agents 功能发布

**发生了什么:**

Cat Wu 在推文中宣布，运行 `claude agents` 可以在终端启动一个控制平面（control plane）。之后从任何 CLI 会话按 `<-` 键即可将其注册到该控制平面。她建议从代码根目录运行 `claude agents` 来统一管理所有 Claude Code agents。

同时 Anthropic 宣布开放 Claude Code 桌面端（云端选项）、iOS 和 Android 应用的 office hours，用户可报名参与。

**大家在讨论什么:**

- Claude Code 的多 agent 管理能力
- 云端和多平台支持的进展

**代表来源:**

- Cat Wu (Claude Code + cowork @AnthropicAI): [推文 - agents 控制平面][ref-4] | 327 likes
- Cat Wu: [推文 - Claude Code 办公时间][ref-5] | 71 likes

**我的判断:**

`claude agents` 命令的推出将多 agent 协作从实验性功能推向可管理状态。对于同时运行多个 Claude Code 实例的开发者，这是工作流的重要升级。"Control plane"概念借鉴自运维术语，意味着用户可以从单一入口监控、协调多个 agent 的行为。办公时间的开放表明 Claude Code 正从开发者工具向更广泛用户群扩展。

**建议动作:**

在项目根目录运行 `claude agents` 并尝试管理多个 agent 会话。

---

## 事件 4: Claude Constitution 有声书发布

**发生了什么:**

Amanda Askell 宣布，现在可以聆听她与 Joe 朗读的 Claude Constitution 有声书版本。她表示正在开发快速播放模式的选项。Claude Constitution 是 Anthropic 为 Claude 制定的价值观和原则框架。

**大家在讨论什么:**

- AI 对齐研究的前沿实践
- 以可访问形式传播 AI 价值观

**代表来源:**

- Amanda Askell (Anthropic 哲学家 & 伦理学家): [推文][ref-6] | 416 likes, 22 retweets

**我的判断:**

Claude Constitution 有声书的发布是 Anthropic 透明度的体现——将对齐原则以可消费形式向公众开放。对研究者而言，Constitution 提供了理解 Anthropic 价值排序的窗口。对开发者而言，可作为 prompt engineering 的参考框架。

**建议动作:**

如果对 AI 对齐和 Claude 价值观设计感兴趣，可 listening 有声书了解 Constitution 核心原则。

---

## 今日可跟进清单

### 今日可跟进

| 事件 | 原因 |
|------|------|
| Long Lake 收购 Amex GBT 案例 | 首个 AI 私有化交易，验证"AI 收购"模式可行性 |
| Claude Code agents 控制平面 | 多 agent 管理的实用工具，提升并发开发效率 |

### 后续观察

| 事件 | 观察点 |
|------|--------|
| Andrej Karpathy 预测的 HTML 输出趋势 | 观察业界是否跟进，LLM 原生 HTML 输出能力提升 |
| Long Lake 的执行进展 | 关注其后续整合效果和公开技术分享 |

### 可以跳过

| 事件 | 原因 |
|------|------|
| Peter Yang 关于 SoCal vs Bay Area 主题公园的讨论 | 个人观察，非 AI 行业内容 |
| Kevin Weil 转推 @tdrobbo 内容 | 信息不足，无法判断价值 |

<!-- links -->
[ref-1]: https://www.youtube.com/watch?v=g5TWnUjbeFM
[ref-2]: https://x.com/swyx/status/2053960011748098462
[ref-3]: https://x.com/karpathy/status/2053872850101285137
[ref-4]: https://x.com/_catwu/status/2053999857799672111
[ref-5]: https://x.com/_catwu/status/2053873949646405879
[ref-6]: https://x.com/AmandaAskell/status/2054010971765805486