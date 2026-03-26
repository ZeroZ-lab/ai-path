---
layout: default
---

## 09 Agent Loop：持续循环而不是一次回答

<AgentLoopVisualizer />

<!--
逐字稿：
这一页我想讲 Agent 和普通 LLM 最大的结构差别：它不是一次回答，而是一个持续循环。

普通 LLM 更像线性输出。你给一个 Prompt，它回一个 Response，这一轮就结束了。

但高自主性 Agent 不一样。它会先思考，再行动，再观察结果，再决定下一步，然后继续进入下一轮。

所以这里最重要的不是某一个步骤，而是它们连起来形成了一个闭环。

从历史上看，早期 Agent 很多靠 ReAct，也就是边走边看。但单纯的边走边看，容易在复杂任务里迷失或者死循环。

像 OpenClaw 这样的现代系统，会更接近 Plan-and-Execute：宏观上先拆任务，微观上再进入 Thought、Action、Observation、Decision 这样的循环。

这一页真正要带走的一点是：Agent 的价值不在于“会调用一次工具”，而在于它能根据结果持续修正，而不是机械往下跑。
-->
