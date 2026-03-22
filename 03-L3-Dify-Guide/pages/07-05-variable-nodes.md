---
layout: default
---

## 7.5 记忆与变量：读写操作

<div class="grid gap-10 md:grid-cols-2 mt-10 items-center">

<!-- Assigner (Write) -->
<div class="relative group">
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-[32px] opacity-20 group-hover:opacity-40 transition duration-500"></div>
    <div class="relative rounded-[30px] bg-white p-6 shadow-xl border border-slate-100">
        <div class="flex items-center justify-between mb-6">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 text-3xl flex items-center justify-center shadow-inner">💾</div>
            <div class="text-right">
                <h3 class="text-lg font-bold text-slate-800">Assigner</h3>
                <p class="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Write Variable</p>
            </div>
        </div>
        <div class="space-y-3">
            <div class="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span class="text-xs font-mono text-slate-500">conversation.score</span>
                <span class="i-carbon-arrow-right text-slate-400"></span>
                <span class="text-xs font-mono text-blue-600 font-bold">100</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
                <strong>作用：</strong> 向会话变量写入数据。<br>
                <strong>场景：</strong> 记录用户偏好、累计积分、保存中间状态（长期记忆）。
            </p>
        </div>
    </div>
</div>

<!-- Parameter Extractor (Read/Extract) -->
<div class="relative group">
    <div class="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-[32px] opacity-20 group-hover:opacity-40 transition duration-500"></div>
    <div class="relative rounded-[30px] bg-white p-6 shadow-xl border border-slate-100">
        <div class="flex items-center justify-between mb-6">
            <div class="w-14 h-14 rounded-2xl bg-purple-50 text-3xl flex items-center justify-center shadow-inner">⛏️</div>
            <div class="text-right">
                <h3 class="text-lg font-bold text-slate-800">Param Extractor</h3>
                <p class="text-[10px] text-purple-500 font-bold uppercase tracking-widest">Extract Intent</p>
            </div>
        </div>
        <div class="space-y-3">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <div class="text-slate-400 mb-1">"订明天去北京的票"</div>
                <div class="flex gap-2">
                    <span class="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">time: tomorrow</span>
                    <span class="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">loc: Beijing</span>
                </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
                <strong>作用：</strong> 利用 LLM 从自然语言中提取结构化参数。<br>
                <strong>场景：</strong> 工具调用前的参数准备、意图识别。
            </p>
        </div>
    </div>
</div>

</div>
