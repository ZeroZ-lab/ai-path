---
layout: default
---

## 08 安全问题：能力越大，风险越像“放大器”

<div class="grid gap-6 md:grid-cols-3 mt-6 items-stretch">
  <section class="rounded-3xl border border-rose-100 bg-rose-50/80 p-5 shadow-md">
    <div class="text-sm font-bold text-rose-900">提示注入</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">恶意指令被藏在网页、邮件、文档里，Agent 读进去后可能被带偏。</p>
  </section>
  <section class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-md">
    <div class="text-sm font-bold text-amber-900">工具中毒</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">看起来是正常技能，实际上里面藏着恶意脚本或窃密逻辑。</p>
  </section>
  <section class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-md">
    <div class="text-sm font-bold text-slate-900">过度自主</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">模型可以自己做太多决定时，错误会被放大成真实后果。</p>
  </section>
</div>

<div class="mt-8 rounded-3xl border border-blue-100 bg-blue-50/80 p-6 shadow-md">
  <div class="text-sm font-bold text-blue-900">工程上的常识答案</div>
  <ul class="mt-3 space-y-2 text-sm text-blue-800 leading-6">
    <li>高风险操作必须有人确认</li>
    <li>工具权限要分级，而不是全开</li>
    <li>尽量沙盒化，而不是直接裸跑</li>
    <li>把“出错”当成系统设计问题，不要假设模型永远听话</li>
  </ul>
</div>
