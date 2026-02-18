---
layout: default
---

## 8.1.6 实战 A：QA 问答对 (QA Split)

<div class="h-[400px] w-full mt-6">
  <ChunkingDemoQA />
</div>

<div class="mt-4 text-center text-xs text-slate-500">
  如果不进行特殊的 QA 处理，Excel 里的“问”和“答”很容易被切断，导致检索失效。
</div>

<!--
（交互演示）
点击 **普通硬切**：
你看，问题是“报销标准”，但答案“200元”被切到下一段去了。
检索的时候只搜到了问题，没搜到答案。AI 就傻了。

点击 **QA 分段**：
Dify 能够识别 Excel 的问答结构，强制把 Q 和 A 绑在一起。
这样搜 Q 就能带出 A。
-->