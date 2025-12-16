## 3.3 阶段二：微调（做任务）

<div class="mt-4 rounded-3xl border border-amber-200 bg-amber-50/80 px-5 py-4 text-center text-base font-semibold text-amber-900">
  微调解决的是“模型虽然懂，但不会按你的要求工作”的问题。
</div>

<div class="mt-8 grid gap-6 md:grid-cols-3">
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">① 为什么预训练不够？</div>
    <div class="mt-3 text-sm font-semibold text-slate-700">它只会续写，不会执行任务。</div>
    <p class="mt-2 text-sm text-slate-600">你问它问题，它可能还在讲故事——难以直接满足“按要求办事”的需求。</p>
  </section>
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">② 微调让模型学会什么？</div>
    <div class="mt-3 space-y-2 text-sm font-semibold text-slate-700">
      <p>通过大量“示范例子”，让模型知道：</p>
      <ul class="list-inside list-disc space-y-1 text-slate-600">
        <li>这是问题 → 这是回答</li>
        <li>这是需求 → 这是格式</li>
        <li>这是任务 → 这是步骤</li>
      </ul>
    </div>
  </section>
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">③ 最终获得什么能力？</div>
    <ul class="mt-3 space-y-2 text-sm font-semibold text-slate-700">
      <li>任务能力</li>
      <li>可用性</li>
      <li>结构化输出能力</li>
    </ul>
    <p class="mt-2 text-sm text-slate-600">能回答问题、写代码、总结、翻译等，真正“听得懂、做得对”。</p>
  </section>
</div>

<div class="mt-6 rounded-2xl border border-amber-300 bg-amber-100/80 px-4 py-3 text-center text-base font-semibold text-amber-900">
  微调把模型从“懂很多”，变成了“能办事”。
</div>

<!--
在成功完成预训练阶段之后，模型实际上已经“懂得了许多”。
它掌握了语言的奥秘、理解了世界的运作规律、内化了知识的结构。
然而，此时模型面临一个非常现实且关键的问题：
它并不能区分您当前是在“提出疑问”、“下达任务”，还是在“请求一个标准化输出结果”。

如果您直接对一个只完成了预训练的模型说一句话，它最擅长也几乎唯一能做的事情就是：根据上下文把这句话接续下去。
您问它一个问题，它可能会给您编织一个故事作为回应；
您让它撰写总结，它或许会给您一段优美的散文；
您让它计算步骤，它可能直接给出最终结论，而忽略您是否需要详细的过程。

这就是为什么——仅仅“理解世界”是远远不够的，模型还需要“学会如何执行任务”。

微调阶段，从本质上讲，是在为模型教授一套详尽的“人类使用说明书”。

通过输入大量由人工精心构造的示例，模型会反复学习并内化以下模式：
“这是一个用户提出的问题 → 对应的标准回答应该是这样的。”
“这是一个具体的需求 → 对应的输出格式和内容应该符合这些规范。”
“这是一个待执行的任务 → 完成这个任务需要遵循的步骤是这样的。”

换句话说，微调的目的并非是向模型灌输全新的知识，而是在训练它掌握“工作方式”和“任务执行逻辑”。

它使得模型逐渐学会了三件极其关键的事情：
第一，如何识别当前的用户输入是一个需要它进行回答的问题。
第二，如何判断当前的用户输入是一个需要它执行的任务。
第三，模型所生成的输出应该符合怎样的结构和约束条件。

经过微调之后，模型才真正具备了我们今天所切身感受到的那些实用能力：
当您让它总结时，它便会为您高效地完成总结；
当您要求它编写代码时，它会按照规范生成代码；
当您让它翻译、规划、列出步骤时，它能够精确地遵照执行。

所以，这一页最终将落脚于一个核心结论：
预训练让模型“懂得了很多”，而微调则让模型“能够高效办事”。
从这一刻起，AI 才真正从一个“博览群书的求知者”，蜕变为一个“可以被有效指挥和利用的智能助手”。
-->
