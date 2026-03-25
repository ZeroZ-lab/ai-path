---
layout: default
---

## 01 Agent 产品先分类

<div class="mt-2 text-sm text-slate-500">
  先判断它是什么，再判断它强不强。
</div>

<div class="mt-5 grid gap-4 md:grid-cols-3 text-left">
  <section v-click class="rounded-[28px] border border-slate-200 bg-white/85 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">Type A</div>
    <div class="mt-3 text-[1.2rem] font-bold leading-tight text-slate-900">聊天助手</div>
    <div class="mt-3 rounded-2xl bg-slate-50 px-4 py-2.5 text-[13px] font-medium text-slate-600">
      重点：帮你理解和表达
    </div>
    <p class="mt-3 text-[13px] leading-5 text-slate-600">
      擅长解释、总结、改写、建议，通常不会直接替你操作真实环境。
    </p>
    <div class="mt-3 text-xs text-slate-500">
      例子：ChatGPT、Claude
    </div>
  </section>
  <section v-click class="rounded-[28px] border border-blue-200 bg-blue-50/75 p-5 shadow-[0_15px_35px_rgba(59,130,246,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.35em] text-blue-500">Type B</div>
    <div class="mt-3 text-[1.2rem] font-bold leading-tight text-slate-900">工作流 / 编码代理</div>
    <div class="mt-3 rounded-2xl bg-white/80 px-4 py-2.5 text-[13px] font-medium text-blue-700">
      重点：围绕任务协作或执行
    </div>
    <p class="mt-3 text-[13px] leading-5 text-slate-700">
      可能是代码搭子、任务代理或流程编排器，但主场通常还是任务本身，不是长期代理系统。
    </p>
    <div class="mt-3 text-xs text-blue-700">
      例子：Claude Code、Codex、LangGraph、CrewAI
    </div>
  </section>
  <section v-click class="rounded-[28px] border border-emerald-200 bg-emerald-50/70 p-5 shadow-[0_15px_35px_rgba(16,185,129,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.35em] text-emerald-500">Type C</div>
    <div class="mt-3 text-[1.2rem] font-bold leading-tight text-slate-900">高自主权 Agent</div>
    <div class="mt-3 rounded-2xl bg-white/80 px-4 py-2.5 text-[13px] font-medium text-emerald-700">
      重点：接工具、跨多步、持续修正
    </div>
    <p class="mt-3 text-[13px] leading-5 text-slate-700">
      重点不是回答得多聪明，而是能不能真正接上工具、连续执行，并根据结果调整下一步。
    </p>
    <div class="mt-3 text-xs text-emerald-700">
      例子：OpenClaw
    </div>
  </section>
</div>

<!--
逐字稿：
这一页我想先讲一个最重要的判断习惯：先不要急着比强弱，先看它到底属于哪一类。

为什么我要先讲这个？因为现在大家看 Agent，特别容易犯一个错误，就是把所有看起来“很强”的东西都放进同一个篮子里比较。比如看到 ChatGPT 很强，Claude Code 很强，OpenClaw 也很强，就会自然地问一句：那到底谁最强？

但这个问题很多时候一开始就问错了。因为它们并不完全是同一类产品。

第一类是聊天助手。它的重点是理解、解释、总结、改写。它帮你想，帮你说，帮你整理信息，但通常不会直接替你去操作真实环境。像 ChatGPT、Claude，更接近这一类。

第二类我这里叫“工作流 / 编码代理”。这类东西的重点是围绕任务协作或执行。它可能是代码搭子，也可能是任务代理，也可能是流程编排器。它能做事，但主场通常还是某个任务本身，而不是一个长期运行的代理系统。像 Claude Code、Codex、LangGraph、CrewAI，都可以先放到这个大类里理解。

第三类是高自主权 Agent。它的重点不是回答得有多聪明，而是能不能真正接上工具、跨多步执行，并且根据结果持续修正。OpenClaw 之所以值得拿来讲，就是因为它特别像这一类。

所以这一页真正要带走的不是记住三个名词，而是记住下面这句规则：先回答“它属于哪一类”，再回答“它做得强不强”。

如果分类判断错了，后面的比较基本都会跑偏。后面我们再看 OpenClaw、Claude Code、Codex 的时候，就会轻松很多。
-->
