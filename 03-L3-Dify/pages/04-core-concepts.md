---
layout: center
---

# 04 实战：最小应用

---
layout: default
---

## 4.1 核心应用：App 类型对比

<div class="grid gap-8 md:grid-cols-2 mt-10 items-stretch">

<!-- Type A: Chat App -->
<div class="rounded-[32px] border border-cyan-100 bg-cyan-50/80 p-8 shadow-lg hover:-translate-y-1 transition-transform">
  <div class="flex items-center justify-between mb-6">
    <div class="w-14 h-14 rounded-2xl bg-white text-3xl flex items-center justify-center shadow-sm text-cyan-600">💬</div>
    <div class="px-3 py-1 rounded-full bg-cyan-200 text-cyan-800 text-[10px] font-bold uppercase">Basic</div>
  </div>
  
  <h3 class="text-2xl font-bold text-cyan-900 mb-2">对话型应用</h3>
  <p class="text-sm text-slate-600 mb-6">类似 ChatGPT 的经典对话模式。</p>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-cyan-100/50">
      <span class="text-cyan-500 font-bold">适用</span>
      <span class="text-xs text-slate-600">客服、翻译、一般问答</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-cyan-100/50">
      <span class="text-cyan-500 font-bold">特点</span>
      <span class="text-xs text-slate-600">单轮/多轮对话，结构简单</span>
    </div>
  </div>
</div>

<!-- Type B: Workflow App -->
<div class="rounded-[32px] border border-violet-100 bg-violet-50/80 p-8 shadow-lg hover:-translate-y-1 transition-transform">
  <div class="flex items-center justify-between mb-6">
    <div class="w-14 h-14 rounded-2xl bg-white text-3xl flex items-center justify-center shadow-sm text-violet-600">🔀</div>
    <div class="px-3 py-1 rounded-full bg-violet-200 text-violet-800 text-[10px] font-bold uppercase">Advanced</div>
  </div>
  
  <h3 class="text-2xl font-bold text-violet-900 mb-2">工作流应用</h3>
  <p class="text-sm text-slate-600 mb-6">面向过程的自动化任务编排。</p>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-violet-100/50">
      <span class="text-violet-500 font-bold">适用</span>
      <span class="text-xs text-slate-600">长文章生成、数据分析、多步推理</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-violet-100/50">
      <span class="text-violet-500 font-bold">特点</span>
      <span class="text-xs text-slate-600">逻辑严密，可容错，可并行</span>
    </div>
  </div>
</div>

</div>
