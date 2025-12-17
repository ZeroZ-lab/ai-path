---
layout: default
---

## 6.1 节点全景图：5 大核心阵营

<div class="grid grid-cols-5 gap-3 mt-8 items-stretch h-[320px]">

<!-- 1. Interaction -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 h-full hover:shadow-md transition-all">
        <div class="text-[10px] font-bold text-blue-700 uppercase mb-2 text-center">交互 (Interaction)</div>
        <div class="space-y-1.5">
            <div class="bg-white p-1.5 rounded border border-blue-100 text-[9px] text-center text-slate-600">Start</div>
            <div class="bg-white p-1.5 rounded border border-blue-100 text-[9px] text-center text-slate-600">End</div>
            <div class="bg-white p-1.5 rounded border border-blue-100 text-[9px] text-center text-slate-600">Answer</div>
            <div class="bg-white p-1.5 rounded border border-blue-100 text-[9px] text-center text-slate-600">User Input</div>
        </div>
    </div>
</div>

<!-- 2. Reasoning -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-purple-50 border border-purple-200 rounded-xl p-3 h-full hover:shadow-md transition-all">
        <div class="text-[10px] font-bold text-purple-700 uppercase mb-2 text-center">推理 (Reasoning)</div>
        <div class="space-y-1.5">
            <div class="bg-purple-600 p-1.5 rounded border border-purple-600 text-[9px] text-center text-white font-bold shadow-sm">LLM</div>
            <div class="bg-white p-1.5 rounded border border-purple-100 text-[9px] text-center text-slate-600">Agent</div>
            <div class="bg-white p-1.5 rounded border border-purple-100 text-[9px] text-center text-slate-600">Classifier</div>
            <div class="bg-white p-1.5 rounded border border-purple-100 text-[9px] text-center text-slate-600">Extractor</div>
        </div>
    </div>
</div>

<!-- 3. Logic -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 h-full hover:shadow-md transition-all">
        <div class="text-[10px] font-bold text-amber-700 uppercase mb-2 text-center">逻辑 (Logic)</div>
        <div class="space-y-1.5">
            <div class="bg-white p-1.5 rounded border border-amber-100 text-[9px] text-center text-slate-600">If-Else</div>
            <div class="bg-white p-1.5 rounded border border-amber-100 text-[9px] text-center text-slate-600">Iteration</div>
            <div class="bg-white p-1.5 rounded border border-amber-100 text-[9px] text-center text-slate-600">Loop</div>
        </div>
    </div>
</div>

<!-- 4. Transformation -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 h-full hover:shadow-md transition-all">
        <div class="text-[10px] font-bold text-slate-600 uppercase mb-2 text-center">转换 (Transform)</div>
        <div class="space-y-1.5">
            <div class="bg-white p-1.5 rounded border border-slate-200 text-[9px] text-center text-slate-600">Code</div>
            <div class="bg-white p-1.5 rounded border border-slate-200 text-[9px] text-center text-slate-600">Template</div>
            <div class="bg-white p-1.5 rounded border border-slate-200 text-[9px] text-center text-slate-600">Assigner</div>
            <div class="bg-white p-1.5 rounded border border-slate-200 text-[9px] text-center text-slate-600">Aggregator</div>
        </div>
    </div>
</div>

<!-- 5. Extension -->
<div v-click class="flex flex-col gap-2 group">
    <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 h-full hover:shadow-md transition-all">
        <div class="text-[10px] font-bold text-emerald-700 uppercase mb-2 text-center">扩展 (Extension)</div>
        <div class="space-y-1.5">
            <div class="bg-white p-1.5 rounded border border-emerald-100 text-[9px] text-center text-slate-600">Knowledge</div>
            <div class="bg-white p-1.5 rounded border border-emerald-100 text-[9px] text-center text-slate-600">HTTP</div>
            <div class="bg-white p-1.5 rounded border border-emerald-100 text-[9px] text-center text-slate-600">Tools</div>
        </div>
    </div>
</div>

</div>

<div v-click class="mt-6 text-center text-xs text-slate-500">
    掌握了这 5 大阵营，你就掌握了 Dify 的全部兵法。
</div>
