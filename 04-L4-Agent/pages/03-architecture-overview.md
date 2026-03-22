---
layout: default
---

## 04 OpenClaw 架构全景图

<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md mt-6">
  <div class="grid gap-4 md:grid-cols-5 text-center">
    <div class="rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
      <div class="text-3xl">📨</div>
      <div class="mt-2 text-sm font-bold text-slate-900">消息入口</div>
      <div class="mt-1 text-xs text-slate-500">Slack / Telegram / iMessage</div>
    </div>
    <div class="rounded-2xl border border-purple-100 bg-purple-50/80 p-4">
      <div class="text-3xl">🚦</div>
      <div class="mt-2 text-sm font-bold text-slate-900">会话与队列</div>
      <div class="mt-1 text-xs text-slate-500">谁在说话，谁先处理</div>
    </div>
    <div class="rounded-2xl border border-amber-100 bg-amber-50/80 p-4">
      <div class="text-3xl">🧠</div>
      <div class="mt-2 text-sm font-bold text-slate-900">Agent Runtime</div>
      <div class="mt-1 text-xs text-slate-500">推理、决策、循环</div>
    </div>
    <div class="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
      <div class="text-3xl">🛠️</div>
      <div class="mt-2 text-sm font-bold text-slate-900">技能与工具</div>
      <div class="mt-1 text-xs text-slate-500">Shell / Browser / API</div>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div class="text-3xl">🗂️</div>
      <div class="mt-2 text-sm font-bold text-slate-900">记忆与控制面</div>
      <div class="mt-1 text-xs text-slate-500">MEMORY / Dashboard / CLI</div>
    </div>
  </div>
</div>

<div class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-md">
  <div class="text-sm font-bold text-slate-900">给非技术人的翻译</div>
  <p class="mt-3 text-sm text-slate-600 leading-6">你可以把 OpenClaw 想成一个“总控室”：左边接收外部消息，中间是会思考的大脑，右边连接各种能真正做事的工具，下面还有一本长期记事本。</p>
</div>
