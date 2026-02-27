---
layout: center
---

# 08 进阶扩展：MCP 协议

---
layout: default
---

## 8.1 什么是 MCP？(Model Context Protocol)

<div class="grid gap-6 md:grid-cols-2 mt-4 items-stretch">

<!-- Left: The Problem (Chaos) -->
<div class="rounded-[32px] border border-rose-100 bg-rose-50/80 p-6 shadow-lg flex flex-col relative overflow-hidden">
  <div class="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">Before MCP</div>
  <h3 class="text-xl font-bold text-rose-900 mb-4">各自为战的“转接头”时代</h3>
  
  <div class="flex-1 flex flex-col justify-center items-center gap-4 relative z-10">
    <div class="flex gap-2 flex-wrap justify-center opacity-80">
        <span class="px-2 py-1 bg-white rounded-lg border border-rose-200 text-[10px] shadow-sm">Claude 适配 GitHub</span>
        <span class="px-2 py-1 bg-white rounded-lg border border-rose-200 text-[10px] shadow-sm">ChatGPT 适配 Google Drive</span>
        <span class="px-2 py-1 bg-white rounded-lg border border-rose-200 text-[10px] shadow-sm">Cherry 适配 Notion</span>
    </div>
    <div class="text-3xl">😫</div>
    <p class="text-xs text-rose-700 text-center px-4 leading-relaxed">
        每个 AI 模型都要单独为每个数据源写代码，开发累，维护难，生态割裂。
    </p>
  </div>
  
  <!-- Background decorative lines -->
  <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>

<!-- Right: The Solution (Standard) -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg flex flex-col relative overflow-hidden">
  <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">With MCP</div>
  <h3 class="text-xl font-bold text-blue-900 mb-4">AI 时代的“USB 接口”</h3>
  
  <div class="flex-1 flex flex-col justify-center items-center gap-4 relative z-10">
    <div class="flex items-center gap-2">
       <div class="flex flex-col gap-1">
          <div class="w-10 h-6 bg-white rounded border border-blue-200 flex items-center justify-center text-[10px] shadow-sm">Claude</div>
          <div class="w-10 h-6 bg-white rounded border border-blue-200 flex items-center justify-center text-[10px] shadow-sm">Cherry</div>
       </div>
       <div class="h-10 w-0.5 bg-blue-400 rounded-full"></div>
       <div class="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold shadow-md flex items-center gap-1">
          <span class="i-carbon-usb text-lg"></span>
          <span class="text-xs">MCP</span>
       </div>
       <div class="h-10 w-0.5 bg-blue-400 rounded-full"></div>
       <div class="flex flex-col gap-1">
          <div class="w-10 h-6 bg-white rounded border border-blue-200 flex items-center justify-center text-[10px] shadow-sm">GitHub</div>
          <div class="w-10 h-6 bg-white rounded border border-blue-200 flex items-center justify-center text-[10px] shadow-sm">Files</div>
       </div>
    </div>
    <div class="text-3xl">😎</div>
    <p class="text-xs text-blue-700 text-center px-4 leading-relaxed">
        一次开发，处处运行。只要支持 MCP 协议，任何 AI 都能连接任何数据源。
    </p>
  </div>

  <!-- Background decorative -->
  <div class="absolute -right-10 -bottom-10 text-8xl opacity-5 text-blue-900">🔌</div>
</div>

</div>

<div class="mt-6 text-center text-slate-500 text-xs">
    <span class="font-bold text-slate-700">核心价值：</span> 解锁 AI 连接真实世界数据的能力，且标准统一。
</div>
