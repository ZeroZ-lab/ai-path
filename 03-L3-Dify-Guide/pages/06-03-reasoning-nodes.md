---
layout: default
---

## 7.3 核心推理：大脑与分流器

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
这里是律所的**核心办公区**，坐着最资深的大律师们。

1.  **LLM (大模型)**：很多人以为 LLM 只能"聊天"，其实它是一把**瑞士军刀**，能干的活远不止回答问题：
    *   🗣️ **回答**：你问它法条，它给你解释。
    *   🏷️ **分类**：你扔给它一段话，它告诉你属于"劳动纠纷"还是"合同违约"。
    *   📦 **提取**：你给它一份合同，它帮你把甲方乙方、金额日期提取成 JSON。
    *   ✅ **判断**：你让它当审核员，判断内容是否合规，输出 True / False。
    *   🌐 **翻译**：中译英、英译中，不在话下。
    *   ✍️ **改写**：把口语变书面语，把长句变短句。
    
    所以在 Dify 里，一个 Workflow 往往会有**多个 LLM 节点**，每一个执行不同的任务——这才是生产级的用法。

2.  **问题分类器**：这是**前台导诉员**。当事人来了说"我要告老板"，他知道这归"劳动法团队"管；当事人说"我被骗了"，他知道这归"刑辩团队"管。他专门负责把杂乱的咨询分流到对应的专业团队。
-->