---
layout: center
---

# ✍️ 现场画图

<div class="mt-4 text-xl font-bold text-slate-700 mb-8">
  你的日常工作，能画成流程图吗？
</div>

<div class="grid grid-cols-2 gap-12 items-center max-w-4xl mx-auto">

  <!-- Example -->
  <div v-click class="rounded-3xl border-2 border-slate-200 bg-slate-50 p-6 opacity-80 scale-90">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">举个例子 (智能客服)</div>
    <div class="flex flex-col gap-3 items-center">
      <div class="bg-white px-4 py-2 rounded-lg border border-slate-200 text-xs">用户咨询</div>
      <div class="i-carbon-arrow-down text-slate-300"></div>
      <div class="bg-purple-100 px-4 py-2 rounded-lg border border-purple-200 text-xs font-bold text-purple-800 flex items-center gap-1">
        <span>律师</span>
      </div>
      <div class="i-carbon-arrow-down text-slate-300"></div>
      <div class="bg-amber-100 px-4 py-2 rounded-lg border border-amber-200 text-xs font-bold text-amber-800">
        是售后纠纷?
      </div>
      <div class="flex gap-4 w-full justify-center">
        <div class="i-carbon-arrow-down-left text-slate-300"></div>
        <div class="i-carbon-arrow-down-right text-slate-300"></div>
      </div>
      <div class="flex gap-2 w-full justify-between">
        <div class="bg-white px-2 py-1 rounded border text-[10px]">转人工客服</div>
        <div class="bg-white px-2 py-1 rounded border text-[10px]">AI 自动回复</div>
      </div>
    </div>
  </div>

  <!-- Your Turn -->
  <div v-click class="flex flex-col items-center gap-6">
    <div class="text-6xl animate-bounce">🤔</div>
    <div class="text-center space-y-2">
      <h3 class="text-lg font-bold text-slate-800">轮到你了</h3>
      <p class="text-sm text-slate-500">
        请在纸上画出你最头疼的一个业务流程。
      </p>
    </div>
    <div class="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold border border-blue-100">
      要素：输入 -> 判断 -> 动作 -> 输出
    </div>
  </div>

</div>

<!--
现在，请大家思考一下，你日常工作中，有没有哪些重复、烦琐的业务，你觉得它完全可以**变成一张流程图**，然后让 AI 来帮你跑？

为了了解大家的日常工作，请写一下日常的工作。

就像左边这个**智能客服**的例子：
*   **输入**：收到用户的咨询消息。
*   **处理**：交给 LLM (律师) 分析意图，判断是不是来投诉的。
*   **动作**：如果是纠纷，转人工安抚；如果是普通问题，AI 直接生成回复。

你们看，所有复杂的事情，是不是都可以拆解成：**输入 → 判断 → 动作 → 输出**？

**【引导学员思考自己的工作】**

现在，轮到你了。
请在纸上（或者在你的脑海里），**画出你觉得最头疼的一个业务流程**。
不用追求完美，抓住它的**核心逻辑**。

一旦你能把它“画”出来，Dify 就能帮你“跑”出来！
-->
