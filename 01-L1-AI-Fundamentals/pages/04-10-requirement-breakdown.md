## 4.11 需求拆解演示

<div class="mt-4 grid gap-4 rounded-[28px] border border-slate-100 bg-white/90 p-4 shadow-[0_16px_35px_rgba(15,23,42,0.12)] md:grid-cols-2">
  <section class="rounded-2xl border border-rose-200 bg-rose-50/80 px-3 py-4 text-center">
    <div class="text-xs font-bold uppercase tracking-[0.4em] text-rose-400">模糊需求</div>
    <p class="mt-4 text-2xl font-extrabold text-rose-900">“帮我写个总结。”</p>
  </section>
  <section class="space-y-2 text-sm font-semibold text-slate-800">
    <div class="rounded-2xl border border-blue-200 bg-blue-50/80 px-3 py-2.5">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">任务 Task</div>
      <p class="mt-1">总结什么？输出什么？目标是什么？</p>
    </div>
    <div class="rounded-2xl border border-purple-200 bg-purple-50/80 px-3 py-2.5">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">角色 Role</div>
      <p class="mt-1">以谁的身份写？专家、顾问、老师还是运营？</p>
    </div>
    <div class="rounded-2xl border border-amber-200 bg-amber-50/80 px-3 py-2.5">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">背景 Context</div>
      <p class="mt-1">内容来自哪里？受众是谁？使用场景是什么？</p>
    </div>
    <div class="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-3 py-2.5">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">约束 Constraints</div>
      <p class="mt-1">格式、风格、必须/禁止出现的内容。</p>
    </div>
  </section>
</div>

<details class="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
  <summary class="cursor-pointer text-base font-semibold text-slate-900">完整示例（点击展开）</summary>
  <ul class="mt-3 space-y-2">
    <li>任务：请总结这篇文章的核心观点，输出 3 点关键洞见。</li>
    <li>角色：以「策略分析师」的视角。</li>
    <li>背景：听众是运营团队，用于周会报告。</li>
    <li>约束：每点不超过 20 字，禁止夸张与编造。</li>
  </ul>
</details>

<!--
这一页，我们来做一次真正意义上的“需求拆解示范”。

请看左侧的这句话，大家是不是觉得非常耳熟——“帮我写个总结。”
这几乎是所有人第一次使用 AI 时，最自然、也最常见的表达方式。

但问题在于，对我们人类来说，这句话是完全可以理解的，因为我们下意识会补全其间的上下文；
但对于大模型而言，这句话几乎没有提供任何有价值的信息。

所以，我们现在不急于修改它，而是先对其进行细致的拆解。

第一步，我们来看“任务”。
您需要总结的具体内容是什么？是一篇文章、一次会议记录，还是一份详细的报告？
您所期望的输出形式是什么？是要点总结、结论提炼，还是行动建议？
这份总结的最终目标又是什么？是给领导审阅、给同事参考，还是自己用于复盘？

第二步，我们来看“角色”。
您希望 AI 以什么样的身份来撰写这份总结？
是作为一位经验丰富的专家、一位严谨的顾问、一位循循善诱的老师，还是作为一位偏向执行的运营人员？
同一个内容，由不同的角色来呈现，其表达方式、侧重点和语气风格都会截然不同。

第三步，我们来看“背景”。
这份总结的原始内容从何而来？
目标受众是谁？
具体的使用场景是什么？是用于周会汇报、内部沟通，还是对外发布材料？
如果您不明确告知模型这些信息，它就只能依据其“默认场景”进行猜测，而这正是导致许多输出不符合预期的根源。

第四步，我们来看“约束”。
您的输出有没有特定的格式要求？
是否有严格的字数限制？
哪些内容是必须包含的？
哪些内容是绝对不能出现的？

当您将这四个方面的问题都思考清楚之后，实际上，您就已经完成了一次完整的“任务定义”。

所以，您会看到下方这个“完整示例”。
同样是“总结”的需求，但现在它被转化成了：
“请总结这篇文章的核心观点，输出 3 点关键洞见。
以「策略分析师」的视角来写。
听众是运营团队，用于周会报告。
每点不超过 20 字，禁止夸张与编造。”

到这里为止，大模型终于明确地知道了一件事：
它现在到底要干什么、为谁而干、在什么具体场景下干，以及应该遵循什么标准来完成。

这就是从“模糊需求”，到“可执行任务”的完整转化过程。
-->
