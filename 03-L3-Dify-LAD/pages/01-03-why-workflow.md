---
layout: center
class: px-14
---

# 1.3 为什么需要 Workflow？

<div class="mt-4 text-sm text-slate-500 leading-relaxed">
先聊一聊：你在用 AI（ChatGPT / Claude / Dify）时，遇到过哪些问题？
</div>

---
layout: default
class: px-14
---

## 1.3.1 在用 AI 时，我们到底在烦什么？

<div class="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-600">
  <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
    <div class="font-semibold mb-2">可能会听到的回答</div>
    <ul class="list-disc pl-5 space-y-1.5 text-xs">
      <li>“同样的问题，每次回答都不一样。”</li>
      <li>“效果很好，但下次我自己复现不出来。”</li>
      <li>“不知道它中间做了什么，只看到结果。”</li>
      <li>“这个 prompt 只有我会用，很难交给同事。”</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
    <div class="font-semibold mb-2">这些回答背后的共性问题</div>
    <ul class="list-disc pl-5 space-y-1.5 text-xs">
      <li>结果不稳定、不可复现</li>
      <li>过程是黑盒，难以解释与审计</li>
      <li>经验无法沉淀，难以协作与交接</li>
      <li>Demo 能跑，但不好落地成“系统”</li>
    </ul>
  </div>
</div>

<div class="mt-6 text-xs text-slate-500">
这些烦恼的共同点是：任务已经从“一次回答”，变成了“带状态的过程”。这正是我们需要 Workflow 的起点。
</div>

---
layout: default
class: px-14
---

## 1.3.2 从真实问题出发：AI 任务已经变成“过程”

<div class="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">

  <div class="space-y-4 text-sm text-slate-700">
    <h3 class="text-base font-semibold text-slate-900">
      我们的工作，本来就是“带步骤的流程”
    </h3>
    <p>
      回想一下你日常的高频任务：其实很少有“问一句就结束”的场景。
      更多时候，都是一串固定却又带判断的步骤。
    </p>
    <ul class="list-disc pl-6 space-y-2 text-xs">
      <li>先<span class="font-semibold">收集信息</span>：确认对方的基本情况、目标、约束条件。</li>
      <li>再<span class="font-semibold">查资料 / 看规则</span>：翻合同、翻制度、翻法律条文。</li>
      <li>接着<span class="font-semibold">做判断</span>：哪些能做，哪些不能做，哪些要走例外流程。</li>
      <li>最后<span class="font-semibold">生成和校对结果</span>：写结论、给建议、发邮件或出文档。</li>
    </ul>
    <p class="text-xs text-slate-500">
      这些步骤之间有严格顺序和条件，同一流程交给不同人，结果又必须稳定一致。
      这本质上是“过程”和“结构”，而不是几句对话就能解决的事情。
    </p>
  </div>

  <div class="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 shadow-inner text-xs text-slate-700 space-y-3">
    <div class="text-[11px] font-bold uppercase tracking-widest text-blue-500">如果我们只用对话来做这件事</div>
    <p>这些带步骤的工作，会在聊天里变成：</p>
    <ul class="list-disc pl-5 space-y-1.5">
      <li>步骤混在一起，谁也说不清过程。</li>
      <li>每次问法不同，结果也跟着飘。</li>
      <li>经验锁在个人对话里，难以交接给团队。</li>
    </ul>
    <p class="text-[11px] text-blue-700/80">
      这就是为什么，我们需要一种方式，把这些隐形步骤“画出来”“定下来”——
      让 AI 跟着我们设计好的流程去做事，而不是随对话即兴发挥。
    </p>
  </div>

</div>

<!--
讲法建议（约 3-5 分钟）：
1) 业务现实：AI 任务不是“一问一答”，而是“带状态的过程”。
2) Workflow 价值：把隐形推理外化成结构（节点/变量/条件/工具），结果才可控。
3) 交付标准：能复跑、能交接、能审计；这就是平台（Dify）要解决的。
下一页将解释：Workflow 到底是什么（不是“画流程”）。
-->

