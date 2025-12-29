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
现在我们知道要搭流水线了，那该买什么样的工具呢？

（点击 1）**方案一：自己烧砖盖房 (LangChain)**。
这是程序员的最爱。自由度无限，想盖成什么样都行。但问题是：**门槛太高**。我们法务和 HR 总不能为了用 AI，先去学个 Python 吧？

（点击 2）**方案二：住酒店 (GPTs)**。
拎包入住，设施齐全。但问题是：**这是别人的地盘**。你不能改格局，不能换家具，而且最重要的是，你的数据不安全，万一酒店关门了（封号），你就无家可归了。

（点击 3）**方案三：买精装房 (Dify)**。
这就是我们今天的选择。
1.  **可视**：户型图（Workflow）你看得懂，想改哪里拖拽一下就行。
2.  **安全**：这是你自己的房产（私有部署），数据锁在自己家里。
3.  **开放**：你想接个智能家居（API），也没问题。

**Dify 就是那个既让业务人员“能看懂”，又让技术人员“好扩展”的完美平衡点。**
-->
