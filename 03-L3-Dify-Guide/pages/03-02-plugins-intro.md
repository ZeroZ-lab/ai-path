---
layout: default
---

## 3.2 插件化架构：无限扩展能力

<div class="grid gap-8 md:grid-cols-2 mt-8 items-center">

<!-- Concept: Everything is a Plugin -->
<div v-click class="rounded-[32px] border border-violet-100 bg-violet-50/80 p-8 shadow-lg flex flex-col justify-center text-center relative overflow-hidden h-[360px] transition-all duration-500">
    <div class="relative z-10">
        <div class="text-xs font-bold uppercase tracking-[0.3em] text-violet-500 mb-4">Core Philosophy</div>
        <h3 class="text-2xl font-bold text-violet-900 mb-6">万物皆插件</h3>
        <div class="flex justify-center gap-4 mb-8">
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-violet-100 flex flex-col items-center gap-2 w-24">
                <span class="text-2xl">🧠</span>
                <span class="text-[10px] font-bold text-slate-600">Model</span>
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-violet-100 flex flex-col items-center gap-2 w-24">
                <span class="text-2xl">🛠️</span>
                <span class="text-[10px] font-bold text-slate-600">Tool</span>
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-violet-100 flex flex-col items-center gap-2 w-24">
                <span class="text-2xl">🔌</span>
                <span class="text-[10px] font-bold text-slate-600">Extension</span>
            </div>
        </div>
        <p class="text-sm text-violet-800 leading-relaxed px-4">
            Dify 不直接硬编码功能，而是通过插件市场动态加载。<br>
            你需要什么能力，就安装什么插件。
        </p>
    </div>
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>

<!-- Action: How to Install -->
<div v-click class="flex flex-col gap-4 transition-all duration-500">
    <!-- Step 1 -->
    <div class="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-center shadow-sm hover:border-violet-300 transition-colors">
        <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">1</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">进入插件市场</h4>
            <p class="text-xs text-slate-500 mt-1">点击右上角头像 > 插件市场 (Plugin Marketplace)</p>
        </div>
    </div>
    <!-- Step 2 -->
    <div class="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-center shadow-sm hover:border-violet-300 transition-colors">
        <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">2</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">发现与安装</h4>
            <p class="text-xs text-slate-500 mt-1">搜索 "DeepSeek" 或 "Google Search"，一键 Install。</p>
        </div>
    </div>
    <!-- Step 3 -->
    <div class="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-center shadow-sm hover:border-violet-300 transition-colors">
        <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">3</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">授权与使用</h4>
            <p class="text-xs text-slate-500 mt-1">配置必要的 API Key，然后在工作流中拖拽使用。</p>
        </div>
    </div>

</div>

</div>

<!--
（点击 1）除了模型，Dify 的另一个核心理念是“万物皆插件”。
以前我们要用谷歌搜索，得写代码调 API。现在，它就是一个“插件”。
模型是插件、工具是插件、扩展功能也是插件。

（点击 2）使用方法跟手机装 App 一样简单：
进入插件市场，搜你要的（比如 Google Search），点安装，填 Key，搞定。
装好后，你就能在工作流里直接拖拽使用它了。
-->