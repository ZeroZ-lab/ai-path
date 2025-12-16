---
layout: default
---

## 10.4 进阶：Knowledge Pipeline (数据流水线)

<div class="flex flex-col justify-center h-full gap-8">

<!-- The Pipeline Visualization -->
<div class="rounded-[32px] border border-indigo-100 bg-indigo-50/50 p-6 relative overflow-hidden">
    <div class="absolute top-0 left-0 bg-indigo-600 text-white px-4 py-1.5 rounded-br-2xl text-xs font-bold">ETL Workflow</div>
    <div class="flex items-center justify-between mt-4 gap-2 relative z-10">
        <!-- 1. Source -->
        <div class="flex flex-col items-center gap-2 group">
            <div class="w-16 h-16 bg-white rounded-2xl border border-indigo-200 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                📄
            </div>
            <div class="text-xs font-bold text-indigo-900">多源数据</div>
            <div class="text-[9px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100">PDF / Web / API</div>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-indigo-300 text-xl"></div>
        <!-- 2. Process (ETL) -->
        <div class="flex flex-col items-center gap-2 group">
            <div class="w-16 h-16 bg-white rounded-2xl border border-indigo-200 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                🧹
            </div>
            <div class="text-xs font-bold text-indigo-900">清洗与切片</div>
            <div class="text-[9px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100">Chunking</div>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-indigo-300 text-xl"></div>
        <!-- 3. Enhancement (The Magic) -->
        <div class="flex flex-col items-center gap-2 group relative">
            <div class="absolute -top-2 -right-2 text-xl animate-bounce">✨</div>
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg text-white group-hover:scale-110 transition-transform">
                🧠
            </div>
            <div class="text-xs font-bold text-purple-700">LLM 增强</div>
            <div class="text-[9px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100 font-bold">Q&A / Summary</div>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-indigo-300 text-xl"></div>
        <!-- 4. Storage -->
        <div class="flex flex-col items-center gap-2 group">
            <div class="w-16 h-16 bg-white rounded-2xl border border-indigo-200 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                🗄️
            </div>
            <div class="text-xs font-bold text-indigo-900">向量存储</div>
            <div class="text-[9px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100">Vector DB</div>
        </div>
    </div>
</div>

<!-- Why Enhance? -->
<div class="grid gap-6 md:grid-cols-2">
    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 class="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
            <span class="text-lg">🐢</span> 传统切片痛点
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed">
            切片往往导致<strong>上下文丢失</strong>。例如切片只包含 "他同意了"，但检索时不知道 "他" 是谁，导致无法召回。
        </p>
    </div>
    <div class="rounded-2xl border border-purple-100 bg-purple-50/50 p-5 shadow-sm">
        <h3 class="text-sm font-bold text-purple-900 mb-2 flex items-center gap-2">
            <span class="text-lg">🚀</span> LLM 增强威力
        </h3>
        <p class="text-xs text-purple-800 leading-relaxed">
            利用 LLM 为每个切片生成<strong>辅助信息</strong>（如假设性问题、摘要、关键词），大幅提升检索命中率。
        </p>
    </div>
</div>

</div>
