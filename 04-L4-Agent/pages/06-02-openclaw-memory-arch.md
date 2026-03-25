---
layout: default
---

## 17 记忆读取流程示意

<div class="px-8 mt-2">
  <div class="grid grid-cols-[1.5fr_1fr] gap-8">
    <!-- 左侧：工作流解析 (平衡字号) -->
    <div class="space-y-4 pt-2">
      <div class="bg-white/50 border border-slate-200 p-5 rounded-3xl shadow-sm">
        <div class="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">记忆读取过程 (Retrieval Loop)</div>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 min-w-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm">1</div>
            <div class="text-[13px] text-slate-700 leading-snug"><b>问题输入:</b> 用户问“帮我重构昨天的代码”。</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 min-w-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm">2</div>
            <div class="text-[13px] text-slate-700 leading-snug"><b>索引检索:</b> 在检索层里找回和“昨天”、“代码”、“重构”最相关的片段。</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 min-w-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm">3</div>
            <div class="text-[13px] text-slate-700 leading-snug"><b>文件锚点:</b> 扫描所有 <code class="bg-blue-50 px-1 rounded">.md</code> 和 <code class="bg-blue-50 px-1 rounded">.txt</code> 等知识文件作为静态记忆。</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 min-w-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm">4</div>
            <div class="text-[13px] text-slate-700 leading-snug"><b>合并上下文:</b> 将找回的片段拼接成临时 Prompt，喂给大模型。</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧：数据流向 (平衡字号) -->
    <div class="bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div class="text-[10px] text-slate-500 font-mono absolute top-4 left-4 tracking-widest uppercase">OpenClaw Data Flow</div>
      <div class="space-y-6 w-full px-2">
        <div class="p-3 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-300">
          <div class="text-[10px] uppercase font-black opacity-60 mb-1 tracking-widest">Current Context</div>
          <div class="text-[12px] font-mono font-bold">Working Window</div>
        </div>
        <div class="text-slate-700 text-2xl">⬇️</div>
        <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-300">
          <div class="text-[10px] uppercase font-black opacity-60 mb-1 tracking-widest">Retrieval Layer</div>
          <div class="text-[12px] font-mono font-bold">Files / Index / Search</div>
        </div>
        <div class="text-slate-700 text-2xl">⬇️</div>
        <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-300">
          <div class="text-[10px] uppercase font-black opacity-60 mb-1 tracking-widest">Final Answer</div>
          <div class="text-[12px] font-mono italic font-bold">"Sure, I remember that..."</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 脚注 -->
  <div class="mt-6 text-[11px] text-slate-400 italic px-4">
    * 这页讲的是“记忆读取的一般思路”，重点是让大家看懂：长期信息不会每轮全塞进 Prompt，而是按需找回。
  </div>
</div>
