---
layout: default
---

## 7.2 核心配置：Prompt 编排与传参

<div class="grid gap-6 md:grid-cols-2 mt-6 items-stretch">

<!-- Node 1 Config -->
<div class="rounded-3xl border border-blue-100 bg-white p-5 shadow-md flex flex-col">
    <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-50">
        <div class="flex items-center gap-2">
            <span class="text-xl">📑</span>
            <span class="text-sm font-bold text-slate-800">节点 1：生成大纲</span>
        </div>
        <span class="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">LLM</span>
    </div>
    <div class="space-y-3 flex-1">
        <div>
            <div class="text-[10px] font-bold text-slate-400 mb-1">SYSTEM PROMPT</div>
            <div class="bg-slate-50 p-2 rounded border border-slate-100 text-[10px] text-slate-600 font-mono">
                你是一个资深编辑。请根据主题 <span class="text-purple-600 bg-purple-50 px-1 rounded">{{ topic }}</span> 生成文章大纲。
            </div>
        </div>
        <div>
            <div class="text-[10px] font-bold text-slate-400 mb-1">VARIABLE</div>
            <div class="flex items-center gap-2 text-[10px]">
                <span class="text-slate-500">topic</span>
                <span class="i-carbon-arrow-right text-slate-300"></span>
                <span class="bg-slate-100 px-1 rounded text-slate-600">Start.topic</span>
            </div>
        </div>
    </div>
</div>

<!-- Node 2 Config -->
<div class="rounded-3xl border border-purple-100 bg-white p-5 shadow-md flex flex-col">
    <div class="flex items-center justify-between mb-3 pb-2 border-b border-purple-50">
        <div class="flex items-center gap-2">
            <span class="text-xl">✍️</span>
            <span class="text-sm font-bold text-slate-800">节点 2：撰写初稿</span>
        </div>
        <span class="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded">LLM</span>
    </div>
    <div class="space-y-3 flex-1">
        <div>
            <div class="text-[10px] font-bold text-slate-400 mb-1">SYSTEM PROMPT</div>
            <div class="bg-slate-50 p-2 rounded border border-slate-100 text-[10px] text-slate-600 font-mono">
                请根据以下大纲撰写正文：<br>
                <span class="text-blue-600 bg-blue-50 px-1 rounded">{{ outline }}</span>
            </div>
        </div>
        <div>
            <div class="text-[10px] font-bold text-slate-400 mb-1">VARIABLE</div>
            <div class="flex items-center gap-2 text-[10px]">
                <span class="text-slate-500">outline</span>
                <span class="i-carbon-arrow-right text-slate-300"></span>
                <span class="bg-blue-50 text-blue-600 px-1 rounded">Node1.text</span>
            </div>
        </div>
    </div>
</div>

</div>

<div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-3 text-center shadow-sm">
    <p class="text-xs text-amber-800">
        🔑 <strong>关键点：</strong> 后一个节点的输入变量，必须选择前一个节点的输出（Output）。
    </p>
</div>
