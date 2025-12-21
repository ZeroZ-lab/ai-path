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
                Please help me <span class="bg-purple-100 text-purple-700 px-1 rounded">{{ user_query }}</span>...
            </div>
        </div>
    </div>
    <!-- Background decorative lines -->
    <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>

</div>
