---
layout: default
---

## 23 龙虾哲学：OpenClaw 的“文件即真相”

<div class="px-8 mt-2">
  <div class="grid grid-cols-2 gap-10 mt-6">
    <!-- 左侧：核心理念 (平衡字号) -->
    <div class="space-y-6">
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl shadow-sm">
        <h3 class="text-amber-900 font-black text-lg">摒弃“黑盒”向量库</h3>
        <p class="text-[13px] text-amber-800 leading-relaxed mt-1">
          很多 Agent 系统会把部分记忆放进用户不直接感知的检索层。OpenClaw 更强调<b>本地优先 (Local-First)</b>，把核心项目记忆放到更容易查看和维护的本地文本里。
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
          <div class="text-2xl mb-2">🔍</div>
          <div class="font-black text-slate-800 text-[12px]">透明可维护</div>
          <div class="text-[11px] text-slate-500 leading-snug mt-1">用户可以用 VS Code 直接修改 Agent 的“认知”或“偏好”。</div>
        </div>
        <div class="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
          <div class="text-2xl mb-2">🌳</div>
          <div class="font-black text-slate-800 text-[12px]">版本可追溯</div>
          <div class="text-[11px] text-slate-500 leading-snug mt-1">可以使用 Git 追踪 Agent 记忆的演进历史。</div>
        </div>
      </div>
    </div>
    <!-- 右侧：对比表格 (平衡字号) -->
    <div class="flex flex-col justify-center">
      <div class="bg-[#0f172a] rounded-3xl p-6 border border-slate-700 shadow-2xl">
        <div class="text-[10px] font-mono text-slate-500 mb-4 uppercase tracking-widest text-center font-bold">OpenClaw vs 常见做法</div>
        <table class="w-full text-[11px] text-slate-300">
          <thead class="text-slate-500 border-b border-slate-800">
            <tr>
              <th class="pb-2 text-left font-black">特性</th>
              <th class="pb-2 text-left font-black">常见方式</th>
              <th class="pb-2 text-left text-emerald-400 font-black">OpenClaw</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr>
              <td class="py-3 font-bold text-slate-400">存储载体</td>
              <td class="py-3">托管检索层 / 向量库</td>
              <td class="py-3 text-emerald-300 font-bold">更强调本地文本记忆</td>
            </tr>
            <tr>
              <td class="py-3 font-bold text-slate-400">用户干预</td>
              <td class="py-3">极难修改</td>
              <td class="py-3 text-emerald-300 font-bold">随时手工编辑</td>
            </tr>
            <tr>
              <td class="py-3 font-bold text-slate-400">检索逻辑</td>
              <td class="py-3">黑盒程度更高</td>
              <td class="py-3 text-emerald-300 font-bold">更方便人工查看和修改</td>
            </tr>
            <tr>
              <td class="py-3 font-bold text-slate-400">隐私边界</td>
              <td class="py-3">更依赖托管平台</td>
              <td class="py-3 text-emerald-300 font-bold">更强调本地边界与版本管理</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!--
逐字稿：
这一页我想讲 OpenClaw 很有代表性的一种哲学：文件即真相。

很多 Agent 系统会把一部分关键信息藏进用户不直接感知的检索层或者向量库里。OpenClaw 更强调本地优先，也更强调把核心记忆和规则放进人能直接看见、直接修改的文件里。

这件事的价值不只是“方便存储”，而是它让 Agent 的认知变得更透明。

第一，你可以直接打开文件看它现在到底记住了什么。
第二，你可以手工修改，而不是只能等系统自己学会。
第三，你甚至可以用 Git 追踪这些记忆和规则是怎么演进的。

所以这页真正要带走的理解是：OpenClaw 在记忆设计上，不是追求最神秘的黑盒，而是追求更透明、更可维护、更可追踪。
-->
