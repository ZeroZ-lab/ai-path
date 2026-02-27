---
layout: default
---

## 8.2 MCP 架构：它是如何工作的？

<div class="flex flex-col items-center justify-center mt-4 gap-8">

<div class="grid grid-cols-[1fr_auto_1fr] gap-4 w-full max-w-4xl items-center">

  <!-- Host (Cherry Studio) -->
  <div class="flex flex-col gap-4">
      <div class="rounded-3xl bg-white/80 p-6 text-center shadow-xl relative group border border-slate-200 backdrop-blur-sm">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm">Host (主机)</div>
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🍒</div>
          <h3 class="text-xl font-bold text-slate-900">Cherry Studio</h3>
          <p class="text-xs text-slate-700 mt-2">负责用户交互<br>发起请求</p>
      </div>
  </div>

  <!-- Protocol (Connection) -->
  <div class="flex flex-col items-center gap-2">
      <div class="w-full flex items-center justify-center gap-2 text-slate-500 text-xs font-mono mb-1">
          <span>JSON-RPC</span>
      </div>
      <div class="w-32 h-2 bg-gradient-to-r from-slate-300 via-blue-400 to-slate-300 rounded-full animate-pulse"></div>
      <div class="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold border border-blue-200 mt-2 shadow-sm">
          MCP Protocol
      </div>
  </div>

  <!-- Server (The Tool) -->
  <div class="flex flex-col gap-4">
      <div class="rounded-3xl bg-white border border-slate-200 p-6 text-center shadow-xl relative group">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm border border-emerald-700">Server (服务端)</div>
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🧰</div>
          <h3 class="text-xl font-bold text-slate-900">MCP Server</h3>
          <p class="text-xs text-slate-600 mt-2">提供具体能力<br>(读文件/搜网页/查库)</p>
      </div>
  </div>

</div>

<!-- Capabilities Section -->
<div class="grid grid-cols-3 gap-6 w-full max-w-4xl">
    <div class="rounded-2xl bg-blue-50/50 border border-blue-100 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">📂</div>
        <div>
            <div class="text-base font-bold text-slate-800">Resources</div>
            <div class="text-xs text-slate-700">读取被动数据 (如文件)</div>
        </div>
    </div>
    <div class="rounded-2xl bg-purple-50/50 border border-purple-100 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">🛠️</div>
        <div>
            <div class="text-base font-bold text-slate-800">Tools</div>
            <div class="text-xs text-slate-700">执行主动操作 (如API调用)</div>
        </div>
    </div>
    <div class="rounded-2xl bg-amber-50/50 border border-amber-100 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">📝</div>
        <div>
            <div class="text-base font-bold text-slate-800">Prompts</div>
            <div class="text-xs text-slate-700">预设模版与上下文</div>
        </div>
    </div>
</div>

</div>
