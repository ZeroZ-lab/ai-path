---
layout: default
transition: slide-left
---

## 6.4 助理 B (调查员)：背景调查 (Search + LLM)

<div class="mt-8 flex justify-between items-center px-4">

<!-- Step 1: Input -->
<div class="w-32 shrink-0">
  <div class="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm text-center">
    <div class="text-[10px] font-bold text-slate-400 mb-1">INPUT</div>
    <div class="text-xs font-bold text-slate-800">"北京虚构科技有限公司"</div>
  </div>
</div>

<div class="text-slate-300 text-xl px-2">→</div>

<!-- Step 2: The Tool Node -->
<div v-click="1" class="w-48 shrink-0 relative group">
  <div class="absolute -top-2 -right-2 bg-amber-500 text-white px-1.5 py-0.5 rounded text-[8px] font-bold shadow animate-bounce">REAL TIME</div>
  <div class="bg-amber-50 border-2 border-amber-400 p-3 rounded-2xl shadow-md flex items-center gap-2">
    <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">🌐</div>
    <div class="text-left">
      <div class="text-[10px] font-bold text-amber-600 uppercase">Tool Node</div>
      <div class="text-xs font-bold text-amber-900">Google Search</div>
    </div>
  </div>
  <div class="text-[9px] text-slate-400 mt-1 text-center font-mono">raw_data.json</div>
</div>

<div class="text-slate-300 text-xl px-2">→</div>

<!-- Step 3: LLM Summary (NEW) -->
<div v-click="2" class="w-48 shrink-0 relative group">
  <div class="bg-blue-50 border-2 border-blue-400 p-3 rounded-2xl shadow-md flex items-center gap-2">
    <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">🤖</div>
    <div class="text-left">
      <div class="text-[10px] font-bold text-blue-600 uppercase">LLM Node</div>
      <div class="text-xs font-bold text-blue-900">Risk Analyst</div>
    </div>
  </div>
  <div class="text-[9px] text-slate-400 mt-1 text-center">Summarize & Filter</div>
</div>

<div class="text-slate-300 text-xl px-2">→</div>

<!-- Step 4: The Result -->
<div v-click="3" class="w-40 shrink-0">
  <div class="bg-slate-800 text-white p-3 rounded-2xl shadow-lg text-[10px] font-mono h-[160px] overflow-y-auto custom-scrollbar">
    <div class="text-green-400 border-b border-white/10 pb-1 mb-1">✅ Report</div>
    <p class="mb-1"><span class="text-slate-400">Status:</span> 吊销</p>
    <p class="mb-1"><span class="text-slate-400">Risk:</span> <span class="bg-red-500 text-white px-1 rounded">HIGH</span></p>
    <p class="text-slate-400 mb-1">Notes:</p>
    <p class="text-slate-300 leading-tight">基于搜索结果，该公司存在重大法律风险...</p>
  </div>
</div>

</div>

<div v-click="4" class="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4 mx-auto max-w-3xl">
  <div class="text-2xl mt-1">💡</div>
  <div>
    <h4 class="font-bold text-blue-900 mb-1">为什么需要两个节点？</h4>
    <p class="text-sm text-blue-700 leading-relaxed">
      Search Tool 只负责搬运“原材料”（一大堆网页原文）。<br>
      必须接一个 <strong>LLM Node</strong> 负责“加工”（阅读、总结、提取风险点），才能生成最终的一页纸报告。
    </p>
  </div>
</div>

<!--
这是我们的第二位助理：**调查员**。

很多律师问：为什么我问 ChatGPT 一家公司的情况，它老是瞎编？
原因很简单：**它的数据库是旧的。** 它不知道这家公司昨天倒闭了。

Dify 的 **Search Tool** 就是为了解决这个问题。
但直接搜出来的东西是乱七八糟的网页原文（Raw Data）。

所以我们加了一步：
1.  **Search Tool**：负责“跑腿”，去 Google/企查查把所有相关网页抓回来。
2.  **LLM Node**：负责“动脑”，阅读这些网页，把“已吊销”、“重案缠身”这些关键信息提取出来。

这就是**“手脑并用”**。
-->
