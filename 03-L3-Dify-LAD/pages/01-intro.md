---
layout: center
---

# 01 Dify 是什么？

<div class="mt-4 text-slate-500">The LLM App Development Platform</div>

<!--
在开始之前我想先问大家一个问题：你们现在是怎么用 ChatGPT 或 Claude 的？是把它当成搜索引擎用，还是当成一个随叫随到的助理用？
其实大多数人都会经历一个阶段：偶尔问一次，觉得很惊艳；但换个问题、换个人问，结果就不稳定了。

所以我们今天这门课的目标，不是教大家“怎么注册账号”或者“怎么充值”，也不是追着某一个模型的功能跑。
我们要做的是把零散的尝试，变成可复用、可交付、可治理的 AI 应用。

这两天的节奏也跟大家说一下：Day 1 我们重点讲 Workflow，也就是工作流怎么设计、怎么把一个业务问题拆成节点；Day 2 重点讲知识库和交付，也就是怎么让它更专业、更稳定，最后真的能在团队里用起来。
另外，大家全程保持互动，看到不懂的术语就举手，我们随时停下来聊。
-->

---
layout: default
class: px-14
---

## 1.0 为什么“只用 ChatGPT”不够？

<div class="grid gap-8 md:grid-cols-2 mt-6">
  <div class="rounded-3xl border border-slate-200 bg-white shadow-lg p-6">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">直接对话式使用</div>
    <h3 class="text-lg font-semibold text-slate-900 mb-4">人人都能问，但难以复用</h3>
    <ul class="text-sm text-slate-600 space-y-3 list-disc pl-5">
      <li>输出随人而变：提示词、上下文完全靠个人经验。</li>
      <li>过程不可控：看不到模型如何走步骤，难以审计。</li>
      <li>协作难落地：同一问题反复问，无法沉淀成流程。</li>
    </ul>
  </div>

  <div class="rounded-3xl border border-blue-200 bg-blue-50/60 shadow-inner p-6">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">平台化交付</div>
    <h3 class="text-lg font-semibold text-blue-900 mb-4">把经验沉淀成可复用的“流程”</h3>
    <ul class="text-sm text-blue-900/80 space-y-3 list-disc pl-5">
      <li>可控：节点化拆解，提示词/变量/工具都显式配置。</li>
      <li>可复用：同一工作流多次运行、交接，结果一致。</li>
      <li>可治理：权限、日志、版本管理，让 AI 能被审计。</li>
    </ul>
  </div>
</div>

<div class="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-sm text-emerald-800 leading-relaxed">
  <strong>结论：</strong> ChatGPT 适合灵感与探索；Dify 这样的平台才能把“个人智慧”沉淀成“可交付的 AI 服务”，
  也是后续课程要讲的“平台 = 可控 + 可复用”的原因。
</div>

<!--
先问“你最近一次用 ChatGPT 做工作内容是什么”，引导学员反思复现性。
讲三个痛点：输出随机、黑盒流程、无法协作；对应平台的三种价值。
用一句话总结：“我们不是要取代 ChatGPT，而是把它变成一个工序里的‘节点’。”
举一个法务或运营案例：个人 prompt 做合同审查 vs. 平台化的标准流程。
提醒学员：接下来会用 Dify 演示“把经验可视化”的具体步骤。
-->

---
layout: default
class: px-14
---

## 1.0.1 搭建大模型应用：我们有哪些选择？

<div class="text-sm text-slate-600 mt-2">
  业务团队想做的是<strong>“可交付的业务能力”</strong>：可复用、可协作、可审计，而不仅是“聊得出来”。因此我们先看几种常见路径。
</div>

<div class="grid gap-4 md:grid-cols-2 mt-5 items-stretch">

  <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">代码优先</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">LangChain / LlamaIndex / 自研</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
      <li>优点：自由度高，复杂流程可深度定制</li>
      <li>代价：研发/运维依赖强，业务迭代慢</li>
    </ul>
  </div>

  <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">SaaS / 助手优先</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">直接买工具 / 直接用 Copilot</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
      <li>优点：最快上线，适合探索与试点</li>
      <li>代价：流程/审计/数据边界不易掌控</li>
    </ul>
  </div>

  <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">低代码编排</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">可视化流程平台</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
      <li>优点：把流程沉淀成资产，业务可直接参与迭代</li>
      <li>代价：需要选型，建立规范与治理方式</li>
    </ul>
  </div>

  <div class="rounded-3xl border border-blue-200 bg-blue-50/60 p-5 shadow-inner">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">我们的选择</div>
    <h3 class="text-base font-semibold text-blue-900 mb-2">Dify</h3>
    <ul class="text-xs text-blue-900/80 space-y-1.5 list-disc pl-5">
      <li>业务友好：可视化工作流，让业务逻辑可见可改</li>
      <li>可交付：权限/日志/版本/API，适合团队协作</li>
      <li>可扩展：模型中立 + 知识库/工具接入</li>
    </ul>
  </div>

