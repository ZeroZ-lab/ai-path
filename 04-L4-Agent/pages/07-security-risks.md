---
layout: default
---

## 25 安全：一旦 Agent 真能“动手”，风险就不再只是说错话


<div class="mt-6 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
  <section class="rounded-[28px] border border-rose-100 bg-rose-50/80 p-5 shadow-[0_15px_35px_rgba(244,63,94,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">Why Risk Gets Bigger</div>
    <div class="mt-3 space-y-3">
      <div class="rounded-2xl bg-white/80 px-4 py-3">
        <div class="text-[13px] font-bold text-slate-900">1. 它开始读不可信内容</div>
        <div class="mt-1 text-[13px] leading-5 text-slate-600">网页、邮件、文档、issue 评论都可能夹带恶意指令，模型会把“看到的内容”当成输入的一部分。</div>
      </div>
      <div class="rounded-2xl bg-white/80 px-4 py-3">
        <div class="text-[13px] font-bold text-slate-900">2. 它开始碰真实权限</div>
        <div class="mt-1 text-[13px] leading-5 text-slate-600">一旦接到终端、数据库、浏览器账号、API token，幻觉就不再只是胡说，而可能真的执行坏事。</div>
      </div>
      <div class="rounded-2xl bg-white/80 px-4 py-3">
        <div class="text-[13px] font-bold text-slate-900">3. 它开始跨多轮持续运行</div>
        <div class="mt-1 text-[13px] leading-5 text-slate-600">任务一长，约束就可能被压缩、遗忘、覆盖，系统也更容易在多轮里慢慢偏离原始边界。</div>
      </div>
    </div>
  </section>

  <section class="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Three Defenses</div>
    <div class="mt-4 space-y-4">
      <div class="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3">
        <div class="text-xl leading-none">🛡️</div>
        <div>
          <div class="text-[13px] font-bold text-slate-900">拦截器 / Policy Filtering</div>
          <div class="mt-1 text-[13px] leading-5 text-slate-600">先拦截明显危险的动作、命令和调用，不要把所有判断都交给模型自己。</div>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-2xl border border-purple-100 bg-purple-50/70 px-4 py-3">
        <div class="text-xl leading-none">📦</div>
        <div>
          <div class="text-[13px] font-bold text-slate-900">沙盒 / 权限隔离</div>
          <div class="mt-1 text-[13px] leading-5 text-slate-600">让 Agent 在受限环境里运行，默认低权限，再按任务逐步放权。</div>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3">
        <div class="text-xl leading-none">👨‍💻</div>
        <div>
          <div class="text-[13px] font-bold text-slate-900">Human-in-the-Loop</div>
          <div class="mt-1 text-[13px] leading-5 text-slate-600">涉及写操作、外部发送、金钱和生产环境时，必须保留人工确认点。</div>
        </div>
      </div>
    </div>
  </section>
</div>

<div class="mt-5 rounded-[24px] border border-amber-200 bg-amber-50/80 px-5 py-4 text-[15px] leading-6 text-amber-900 shadow-[0_12px_30px_rgba(245,158,11,0.10)]">
  核心原则只有一句：<b>永远不要假设模型是安全的。真正的安全，来自工程上的约束、隔离和审计。</b>
</div>

<!--
逐字稿：
这一页我想讲一个很关键的变化：一旦 Agent 真能动手，风险就不再只是说错话。

普通聊天产品出错，很多时候只是文本层的问题，比如解释错了、总结偏了。但高自主性 Agent 一旦接上浏览器、终端、文件系统和自动化，错误的代价会升级到执行层。

为什么风险会突然变大？主要是三个原因。

第一，它开始读不可信内容。网页、邮件、文档、issue 评论都可能夹带恶意指令，模型会把“看到的内容”当成输入的一部分。

第二，它开始碰真实权限。一旦接到终端、数据库、浏览器账号、API token，幻觉就不再只是胡说，而可能真的执行坏事。

第三，它开始跨多轮持续运行。任务一长，约束就可能被压缩、遗忘、覆盖，系统也更容易在多轮里慢慢偏离原始边界。

所以真正的安全，不能靠“希望模型自己足够聪明”，而要靠三道防线。

第一，拦截器和策略过滤。先把明显危险的动作拦住。
第二，沙盒和权限隔离。默认低权限，不要一上来就把生产环境交出去。
第三，Human-in-the-Loop。涉及写操作、外部发送、金钱和生产系统时，必须保留人工确认点。

所以最后带走一句话：永远不要假设模型是安全的。真正的安全，来自工程上的约束、隔离和审计。
-->
