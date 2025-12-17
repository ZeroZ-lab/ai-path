---
layout: default
---

## 9.1.2 高质量模式：Vector Index (向量索引)

<div class="grid gap-8 md:grid-cols-[1.2fr_1fr] mt-8 items-center">

<!-- Left: Concept -->
<div v-click class="space-y-6 transition-all duration-500">
    <div class="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl bg-white p-2 rounded-xl shadow-sm border border-slate-100">📐</span>
            <div>
                <h3 class="text-lg font-bold text-slate-900">向量化 (Embedding)</h3>
                <p class="text-xs text-slate-500">万物皆数，计算“意思”的距离。</p>
            </div>
        </div>
        <p class="text-sm text-slate-700 leading-relaxed">
            将文本转化为高维向量（如 1536 维的浮点数数组）。
            意思相近的句子，在数学空间里的距离（余弦相似度）就越近。
        </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <div class="text-xs font-bold text-emerald-800 mb-1">✅ 优势</div>
            <ul class="text-[10px] text-emerald-700 space-y-1 list-disc pl-4">
                <li><strong>语义理解：</strong> 搜“怎么付钱”，能找到“支付流程”。</li>
                <li><strong>跨语言：</strong> 搜中文问题，能找到英文答案。</li>
                <li><strong>容错强：</strong> 即使有错别字，大概率也能搜到。</li>
            </ul>
        </div>
        <div class="p-4 rounded-2xl bg-rose-50 border border-rose-100">
            <div class="text-xs font-bold text-rose-800 mb-1">❌ 劣势</div>
            <ul class="text-[10px] text-rose-700 space-y-1 list-disc pl-4">
                <li><strong>成本：</strong> 每次索引和搜索都要消耗 Token。</li>
                <li><strong>精确度：</strong> 搜特定型号时，可能因为太“发散”而匹配不准。</li>
            </ul>
        </div>
    </div>
</div>

<!-- Right: Visual -->
<div v-click class="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg flex flex-col items-center justify-center h-full relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
    <!-- 2D Vector Space Visualization -->
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="relative w-full h-64 border-l-2 border-b-2 border-slate-300">
        <!-- Query Point -->
        <div class="absolute left-[30%] top-[40%] flex flex-col items-center group">
            <div class="w-3 h-3 bg-blue-600 rounded-full shadow-lg ring-4 ring-blue-100"></div>
            <span class="text-[9px] font-bold text-blue-700 mt-1">Query: "喵星人"</span>
        </div>
        <!-- Target Match -->
        <div class="absolute left-[35%] top-[35%] flex flex-col items-center group animate-pulse">
            <div class="w-3 h-3 bg-emerald-500 rounded-full shadow-lg"></div>
            <span class="text-[9px] font-bold text-emerald-700 mt-1">Doc: "猫"</span>
            <!-- Connection Line -->
            <div class="absolute -z-10 w-16 h-0.5 bg-emerald-200 -rotate-45 top-4 -left-4"></div>
        </div>
        <!-- Distant Point -->
        <div class="absolute right-[20%] bottom-[20%] flex flex-col items-center opacity-50">
            <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
            <span class="text-[9px] text-slate-500 mt-1">Doc: "狗"</span>
        </div>
    </div>
    <div class="mt-4 text-[10px] text-slate-500 text-center">
        Distance(喵星人, 猫) = 0.98 (High Similarity)
    </div>
</div>

</div>

<!--
（点击 1）**高质量模式**：这是大模型时代的“魔法”。
它不看字面，看“意思”。哪怕文档里没有“喵星人”这三个字，只要有“猫”，它就知道这是同一个东西。
原理是把它们都变成“向量”，算距离。

（点击 2）看右图：
在数学空间里，“喵星人”和“猫”靠得很近，所以一搜就出来了。
而“狗”虽然也是宠物，但距离比较远，就被过滤掉了。
-->