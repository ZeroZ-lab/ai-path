---
layout: default
---

## 6.3 逻辑三剑客：If, Iteration, Loop

<div class="grid gap-6 md:grid-cols-3 mt-4 mb-6 items-start">

<!-- If-Else -->
<div class="rounded-3xl border border-amber-100 bg-amber-50/80 p-4 shadow-sm group hover:scale-[1.02] transition-transform">
    <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl p-1.5 bg-white rounded-lg shadow-sm">🔀</span>
        <h3 class="text-sm font-bold text-amber-900">If-Else (分支)</h3>
    </div>
    <div class="bg-white rounded-xl p-2 border border-amber-100 h-16 flex flex-col justify-center">
        <div class="flex justify-center items-center gap-4 text-[10px] font-mono">
            <div class="flex flex-col items-center">
                <span class="text-green-600 font-bold text-[9px]">True</span>
                <span class="i-carbon-arrow-down-right text-base text-green-400"></span>
            </div>
            <span class="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 text-[9px]">x > 5?</span>
            <div class="flex flex-col items-center">
                <span class="text-rose-600 font-bold text-[9px]">False</span>
                <span class="i-carbon-arrow-down-left text-base text-rose-400"></span>
            </div>
        </div>
    </div>
    <p class="text-[10px] text-slate-600 mt-2 leading-relaxed">
        单次判断。用于根据条件走不同路径（如：问题是关于售前还是售后？）。
    </p>
</div>

<!-- Iteration -->
<div class="rounded-3xl border border-blue-100 bg-blue-50/80 p-4 shadow-sm group hover:scale-[1.02] transition-transform">
    <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl p-1.5 bg-white rounded-lg shadow-sm">🔁</span>
        <h3 class="text-sm font-bold text-blue-900">Iteration (迭代)</h3>
    </div>
    <div class="bg-white rounded-xl p-2 border border-blue-100 h-16 flex flex-col justify-center gap-1">
        <div class="flex justify-center gap-1">
            <span class="w-2.5 h-2.5 bg-slate-300 rounded"></span>
            <span class="w-2.5 h-2.5 bg-slate-300 rounded"></span>
            <span class="w-2.5 h-2.5 bg-slate-300 rounded"></span>
        </div>
        <div class="i-carbon-arrow-down text-center w-full text-slate-300 text-[10px]"></div>
        <div class="flex justify-center gap-1">
            <span class="w-2.5 h-2.5 bg-blue-400 rounded animate-pulse"></span>
            <span class="w-2.5 h-2.5 bg-blue-400 rounded animate-pulse"></span>
            <span class="w-2.5 h-2.5 bg-blue-400 rounded animate-pulse"></span>
        </div>
    </div>
    <p class="text-[10px] text-slate-600 mt-2 leading-relaxed">
        并行/串行处理数组。用于对列表中的每一项执行相同操作（如：翻译 5 段文本）。
    </p>
</div>

<!-- Loop -->
<div class="rounded-3xl border border-purple-100 bg-purple-50/80 p-4 shadow-sm group hover:scale-[1.02] transition-transform">
    <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl p-1.5 bg-white rounded-lg shadow-sm">🔄</span>
        <h3 class="text-sm font-bold text-purple-900">Loop (循环)</h3>
    </div>
    <div class="bg-white rounded-xl p-2 border border-purple-100 h-16 flex items-center justify-center relative">
        <div class="w-8 h-8 border-4 border-purple-100 rounded-full border-t-purple-500 animate-spin"></div>
        <span class="absolute text-[8px] font-bold text-purple-700">Until</span>
    </div>
    <p class="text-[10px] text-slate-600 mt-2 leading-relaxed">
        逻辑循环。反复执行某段逻辑直到满足条件（如：生成内容直到字数 > 1000）。
    </p>
</div>

</div>
