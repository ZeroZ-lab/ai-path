---
layout: default
---

## 9.2 分段策略：切大还是切小？

<div class="grid gap-8 md:grid-cols-[1fr_1.2fr] mt-8 items-center">

<!-- Concept: The Dilemma -->
<div class="space-y-6">
    <div class="rounded-3xl bg-amber-50/80 border border-amber-100 p-6 shadow-sm">
        <h3 class="text-lg font-bold text-amber-900 mb-3">🤔 切片的困境</h3>
        <div class="space-y-3">
            <div class="flex items-center gap-3">
                <span class="text-2xl">🤏</span>
                <div>
                    <div class="text-xs font-bold text-amber-800">切太小</div>
                    <div class="text-[10px] text-amber-700/70">语义丢失，AI 不知道前因后果。</div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-2xl">🐘</span>
                <div>
                    <div class="text-xs font-bold text-amber-800">切太大</div>
                    <div class="text-[10px] text-amber-700/70">包含噪音多，且容易超出 Token 限制。</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Solution: Parent-Child -->
<div class="rounded-3xl border border-purple-100 bg-white p-6 shadow-lg relative">
    <div class="absolute -top-3 right-6 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">最佳实践</div>
    <h3 class="text-xl font-bold text-purple-900 mb-6">父子索引 (Parent-Child)</h3>
    <div class="flex flex-col gap-4 relative">
        <!-- Parent Chunk -->
        <div class="border-2 border-dashed border-purple-200 rounded-2xl p-4 bg-purple-50/30 relative">
            <div class="absolute -top-3 left-4 bg-white text-purple-500 px-2 text-[10px] font-bold border border-purple-100 rounded">Parent (父切片)</div>
            <p class="text-[10px] text-purple-800/50 line-clamp-2">
                ...这是一段很长的完整上下文，包含了故事的起因、经过和结果，能够提供给大模型最全面的信息，确保回答准确无误...
            </p>
            <div class="mt-2 text-center text-[9px] text-purple-400 font-mono">用于：给 LLM 阅读 (Generation)</div>
        </div>
        <!-- Link -->
        <div class="flex justify-center -my-2 z-10">
            <div class="i-carbon-link text-purple-300 bg-white rounded-full p-1"></div>
        </div>
        <!-- Child Chunks -->
        <div class="grid grid-cols-2 gap-3">
            <div class="bg-purple-600 text-white p-3 rounded-xl shadow-md text-center">
                <div class="text-[10px] font-bold mb-1">Child 1</div>
                <div class="text-[9px] opacity-80">小片段 A</div>
            </div>
            <div class="bg-purple-600 text-white p-3 rounded-xl shadow-md text-center">
                <div class="text-[10px] font-bold mb-1">Child 2</div>
                <div class="text-[9px] opacity-80">小片段 B</div>
            </div>
        </div>
        <div class="text-center text-[9px] text-purple-600 font-bold mt-1">
            用于：向量检索 (Retrieval)
        </div>
    </div>
    <p class="text-xs text-slate-600 mt-6 text-center">
        <strong>核心逻辑：</strong> 用“小切片”做精准匹配，找到后把背后的“大切片”喂给 AI。
    </p>
</div>

</div>
