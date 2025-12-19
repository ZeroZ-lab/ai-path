---
layout: default
---

## 6.3 核心推理：大脑与分流器

<div class="grid gap-8 md:grid-cols-[1.4fr_1fr] mt-8 items-stretch">

<!-- LLM Node -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
    <!-- Core Badge -->
    <div class="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1.5 rounded-bl-2xl font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
        ⭐ 核心 (Core)
    </div>
    <div class="flex items-center gap-4 mb-4 border-b border-purple-200 pb-3">
        <span class="text-4xl">🤖</span>
        <h3 class="text-xl font-bold text-purple-900">LLM (大模型)</h3>
    </div>
    <div class="space-y-5 flex-1">
        <p class="text-sm text-slate-600 leading-relaxed">
            这是 Workflow 的心脏。在这里调用 GPT-4 或 Claude，执行具体的任务。
        </p>
        <div class="bg-white p-4 rounded-xl border border-purple-100 text-xs">
            <div class="flex justify-between font-bold text-purple-700 mb-2 text-sm">关键配置</div>
            <ul class="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Model</strong>: 选择哪个模型 (gpt-4o / deepseek-v3)。</li>
                <li><strong>Prompt</strong>: 输入你的提示词 (User / System)。</li>
                <li><strong>Context</strong>: 是否挂载知识库。</li>
            </ul>
        </div>
    </div>
</div>

<!-- Classifier Node -->
<div v-click class="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-4 mb-4 border-b border-indigo-200 pb-3">
        <span class="text-4xl">⚖️</span>
        <h3 class="text-xl font-bold text-indigo-900">问题分类器</h3>
    </div>
    <div class="space-y-5 flex-1">
        <p class="text-sm text-slate-600 leading-relaxed">
            利用 LLM 的理解能力，将用户问题进行意图分类。
        </p>
        <div class="bg-white p-4 rounded-xl border border-indigo-100 text-xs space-y-3">
            <div class="flex justify-between items-center">
                <span class="text-slate-500">用户说 "退款"</span>
                <span class="i-carbon-arrow-right text-indigo-300 text-lg"></span>
                <span class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded font-bold">售后</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-slate-500">用户说 "多少钱"</span>
                <span class="i-carbon-arrow-right text-indigo-300 text-lg"></span>
                <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded font-bold">售前</span>
            </div>
        </div>
    </div>
</div>
</div>

<!--
这里是公司的**推理部门**，坐着公司里最聪明的一群人。

1.  **LLM (大模型)**：这是我们的**首席专家**。你把任务交给他，他负责思考、写作、分析。
    *   **Model**：就是选哪个专家（比如 DeepSeek 还是 GPT-4）。
    *   **Prompt**：就是你给专家的**任务书**。
    *   **Context**：就是你给专家查阅的**参考资料**（知识库）。

2.  **问题分类器**：这是**业务分诊台**。用户说“我要退款”，他知道这归“售后部”管；用户说“多少钱”，他知道这归“售前部”管。他专门负责把复杂的需求分门别类。
-->