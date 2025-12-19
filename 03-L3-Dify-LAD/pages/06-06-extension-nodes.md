---
layout: default
---

## 6.6 扩展能力：Knowledge, HTTP, Tools

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- Knowledge -->
<div v-click class="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
    <!-- Badge -->
    <div class="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1.5 rounded-bl-2xl font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
        ⭐ 核心 (Core)
    </div>
    <div class="flex items-center gap-3 mb-4 mt-2">
        <span class="text-4xl">📚</span>
        <h3 class="text-lg font-bold text-indigo-900">知识库</h3>
    </div>
    <div class="bg-white rounded-xl p-4 border border-indigo-100 flex-1 text-xs text-slate-600 space-y-3">
        <p class="leading-relaxed text-sm"><strong>核心功能：</strong> 从百万文档中召回最相关的片段。</p>
        <div class="bg-indigo-50 p-2 rounded border border-indigo-100 font-mono text-indigo-700">Query: {{ user_input }}</div>
    </div>
</div>

<!-- HTTP -->
<div v-click class="rounded-3xl border border-cyan-100 bg-cyan-50/80 p-6 shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 mt-2">
        <span class="text-4xl">🌐</span>
        <h3 class="text-lg font-bold text-cyan-900">HTTP</h3>
    </div>
    <div class="bg-white rounded-xl p-4 border border-cyan-100 flex-1 text-xs text-slate-600 space-y-3">
        <p class="leading-relaxed text-sm"><strong>核心功能：</strong> 连接外部 API，如发飞书、查天气。</p>
        <div class="bg-cyan-50 p-2 rounded border border-cyan-100 font-mono text-cyan-700">POST /webhook</div>
    </div>
</div>

<!-- Tools -->
<div v-click class="rounded-3xl border border-pink-100 bg-pink-50/80 p-6 shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 mt-2">
        <span class="text-4xl">🧩</span>
        <h3 class="text-lg font-bold text-pink-900">Tools</h3>
    </div>
    <div class="bg-white rounded-xl p-4 border border-pink-100 flex-1 text-xs text-slate-600 space-y-3">
        <p class="leading-relaxed text-sm"><strong>核心功能：</strong> 调用封装好的插件，如 Google 搜索、DALL-E 画图。</p>
        <div class="flex flex-wrap gap-2">
            <span class="bg-pink-50 px-2 py-1 rounded text-[10px] text-pink-700 font-bold">Google</span>
            <span class="bg-pink-50 px-2 py-1 rounded text-[10px] text-pink-700 font-bold">Wiki</span>
        </div>
    </div>
</div>

<!--
最后来到**扩展部门**，他们负责搞定公司内部没有的东西。

1.  **知识库 (档案室)**：这是公司的**老档案员**。你问他“公司的差旅报销标准是什么？”，他会去翻那本几百页的员工手册，把第 50 页的那段话复印给你。

2.  **HTTP (外勤)**：这是**外勤专员**。他负责跑腿，比如把处理好的合同“送”到飞书群里，或者去外面的气象局“取”明天的天气预报。

3.  **Tools (外包服务)**：这是**专业服务商**。公司自己不会画图，就找 DALL-E 这个“外包画师”；公司自己不知道最新的新闻，就找 Google 这个“外包侦探”。
-->
