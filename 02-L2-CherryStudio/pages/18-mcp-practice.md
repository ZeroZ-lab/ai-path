---
layout: default
---

## 8.3 实战：在 Cherry Studio 中配置 MCP

<div class="grid gap-6 md:grid-cols-[1.2fr_1fr] mt-4 items-start">

<!-- Left: The Process -->
<div class="space-y-3">
    <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm flex gap-3 items-start">
        <div class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500 shrink-0">1</div>
        <div>
            <h4 class="font-bold text-slate-800 text-xs">获取 Server 配置</h4>
            <p class="text-[10px] text-slate-500 mt-0.5">通常是一段 JSON 配置，定义了 Server 的运行命令。</p>
            <div class="mt-1 bg-slate-900 rounded p-1.5 text-[9px] font-mono text-emerald-400 overflow-x-auto">
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/Desktop"]
    }
  }
}
            </div>
        </div>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm flex gap-3 items-center">
        <div class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500 shrink-0">2</div>
        <div>
            <h4 class="font-bold text-slate-800 text-xs">填入 Cherry Studio</h4>
            <p class="text-[10px] text-slate-500 mt-0.5">设置 > MCP 服务器 > 添加/编辑配置。</p>
        </div>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm flex gap-3 items-center">
        <div class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500 shrink-0">3</div>
        <div>
            <h4 class="font-bold text-slate-800 text-xs">重启并使用</h4>
            <p class="text-[10px] text-slate-500 mt-0.5">看到状态变绿 🟢，即可在对话中调用该工具。</p>
        </div>
    </div>
</div>

<!-- Right: The Outcome -->
<div class="flex flex-col">
    <div class="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div class="bg-white rounded-2xl p-3 shadow-lg border border-indigo-100 max-w-[200px] w-full mb-4 z-10 text-left">
            <div class="flex items-center gap-2 mb-1">
                <div class="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-[10px]">🍒</div>
                <div class="text-[9px] text-slate-400">Cherry Studio</div>
            </div>
            <div class="text-[10px] text-slate-700">
                帮我读取桌面上的 "report.txt" 并总结一下。
            </div>
        </div>
        <div class="i-carbon-arrow-down text-indigo-300 text-xl mb-4 animate-bounce"></div>
        <div class="bg-white rounded-2xl p-3 shadow-lg border border-indigo-100 max-w-[200px] w-full z-10 text-left">
            <div class="flex items-center gap-2 mb-1">
                <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px]">🛠️</div>
                <div class="text-[9px] text-emerald-600 font-bold">Filesystem MCP</div>
            </div>
            <div class="text-[9px] font-mono text-slate-600 bg-slate-50 p-1.5 rounded">
                Reading file: /Users/me/Desktop/report.txt ...
            </div>
        </div>
    </div>
</div>

</div>
