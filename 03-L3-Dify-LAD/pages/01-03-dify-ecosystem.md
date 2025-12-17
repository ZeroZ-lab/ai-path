---
layout: default
---

## 1.3 Dify 是什么？(生态定位)

<div class="grid gap-4 md:grid-cols-[1fr_1.8fr_1fr] mt-18 items-center">
<!-- Left: What Dify Abstracts (The Dirty Work) -->
<div v-click="4" class="flex flex-col gap-3 text-right opacity-80 transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Shield Complexity</div>
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-sm">
        <strong>模型异构性</strong>
        <div class="text-[9px] text-slate-400 mt-0.5">无需适配 OpenAI/Claude 接口</div>
    </div>
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-sm">
        <strong>RAG 工程</strong>
        <div class="text-[9px] text-slate-400 mt-0.5">自动分段/清洗/向量化</div>
    </div>
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-sm">
        <strong>上下文管理</strong>
        <div class="text-[9px] text-slate-400 mt-0.5">自动处理 Token 窗口限制</div>
    </div>
</div>
<!-- Center: The Stack Diagram -->
<div class="flex flex-col gap-1 relative">
    <!-- Layer 3: Apps (Top) -->
    <div v-click="3" class="rounded-2xl bg-indigo-50 border border-indigo-200 p-3 text-center relative z-10 transition-all duration-500">
        <div class="absolute -top-2 left-1/2 -translate-x-1/2 bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Application Layer</div>
        <div class="flex justify-center gap-2 mt-1">
            <span class="text-xl">💻</span>
            <span class="text-xl">📱</span>
            <span class="text-xl">🤖</span>
        </div>
        <div class="text-[10px] font-bold text-indigo-900 mt-1">Web App / Mobile / Slack Bot</div>
    </div>
    <!-- Arrows Up -->
    <div v-click="3" class="h-4 flex justify-center items-center transition-all duration-500">
        <div class="i-carbon-arrow-up text-indigo-300 animate-bounce"></div>
    </div>
    <!-- Layer 2: Dify (Core) -->
    <div v-click="1" class="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-2xl relative z-20 transform hover:scale-105 transition-transform duration-300">
        <div class="bg-white rounded-[20px] p-4 text-center">
            <img src="/imgs/dify-logo.svg" class="h-10 w-auto mx-auto mb-2" alt="Dify Logo" />
            <p class="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">LLM App Dev Platform</p>
            <div class="grid grid-cols-2 gap-1 mt-2">
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">Orchestration</div>
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">RAG Engine</div>
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">Prompt IDE</div>
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">Ops / Logs</div>
            </div>
        </div>
    </div>
    <!-- Arrows Down -->
    <div v-click="2" class="h-4 flex justify-center items-center transition-all duration-500">
        <div class="i-carbon-arrow-down text-slate-300"></div>
    </div>
    <!-- Layer 1: Infra (Bottom) -->
    <div v-click="2" class="rounded-2xl bg-slate-100 border border-slate-200 p-3 text-center relative z-10 opacity-80 transition-all duration-500">
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Model Infrastructure</div>
        <div class="flex justify-center gap-2 text-[9px] font-mono text-slate-500 mt-0.5">
            <span>OpenAI</span>
            <span>•</span>
            <span>HuggingFace</span>
            <span>•</span>
            <span>Vector DB</span>
        </div>
    </div>
</div>
<!-- Right: What Dify Delivers (The Value) -->
<div v-click="5" class="flex flex-col gap-3 text-left transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Deliver Value</div>
    <div class="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 shadow-sm">
        <strong>标准 API 交付</strong>
        <div class="text-[9px] text-emerald-600/80 mt-0.5">一键生成后端 API 接口</div>
    </div>
    <div class="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 shadow-sm">
        <strong>即用型 WebApp</strong>
        <div class="text-[9px] text-emerald-600/80 mt-0.5">无需开发前端，分享即用</div>
    </div>
    <div class="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 shadow-sm">
        <strong>可观测性</strong>
        <div class="text-[9px] text-emerald-600/80 mt-0.5">完整的日志、标注与分析</div>
    </div>
</div>
</div>

<!--
最后，我们用一张图来总结 Dify 在整个 AI 技术栈里的位置。

（点击 1）中间这一层，就是 Dify。它是一个“应用开发平台”。
（点击 2）它的下面，连接的是各种大模型（Infrastructure）。你不需要关心底层是 OpenAI 还是文心一言，Dify 帮你连好了。
（点击 3）它的上面，支撑的是各种业务应用（Applications）。无论是网页版机器人，还是集成到钉钉/飞书里，都由它提供服务。

（点击 4）对开发者来说，Dify 帮我们挡掉了最烦人的脏活（Shield Complexity）：比如怎么切分文档、怎么算 Token、怎么适配接口。
（点击 5）对外交付时，它直接给了我们成品（Deliver Value）：现成的 WebApp 和标准的 API。

这就是 Dify：连接模型能力与业务价值的桥梁。
-->
