---
layout: default
---

## 3.1 Model Configuration: Connecting Your "Brain"

<div class="grid gap-8 md:grid-cols-[1fr_1.2fr] mt-8 items-center">

<!-- Left: Concept -->
<div v-click class="space-y-6 transition-all duration-500">
    <div class="rounded-3xl bg-indigo-50/80 border border-indigo-100 p-6 shadow-sm">
        <div class="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Model Provider</div>
        <h3 class="text-xl font-bold text-indigo-900 mb-4">Model Providers</h3>
        <p class="text-sm text-slate-600 leading-relaxed">
            Dify doesn't produce models—it connects to them. You need to configure API Keys to access capabilities from various providers.
        </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-xs font-bold text-slate-700">System Inference Model</div>
            <div class="text-[10px] text-slate-400">System Model</div>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
            <div class="text-2xl mb-2">📐</div>
            <div class="text-xs font-bold text-slate-700">Embedding Model</div>
            <div class="text-[10px] text-slate-400">Vectorization</div>
        </div>
    </div>
</div>

<!-- Right: Steps -->
<div v-click class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg relative overflow-hidden transition-all duration-500">
    <div class="absolute top-0 right-0 bg-slate-100 px-3 py-1 rounded-bl-xl text-[10px] text-slate-500 font-mono">Settings > Model Provider</div>
    <div class="space-y-5 relative z-10">
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
            <div>
                <h4 class="text-sm font-bold text-slate-800">Select Provider</h4>
                <p class="text-xs text-slate-500 mt-1">OpenAI / Anthropic / DeepSeek / Ollama...</p>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
            <div>
                <h4 class="text-sm font-bold text-slate-800">Enter API Key</h4>
                <div class="mt-2 bg-slate-50 border border-slate-200 rounded p-2 flex items-center gap-2">
                    <span class="text-[10px] font-mono text-slate-400">sk-proj-xxxxxxxx...</span>
                </div>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
            <div>
                <h4 class="text-sm font-bold text-slate-800">Set Default Model</h4>
                <p class="text-xs text-slate-500 mt-1">Recommend setting GPT-4o / Claude 3.5 as system inference default.</p>
            </div>
        </div>
    </div>
    <!-- Decorative -->
    <div class="absolute -bottom-10 -right-10 text-9xl opacity-5">🔑</div>
</div>

</div>

<!--
(Click 1) First, we need to understand a concept: Dify itself doesn't come with large models.
It's like a "power strip"—you need to plug in the "plugs" from OpenAI, DeepSeek, and other providers.
You mainly need to configure two types of models:
One is the "system inference model" for chatting with you;
The other is the "Embedding model" for knowledge base vectorization.

(Click 2) The operation is very simple:
Go to Settings -> Model Provider, find your provider (like DeepSeek), enter the API Key.
Finally, don't forget to set it as the "default model"—this way you won't have to select it every time you create a new application.
-->
