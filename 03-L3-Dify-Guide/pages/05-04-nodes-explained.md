---
layout: default
---

## 5.4 节点全接触：Workflow 的零件库

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
前面我们讲“变量”的时候，用了一个海鲜餐厅的例子。

门口那块石令架，
今天 100，昨天 200，
牌子是固定的，数字每天在变。

那现在问题来了：

价格写清楚了，
这顿海鲜是怎么真正做出来的？

如果把 Dify 的开发，
比作经营一家海鲜餐厅：

Node（节点），
就是厨房里一个个明确分工的岗位。

有的负责接单，
有的负责处理食材，
有的负责判断怎么做，
还有的负责把菜端上桌。

每一个岗位，都有固定的进出口，
不会乱来。

Workflow（工作流），
就是这家餐厅的出菜流程单。

从顾客点菜开始，
到后厨处理，
到最终上桌，
每一步顺序都提前设计好了。

（点击 1）大家看左边，其实任何一个“岗位”，本质上都只做三件事：

第一步：进料。
就像后厨收到的原料：

客人点了什么

石令架上今天的价格

这桌是几个人吃

第二步：处理。
这是这个岗位真正的手艺。

清蒸

红烧

还是辣炒

每个岗位，只负责自己擅长的那一步。

第三步：出菜。
处理完的结果，
会被送到下一个岗位继续加工，
或者直接端上桌。

（点击 2）在 Dify 里，
最常用、也最核心的“岗位”，其实就这四种：

Start：接单口。
顾客说：“我要一份清蒸石斑。”

LLM：大厨。
负责真正“想怎么做、怎么说、怎么写”。

If-Else：后厨判断。
比如：

客人说“清淡” → 清蒸

客人说“重口” → 红烧

就像后厨的分流判断。

End：出菜口。
菜做好了，
装盘、上桌。

所以你会发现：

掌握了这四个岗位，
你就掌握了一家海鲜餐厅 80% 的出菜流程。

前面我们学会了怎么定价（变量），
现在我们学的是：

怎么把这道菜，
稳定、可控地一道一道端出来。
-->
