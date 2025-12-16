---
layout: default
---

## 9.1 索引模式：高质量 vs 经济

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">

<!-- High Quality -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg flex flex-col relative overflow-hidden group">
    <div class="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">推荐 (Recommended)</div>
    <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm text-blue-600">💎</div>
        <div>
            <h3 class="text-xl font-bold text-blue-900">高质量 (High Quality)</h3>
            <p class="text-xs text-blue-600">Embedding 向量化</p>
        </div>
    </div>
    <div class="space-y-4 flex-1">
        <div class="bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
            <div class="text-xs font-bold text-slate-700 mb-1">原理</div>
            <p class="text-[10px] text-slate-500 leading-relaxed">
                调用 Embedding 模型（如 OpenAI, BGE）将文本转化为<strong>向量</strong>。
            </p>
        </div>
        <div class="bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
            <div class="text-xs font-bold text-slate-700 mb-1">优势</div>
            <p class="text-[10px] text-slate-500 leading-relaxed">
                支持<strong>语义检索</strong>。即使用户的提问和文档用词不完全一致（如“猫”vs“喵星人”），也能准确召回。
            </p>
        </div>
    </div>
    <div class="mt-4 flex items-center gap-2 text-[10px] text-blue-400">
        <span class="i-carbon-information text-sm"></span>
        <span>消耗 Token，产生少量费用。</span>
    </div>
</div>

<!-- Economical -->
<div class="rounded-[32px] border border-slate-200 bg-slate-50/80 p-6 shadow-lg flex flex-col relative overflow-hidden group">
    <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm text-slate-600">💰</div>
        <div>
            <h3 class="text-xl font-bold text-slate-900">经济 (Economical)</h3>
            <p class="text-xs text-slate-600">Keyword 关键词索引</p>
        </div>
    </div>
    <div class="space-y-4 flex-1">
        <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
            <div class="text-xs font-bold text-slate-700 mb-1">原理</div>
            <p class="text-[10px] text-slate-500 leading-relaxed">
                使用传统的<strong>倒排索引</strong>技术（类似 SQL 的 LIKE 查询或 Lucene）。
            </p>
        </div>
        <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
            <div class="text-xs font-bold text-slate-700 mb-1">优势</div>
            <p class="text-[10px] text-slate-500 leading-relaxed">
                <strong>完全免费</strong>，无需调用模型 API。离线可用，构建速度极快。
            </p>
        </div>
    </div>
    <div class="mt-4 flex items-center gap-2 text-[10px] text-slate-400">
        <span class="i-carbon-warning text-sm"></span>
        <span>仅支持精确匹配，语义理解能力弱。</span>
    </div>
</div>

</div>
