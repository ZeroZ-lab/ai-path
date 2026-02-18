---
layout: default
---

## 8.1.7 实战 B：父子索引 (Parent-Child)

<div class="h-[400px] w-full mt-6">
  <ChunkingDemoParentChild />
</div>

<div class="mt-4 text-center text-xs text-slate-500">
  检索的是“子片段”（精准定位），但喂给 LLM 的是“父窗口”（完整上下文）。
</div>

<!--
（交互演示）
点击 **仅检索子片段**：
AI 看到了一笔“50000元”的转账，但它不知道是谁转的，因为主语在上一段。

点击 **召回父窗口**：
现在，AI 看到了整个“资金分析报告”。
它终于知道这笔钱是“张三”转的了。
这就是父子索引的威力：**见树木，也见森林**。
-->