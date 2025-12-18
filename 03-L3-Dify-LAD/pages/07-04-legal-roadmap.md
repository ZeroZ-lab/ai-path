---
layout: default
---

## 7.4.0 演进路线：从“写作文”到“写合同”

<div class="mt-4 flex flex-col gap-3 max-w-3xl mx-auto h-full justify-center">

  <!-- Level 1 -->
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full border-2 border-slate-200 bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-500">1</div>
    <div class="flex-1 bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
      <div class="flex justify-between items-center mb-0.5">
        <h3 class="text-xs font-bold text-slate-700">v1.0 暴力生成 (MVP)</h3>
        <span class="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">不可用</span>
      </div>
      <p class="text-[9px] text-slate-500 leading-tight">
        Input -> LLM -> Output。AI 容易写成“散文”，条款缺失，逻辑混乱。
      </p>
    </div>
  </div>

  <div class="ml-5 h-3 w-0.5 bg-slate-200"></div>

  <!-- Level 2 -->
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full border-2 border-blue-500 bg-blue-50 flex items-center justify-center text-sm font-bold text-blue-600">2</div>
    <div class="flex-1 bg-white border-2 border-blue-100 p-3 rounded-xl shadow-md">
      <div class="flex justify-between items-center mb-0.5">
        <h3 class="text-xs font-bold text-blue-900">v2.0 大纲先行 (Structure)</h3>
        <span class="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">结构稳</span>
      </div>
      <p class="text-[9px] text-slate-500 leading-tight">
        引入 <strong>Outliner</strong> 节点。先生成 JSON 大纲（条款列表），再喂给 AI 生成全文。
      </p>
    </div>
  </div>

  <div class="ml-5 h-3 w-0.5 bg-slate-200"></div>

  <!-- Level 3 -->
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full border-2 border-purple-500 bg-purple-50 flex items-center justify-center text-sm font-bold text-purple-600">3</div>
    <div class="flex-1 bg-white border-2 border-purple-100 p-3 rounded-xl shadow-md">
      <div class="flex justify-between items-center mb-0.5">
        <h3 class="text-xs font-bold text-purple-900">v3.0 分段精写 (Professional)</h3>
        <span class="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">质量高</span>
      </div>
      <p class="text-[9px] text-slate-500 leading-tight">
        引入 <strong>Iteration (迭代)</strong>。针对大纲里的每一个条款，分别调用 LLM 进行精细化撰写，最后拼装。
      </p>
    </div>
  </div>

</div>
