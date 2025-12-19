---
layout: default
---

## 6.2 交互与触发：从开始到结束

<div class="grid gap-6 md:grid-cols-2 mt-8 items-stretch">

<!-- 1. Start -->
<div v-click class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm flex flex-col hover:bg-blue-100/80 transition-all duration-500 h-48">
    <div class="flex items-center gap-3 mb-3 pb-2 border-b border-blue-200">
        <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl">🏁</div>
        <div>
            <h3 class="text-base font-bold text-blue-900">Start (开始)</h3>
            <span class="text-xs bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded font-bold">必选</span>
        </div>
    </div>
    <p class="text-sm text-slate-600 leading-relaxed flex-1">
        一切流程的起点。它负责接收最初的信号，就像发令枪。
    </p>
</div>

<!-- 2. User Input -->
<div v-click class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm flex flex-col hover:bg-amber-100/80 transition-all duration-500 h-48">
    <div class="flex items-center gap-3 mb-3 pb-2 border-b border-amber-200">
        <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-2xl">🙋</div>
        <div>
            <h3 class="text-base font-bold text-amber-900">User Input (输入)</h3>
            <span class="text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-bold">交互</span>
        </div>
    </div>
    <p class="text-sm text-slate-600 leading-relaxed mb-2 flex-1">
        需要用户填写表单时使用。比如让用户输入“姓名”和“金额”。
    </p>
    <div class="bg-white p-2 rounded border border-amber-100 text-xs text-slate-500 font-mono">
        Field: Name, Age
    </div>
</div>

<!-- 3. Answer -->
<div v-click class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-5 shadow-sm flex flex-col hover:bg-cyan-100/80 transition-all duration-500 h-48">
    <div class="flex items-center gap-3 mb-3 pb-2 border-b border-cyan-200">
        <div class="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center text-2xl">💬</div>
        <div>
            <h3 class="text-base font-bold text-cyan-900">Answer (回复)</h3>
            <span class="text-xs bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded font-bold">流式</span>
        </div>
    </div>
    <p class="text-sm text-slate-600 leading-relaxed mb-2 flex-1">
        像打字机一样一个个字吐出来。适合聊天场景。
    </p>
    <div class="bg-white p-2 rounded border border-cyan-100 text-xs text-slate-500 animate-pulse">
        Writing... ▌
    </div>
</div>

<!-- 4. End -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm flex flex-col hover:bg-purple-100/80 transition-all duration-500 h-48">
    <div class="flex items-center gap-3 mb-3 pb-2 border-b border-purple-200">
        <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl">🛑</div>
        <div>
            <h3 class="text-base font-bold text-purple-900">End (结束)</h3>
            <span class="text-xs bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded font-bold">结构化</span>
        </div>
    </div>
    <p class="text-sm text-slate-600 leading-relaxed mb-2 flex-1">
        流程的终点。直接返回一个 JSON 结果给外部系统。
    </p>
    <div class="bg-white p-2 rounded border border-purple-100 text-xs text-slate-500 font-mono">
        { "status": "ok" }
    </div>
</div>

</div>

<!--
欢迎来到**交互部门**，这里是公司的大门。

1.  **Start (开始)**：就是公司的**感应门**。有人来（触发），门才会开，流程才会开始。
2.  **User Input (输入)**：就像前台的**访客登记表**。你要办事，得先填个单子，写上你的名字和需求。
3.  **Answer (回复)**：这是**接待员小姐姐**，她会很耐心地、像打字机一样，一个字一个字地把结果念给你听（流式输出）。
4.  **End (结束)**：这是**文件分发处**。处理完的结果被打包成一个标准的包裹（JSON），丢给外面的快递员（API 调用方）。

记住：Start 和 End 是必须有的，中间的 Input 和 Answer 看情况选。
-->
