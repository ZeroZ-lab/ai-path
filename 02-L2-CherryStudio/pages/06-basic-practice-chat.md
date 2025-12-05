---
layout: default
---

## 4.2 基础功能实践：对话界面

<div class="grid gap-8 md:grid-cols-[1fr_auto_1fr] mt-8 items-center">

<!-- Left: Assistants (Templates) -->
<div class="rounded-[32px] border border-purple-100 bg-purple-50/80 p-6 shadow-lg flex flex-col h-[320px] relative overflow-hidden group">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500 mb-4">Templates</div>
    <h3 class="text-2xl font-bold text-purple-900 mb-2">助手 (Assistant)</h3>
    <p class="text-sm text-purple-700/70 mb-6">预设的角色、Prompt与模型配置</p>
    <div class="space-y-3 relative z-10">
        <div class="p-3 rounded-xl bg-white/80 border border-purple-200 shadow-sm flex items-center gap-3 transition-transform hover:scale-105 cursor-pointer">
            <span class="text-xl">🤖</span>
            <div>
                <div class="font-bold text-slate-800 text-sm">通用助手</div>
                <div class="text-[10px] text-slate-500">默认模型设置</div>
            </div>
        </div>
        <div class="p-3 rounded-xl bg-white/80 border border-purple-200 shadow-sm flex items-center gap-3 transition-transform hover:scale-105 cursor-pointer">
            <span class="text-xl">🇬🇧</span>
            <div>
                <div class="font-bold text-slate-800 text-sm">翻译官</div>
                <div class="text-[10px] text-slate-500">中英互译专家</div>
            </div>
        </div>
    </div>
    <!-- Decorative background icon -->
    <div class="absolute -bottom-4 -right-4 text-9xl opacity-5 text-purple-900">🎭</div>
</div>

<!-- Center: Relationship Arrow -->
<div class="flex flex-col items-center gap-2 text-slate-400">
    <div class="text-4xl animate-pulse">➡️</div>
    <div class="text-xs text-center px-2 py-1 bg-slate-100 rounded border border-slate-200">基于助手<br>开启对话</div>
</div>

<!-- Right: Topics (Instances) -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg flex flex-col h-[320px] relative overflow-hidden">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Instances</div>
    <h3 class="text-2xl font-bold text-blue-900 mb-2">话题 (Topic)</h3>
    <p class="text-sm text-blue-700/70 mb-6">具体的聊天记录与上下文</p>
    <div class="space-y-3 relative z-10 overflow-y-auto pr-1">
        <div class="p-3 rounded-xl bg-white/80 border border-blue-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
            <div class="flex items-center gap-3 mb-1">
                <span class="text-sm">💬</span>
                <span class="font-bold text-slate-800 text-sm">解释一下量子力学...</span>
            </div>
            <div class="text-[10px] text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                通用助手
            </div>
        </div>
        <div class="p-3 rounded-xl bg-white/80 border border-blue-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
            <div class="flex items-center gap-3 mb-1">
                <span class="text-sm">💬</span>
                <span class="font-bold text-slate-800 text-sm">把这段代码转成 Python...</span>
            </div>
            <div class="text-[10px] text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                通用助手
            </div>
        </div>
        <div class="p-3 rounded-xl bg-white/80 border border-blue-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
            <div class="flex items-center gap-3 mb-1">
                <span class="text-sm">💬</span>
                <span class="font-bold text-slate-800 text-sm">翻译这篇论文摘要...</span>
            </div>
            <div class="text-[10px] text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                翻译官
            </div>
        </div>
    </div>
     <!-- Decorative background icon -->
    <div class="absolute -bottom-4 -right-4 text-9xl opacity-5 text-blue-900">📝</div>
</div>

</div>

<div class="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 flex items-center justify-center gap-4 shadow-sm">
    <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shadow-inner">💡</div>
    <div class="text-sm text-slate-700">
        <strong>核心逻辑：</strong> 一个「助手」可以被无限次使用，衍生出无数个独立的「话题」。话题是助手的具体化身。
    </div>
</div>