---
layout: default
class: px-14
---

## 1.3.3 一个真实工作的流程长什么样？

<div class="mt-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-inner">
  <div class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">示例：多人协作处理一封“合同风险咨询”</div>

  <div class="grid items-start gap-x-4 text-xs text-slate-700 [grid-template-columns:minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">📩</div>
      <div class="font-semibold">1. 先读懂需求</div>
      <div class="text-[11px] text-slate-500 text-center">A 员工｜场景/目标/约束</div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">🧩</div>
      <div class="font-semibold">2. 追问与拆解</div>
      <div class="text-[11px] text-slate-500 text-center">B 员工｜信息不全就问</div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">🔎</div>
      <div class="font-semibold">3. 去查资料</div>
      <div class="text-[11px] text-slate-500 text-center">C 员工｜合同/制度/法规</div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">⚠️</div>
      <div class="font-semibold">4. 做判断</div>
      <div class="text-[11px] text-slate-500 text-center">D 员工｜命中规则走分支</div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">📝</div>
      <div class="font-semibold">5. 组织表达</div>
      <div class="text-[11px] text-slate-500 text-center">E 员工｜结论/建议/结构</div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <div class="i-carbon-arrow-right text-slate-300 text-2xl"></div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">✅</div>
      <div class="font-semibold">6. 复核交付</div>
      <div class="text-[11px] text-slate-500 text-center">F 员工｜发送/归档/追踪</div>
    </div>
  </div>
</div>

<div class="mt-4 text-xs text-slate-500">
重点是：这是<strong>多人协作按步骤在做事</strong>，不是“聊两句”就结束。Workflow 要做的是把这套人脑步骤外化成结构，让它可复跑、可交接。
</div>

---
layout: default
class: px-14
---

## 1.3.4 现实里，流程还会“调用工具”

<div class="mt-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-inner">
  <div class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
    同一条工作流里：不同员工会用不同工具把步骤做完
  </div>

  <div class="grid items-start gap-x-4 text-xs text-slate-700 [grid-template-columns:minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">📩</div>
      <div class="font-semibold">1. 读懂需求</div>
      <div class="text-[11px] text-slate-500 text-center">A 员工</div>
      <div class="flex flex-wrap justify-center gap-1 text-[10px] text-slate-600">
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">📧 邮件</span>
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">🗂️ 工单</span>
      </div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">🧩</div>
      <div class="font-semibold">2. 追问拆解</div>
      <div class="text-[11px] text-slate-500 text-center">B 员工</div>
      <div class="flex flex-wrap justify-center gap-1 text-[10px] text-slate-600">
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">📝 表单</span>
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">📌 Checklist</span>
      </div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">🔎</div>
      <div class="font-semibold">3. 查资料</div>
      <div class="text-[11px] text-slate-500 text-center">C 员工</div>
      <div class="flex flex-wrap justify-center gap-1 text-[10px] text-slate-600">
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">🔎 搜索</span>
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">🧾 解析</span>
      </div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">⚠️</div>
      <div class="font-semibold">4. 做判断</div>
      <div class="text-[11px] text-slate-500 text-center">D 员工</div>
      <div class="flex flex-wrap justify-center gap-1 text-[10px] text-slate-600">
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">📚 规则库</span>
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">🧮 计算</span>
      </div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">📝</div>
      <div class="font-semibold">5. 组织表达</div>
      <div class="text-[11px] text-slate-500 text-center">E 员工</div>
      <div class="flex flex-wrap justify-center gap-1 text-[10px] text-slate-600">
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">📄 模板</span>
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">🧩 结构化</span>
      </div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">✅</div>
      <div class="font-semibold">6. 复核交付</div>
      <div class="text-[11px] text-slate-500 text-center">F 员工</div>
      <div class="flex flex-wrap justify-center gap-1 text-[10px] text-slate-600">
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">✅ 审批</span>
        <span class="px-1.5 py-0.5 rounded-full bg-white border border-slate-200">📣 通知</span>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 text-xs text-slate-500">
