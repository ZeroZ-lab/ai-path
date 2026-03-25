---
layout: default
---

## 09 Agent Loop：持续循环而不是一次回答

<AgentLoopVisualizer />

<!--
讲解要点：
1. 为什么它是 Loop：传统 LLM 是线性输出（Prompt -> Response），而高阶 Agent 是“规划-执行”的环状闭环。
2. 从 ReAct 到 Plan-and-Execute：
   - 早期 Agent 靠单纯的 ReAct（边走边看）容易陷入死循环。
   - 像 OpenClaw 这样的现代系统，会在宏观上做 Plan（拆解任务），然后在微观循环里执行 Thought -> Action -> Observation -> Decision。
3. 修正能力：最关键的是 Observation 和后续 Decision。工具报错、信息不足、页面变化，都会让 Agent 重新调整下一步，而不是机械往下跑。
-->
