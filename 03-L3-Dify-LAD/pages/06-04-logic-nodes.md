---
layout: default
---

## 6.4 逻辑三剑客：If, Iteration, Loop

<div class="grid gap-6 md:grid-cols-3 mt-8 mb-6 items-stretch">

<!-- If-Else -->
<div v-click class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
    <!-- Badge -->
    <div class="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1.5 rounded-bl-2xl font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
        🔥 高频 (Must Use)
    </div>
    <div class="flex items-center gap-3 mb-4 mt-2">
        <span class="text-4xl p-2 bg-white rounded-xl shadow-sm">🔀</span>
        <h3 class="text-lg font-bold text-amber-900">If-Else (分支)</h3>
    </div>
    <div class="bg-white rounded-xl p-3 border border-amber-100 h-20 flex flex-col justify-center">
        <div class="flex justify-center items-center gap-4 text-xs font-mono">
            <div class="flex flex-col items-center">
                <span class="text-green-600 font-bold text-[10px]">True</span>
                <span class="i-carbon-arrow-down-right text-lg text-green-400"></span>
            </div>
            <span class="bg-slate-100 px-2 py-1 rounded border border-slate-200">x > 5?</span>
            <div class="flex flex-col items-center">
                <span class="text-rose-600 font-bold text-[10px]">False</span>
                <span class="i-carbon-arrow-down-left text-lg text-rose-400"></span>
            </div>
        </div>
    </div>
    <p class="text-sm text-slate-600 mt-4 leading-relaxed">
        单次判断。用于根据条件走不同路径（如：问题是关于售前还是售后？）。
    </p>
</div>

<!-- Iteration -->
<div v-click class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
    <!-- Badge -->
    <div class="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1.5 rounded-bl-2xl font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
        ⚡️ 提效 (Efficiency)
    </div>
    <div class="flex items-center gap-3 mb-4 mt-2">
        <span class="text-4xl p-2 bg-white rounded-xl shadow-sm">🔁</span>
        <h3 class="text-lg font-bold text-blue-900">Iteration (迭代)</h3>
    </div>
    <div class="bg-white rounded-xl p-3 border border-blue-100 h-20 flex flex-col justify-center gap-1">
        <div class="flex justify-center gap-2">
            <span class="w-3 h-3 bg-slate-300 rounded"></span>
            <span class="w-3 h-3 bg-slate-300 rounded"></span>
            <span class="w-3 h-3 bg-slate-300 rounded"></span>
        </div>
        <div class="i-carbon-arrow-down text-center w-full text-slate-300 text-sm"></div>
        <div class="flex justify-center gap-2">
            <span class="w-3 h-3 bg-blue-400 rounded animate-pulse"></span>
            <span class="w-3 h-3 bg-blue-400 rounded animate-pulse"></span>
            <span class="w-3 h-3 bg-blue-400 rounded animate-pulse"></span>
        </div>
    </div>
    <p class="text-sm text-slate-600 mt-4 leading-relaxed">
        并行/串行处理数组。用于对列表中的每一项执行相同操作。
    </p>
</div>

<!-- Loop -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm group hover:scale-[1.02] transition-all duration-500">
    <div class="flex items-center gap-3 mb-4 mt-2">
        <span class="text-4xl p-2 bg-white rounded-xl shadow-sm">🔄</span>
        <h3 class="text-lg font-bold text-purple-900">Loop (循环)</h3>
    </div>
    <div class="bg-white rounded-xl p-3 border border-purple-100 h-20 flex items-center justify-center relative">
        <div class="w-10 h-10 border-4 border-purple-100 rounded-full border-t-purple-500 animate-spin"></div>
        <span class="absolute text-[10px] font-bold text-purple-700">Until</span>
    </div>
    <p class="text-sm text-slate-600 mt-4 leading-relaxed">
        逻辑循环。反复执行某段逻辑直到满足条件（如：生成直到字数达标）。
    </p>
</div>

</div>

<!--
欢迎来到**逻辑部门**，由律所主任和质检律师把关。

1.  **If-Else (红绿灯)**：这是**程序裁定**。如果是小额诉讼，走简易程序（左边）；如果是重大疑难案件，走普通程序（右边）。做一次判断，定一个方向。

2.  **Iteration (批量处理)**：这是**批量诉讼处理**。当你手头有 100 个类似的劳动争议案子时，不要一个一个建档。用 Iteration，它能像流水线一样，一次性把 100 份起诉状（数组）都生成出来。
    *   **关键点**：处理的是一堆**同类案子**。

3.  **Loop (循环/返工)**：这是**合规审查**。实习律师写的文书如果不合格（不满足条件），就会被合伙人打回去重写，改完再审，直到完全合规为止，才能发出去。
    *   **关键点**：是为了**达成合规标准**而反复做。
-->
