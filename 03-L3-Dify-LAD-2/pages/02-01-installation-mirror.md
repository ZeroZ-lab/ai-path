---
layout: default
---

## 2.2 国内网络加速 (Mirror)

<div class="grid gap-6 md:grid-cols-2 mt-4 items-start">

<div>

<!-- Problem -->
<div class="rounded-3xl border border-rose-100 bg-rose-50/80 p-5 shadow-sm mb-6">
    <h3 class="text-lg font-bold text-rose-900 flex items-center gap-2 mb-3">
        <span class="text-2xl">🐢</span> 常见问题
    </h3>
    <ul class="space-y-2 text-xs text-rose-800">
        <li class="flex items-start gap-2">
            <span class="mt-1 text-rose-500">•</span>
            <span><strong>GitHub Clone 失败：</strong><br>Connection timed out / RPC failed</span>
        </li>
        <li class="flex items-start gap-2">
            <span class="mt-1 text-rose-500">•</span>
            <span><strong>Docker Pull 缓慢：</strong><br>拉取镜像卡在 0% 或几十 KB/s</span>
        </li>
    </ul>
</div>

</div>

<div>

<div v-click class="rounded-3xl border border-blue-100 bg-white p-4 shadow-sm mb-4 transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">方案 A：代码仓库加速</div>
    <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400">
        git clone https://gitee.com/mirrors/dify.git
    </div>
</div>

<div v-click class="rounded-3xl border border-blue-100 bg-white p-4 shadow-sm transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">方案 B：Docker 镜像加速</div>
    <p class="text-[10px] text-slate-600 mb-1">编辑 <code>/etc/docker/daemon.json</code>：</p>
    <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 mb-2">
        { "registry-mirrors": [ "https://docker.1panel.live" ] }
    </div>
    <div class="mt-1 text-[10px] text-slate-500 flex justify-between items-center">
        <span>修改后重启：</span>
        <code class="bg-slate-100 px-1 rounded text-slate-600">sudo systemctl restart docker</code>
    </div>
</div>

</div>

</div>

<!--
但在国内网络环境下，大家很可能会遇到这两个拦路虎：
GitHub 连不上，Docker 镜像拉不动。

（点击 1）如果代码拉不下来，别死磕 GitHub，直接用 Gitee 的镜像仓库，速度飞快。

（点击 2）如果 `docker compose up` 卡在下载进度条不动了，说明你需要配置 Docker 镜像加速。
这里给了一份 `daemon.json` 的配置模板，加上国内的加速源，重启 Docker，问题解决。
-->