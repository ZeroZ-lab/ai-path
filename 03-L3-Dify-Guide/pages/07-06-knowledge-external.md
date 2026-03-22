---
layout: default
---

## 7.6 知识与外部工具：Knowledge & External

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">

<!-- Knowledge Retrieval -->
<div class="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 shadow-md flex flex-col">
    <div class="flex items-center gap-4 mb-4">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm text-indigo-600">📚</div>
        <div>
            <h3 class="text-lg font-bold text-indigo-900">知识库检索</h3>
            <p class="text-xs text-indigo-700">Knowledge Retrieval</p>
        </div>
    </div>
    <div class="bg-white rounded-2xl p-4 border border-indigo-100 flex-1">
        <div class="flex items-center gap-2 mb-3 bg-indigo-50 p-2 rounded border border-indigo-100">
            <span class="i-carbon-search text-indigo-400"></span>
            <span class="text-[10px] text-slate-600">Query: {{ user_input }}</span>
        </div>
        <p class="text-[10px] text-slate-500 leading-relaxed">
            核心 RAG 节点。从已索引的文档中召回最相关的切片，作为上下文传递给 LLM。
        </p>
    </div>
</div>

<!-- External Tools (Plugin/MCP) -->
<div class="rounded-3xl border border-pink-100 bg-pink-50/80 p-6 shadow-md flex flex-col">
    <div class="flex items-center gap-4 mb-4">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm text-pink-600">🧩</div>
        <div>
            <h3 class="text-lg font-bold text-pink-900">外部工具</h3>
            <p class="text-xs text-pink-700">Plugins & MCP</p>
        </div>
    </div>
    <div class="bg-white rounded-2xl p-4 border border-pink-100 flex-1 space-y-3">
        <div class="grid grid-cols-2 gap-2">
            <div class="bg-pink-50 p-2 rounded text-[10px] text-center text-pink-800 font-bold">Built-in</div>
            <div class="bg-pink-50 p-2 rounded text-[10px] text-center text-pink-800 font-bold">Custom</div>
        </div>
        <p class="text-[10px] text-slate-500 leading-relaxed">
            <strong>内置插件：</strong> Google Search, DALL-E 3, Wikipedia...<br>
            <strong>自定义：</strong> 通过 API 定义或 MCP 协议接入私有工具。
        </p>
    </div>
</div>

</div>
