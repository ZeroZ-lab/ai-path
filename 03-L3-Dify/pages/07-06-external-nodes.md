---
layout: default
---

## 7.6 连接外部世界：HTTP & Tools

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- HTTP Request -->
<div class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-5 shadow-md hover:shadow-lg transition-shadow">
    <div class="text-4xl mb-4">🌐</div>
    <h3 class="text-sm font-bold text-cyan-900 mb-2">HTTP Request</h3>
    <p class="text-[10px] text-slate-600 mb-4">
        通用的 API 调用器。支持 GET/POST/PUT 等方法。
    </p>
    <div class="bg-white p-2 rounded border border-cyan-100 text-[9px] font-mono text-slate-500">
        POST https://api.example.com/v1/webhook
    </div>
</div>

<!-- Tools -->
<div class="rounded-3xl border border-orange-100 bg-orange-50/80 p-5 shadow-md hover:shadow-lg transition-shadow">
    <div class="text-4xl mb-4">🧰</div>
    <h3 class="text-sm font-bold text-orange-900 mb-2">Tools (工具)</h3>
    <p class="text-[10px] text-slate-600 mb-4">
        调用 Dify 内置或自定义工具。
    </p>
    <div class="flex flex-wrap gap-2">
        <span class="bg-white px-2 py-1 rounded border border-orange-100 text-[9px] text-slate-500">Google Search</span>
        <span class="bg-white px-2 py-1 rounded border border-orange-100 text-[9px] text-slate-500">Wikipedia</span>
        <span class="bg-white px-2 py-1 rounded border border-orange-100 text-[9px] text-slate-500">DALL-E 3</span>
    </div>
</div>

<!-- Knowledge Retrieval -->
<div class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-md hover:shadow-lg transition-shadow">
    <div class="text-4xl mb-4">📚</div>
    <h3 class="text-sm font-bold text-blue-900 mb-2">Knowledge Retrieval</h3>
    <p class="text-[10px] text-slate-600 mb-4">
        从知识库中检索相关分段。
    </p>
    <div class="bg-white p-2 rounded border border-blue-100 text-[9px] text-slate-500 flex items-center gap-2">
        <span class="i-carbon-search"></span>
        <span>Query: {{ user_input }}</span>
    </div>
</div>

</div>
