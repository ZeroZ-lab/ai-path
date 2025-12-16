---
layout: default
class: px-14
---

## 9.0 为什么“只靠大模型”不够？

<div class="mt-2 text-sm text-slate-500 mb-4">
  在企业落地中，直接使用通用大模型（LLM）通常会面临“四大硬伤”：
</div>

<div class="grid gap-4 md:grid-cols-2 items-stretch">

  <!-- 痛点 1：幻觉与准确性 -->
  <div class="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-xl">🤥</span>
      <h3 class="text-sm font-bold text-rose-900">1. 幻觉与胡说 (Hallucination)</h3>
    </div>
    <p class="text-xs text-rose-900/80 leading-snug">
      模型本质是概率预测。当它不确定时，倾向于“一本正经地编造”事实，而在金融、法律、医疗等严肃场景下，这是不可接受的。
    </p>
  </div>

  <!-- 痛点 2：时效性与更新 -->
  <div class="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-xl">📅</span>
      <h3 class="text-sm font-bold text-rose-900">2. 知识滞后 (Outdated)</h3>
    </div>
    <p class="text-xs text-rose-900/80 leading-snug">
      模型的知识截止于训练时刻。它不知道昨天新发的红头文件，也不知道公司今早刚改的考勤制度。微调模型更新频率低且昂贵。
    </p>
  </div>

  <!-- 痛点 3：私有数据与隐私 -->
  <div class="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-xl">🔒</span>
      <h3 class="text-sm font-bold text-rose-900">3. 私有数据壁垒 (Privacy)</h3>
    </div>
    <p class="text-xs text-rose-900/80 leading-snug">
      企业的合同、财务报表、客户名单绝对不能上传到公有模型进行训练。通用模型缺乏企业内部的“独家上下文”。
    </p>
  </div>

  <!-- 痛点 4：上下文窗口 -->
  <div class="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 shadow-sm">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-xl">📝</span>
      <h3 class="text-sm font-bold text-rose-900">4. 窗口限制 (Context Limit)</h3>
    </div>
    <p class="text-xs text-rose-900/80 leading-snug">
      虽然模型支持长文本，但一次性塞入整本《民法典》或几十兆的技术手册，不仅费用昂贵（Token Cost），而且检索精度会显著下降。
    </p>
  </div>

</div>