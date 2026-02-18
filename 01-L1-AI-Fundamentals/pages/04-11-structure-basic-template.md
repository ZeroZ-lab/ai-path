## 4.12 提示词架构（基础版）

<div class="mt-4 rounded-[30px] border border-slate-100 bg-white/90 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
  <p class="text-sm text-slate-600">
    常见的入门框架会把任务拆成 3-6 个模块，帮助你写出最小可用的结构化提示词。
  </p>
  <div class="mt-4 grid gap-4 md:grid-cols-3">
    <section class="rounded-2xl border border-blue-200 bg-blue-50/80 px-4 py-4">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">CO-STAR</div>
      <ul class="mt-2 space-y-1 text-sm text-slate-700">
        <li>Context：提供场景与素材</li>
        <li>Objective：指出目标结果</li>
        <li>Style & Tone：告诉模型风格</li>
        <li>Audience & Response：明确读者与输出形式</li>
      </ul>
    </section>
    <section class="rounded-2xl border border-purple-200 bg-purple-50/80 px-4 py-4">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">RICCE</div>
      <ul class="mt-2 space-y-1 text-sm text-slate-700">
        <li>Role：设定 AI 身份</li>
        <li>Instructions：给业务指令</li>
        <li>Context：提供背景</li>
        <li>Constraints：写限制</li>
        <li>Examples：补范例提升稳定性</li>
      </ul>
    </section>
    <section class="rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-4">
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">TACO</div>
      <ul class="mt-2 space-y-1 text-sm text-slate-700">
        <li>Task：要完成的动作</li>
        <li>Action：期望步骤/结构</li>
        <li>Context：关键素材</li>
        <li>Output：格式/字数/语言</li>
      </ul>
    </section>
  </div>
</div>

<!--
为了帮助大家不用每次都从头想，
业界总结了很多“框架”或者说“口诀”。

这里列了三个最常用的入门框架：
CO-STAR、RICCE、TACO。

大家不需要死记硬背这些字母缩写。
你只需要看它们里面的共同点：

无论哪个框架，都在强调：
你要给背景（Context）。
你要给目标（Objective/Task）。
你要给约束（Style/Constraints）。

这些框架就像“飞行员的检查清单”。
每次写 Prompt 之前，你可以对照一下：
“我是不是忘了说背景？”
“我是不是忘了说格式？”

用框架的好处是：
它能强迫你思考得更全面。
-->
