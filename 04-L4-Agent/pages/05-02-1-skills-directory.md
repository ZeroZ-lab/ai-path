---
layout: default
---

## 15 Skill 怎么被发现、加载和覆盖

<div class="mt-6 flex flex-col gap-4">
  <div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-center gap-4">
    <div class="text-3xl">🗂️</div>
    <p class="text-[14px] text-slate-700 font-bold leading-relaxed">
      Skill 不只是“写在那儿”，还要被系统找到。<br/>
      更自然的理解方式是：像操作系统找命令一样，<span class="text-blue-600 bg-blue-100/50 px-1 rounded">系统会按优先级逐层查找</span>，<span class="text-rose-500 underline decoration-rose-200 underline-offset-4">越靠近当前项目，优先级越高</span>。
    </p>
  </div>
  <div class="grid grid-cols-3 gap-4 mt-2">
    <div class="bg-white/80 backdrop-blur border-2 border-amber-200 rounded-3xl p-4 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)] relative hover:-translate-y-1 transition-transform">
      <div class="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 rounded-full shadow-md flex items-center justify-center text-white font-black text-xs border-2 border-white z-10">1</div>
      <div class="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-1">
        <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>最高优先级
      </div>
      <div class="text-4xl mb-3 mt-2">🎯</div>
      <h3 class="font-black text-amber-700 text-lg mb-1">工作空间技能<br/><span class="text-[11px] text-amber-600/70 font-mono font-medium">(Workspace Skills)</span></h3>
      <div class="mt-3 p-2 bg-amber-50 rounded-xl border border-amber-100 font-mono text-[11px] text-amber-800 break-all">
        ./skills/
      </div>
      <div class="mt-3 space-y-2">
        <p class="text-[11px] text-slate-600 leading-snug"><strong class="text-slate-800">定位：</strong> 当前仓库专属的规则和工作流。</p>
        <p class="text-[11px] text-slate-600 leading-snug"><strong class="text-slate-800">意义：</strong> 让同一个 Agent 在不同项目里学会不同规矩。</p>
      </div>
    </div>
    <div class="bg-white/80 backdrop-blur border-2 border-purple-200 rounded-3xl p-4 shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)] relative hover:-translate-y-1 transition-transform">
      <div class="absolute -top-3 -right-3 w-8 h-8 bg-purple-500 rounded-full shadow-md flex items-center justify-center text-white font-black text-xs border-2 border-white z-10">2</div>
      <div class="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-2 flex items-center gap-1">
        <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>中等优先级
      </div>
      <div class="text-4xl mb-3 mt-2">🌍</div>
      <h3 class="font-black text-purple-700 text-lg mb-1">全局/社区技能<br/><span class="text-[11px] text-purple-600/70 font-mono font-medium">(Managed Skills)</span></h3>
      <div class="mt-3 p-2 bg-purple-50 rounded-xl border border-purple-100 font-mono text-[11px] text-purple-800 break-all">
        ~/.openclaw/skills/
      </div>
      <div class="mt-3 space-y-2">
        <p class="text-[11px] text-slate-600 leading-snug"><strong class="text-slate-800">定位：</strong> 跨项目通用的个人技能库。</p>
        <p class="text-[11px] text-slate-600 leading-snug"><strong class="text-slate-800">意义：</strong> 装一次，多个工作区都能复用。</p>
      </div>
    </div>
    <div class="bg-slate-900 border-2 border-slate-700 rounded-3xl p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] relative hover:-translate-y-1 transition-transform">
      <div class="absolute -top-3 -right-3 w-8 h-8 bg-slate-600 rounded-full shadow-md flex items-center justify-center text-white font-black text-xs border-2 border-slate-800 z-10">3</div>
      <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1">
        <div class="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>兜底基础
      </div>
      <div class="text-4xl mb-3 mt-2">🧱</div>
      <h3 class="font-black text-white text-lg mb-1">系统内置技能<br/><span class="text-[11px] text-slate-400 font-mono font-medium">(Bundled Skills)</span></h3>
      <div class="mt-3 p-2 bg-slate-800 rounded-xl border border-slate-600 font-mono text-[11px] text-emerald-400 break-all">
        /opt/openclaw/core/
      </div>
      <div class="mt-3 space-y-2">
        <p class="text-[11px] text-slate-400 leading-snug"><strong class="text-slate-200">定位：</strong> Agent 赖以生存的基础能力。</p>
        <p class="text-[11px] text-slate-400 leading-snug"><strong class="text-slate-200">意义：</strong> 就算没有项目定制，系统也先有最基本的“手”。</p>
      </div>
    </div>
  </div>
</div>

<!--
讲解要点：
1. 类比 PATH：系统按顺序查找 Skill，离当前项目越近越优先。
2. Workspace Skills 解决的是“项目特有规矩”。
3. Global Skills 解决的是“个人通用能力”。
-->
