---
layout: default
---

## 5.6 现场互动：真人扮演 Workflow

<div class="mt-4 text-center text-slate-500 text-sm mb-8">
  请 4 位同学上台，我们来“演”一遍数据是怎么流转的。
</div>

<div class="grid gap-6 md:grid-cols-4 items-stretch">

  <!-- Role 1 -->
  <div v-click class="bg-white border-2 border-blue-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-4xl">🙋</div>
    <div class="text-center">
      <div class="font-bold text-blue-800 text-lg">开始节点</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">大声念出用户需求</div>
    </div>
  </div>

  <!-- Role 2 -->
  <div v-click class="bg-white border-2 border-purple-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-4xl">🤖</div>
    <div class="text-center">
      <div class="font-bold text-purple-800 text-lg">LLM 大脑</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">根据需求，即兴创作</div>
    </div>
  </div>

  <!-- Role 3 -->
  <div v-click class="bg-white border-2 border-amber-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-4xl">👮</div>
    <div class="text-center">
      <div class="font-bold text-amber-800 text-lg">审核员 (If)</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">举牌：通过 / 重写</div>
    </div>
  </div>

  <!-- Role 4 -->
  <div v-click class="bg-white border-2 border-emerald-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-4xl">📢</div>
    <div class="text-center">
      <div class="font-bold text-emerald-800 text-lg">结束节点</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">展示最终结果</div>
    </div>
  </div>

</div>

<div class="mt-10 flex justify-center items-center gap-4 text-slate-400">
  <div class="i-carbon-arrow-right text-3xl"></div>
  <div class="text-sm">注意观察：谁手里的“接力棒”（变量）传给了谁？</div>
  <div class="i-carbon-arrow-right text-3xl"></div>
</div>
