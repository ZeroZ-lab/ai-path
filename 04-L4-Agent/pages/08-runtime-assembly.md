---
layout: default
---

## 07 OpenClaw 真正难的地方：runtime 怎么装起来

<div class="grid gap-6 md:grid-cols-3 mt-6 items-stretch">
  <section class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-md">
    <div class="text-sm font-bold text-blue-900">身份层</div>
    <ul class="mt-3 space-y-2 text-sm text-slate-600 leading-6">
      <li>System Prompt / SOUL</li>
      <li>Agent 是谁、按什么方式做事</li>
      <li>什么情况下算完成</li>
    </ul>
  </section>
  <section class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-md">
    <div class="text-sm font-bold text-purple-900">装配层</div>
    <ul class="mt-3 space-y-2 text-sm text-slate-600 leading-6">
      <li>背景 .md 文件、规则、对话历史</li>
      <li>工作区上下文、记忆、身份一起拼装</li>
      <li>此刻有哪些 skills / MCP 工具可用</li>
    </ul>
  </section>
  <section class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-md">
    <div class="text-sm font-bold text-emerald-900">执行层</div>
    <ul class="mt-3 space-y-2 text-sm text-slate-600 leading-6">
      <li>模型决定下一步动作</li>
      <li>工具返回 observation</li>
      <li>规则、记忆、工具继续统一注入下一轮</li>
    </ul>
  </section>
</div>

<div class="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-md">
  <div class="text-sm font-bold text-slate-900">为什么这页很关键</div>
  <p class="mt-3 text-sm text-slate-600 leading-6">很多人看到 OpenClaw，会把注意力放在“它能开浏览器、能跑命令”。但真正决定它像不像一个系统的，不是工具数量，而是每一轮推理之前，runtime 如何把身份、会话、技能、记忆、规则和权限装进同一个可执行上下文里。</p>
</div>
