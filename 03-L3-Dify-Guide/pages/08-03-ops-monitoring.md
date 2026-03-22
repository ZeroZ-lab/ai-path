---
layout: default
---

## 9.3 运营与监控：洞察运行状态

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- Logs -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl p-2 bg-white rounded-lg shadow-sm">📊</span>
        <h3 class="text-sm font-bold text-slate-800">日志 (Logs)</h3>
    </div>
    <p class="text-[10px] text-slate-600 mb-3 leading-relaxed">
        查看每一次真实用户的对话记录。
    </p>
    <div class="bg-white p-2 rounded border border-slate-200 text-[9px] font-mono text-slate-500 flex-1">
        [INFO] User: "Hello"<br>
        [INFO] LLM: "Hi there!"<br>
        [WARN] Latency: 3.2s
    </div>
</div>

<!-- Annotation -->
<div v-click class="rounded-3xl border border-rose-100 bg-rose-50/80 p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl p-2 bg-white rounded-lg shadow-sm">🏷️</span>
        <h3 class="text-sm font-bold text-rose-900">标注 (Annotation)</h3>
    </div>
    <p class="text-[10px] text-slate-600 mb-3 leading-relaxed">
        人工修正 AI 的回复 (RLHF)。
    </p>
    <div class="bg-white p-2 rounded border border-rose-100 text-[9px] text-slate-500 flex-1">
        <div class="mb-1"><span class="text-rose-400">AI:</span> Dify is a cat.</div>
        <div class="mb-1"><span class="text-green-600">Human:</span> Dify is an LLM platform.</div>
        <div class="mt-2 text-rose-600 bg-rose-50 px-1 rounded w-fit">Save to Dataset</div>
    </div>
    <p class="text-[9px] text-slate-400 mt-2">
        下次遇到类似问题，优先使用标注回复。
    </p>
</div>

<!-- Monitoring -->
<div v-click class="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl p-2 bg-white rounded-lg shadow-sm">📈</span>
        <h3 class="text-sm font-bold text-indigo-900">监控 (Monitoring)</h3>
    </div>
    <p class="text-[10px] text-slate-600 mb-3 leading-relaxed">
        宏观数据看板。
    </p>
    <div class="grid grid-cols-2 gap-2 flex-1">
        <div class="bg-white p-2 rounded border border-indigo-100 text-center">
            <div class="text-[9px] text-slate-400">Token Cost</div>
            <div class="text-xs font-bold text-indigo-600">$0.52</div>
        </div>
        <div class="bg-white p-2 rounded border border-indigo-100 text-center">
            <div class="text-[9px] text-slate-400">Msg Count</div>
            <div class="text-xs font-bold text-indigo-600">1,204</div>
        </div>
        <div class="bg-white p-2 rounded border border-indigo-100 text-center col-span-2">
            <div class="text-[9px] text-slate-400">Avg Latency</div>
            <div class="text-xs font-bold text-indigo-600">800ms</div>
        </div>
    </div>
</div>

</div>

<!--
（点击 1）**日志**：这是你的“监控摄像头”。用户到底问了什么？有没有恶意攻击？在这里一清二楚。
（点击 2）**标注**：这是 Dify 最人性化的功能。如果发现 AI 答错了，你可以直接在日志里“手写”一个标准答案并保存。下次 AI 再遇到类似问题，就会优先用你教给它的这句话。这就是“越用越聪明”的秘密。
（点击 3）**监控**：最后是给老板看的报表。Token 花了多少钱？每天有多少活跃用户？数据一目了然，方便做成本控制。
-->