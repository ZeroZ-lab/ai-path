---
layout: default
---

## 21 记忆系统：为什么 Agent 不再像金鱼

<div class="mt-3 text-[12px] leading-5 text-slate-500">
  这一页尽量用更接近 OpenClaw 文档的说法：当前上下文、memory 文件、retrieval、以及 compaction / context engineering。
</div>

<div class="grid gap-6 md:grid-cols-4 mt-6">
  <section class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">Current Context</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">当前窗口里真正送进模型的内容，包括对话、系统提示、工具结果和临时工作信息。</p>
  </section>
  <section class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">Memory Files</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">重要事实写入 `MEMORY.md` 或 `memory/YYYY-MM-DD.md`，作为磁盘上的持久信息。</p>
  </section>
  <section class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">Retrieval</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">不是每次把全部记忆塞进去，而是通过 `memory_search` / `memory_get` 按需找回相关片段。</p>
  </section>
  <section class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-slate-900">Compaction / Context Engineering</div>
    <p class="mt-2 text-sm text-slate-600 leading-6">关键不是记得越多越好，而是把真正重要的信息压缩、刷新并留在当前上下文里。</p>
  </section>
</div>

<div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
  <div class="text-sm font-bold text-slate-900">OpenClaw 的特殊点</div>
  <p class="mt-3 text-sm text-slate-600 leading-6">它强调本地优先。很多记忆直接存成 Markdown、本地索引或工作区上下文，这让记忆不再是黑盒，而是你能看、能改、能追踪。压缩、摘要和检索，也都变成可调试的工程接口。</p>
</div>

<!--
逐字稿：
这一页我想讲，为什么 Agent 不再像金鱼。

先看 Current Context。
如果一个系统只有当前窗口，没有别的补充，那它其实非常容易断片。窗口一换、上下文一截断，前面发生过什么就没了。所以 Context 很重要，但它本身也不稳定，因为它受上下文窗口限制。

第二块是 Memory Files。
真正重要的事实，要写到 `MEMORY.md` 或者 `memory` 目录里的文件里。因为只有写进磁盘，它才不依赖这一轮窗口还在不在。你下次重新启动、重新进入任务，系统才有机会接上。

第三块是 Retrieval。
不是每次把全部记忆灌进模型，而是按需找回最相关的片段。这样做的好处是，窗口不会被无关信息撑爆，而且模型拿到的是更相关的内容。

第四块是 Compaction 或者 Context Engineering。
这里最关键的一点是，记忆不是越多越好，而是越有用越好。系统要持续做的一件事，就是把真正重要的信息保留下来，把噪音压缩掉，把该写盘的写盘，把该回灌的回灌。

所以 Agent 之所以不像金鱼，不是因为模型天生记性更好了，而是因为外部系统把 current context、memory files、retrieval 和 compaction 一起补上了。
-->
