---
layout: default
---

## 7.2 交互与触发：从开始到结束

<div class="grid gap-6 md:grid-cols-2 mt-6 mb-6 items-stretch" v-pre>

<!-- 1. Trigger (Start) -->
<div class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm flex flex-col hover:bg-blue-100/80 transition-colors">
    <div class="flex items-center gap-3 mb-2 pb-2 border-b border-blue-200">
        <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl">▶️</div>
        <div>
            <h3 class="text-sm font-bold text-blue-900">Start (Trigger)</h3>
            <span class="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">Workflow Only</span>
        </div>
    </div>
    <p class="text-xs text-slate-600 leading-relaxed mb-2">
        用于自动化场景。通过 API 调用或定时任务触发工作流，通常不需要人工干预。
    </p>
    <div class="bg-white p-2 rounded border border-blue-100 text-[10px] text-slate-500 font-mono">
        Trigger: Cron / Webhook
    </div>
</div>

<!-- 2. User Input -->
<div class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm flex flex-col hover:bg-amber-100/80 transition-colors">
    <div class="flex items-center gap-3 mb-2 pb-2 border-b border-amber-200">
        <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-xl">🙋</div>
        <div>
            <h3 class="text-sm font-bold text-amber-900">User Input</h3>
            <span class="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">Chatflow & Workflow</span>
        </div>
    </div>
    <p class="text-xs text-slate-600 leading-relaxed mb-2">
        用于需要<strong>人工填写表单</strong>启动的场景。定义好输入字段（如文本、文件），用户填完后流程开始。
    </p>
    <div class="bg-white p-2 rounded border border-amber-100 text-[10px] text-slate-500">
        Form: { Name, File, Option }
    </div>
</div>

<!-- 3. Answer -->
<div class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-5 shadow-sm flex flex-col hover:bg-cyan-100/80 transition-colors">
    <div class="flex items-center gap-3 mb-2 pb-2 border-b border-cyan-200">
        <div class="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center text-xl">💬</div>
        <div>
            <h3 class="text-sm font-bold text-cyan-900">Answer (直接回复)</h3>
            <span class="text-[9px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-bold">Chatflow Only</span>
        </div>
    </div>
    <p class="text-xs text-slate-600 leading-relaxed mb-2">
        像打字机一样<strong>流式输出</strong>内容给用户。支持在一个流程中多次使用。
    </p>
    <div class="bg-white p-2 rounded border border-cyan-100 text-[10px] text-slate-500 animate-pulse">
        Typing... ▌
    </div>
</div>

<!-- 4. End -->
<div class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm flex flex-col hover:bg-purple-100/80 transition-colors">
    <div class="flex items-center gap-3 mb-2 pb-2 border-b border-purple-200">
        <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xl">🏁</div>
        <div>
            <h3 class="text-sm font-bold text-purple-900">End (结束)</h3>
            <span class="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">Workflow Only</span>
        </div>
    </div>
    <p class="text-xs text-slate-600 leading-relaxed mb-2">
        定义 API 最终返回的<strong>结构化数据</strong> (JSON)。
    </p>
    <div class="bg-white p-2 rounded border border-purple-100 text-[10px] text-slate-500 font-mono">
        Return: { "code": 200, "data": ... }
    </div>
</div>

</div>