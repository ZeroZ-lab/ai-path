---
layout: default
---

## 16 Skills 和 MCP

<div class="mt-6 grid gap-5 md:grid-cols-2">
  <section class="rounded-[28px] border border-blue-100 bg-blue-50/80 p-5 shadow-[0_15px_35px_rgba(59,130,246,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Skills</div>
    <div class="mt-3 text-[1.3rem] font-bold text-slate-900">渐进式、按需加载的“说明书”</div>
    <ul class="mt-4 space-y-3 text-[14px] leading-6 text-slate-700">
      <li>模型一开始不会把所有 Skill 全文都塞进上下文。</li>
      <li>通常先看到的是很薄的一层信号：这个 Skill 是干什么的、什么时候该用。</li>
      <li>只有命中任务时，才继续展开对应的 `SKILL.md`。</li>
      <li>如果 Skill 里再引用脚本、模板、参考文档，也往往是继续按需展开。</li>
    </ul>
    <div class="mt-4 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-[13px] leading-5 text-slate-600">
      所以 Skill 更像：<b>先给索引，再按需展开正文和附件。</b>
    </div>
  </section>

  <section class="rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-5 shadow-[0_15px_35px_rgba(16,185,129,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">MCP</div>
    <div class="mt-3 text-[1.3rem] font-bold text-slate-900">更像把一整组可调用接口直接挂给模型</div>
    <ul class="mt-4 space-y-3 text-[14px] leading-6 text-slate-700">
      <li>MCP 往往是一整组能力被注册给模型。</li>
      <li>模型在会话里可以直接看到工具名、参数模式、调用方式。</li>
      <li>它不一定把外部数据内容全量塞进上下文。</li>
      <li>但从“能力暴露”角度看，它更接近一次性把整组接口摆到模型面前。</li>
    </ul>
    <div class="mt-4 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-[13px] leading-5 text-slate-600">
      所以 MCP 更像：<b>先把接口层完整接上，再由模型决定调哪个。</b>
    </div>
  </section>
</div>

<div class="mt-5 rounded-[24px] border border-amber-200 bg-amber-50/80 px-5 py-4 text-[15px] leading-6 text-amber-900 shadow-[0_12px_30px_rgba(245,158,11,0.10)]">
 <b>Skill 是渐进式给模型的工作流说明书，MCP 更像一次性暴露给模型的一组能力接口。</b>
</div>

<!--
逐字稿：
这里最容易混淆的一个点，是很多人会把 Skills 和 MCP 都理解成“让模型获得能力”的方式。

但它们暴露能力给模型的方式，其实完全不同。

Skill 更像渐进式、按需加载的说明书。模型不会一开始就把所有 Skill 全文都塞进上下文，而是先看到一个很薄的索引层信号：这个 Skill 是干什么的、什么时候该用。只有命中任务时，才继续展开 SKILL.md；如果再引用脚本、模板、参考文档，也是继续按需展开。

而 MCP 更像把一整组可调用接口直接挂给模型。模型在会话里就能看到工具名、参数模式、调用方式。它不一定把外部数据内容全量塞进上下文，但从能力暴露的角度看，它更接近一次性把整组接口摆到模型面前。

所以一句话：Skill 是渐进式给模型的工作流说明书，MCP 更像一次性暴露给模型的一组能力接口。
-->
