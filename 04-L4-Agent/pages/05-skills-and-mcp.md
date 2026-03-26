---
layout: default
---

## 12 Tools：Agent 为什么真的能“动手”

<div class="mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr] items-stretch">
  <section class="rounded-3xl border border-slate-200 bg-white p-5 shadow-md">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Core Idea</div>
    <div class="mt-2 text-[1.45rem] leading-tight font-bold text-slate-900">模型决定下一步，系统把动作真正执行出去</div>
    <div class="mt-3 grid gap-3 md:grid-cols-2">
      <div class="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
        <div class="text-sm font-bold text-slate-900">普通聊天</div>
        <p class="mt-1 text-[13px] leading-5 text-slate-600">模型只能继续生成文字，无法真的碰文件、终端或网页。</p>
      </div>
      <div class="rounded-2xl border border-blue-100 bg-blue-50/70 p-3">
        <div class="text-sm font-bold text-blue-900">Agent</div>
        <p class="mt-1 text-[13px] leading-5 text-blue-800">模型输出结构化动作，运行时调用工具执行，再把结果回流到下一轮。</p>
      </div>
    </div>
    <div class="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3">
      <div class="text-sm font-bold text-emerald-900">一句话</div>
      <p class="mt-1 text-[13px] leading-5 text-emerald-800">Agent 的“手”不在模型里，而在模型能调动的外部执行系统里。</p>
    </div>
  </section>
  <section class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-md">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-amber-600">Execution Loop</div>
    <div class="mt-3 rounded-2xl border border-white/80 bg-white/80 p-4">
      <div class="space-y-3 text-[13px] leading-5 text-slate-700">
        <div><span class="font-bold text-slate-900">1.</span> 模型输出动作，例如 `read`、`bash`、`browser click`。</div>
        <div><span class="font-bold text-slate-900">2.</span> 工具层在真实环境里执行，读取文件、跑命令或访问网页。</div>
        <div><span class="font-bold text-slate-900">3.</span> 执行结果回流给模型，进入下一轮判断和修正。</div>
      </div>
    </div>
  </section>
</div>

<div class="mt-4 rounded-3xl border border-purple-100 bg-purple-50/80 p-3.5 shadow-md">
  <div class="text-sm font-bold text-purple-900">工程现实</div>
  <p class="mt-1.5 text-[13px] leading-5 text-purple-800">
    Agent 的能力边界，不在于模型“会不会说”，而在于系统到底给了它哪些手、这些手有没有清楚的参数定义、失败时能不能纠错和继续。
  </p>
</div>

<!--
逐字稿：
这一页只讲一件事：Agent 为什么真的能动手。

普通聊天产品里，模型只能继续生成文字。它可以告诉你应该怎么做，但它自己并不会真的碰文件、终端或者网页。

而 Agent 的变化在于，模型输出的不只是文字，而是结构化动作。系统拿到这些动作以后，会在真实环境里执行，然后把结果再回流给模型。

所以这里最重要的一句话就是：Agent 的“手”不在模型里，而在模型能调动的外部执行系统里。

也正因为如此，Agent 的能力边界不取决于模型说话多像人，而取决于系统到底给了它哪些手，这些手是不是定义清楚，失败时能不能纠错和继续。
-->
