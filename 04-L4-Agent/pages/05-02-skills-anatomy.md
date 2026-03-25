---
layout: default
---

## 13 一个 Skill 目录到底长什么样

<div class="mt-4 grid gap-4">
  <section class="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-md">
    <div class="flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.25em] text-slate-400">
      <div class="w-2 h-2 rounded-full bg-slate-300"></div>
      典型结构：主入口 + 辅助文件
    </div>
    <div class="mt-4 flex items-center justify-between gap-3">
      <div class="flex-1 rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-4 text-center">
        <div class="text-base font-black text-amber-700">SKILL.md</div>
        <div class="mt-1 text-[11px] font-bold text-amber-700">主入口</div>
        <div class="mt-1 text-[10px] leading-4 text-amber-700/70">告诉 Agent 这是什么、什么时候用、先做什么</div>
      </div>
      <div class="text-slate-300 text-xl font-black">+</div>
      <div class="flex-1 rounded-2xl border-2 border-emerald-200 bg-emerald-50/80 p-4 text-center">
        <div class="text-base font-black text-emerald-700">Supporting Files</div>
        <div class="mt-1 text-[11px] font-bold text-emerald-700">辅助资产</div>
        <div class="mt-1 text-[10px] leading-4 text-emerald-700/70">示例、脚本、模板、参考文档按需加载</div>
      </div>
      <div class="text-slate-300 text-xl font-black">=</div>
      <div class="flex-1 rounded-2xl border-2 border-purple-700 bg-purple-900 p-4 text-center text-white">
        <div class="text-base font-black">完整 Skill</div>
        <div class="mt-1 text-[11px] font-bold text-purple-200">一个可复用的工作流单元</div>
        <div class="mt-1 text-[10px] leading-4 text-purple-300/70">主 Prompt 轻，细节放目录里</div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-[1fr_1.8fr] gap-4 items-stretch">
    <div class="rounded-3xl border border-blue-100 bg-blue-50/60 p-5">
      <div class="text-[11px] font-black uppercase tracking-[0.25em] text-blue-700">How To Read It</div>
      <p class="mt-3 text-[12px] font-bold leading-6 text-slate-700">
        Skill 不是一个超长 prompt，而是一个有入口、有配套文件的目录。
      </p>
      <div class="mt-3 rounded-2xl border border-white/80 bg-white/70 p-3 text-[11px] leading-5 text-slate-600">
        入口文件负责“告诉模型怎么开始”，辅助文件负责“把细节拆出去，只在需要时再读进来”。
      </div>
    </div>
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
      <div class="text-[10px] font-mono uppercase tracking-widest text-slate-400">my-skill/</div>
      <div class="mt-3 space-y-2 font-mono text-[11px]">
        <div class="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 p-2">
          <span class="text-amber-400">📄</span>
          <span class="font-bold text-amber-300">SKILL.md</span>
          <span class="ml-auto text-[9px] text-slate-500">入口说明</span>
        </div>
        <div class="flex items-center gap-2 rounded-lg border border-slate-800 bg-black/20 p-2">
          <span class="text-blue-400">📁</span>
          <span class="font-bold text-blue-300">examples/</span>
          <span class="ml-auto text-[9px] text-slate-500">示例输出</span>
        </div>
        <div class="flex items-center gap-2 rounded-lg border border-slate-800 bg-black/20 p-2">
          <span class="text-purple-400">📁</span>
          <span class="font-bold text-purple-300">scripts/</span>
          <span class="ml-auto text-[9px] text-slate-500">执行脚本</span>
        </div>
        <div class="flex items-center gap-2 rounded-lg border border-slate-800 bg-black/20 p-2">
          <span class="text-emerald-400">📁</span>
          <span class="font-bold text-emerald-300">references/</span>
          <span class="ml-auto text-[9px] text-slate-500">参考资料</span>
        </div>
        <div class="flex items-center gap-2 rounded-lg border border-slate-800 bg-black/20 p-2">
          <span class="text-slate-400">📄</span>
          <span class="text-slate-300">template.md</span>
          <span class="ml-auto text-[9px] text-slate-500">模板</span>
        </div>
      </div>
    </div>
  </section>
</div>
