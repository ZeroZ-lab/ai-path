---
layout: default
---

## 20 OpenClaw：Context、Memory Files、Retrieval

<div class="px-8 pt-2">
<div class="flex items-stretch gap-4 mt-8">
<!-- Stage 1: Context -->
<div class="flex-1 bg-emerald-50/50 border-2 border-emerald-200/50 rounded-3xl p-5 shadow-sm relative">
<div class="absolute -top-4 left-6 bg-emerald-500 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-md">Stage 1: Context</div>
<div class="text-3xl mb-3">📡</div>
<h3 class="font-black text-emerald-900 text-base mb-1">当前上下文<br/><span class="text-[10px] text-emerald-600 font-mono">(Conversation History + Tool Results)</span></h3>
<div class="text-[11px] text-slate-600 leading-relaxed bg-white/50 p-3 rounded-xl border border-emerald-100/50">
<b>本质：这一次真正送进模型窗口里的东西。</b><br/>
包括对话历史、系统提示、工具调用结果、附件等。
</div>
</div>
<div class="flex items-center text-slate-300">➜</div>
<!-- Stage 2: Memory Files -->
<div class="flex-1 bg-blue-50 border-2 border-blue-400 rounded-3xl p-5 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)] relative z-10 scale-105 border-dashed">
<div class="absolute -top-4 left-6 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-lg">Stage 2: Memory Files</div>
<div class="text-3xl mb-3">💬</div>
<h3 class="font-black text-blue-900 text-base mb-1">记忆文件<br/><span class="text-[10px] text-blue-600 font-mono">(MEMORY.md / memory/YYYY-MM-DD.md)</span></h3>
<div class="text-[11px] text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-blue-200 shadow-sm">
<b>本质：写到磁盘上的持久信息。</b><br/>
例如长期偏好写进 <code>MEMORY.md</code>，日常运行上下文写进 <code>memory/YYYY-MM-DD.md</code>。
</div>
</div>
<div class="flex items-center text-slate-300">➜</div>
<!-- Stage 3: Retrieval -->
<div class="flex-1 bg-purple-50/50 border-2 border-purple-200/50 rounded-3xl p-5 shadow-sm relative">
<div class="absolute -top-4 left-6 bg-purple-500 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-md">Stage 3: Retrieval</div>
<div class="text-3xl mb-3">📚</div>
<h3 class="font-black text-purple-900 text-base mb-1">按需检索<br/><span class="text-[10px] text-purple-600 font-mono">(memory_search / memory_get)</span></h3>
<div class="text-[11px] text-slate-600 leading-relaxed bg-white/50 p-3 rounded-xl border border-purple-100/50">
<b>本质：不是每轮全量注入，而是需要时再找回。</b><br/>
OpenClaw 会对记忆文件建立索引，再通过 <code>memory_search</code> / <code>memory_get</code> 按需拉回。
</div>

</div>
</div>
<div class="mt-5 bg-[#0f172a] rounded-[2rem] p-6 border border-slate-700 shadow-2xl relative overflow-hidden">
<div class="grid grid-cols-[1fr_2fr] gap-6 items-center">
<div class="text-amber-400 font-black text-center border-r border-slate-700 pr-6">
<div class="text-2xl mb-1">关键区别</div>
<div class="text-[10px] opacity-60">OFFICIAL-ISH TERMS</div>
</div>
<div class="text-slate-300 text-[12px] leading-relaxed">
<span class="text-emerald-400 font-bold">Context</span> 是当前真正送进模型窗口的内容；<br/>
<span class="text-blue-400 font-bold">Memory files</span> 是写在工作空间磁盘上的持久信息；<br/>
<span class="text-purple-400 font-bold">Retrieval</span> 是在需要时把相关记忆重新拉回当前上下文。
</div>
</div>
</div>
</div>

<!--
逐字稿：
这一页我想先把 OpenClaw 里的记忆讲法收得更严谨一点。

如果尽量贴近官方文档，更合适的说法其实是三块：Context、Memory Files、Retrieval。

第一块，Context。
它指的是这一轮真正送进模型窗口里的内容。包括对话历史、系统提示、工具结果，以及当前任务里临时需要的信息。模型这一轮到底看到了什么，主要就取决于这一块。

第二块，Memory Files。
它指的是写在磁盘上的持久信息。比如 `MEMORY.md`，或者 `memory/YYYY-MM-DD.md` 这类文件。OpenClaw 很强调 file-based memory，也就是文件才是事实来源。真正要让系统以后还能接得上，通常不是指望模型自己记住，而是把内容写进文件。

第三块，Retrieval。
这一步的意思不是把所有 memory files 每一轮都塞进 context，而是先建立索引，需要时再通过 `memory_search`、`memory_get` 之类的方式，把相关内容找回来，再重新注入当前上下文。

所以这三块的关系可以简单理解成：
这一轮窗口里有什么，是 Context；
长期信息存在哪里，是 Memory Files；
什么时候把旧信息拉回来，是 Retrieval。

这也是为什么 OpenClaw 里的记忆更像一个工程系统，而不是模型脑子里神奇地“记住了一切”。
-->
