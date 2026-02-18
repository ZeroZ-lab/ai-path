## 4.6 系统提示词 vs 问题（用户提示词）
> 一句话：系统提示词决定“怎么做事”，问题决定“做什么事”。
<div class="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch text-sm leading-6">
<section class="rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
<div class="flex items-center justify-between">
<div class="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">System Prompt</div>
<div class="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">优先级最高</div>
</div>
<h3 class="mt-3 text-2xl font-black text-slate-900">系统提示词</h3>
<p class="mt-2 text-slate-600">用于设定“底层规则”：角色、原则、边界、风格、输出规范。</p>
<div class="mt-4 grid gap-3">
<div class="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
<div class="text-xs font-bold uppercase tracking-widest text-slate-400">适合放</div>
<div class="mt-2 text-slate-700">拒答边界、引用要求、结构化输出、工作流程（先澄清再输出）。</div>
</div>
<div class="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
<div class="text-xs font-bold uppercase tracking-widest text-slate-400">像什么</div>
<div class="mt-2 text-slate-700">岗位职责 / 公司制度（长期有效、尽量稳定、可复用）。</div>
</div>
</div>
</section>
<div class="hidden md:flex flex-col items-center justify-center gap-3 px-1">
<div class="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">Priority</div>
<div class="flex flex-col items-center">
<div class="w-1 h-10 rounded-full bg-gradient-to-b from-emerald-400 to-slate-300"></div>
<div class="mt-2 text-[10px] font-semibold text-slate-500">规则层</div>
<div class="mt-1 text-[10px] font-semibold text-slate-500">↓</div>
<div class="mt-1 text-[10px] font-semibold text-slate-500">任务层</div>
</div>
</div>
<section class="rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
<div class="flex items-center justify-between">
<div class="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">User Prompt</div>
<div class="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold text-blue-700">本次任务</div>
</div>
<h3 class="mt-3 text-2xl font-black text-slate-900">问题（用户提示词）</h3>
<p class="mt-2 text-slate-600">用于描述“这一次要做什么”：目标、材料、约束、交付物。</p>
<div class="mt-4 grid gap-3">
<div class="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
<div class="text-xs font-bold uppercase tracking-widest text-slate-400">适合放</div>
<div class="mt-2 text-slate-700">任务目标、输入素材、限制条件、期望输出、例子与数据。</div>
</div>
<div class="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
<div class="text-xs font-bold uppercase tracking-widest text-slate-400">像什么</div>
<div class="mt-2 text-slate-700">工单 / 一次性需求（随场景变化）。</div>
</div>
</div>
</section>
</div>
<div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs leading-5">
<div class="rounded-[24px] border border-rose-200 bg-rose-50/80 p-5 shadow-sm">
<div class="text-xs font-bold uppercase tracking-[0.35em] text-rose-400">Common Mistakes</div>
<div class="mt-2 text-slate-800"><strong>误区 1：</strong>把一次性材料塞进系统提示词（系统臃肿、复用性差）。</div>
<div class="mt-1 text-slate-800"><strong>误区 2：</strong>只写“帮我写个总结”（条件不足，只能猜）。</div>
</div>
<div class="rounded-[24px] border border-emerald-200 bg-emerald-50/70 p-5 shadow-sm">
<div class="text-xs font-bold uppercase tracking-[0.35em] text-emerald-500">Mini Example</div>
<div class="mt-2 font-mono text-slate-700 bg-white/70 border border-emerald-100 rounded-xl p-3">
System: 你是…；遵守…；输出为 Markdown 表格；不确定先提问。<br>
User: 请基于这份材料…；给 5 点结论；每点 1 句理由。
</div>
</div>
</div>
