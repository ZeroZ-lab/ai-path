---
layout: default
---

## 5.3 Node (节点)：流水线上的工位

<div class="grid gap-8 md:grid-cols-2 mt-8 items-center">

<!-- Anatomy of a Node -->
<div v-click class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg relative transition-all duration-500">
    <div class="absolute -top-3 left-6 bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Node Anatomy</div>
    <div class="flex flex-col gap-4">
        <!-- Input Port -->
        <div class="flex items-center gap-3">
            <div class="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
            <div class="flex-1 h-px bg-slate-200 border-t border-dashed border-slate-300"></div>
            <span class="text-xs font-bold text-slate-500 uppercase">Input (输入)</span>
        </div>
        <!-- Core Logic -->
        <div class="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col gap-2">
            <div class="flex justify-between items-center">
                <span class="text-sm font-bold text-slate-800">LLM Node</span>
                <span class="text-xl">🤖</span>
            </div>
            <div class="bg-white p-2 rounded border border-slate-100 text-[10px] font-mono text-slate-500">
                Model: GPT-4o<br>
                Prompt: Translate {{ text }}
            </div>
        </div>
        <!-- Output Port -->
        <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-500 uppercase ml-auto">Output (输出)</span>
            <div class="flex-1 h-px bg-slate-200 border-t border-dashed border-slate-300"></div>
            <div class="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
        </div>
    </div>
</div>

<!-- Common Nodes -->
<div v-click class="grid gap-4 grid-cols-2 transition-all duration-500">
    <div class="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
        <div class="text-2xl mb-2">🏁</div>
        <h4 class="font-bold text-blue-900 text-sm">开始 (Start)</h4>
        <p class="text-[10px] text-blue-700 mt-1">接收用户最初的输入。</p>
    </div>
    <div class="p-4 rounded-2xl bg-purple-50/80 border border-purple-100 hover:bg-purple-100 transition-colors cursor-default">
        <div class="text-2xl mb-2">🤖</div>
        <h4 class="font-bold text-purple-900 text-sm">LLM</h4>
        <p class="text-[10px] text-purple-700 mt-1">调用大模型进行处理。</p>
    </div>
    <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-100 hover:bg-amber-100 transition-colors cursor-default">
        <div class="text-2xl mb-2">🔀</div>
        <h4 class="font-bold text-amber-900 text-sm">条件分支 (If-Else)</h4>
        <p class="text-[10px] text-amber-700 mt-1">根据条件走不同路径。</p>
    </div>
    <div class="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 hover:bg-emerald-100 transition-colors cursor-default">
        <div class="text-2xl mb-2">🔚</div>
        <h4 class="font-bold text-emerald-900 text-sm">结束 (End)</h4>
        <p class="text-[10px] text-emerald-700 mt-1">输出最终结果给用户。</p>
    </div>
</div>

</div>

<!--
如果把 Dify 的开发比作玩乐高：

- **Node (节点)** 就是那一块块功能各异的**“乐高基础块”**。有的是薄片，有的是轮子，有的是人偶。每一块都有标准接口（输入/输出），可以直接拿来用。
- **Workflow (工作流)** 就是你的**“组装图纸”**。你把这些积木块按照逻辑拼在一起，最后拼出来的是一辆车（翻译器）还是一个城堡（法律顾问），全看你的组装过程。

（点击 1）大家看左边，任何一个节点，本质上都只由三部分组成：
1.  **输入 (Input)**：就像传送带送来的原料，也是乐高积木底部的圆孔。
2.  **具体动作 (Action)**：这是节点的核心职能，决定了这块积木是什么功能。
3.  **输出 (Output)**：动作执行完后产生的新结果，是积木顶部的凸起，方便连接下一块。

（点击 2）常用的积木主要有这四种：
- **Start**：一切的起点。
- **LLM**：最核心的大脑。
- **If-Else**：红绿灯，控制方向。
- **End**：打包发货。

掌握了这四个，你就掌握了 Workflow 的 80%。
-->