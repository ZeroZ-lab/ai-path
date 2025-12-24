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
layout: default
---

## 选型指南：什么时候用 Chatbot？什么时候造 Dify 应用？

<div class="grid grid-cols-2 gap-10 mt-16 px-4">

<!-- Left: Chatbot -->
<div class="flex flex-col gap-4 p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-slate-300 transition-all shadow-sm">
    <div class="text-2xl font-bold text-slate-700 flex items-center gap-3">
        <span class="text-4xl text-slate-400">🤖</span>
        <span>通用 Chatbot</span>
    </div>
    <div class="text-sm font-medium text-slate-400 uppercase tracking-widest">Personal Assistant</div>
    <div class="my-2 text-base text-slate-600 leading-relaxed">
        适合<span class="font-bold text-slate-800">低频、通用、一次性</span>的任务。
    </div>
    <ul class="space-y-3 text-sm text-slate-600 flex-1">
        <li class="flex gap-2">
            <div class="i-carbon-checkmark text-green-500 text-lg"></div>
            <span><strong>简单的文书润色/翻译</strong><br><span class="text-xs text-slate-400">"帮我把这段邮件翻译成英文"</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark text-green-500 text-lg"></div>
            <span><strong>法律概念快速查询</strong><br><span class="text-xs text-slate-400">"解释一下什么是'不可抗力'"</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark text-green-500 text-lg"></div>
            <span><strong>灵感激发/头脑风暴</strong><br><span class="text-xs text-slate-400">"给我 5 个合同谈判的切入点"</span></span>
        </li>
    </ul>
</div>

<!-- Right: Dify App -->
<div class="flex flex-col gap-4 p-6 rounded-2xl bg-indigo-50 border-2 border-indigo-200 shadow-md">
    <div class="text-2xl font-bold text-indigo-700 flex items-center gap-3">
        <span class="text-4xl">🚀</span>
        <span>Dify 智能应用</span>
    </div>
    <div class="text-sm font-medium text-indigo-400 uppercase tracking-widest">Professional Workflow</div>
    <div class="my-2 text-base text-indigo-900 leading-relaxed">
        适合<span class="font-bold text-indigo-700">高频、专业、流程化</span>的业务。
    </div>
    <ul class="space-y-3 text-sm text-indigo-800 flex-1">
        <li class="flex gap-2">
            <div class="i-carbon-checkmark-filled text-indigo-600 text-lg"></div>
            <span><strong>基于私有数据的回答 (RAG)</strong><br><span class="text-xs text-indigo-500">"根据《公司法》和公司过往案例，回答..."</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark-filled text-indigo-600 text-lg"></div>
            <span><strong>复杂流程自动化 (Workflow)</strong><br><span class="text-xs text-indigo-500">"读取合同 -> 提取风险点 -> 生成审核报告"</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark-filled text-indigo-600 text-lg"></div>
            <span><strong>团队协作与标准化</strong><br><span class="text-xs text-indigo-500">固化资深律师的经验，供全团队复用</span></span>
        </li>
    </ul>
</div>
</div>

<!--
作为律师，我们最宝贵的是“经验”和“计费时间”。在引入 AI 时，我们要首先学会“排兵布阵”：到底是什么时候该直接用 ChatGPT 这种聊天机器人，什么时候该花精力在 Dify 上搭个应用？

（左侧）**通用 Chatbot（如 ChatGPT）就像是“带薪实习生”。**
他读过很多书，反应快，但最大的问题是：**他不懂你的规矩。** 
他不知道你们律行习惯用哪套合同模板，不清楚你们过往处理类似案件的风格。你每次用他，都得大费周章地写一段很长的指令（Prompt）。
**适用场景**：适合处理那些“低频、通用、一次性”的杂活。比如：把一封英文邮件翻译一下，或者写个放假通知的草稿。

（右侧）**Dify 智能应用就像是“律行的数字化 SOP（标准作业程序）”。**
这不再是一个简单的对话框，而是一套**生产线**。
1.  **它有大脑 (RAG)**：它背后连着你们律行的档案库、证据库和法规库。
2.  **它有手脚 (Workflow)**：他知道审核一份合同的第一步是看主体，第二步是核对违约条款，第三步是输出审核报告。 
3.  **它能沉淀资产**：实习生会离职，但 Dify 程序是律行的数字资产。它能像高级合伙人一样，把“老带新”的成本降到最低。

**一句话总结：如果只是想“随便聊两句”，选 Chatbot；如果要解决“重复性的硬活”，一定要造 Dify 应用。**
-->



---
layout: center
---

# 👋 动手：认识 Dify 的页面