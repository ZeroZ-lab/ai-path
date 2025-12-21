---
layout: default
---

## 4.6 扩展能力：Knowledge, HTTP, Tools

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
        <div class="bg-indigo-50 p-2 rounded border border-indigo-100 font-mono text-indigo-700">Query: 【 user_input 】</div>
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

</div>

<!--
最后来到**扩展部门**，他们负责搞定律所内部做不了的事情。

1.  **知识库 (档案室/法条库)**：这是公司的**老档案员**。你问他“这个案子适用的最新司法解释是什么？”，他会去翻那本几千页的法条全书，把第 50 页第 3 条复印给你。

2.  **HTTP (外出调查)**：这是**外勤专员/调查员**。他负责跑腿，比如去工商局调取企业档案（调用企查查 API），或者去法院系统查询案件进度（联网查询），甚至发一封正式的律师函邮件。

3.  **Tools (司法鉴定/三方机构)**：这是**外部合作机构**。涉及需要专业鉴定的（比如笔迹鉴定），我们自己做不了，就委托给外部的司法鉴定中心（工具）；需要查外文资料的，就委托翻译公司（Google Search/Translate）。
-->
