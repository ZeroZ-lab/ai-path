---
layout: default
---

## 15 记忆系统：从 Prompt 视角拆解

<div class="px-8 pt-2">
<div class="flex items-stretch gap-4 mt-8">
<!-- Stage 1: 感知记忆 (Sensory) -->
<div class="flex-1 bg-emerald-50/50 border-2 border-emerald-200/50 rounded-3xl p-5 shadow-sm relative">
<div class="absolute -top-4 left-6 bg-emerald-500 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-md">Stage 1: 原始感知</div>
<div class="text-3xl mb-3">📡</div>
<h3 class="font-black text-emerald-900 text-base mb-1">感知记忆<br/><span class="text-[10px] text-emerald-600 font-mono">(Tool Output Buffer)</span></h3>
<div class="text-[11px] text-slate-600 leading-relaxed bg-white/50 p-3 rounded-xl border border-emerald-100/50">
<b>本质：工具返回的原始数据。</b><br/>
比如：读取的 1000 行日志、网页爬取的 HTML 源码。
</div>
<div class="mt-4 p-2 bg-emerald-100/30 rounded-lg border border-emerald-200 text-[10px] text-emerald-800">
💡 <b>只存在于当前 Turn：</b> 模型“扫描”完立即丢弃，不进历史。
</div>
</div>
<div class="flex items-center text-slate-300">➜</div>
<!-- Stage 2: 工作记忆 (Working) -->
<div class="flex-1 bg-blue-50 border-2 border-blue-400 rounded-3xl p-5 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)] relative z-10 scale-105 border-dashed">
<div class="absolute -top-4 left-6 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-lg">Stage 2: 核心对话</div>
<div class="text-3xl mb-3">💬</div>
<h3 class="font-black text-blue-900 text-base mb-1">工作记忆<br/><span class="text-[10px] text-blue-600 font-mono">(Chat History / Context)</span></h3>
<div class="text-[11px] text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-blue-200 shadow-sm">
<b>本质：提炼后的对话记录。</b><br/>
比如：你和 AI 的问答、AI 对原始数据的总结。
</div>
<div class="mt-4 p-2 bg-blue-100/30 rounded-lg border border-blue-200 text-[10px] text-blue-800">
💡 <b>持久跟随：</b> 每一轮 Prompt 都会带着它，决定 Agent 的状态。
</div>
</div>
<div class="flex items-center text-slate-300">➜</div>
<!-- Stage 3: 长期记忆 (Long-term) -->
<div class="flex-1 bg-purple-50/50 border-2 border-purple-200/50 rounded-3xl p-5 shadow-sm relative">
<div class="absolute -top-4 left-6 bg-purple-500 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-md">Stage 3: 知识档案</div>
<div class="text-3xl mb-3">📚</div>
<h3 class="font-black text-purple-900 text-base mb-1">长期记忆<br/><span class="text-[10px] text-purple-600 font-mono">(Files / Index)</span></h3>
<div class="text-[11px] text-slate-600 leading-relaxed bg-white/50 p-3 rounded-xl border border-purple-100/50">
<b>本质：持久化的本地文件。</b><br/>
比如：<code>MEMORY.md</code>、用户长期偏好。
</div>
<div class="mt-4 p-2 bg-purple-100/30 rounded-lg border border-purple-200 text-[10px] text-purple-800">
💡 <b>按需召唤：</b> 平时不进 Prompt，只有搜到时才加载。
</div>
</div>
</div>
<div class="mt-5 bg-[#0f172a] rounded-[2rem] p-6 border border-slate-700 shadow-2xl relative overflow-hidden">
<div class="grid grid-cols-[1fr_2fr] gap-6 items-center">
<div class="text-amber-400 font-black text-center border-r border-slate-700 pr-6">
<div class="text-2xl mb-1">关键区别</div>
<div class="text-[10px] opacity-60">PROMPT PERSPECTIVE</div>
</div>
<div class="text-slate-300 text-[12px] leading-relaxed">
<span class="text-emerald-400 font-bold">感知记忆</span> 是给模型“看一眼”的<b>海量原始数据</b> (In-context Data)；<br/>
<span class="text-blue-400 font-bold">工作记忆</span> 是要模型“记住并带走”的<b>对话摘要</b> (Conversation Thread)；<br/>
<span class="text-purple-400 font-bold">长期记忆</span> 是模型“想不起来才去查”的<b>外部磁盘</b> (External Knowledge)。
</div>
</div>
</div>
</div>

<!--
讲解要点：
1. 感知记忆：工具输出的原始 Buffer，看一眼就扔。
2. 工作记忆：对话历史，每一轮都要带上。
3. 长期记忆：存在硬盘上的文件。
-->
