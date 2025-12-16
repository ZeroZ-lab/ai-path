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

<div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">方案 A：代码仓库加速</div>

```bash {monaco}
git clone https://gitee.com/mirrors/dify.git
```
<div class="my-6 border-t border-slate-100"></div>

<div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">方案 B：Docker 镜像加速</div>
<p class="text-[10px] text-slate-600 mb-1">编辑 <code>/etc/docker/daemon.json</code>：</p>

```json {monaco}
{
  "registry-mirrors": [
    "https://docker.1panel.live",
    "https://hub.rat.dev"
  ]
}
```

<div class="mt-1 text-[10px] text-slate-500">
修改后重启：
</div>

```bash {monaco}
sudo systemctl restart docker
```

</div>

</div>
