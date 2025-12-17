---
layout: default
---

## 5.2 变量：数据的“搬运工”

<div class="grid gap-4 md:grid-cols-2 mt-4 items-stretch" v-pre>

<!-- Left: Concept & Syntax -->
<div class="flex flex-col gap-4">
    <!-- Concept -->
    <div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-4 shadow-md transition-all duration-500">
        <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl bg-white rounded-xl p-1.5 shadow-sm">📦</span>
            <div>
                <h3 class="text-lg font-bold text-purple-900">容器 (Container)</h3>
                <p class="text-xs text-purple-700 mt-0.5">变量就像一个盒子，里面装着动态内容。</p>
            </div>
        </div>
        <div class="bg-white rounded-xl p-2 border border-purple-100/50 font-mono text-xs text-slate-600 flex items-center gap-2">
            <span class="text-purple-400">Prompt:</span>
            <span>Hello, {{ name }}!</span>
            <span class="text-slate-400">-></span>
            <span>Hello, Alice!</span>
        </div>
    </div>
    <!-- Types List -->
    <div v-click class="rounded-3xl border border-blue-100 bg-white p-4 shadow-md flex-1 transition-all duration-500">
        <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Variable Scopes</div>
        <div class="space-y-2">
            <div class="flex items-center gap-3 p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
                <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-mono text-xs">S</div>
                <div>
                    <div class="text-sm font-bold text-slate-800">System (系统变量)</div>
                    <div class="text-[10px] text-slate-500">内置预设，如 {{ sys.query }} (用户输入)</div>
                </div>
            </div>
            <div class="flex items-center gap-3 p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
                <div class="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-mono text-xs">E</div>
                <div>
                    <div class="text-sm font-bold text-slate-800">Environment (环境变量)</div>
                    <div class="text-[10px] text-slate-500">全局配置，如 API_KEY, SECRET_TOKEN</div>
                </div>
            </div>
            <div class="flex items-center gap-3 p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
                <div class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-mono text-xs">C</div>
                <div>
                    <div class="text-sm font-bold text-slate-800">Conversation (会话变量)</div>
                    <div class="text-[10px] text-slate-500">上下文记忆，随对话更新 (Memory)</div>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Right: Data Flow Visualization -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-inner flex flex-col relative overflow-hidden transition-all duration-500">
    <div class="absolute top-3 right-4 text-[10px] font-bold text-slate-400 uppercase">Data Flow</div>
    <div class="flex flex-col justify-center items-center h-full gap-3 relative z-10">
        <!-- Node A -->
        <div class="w-full bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-between items-center mb-1.5">
                <span class="text-xs font-bold text-slate-700">开始节点</span>
                <span class="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">Start</span>
            </div>
            <div class="bg-purple-50 border border-purple-100 p-1.5 rounded text-xs font-mono text-purple-700">
                var: user_query = "写首诗"
            </div>
        </div>
        <!-- Arrow -->
        <div class="i-carbon-arrow-down text-xl text-slate-400 animate-bounce"></div>
        <!-- Node B -->
        <div class="w-full bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-between items-center mb-1.5">
                <span class="text-xs font-bold text-slate-700">LLM 节点</span>
                <span class="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">Model</span>
            </div>
            <div class="text-[10px] text-slate-500 mb-0.5">Prompt:</div>
            <div class="bg-slate-50 p-1.5 rounded text-xs font-mono text-slate-600 border border-slate-100">
                Please help me <span class="bg-purple-100 text-purple-700 px-1 rounded">{{ user_query }}</span>...
            </div>
        </div>
    </div>
    <!-- Background decorative lines -->
    <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>

</div>

<!--
（点击 1）什么是变量？
想象你在写一封群发邮件：“你好，{{name}}”。
发给张三时，{{name}} 变成“张三”；发给李四时，它变成“李四”。
变量就是一个“占位符”，一个“盒子”。

（点击 2）在 Dify 里，我们主要用三种变量：
- System：用户刚才说了啥。
- Environment：全局的 API Key。
- Conversation：AI 记住的“上下文”。

（点击 3）变量最核心的作用是“传递”。
用户在“开始节点”说的话，要被打包进变量，传给“LLM 节点”，模型才能看到并处理。
这就是工作流的血液。
-->