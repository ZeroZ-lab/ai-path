---
layout: default
---

## 7.1 节点全景图：Dify 的 20 个积木

<div class="grid grid-cols-3 gap-4 mt-6">

<!-- 1. Interaction -->
<div class="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
    <div class="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">交互与触发</div>
    <div class="grid grid-cols-2 gap-2">
        <div class="bg-white p-2 rounded border border-blue-100 text-[10px] text-slate-600">Trigger</div>
        <div class="bg-white p-2 rounded border border-blue-100 text-[10px] text-slate-600">结束</div>
        <div class="bg-white p-2 rounded border border-blue-100 text-[10px] text-slate-600">直接回复</div>
        <div class="bg-white p-2 rounded border border-blue-100 text-[10px] text-slate-600">用户输入</div>
    </div>
</div>

<!-- 2. Reasoning -->
<div class="rounded-2xl border border-purple-100 bg-purple-50/50 p-4">
    <div class="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wider">核心推理</div>
    <div class="grid grid-cols-2 gap-2">
        <div class="bg-white p-2 rounded border border-purple-100 text-[10px] text-slate-600 font-bold">LLM 大模型</div>
        <div class="bg-white p-2 rounded border border-purple-100 text-[10px] text-slate-600">Agent 代理</div>
        <div class="bg-white p-2 rounded border border-purple-100 text-[10px] text-slate-600 col-span-2">问题分类器</div>
    </div>
</div>

<!-- 3. Control Flow -->
<div class="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
    <div class="text-xs font-bold text-amber-600 mb-2 uppercase tracking-wider">逻辑控制</div>
    <div class="grid grid-cols-2 gap-2">
        <div class="bg-white p-2 rounded border border-amber-100 text-[10px] text-slate-600">条件分支</div>
        <div class="bg-white p-2 rounded border border-amber-100 text-[10px] text-slate-600">循环</div>
        <div class="bg-white p-2 rounded border border-amber-100 text-[10px] text-slate-600 col-span-2">迭代</div>
    </div>
</div>

<!-- 4. Data Processing -->
<div class="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
    <div class="text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">数据处理</div>
    <div class="grid grid-cols-2 gap-2">
        <div class="bg-white p-2 rounded border border-slate-200 text-[10px] text-slate-600">代码执行</div>
        <div class="bg-white p-2 rounded border border-slate-200 text-[10px] text-slate-600">模板转换</div>
        <div class="bg-white p-2 rounded border border-slate-200 text-[10px] text-slate-600">文档提取器</div>
        <div class="bg-white p-2 rounded border border-slate-200 text-[10px] text-slate-600">变量聚合器</div>
        <div class="bg-white p-2 rounded border border-slate-200 text-[10px] text-slate-600 col-span-2">变量赋值</div>
    </div>
</div>

<!-- 5. External Tools -->
<div class="rounded-2xl border border-pink-100 bg-pink-50/50 p-4">
    <div class="text-xs font-bold text-pink-600 mb-2 uppercase tracking-wider">外部工具</div>
    <div class="grid grid-cols-2 gap-2">
        <div class="bg-white p-2 rounded border border-pink-100 text-[10px] text-slate-600">插件</div>
        <div class="bg-white p-2 rounded border border-pink-100 text-[10px] text-slate-600">MCP</div>
        <div class="bg-white p-2 rounded border border-pink-100 text-[10px] text-slate-600">Workflow</div>
        <div class="bg-white p-2 rounded border border-pink-100 text-[10px] text-slate-600">自定义工具</div>
    </div>
</div>

<!-- 6. Tools & Knowledge (Stacked) -->
<div class="flex flex-col gap-4">
    <!-- Tools -->
    <div class="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4 flex-1">
        <div class="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-wider">工具</div>
        <div class="grid grid-cols-2 gap-2">
            <div class="bg-white p-2 rounded border border-emerald-100 text-[10px] text-slate-600">HTTP 请求</div>
            <div class="bg-white p-2 rounded border border-emerald-100 text-[10px] text-slate-600">列表操作</div>
        </div>
    </div>
    <!-- Knowledge Base -->
    <div class="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 flex-1">
        <div class="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wider">知识库</div>
        <div class="grid grid-cols-1 gap-2">
            <div class="bg-white p-2 rounded border border-indigo-100 text-[10px] text-slate-600 font-bold text-center">知识库检索</div>
        </div>
    </div>
</div>

</div>
