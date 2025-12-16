---
layout: default
---

## 7.4.1 企业级实战：智能合同生成流水线

<div class="mt-8 flex items-center justify-center gap-2 w-full">

  <!-- 1. Input -->
  <div class="flex flex-col gap-2 w-1/5 group">
    <div class="bg-white border border-slate-200 p-3 rounded-xl shadow-sm h-32 flex flex-col relative group-hover:-translate-y-1 transition-transform">
      <div class="text-[10px] font-bold text-slate-400 uppercase mb-1">Input</div>
      <div class="text-[10px] text-slate-600 leading-snug overflow-hidden">
        "跟<strong>谷歌</strong>签个<strong>销售单</strong>，总价<strong>100万</strong>，分三期付，下周一生效。"
      </div>
      <div class="mt-auto pt-2 border-t border-slate-100 flex gap-1">
        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[8px]">Text</span>
      </div>
    </div>
    <div class="text-center text-[10px] font-bold text-slate-600">需求输入</div>
  </div>

  <div class="i-carbon-arrow-right text-slate-300"></div>

  <!-- 2. Router & Extract -->
  <div class="flex flex-col gap-2 w-1/5 group">
    <div class="bg-blue-50 border border-blue-100 p-3 rounded-xl shadow-sm h-32 flex flex-col relative group-hover:-translate-y-1 transition-transform">
      <div class="absolute -top-2 -right-2 bg-blue-500 text-white text-[8px] px-1.5 rounded-full">LLM</div>
      <div class="text-[10px] font-bold text-blue-800 mb-1">识别与提取</div>
      <div class="text-[8px] font-mono text-blue-900 overflow-hidden leading-tight">
        Type: "Sales"<br>
        Client: "Google"<br>
        Amt: 1,000,000<br>
        Date: "2025-12-22"
      </div>
    </div>
    <div class="text-center text-[10px] font-bold text-blue-600">结构化 (JSON)</div>
  </div>

  <div class="i-carbon-arrow-right text-slate-300"></div>

  <!-- 3. Logic & Risk -->
  <div class="flex flex-col gap-2 w-1/5 group">
    <div class="bg-purple-50 border border-purple-100 p-3 rounded-xl shadow-sm h-32 flex flex-col relative group-hover:-translate-y-1 transition-transform">
      <div class="absolute -top-2 -right-2 bg-purple-500 text-white text-[8px] px-1.5 rounded-full">Code</div>
      <div class="text-[10px] font-bold text-purple-800 mb-1">逻辑风控</div>
      <div class="text-[8px] text-purple-900 leading-snug">
        IF amt > 50w:<br>
        + <span class="bg-purple-200 px-1 rounded">反贿赂条款</span><br>
        IF client == "Google":<br>
        + <span class="bg-purple-200 px-1 rounded">英文副本</span>
      </div>
    </div>
    <div class="text-center text-[10px] font-bold text-purple-600">条款动态组装</div>
  </div>

  <div class="i-carbon-arrow-right text-slate-300"></div>

  <!-- 4. Render -->
  <div class="flex flex-col gap-2 w-1/5 group">
    <div class="bg-emerald-50 border border-emerald-100 p-3 rounded-xl shadow-sm h-32 flex flex-col relative group-hover:-translate-y-1 transition-transform">
      <div class="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] px-1.5 rounded-full">HTTP</div>
      <div class="text-[10px] font-bold text-emerald-800 mb-1">渲染生成</div>
      <div class="flex items-center justify-center flex-1">
        <span class="text-3xl">📄</span>
      </div>
      <div class="mt-auto text-center">
        <span class="bg-white border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-bold shadow-sm">Sales_V1.docx</span>
      </div>
    </div>
    <div class="text-center text-[10px] font-bold text-emerald-600">最终交付</div>
  </div>

</div>