---
layout: default
---

## 4.2 核心配置：Prompt 编排与传参

<div class="grid gap-6 md:grid-cols-2 mt-6 items-stretch">

<!-- Node 1 Config -->
<div v-click class="rounded-3xl border border-blue-100 bg-white p-6 shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center justify-between mb-4 pb-2 border-b border-blue-50">
        <div class="flex items-center gap-2">
            <span class="text-2xl">📑</span>
            <span class="text-base font-bold text-slate-800">节点 1：生成大纲</span>
        </div>
        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">LLM</span>
    </div>
    <div class="space-y-4 flex-1">
        <div>
            <div class="text-xs font-bold text-slate-400 mb-1">SYSTEM PROMPT</div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm text-slate-600 font-mono leading-relaxed">
                你是一个资深编辑。请根据主题 <span class="text-purple-600 bg-purple-50 px-1.5 rounded font-bold">{{ topic }}</span> 生成文章大纲。
            </div>
        </div>
        <div>
            <div class="text-xs font-bold text-slate-400 mb-1">VARIABLE</div>
            <div class="flex items-center gap-2 text-xs">
                <span class="text-slate-500">topic</span>
                <span class="i-carbon-arrow-right text-slate-300"></span>
                <span class="bg-slate-100 px-2 py-1 rounded text-slate-600 font-bold">Start.topic</span>
            </div>
        </div>
    </div>
</div>

<!-- Node 2 Config -->
<div v-click class="rounded-3xl border border-purple-100 bg-white p-6 shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center justify-between mb-4 pb-2 border-b border-purple-50">
        <div class="flex items-center gap-2">
            <span class="text-2xl">✍️</span>
            <span class="text-base font-bold text-slate-800">节点 2：撰写初稿</span>
        </div>
        <span class="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">LLM</span>
    </div>
    <div class="space-y-4 flex-1">
        <div>
            <div class="text-xs font-bold text-slate-400 mb-1">SYSTEM PROMPT</div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm text-slate-600 font-mono leading-relaxed">
                请根据以下大纲撰写正文：<br>
                <span class="text-blue-600 bg-blue-50 px-1.5 rounded font-bold">{{ outline }}</span>
            </div>
        </div>
        <div>
            <div class="text-xs font-bold text-slate-400 mb-1">VARIABLE</div>
            <div class="flex items-center gap-2 text-xs">
                <span class="text-slate-500">outline</span>
                <span class="i-carbon-arrow-right text-slate-300"></span>
                <span class="bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold">Node1.text</span>
            </div>
        </div>
    </div>
</div>

</div>

<div v-click class="mt-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-center shadow-sm transition-all duration-500">
    <p class="text-sm text-amber-800">
        🔑 <strong>关键点：</strong> 后一个节点的输入变量，必须选择前一个节点的输出（Output）。
    </p>
</div>

<!--
配置节点其实就是在**做填空题**。

（点击 1）第一个空：‘请根据主题 [  ] 生成大纲’。这个方括号里填什么？我们要填入 **Start 节点送进来的 topic**。这样大纲专家才知道写什么。

（点击 2）第二个空：‘请根据大纲 [  ] 写文章’。这个方括号里填什么？我们要填入 **Node 1（大纲专家）吐出来的文本**。

（点击 3）这就是“传参”。就像接力跑一样，第一棒跑完，要把棒子（大纲）递给第二棒。如果选错了，第二棒手里就是空的，流程就会卡死。

很多同学运行报错，90% 都是因为**填错了空**，引用了不存在的变量。
-->