---
layout: default
---

## 7.1.5 案例图解：切分前 vs 切分后

<div class="grid gap-8 md:grid-cols-2 mt-6 items-stretch">

  <!-- Case 1: QA Split -->
  <div class="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm flex flex-col">
    <div class="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4 flex items-center gap-2">
      <span class="text-xl">❓</span> QA 问答对 (Excel)
    </div>
    <!-- Before -->
    <div class="bg-white rounded-xl border border-emerald-200 p-2 mb-2 shadow-sm opacity-80">
      <div class="text-[9px] text-slate-400 mb-1">Original Excel Row 2</div>
      <div class="grid grid-cols-[1fr_2fr] gap-2 border border-slate-200 rounded text-[9px]">
        <div class="bg-emerald-100 p-1 font-bold text-emerald-800">Q: 怎么报销?</div>
        <div class="bg-slate-50 p-1 text-slate-600">A: 登录OA系统...</div>
      </div>
    </div>
    <div class="flex justify-center my-1"><div class="i-carbon-arrow-down text-emerald-300"></div></div>
    <!-- After -->
    <div class="bg-white rounded-xl border-2 border-emerald-500 p-3 shadow-md relative overflow-hidden flex-1">
      <div class="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] px-2 py-0.5 rounded-bl">Chunk #102</div>
      <div class="font-mono text-[9px] text-slate-600 leading-relaxed">
        <span class="text-emerald-600 font-bold">Q: 怎么报销?</span><br>
        <span class="text-slate-500">A: 登录OA系统，点击财务中心-费用报销，上传发票...</span>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-100 flex gap-2">
        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[8px]">Keywords: 报销, OA</span>
      </div>
    </div>
  </div>

  <!-- Case 2: Rule Split -->
  <div class="rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm flex flex-col">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
      <span class="text-xl">📜</span> 法规条文 (Txt)
    </div>
    <!-- Before -->
    <div class="bg-white rounded-xl border border-blue-200 p-2 mb-2 shadow-sm opacity-80 relative">
      <div class="text-[9px] text-slate-400 mb-1">Original Full Text</div>
      <div class="text-[9px] text-slate-600 leading-tight h-12 overflow-hidden mask-bottom">
        第一条 为了规范... 第二条 本法适用于... 第三条 违反本法...
      </div>
      <!-- Scissors -->
      <div class="absolute left-1/3 top-1/2 -translate-y-1/2 text-2xl animate-pulse">✂️</div>
      <div class="absolute left-2/3 top-1/2 -translate-y-1/2 text-2xl animate-pulse">✂️</div>
    </div>
    <div class="flex justify-center my-1"><div class="i-carbon-arrow-down text-blue-300"></div></div>
    <!-- After -->
    <div class="space-y-2 flex-1">
      <div class="bg-white rounded-xl border-l-4 border-blue-500 p-2 shadow-sm">
        <div class="text-[8px] text-blue-400 mb-0.5">Chunk #001</div>
        <p class="text-[9px] text-slate-700"><strong>第一条</strong> 为了规范...</p>
      </div>
      <div class="bg-white rounded-xl border-l-4 border-blue-500 p-2 shadow-sm">
        <div class="text-[8px] text-blue-400 mb-0.5">Chunk #002</div>
        <p class="text-[9px] text-slate-700"><strong>第二条</strong> 本法适用于...</p>
      </div>
    </div>
  </div>

</div>

<style>
.mask-bottom {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}
</style>
