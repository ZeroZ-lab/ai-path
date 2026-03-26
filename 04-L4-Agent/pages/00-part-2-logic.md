---
layout: default
---

## 这一段，我们按什么逻辑往下拆

<div class="mt-3 text-sm text-slate-500">
  这一部分不是跟着功能点乱逛，而是沿着一条固定顺序，把 OpenClaw 这个高自主性 Agent 一层层拆开。
</div>

<div class="mt-8 grid gap-4 md:grid-cols-4">
  <section class="rounded-[26px] border border-slate-200 bg-white/90 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.06)]">
    <div class="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">Step 1</div>
    <div class="mt-3 text-[1.2rem] font-bold text-slate-900">先定义问题</div>
    <p class="mt-3 text-[13px] leading-5 text-slate-600">先讲清 LLM 为什么不等于 Agent，再回答 OpenClaw 到底是什么。</p>
  </section>

  <section class="rounded-[26px] border border-blue-100 bg-blue-50/80 p-5 shadow-[0_15px_35px_rgba(59,130,246,0.10)]">
    <div class="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500">Step 2</div>
    <div class="mt-3 text-[1.2rem] font-bold text-slate-900">再拆系统</div>
    <p class="mt-3 text-[13px] leading-5 text-slate-700">先看 OpenClaw 的架构图，弄明白它到底由哪些部分组成。</p>
  </section>

  <section class="rounded-[26px] border border-emerald-100 bg-emerald-50/80 p-5 shadow-[0_15px_35px_rgba(16,185,129,0.10)]">
    <div class="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-500">Step 3</div>
    <div class="mt-3 text-[1.2rem] font-bold text-slate-900">再拆执行机制</div>
    <p class="mt-3 text-[13px] leading-5 text-slate-700">看 loop 怎么跑、runtime 怎么装，理解它为什么能持续工作。</p>
  </section>

  <section class="rounded-[26px] border border-amber-100 bg-amber-50/80 p-5 shadow-[0_15px_35px_rgba(245,158,11,0.10)]">
    <div class="text-[10px] font-black uppercase tracking-[0.28em] text-amber-500">Step 4</div>
    <div class="mt-3 text-[1.2rem] font-bold text-slate-900">最后拆工具与技能生态</div>
    <p class="mt-3 text-[13px] leading-5 text-slate-700">再看 tools、Pi、Skill、MCP 这些层，到底分别在系统里扮演什么角色。</p>
  </section>
</div>

<div class="mt-6 rounded-[24px] border border-slate-200 bg-white/85 px-5 py-4 text-[15px] leading-6 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
  也就是说，后面这部分你可以一直带着一个问题听：我们现在是在定义问题，还是在拆系统，还是在拆执行机制，还是在拆工具生态？
</div>

<!--
逐字稿：
这一页的作用很简单，就是先把后面的逻辑钉住。

我们后面不会跟着功能点乱逛，也不会想到哪讲到哪，而是按四步往下走。

第一步，先定义问题。先讲清 LLM 为什么不等于 Agent，再回答 OpenClaw 到底是什么。

第二步，再拆系统。先看架构，弄明白这个系统到底由哪些部分组成。

第三步，再拆执行机制。看它的 loop 怎么跑，runtime 怎么装起来。

第四步，最后拆工具与技能生态。再回来看 tools、Pi、Skill、MCP 这些层分别扮演什么角色。
-->
