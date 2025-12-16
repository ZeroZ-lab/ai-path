---
layout: default
---

## 6.5 工具箱：HTTP & 列表操作

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">

<!-- HTTP Request -->
<div class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-6 shadow-md flex flex-col">
    <div class="flex items-center gap-4 mb-4">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm text-cyan-600">🌐</div>
        <div>
            <h3 class="text-lg font-bold text-cyan-900">HTTP Request</h3>
            <p class="text-xs text-cyan-700">连接外部 API 的桥梁</p>
        </div>
    </div>
    <div class="bg-white rounded-2xl p-4 border border-cyan-100 space-y-3 flex-1">
        <div class="flex items-center gap-2">
            <span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">POST</span>
            <span class="text-[10px] font-mono text-slate-500 truncate">https://api.example.com/v1/hook</span>
        </div>
        <div class="h-px bg-slate-100"></div>
        <div class="text-[10px] text-slate-600 leading-relaxed">
            <strong>应用场景：</strong><br>
            • 发送飞书/钉钉通知<br>
            • 调用自家后端业务逻辑<br>
            • 获取外部实时数据
        </div>
    </div>
</div>

<!-- List Operator -->
<div class="rounded-3xl border border-orange-100 bg-orange-50/80 p-6 shadow-md flex flex-col">
    <div class="flex items-center gap-4 mb-4">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm text-orange-600">📋</div>
        <div>
            <h3 class="text-lg font-bold text-orange-900">List Operator</h3>
            <p class="text-xs text-orange-700">数组数据的高级处理</p>
        </div>
    </div>
    <div class="bg-white rounded-2xl p-4 border border-orange-100 space-y-3 flex-1">
        <div class="flex gap-2 overflow-x-auto">
            <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-[10px]">Filter</span>
            <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-[10px]">Sort</span>
            <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-[10px]">Top N</span>
        </div>
        <div class="h-px bg-slate-100"></div>
        <div class="text-[10px] text-slate-600 leading-relaxed">
            <strong>应用场景：</strong><br>
            • 从检索结果中筛选高分片段<br>
            • 对多路召回结果进行排序截断<br>
            • 提取数组中的特定字段
        </div>
    </div>
</div>

</div>
