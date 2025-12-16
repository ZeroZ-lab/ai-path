## 3.4 阶段三：对齐（像人类）

<div class="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50/80 px-5 py-4 text-center text-base font-semibold text-emerald-900">
  对齐解决的是“模型的回答是否安全、靠谱、符合人类价值”的问题。
</div>

<div class="mt-8 grid gap-6 md:grid-cols-3">
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">① 为什么要对齐？</div>
    <div class="mt-3 text-sm font-semibold text-slate-700">
      预训练的互联网数据很混乱：粗暴、偏见、攻击性、幻觉、不负责任。
    </div>
    <p class="mt-2 text-sm text-slate-600">不加约束，模型可能输出伤害性或失真的内容。</p>
  </section>

  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">② 对齐怎么做？（RLHF）</div>
    <div class="mt-3 space-y-3 text-sm text-slate-700">
      <p>人类评审对模型回答打分：</p>
      <div class="grid gap-2 rounded-2xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-600 md:grid-cols-2">
        <div>👍 这个更好</div>
        <div>👎 这个不行</div>
      </div>
      <p>模型通过奖励模型学习“什么是更适合的表达”。</p>
    </div>
  </section>

  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">③ 最终获得什么？</div>
    <ul class="mt-3 space-y-2 text-sm font-semibold text-slate-700">
      <li>可靠性</li>
      <li>礼貌性</li>
      <li>安全性</li>
      <li>价值一致性</li>
    </ul>
  </section>
</div>

<div class="mt-6 rounded-2xl border border-emerald-300 bg-emerald-100/80 px-4 py-3 text-center text-base font-semibold text-emerald-900">
  对齐让模型从“能办事”，变成“值得信任”。
</div>

<!--

前两个阶段，预训练和微调，主要解决了大模型的能力问题。

预训练让模型“博览群书、洞察世界”，微调则让模型“习得技能、高效办事”。

然而，即便模型已经非常聪明能干，若其表达方式不受约束，仍可能带来不可预测的风险。



首先，我们来回答一个根本性的问题：为什么“对齐”是必不可少的一步？

原因在于，模型在预训练阶段所读取的，是整个互联网的庞大数据。而互联网本身，是一个信息庞杂、良莠不齐的混合体。其中充斥着各种偏见、攻击性内容、错误信息，以及极端和不负责任的言论。

如果不对模型进行额外处理和约束，那么它在回应用户提问时，很可能会生成那些表面上看起来流畅自然，但实际上却具有潜在危害、误导性，甚至是不安全的内容。



换句话说，一个未经对齐的模型，可能“口若悬河”，却“未必靠谱”。



那么，“对齐”这个阶段究竟在做什么呢？

对齐的核心目的，并非是向模型教授新的知识，而是教导模型“如何给出更恰当、更符合人类期望的回答”。这里所采用的核心方法，就是著名的 RLHF，即人类反馈强化学习。



其具体做法其实非常直观：

对于同一个用户问题，模型会生成多个不同版本的回答。随后，由专业的人类评审员对这些回答进行评估和打分，判断“哪个回答更好，哪个回答不符合要求”。

例如，某个回答如果更安全、更克制、更具边界感，我们就会给予其正向反馈；而另一个回答，即便听起来很吸引人，但如果存在风险，则会收到负向反馈。

通过大量的此类比较和反馈，模型并非真正“理解了道德伦理”，而是在统计意义上，学会了：什么样的表达更容易被人类社会所接受。



最终，模型通过这一过程学习到的是一种“偏好分布”，

即在相似的语境下，它应该优先选择哪种风格或倾向的回答方式。



那么，对齐阶段最终为模型带来了哪些关键能力呢？

第一是可靠性。模型不再一味自信地胡编乱造，而是变得更为谨慎，它会懂得何时给出明确结论，何时提醒用户潜在的不确定性。

第二是礼貌性。模型的回答将更符合人类的交流习惯，避免出现攻击性或冒犯性的内容。

第三是安全性。对于涉及高风险敏感的问题，模型学会了拒绝回应、降低风险，或者引导用户走向安全的解决路径。

第四是价值一致性。模型的整体表达将更符合社会共识和基本的伦理价值底线。



所以，我们可以这样来理解：

对齐并非旨在让模型变得更加“聪明”，而是让模型变得更加“值得信任”。

它促使模型从“我能回答吗？”这个技术性问题，进化到“我应该如何回答？”这个价值观层面的问题。



用一句话总结这一页的核心：

对齐阶段，成功地将模型从“能够办事”，提升到“敢于使用、能够使用、并值得放心使用”的高度。

-->
