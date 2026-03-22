---
layout: default
---

## 5.4.2 v1.0+ 思考：输入变多了，结果变好了吗？

<div class="mt-8 flex items-center justify-center gap-6">

  <!-- Input: Structured Form -->
  <div class="w-64 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col gap-2 relative transition-all hover:shadow-md">
    <div class="absolute -top-3 -left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">Start Node</div>
    <div class="flex items-center gap-2 mb-1">
        <span class="text-2xl">📋</span>
        <span class="font-bold text-slate-700 text-sm">Form Input</span>
    </div>
    <div class="flex justify-between items-center bg-slate-50 px-2 py-1.5 rounded border border-slate-100">
        <span class="text-[10px] font-mono text-slate-400">tenant:</span>
        <span class="text-xs font-bold text-slate-700">"张三"</span>
    </div>
    <div class="flex justify-between items-center bg-slate-50 px-2 py-1.5 rounded border border-slate-100">
        <span class="text-[10px] font-mono text-slate-400">price:</span>
        <span class="text-xs font-bold text-slate-700">5000</span>
    </div>
    <div class="flex justify-between items-center bg-slate-50 px-2 py-1.5 rounded border border-slate-100">
        <span class="text-[10px] font-mono text-slate-400">loc:</span>
        <span class="text-xs font-bold text-slate-700">"朝阳区"</span>
    </div>
  </div>

  <div class="i-carbon-arrow-right text-slate-300 text-3xl"></div>

  <!-- LLM: Simple Prompt -->
  <div class="w-56 bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm text-center relative">
    <div class="absolute -top-3 right-4 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">LLM</div>
    <div class="text-4xl mb-3">🤖</div>
    <div class="text-base font-bold text-blue-800">直接生成</div>
    <div class="text-xs text-blue-600/70 mt-2 font-mono bg-blue-100 p-1.5 rounded">
      Prompt: "帮我用{{vars}}写合同"
    </div>
  </div>

  <div class="i-carbon-arrow-right text-slate-300 text-3xl"></div>

  <!-- Output: Messy Text -->
  <div class="w-56 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center relative">
    <div class="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">Output</div>
    <div class="text-4xl mb-3">📝</div>
    <div class="text-base font-bold text-slate-700">"小作文"</div>
    <div class="text-xs text-slate-400 mt-2 text-justify leading-tight bg-slate-50 p-2 rounded">
      "张三和房东要友好相处，每个月5000块，住在朝阳区..."
    </div>
  </div>

</div>

<div v-click class="mt-10 bg-amber-50 border border-amber-100 p-6 rounded-2xl text-center mx-auto max-w-3xl transition-all duration-500">
  <div class="text-lg font-bold text-amber-800 mb-2">🤔 只有结构化输入是不够的</div>
  <p class="text-sm text-amber-700 leading-relaxed">
    很多新手以为把 <span class="font-bold">Chat 里的 Prompt 改成 Form</span> 就是 Workflow。<br>
    但只要中间的处理（LLM）还是“一锅炖”，结果就依然是“不可控的散文”。<br>
    <strong>结构化输入 (Input) + 结构化思考 (Chain) = 真正的 Workflow</strong>
  </p>
</div>
