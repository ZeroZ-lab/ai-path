---
layout: default
---

## 5.5 选择：Chatflow vs Workflow

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">

  <!-- Chatflow -->
  <div v-click class="rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 border-b border-blue-200 pb-2">
      <span class="text-3xl">💬</span>
      <div>
        <h3 class="text-lg font-bold text-blue-900">Chatflow (对话流)</h3>
        <span class="text-[10px] bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-bold">有记忆</span>
      </div>
    </div>
    <div class="space-y-3 flex-1">
      <div class="flex flex-col gap-2 bg-white p-3 rounded-xl border border-blue-100 h-32 justify-center">
        <div class="self-end bg-blue-500 text-white px-3 py-1 rounded-lg rounded-tr-none text-[10px]">Hi</div>
        <div class="self-start bg-slate-100 text-slate-600 px-3 py-1 rounded-lg rounded-tl-none text-[10px]">你好！</div>
        <div class="self-end bg-blue-500 text-white px-3 py-1 rounded-lg rounded-tr-none text-[10px]">再说一遍？</div>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed">
        <strong>特点：</strong> 有 Session ID（会话ID），系统会自动记住“上一句说了什么”。<br>
        <strong>场景：</strong> 客服、助手、陪练。
      </p>
    </div>
  </div>

  <!-- Workflow -->
  <div v-click class="rounded-3xl border border-purple-100 bg-purple-50/50 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 border-b border-purple-200 pb-2">
      <span class="text-3xl">⚙️</span>
      <div>
        <h3 class="text-lg font-bold text-purple-900">Workflow (工作流)</h3>
        <span class="text-[10px] bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full font-bold">无记忆</span>
      </div>
    </div>
    <div class="space-y-3 flex-1">
      <div class="flex items-center gap-2 bg-white p-3 rounded-xl border border-purple-100 h-32 justify-center">
        <div class="bg-slate-100 p-2 rounded text-[10px]">Input</div>
        <div class="i-carbon-arrow-right text-slate-300"></div>
        <div class="bg-purple-100 p-2 rounded text-[10px] font-bold text-purple-700">Process</div>
        <div class="i-carbon-arrow-right text-slate-300"></div>
        <div class="bg-slate-100 p-2 rounded text-[10px]">Output</div>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed">
        <strong>特点：</strong> 跑完即焚。每次运行都是全新的，不依赖上下文。<br>
        <strong>场景：</strong> 文章生成、数据清洗、翻译 API。
      </p>
    </div>
  </div>

</div>

<div v-click class="mt-6 text-center bg-amber-50 border border-amber-100 p-3 rounded-xl text-xs text-amber-800 transition-all duration-500">
  <strong>选型口诀：</strong> 如果需要“你一句我一句”，选 Chatflow；如果只是“给个输入要个结果”，选 Workflow。
</div>

<!--
（点击 1）**Chatflow (对话流) 就像是“1对1 咨询顾问”**。
你问他法律问题，他会记住你上一句说了什么。你问“那个条款怎么改？”，他知道“那个”指的是上一句的合同。
**适用场景**：适合做法律咨询助手、智能客服、面试陪练。

（点击 2）**Workflow (工作流) 就像是“文件审批盖章处”**。
你递进去一份合同（输入），盖完章出来（输出）。你再递一份，它不会管这份和上一份有没有关系，只负责“盖章”这个动作。它没有记忆，但是效率极高，跑完即焚。
**适用场景**：适合做合同生成器、长文章翻译、周报汇总。
-->
