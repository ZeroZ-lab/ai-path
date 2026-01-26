---
layout: default
---

## 3.5 现场互动：法律咨询流水线

<div class="mt-4 text-center text-slate-500 text-sm mb-8">
  再请 4 位同学，这次我们换一个真实的<b>法律咨询场景</b>。
</div>

<div class="grid gap-6 md:grid-cols-4 items-stretch">
  <!-- Role 1 -->
  <div v-click class="bg-white border-2 border-blue-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-4xl">👤</div>
    <div class="text-center">
      <div class="font-bold text-blue-800 text-lg">开始节点</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">问：我要辞退哺乳期员工，赔钱行吗？</div>
    </div>
  </div>
  <!-- Role 2 -->
  <div v-click class="bg-white border-2 border-purple-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-4xl">🤖</div>
    <div class="text-center">
      <div class="font-bold text-purple-800 text-lg">LLM 助理</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">答：违反劳动合同法第42条，不能辞退。</div>
    </div>
  </div>
  <!-- Role 3 -->
  <div v-click class="bg-white border-2 border-amber-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-4xl">⚖️</div>
    <div class="text-center">
      <div class="font-bold text-amber-800 text-lg">逻辑判断 (If)</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">审核：合规 ✅ / 违规 ❌</div>
    </div>
  </div>
  <!-- Role 4 -->
  <div v-click class="bg-white border-2 border-emerald-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-4xl">📝</div>
    <div class="text-center">
      <div class="font-bold text-emerald-800 text-lg">结束节点</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">大声宣读《法律风险提示函》</div>
    </div>
  </div>
</div>

<div class="mt-10 flex justify-center items-center gap-4 text-slate-400">
  <div class="i-carbon-arrow-right text-3xl"></div>
  <div class="text-sm">这个过程就是我们常说的 <span class="text-slate-600 font-bold">RAG (检索增强)</span> 或 <span class="text-slate-600 font-bold">Agent (智能体)</span> 的雏形</div>
  <div class="i-carbon-arrow-right text-3xl"></div>
</div>

<!--
现在，我们把难度升级一下。刚才传的是诗句，现在我们传**法律案件**。

**第一位（客户）**：你现在是一个很急躁的老板。你问："我要单方面辞退一个还在哺乳期的员工，只要赔钱就可以了吗？"

**第二位（LLM 助理）**：你是一个刚入职的实习律师（或者大模型）。你赶紧去查法条。你查到了《劳动合同法》第42条。告诉下一位："根据第42条，女职工在哺乳期内，用人单位不得解除合同。"

**第三位（合伙人/逻辑节点）**：你经验丰富。你听了实习律师的回答，觉得没问题，符合法律规定。你举牌 **"合规 ✅"**，允许通过。
*(注：如果实习律师说"可以辞退"，那你就要举"违规 ❌"，打回去重写)*

**第四位（结束节点）**：你负责给客户发邮件。既然合伙人审核通过了，你就生成一份正式的《法律风险提示函》，告诉老板："老板，这事儿不能干，违法风险很大。"

**总结：**
大家看，这就是一个最简单的**法律智能体**。
它不再是简单地陪聊，而是：
1. **理解意图**（辞退咨询）
2. **查找依据**（检索知识库）
3. **逻辑风控**（合规审核）
4. **规范输出**（生成文书）

接下来的课程，我们就要在 Dify 里，把这四位同学，变成四个**节点**。
-->
