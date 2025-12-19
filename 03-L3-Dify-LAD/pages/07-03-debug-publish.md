---
layout: default
---

## 7.3 调试与发布：从 Demo 到 应用

<div class="grid gap-8 md:grid-cols-[1.2fr_1fr] mt-8 items-start">

<!-- Debugging -->
<div v-click class="flex flex-col gap-4 transition-all duration-500">
    <div class="flex items-center gap-2 text-blue-600">
        <span class="i-carbon-play-filled text-xl"></span>
        <h3 class="text-lg font-bold">1. 预览与运行 (Run)</h3>
    </div>
    <div class="bg-slate-900 rounded-2xl p-4 shadow-lg font-mono text-[10px] leading-relaxed text-slate-300 border border-slate-700 relative overflow-hidden">
        <div class="absolute top-0 right-0 px-2 py-1 bg-emerald-600 text-white text-[9px] rounded-bl-lg">Success</div>
        <div class="mb-2">
            <span class="text-blue-400">Start Input:</span> { "topic": "AI Future" }
        </div>
        <div class="mb-2 pl-2 border-l-2 border-slate-700">
            <span class="text-purple-400">Node 1 (Outline):</span> <span class="text-emerald-400">Done (2.3s)</span><br>
            Output: 1. Intro... 2. Impact...
        </div>
        <div class="mb-2 pl-2 border-l-2 border-slate-700">
            <span class="text-purple-400">Node 2 (Draft):</span> <span class="text-emerald-400">Done (5.1s)</span><br>
            Output: Artificial Intelligence is...
        </div>
        <div>
            <span class="text-amber-400">Final Output:</span> Generated Article.
        </div>
    </div>
    <p class="text-xs text-slate-500">
        通过 "Tracing" 追踪每一个节点的输入输出和耗时，快速定位问题。
    </p>
</div>

<!-- Publishing -->
<div v-click class="flex flex-col gap-4 transition-all duration-500">
    <div class="flex items-center gap-2 text-purple-600">
        <span class="i-carbon-rocket text-xl"></span>
        <h3 class="text-lg font-bold">2. 发布 (Publish)</h3>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">🌐</div>
                <span class="text-xs font-bold text-slate-700">Web App</span>
            </div>
            <span class="text-[10px] text-slate-400">开箱即用的网页</span>
        </div>
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg">🔌</div>
                <span class="text-xs font-bold text-slate-700">API</span>
            </div>
            <span class="text-[10px] text-slate-400">集成到现有系统</span>
        </div>
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-lg">🧩</div>
                <span class="text-xs font-bold text-slate-700">Embed</span>
            </div>
            <span class="text-[10px] text-slate-400">嵌入网站脚本</span>
        </div>
    </div>
</div>

</div>

<!--
配置完了，别急着交车。

（点击 1）**第一步：试驾 (Debug)**。
点击右下角的“运行”。右边这个黑色的框就是你的**仪表盘**。它会告诉你：大纲生成了没？文章写了多久？如果有问题，是油路堵了（变量没传对）还是发动机坏了（模型报错）。

（点击 2）**第二步：交付 (Publish)**。
试驾没问题了，就可以把车钥匙交给用户了。Dify 提供了三种交车方式：
- **Web App**：直接给用户一个网址，打开就能用。
- **API**：把引擎封装好，交给研发，装到公司的钉钉或飞书里。
- **Embed**：像挂件一样挂在公司官网上。
-->