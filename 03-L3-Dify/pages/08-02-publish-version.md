---
layout: default
---

## 6.2 版本管理与发布

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- Features -->
<div v-click class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
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
<div v-click class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
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
<div v-click class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-5 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
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

<!--
（点击 1）**功能增强**：在发布前，别忘了看看“功能”选项卡。这里有很多免费的“外挂”，比如语音输入、开场白，勾选一下就能用。
（点击 2）**发布机制**：Dify 采用了“草稿/发布”分离的机制。你在调试区的修改，只要不点发布，线上的用户是无感知的。这保证了生产环境的安全。
（点击 3）**版本回滚**：万一发布后发现重大 Bug 怎么办？别慌，日志页面的“版本历史”里，你可以一键回滚到上一个稳定版本。
-->