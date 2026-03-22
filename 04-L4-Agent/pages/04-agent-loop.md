---
layout: default
---

## 05 Agent Loop：它不是“一次回答”，而是一个循环

<div class="grid gap-6 md:grid-cols-4 mt-6">
  <section class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">Step 1</div>
    <div class="mt-2 text-lg font-bold text-slate-900">思考</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">先判断目标是什么，要不要拆成小任务。</p>
  </section>
  <section class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-[0.25em] text-purple-500">Step 2</div>
    <div class="mt-2 text-lg font-bold text-slate-900">行动</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">调用工具，比如读文件、查网页、执行命令。</p>
  </section>
  <section class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Step 3</div>
    <div class="mt-2 text-lg font-bold text-slate-900">观察</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">看工具返回了什么，成功还是失败。</p>
  </section>
  <section class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">Step 4</div>
    <div class="mt-2 text-lg font-bold text-slate-900">再决策</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">继续下一步，或者判断任务已经完成。</p>
  </section>
</div>

<div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
  <div class="text-sm font-bold text-slate-900">为什么这很关键</div>
  <p class="mt-3 text-sm text-slate-600 leading-6">普通聊天模型更像“一次性回答”。Agent 则像一个会不断自我修正的执行循环。所以它能处理更长、更复杂、更接近真实工作的任务。</p>
</div>
