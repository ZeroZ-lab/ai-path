---
layout: default
---

## 9.3 为什么需要 Rerank (重排序)？

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
            向量检索计算的是“空间距离”。有些句子虽然意思完全相反（如“我爱吃苹果” vs “我不爱吃苹果”），但在向量空间里距离却非常近。
        </p>
        <div class="bg-white p-3 rounded-xl border border-rose-100 text-xs text-slate-600">
            <strong>典型翻车场景：</strong><br>
            Query: "iPhone 15 <span class="text-rose-600 font-bold">Pro</span> 价格"<br>
            Result 1: "iPhone 15 价格" (❌ 距离很近，但型号错了)<br>
            Result 2: "iPhone 15 Pro Max 价格" (❌ 也很近)
        </div>
    </div>
</div>

<!-- Right: The Analogy -->
<div v-click class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1">
    <div class="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-6">招聘面试比喻</div>
    <div class="relative w-full flex flex-col items-center gap-4">
        <!-- Stage 1: Resume Screening -->
        <div class="w-full bg-blue-50 p-3 rounded-xl border border-blue-100 flex items-center gap-3">
            <span class="text-2xl">📄</span>
            <div class="text-left">
                <div class="text-xs font-bold text-blue-900">1. 简历海选 (Embedding)</div>
                <div class="text-[9px] text-blue-700/70">快速筛选 100 份简历，看关键词匹配度。</div>
            </div>
        </div>
        <div class="i-carbon-arrow-down text-slate-300"></div>
        <div class="w-full bg-emerald-50 p-3 rounded-xl border border-blue-100 flex items-center gap-3">
            <span class="text-2xl">👔</span>
            <div class="text-left">
                <div class="text-xs font-bold text-emerald-900">2. 面试精选 (Rerank)</div>
                <div class="text-[9px] text-emerald-700/70">对前 10 名进行深度对谈，判断真实能力。</div>
            </div>
        </div>
    </div>

</div>

</div>

<!--
Embedding 虽然快，但它不够细。
就像找工作，HR 筛选简历时（Embedding），只看你有几个关键词匹配。
但真正能不能录用，还得靠业务主管面试（Rerank）。

Rerank 就是这个“面试官”。它虽然慢，但它能真正读懂你的简历。
-->