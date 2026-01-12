---
layout: center
---

## 6.6 总结：从“调教 AI”到“雇佣 AI”

<div class="mt-8 grid grid-cols-2 gap-12 text-left max-w-4xl mx-auto">

  <!-- Left: Old Mindset -->
  <div class="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
    <div class="text-xl font-bold text-slate-500 mb-4 border-b border-slate-300 pb-2">Previous: Prompt Engineering</div>
    <ul class="space-y-4 text-sm text-slate-500">
      <li class="flex items-center gap-2">
        <span>❌</span> 试图用一个超级 Prompt 解决所有问题
      </li>
      <li class="flex items-center gap-2">
        <span>❌</span> AI 像个“黑盒”，输出不可控
      </li>
      <li class="flex items-center gap-2">
        <span>❌</span> 需要人去适应 AI 的怪脾气
      </li>
    </ul>
  </div>

  <!-- Right: New Mindset -->
  <div v-click class="transform scale-110">
    <div class="text-xl font-bold text-blue-600 mb-4 border-b border-blue-200 pb-2">Now: Agent Architecture</div>
    <ul class="space-y-4 text-sm text-slate-800">
      <li class="flex items-center gap-2">
        <span class="text-blue-500 text-lg">✅</span>
        <span><strong>拆解分工</strong>：分类、搜索、写作各司其职</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-blue-500 text-lg">✅</span>
        <span><strong>工具赋能</strong>：用 Search 解决幻觉</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-blue-500 text-lg">✅</span>
        <span><strong>标准交付</strong>：用 Template Node 锁定输出格式</span>
      </li>
    </ul>
  </div>

</div>

<div v-click class="mt-12 bg-slate-900 text-white p-6 rounded-2xl shadow-xl text-center">
  <div class="text-lg font-bold">
    "未来的律师事务所，可能只有 10 个合伙人，和 1000 个 Dify Agent。"
  </div>
</div>

<!--
最后做个总结。

今天我们讲了三个场景，其实核心思想只有一个：
**不要试图去“调教”一个全能的 AI，而是要去“雇佣”一组专业的 Agent。**

以前我们写 Prompt，是在教 AI 怎么说话。
现在我们搭 Dify，是在给 AI 发 Offer：
- 你负责分类，给你个分类器节点。
- 你负责查案，给你个搜索节点。
- 你负责写文书，给你个模板节点。

当这套系统跑通的时候，你拥有的就不再是一个聊天机器人，而是一支**7x24小时待命的数字律师军团**。
-->
