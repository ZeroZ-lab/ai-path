---
layout: default
---

## 4.1 创建应用：从简单开始

<div class="grid gap-8 md:grid-cols-[1.2fr_1fr] mt-8 items-center">

<!-- Left: The Creation Modal Visual -->
<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
        <div class="w-3 h-3 rounded-full bg-red-400"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div class="mt-6 space-y-4">
        <div>
            <label class="text-[10px] font-bold text-slate-500 uppercase">App Name</label>
            <div class="mt-1 p-2 bg-slate-50 rounded border border-slate-200 text-sm text-slate-800">
                ✍️ 智能写作助手
            </div>
        </div>
        <div>
            <label class="text-[10px] font-bold text-slate-500 uppercase">App Type</label>
            <div class="flex gap-2 mt-1">
                <div class="flex-1 p-3 bg-blue-50 border-2 border-blue-500 rounded-xl text-center relative cursor-pointer">
                    <div class="text-2xl mb-1">💬</div>
                    <div class="text-[10px] font-bold text-blue-700">Chat App</div>
                    <div class="absolute -top-2 -right-2 bg-blue-600 text-white text-[8px] px-1.5 py-0.5 rounded-full">Selected</div>
                </div>
                <div class="flex-1 p-3 bg-white border border-slate-200 rounded-xl text-center opacity-50">
                    <div class="text-2xl mb-1">🤖</div>
                    <div class="text-[10px] font-bold text-slate-600">Agent</div>
                </div>
            </div>
        </div>
        <div>
            <label class="text-[10px] font-bold text-slate-500 uppercase">Orchestration</label>
            <div class="flex gap-2 mt-1">
                <div class="flex-1 p-2 bg-blue-50 border-2 border-blue-500 rounded-lg text-center text-[10px] font-bold text-blue-700">
                    Basic (基础编排)
                </div>
                <div class="flex-1 p-2 bg-white border border-slate-200 rounded-lg text-center text-[10px] text-slate-400">
                    Workflow (工作流)
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Right: Steps -->
<div class="space-y-6">
    <div class="flex gap-4">
        <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">创建空白应用</h4>
            <p class="text-xs text-slate-500 mt-1">点击主页的 "Create from Blank" 按钮。</p>
        </div>
    </div>
    <div class="flex gap-4">
        <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
        <div>
            <h4 class="font-bold text-blue-700 text-sm">选择类型：Chat App</h4>
            <p class="text-xs text-slate-600 mt-1">
                我们要构建一个连续对话的助手，而不是单次任务。<br>
                <strong>注意：</strong> 编排方式选择 <strong>Basic</strong> (非 Workflow)。
            </p>
        </div>
    </div>
    <div class="flex gap-4">
        <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">命名与图标</h4>
            <p class="text-xs text-slate-500 mt-1">起个好名字，比如 "Magic Writer"。</p>
        </div>
    </div>
</div>

</div>
