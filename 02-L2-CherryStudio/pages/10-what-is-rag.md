---
layout: default
---

## 5.3 什么是 RAG (检索增强生成)

<div class="grid gap-6 md:grid-cols-2 mt-4 items-stretch">

<!-- Left: Retrieval -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-5 shadow-[0_15px_30px_rgba(16,185,129,0.1)] flex flex-col relative overflow-hidden group">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-2">Step 1</div>
  <h3 class="text-xl font-bold text-emerald-900 mb-3">检索 (Retrieval)</h3>
  
  <div class="space-y-3 flex-1">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-emerald-600 shrink-0">🔍</div>
      <div>
        <h4 class="font-bold text-slate-800 text-sm">在你的知识库中「搜索」</h4>
        <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">将用户问题与你的私有文档（如 PDF, Word）进行语义匹配。</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-emerald-600 shrink-0">📄</div>
      <div>
        <h4 class="font-bold text-slate-800 text-sm">找出「最相关」的片段</h4>
        <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">不是全部文档，而是精准定位到与问题高度匹配的信息。</p>
      </div>
    </div>
  </div>
  <div class="absolute -bottom-4 -right-4 text-8xl opacity-5 text-emerald-900">📚</div>
</div>

<!-- Right: Generation -->
<div class="rounded-[32px] border border-purple-100 bg-purple-50/80 p-5 shadow-[0_15px_30px_rgba(147,51,234,0.1)] flex flex-col relative overflow-hidden group">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500 mb-2">Step 2</div>
  <h3 class="text-xl font-bold text-purple-900 mb-3">生成 (Generation)</h3>
  
  <div class="space-y-3 flex-1">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-purple-600 shrink-0">🧠</div>
      <div>
        <h4 class="font-bold text-slate-800 text-sm">结合「上下文」思考</h4>
        <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">将找到的相关片段作为额外信息，提供给大模型。</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-purple-600 shrink-0">✍️</div>
      <div>
        <h4 class="font-bold text-slate-800 text-sm">生成「有依据」的答案</h4>
        <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">模型基于这些信息来组织语言，给出精确且不幻觉的回答。</p>
      </div>
    </div>
  </div>
  <div class="absolute -bottom-4 -right-4 text-8xl opacity-5 text-purple-900">✨</div>
</div>

</div>

<div class="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-3 flex items-center justify-center gap-3 shadow-sm">
    <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg shadow-inner">💡</div>
    <div class="text-xs text-slate-700">
        RAG 就像给 AI 提供了一本「参考书」，确保它能根据权威资料回答问题，避免「一本正经的胡说」。
    </div>
</div>
