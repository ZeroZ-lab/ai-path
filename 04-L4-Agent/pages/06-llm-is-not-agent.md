---
layout: default
---

## 05 为什么 LLM 本身不等于 Agent

<div class="grid gap-6 md:grid-cols-2 mt-6 items-stretch">
  <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
    <div class="text-sm font-bold text-slate-900">LLM 的本质</div>
    <div class="mt-4 space-y-3 text-sm text-slate-600 leading-6">
      <p>从工程上看，LLM 的核心工作仍然是基于上下文做下一段 token 预测。</p>
      <p>它本身没有手、没有长期状态、也不会自动接触真实环境。</p>
      <p>如果外部系统不给它工具、记忆和调度，它就只能“继续说下去”。</p>
    </div>
  </section>
  <section class="rounded-3xl border border-blue-100 bg-blue-50/80 p-6 shadow-md">
    <div class="text-sm font-bold text-blue-900">为什么不能把它直接等同于 Agent</div>
    <div class="mt-4 space-y-3 text-sm text-slate-600 leading-6">
      <p>它受限于上下文窗口，看不到的内容等于不存在。</p>
      <p>它像一个住在黑盒房间里的人，只能通过狭窄缝隙接收信息并吐出文字。</p>
      <p>Agent 之所以成立，是因为外部系统把“感知、行动、记忆、调度”补给了它。</p>
    </div>
  </section>
</div>

<div class="mt-8 rounded-3xl border border-amber-200 bg-amber-50/80 p-5 shadow-md">
  <div class="text-sm font-bold text-amber-900">一句翻译</div>
  <p class="mt-2 text-sm text-amber-800 leading-6">LLM 更像会说话的大脑，Agent 则是给这个大脑接上身体、记忆和外部世界接口的完整系统。</p>
</div>
