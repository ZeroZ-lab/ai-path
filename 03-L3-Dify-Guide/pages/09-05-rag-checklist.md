---
layout: default
---

## 7.5 避坑指南：RAG 调优黄金清单

<div class="mt-6 grid gap-6 md:grid-cols-2 items-stretch">

  <!-- Case 1: Miss -->
  <div v-click class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
      <div class="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">1</div>
      <div>
        <h3 class="text-sm font-bold text-slate-800">搜不到相关文档</h3>
        <p class="text-[10px] text-slate-400">Recall Rate Low</p>
      </div>
    </div>
    <ul class="text-[10px] text-slate-600 space-y-2 list-disc pl-4 flex-1">
      <li><strong>开启混合检索：</strong> 可能是关键词匹配不到（如专有名词），也可能是语义匹配不到。混合检索能互补。</li>
      <li><strong>减小分段长度：</strong> 切片太大包含了太多噪音，导致相关性分数被稀释。</li>
      <li><strong>优化切分符：</strong> 检查是否把关键句子切断了。</li>
    </ul>
  </div>

  <!-- Case 2: Wrong Rank -->
  <div v-click class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
      <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs">2</div>
      <div>
        <h3 class="text-sm font-bold text-slate-800">搜到了，但排在第 5 名</h3>
        <p class="text-[10px] text-slate-400">Ranking Issue</p>
      </div>
    </div>
    <ul class="text-[10px] text-slate-600 space-y-2 list-disc pl-4 flex-1">
      <li><strong>必须开启 Rerank：</strong> Embedding 只能看大概，Rerank 才能精排。</li>
      <li><strong>增加 Top K：</strong> 比如先召回 20 个给 Rerank 挑，而不是只召回 3 个（可能前 3 个都是错的）。</li>
    </ul>
  </div>

  <!-- Case 3: Hallucination -->
  <div v-click class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
      <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">3</div>
      <div>
        <h3 class="text-sm font-bold text-slate-800">胡说八道 / 答非所问</h3>
        <p class="text-[10px] text-slate-400">Hallucination</p>
      </div>
    </div>
    <ul class="text-[10px] text-slate-600 space-y-2 list-disc pl-4 flex-1">
      <li><strong>调高相似度阈值 (Threshold)：</strong> 设置为 0.5 或 0.6。告诉系统：“如果搜不到高质量的证据，宁可回答‘不知道’，也不要强行回答。”</li>
      <li><strong>修改系统提示词：</strong> 明确加上“请严格基于上下文回答”。</li>
    </ul>
  </div>

  <!-- Case 4: Context Loss -->
  <div v-click class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3 border-b border-slate-100 pb-2">
      <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">4</div>
      <div>
        <h3 class="text-sm font-bold text-slate-800">回答不完整 / 断章取义</h3>
        <p class="text-[10px] text-slate-400">Context Missing</p>
      </div>
    </div>
    <ul class="text-[10px] text-slate-600 space-y-2 list-disc pl-4 flex-1">
      <li><strong>开启父子索引 (Parent-Child)：</strong> 找回丢失的上下文。</li>
      <li><strong>增加重叠 (Overlap)：</strong> 确保句子没有被腰斩。</li>
    </ul>
  </div>

</div>

<!--
最后，我送给大家一份“调优黄金清单”。
以后你们在项目中遇到问题，就按这个清单去查：
- 搜不到？开混合检索。
- 排序错？开 Rerank。
- 胡说八道？调阈值。
- 断章取义？开父子索引。

这张图价值千金，建议大家拍照保存。
-->