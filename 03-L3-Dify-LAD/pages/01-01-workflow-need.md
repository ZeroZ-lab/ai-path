---
layout: center
class: px-14
---

# 1.1 为什么我们需要 Workflow？

<div class="mt-4 text-sm text-slate-500 leading-relaxed">
  业务场景极其复杂，靠“一句 Prompt”根本搞不定。
</div>

---
layout: default
class: px-14
---

## 1.1.1 真实业务：不是问答，是“过程”

<div class="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">

  <div class="space-y-4 text-sm text-slate-700">
    <h3 class="text-base font-semibold text-slate-900">
      我们的工作，本质上是“带状态的流程”
    </h3>
    <ul v-click class="list-disc pl-6 space-y-2 text-xs transition-all duration-500">
      <li>先<span class="font-semibold">收集信息</span>：确认对方的意图。</li>
      <li>再<span class="font-semibold">查阅资料</span>：翻合同、翻制度。</li>
      <li>接着<span class="font-semibold">逻辑判断</span>：金额大于 50 万走 A 流程，否则走 B。</li>
      <li>最后<span class="font-semibold">生成交付</span>：写邮件、发通知。</li>
    </ul>
  </div>

  <div v-click class="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 shadow-inner text-xs text-slate-700 space-y-3 transition-all duration-500">
    <div class="text-[11px] font-bold uppercase tracking-widest text-blue-500">如果我们只用对话框</div>
    <ul class="list-disc pl-5 space-y-1.5">
      <li>步骤混在一起，容易漏项。</li>
      <li>每次问法不同，结果随机。</li>
      <li>经验锁在个人对话里，无法交接。</li>
    </ul>
    <p class="text-[11px] text-blue-700/80 font-bold mt-2">
      我们需要把这些隐形的步骤“画出来”，让 AI 照着做。
    </p>
  </div>

</div>
