---
layout: default
---

## 3.1 变量：数据的“搬运工”

<div class="grid gap-4 md:grid-cols-2 mt-4 items-stretch">
<!-- Left: The Analogy -->
<div class="flex flex-col gap-4">
    <!-- Intro -->
    <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center">
        <p class="text-sm font-bold text-slate-700">什么是变量？</p>
        <p class="text-xs text-slate-500 mt-1">就像一个“会变的盒子”，用来装不同的东西。</p>
    </div>
    <!-- Types List -->
    <div class="rounded-3xl border border-blue-100 bg-white p-4 shadow-md flex-1 flex flex-col justify-center gap-4">
        <!-- System -->
        <div v-click class="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all">
            <div class="text-3xl">🆔</div>
            <div>
                <div class="text-sm font-bold text-slate-800">系统变量 (System)</div>
                <div class="text-xs text-slate-500 mt-0.5">比喻：<strong>你的身份证</strong></div>
                <div class="text-[10px] text-slate-400">系统自带，只读，不可改 (如 User ID, Time)。</div>
            </div>
        </div>
        <!-- Environment -->
        <div v-click class="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all">
            <div class="text-3xl">📶</div>
            <div>
                <div class="text-sm font-bold text-green-700">环境变量 (Env)</div>
                <div class="text-xs text-green-600 mt-0.5">比喻：<strong>公司 Wifi 密码</strong></div>
                <div class="text-[10px] text-slate-400">全局通用，写在配置里，谁用都一样 (如 API Key)。</div>
            </div>
        </div>
        <!-- Conversation -->
        <div v-click class="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all">
            <div class="text-3xl">📝</div>
            <div>
                <div class="text-sm font-bold text-orange-700">会话变量 (Conversation)</div>
                <div class="text-xs text-orange-600 mt-0.5">比喻：<strong>聊天记录本</strong></div>
                <div class="text-[10px] text-slate-400">动态更新，越聊越厚，用来记“刚才说了啥”。</div>
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
                Please help me <span class="bg-purple-100 text-purple-700 px-1 rounded">[[user_query]]</span>...
            </div>
        </div>
    </div>
    <!-- Background decorative lines -->
    <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>
</div>

<!--
我们先抛开技术术语。什么是“变量”？
其实你们每天都在用。

（展示左侧）大家看合同模板。
“甲方：_________”、“签署日期：_________”
这个**下划线**，就是变量。而填进去的“张三”、“2025年1月1日”，就是变量的值。
我们做 Dify 应用，本质上就是在写一个“超级合同模板”。

这里有三类特殊的“填空题”：
1.  **系统变量 (身份证)**：比如案号、立案时间。这是法院系统生成的，你没法改，只能读。
2.  **环境变量 (律所抬头)**：比如律所的公章、统一的落款。这是全所通用的，不需要每次都填，但大家都要用。
3.  **会话变量 (庭审笔录)**：这是最厉害的。它能记住前几轮说的话。
    *   这就好比你在法庭上，法官问：“对于刚才提到的证据A，原告有什么补充？”
    *   如果法官没有记忆（没有会话变量），他会问：“啥证据A？”
    *   有了会话变量，AI 就能像书记员一样，把上下文都记在小本本上。

**总结一下：使用Dify，就是学会设计这些“填空题”。**
-->
