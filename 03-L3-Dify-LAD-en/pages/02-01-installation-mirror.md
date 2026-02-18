---
layout: default
---

## 2.2 Network Acceleration for China (Mirror)

<div class="grid gap-6 md:grid-cols-2 mt-4 items-start">

<div>

<!-- Problem -->
<div class="rounded-3xl border border-rose-100 bg-rose-50/80 p-5 shadow-sm mb-6">
    <h3 class="text-lg font-bold text-rose-900 flex items-center gap-2 mb-3">
        <span class="text-2xl">🐢</span> Common Issues
    </h3>
    <ul class="space-y-2 text-xs text-rose-800">
        <li class="flex items-start gap-2">
            <span class="mt-1 text-rose-500">•</span>
            <span><strong>GitHub Clone Failure:</strong><br>Connection timed out / RPC failed</span>
        </li>
        <li class="flex items-start gap-2">
            <span class="mt-1 text-rose-500">•</span>
            <span><strong>Docker Pull Slow:</strong><br>Image download stuck at 0% or only a few KB/s</span>
        </li>
    </ul>
</div>

</div>

<div>

<div v-click class="rounded-3xl border border-blue-100 bg-white p-4 shadow-sm mb-4 transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">Solution A: Code Repository Mirror</div>
    <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400">
        git clone https://gitee.com/mirrors/dify.git
    </div>
</div>

<div v-click class="rounded-3xl border border-blue-100 bg-white p-4 shadow-sm transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">Solution B: Docker Image Mirror</div>
    <p class="text-[10px] text-slate-600 mb-1">Edit <code>/etc/docker/daemon.json</code>:</p>
    <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 mb-2">
        { "registry-mirrors": [ "https://docker.1panel.live" ] }
    </div>
    <div class="mt-1 text-[10px] text-slate-500 flex justify-between items-center">
        <span>After editing, restart:</span>
        <code class="bg-slate-100 px-1 rounded text-slate-600">sudo systemctl restart docker</code>
    </div>
</div>

</div>

</div>

<!--
However, in the China network environment, you may encounter these two roadblocks:
GitHub won't connect, Docker images won't download.

(Click 1) If you can't pull the code, don't struggle with GitHub—just use Gitee's mirror repository, it's much faster.

(Click 2) If `docker compose up` gets stuck on the download progress bar, you need to configure Docker image acceleration.
Here's a `daemon.json` configuration template—add a domestic acceleration source, restart Docker, problem solved.
-->
