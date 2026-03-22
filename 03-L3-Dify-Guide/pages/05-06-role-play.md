---
layout: center
---

# 👋 如果你无法理解，可以举手


---
layout: default
---

## 5.6 现场互动：诗词接龙

<div class="mt-4 text-center text-slate-500 text-sm mb-8">
  请 4 位同学上台，我们用"诗词接龙"来演示工作流是怎么运转的。
</div>

<div class="grid gap-6 md:grid-cols-4 items-stretch">
  <!-- Role 1 -->
  <div v-click class="bg-white border-2 border-blue-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-4xl">🎤</div>
    <div class="text-center">
      <div class="font-bold text-blue-800 text-lg">开始节点</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">念出：锄禾日当午</div>
    </div>
  </div>
  <!-- Role 2 -->
  <div v-click class="bg-white border-2 border-purple-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-4xl">🧠</div>
    <div class="text-center">
      <div class="font-bold text-purple-800 text-lg">LLM 大脑</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">接龙下一句诗</div>
    </div>
  </div>
  <!-- Role 3 -->
  <div v-click class="bg-white border-2 border-amber-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-4xl">👨‍⚖️</div>
    <div class="text-center">
      <div class="font-bold text-amber-800 text-lg">审核员 (If)</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">判断：对 ✅ / 错 ❌</div>
    </div>
  </div>
  <!-- Role 4 -->
  <div v-click class="bg-white border-2 border-emerald-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:-translate-y-1 transition-transform">
    <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-4xl">📣</div>
    <div class="text-center">
      <div class="font-bold text-emerald-800 text-lg">结束节点</div>
      <div class="text-xs text-slate-500 mt-1">你的任务：</div>
      <div class="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded mt-2">大声朗读完整诗句</div>
    </div>
  </div>
</div>

<div class="mt-10 flex justify-center items-center gap-4 text-slate-400">
  <div class="i-carbon-arrow-right text-3xl"></div>
  <div class="text-sm">注意观察：诗句（变量）是如何一棒一棒传递下去的？</div>
  <div class="i-carbon-arrow-right text-3xl"></div>
</div>

<!--
光说不练假把式，现在我们请 4 位同学上台，玩一个"诗词接龙"游戏。

**第一位（开始节点）**：你就是起点，请大声念出上一句诗——"锄禾日当午"。
**第二位（LLM大脑）**：你收到了上一句，现在得接下一句。你要说——"汗滴禾下土"。
**第三位（审核员）**：你是判官。如果他接对了（汗滴禾下土），你就举"对 ✅"牌，让诗句往下传；如果他接错了，比如说了"白日依山尽"，你就举"错 ❌"牌，让他回去重来。
**第四位（结束节点）**：你是收尾的，把完整的诗句大声朗读出来——"锄禾日当午，汗滴禾下土"。

**大家观察一下：**
1.  这个过程中，"诗句"（变量）是谁传给谁的？是不是一棒一棒接力？
2.  如果"审核员"不认真，是不是就会传出错误的诗句？这就是为什么每个节点的配置都很关键。

这个实验告诉我们：**工作流就是把人类的协作逻辑，变成了机器的执行逻辑。** 每个节点都是流水线上的一个工人，接收上游的输入，加工后传给下游。
-->
