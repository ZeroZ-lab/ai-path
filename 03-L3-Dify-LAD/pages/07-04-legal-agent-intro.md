---
layout: center
---

# 05 工作流实战（二）

<div class="mt-6 flex flex-col gap-4 w-full max-w-lg mx-auto">
  
  <!-- Part 1 -->
  <!-- <div v-click class="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-center gap-4 transition-all duration-500 hover:-translate-y-1">
    <div class="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold shrink-0">Part 1</div>
    <div class="text-left">
      <div class="text-sm font-bold text-blue-900">随堂小练：智能写作助手</div>
      <div class="text-[10px] text-slate-500 mt-0.5">20 min · 基础变量与节点连接</div>
    </div>
  </div> -->

  <!-- Part 2 -->
  <div v-click class="bg-purple-50/50 border border-purple-100 p-4 rounded-xl flex items-center gap-4 transition-all duration-500 hover:-translate-y-1">
    <div class="bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold shrink-0">Part 2</div>
    <div class="text-left">
      <div class="text-sm font-bold text-purple-900">深度演练：法律文书生成</div>
      <div class="text-[10px] text-slate-500 mt-0.5">60 min · 复杂逻辑与 JSON 提取</div>
    </div>
  </div>

</div>

<!--
各位同学，终于到了最激动人心的环节。就像学开车，光背交规没用，得上车摸方向盘。

（点击 1）**Part 1 (科目二)**：我们在训练场里练练倒车入库。通过一个简单的“写作助手”，把刚才讲的 Start、LLM、End 连起来跑通。目标是不熄火，把变量传对。

（点击 2）**Part 2 (科目三)**：直接上路实战。我们要开发一个“法律文书生成器”。这不只是简单的问答，而是要处理复杂的逻辑判断（红绿灯）和格式转换（换挡）。

准备好了吗？打开电脑，我们开始。
-->


---
layout: center
---

# Part 2：深度演练

<div class="mt-4 text-slate-500 text-lg">
</div>

<!--
刚刚的小练习只是热身。现在我们要挑战一个**真正的业务难题**：如何从用户的一句废话，变成一份专业合同？

1.  **Step 1. 意图解析 (听懂潜台词)**：用户说“我要租房”，他其实没说押一付三，也没说谁管修马桶。AI 的第一个任务是把这些“潜台词”翻译成法律语言。

2.  **Step 2. 结构规划 (画图纸)**：我们不能让 AI 一上来就写。得先画好图纸——哪里是违约责任，哪里是争议解决。图纸不对，盖出来的房子（合同）就会塌。

3.  **Step 3. 分段精写 (精加工)**：这一步最牛。我们不再让 AI 一口气写全篇，而是用我们刚才讲过的 **Iteration (批量盖章机)**，一个模块一个模块地精雕细琢。

这一套组合拳下来，生成的合同才能达到**法务总监**的水平。
-->

<div class="mt-10 grid grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
  
  <!-- Step 1 -->
  <div v-click class="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col h-full hover:-translate-y-1 transition-all duration-500">
    <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4">🧠</div>
    <div class="font-bold text-slate-800 text-base mb-2">Step 1. 意图解析</div>
    <div class="text-xs text-slate-500 leading-relaxed">
      用户说“我要租房”，AI 如何自动补全“押一付三”、“维修责任”等隐含要素？
    </div>
  </div>

  <!-- Step 2 -->
  <div v-click class="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col h-full hover:-translate-y-1 transition-all duration-500">
    <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-4">📑</div>
    <div class="font-bold text-slate-800 text-base mb-2">Step 2. 结构规划</div>
    <div class="text-xs text-slate-500 leading-relaxed">
      先生成大纲（主体、标的、违约责任...），确保合同骨架完整，不漏条款。
    </div>
  </div>

  <!-- Step 3 -->
  <div v-click class="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col h-full hover:-translate-y-1 transition-all duration-500">
    <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-4">✍️</div>
    <div class="font-bold text-slate-800 text-base mb-2">Step 3. 分段精写</div>
    <div class="text-xs text-slate-500 leading-relaxed">
      利用 <strong>Iteration</strong> 节点，逐个条款进行精细化撰写，最后拼装成文。
    </div>
  </div>

</div>