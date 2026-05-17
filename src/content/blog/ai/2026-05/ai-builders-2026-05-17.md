---
pubDatetime: 2026-05-17T00:00:00+08:00
title: AI Builders 早报 - 2026-05-17
slug: ai-builders-2026-05-17
featured: true
draft: false
description: "AI Builders Morning Briefing - AI 开发者每日精华"
tags:
  - AI
  - Builders
  - News
---

# AI Builders 早报｜2026-05-17

**今天最重要的事:**

OpenClaw 团队公开了完全基于 AI agents 运行软件项目的实践细节，展示了一个不需要人类程序员直接参与的开发范式。

**为什么重要:**

这代表了 AI 开发工具从辅助编程向完全自主软件工程的范式转移，对所有 AI 产品团队都有直接的参考价值。

**我今天要不要跟进:**

使用 Claude Code 或类似 agent 工具的团队，应该检查现有的 code review 和 issue 管理流程是否可以被 agent 自动化。

---

## 事件 1: OpenClaw 团队公开 AI 原生开发工作流

**发生了什么:**

OpenClaw 联合创始人 Peter Steinberger 分享了团队如何完全基于 AI agents 运行整个项目。他们运行约 100 个 Codex 实例，持续审查每个 PR 和 issue；自动关闭修复过的旧 issue；在每次 commit 时运行安全审查；自动去重和聚类问题并发送报告；创建能够重建复杂环境、生成视频并自动发帖的 agents；监听会议并主动创建 PR 的 agents。Steinberger 认为核心问题是：「如果 token 不再重要，我们该如何构建软件？」与此同时，他发布了 Clawpatch 0.1.0，这是一个将代码库映射为语义功能切片并进行 bug 和质量问题审查的工具。

**大家在讨论什么:**

- 这种「如果 token 不再重要」的思维实验对于理解 AI 开发工具的长期方向有启发意义
- Clawpatch 作为代码审查工具的实际效果是够否足够成熟
- 运行 100 个 Codex 实例的成本和收益平衡

**代表来源:**

- Peter Steinberger (OpenClaw): [AI spend 详细分享][ref-1] | 3727 likes, 209 retweets
- Peter Steinberger: [Clawpatch 0.1.0 发布][ref-2] | 942 likes, 69 retweets

**我的判断:**

这是目前最具体的 AI 原生开发实践案例。团队展示了在代码审查、issue 管理、安全扫描、性能基准测试等多个环节的自动化方案。对于正在构建 AI 产品或开发工具的团队，这些具体的 agent 工作流比抽象的理论更有参考价值。关键问题是这种模式能否扩展到更复杂的项目。

**建议动作:**

尝试用 Claude Code 或 Codex 对现有项目运行一次完整的 code review，感受自动化代码审查的效果。

---

## 事件 2: Vercel 发布 Grok 插件和 vercel curl

**发生了什么:**

Vercel CEO Guillermo Rauch 演示了 Grok CLI 通过 Vercel 插件实现云端部署的能力，并展示了用 Grok 生成网站并托管到 Vercel 的完整流程。同时，针对 agent 部署时遇到的认证问题，Vercel 发布了 `vercel curl` 命令，让 agent 和开发者能够绕过 SSO 限制访问 Vercel 生态系统内的任意 URL。

**大家在讨论什么:**

- AI agents 在部署时面临的企业级认证挑战
- `vercel curl` 作为临时解决方案的实用性
- Grok + Vercel 作为 AI 生成网站的完整工作流

**代表来源:**

- Guillermo Rauch (Vercel): [Grok CLI + Vercel 插件演示][ref-3] | 853 likes, 131 retweets
- Guillermo Rauch: [vercel curl 介绍][ref-4] | 150 likes, 15 replies

**我的判断:**

Vercel 正在解决 AI agents 部署的企业级问题。`vercel curl` 虽然是临时方案，但反映了 AI 产品在企业环境中部署的真实痛点。Grok 插件的演示表明 AI 生成网站的端到端流程正在成熟。

**建议动作:**

如果你的团队有 agent 部署场景，评估 `vercel curl` 是否能解决当前的认证问题。

---

## 事件 3: Aaron Levie 论述 Forward Deployed Engineering 模式

**发生了什么:**

Box CEO Aaron Levie 阐述了他对 AI 产品工程模式的理解。他认为 AI 与传统软件不同：交付后仍在持续演进，既因为新能力和最佳实践的出现，也因为底层模型的升级会显著改变工作流。因此，一个 vendor 跨数千家公司共享最佳实践比每家公司独立学习和管理更为高效。从 chat 系统到 agentic 系统的转变使得 FDE 模型成为大规模部署 AI 的核心能力。

