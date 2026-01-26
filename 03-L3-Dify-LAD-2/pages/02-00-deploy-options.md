---
layout: default
---

## 2.2 方案 B：私有化部署 (Self-Host) —— 数据完全可控

<div class="grid gap-8 md:grid-cols-[1fr_1.2fr] mt-6 items-start">

<!-- Left: Why Self-Host -->
<div class="space-y-4">
    <div class="rounded-2xl bg-amber-50 border border-amber-200 p-4">
        <h3 class="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
            <span class="text-lg">🔒</span> 为什么企业要私有化？
        </h3>
        <ul class="text-xs text-amber-800/80 space-y-2 list-disc pl-4">
            <li><strong>数据主权</strong>：合同、代码、薪酬数据不出公司内网。</li>
            <li><strong>内网集成</strong>：直接连接公司内部的 OA、ERP 数据库。</li>
        </ul>
    </div>
    <div class="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
        <div class="text-[10px] font-bold text-slate-400 uppercase mb-2">技术门槛</div>
        <div class="flex items-center justify-between text-xs text-slate-600">
            <span>Docker</span>
            <span class="font-mono bg-white px-2 rounded border">Required</span>
        </div>
    </div>
</div>

<!-- Right: Installation Steps -->
<div class="space-y-4">
    <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
        <span class="i-carbon-terminal text-emerald-500"></span> 3 行命令部署 (For IT)
    </h3>
    <div class="relative group">
        <div class="absolute -left-3 top-0 bottom-0 w-0.5 bg-slate-200"></div>
        <!-- Step 1 -->
        <div v-click class="ml-4 mb-6 transition-all duration-500">
            <div class="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Step 1: Clone Repo</div>
            <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 shadow-lg">
                git clone https://github.com/langgenius/dify.git
            </div>
        </div>
        <!-- Step 2 -->
        <div v-click class="ml-4 mb-6 transition-all duration-500">
            <div class="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Step 2: Enter Directory</div>
            <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 shadow-lg">
                cd dify/docker
            </div>
        </div>
        <!-- Step 3 -->
        <div v-click class="ml-4 transition-all duration-500">
            <div class="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Step 3: Start Up</div>
            <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 shadow-lg flex justify-between items-center">
                <span>docker compose up -d</span>
                <span class="text-slate-500 text-[9px] ml-2"># 一键启动</span>
            </div>
        </div>
    </div>
</div>

</div>

<!--
当然，如果你们公司对数据安全要求极高（比如律所、银行），或者需要连内网数据库，
那么 **方案 B：私有化部署** 是更好的选择。

（点击 1-3）虽然听起来很“硬核”，但其实 Dify 做的非常标准化。
要把这个页面发给公司的 IT 运维同事，让他们敲这三行命令，10 分钟就能在公司内网搭起一套 Dify。
-->
