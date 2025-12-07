---
layout: default
---

## 8.2 版本管理与发布

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- Features -->
<div class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm flex flex-col">
    <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">🧩</span>
        <h3 class="text-sm font-bold text-amber-900">功能 (Features)</h3>
    </div>
    <p class="text-[10px] text-slate-600 mb-3 leading-relaxed">
        为应用“外挂”额外能力，通常在 Chatflow 中配置。
    </p>
    <div class="bg-white rounded-xl p-2 border border-amber-100 space-y-2 text-[10px] text-slate-600">
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-green-500"></div> 开场白
        </div>
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-green-500"></div> 下一步问题建议
        </div>
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-green-500"></div> 语音转文字
        </div>
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-slate-300"></div> 引用与归属
        </div>
    </div>
</div>

<!-- Publish -->
<div class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm flex flex-col">
    <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">🚀</span>
        <h3 class="text-sm font-bold text-emerald-900">发布 (Publish)</h3>
    </div>
    <p class="text-[10px] text-slate-600 mb-3 leading-relaxed">
        将当前的配置“固化”为生产版本。
    </p>
    <div class="bg-white rounded-xl p-3 border border-emerald-100 text-[10px] text-slate-600 space-y-2">
        <div class="flex justify-between items-center">
            <span>Status:</span>
            <span class="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Published</span>
        </div>
        <p>只有发布后，API 和 WebApp 才会更新。调试期间的修改不会影响线上用户。</p>
    </div>
</div>

<!-- History -->
<div class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-5 shadow-sm flex flex-col">
    <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">🕰️</span>
        <h3 class="text-sm font-bold text-cyan-900">版本历史 (History)</h3>
    </div>
    <p class="text-[10px] text-slate-600 mb-3 leading-relaxed">
        应用的版本控制系统 (Git for App)。
    </p>
    <div class="bg-white rounded-xl p-3 border border-cyan-100 space-y-2">
        <div class="flex justify-between text-[9px] text-slate-500">
            <span>v1.2</span>
            <span>Just now</span>
        </div>
        <div class="flex justify-between text-[9px] text-slate-500">
            <span>v1.1</span>
            <span>2 hours ago</span>
        </div>
        <div class="flex justify-between text-[9px] text-slate-500">
            <span>v1.0</span>
            <span>Yesterday</span>
        </div>
        <button class="w-full mt-1 bg-cyan-50 text-cyan-600 text-[9px] py-1 rounded hover:bg-cyan-100 transition">
            回滚 (Rollback)
        </button>
    </div>
</div>

</div>
