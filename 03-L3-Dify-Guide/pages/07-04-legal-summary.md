---
layout: center
---

## 8.5 总结：从通用工作流到法务场景

<div class="mt-8 grid grid-cols-1 gap-4 max-w-5xl mx-auto">

  <!-- Row 1: Classifier -->
  <div v-click="1" class="grid grid-cols-12 gap-4 items-center bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div class="col-span-4 border-r border-slate-100 pr-4">
      <div class="text-[10px] text-slate-400 font-bold uppercase mb-1">Business Pain</div>
      <div class="text-slate-700 font-bold text-sm">"客户问题太杂，不知道怎么回"</div>
    </div>
    <div class="col-span-4 border-r border-slate-100 pr-4 pl-4">
      <div class="text-[10px] text-blue-400 font-bold uppercase mb-1">Workflow Logic</div>
      <div class="text-blue-700 text-sm">先识别意图，再分流处理</div>
    </div>
    <div class="col-span-4 pl-4 flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xl">🔀</div>
      <div>
        <div class="text-[10px] text-rose-400 font-bold uppercase">Core Node</div>
        <div class="text-rose-700 font-bold text-sm">Question Classifier</div>
      </div>
    </div>
  </div>

  <!-- Row 2: Search -->
  <div v-click="2" class="grid grid-cols-12 gap-4 items-center bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div class="col-span-4 border-r border-slate-100 pr-4">
      <div class="text-[10px] text-slate-400 font-bold uppercase mb-1">Business Pain</div>
      <div class="text-slate-700 font-bold text-sm">"不仅要法律知识，还要查企业"</div>
    </div>
    <div class="col-span-4 border-r border-slate-100 pr-4 pl-4">
      <div class="text-[10px] text-blue-400 font-bold uppercase mb-1">Workflow Logic</div>
      <div class="text-blue-700 text-sm">引入外部工具，补充实时信息</div>
    </div>
    <div class="col-span-4 pl-4 flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-xl">🔍</div>
      <div>
        <div class="text-[10px] text-amber-400 font-bold uppercase">Core Node</div>
        <div class="text-amber-700 font-bold text-sm">Tool / Search</div>
      </div>
    </div>
  </div>

  <!-- Row 3: Template -->
  <div v-click="3" class="grid grid-cols-12 gap-4 items-center bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div class="col-span-4 border-r border-slate-100 pr-4">
      <div class="text-[10px] text-slate-400 font-bold uppercase mb-1">Business Pain</div>
      <div class="text-slate-700 font-bold text-sm">"合同格式必须严谨，不能瞎编"</div>
    </div>
    <div class="col-span-4 border-r border-slate-100 pr-4 pl-4">
      <div class="text-[10px] text-blue-400 font-bold uppercase mb-1">Workflow Logic</div>
      <div class="text-blue-700 text-sm">控制输出结构，填空式生成</div>
    </div>
    <div class="col-span-4 pl-4 flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center text-xl">📝</div>
      <div>
        <div class="text-[10px] text-teal-400 font-bold uppercase">Core Node</div>
        <div class="text-teal-700 font-bold text-sm">Template Node</div>
      </div>
    </div>
  </div>

</div>

<div v-click="4" class="mt-8 text-center bg-slate-50 p-4 rounded-lg border border-slate-200 mx-auto max-w-3xl border-dashed">
  <p class="text-slate-600 italic">
    "Agent 开发的核心心法：<strong>拆解</strong>业务流程 (Decompose) -> <strong>映射</strong>合适节点 (Map)。"
  </p>
</div>

<!--
总结一下这章的核心逻辑。我们不是在堆砌功能，而是在解决实际问题：

1.  **意图识别 (Classifier)**：解决的是**“入口分流”**的问题。客户需求千奇百怪，先分清楚他是要咨询离婚还是查公司，别把所有问题都塞给同一个 Prompt。

2.  **工具调用 (Tools)**：解决的是**“信息茧房”**的问题。大模型只知道以前的事，不知道今天谁破产了。必须给它配上搜索工具。

3.  **模板转换 (Template)**：解决的是**“出口风控”**的问题。法律文书错一个字可能赔几百万，不能让 AI 自由发挥，必须用模板限制它的输出边界。

学会这三招：**分流、补全、风控**，你就能把 80% 的法律业务搬到 Dify 上来。
-->
