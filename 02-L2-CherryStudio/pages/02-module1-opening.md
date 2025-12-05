---
layout: center
---

# 01 导览

---

## 1.1 现状与痛点

<div class="grid grid-cols-2 gap-8 mt-5">

<div v-click class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-8 shadow-[0_15px_30px_rgba(59,130,246,0.1)] hover:shadow-blue-200/50 transition-all duration-300">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Status Check</div>
  <h3 class="text-2xl font-bold text-blue-900 mb-6">🙋‍♂️ 你的 AI 现状？</h3>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-xs font-bold">1</span>
      <span class="text-slate-700">还没怎么用过</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-300 text-blue-800 text-xs font-bold">2</span>
      <span class="text-slate-700">偶尔用 ChatGPT / 文心一言网页版</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold">3</span>
      <span class="text-slate-700 font-medium">已经是 API 用户或 Plus 会员</span>
    </div>
  </div>
</div>

<div v-click class="rounded-[32px] border border-rose-100 bg-rose-50/80 p-8 shadow-[0_15px_30px_rgba(244,63,94,0.1)] hover:shadow-rose-200/50 transition-all duration-300">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-rose-400 mb-4">Pain Points</div>
  <h3 class="text-2xl font-bold text-rose-900 mb-6">😫 最大的痛点？</h3>
  <div class="space-y-3 text-slate-700">
    <div class="flex items-start gap-2">
      <span class="text-rose-500 mt-1">✕</span>
      <span>想对比回答，得开好几个窗口复制粘贴？</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-rose-500 mt-1">✕</span>
      <span>历史记录分散在不同平台，难以统一管理？</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-rose-500 mt-1">✕</span>
      <span>好用的 Prompt 模板无法方便地复用或管理？</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-rose-500 mt-1">✕</span>
      <span>担心聊天数据隐私安全，无法本地存储？</span>
    </div>
  </div>
</div>

</div>

---
layout: default
---

## 1.2 大模型生态：模型 vs 客户端

<div class="grid grid-cols-2 gap-8 mt-8 items-stretch">
  <!-- Model Card -->
  <div class="rounded-[32px] border border-purple-100 bg-purple-50/80 p-8 shadow-[0_15px_30px_rgba(147,51,234,0.1)] relative overflow-hidden group hover:shadow-purple-200/50 transition-all duration-300">
    <div class="absolute top-4 right-4 text-8xl opacity-5 select-none group-hover:scale-110 transition-transform duration-500">🧠</div>
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500 mb-4">The Brain</div>
    <h3 class="text-2xl font-bold text-purple-900 mb-2">模型 (Model)</h3>
    <p class="text-sm text-purple-800/70 font-medium mb-6">负责思考、计算、生成内容</p>
    <div class="space-y-3">
      <div class="flex items-center gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm border border-purple-100/50">
        <div class="text-xl">🤖</div>
        <span class="text-slate-700 font-bold text-sm">OpenAI (GPT-4o)</span>
      </div>
      <div class="flex items-center gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm border border-purple-100/50">
        <div class="text-xl">🎭</div>
        <span class="text-slate-700 font-bold text-sm">Anthropic (Claude 3.5)</span>
      </div>
      <div class="flex items-center gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm border border-purple-100/50">
        <div class="text-xl">🦈</div>
        <span class="text-slate-700 font-bold text-sm">DeepSeek (深度求索)</span>
      </div>
    </div>
  </div>
  <!-- Client Card -->
  <div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-8 shadow-[0_15px_30px_rgba(16,185,129,0.1)] relative overflow-hidden group hover:shadow-emerald-200/50 transition-all duration-300">
    <div class="absolute top-4 right-4 text-8xl opacity-5 select-none group-hover:scale-110 transition-transform duration-500">🖥️</div>
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4">The Tool</div>
    <h3 class="text-2xl font-bold text-emerald-900 mb-2">客户端 (Client)</h3>
    <p class="text-sm text-emerald-800/70 font-medium mb-6">负责展示、管理、交互</p>
    <div class="space-y-3">
      <div class="flex items-center gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm border border-emerald-100/50">
        <div class="text-xl">🍒</div>
        <span class="text-slate-700 font-bold text-sm">Cherry Studio</span>
      </div>
      <div class="flex items-center gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm border border-emerald-100/50">
        <div class="text-xl">💬</div>
        <span class="text-slate-700 font-bold text-sm">NextChat / Chatbox</span>
      </div>
      <div class="flex items-center gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm border border-emerald-100/50">
        <div class="text-xl">🌐</div>
        <span class="text-slate-700 font-bold text-sm">浏览器网页端</span>
      </div>
    </div>
  </div>
</div>
