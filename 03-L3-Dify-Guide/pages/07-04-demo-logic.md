---
layout: default
---

## 8.2 助理 A (案源分流)：意图识别

<div class="mt-8 grid grid-cols-2 gap-8 items-center h-[400px]">

  <!-- Left: The Problem Input -->
  <div class="space-y-6">
    <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm relative">
      <div class="absolute -top-3 left-6 bg-slate-500 text-white px-3 py-1 rounded text-xs font-bold">Client Input</div>
      <div class="text-sm text-slate-700 italic mt-2">
        "你好，我想咨询下...我和我老公准备**离婚**，财产分割这块怎么算？"
      </div>
    </div>
    <!-- Arrow Down -->
    <div class="flex justify-center">
      <div class="i-carbon-arrow-down text-4xl text-slate-300"></div>
    </div>
    <!-- The Node -->
    <div v-click class="bg-rose-50 border-2 border-rose-400 rounded-3xl p-6 shadow-md text-center">
      <div class="text-xs font-bold text-rose-500 uppercase mb-2">Dify Node</div>
      <div class="text-xl font-bold text-rose-800">问题分类器</div>
      <div class="text-[10px] text-rose-600 mt-1">Classify based on user intent</div>
    </div>
  </div>
  <!-- Right: The Routing Result -->
  <div v-click class="space-y-4">
    <!-- Path A -->
    <div class="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-slate-50 transition-colors opacity-30">
      <div class="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xl">🏢</div>
      <div>
        <div class="text-sm font-bold text-slate-700">Class 1: 企业合规 (Compliance)</div>
        <div class="text-xs text-slate-400">Route to: Corp Lawyer</div>
      </div>
    </div>
    <!-- Path B (Active) -->
    <div class="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-rose-500 shadow-lg transform scale-105 transition-all">
      <div class="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xl">💔</div>
      <div>
        <div class="text-sm font-bold text-blue-900">Class 2: 婚姻家事 (Divorce)</div>
        <div class="text-xs text-blue-600">Route to: Family Lawyer</div>
      </div>
      <div class="ml-auto text-rose-500 font-bold text-xs">MATCHED</div>
    </div>
    <!-- Path C -->
    <div class="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-slate-50 transition-colors opacity-30">
      <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl">📄</div>
      <div>
        <div class="text-sm font-bold text-slate-700">Class 3: 合同审核 (Contract)</div>
        <div class="text-xs text-slate-400">Route to: Contract Reviewer</div>
      </div>
    </div>
  </div>

</div>

<!--
这是我们的第一位助理：**前台分诊员**。

以前，不管客户问什么，我们都用同一个 Prompt 去接，结果 AI 有时候会“胡说八道”（比如拿商业法去套劳动法）。

现在，加一个 **Question Classifier** 节点。
只要客户提到“工资”、“劳动合同”，立刻走中间这条路（Path B），专门调用“劳动法知识库”。
如果是“签合同”、“股权”，走上面那条路（Path A）。

这就叫**“专病专治”**。这也是构建专业 Agent 的第一步：**分类**。
-->
