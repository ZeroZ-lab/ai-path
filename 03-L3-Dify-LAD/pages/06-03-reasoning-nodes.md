---
layout: default
---

## 6.3 核心推理：大脑与分流器

<div class="grid gap-8 md:grid-cols-[1.4fr_1fr] mt-8 items-stretch">

<!-- LLM Node -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 border-b border-purple-200 pb-2">
        <span class="text-3xl">🤖</span>
        <h3 class="text-lg font-bold text-purple-900">LLM (大模型)</h3>
    </div>
    <div class="space-y-4 flex-1">
        <p class="text-xs text-slate-600 leading-relaxed">
            这是 Workflow 的心脏。在这里调用 GPT-4 或 Claude，执行具体的任务。
        </p>
        <div class="bg-white p-3 rounded-xl border border-purple-100 text-[10px]">
            <div class="flex justify-between font-bold text-purple-700 mb-1">关键配置</div>
            <ul class="list-disc pl-4 space-y-1 text-slate-500">
                <li><strong>Model</strong>: 选择哪个模型 (gpt-4o / deepseek-v3)。</li>
                <li><strong>Prompt</strong>: 输入你的提示词 (User / System)。</li>
                <li><strong>Context</strong>: 是否挂载知识库。</li>
            </ul>
        </div>
    </div>
</div>

<!-- Classifier Node -->
<div v-click class="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 border-b border-indigo-200 pb-2">
        <span class="text-3xl">⚖️</span>
        <h3 class="text-lg font-bold text-indigo-900">问题分类器</h3>
    </div>
    <div class="space-y-4 flex-1">
        <p class="text-xs text-slate-600 leading-relaxed">
            利用 LLM 的理解能力，将用户问题进行意图分类。
        </p>
        <div class="bg-white p-3 rounded-xl border border-indigo-100 text-[10px] space-y-2">
            <div class="flex justify-between items-center">
                <span class="text-slate-500">用户说 "退款"</span>
                <span class="i-carbon-arrow-right text-indigo-300"></span>
                <span class="bg-indigo-100 text-indigo-700 px-2 rounded">售后</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-slate-500">用户说 "多少钱"</span>
                <span class="i-carbon-arrow-right text-indigo-300"></span>
                <span class="bg-blue-100 text-blue-700 px-2 rounded">售前</span>
            </div>
        </div>
    </div>
</div>

</div>
