---
layout: center
---

# 02 Docker 私有化部署

<!--
讲完了“为什么要用 Dify”，我们马上进入实操环节：怎么把它装到你自己的电脑或服务器上。
我们推荐的方式是：Docker 私有化部署。
-->

---
layout: default
---

## 2.1 环境准备与安装

<div class="grid gap-8 md:grid-cols-[1fr_1.2fr] mt-6 items-start">

<!-- Left: Prerequisites -->
<div class="space-y-4">
    <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
        <span class="i-carbon-tools text-blue-500"></span> 前置要求
    </h3>
    <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
            <span class="text-sm text-slate-700">CPU</span>
            <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded">>= 2 Core</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-sm text-slate-700">RAM</span>
            <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded">>= 4 GB</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-sm text-slate-700">Docker</span>
            <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Installed</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-sm text-slate-700">Compose</span>
            <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded">V2.0+</span>
        </div>
    </div>
    <div class="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-800 leading-relaxed">
        ⚠️ <strong>注意：</strong> 这是一个完整的 Web 应用，包含 PostgreSQL, Redis, Weaviate 等组件，请确保 80/443 端口未被占用。
    </div>
</div>

<!-- Right: Installation Steps -->
<div class="space-y-4">
    <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
        <span class="i-carbon-terminal text-emerald-500"></span> 安装命令
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
    <div v-click class="mt-6 flex items-center gap-2 text-sm text-slate-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100 transition-all duration-500">
        <span class="text-xl">🎉</span>
        <span>访问地址：<strong>http://localhost/install</strong></span>
    </div>
</div>

</div>

<!--
首先，我们要确认一下电脑配置。
Dify 背后跑着数据库、缓存和向量库，所以建议至少 4GB 内存，最好 8GB 以上。
另外，请确保你的 80 端口没被占用。

安装过程其实非常标准，只有三步：
（点击 1）第一步，把代码拉下来。
（点击 2）第二步，进入 docker 目录。
（点击 3）第三步，也是最神奇的一步，执行 `docker compose up -d`。
这时候，Docker 会自动帮我们拉取所有镜像并启动服务。

（点击 4）稍等片刻，看到所有容器都绿了之后，打开浏览器访问 localhost，你就能看到安装向导了。
-->