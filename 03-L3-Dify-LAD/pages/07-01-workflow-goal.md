---
layout: default
---

## 7.1 实战目标：打造 "AI 编辑部"

<div class="flex flex-col items-center justify-center h-full mt-4 gap-8">

<div class="w-full max-w-4xl bg-slate-50 rounded-[32px] border border-slate-200 p-8 relative overflow-hidden shadow-inner">
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#94a3b815_1px,transparent_1px),linear-gradient(to_bottom,#94a3b815_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div class="flex items-center justify-between relative z-10">
        <!-- Start -->
        <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-md">
                🚦
            </div>
            <span class="text-xs font-bold text-slate-600">Start</span>
            <span class="text-[10px] text-slate-400">Input: Topic</span>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
        <!-- Node 1: Outline -->
        <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-3xl shadow-md">
                📑
            </div>
            <span class="text-xs font-bold text-blue-700">LLM: 大纲</span>
            <span class="text-[10px] text-slate-400">GPT-4o</span>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
        <!-- Node 2: Draft -->
        <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-3xl shadow-md">
                ✍️
            </div>
            <span class="text-xs font-bold text-purple-700">LLM: 初稿</span>
            <span class="text-[10px] text-slate-400">Claude 3.5</span>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
        <!-- Node 3: Review -->
        <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-3xl shadow-md">
                🧐
            </div>
            <span class="text-xs font-bold text-amber-700">LLM: 评审</span>
            <span class="text-[10px] text-slate-400">DeepSeek-V3</span>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
        <!-- End -->
        <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-md">
                🏁
            </div>
            <span class="text-xs font-bold text-slate-600">End</span>
            <span class="text-[10px] text-slate-400">Output: Report</span>
        </div>
    </div>
</div>

<div class="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
    <div class="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
        <div class="text-xs font-bold text-blue-600 mb-1">Step 1. 策划</div>
        <p class="text-xs text-slate-600">根据用户输入的主题，生成 3-5 点大纲结构。</p>
    </div>
    <div class="rounded-2xl border border-purple-100 bg-purple-50/50 p-4">
        <div class="text-xs font-bold text-purple-600 mb-1">Step 2. 撰写</div>
        <p class="text-xs text-slate-600">基于生成的大纲，扩充为一篇 800 字的文章。</p>
    </div>
    <div class="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
        <div class="text-xs font-bold text-amber-600 mb-1">Step 3. 质检</div>
        <p class="text-xs text-slate-600">作为“主编”，对文章进行打分和修改建议。</p>
    </div>
</div>

</div>
