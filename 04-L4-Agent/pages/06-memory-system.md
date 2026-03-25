---
layout: default
---

## 16 记忆系统：为什么 Agent 不再像金鱼

<div class="grid gap-6 md:grid-cols-4 mt-6">
  <section class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">对话历史</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">当前窗口里，它还记得刚刚发生了什么；不回灌就会像“失忆症”一样断片。</p>
  </section>
  <section class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">长期记忆</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">重要事实写入 `.md` 或持久层，下一次还能继续接上。</p>
  </section>
  <section class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">RAG 检索</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">不是每次把全部历史塞进去，而是找回和当前问题最相关的片段。</p>
  </section>
  <section class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">Context Engineering</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">关键不是记得越多越好，而是让真正重要的信息持续留在模型注意力里。</p>
  </section>
</div>

<div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
  <div class="text-sm font-bold text-slate-900">OpenClaw 的特殊点</div>
  <p class="mt-3 text-sm text-slate-600 leading-6">它强调本地优先。很多记忆直接存成 Markdown、本地索引或工作区上下文，这让记忆不再是黑盒，而是你能看、能改、能追踪。压缩、摘要和检索，也都变成可调试的工程接口。</p>
</div>
