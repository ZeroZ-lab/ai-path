---
layout: center
---

# 01 Dify 介绍

---
layout: default
---

## Dify 是什么？

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
            <span>Hugging Face</span>
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
如果把大模型比作**CPU**，把我们的业务比作**APP**，那么 Dify 是什么？

**Dify 就是 AI 时代的“Windows 操作系统”。**

（点击 1）它位于正中间，起到了**承上启下**的作用。

（点击 2）**向下兼容（Infrastructure）**：它帮你搞定了所有硬件适配。你是用 Intel（GPT）还是 AMD（Claude），对上层应用来说没区别，Dify 帮你抹平了差异。

（点击 3）**向上支撑（Application）**：你想开发网页版、手机版还是钉钉机器人，Dify 提供了统一的开发环境。

（点击 4）**屏蔽复杂（Shield Complexity）**：最重要的是，它帮你干了所有**脏活累活**。怎么切分文档、怎么算 Token、怎么管理上下文，这些底层的技术细节，你都不用管。

（点击 5）**交付价值（Deliver Value）**：你只需要专注于业务逻辑，Dify 直接给你生成可用的成品。

**一句话：Dify 让开发 AI 应用，变得像装软件一样简单。**
-->


---
layout: center
---

# 👋 动手：认识 Dify 的页面