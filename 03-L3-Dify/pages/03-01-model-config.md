---
layout: default
---

## 3.2 模型配置：接入你的 "大脑"

<div class="grid gap-8 md:grid-cols-[1fr_1.2fr] mt-8 items-center">

<!-- Left: Concept -->
<div class="space-y-6">
    <div class="rounded-3xl bg-indigo-50/80 border border-indigo-100 p-6 shadow-sm">
        <div class="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Model Provider</div>
        <h3 class="text-xl font-bold text-indigo-900 mb-4">模型供应商</h3>
        <p class="text-sm text-slate-600 leading-relaxed">
            Dify 不生产模型，而是连接模型。你需要配置 API Key 来接入各大厂商的能力。
        </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-xs font-bold text-slate-700">系统推理模型</div>
            <div class="text-[10px] text-slate-400">System Model</div>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
            <div class="text-2xl mb-2">📐</div>
            <div class="text-xs font-bold text-slate-700">Embedding 模型</div>
            <div class="text-[10px] text-slate-400">Vectorization</div>
        </div>
    </div>
</div>

<!-- Right: Steps -->
<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg relative overflow-hidden">
    <div class="absolute top-0 right-0 bg-slate-100 px-3 py-1 rounded-bl-xl text-[10px] text-slate-500 font-mono">Settings > Model Provider</div>
    <div class="space-y-5 relative z-10">
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
            <div>
                <h4 class="text-sm font-bold text-slate-800">选择供应商</h4>
                <p class="text-xs text-slate-500 mt-1">OpenAI / Anthropic / DeepSeek / Ollama...</p>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
            <div>
                <h4 class="text-sm font-bold text-slate-800">输入 API Key</h4>
                <div class="mt-2 bg-slate-50 border border-slate-200 rounded p-2 flex items-center gap-2">
                    <span class="text-[10px] font-mono text-slate-400">sk-proj-xxxxxxxx...</span>
                </div>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
            <div>
                <h4 class="text-sm font-bold text-slate-800">设置默认模型</h4>
                <p class="text-xs text-slate-500 mt-1">建议将 GPT-4o / Claude 3.5 设为系统推理默认。</p>
            </div>
        </div>
    </div>
    <!-- Decorative -->
    <div class="absolute -bottom-10 -right-10 text-9xl opacity-5">🔑</div>
</div>

</div>
