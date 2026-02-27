---
layout: default
---

## 7.2 模型配置策略 (Configuration Strategy)

<div class="grid gap-6 md:grid-cols-2 mt-8 items-stretch">

<!-- Strategy A: Cloud (Recommended) -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg flex flex-col relative overflow-hidden">
  <div class="absolute top-0 right-0 px-4 py-2 bg-blue-200 rounded-bl-2xl text-blue-800 text-xs font-bold">新手推荐</div>
  
  <div class="flex items-center gap-3 mb-6">
    <span class="text-4xl">☁️</span>
    <div>
      <h3 class="text-xl font-bold text-blue-900">云端组合 (性能优先)</h3>
      <p class="text-xs text-blue-600">配置简单，效果最好</p>
    </div>
  </div>

  <div class="space-y-4 bg-white/60 p-4 rounded-2xl border border-blue-100/50 flex-1">
    <div class="grid grid-cols-[80px_1fr] gap-2 items-center">
        <span class="text-xs font-bold text-slate-500 text-right">Embedding</span>
        <div class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700">
            text-embedding-3-small (OpenAI)
        </div>
    </div>
    <div class="grid grid-cols-[80px_1fr] gap-2 items-center">
        <span class="text-xs font-bold text-slate-500 text-right">Chat</span>
        <div class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700">
            GPT-4o / DeepSeek-V3
        </div>
    </div>
    <div class="mt-4 pt-4 border-t border-blue-100 text-xs text-slate-600 leading-relaxed">
        ✅ <strong>优点：</strong> 语义理解极强，几乎不报错。<br>
        ❌ <strong>缺点：</strong> 需要 API Key，产生少量费用。
    </div>
  </div>
</div>

<!-- Strategy B: Local (Privacy) -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-lg flex flex-col relative overflow-hidden">
  <div class="absolute top-0 right-0 px-4 py-2 bg-emerald-200 rounded-bl-2xl text-emerald-800 text-xs font-bold">隐私/免费</div>
  
  <div class="flex items-center gap-3 mb-6">
    <span class="text-4xl">🏠</span>
    <div>
      <h3 class="text-xl font-bold text-emerald-900">本地组合 (隐私优先)</h3>
      <p class="text-xs text-emerald-600">数据不出门，完全免费</p>
    </div>
  </div>

  <div class="space-y-4 bg-white/60 p-4 rounded-2xl border border-emerald-100/50 flex-1">
    <div class="grid grid-cols-[80px_1fr] gap-2 items-center">
        <span class="text-xs font-bold text-slate-500 text-right">Embedding</span>
        <div class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700">
            Ollama: bge-m3 / nomic-embed
        </div>
    </div>
    <div class="grid grid-cols-[80px_1fr] gap-2 items-center">
        <span class="text-xs font-bold text-slate-500 text-right">Chat</span>
        <div class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700">
            Ollama: llama3 / qwen2.5
        </div>
    </div>
    <div class="mt-4 pt-4 border-t border-emerald-100 text-xs text-slate-600 leading-relaxed">
        ✅ <strong>优点：</strong> 0 成本，断网可用，绝对安全。<br>
        ❌ <strong>缺点：</strong> 吃电脑配置，回答速度可能较慢。
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-xs text-slate-400">
    💡 进阶玩法：本地 Embedding (免费索引) + 云端 Chat (聪明回答) = <strong>混合模式</strong>
</div>
