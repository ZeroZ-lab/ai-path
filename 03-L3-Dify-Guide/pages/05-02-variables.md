---
layout: default
---

## 5.2 变量：数据的“搬运工”

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
我们先抛开技术术语，什么是“变量”？
其实你们每天都在用。

我们在海鲜餐厅，他们的价格都是写时令价。

那这个价格就是变量，具体今天 100 还是昨天 200 就是这个变量的值。

（展示左侧）大家看一眼合同模板。
“甲方：”“签署日期：”
这个空着的地方，就是变量。
填进去的“张三”“2025 年 1 月 1 日”，就是变量的内容。

所以我们做 Dify 应用，本质上就是在写一个
**会自己填内容、还能反复使用的超级合同模板。**

在法律场景里，这种“填空题”大概有三种。

**第一种：自动带出来的，不用你操心的。**
比如案号、立案时间、当前日期。
这些信息不是你决定的，你也改不了，
它们就像案卷封面上的编号，自动就有。

**第二种：全所统一的，不用每次重复填的。**
比如律所名称、固定落款、统一免责声明。
你配置一次，
以后每一份文书都会自动带上。

**第三种：会“记事儿”的，这是最重要的。**
它能记住前面发生过什么。

这就好比在法庭上，法官问一句：
“对于刚才提到的证据 A，你有什么补充？”

如果对方完全不记得前面说过什么，
那庭审根本没法继续。

AI 也是一样。
能记住前文，
它才像一个合格的书记员，
而不是每次都从零开始问。

所以这一页你只要记住一句话就够了：

**用 Dify，其实就是把法律工作中
哪些地方要填、哪些能复用、哪些必须记住，
提前设计清楚。**
-->
