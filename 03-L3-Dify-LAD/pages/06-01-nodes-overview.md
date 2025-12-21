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
我们可以把这 5 类节点想象成一个**“数字化律所”**的各级职能：

1.  **交互部门（立案/结案）**：Start 和 End 节点。就好比前台接待客户记录案情（Input），以及最后盖章出具《法律意见书》交付给客户（Output）。
2.  **推理部门（资深律师）**：LLM 节点。这是律所最核心的大脑，负责分析案情、起草合同条款、撰写辩护词。
3.  **逻辑部门（案件分流）**：If-Else 节点。像律所的主任，判断案子该走什么程序：如果是简易程序走流程A，如果是复杂诉讼走流程B。
4.  **转换部门（律师助理）**：Template 和 Code 节点。负责处理格式杂活，比如把律师写好的段落套进《合同标准模板》里，或者用计算器算出具体的赔偿金额、利息。
5.  **扩展部门（资料室/外勤）**：RAG 和 HTTP 节点。负责去“档案室”翻阅法条、过往判例（检索知识库），或者去法院系统查询案件进度、发送正式律师函（联网/API调用）。

接下来，我们将逐一拆解这些“数字员工”是如何协作办案的。
-->
