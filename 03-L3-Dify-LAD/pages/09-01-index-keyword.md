---
layout: default
---

## 9.1.1 经济模式：Keyword Index (关键词索引)

<div class="grid gap-8 md:grid-cols-[1.2fr_1fr] mt-8 items-center">

<!-- Left: Concept -->
<div class="space-y-6">
    <div class="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl bg-white p-2 rounded-xl shadow-sm border border-slate-100">📖</span>
            <div>
                <h3 class="text-lg font-bold text-slate-900">倒排索引 (Inverted Index)</h3>
                <p class="text-xs text-slate-500">就像书后的“索引页”或查字典。</p>
            </div>
        </div>
        <p class="text-sm text-slate-700 leading-relaxed">
            系统将文档切分后，提取出所有关键词 (Tokens)，建立一张“词 -> 文档”的映射表。
            当用户搜索时，直接查找包含该关键词的文档片段。
        </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <div class="text-xs font-bold text-emerald-800 mb-1">✅ 优势</div>
            <ul class="text-[10px] text-emerald-700 space-y-1 list-disc pl-4">
                <li><strong>精确匹配：</strong> 搜 "Error 503"，绝不会给你 "Error 404"。</li>
                <li><strong>零成本：</strong> 无需调用 OpenAI，不需要 Token。</li>
                <li><strong>速度快：</strong> 纯算法匹配，毫秒级响应。</li>
            </ul>
        </div>
        <div class="p-4 rounded-2xl bg-rose-50 border border-rose-100">
            <div class="text-xs font-bold text-rose-800 mb-1">❌ 劣势</div>
            <ul class="text-[10px] text-rose-700 space-y-1 list-disc pl-4">
                <li><strong>不懂语义：</strong> 搜“苹果手机”，可能搜不到“iPhone”。</li>
                <li><strong>同义词失效：</strong> 搜“开心”，搜不到“快乐”。</li>
            </ul>
        </div>
    </div>
</div>

<!-- Right: Visual -->
<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg flex flex-col items-center justify-center h-full">
    <div class="w-full space-y-4 font-mono text-[10px]">
        <!-- Query -->
        <div class="flex items-center gap-2 mb-6">
            <span class="text-slate-400">Query:</span>
            <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">"Dify"</span>
        </div>
        <!-- Index Table -->
        <div class="border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-slate-100 p-2 flex justify-between font-bold text-slate-600">
                <span>Keyword</span>
                <span>Doc ID</span>
            </div>
            <div class="bg-white p-2 flex justify-between border-b border-slate-100">
                <span>AI</span>
                <span>[1, 3, 5]</span>
            </div>
            <div class="bg-blue-50 p-2 flex justify-between border-b border-blue-100 font-bold text-blue-700">
                <span>Dify</span>
                <span>[2, 8]</span>
            </div>
            <div class="bg-white p-2 flex justify-between">
                <span>RAG</span>
                <span>[4, 7]</span>
            </div>
        </div>
        <!-- Result -->
        <div class="flex justify-center mt-4">
            <div class="i-carbon-arrow-down text-xl text-slate-300"></div>
        </div>
        <div class="bg-blue-600 text-white p-2 rounded text-center shadow-md">
            Match: Doc 2, Doc 8
        </div>
    </div>
</div>

</div>
