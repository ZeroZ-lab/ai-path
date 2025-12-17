---
layout: default
class: px-14
---

## 1.1.5 选型：为了实现 Workflow，我们该用什么？

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
我们刚才说了，我们需要把“人脑步骤”画成“Workflow”。
那用什么工具画呢？

（点击 1）**纯代码**：LangChain。
这当然能画，但只有程序员能画。法务、HR 根本看不懂，怎么参与设计？

（点击 2）**SaaS**：GPTs。
这个简单，但它只能在 OpenAI 的网页上跑，没法嵌入我们的 OA 系统，而且数据也不安全。

（点击 3）**LLM Ops**：Dify。
它提供了一个可视化的画板，业务人员能看懂，程序员也能接 API。
这就是为什么我们要选它的原因。
-->
