---
layout: default
---

## 10.3 检索与排序：RAG 的最后两公里

<div class="flex flex-col justify-center h-full">

<div class="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_0.8fr] items-center">

<!-- 1. Hybrid Search -->
<div class="rounded-3xl border border-blue-100 bg-blue-50/80 p-4 shadow-sm h-full flex flex-col">
    <div class="flex items-center gap-2 mb-2">
        <span class="text-xl bg-white rounded-xl p-1.5 shadow-sm">🔍</span>
        <h3 class="text-sm font-bold text-blue-900">混合检索 (Hybrid)</h3>
    </div>
    <p class="text-[9px] text-slate-600 mb-2 flex-1 leading-relaxed">
        同时进行“关键词搜索”和“向量搜索”，然后合并结果。
    </p>
    <div class="flex justify-center gap-1 text-[9px] font-mono">
        <span class="bg-white border border-blue-200 px-1.5 py-0.5 rounded text-blue-600">Key</span>
        <span>+</span>
        <span class="bg-white border border-blue-200 px-1.5 py-0.5 rounded text-blue-600">Vec</span>
    </div>
</div>

<!-- Arrow -->
<div class="i-carbon-arrow-right text-lg text-slate-300"></div>

<!-- 2. Rerank -->
<div class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-4 shadow-sm h-full flex flex-col">
    <div class="flex items-center gap-2 mb-2">
        <span class="text-xl bg-white rounded-xl p-1.5 shadow-sm">⚖️</span>
        <h3 class="text-sm font-bold text-emerald-900">重排序 (Rerank)</h3>
    </div>
    <p class="text-[9px] text-slate-600 mb-2 flex-1 leading-relaxed">
        使用专门的 Rerank 模型对初步召回的结果进行二次打分和排序。
    </p>
    <div class="bg-white p-1.5 rounded border border-emerald-100">
        <div class="flex justify-between text-[9px] text-emerald-800 border-b border-emerald-50 pb-0.5 mb-0.5">
            <span>A</span> <span class="font-bold">0.98</span>
        </div>
        <div class="flex justify-between text-[9px] text-slate-400">
            <span>B</span> <span>0.42</span>
        </div>
    </div>
</div>

<!-- Result Arrow -->
<div class="flex flex-col items-center gap-1 text-slate-400">
    <div class="bg-slate-800 text-white px-1.5 py-0.5 rounded text-[8px] font-bold">Top K</div>
    <div class="i-carbon-arrow-right text-lg"></div>
</div>

<!-- 3. LLM -->
<div class="rounded-3xl border border-purple-100 bg-purple-50/80 p-4 shadow-sm h-full flex flex-col items-center justify-center text-center">
    <div class="text-3xl mb-2">🤖</div>
    <h3 class="text-sm font-bold text-purple-900 mb-1">LLM</h3>
    <p class="text-[9px] text-slate-600 leading-tight">
        基于 Top K 生成最终回答
    </p>
</div>

</div>

<div class="mt-8 flex justify-center">
    <div class="rounded-xl bg-slate-50 border border-slate-200 px-4 py-2 text-[10px] text-slate-600 flex items-center gap-2 shadow-sm">
        <span class="i-carbon-settings-adjust text-slate-400"></span>
        <span><strong>Score Threshold (分数阈值):</strong> 设定最低分（如 0.5），过滤掉相关度低的噪音，这是减少幻觉的关键防线。</span>
    </div>
</div>

<div class="mt-4 text-center">
    <span class="inline-block px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold shadow-sm">
        💡 黄金组合：混合检索 + Rerank 重排序 = 最高准确率
    </span>
</div>

</div>
