## 2.1 为什么大模型可以做到？

<div class="h-full flex flex-col py-6">
过去一年，硅谷发生一个怪事：

<div class="py-3">
<v-clicks>

- Youtube 视频被自动剪得比人工快
- 律所开始让 GPT 读案例并生成“案件路线图”
- 华尔街让模型直接读 SEC 文档并做估值
- 医院让 GPT 做初步问诊分诊
- 游戏公司让 GPT 自动生成整个任务系统

</v-clicks>
</div>
<div v-click class="question-callout mt-6">
  <p>这些事原本需要不同职业的人类，但现在几乎同一种智能系统都能做。</p>
  <p>一个系统，怎么可能跨这么多领域？</p>
</div>
</div>



<style scoped>
.question-callout {
  @apply border border-slate-200 rounded-3xl bg-white/70 p-4 text-slate-800 shadow-lg;
}
.question-label {
  @apply text-xs uppercase tracking-widest font-semibold text-slate-500 mb-1 inline-block;
}
.question-callout p {
  @apply text-base font-medium;
}
</style>

<!--
过去一年里，硅谷发生了一件相当反直觉的现象。
我们原本的认知是：
视频剪辑是专业的视频剪辑师的职责，
研读法律案例是律师的专长，
分析 SEC 财报是金融分析师的核心工作，
初步问诊和分诊属于医生的范畴，
而设计复杂的任务系统则是游戏策划的创意领域。

然而，令人惊讶的是——
现在你却会发现，几乎同一种 AI，正在同时处理所有这些原本属于不同专业的工作。

这是因为，传统 AI 的设计逻辑是高度专一化的：
“一个模型 = 一项任务”。
这意味着，你需要为视频剪辑开发一套特定的模型，
为法律分析构建一套专门的模型，
医疗、金融、游戏等各个领域，都需要重新开发一套专属的 AI 系统。

那么现在，一个核心问题摆在我们面前：
为什么同一个智能系统，竟然能够横跨如此多的专业领域？

它究竟学习到了什么？
仅仅是知识的累积吗？
是特定技能的掌握吗？
还是，它学习到了某种更根本、更底层的逻辑？
-->