要点：AI 只负责“理解/生成”的一小段，更多步骤依赖外部工具完成“查询/计算/通知”。Workflow 的作用是把这些工具调用也纳入同一条可追踪的流程里。
</div>

<!--
讲法建议（1-2 分钟）：
强调：LLM 负责“理解与生成”，工具负责“查询与执行”，Workflow 负责“编排与治理”。
转场到后面章节：工具节点、插件、HTTP 请求、知识库检索。
-->

---
layout: default
class: px-14
---

## 1.3.5 人类如何“写”一套 Workflow，把大模型嵌进去？

<div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
  <div class="grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center">
    <div class="space-y-2">
      <div class="text-xs font-bold uppercase tracking-widest text-slate-400">把人的步骤写清楚</div>
      <ul class="text-xs text-slate-700 list-disc pl-5 space-y-1.5">
        <li>输入是什么？需要补问哪些信息？</li>
        <li>哪些判断走规则？哪些允许模型生成？</li>
        <li>输出要什么格式？是否需要复核？</li>
      </ul>
    </div>
    <div class="flex flex-col items-center gap-2 px-2">
      <div class="i-carbon-arrow-right text-slate-300 text-3xl"></div>
      <div class="text-[11px] text-slate-500">外化</div>
    </div>
    <div class="space-y-3">
      <div class="text-xs font-bold uppercase tracking-widest text-blue-500">在 Dify 里落成“可复跑结构”</div>
      <div class="flex flex-wrap gap-2 text-[11px]">
        <span class="px-2 py-1 rounded-full bg-slate-100 border border-slate-200">🧾 输入</span>
        <span class="px-2 py-1 rounded-full bg-amber-50 border border-amber-200">🔀 条件/分支</span>
        <span class="px-2 py-1 rounded-full bg-indigo-50 border border-indigo-200">📚 知识检索</span>
        <span class="px-2 py-1 rounded-full bg-purple-50 border border-purple-200">🧠 LLM 节点</span>
        <span class="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">🧰 工具节点</span>
        <span class="px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200">✅ 输出</span>
      </div>
      <div class="text-xs text-slate-600 leading-relaxed">
        让 LLM 在<strong>固定节点</strong>负责理解/总结/生成；用<strong>规则与分支</strong>兜底；用<strong>日志与版本</strong>保证可复盘。
      </div>
    </div>
  </div>
</div>

<div class="mt-5 grid gap-4 md:grid-cols-3">
  <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
    <div class="text-xs font-bold text-slate-700 mb-1">Step 1｜定义边界</div>
    <div class="text-[11px] text-slate-500">输入/输出/责任：哪些必须按规则？</div>
  </div>
  <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
    <div class="text-xs font-bold text-slate-700 mb-1">Step 2｜拆解与编排</div>
    <div class="text-[11px] text-slate-500">把“追问—检索—判断—生成”画成节点。</div>
  </div>
  <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
    <div class="text-xs font-bold text-slate-700 mb-1">Step 3｜测试与迭代</div>
    <div class="text-[11px] text-slate-500">跑样例，定位哪一步出错，再调。</div>
  </div>
</div>

<div class="mt-4 text-xs text-slate-500">
一句话：AI 执行，人类设计、监督和负责 —— 这就是 Workflow 的“秩序层”。
</div>

---
layout: default
class: px-14
---

## 1.3.6 让大模型“接管部分步骤”，并调用工具