</div>

<div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50/60 p-3 text-xs text-slate-700">
  <strong>选择依据：</strong>上线速度 / 可控性（流程与审计）/ 可复用性（资产沉淀）/ 可部署性（数据与合规）/ 成本（研发与运维）
</div>

<!--
这页的目标不是“评测所有工具”，而是把选择标准讲清楚：为什么我们不直接写代码、也不只买 SaaS。
建议互动提问：你们更在意哪一项？上线速度？数据合规？还是流程可控？
收束一句话：Dify 的定位就是“把 ChatGPT 变成可交付的流程产品”，所以我们接下来讲它。
-->

---
layout: default
---

## 1.0.2 可视化流程平台很多，为什么选 Dify？

<div class="grid gap-6 md:grid-cols-2 mt-8 items-stretch">

  <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg text-left flex flex-col h-full">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">业务团队的选型标准</div>
    <ul class="text-sm text-slate-600 space-y-2 list-disc pl-6">
      <li><strong>可交付</strong>：能输出 WebApp / API，能给别人用，不止自己用。</li>
      <li><strong>可治理</strong>：权限、日志、版本、评测/标注等能力要齐。</li>
      <li><strong>可扩展</strong>：模型可切换、知识库可接、工具/插件可插。</li>
      <li><strong>可落地</strong>：支持私有化部署，满足数据与合规边界。</li>
    </ul>
  </div>

  <div class="rounded-3xl border border-blue-200 bg-blue-50/60 p-6 shadow-inner text-left flex flex-col h-full">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Dify 的优势（对标“低代码平台”）</div>
    <ul class="text-sm text-blue-900/80 space-y-2 list-disc pl-6">
      <li><strong>更像“产品化交付平台”</strong>：应用、工作流、知识库、运营闭环齐全。</li>
      <li><strong>RAG 能力更完整</strong>：分段、检索、重排、管线配置都有最佳实践。</li>
      <li><strong>生态与集成友好</strong>：插件/工具节点丰富，接入成本低。</li>
      <li><strong>成本结构清晰</strong>：业务可自助迭代，技术只需负责底座与边界。</li>
    </ul>
  </div>

</div>

<div class="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm text-emerald-800">
  <strong>一句话：</strong>我们不是在选“画流程的工具”，而是在选“把 AI 交付成业务能力的平台”。
</div>

<!--
避免“点名比较”其他平台：强调我们用业务标准做选择。
可现场问：你们最在意哪一项？部署合规？可治理？还是交付形式（WebApp/API）？
-->

---
layout: default
---

## 1.1 为什么选择 Dify?

<div class="grid gap-6 md:grid-cols-3 mt-10">

<!-- Feature 1 -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg group hover:-translate-y-2 transition-transform">
  <div class="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-sm text-blue-600 mb-4">🧩</div>
  <h3 class="text-xl font-bold text-blue-900 mb-2">可视编排</h3>
  <p class="text-xs text-slate-600 leading-relaxed">
    拒绝黑盒。通过 Canvas 画布拖拽节点，直观设计复杂的 AI 业务逻辑 (Workflow)。
  </p>
</div>

<!-- Feature 2 -->
<div class="rounded-[32px] border border-purple-100 bg-purple-50/80 p-6 shadow-lg group hover:-translate-y-2 transition-transform">
  <div class="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-sm text-purple-600 mb-4">🧠</div>
  <h3 class="text-xl font-bold text-purple-900 mb-2">RAG 引擎</h3>
  <p class="text-xs text-slate-600 leading-relaxed">
    内置高性能 RAG 管道。支持文本分段、混合检索、Re-rank 重排序，无需自己写代码。
  </p>
</div>

<!-- Feature 3 -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-lg group hover:-translate-y-2 transition-transform">
  <div class="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-sm text-emerald-600 mb-4">🔌</div>
  <h3 class="text-xl font-bold text-emerald-900 mb-2">模型中立</h3>
  <p class="text-xs text-slate-600 leading-relaxed">
    不被厂商绑定。一键接入 OpenAI、Claude、DeepSeek、Ollama 等数百种模型。
  </p>
</div>

</div>

<div class="mt-10 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
    <span class="text-sm font-bold text-slate-700">核心定位：</span>
    <span class="text-sm text-slate-500">从 Prompt Engineering (提示词工程) 进阶到 Flow Engineering (流程工程)</span>
</div>

<!--
用“可视编排 / RAG 引擎 / 模型中立”三点分别举一个真实场景（客服、合规、知识助手）。
点出 Flow Engineering 的概念：强调流程化、版本化、团队协作。
预告后续章节：第二章讲部署接入，第三章开始进入 Workflow 设计。
强调 Dify 不是“又一个模型”，而是帮助法务/运营/产品做出自己的 AI 工具。
询问现场已有 Dify 经验的同学，让他们分享感受，引出下一节安装配置。
-->
