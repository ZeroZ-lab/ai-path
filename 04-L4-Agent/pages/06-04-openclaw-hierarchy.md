---
layout: default
---

## 18 架构：OpenClaw 记忆的“三层存储”模型

<div class="px-8 mt-2">
  <!-- 顶部：层次化示意 (平衡字号) -->
  <div class="flex items-center justify-between gap-4 mt-8">
    <!-- 1. 核心层 -->
    <div class="flex-1 bg-rose-50 border-2 border-rose-200 p-4 rounded-3xl relative">
      <div class="absolute -top-3 left-6 px-3 bg-rose-500 text-white text-[10px] font-black rounded-full">CORE: IDENTITY</div>
      <div class="text-3xl mb-3">🆔</div>
      <h3 class="text-rose-900 font-bold text-base">SOUL.md</h3>
      <p class="text-[11px] text-slate-600 leading-snug mt-1">核心指令、价值观、语言风格。这是 Agent 的<b>基因</b>，每次对话前都会强制读取。</p>
    </div>
    <div class="text-slate-300">➜</div>
    <!-- 2. 日志层 -->
    <div class="flex-1 bg-amber-50 border-2 border-amber-200 p-4 rounded-3xl relative">
      <div class="absolute -top-3 left-6 px-3 bg-amber-500 text-white text-[10px] font-black rounded-full">DYNAMIC: LOGS</div>
      <div class="text-3xl mb-3">📒</div>
      <h3 class="text-amber-900 font-bold text-base">daily.md</h3>
      <p class="text-[11px] text-slate-600 leading-snug mt-1">记录当天的重要任务、进展与决策。这是<b>短期记忆</b>，用于解决“刚才发生了什么”。</p>
    </div>
    <div class="text-slate-300">➜</div>
    <!-- 3. 知识层 -->
    <div class="flex-1 bg-emerald-50 border-2 border-emerald-200 p-4 rounded-3xl relative">
      <div class="absolute -top-3 left-6 px-3 bg-emerald-500 text-white text-[10px] font-black rounded-full">DURABLE: KNOWLEDGE</div>
      <div class="text-3xl mb-3">📘</div>
      <h3 class="text-emerald-900 font-bold text-base">MEMORY.md</h3>
      <p class="text-[11px] text-slate-600 leading-snug mt-1">沉淀的长期事实、技能偏好。这是<b>长期知识</b>，仅在需要时通过检索工具读取。</p>
    </div>
  </div>
  <!-- 底部：读取逻辑 (平衡字号与对比度) -->
  <div class="mt-8 bg-[#0f172a] rounded-3xl p-6 border border-slate-700 shadow-2xl">
    <div class="text-[11px] font-mono text-slate-400 mb-4 uppercase tracking-[0.2em] text-center font-bold">OpenClaw 智能检索逻辑</div>
    <div class="grid grid-cols-[1.2fr_1fr] gap-8 items-center">
      <div class="text-[12px] text-slate-300 leading-relaxed space-y-4">
        <div class="flex gap-3">
          <span class="text-blue-400 font-black min-w-[70px]">1. 启动加载:</span> 
          <span>合并 <code class="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 border border-slate-700">SOUL.md</code> + <code class="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 border border-slate-700">USER.md</code>。</span>
        </div>
        <div class="flex gap-3">
          <span class="text-blue-400 font-black min-w-[70px]">2. 上下文召回:</span> 
          <span>检索向量库并定位 <code class="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300 border border-slate-700">MEMORY.md</code> 的相关片段。</span>
        </div>
        <div class="flex gap-3">
          <span class="text-blue-400 font-black min-w-[70px]">3. 动态冲洗:</span> 
          <span>对话结束或 Context 溢出时，触发 <code class="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300 border border-slate-700">write_memory</code>。</span>
        </div>
      </div>
      <div class="bg-black/40 p-4 rounded-2xl border border-slate-800 text-center">
        <div class="text-[10px] text-slate-500 uppercase font-black mb-3 tracking-widest">Memory Lifecycle</div>
        <div class="flex justify-center items-center gap-4">
          <span class="text-[10px] bg-slate-800 px-2.5 py-1.5 rounded-lg text-slate-300 border border-slate-700 font-bold">INPUT</span>
          <span class="text-slate-700 text-base">➜</span>
          <span class="text-[10px] bg-emerald-500/20 px-2.5 py-1.5 border border-emerald-500/40 rounded-lg text-emerald-400 font-bold">REASON</span>
          <span class="text-slate-700 text-base">➜</span>
          <span class="text-[10px] bg-amber-500/20 px-2.5 py-1.5 border border-amber-500/40 rounded-lg text-amber-400 font-bold">FLUSH</span>
        </div>
      </div>
    </div>
  </div>
</div>
