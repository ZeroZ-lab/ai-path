---
layout: default
---

## 24 OpenClaw 已明确支持的自动化能力

<div class="px-8 pt-1">
<div class="grid grid-cols-[1fr_1.5fr] gap-8 mt-4 items-stretch">
<!-- 左侧：只保留官方文档能支撑的能力 -->
<div class="flex flex-col gap-3">
<div class="bg-blue-50/80 border-2 border-blue-200 p-4 rounded-3xl shadow-sm relative">
<div class="text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest">01. CRON JOBS</div>
<div class="text-[13px] font-black text-slate-800 mb-1">Gateway 内建定时调度</div>
<p class="text-[10px] text-slate-600 leading-relaxed">OpenClaw 文档已明确支持 cron：既可以做一次性提醒，也可以做循环任务，不需要靠模型自己“记得明天再来”。</p>
</div>
<div class="bg-purple-50/80 border-2 border-purple-200 p-4 rounded-3xl shadow-sm relative">
<div class="text-[10px] font-black text-purple-600 uppercase mb-1 tracking-widest">02. HEARTBEAT + SESSION TARGET</div>
<div class="text-[13px] font-black text-slate-800 mb-1">决定它在哪个会话里跑、系统何时醒来处理</div>
<p class="text-[10px] text-slate-600 leading-relaxed">session target 决定任务放进 main、isolated 还是 custom session；heartbeat 则像系统心跳，负责定期唤醒主会话，把待处理事件真正跑起来。</p>
</div>
<div class="bg-amber-50/80 border-2 border-amber-200 p-4 rounded-3xl shadow-sm relative">
<div class="text-[10px] font-black text-amber-600 uppercase mb-1 tracking-widest">03. PERSISTENCE + RUN HISTORY</div>
<div class="text-[13px] font-black text-slate-800 mb-1">作业会保存，运行记录也能追踪</div>
<p class="text-[10px] text-slate-600 leading-relaxed">Cron job 会持久化到 Gateway 主机；run history 和持久 session 让系统重启后仍保留调度与上下文，不是每次都从零开始。</p>
</div>
</div>
<!-- 右侧：更贴近官方能力的执行流 -->
<div class="bg-[#0d1117] rounded-3xl p-6 border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden">
<div class="text-[11px] font-mono text-slate-400 mb-6 uppercase tracking-[0.2em] text-center border-b border-slate-800 pb-2">OpenClaw Cron Flow</div>
<div class="space-y-4">
<div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
<div class="flex justify-between items-center">
<div class="text-[12px] font-mono text-slate-200 font-bold">Job: 每日项目巡检</div>
<div class="text-[10px] text-slate-500 font-mono">0 7 * * *</div>
</div>
<div class="mt-2 text-[10px] text-slate-400 font-mono">stored in ~/.openclaw/cron/jobs.json</div>
</div>

<div class="grid grid-cols-3 gap-3">
<div class="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
<div class="text-[10px] font-black uppercase tracking-widest text-blue-300">session target</div>
<div class="mt-2 text-[11px] text-slate-200 font-mono">main / isolated / session:custom-id</div>
</div>
<div class="rounded-xl border border-purple-500/30 bg-purple-500/10 p-3">
<div class="text-[10px] font-black uppercase tracking-widest text-purple-300">heartbeat / wake</div>
<div class="mt-2 text-[11px] text-slate-200 font-mono">wake now / next-heartbeat</div>
</div>
<div class="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
<div class="text-[10px] font-black uppercase tracking-widest text-emerald-300">delivery</div>
<div class="mt-2 text-[11px] text-slate-200 font-mono">announce / webhook / none</div>
</div>
</div>

<div class="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
<div class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Execution Path</div>
<div class="space-y-2 font-mono text-[10px]">
<div class="flex gap-3 text-slate-300"><span class="text-blue-400">1.</span> Scheduler 到点触发 job</div>
<div class="flex gap-3 text-slate-300"><span class="text-blue-400">2.</span> 按 sessionTarget 决定跑在 main 还是 isolated</div>
<div class="flex gap-3 text-slate-300"><span class="text-blue-400">3.</span> 选择现在唤醒，或等下一次 heartbeat 再处理</div>
<div class="flex gap-3 text-slate-300"><span class="text-blue-400">4.</span> 运行结果进入 announce / webhook / none</div>
<div class="flex gap-3 text-slate-400"><span class="text-blue-400">5.</span> run history 写入 ~/.openclaw/cron/runs/...</div>
</div>
</div>

<div class="mt-auto pt-5 border-t border-slate-800">
<div class="text-[10px] font-mono text-amber-400 uppercase tracking-widest">What This Page Is Not Claiming</div>
<div class="mt-2 text-[10px] leading-relaxed text-slate-400">
这页不声称 OpenClaw 已经提供了完整的 worker 监控看板或“断点续跑到步骤 18/30”式 checkpoint UI；这里讲的是官方文档已明确的调度、唤醒、持久化与交付能力。
</div>
</div>
</div>
</div>
</div>
</div>

<!--
逐字稿：
这一页我想讲一个特别关键的变化：OpenClaw 已经不只是一次性对话了，它开始具备长期运行能力。

这里我只讲官方文档明确支持的自动化能力，不讲泛化想象。

真正关键的点不是“有没有一个酷炫 dashboard”，而是 Gateway 这一层是不是内建了 scheduler，作业能不能持久化，运行结果能不能被交付出去。

所以你可以把这一页记成四个词：cron、heartbeat、session target、delivery。

它们合在一起的意义是，OpenClaw 不再只是你问一句它答一句，而是可以被定时唤醒、跑在指定 session、按策略执行、再把结果发出去。

所以这页真正要带走的不是某个产品界面，而是一个判断：高自主性 Agent 一旦具备自动化能力，它就开始更像一个长期运行的系统。
-->