**大家在讨论什么:**

- AI 产品是否真的需要与传统软件不同的工程模式
- FDE 模型与客户成功团队的边界在哪里
- AI 产品的持续演进特性是否被过度强调

**代表来源:**

- Aaron Levie (Box): [FDE 模式论述][ref-5] | 220 likes, 18 retweets

**我的判断:**

Levie 的观点反映了 SaaS 公司在 AI 时代对服务模式的新思考。FDE（Forward Deployed Engineering）的核心是将 AI 产品的最佳实践内置到产品中，而非依赖每个客户独立探索。这对于 AI 产品团队的设计和交付策略有直接参考意义。

**建议动作:**

评估你的 AI 产品是否需要从传统的客户支持模式转向 FDE 模式。

---

## 事件 4: Madhu Guru 论 AI 时代的产品经理转型

**发生了什么:**

Google 产品 leader Madhu Guru 指出一代 PM 正在为适应 AI 而挣扎，因为他们习惯于执行 playbook，而 AI 需要发明新的 playbook。过去二十年，只有少数团队创造了产品模式，其余人都只是复用到自己的领域。这导致大量软件感觉相同。现在的 PM 需要成为发明者，而不是框架执行者——没有稳定的 playbook 可以复用，无法通过 A/B 测试获得突破性 AI 产品。

**大家在讨论什么:**

- AI 时代 PM 技能树的根本变化
- 「发明者」vs「执行者」的具体能力差异
- AI 产品如何突破同质化

**代表来源:**

- Madhu Guru (Google): [PM 转型观点][ref-6] | 26 likes, 6 replies

**我的判断:**

这个观点呼应了 AI 产品开发中「产品速度」与「实验速度」不匹配的核心矛盾。对于 AI 产品团队，这意味着需要重新思考产品定义和迭代的方式。

**建议动作:**

回顾你的产品开发流程，有多少时间是花在执行已知模式上，多少时间是探索新模式。

---

## 事件 5: Dan Shipper 分享 OpenClaw 平台构建经验

**发生了什么:**

Every CEO Dan Shipper 分享了团队尝试基于 OpenClaw 构建 agent-as-a-service 平台的心得。两个核心洞察：1) OpenClaw 很棒但作为平台构建极其困难——它迭代快、回归多，不是很好的中间层；2) 一个公司的超级 agent 胜过每个人的单独 agent。当前 agents 实际需要大量（通常是技术性的）工作来保持良好运行，而有工作的人不想整天调试 agent 内部。但给每个人一个运作良好的 agent 并让专人负责为整个公司优化，会有很好的效果。

**大家在讨论什么:**

- 在快速迭代的基础设施上构建平台的挑战
- 个人 agent vs 企业级 agent 的价值差异
- agent 维护的实际成本

**代表来源:**

- Dan Shipper (Every): [平台构建经验][ref-7] | 131 likes, 26 replies

**我的判断:**

这是少数关于在 AI agent 基础设施上构建产品的第一手经验分享。对于考虑构建 agent 平台的团队，这些洞察直接回答了「能不能做」和「怎么做」的问题。

**建议动作:**

如果你计划构建 agent 平台，仔细评估底层基础设施的稳定性和迭代速度是否适合你的开发节奏。

---

## 今日可跟进清单

### 今日可跟进

| 事件 | 原因 |
|------|------|
| Clawpatch 代码审查工具 | 新发布的工具，实际效果需要验证 |
| Vercel vercel curl | 解决 agent 部署认证问题的具体方案 |

### 后续观察

| 事件 | 观察点 |
|------|--------|
| Yann LeCun 离开 Meta 讨论 | 关注 LLM 范式争论的后续发展 |
| Codex-native 应用趋势 | 观察更多原生应用案例 |

### 可以跳过

| 事件 | 原因 |
|------|------|
| Sam Altman 谈用户反馈 | 常规产品迭代评论，无具体信息 |
| Gary Tan 政治议题 | 与 AI builders 主题无关 |
| Matt Turck 个人动态 | 低信息密度 |

<!-- links -->
[ref-1]: https://x.com/steipete/status/2055405041843052792
[ref-2]: https://x.com/steipete/status/2055364630709448970
[ref-3]: https://x.com/rauchg/status/2055491454307582454
[ref-4]: https://x.com/rauchg/status/2055440326765244742
[ref-5]: https://x.com/levie/status/2055501840419328286
[ref-6]: https://x.com/realmadhuguru/status/2055414865146327088
[ref-7]: https://x.com/danshipper/status/2055347527457886336