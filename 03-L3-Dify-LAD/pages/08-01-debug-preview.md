---
layout: default
---

## 8.1 开发闭环：调试与预览

<div class="grid gap-8 md:grid-cols-2 mt-8 items-center">

<!-- Left: Preview & Debug -->
<div v-click class="rounded-3xl border border-blue-100 bg-blue-50/80 p-6 shadow-sm flex flex-col h-full transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 pb-2 border-b border-blue-200">
        <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl">▶️</div>
        <div>
            <h3 class="text-lg font-bold text-blue-900">调试预览 (Preview)</h3>
            <span class="text-xs text-blue-600">开发者的游乐场</span>
        </div>
    </div>
    <div class="space-y-4 flex-1">
        <div class="bg-white p-3 rounded-xl border border-blue-100 text-xs text-slate-600 leading-relaxed shadow-sm">
            <strong>实时运行：</strong> 每次修改 Prompt 或参数后，直接点击“运行”查看效果，无需发布。
        </div>
        <div class="bg-white p-3 rounded-xl border border-blue-100 text-xs text-slate-600 leading-relaxed shadow-sm">
            <strong>节点追踪 (Tracing)：</strong> 
            <div class="mt-2 font-mono text-[10px] bg-slate-50 p-2 rounded border border-slate-200">
                Node 1 (LLM): <span class="text-green-600">Success (1.2s)</span><br>
                Node 2 (Code): <span class="text-red-600">Failed</span> <span class="text-slate-400">// 查看报错堆栈</span>
            </div>
        </div>
    </div>
</div>

<!-- Right: Run History -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-6 shadow-sm flex flex-col h-full transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 pb-2 border-b border-purple-200">
        <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xl">📜</div>
        <div>
            <h3 class="text-lg font-bold text-purple-900">运行历史 (Run History)</h3>
            <span class="text-xs text-purple-600">回溯每一次测试</span>
        </div>
    </div>
    <div class="space-y-4 flex-1">
        <div class="bg-white p-3 rounded-xl border border-purple-100 text-xs text-slate-600 leading-relaxed shadow-sm">
            <strong>完整快照：</strong> 记录每一次调试的输入、输出、Token 消耗和耗时。
        </div>
        <div class="bg-white p-3 rounded-xl border border-purple-100 text-xs text-slate-600 leading-relaxed shadow-sm">
            <strong>对比调优：</strong> 
            <div class="flex gap-2 mt-2">
                <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded text-[10px]">v1: 准确率低</span>
                <span class="i-carbon-arrow-right text-purple-300 my-auto"></span>
                <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px]">v2: 完美</span>
            </div>
            <p class="mt-1 text-[10px] text-slate-400">发现改坏了？对比历史记录找回最佳配置。</p>
        </div>
    </div>
</div>

</div>

<!--
（点击 1）左边这个是“调试预览”。它最强大的地方在于 **Tracing（追踪）**。
如果你的流程有 10 个节点，它会告诉你每个节点花了多少秒，消耗了多少 Token，甚至每个中间变量的值是什么。
这就像给代码做了 CT 扫描，哪里堵了一目了然。

（点击 2）右边这个是“运行历史”。
你是不是经常遇到这种情况：改了一个 Prompt，觉得不好，想改回去，却忘了原来写的是啥？
在这里，你的每一次“点击运行”，都会被记录下来。你可以随时回溯，找回那个“灵光一闪”的版本。
-->