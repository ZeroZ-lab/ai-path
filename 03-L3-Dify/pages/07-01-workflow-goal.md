---
layout: default
---

## 5.1 实战目标：打造 "AI 编辑部"

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
        <div v-click="1" class="i-carbon-arrow-right text-slate-300 text-2xl transition-all duration-500"></div>
        <!-- Node 1: Outline -->
        <div v-click="1" class="flex flex-col items-center gap-2 transition-all duration-500">
            <div class="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-3xl shadow-md">
                📑
            </div>
            <span class="text-xs font-bold text-blue-700">LLM: 大纲</span>
            <span class="text-[10px] text-slate-400">GPT-4o</span>
        </div>
        <!-- Arrow -->
        <div v-click="2" class="i-carbon-arrow-right text-slate-300 text-2xl transition-all duration-500"></div>
        <!-- Node 2: Draft -->
        <div v-click="2" class="flex flex-col items-center gap-2 transition-all duration-500">
            <div class="w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-3xl shadow-md">
                ✍️
            </div>
            <span class="text-xs font-bold text-purple-700">LLM: 初稿</span>
            <span class="text-[10px] text-slate-400">Claude 3.5</span>
        </div>
        <!-- Arrow -->
        <div v-click="3" class="i-carbon-arrow-right text-slate-300 text-2xl transition-all duration-500"></div>
        <!-- Node 3: Review -->
        <div v-click="3" class="flex flex-col items-center gap-2 transition-all duration-500">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-3xl shadow-md">
                🧐
            </div>
            <span class="text-xs font-bold text-amber-700">LLM: 评审</span>
            <span class="text-[10px] text-slate-400">DeepSeek-V3</span>
        </div>
        <!-- Arrow -->
        <div v-click="4" class="i-carbon-arrow-right text-slate-300 text-2xl transition-all duration-500"></div>
        <!-- End -->
        <div v-click="4" class="flex flex-col items-center gap-2 transition-all duration-500">
            <div class="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-md">
                🏁
            </div>
            <span class="text-xs font-bold text-slate-600">End</span>
            <span class="text-[10px] text-slate-400">Output: Report</span>
        </div>
    </div>
</div>

<div class="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
    <div v-click="1" class="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 transition-all duration-500">
        <div class="text-xs font-bold text-blue-600 mb-1">Step 1. 策划</div>
        <p class="text-xs text-slate-600">根据用户输入的主题，生成 3-5 点大纲结构。</p>
    </div>
    <div v-click="2" class="rounded-2xl border border-purple-100 bg-purple-50/50 p-4 transition-all duration-500">
        <div class="text-xs font-bold text-purple-600 mb-1">Step 2. 撰写</div>
        <p class="text-xs text-slate-600">基于生成的大纲，扩充为一篇 800 字的文章。</p>
    </div>
    <div v-click="3" class="rounded-2xl border border-amber-100 bg-amber-50/50 p-4 transition-all duration-500">
        <div class="text-xs font-bold text-amber-600 mb-1">Step 3. 质检</div>
        <p class="text-xs text-slate-600">作为“主编”，对文章进行打分和修改建议。</p>
    </div>
</div>

</div>

<!--
我们要做的不是一个简单的“生成器”，而是一个“编辑部”。

很多同学问：“为什么要这么麻烦搞三个节点？我直接让 ChatGPT 写文章不行吗？”
答案是：**行，但质量只有 60 分。**

想象一下，如果让一个人同时做策划、写稿、校对，他会精分。AI 也是一样。

（点击 1）第一位是“策划老师”。他只负责列提纲，确定文章结构。
（点击 2）第二位是“主笔”。他拿着提纲去填肉，写初稿。
（点击 3）第三位是“主编”。他负责挑刺、润色。

通过 Workflow，我们把这三个角色串联起来，让 AI 各司其职，效果远比“让一个 AI 把所有活都干了”要好。**Workflow 的精髓，就是‘专人专事’。**
-->