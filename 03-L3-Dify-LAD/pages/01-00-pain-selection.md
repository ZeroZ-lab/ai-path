---
layout: center
---

# 01 为什么我们需要 AI 开发平台？

<div class="mt-4 text-slate-500">
  从 ChatGPT 聊天框到企业级业务应用
</div>

<!--
好，我们先来看第一个问题：为什么说“只用 ChatGPT”是不够的？
-->

---
layout: default
class: px-14
---

## 1.0 痛点：为什么“只用 ChatGPT”不够？

<div class="grid gap-8 md:grid-cols-2 mt-6">
  <div v-click class="rounded-3xl border border-slate-200 bg-white shadow-lg p-6 transition-all duration-500">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">直接对话式使用</div>
    <h3 class="text-lg font-semibold text-slate-900 mb-4">人人都能问，但难以复用</h3>
    <ul class="text-sm text-slate-600 space-y-3 list-disc pl-5">
      <li>输出随人而变：提示词、上下文完全靠个人经验。</li>
      <li>过程不可控：看不到模型如何走步骤，难以审计。</li>
      <li>协作难落地：同一问题反复问，无法沉淀成流程。</li>
    </ul>
  </div>

  <div v-click class="rounded-3xl border border-blue-200 bg-blue-50/60 shadow-inner p-6 transition-all duration-500">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">平台化交付</div>
    <h3 class="text-lg font-semibold text-blue-900 mb-4">把经验沉淀成可复用的“流程”</h3>
    <ul class="text-sm text-blue-900/80 space-y-3 list-disc pl-5">
      <li>可控：节点化拆解，提示词/变量/工具都显式配置。</li>
      <li>可复用：同一工作流多次运行、交接，结果一致。</li>
      <li>可治理：权限、日志、版本管理，让 AI 能被审计。</li>
    </ul>
  </div>
</div>

<div v-click class="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-sm text-emerald-800 leading-relaxed transition-all duration-500">
  <strong>结论：</strong> ChatGPT 适合灵感与探索；我们需要一个平台，把“个人智慧”固化成“企业资产”。
</div>

<!--
（点击 1）大家看左边，这是我们现在的状态。
每个人都在用 Prompt，但你的 Prompt 只有你会用，换个人来问，效果就变了。
而且，老板问你：这个 AI 为什么这么回答？中间引用了哪条数据？你很难复现。
这叫“个人技巧”，不叫“系统能力”。

（点击 2）而我们想要的，是右边这种状态。
我们要把 Prompt 固化下来，把中间的推理步骤拆解出来。
让实习生点一下按钮，也能得到和专家一样的回答。
这叫“可复用、可治理”。

（点击 3）所以结论很简单：
如果你只是想找点灵感，ChatGPT 很好。
但如果你想给公司交付一个“产品”，你需要一个开发平台。
-->

---
layout: default
class: px-14
---

## 1.0.1 选型：搭建 AI 应用，我们有哪些选择？

<div class="grid gap-4 md:grid-cols-3 mt-8 items-stretch">

  <div v-click class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">硬核开发</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">LangChain / Python</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5 flex-1">
      <li>优点：自由度无限，适合超复杂逻辑。</li>
      <li>代价：<strong>业务人员无法参与</strong>，全靠研发排期。</li>
    </ul>
  </div>

  <div v-click class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">SaaS 助手</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">GPTs / Copilot</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5 flex-1">
      <li>优点：上手极快，开箱即用。</li>
      <li>代价：<strong>黑盒不可控</strong>，数据隐私难保障，难以集成到业务系统。</li>
    </ul>
  </div>

  <div v-click class="rounded-3xl border border-blue-200 bg-blue-50/60 p-5 shadow-inner flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">最佳平衡点</div>
    <h3 class="text-base font-semibold text-blue-900 mb-2">LLM Ops (Dify)</h3>
    <ul class="text-xs text-blue-900/80 space-y-1.5 list-disc pl-5 flex-1">
      <li>业务友好：<strong>可视化编排</strong>，业务懂逻辑就能改。</li>
      <li>可交付：提供 API，轻松嵌入现有系统。</li>
      <li>可落地：支持私有部署，数据安全。</li>
    </ul>
  </div>

</div>

<!--
既然要开发平台，我们有哪些选择呢？

（点击 1）第一种，让程序员写代码，用 LangChain。
这种方式自由度最高，想干嘛干嘛。但问题是，业务人员（法务、HR）看不懂代码。
每次改一个提示词，都要给研发提单、排期、上线，这个迭代周期太慢了。

（点击 2）第二种，直接买 SaaS，比如用 OpenAI 的 GPTs。
这种最快，但它是黑盒。数据发过去安全吗？它的逻辑能不能微调？
而且，你怎么把它嵌到你公司的 OA 系统里？很难。

（点击 3）所以，我们选择了第三条路：LLM Ops 平台，也就是 Dify 这类低代码平台。
它既有可视化的界面，让业务人员能拖拽、能改 Prompt；
又提供了标准的 API，让研发能轻松集成。
这是一个完美的平衡点。
-->