<div class="mt-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-inner">
  <div class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
    同一条流程，不同节点可替换为：LLM 节点 / 工具节点 / 人工节点
  </div>

  <div class="grid items-start gap-x-4 text-xs text-slate-700 [grid-template-columns:minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">📩</div>
      <div class="font-semibold">1. 输入需求</div>
      <div class="text-[11px] text-slate-500 text-center">人｜邮件/工单</div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 shadow flex items-center justify-center text-2xl">🧠</div>
      <div class="font-semibold">2. 澄清与拆解</div>
      <div class="text-[11px] text-slate-500 text-center">LLM｜追问、拆子任务</div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-200 shadow flex items-center justify-center text-2xl">🧰</div>
      <div class="font-semibold">3. 检索/取数</div>
      <div class="text-[11px] text-slate-500 text-center">工具｜由 LLM 调用</div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 shadow flex items-center justify-center text-2xl">🔀</div>
      <div class="font-semibold">4. 规则与判断</div>
      <div class="text-[11px] text-slate-500 text-center">分支｜必要时再用 LLM</div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 shadow flex items-center justify-center text-2xl">📝</div>
      <div class="font-semibold">5. 生成草稿</div>
      <div class="text-[11px] text-slate-500 text-center">LLM｜结构化输出</div>
    </div>
    <div class="flex items-center justify-center mt-5"><div class="i-carbon-arrow-right text-slate-300 text-2xl"></div></div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-2xl">✅</div>
      <div class="font-semibold">6. 人工复核</div>
      <div class="text-[11px] text-slate-500 text-center">人｜确认风险与责任</div>
    </div>
  </div>
</div>

<div class="mt-4 text-xs text-slate-500">
要点：不是“全交给模型”，而是把模型放进<strong>被治理的节点</strong>里；哪些步骤用规则兜底、哪些必须人工复核，都由 Workflow 明确规定。
</div>

---
layout: default
class: px-14
---

## 1.3.7 其他形式可不可以？可以，但边界不同

<div class="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
  <div class="grid gap-4 md:grid-cols-3">
    <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4">
      <div class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">纯 Prompt</div>
      <div class="text-sm text-slate-700 leading-relaxed">适合探索与个人提效；难以治理与复用。</div>
    </div>
    <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4">
      <div class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">纯代码</div>
      <div class="text-sm text-slate-700 leading-relaxed">自由度高；但业务迭代慢、协作成本高。</div>
    </div>
    <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4">
      <div class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">客户端工具</div>
      <div class="text-sm text-slate-700 leading-relaxed">上手快；但难沉淀为组织资产与服务。</div>
    </div>
  </div>
</div>

<div class="grid gap-6 md:grid-cols-2 mt-6 items-stretch">
  <div class="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 shadow-inner">
    <h3 class="text-base font-semibold text-emerald-900 mb-3">Workflow 的优势</h3>
    <ul class="text-sm text-emerald-900/80 space-y-2 list-disc pl-6 leading-relaxed">
      <li>把流程、状态、依赖外化：可设计、可约束</li>
      <li>把运行记录留下来：可复盘、可审计、可迭代</li>
      <li>把 AI 升级为系统：可组合、可维护、可交付</li>
    </ul>
  </div>
  <div class="rounded-3xl border border-blue-200 bg-blue-50/60 p-6 shadow-inner">
    <h3 class="text-base font-semibold text-blue-900 mb-3">我们要的结果</h3>
    <ul class="text-sm text-blue-900/80 space-y-2 list-disc pl-6 leading-relaxed">
      <li><strong>治理与合规入口</strong>：权限、风控、审批、审计都基于明确流程</li>
      <li><strong>主权回到人类</strong>：AI 执行，人来设计、监督和负责</li>
      <li><strong>组织可持续</strong>：经验沉淀为“秩序层”，而非个人技巧</li>
    </ul>
  </div>
</div>

<!--
这页用来呼应文章观点：
Workflow 不是“画流程”，而是把智能纳入工程约束，建立可治理、可演进的秩序层。
-->
