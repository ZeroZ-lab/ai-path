---
layout: default
---

## 3.3 生活中的 Workflow：从菜谱到官司

<div v-click class="relative mt-8 h-[320px] w-full rounded-[32px] bg-slate-100 border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center transition-all duration-500">
    <!-- Background Conveyor Belt -->
    <div class="absolute inset-x-0 top-1/2 h-4 bg-slate-300 -translate-y-1/2"></div>
    <!-- Node 1: Input -->
    <div class="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group">
        <div class="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center text-3xl z-10 group-hover:scale-110 transition-transform">
            🪵
        </div>
        <div class="bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm">原料 (Input)</div>
    </div>
    <!-- Arrow 1 -->
    <div class="absolute left-[25%] top-1/2 -translate-y-1/2 text-slate-400 animate-pulse">
        <span class="i-carbon-arrow-right text-3xl"></span>
    </div>
    <!-- Node 2: Processing -->
    <div class="absolute left-[40%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group">
        <div class="w-20 h-20 bg-blue-100 rounded-2xl shadow-lg border border-blue-200 flex items-center justify-center text-3xl z-10 group-hover:rotate-12 transition-transform">
            ⚙️
        </div>
        <div class="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">加工 (LLM)</div>
    </div>
    <!-- Arrow 2 -->
    <div class="absolute left-[55%] top-1/2 -translate-y-1/2 text-slate-400 animate-pulse">
        <span class="i-carbon-arrow-right text-3xl"></span>
    </div>
    <!-- Node 3: Packaging -->
    <div class="absolute left-[70%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group">
        <div class="w-20 h-20 bg-purple-100 rounded-2xl shadow-lg border border-purple-200 flex items-center justify-center text-3xl z-10 group-hover:-rotate-12 transition-transform">
            🎁
        </div>
        <div class="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">包装 (Format)</div>
    </div>
    <!-- Node 4: Output -->
    <div class="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <div class="text-4xl drop-shadow-md">✨</div>
        <div class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">成品 (Output)</div>
    </div>
</div>

<div class="mt-6 text-center text-slate-500 text-sm">
    Workflow 将复杂的任务拆解成一个个简单的步骤，像工厂流水线一样自动化执行。
</div>

<!--
（点击 1）理解了变量，Workflow 就好懂了。
它就是一条“工厂流水线”。

- 原料：用户输入的问题。
- 加工：LLM 思考、推理。
- 包装：把结果整理成 JSON 或 Markdown。
- 成品：最终展示给用户的答案。

我们在 Dify 里拖拽节点，其实就是在设计这条流水线上的“工位”。
-->