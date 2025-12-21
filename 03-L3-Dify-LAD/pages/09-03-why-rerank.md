---
layout: default
---

## 7.3 为什么需要 Rerank (重排序)？

<div class="grid gap-8 md:grid-cols-[1.2fr_1fr] mt-8 items-center">

<!-- Left: The Problem -->
<div v-click class="space-y-6 transition-all duration-500">
    <div class="rounded-3xl border border-rose-100 bg-rose-50/60 p-6 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">📐</span>
            <div>
                <h3 class="text-lg font-bold text-rose-900">Embedding 的局限性</h3>
                <p class="text-xs text-rose-800/70">它是“粗排” (Bi-Encoder)，为了速度牺牲了精度。</p>
            </div>
        </div>
        <p class="text-sm text-slate-700 leading-relaxed mb-4">
            向量检索计算的是“空间距离”。在法律语境下，**意思截然相反**的两个条款，可能因为用词高度重合，在向量空间里距离非常近。
        </p>
        <div class="bg-white p-3 rounded-xl border border-rose-100 text-xs text-slate-600">
            <strong>典型翻车场景：</strong><br>
            Query: "甲方<span class="text-rose-600 font-bold">无权</span>单方解除合同"<br>
            Result 1: "甲方<span class="text-rose-600 font-bold">有权</span>单方解除合同" (❌ 意思反了，但向量极近)<br>
            Result 2: "乙方无权单方解除合同" (❌ 主体错了，但词重合高)
        </div>
    </div>
</div>

<!-- Right: The Analogy -->
<div v-click class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1">
    <div class="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-6">法律检索比喻</div>
    <div class="relative w-full flex flex-col items-center gap-4">
        <!-- Stage 1: Preliminary Screening -->
        <div class="w-full bg-blue-50 p-3 rounded-xl border border-blue-100 flex items-center gap-3">
            <span class="text-2xl">📂</span>
            <div class="text-left">
                <div class="text-xs font-bold text-blue-900">1. 初步检索 (Embedding)</div>
                <div class="text-[9px] text-blue-700/70">助理律师：拉出所有带“解除合同”的条款。</div>
            </div>
        </div>
        <div class="i-carbon-arrow-down text-slate-300"></div>
        <div class="w-full bg-emerald-50 p-3 rounded-xl border border-blue-100 flex items-center gap-3">
            <span class="text-2xl">⚖️</span>
            <div class="text-left">
                <div class="text-xs font-bold text-emerald-900">2. 深度审查 (Rerank)</div>
                <div class="text-[9px] text-emerald-700/70">合伙人律师：逐条审核，剔除意思相反的，保留最准确的。</div>
            </div>
        </div>
    </div>

</div>

</div>

<!--
Embedding 虽然快，但在法律这种失之毫厘谬以千里的领域，它不够细。

比如“甲方有权解除”和“甲方无权解除”，字面只差一个字，向量距离几乎重合。但法律后果天壤之别。

*   **Embedding (助理律师)**：负责把所有沾边的都找出来。
*   **Rerank (合伙人律师)**：负责戴上老花镜，一条条细看，把那些“字面像但意思反”的条款踢出去，把真正能用的排到第一位。
-->