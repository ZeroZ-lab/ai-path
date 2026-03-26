---
layout: default
---

## 14 能力分层：基础、工具、Skill、MCP 不是一回事

<div class="mt-6 grid gap-4">
  <section class="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-md">
    <div class="grid grid-cols-[180px_1fr] bg-slate-50/80 px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
      <div>层级</div>
      <div>它到底是什么</div>
    </div>
    <div class="grid grid-cols-[180px_1fr] px-4 text-left">
      <div class="border-t border-slate-100 py-4 text-[1.02rem] font-bold text-amber-700">1. 基础</div>
      <div class="border-t border-slate-100 py-4 text-sm leading-6 text-slate-700">最底层的“手”，例如 `read / write / edit / bash`。它们动作简单、边界稳定，负责最基础的执行能力。</div>
      <div class="border-t border-slate-100 py-4 text-[1.02rem] font-bold text-blue-700">2. 工具</div>
      <div class="border-t border-slate-100 py-4 text-sm leading-6 text-slate-700">建立在原语之上的更完整能力，例如浏览器操作、搜索、HTTP 调用、文件系统访问。它们比原语更接近具体任务。</div>
      <div class="border-t border-slate-100 py-4 text-[1.02rem] font-bold text-purple-700">3. Skill</div>
      <div class="border-t border-slate-100 py-4 text-sm leading-6 text-slate-700">给模型的说明书和工作流封装。Skill 不一定亲自执行动作，而是告诉 Agent 何时用哪些工具、按什么步骤做。</div>
      <div class="border-t border-slate-100 py-4 text-[1.02rem] font-bold text-emerald-700">4. MCP</div>
      <div class="border-t border-slate-100 py-4 text-sm leading-6 text-slate-700">把外部能力标准化接进来的协议/连接方式。它解决的是“怎么接线”，不是“模型该怎么做事”。</div>
      <div class="border-t border-slate-100 py-4 text-[1.02rem] font-bold text-rose-700">5. 编排</div>
      <div class="border-t border-slate-100 py-4 text-sm leading-6 text-slate-700">更上层的任务组织方式，例如 sub-agent、任务拆解、并行协作。它不是一个 tool，也不是一个 skill，而是系统怎么安排多个动作。</div>
    </div>
  </section>
</div>

<div class="mt-8 grid gap-5 md:grid-cols-2">
  <section class="rounded-3xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-amber-900">最容易混淆的地方</div>
    <p class="mt-2 text-sm leading-6 text-amber-800">很多人会把 Browser、Skill、MCP 都叫“工具”。其实它们处在不同层。一个负责执行，一个负责说明，一个负责接线。</p>
  </section>
  <section class="rounded-3xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
    <div class="text-sm font-bold text-blue-900">这一段最该带走的一句话</div>
    <p class="mt-2 text-sm leading-6 text-blue-800">基础动作是手，工具是接口，Skill 是说明书，MCP 是接线标准，编排决定这些东西怎么一起工作。</p>
  </section>
</div>

<!--
逐字稿：
这一页我想把最容易混淆的一层东西分清。

很多人会把 Browser、Skill、MCP 全都叫工具，但其实它们根本不在同一层。

最底层是基础动作，比如 read、write、edit、bash。它们更像最原始的手部动作。

再往上一层是工具。工具比原语更完整，更接近一个具体任务，比如浏览器操作、搜索、HTTP 调用。

再往上是 Skill。Skill 不一定亲自执行动作，它更像写给模型看的说明书和工作流封装，告诉模型何时用哪些工具、按什么顺序做。

MCP 则更像接线标准。它解决的是“外部能力怎么标准化接进来”，不是“模型具体该怎么完成任务”。

最上面还有编排。也就是任务拆解、并行协作、sub-agent 这些系统怎么组织多个动作的方式。

所以这一页的带走点很简单：基础动作是手，工具是接口，Skill 是说明书，MCP 是接线标准，编排决定它们怎么一起工作。
-->
