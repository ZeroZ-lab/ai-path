---
layout: default
---

## 6.1 节点全景图：5 大核心阵营

<div class="grid grid-cols-5 gap-4 mt-10 items-stretch">

<!-- 1. Interaction -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 h-full hover:shadow-2xl transition-all hover:-translate-y-2">
        <div class="text-xl font-black text-blue-700 uppercase mb-5 text-center">交互</div>
        <div class="space-y-3">
            <div class="bg-white py-3 rounded-xl border-2 border-blue-100 text-base text-center text-slate-700 font-bold shadow-sm">Start</div>
            <div class="bg-white py-3 rounded-xl border-2 border-blue-100 text-base text-center text-slate-700 font-bold shadow-sm">End</div>
            <div class="bg-white py-3 rounded-xl border-2 border-blue-100 text-base text-center text-slate-700 font-bold shadow-sm">Answer</div>
            <div class="bg-white py-3 rounded-xl border-2 border-blue-100 text-base text-center text-slate-700 font-bold shadow-sm">Input</div>
        </div>
    </div>
</div>

<!-- 2. Reasoning -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 h-full hover:shadow-2xl transition-all hover:-translate-y-2">
        <div class="text-xl font-black text-purple-700 uppercase mb-5 text-center">推理</div>
        <div class="space-y-3">
            <div class="bg-purple-600 py-3 rounded-xl border-2 border-purple-600 text-base text-center text-white font-bold shadow-md">LLM</div>
            <div class="bg-white py-3 rounded-xl border-2 border-purple-100 text-base text-center text-slate-700 font-bold shadow-sm">Agent</div>
            <div class="bg-white py-3 rounded-xl border-2 border-purple-100 text-base text-center text-slate-700 font-bold shadow-sm">Classify</div>
            <div class="bg-white py-3 rounded-xl border-2 border-purple-100 text-base text-center text-slate-700 font-bold shadow-sm">Extract</div>
        </div>
    </div>
</div>

<!-- 3. Logic -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 h-full hover:shadow-2xl transition-all hover:-translate-y-2">
        <div class="text-xl font-black text-amber-700 uppercase mb-5 text-center">逻辑</div>
        <div class="space-y-3">
            <div class="bg-white py-3 rounded-xl border-2 border-amber-100 text-base text-center text-slate-700 font-bold shadow-sm">If-Else</div>
            <div class="bg-white py-3 rounded-xl border-2 border-amber-100 text-base text-center text-slate-700 font-bold shadow-sm">Iterate</div>
            <div class="bg-white py-3 rounded-xl border-2 border-amber-100 text-base text-center text-slate-700 font-bold shadow-sm">Loop</div>
        </div>
    </div>
</div>

<!-- 4. Transformation -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 h-full hover:shadow-2xl transition-all hover:-translate-y-2">
        <div class="text-xl font-black text-slate-600 uppercase mb-5 text-center">转换</div>
        <div class="space-y-3">
            <div class="bg-white py-3 rounded-xl border-2 border-slate-200 text-base text-center text-slate-700 font-bold shadow-sm">Code</div>
            <div class="bg-white py-3 rounded-xl border-2 border-slate-200 text-base text-center text-slate-700 font-bold shadow-sm">Template</div>
            <div class="bg-white py-3 rounded-xl border-2 border-slate-200 text-base text-center text-slate-700 font-bold shadow-sm">Assign</div>
            <div class="bg-white py-3 rounded-xl border-2 border-slate-200 text-base text-center text-slate-700 font-bold shadow-sm">Merge</div>
        </div>
    </div>
</div>

<!-- 5. Extension -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 h-full hover:shadow-2xl transition-all hover:-translate-y-2">
        <div class="text-xl font-black text-emerald-700 uppercase mb-5 text-center">扩展</div>
        <div class="space-y-3">
            <div class="bg-white py-3 rounded-xl border-2 border-emerald-100 text-base text-center text-slate-700 font-bold shadow-sm">RAG</div>
            <div class="bg-white py-3 rounded-xl border-2 border-emerald-100 text-base text-center text-slate-700 font-bold shadow-sm">HTTP</div>
            <div class="bg-white py-3 rounded-xl border-2 border-emerald-100 text-base text-center text-slate-700 font-bold shadow-sm">Tools</div>
        </div>
    </div>
</div>

</div>

<!--
我们可以把这些节点看作是一家公司的 5 个核心部门：

1.  **交互部门（前台）**：Start 和 End 节点，专门负责和用户打交道，接单和交付。
2.  **推理部门（专家）**：LLM 节点，公司里最聪明的大脑，负责核心业务的思考。
3.  **逻辑部门（调度）**：If-Else 节点，像红绿灯一样指挥流程往哪走。
4.  **转换部门（文员）**：Template 和 Code 节点，负责把专家写好的内容排版、格式化。
5.  **扩展部门（外联）**：RAG 和 HTTP 节点，负责去知识库查资料，或者调用外部的 Google 搜索、发邮件。

接下来，我们将深入每一个部门，看看它们是怎么协同工作的。
-->
