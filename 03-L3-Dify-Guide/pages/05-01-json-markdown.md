---
layout: default
---

## 5.1 结构化数据之美：JSON 与 Markdown

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">
<!-- JSON Card -->
<div v-click class="rounded-[32px] border border-amber-100 bg-amber-50/80 p-6 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1">
  <div class="flex items-center gap-3 mb-4">
    <span class="text-3xl p-2 bg-white rounded-xl shadow-sm">📦</span>
    <div>
      <h3 class="text-xl font-bold text-amber-900">JSON</h3>
      <p class="text-xs text-amber-700">机器读得懂的数据</p>
    </div>
  </div>
  <div class="bg-slate-900 rounded-2xl p-4 font-mono text-xs text-emerald-400 leading-relaxed flex-1 overflow-hidden shadow-inner">
<pre>{
  "name": "Dify LAD",
  "version": 1.0,
  "features": [
    "Workflow",
    "RAG"
  ],
  "active": true
}</pre>
  </div>
  <div class="mt-4 text-xs text-slate-600">
    <strong>应用场景：</strong> API 传参、配置文件、工具调用结果。<br>
    <strong>特点：</strong> 严谨、嵌套、键值对 (Key-Value)。
  </div>
</div>
<!-- Markdown Card -->
<div v-click class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1">
  <div class="flex items-center gap-3 mb-4">
    <span class="text-3xl p-2 bg-white rounded-xl shadow-sm">📝</span>
    <div>
      <h3 class="text-xl font-bold text-blue-900">Markdown</h3>
      <p class="text-xs text-blue-700">AI 写得好的文档</p>
    </div>
  </div>
  <div class="bg-white rounded-2xl p-4 border border-slate-200 flex-1 shadow-inner text-xs text-slate-700 leading-relaxed">
    <h1 class="text-lg font-bold border-b border-slate-200 pb-1 mb-2">标题 Header</h1>
    <p class="mb-2">这是 <strong>加粗</strong> 和 <em>斜体</em>。</p>
    <ul class="list-disc pl-4 mb-2">
        <li>列表项 1</li>
        <li>列表项 2</li>
    </ul>
    <code class="bg-slate-100 px-1 rounded">print("Hello World")</code>
  </div>
  <div class="mt-4 text-xs text-slate-600">
    <strong>应用场景：</strong> 最终回答、知识库文档、Prompt 编写。<br>
    <strong>特点：</strong> 易读、轻量、支持排版。
  </div>
</div>
</div>

<!--
（点击 1）首先是 JSON。
大家把它想象成一个“有着严格格子的储物柜”。
每个格子上贴着标签（Key），里面放着东西（Value）。
机器最喜欢这种，因为绝对不会拿错。
我们后面做“合同生成”时，提取变量用的就是 JSON。

（点击 2）然后是 Markdown。
它就像我们平时写的“带格式的笔记”。
用 `#` 表示标题，用 `*` 表示加粗。
AI 输出的长文章，基本都是 Markdown 格式，为了让人看得舒服。
-->