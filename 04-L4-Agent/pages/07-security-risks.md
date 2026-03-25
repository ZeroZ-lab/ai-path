---
layout: default
---

## 20 安全：为“数字员工”修筑防御围栏

<div class="px-8 pt-2">
<div class="grid grid-cols-[1fr_1.5fr] gap-8 mt-6 items-stretch">
<!-- 左侧：三大致命风险 -->
<div class="flex flex-col gap-3">
<div class="bg-rose-50/80 border-2 border-rose-200 p-4 rounded-2xl shadow-sm relative overflow-hidden">
<div class="absolute -top-2 -right-2 text-4xl opacity-10 font-black">01</div>
<div class="text-[10px] font-black text-rose-600 uppercase mb-1 tracking-widest">指令注入 (INJECTION)</div>
<div class="text-[13px] font-black text-slate-800 mb-1">“藏在文档里的木马”</div>
<p class="text-[11px] text-slate-600 leading-relaxed">Agent 读取含有恶意指令的网页或邮件后，可能被其误导，执行如“导出所有私钥”等违规操作。</p>
</div>
<div class="bg-rose-50/80 border-2 border-rose-200 p-4 rounded-2xl shadow-sm relative overflow-hidden">
<div class="absolute -top-2 -right-2 text-4xl opacity-10 font-black">02</div>
<div class="text-[10px] font-black text-rose-600 uppercase mb-1 tracking-widest">越权执行 (EXPLOITATION)</div>
<div class="text-[13px] font-black text-slate-800 mb-1">“给错权限的灾难”</div>
<p class="text-[11px] text-slate-600 leading-relaxed">一旦 Agent 拥有宿主机 Root 权限或直接访问生产数据库，一个小小的推理幻觉就可能导致不可挽回的删库事故。</p>
</div>
<div class="bg-rose-50/80 border-2 border-rose-200 p-4 rounded-2xl shadow-sm relative overflow-hidden">
<div class="absolute -top-2 -right-2 text-4xl opacity-10 font-black">03</div>
<div class="text-[10px] font-black text-rose-600 uppercase mb-1 tracking-widest">关键遗忘 (FORGETTING)</div>
<div class="text-[13px] font-black text-slate-800 mb-1">“压缩掉的安全约束”</div>
<p class="text-[11px] text-slate-600 leading-relaxed">在长周期任务的上下文压缩中，Agent 可能丢失掉 System Prompt 中定义的“绝对禁止”规则。</p>
</div>
</div>
<!-- 右侧：OpenClaw 防御矩阵可视化 -->
<div class="bg-[#0f172a] rounded-3xl p-6 border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden">
<div class="text-[11px] font-mono text-slate-400 mb-6 uppercase tracking-[0.2em] text-center border-b border-slate-800 pb-2">Defense-in-Depth Architecture</div>
<div class="space-y-5">
<!-- Defense Line 1 -->
<div class="flex items-center gap-4 bg-blue-500/10 p-3 rounded-xl border border-blue-500/30 relative">
<div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">🛡️</div>
<div class="flex-1">
<div class="text-[12px] font-black text-blue-300">INTERCEPTORS (拦截器)</div>
<div class="text-[10px] text-slate-400 font-mono">实时扫描 Shell 指令，自动拦截 rm -rf, drop table 等。</div>
</div>
</div>
<!-- Defense Line 2 -->
<div class="flex items-center gap-4 bg-purple-500/10 p-3 rounded-xl border border-purple-500/30">
<div class="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-xl">📦</div>
<div class="flex-1">
<div class="text-[12px] font-black text-purple-300">SANDBOXING (沙盒环境)</div>
<div class="text-[10px] text-slate-400 font-mono">所有执行动作均在独立的 Docker 容器内完成，物理隔离。</div>
</div>
</div>
<!-- Defense Line 3 -->
<div class="flex items-center gap-4 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30">
<div class="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl">👨‍💻</div>
<div class="flex-1">
<div class="text-[12px] font-black text-emerald-300">HUMAN-IN-THE-LOOP</div>
<div class="text-[10px] text-slate-400 font-mono">针对敏感 API 或写操作，设置必须由人类点击确认的物理开关。</div>
</div>
</div>
</div>
<!-- 底部警告 -->
<div class="mt-auto pt-6 border-t border-slate-800 flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
<div class="text-[10px] font-mono text-rose-400 uppercase tracking-widest">Warning: Treat Agent Output as Untrusted Data</div>
</div>
</div>
</div>
</div>

<!--
讲解要点：
1. 风险放大器：Agent 能执行命令，这意味着幻觉的代价从“说错话”变成了“做错事”。
2. 三道防线：通过拦截、沙盒、人工审批构建完整的安全闭环。
3. 核心原则：永远不要假设模型是安全的，要通过工程手段约束模型。
-->
