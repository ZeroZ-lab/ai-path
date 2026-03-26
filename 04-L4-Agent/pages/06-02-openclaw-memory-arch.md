---
layout: default
---

## 22 记忆读取流程示意

<div class="mt-3 px-8 text-[12px] leading-5 text-slate-500">
  这页讲的是更接近 OpenClaw 文档的语义：current context、memory files、索引与 retrieval，而不是把所有信息层都叫“记忆”。
</div>

<!--
逐字稿：
这一页我们看记忆是怎么被读出来的。

第一步，用户提出一个问题。比如说，“帮我重构昨天的代码”。

第二步，系统不会假设模型天然记得“昨天”发生了什么，而是进入 Retrieval 流程，去索引层里找和“昨天”、“代码”、“重构”最相关的片段。

第三步，它会去看 memory files。比如 `MEMORY.md`、`memory/*.md`，以及其他相关知识文件。也就是说，长期信息不是凭空存在模型脑子里，而是存在文件系统里。

第四步，把这次找回来的内容重新注入 current context，再一起送进模型。模型这时候才会表现得像“记得昨天”。

所以重点不是模型自己记住了过去，而是系统在这一轮把过去相关的信息重新找回来，重新放进上下文里。

这也是为什么 OpenClaw 的记忆不是玄学，而是一个很具体的工程机制：写文件、建索引、做 retrieval、再回灌 context。
-->

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
            <div class="text-[13px] text-slate-700 leading-snug"><b>Retrieval:</b> 在索引层里找回和“昨天”、“代码”、“重构”最相关的片段。</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 min-w-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm">3</div>
            <div class="text-[13px] text-slate-700 leading-snug"><b>Memory Files:</b> 扫描 <code class="bg-blue-50 px-1 rounded">MEMORY.md</code>、<code class="bg-blue-50 px-1 rounded">memory/*.md</code> 以及其他知识文件。</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 min-w-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm">4</div>
            <div class="text-[13px] text-slate-700 leading-snug"><b>合并上下文:</b> 将找回的片段重新注入 current context，再喂给大模型。</div>
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
          <div class="text-[12px] font-mono font-bold">Memory Files / Index / Search</div>
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
    * 这页讲的是“记忆读取的一般思路”，重点是让大家看懂：memory files 不会每轮全塞进 context，而是按需 retrieval、按需注入。
  </div>
</div>
