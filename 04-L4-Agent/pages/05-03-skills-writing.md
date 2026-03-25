---
layout: default
---

## 14 揭秘：真正的 SKILL 模板长什么样？

<div class="px-10 pt-2">
  <div class="grid grid-cols-[1fr_2.4fr] gap-8 mt-4 items-stretch">
    <!-- 左侧：概念解析 -->
<div>
      <p class="text-[12px] text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
       不把几万字的文档塞进 Prompt，而是做一张 <span class="text-amber-600 font-bold">按需加载的索引表</span>。
      </p>
      <div class="space-y-2">
        <div class="bg-blue-50/80 p-3.5 rounded-2xl border border-blue-100/50 shadow-sm">
          <div class="text-[11px] font-black text-blue-700 uppercase mb-1">1. YAML 元数据</div>
          <p class="text-[10px] text-blue-800/80 leading-tight">使用 <code>description</code> 告知 Agent：遇到什么领域的问题才触发本技能。</p>
        </div>
        <div class="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-100/50 shadow-sm">
          <div class="text-[11px] font-black text-amber-700 uppercase mb-1">2. 核心语法速查</div>
          <p class="text-[10px] text-amber-800/80 leading-tight">仅保留最高频使用的核心命令和基础 Markdown 示例。</p>
        </div>
        <div class="bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-100/50 shadow-sm">
          <div class="text-[11px] font-black text-emerald-700 uppercase mb-1">3. 辅助文件路由</div>
          <p class="text-[10px] text-emerald-800/80 leading-tight">像一本字典：将高级功能映射到独立的子文件，Agent 会在需要时按需读取。</p>
        </div>
      </div>
    </div>
    <!-- 右侧：高质感代码面板 -->
    <div class="rounded-3xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)] border border-slate-700/50 bg-[#0d1117] flex flex-col min-w-0">
      <!-- Tab Header -->
      <div class="bg-[#161b22] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div class="ml-2 px-3 py-1 bg-[#0d1117] rounded-t-lg border-x border-t border-slate-800 text-[10px] font-mono text-blue-300 flex items-center gap-2">
            <span class="text-amber-500">📄</span> SKILL.md
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[9px] font-mono text-slate-500 uppercase tracking-widest">OpenClaw SDK</span>
          <span class="bg-blue-500/10 text-blue-400 text-[9px] px-2 py-0.5 rounded-full border border-blue-500/20 font-bold">L4 AGENT</span>
        </div>
      </div>
      <!-- Code Content -->
      <div class="p-6 text-[10px] leading-relaxed font-mono space-y-5 overflow-y-auto" style="max-height: 420px;">
        <!-- Frontmatter Section -->
        <div class="bg-[#161b22]/50 p-3 rounded-xl border border-slate-800/50 space-y-0.5">
          <div class="text-slate-500">---</div>
          <div class="flex gap-2"><span class="text-pink-400">name:</span> <span class="text-emerald-400">slidev</span></div>
          <div class="flex gap-2"><span class="text-pink-400">description:</span> <span class="text-amber-200">"Create web-based slides for developers..."</span></div>
          <div class="text-slate-500">---</div>
        </div>
        <!-- Markdown Body -->
        <div class="space-y-4">
          <div>
            <div class="text-blue-400 font-bold text-xs"># Slidev - Presentation for Developers</div>
            <div class="text-blue-400/80 font-bold mt-4 mb-1">## Quick Start</div>
            <div class="bg-black/40 p-3 rounded-lg border border-slate-800 text-slate-300">
              <span class="text-slate-500 italic"># Initialize and run</span><br/>
              <span class="text-purple-400">pnpm</span> <span class="text-blue-300">create slidev</span> && <span class="text-purple-400">pnpm</span> <span class="text-blue-300">run dev</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="text-blue-400/80 font-bold flex items-center gap-2">
              ## Feature Reference
              <span class="text-[9px] font-normal text-slate-500 bg-slate-800 px-2 rounded-full">ROUTING TABLE</span>
            </div>
            <!-- Styled Routing Table -->
            <div class="rounded-xl border border-slate-800 overflow-hidden bg-black/20">
              <table class="w-full text-left border-collapse text-[9px]">
                <thead>
                  <tr class="bg-slate-800/50 text-slate-400 border-b border-slate-800">
                    <th class="p-2 pl-4">FEATURE</th>
                    <th class="p-2">SYNTAX EXAMPLE</th>
                    <th class="p-2">REFERENCE (AUTO-LOAD)</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                    <td class="p-2 pl-4 text-emerald-400 font-bold">Highlight</td>
                    <td class="p-2 font-mono text-slate-400">```ts {2,3}```</td>
                    <td class="p-2"><span class="text-amber-500 underline decoration-amber-500/30">refs/highlight.md</span></td>
                  </tr>
                  <tr class="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                    <td class="p-2 pl-4 text-emerald-400 font-bold">Monaco</td>
                    <td class="p-2 font-mono text-slate-400">```ts {monaco}```</td>
                    <td class="p-2"><span class="text-amber-500 underline decoration-amber-500/30">refs/monaco.md</span></td>
                  </tr>
                  <tr class="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                    <td class="p-2 pl-4 text-emerald-400 font-bold">Diagrams</td>
                    <td class="p-2 font-mono text-slate-400">```mermaid```</td>
                    <td class="p-2"><span class="text-amber-500 underline decoration-amber-500/30">refs/mermaid.md</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="text-slate-600 text-center text-[9px] pt-4 italic border-t border-slate-800/30 uppercase tracking-widest">
          +++ 50 more feature references +++
        </div>
      </div>
    </div>
  </div>
</div>

<!--
讲解要点：
1. 别把 Agent 当智障：标准技能不需要把所有的配置项写进一个 Prompt。Slidev 官方技能的 SKILL.md 只有一张张 Markdown 表格。
2. Context 隔离：如果用户只是想加粗一行代码，Agent 就只会 read `code-line-highlighting.md`。这节省了成千上万 Token，降低了幻觉概率。
3. 结论：编写强大的技能，本质上是编写一张高质量的“检索增强（RAG）路由表”。
-->
