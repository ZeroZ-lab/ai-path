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
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">举个例子 (报销)</div>
    <div class="flex flex-col gap-3 items-center">
      <div class="bg-white px-4 py-2 rounded-lg border border-slate-200 text-xs">收到发票</div>
      <div class="i-carbon-arrow-down text-slate-300"></div>
      <div class="bg-amber-100 px-4 py-2 rounded-lg border border-amber-200 text-xs font-bold text-amber-800">
        金额 > 500?
      </div>
      <div class="flex gap-4 w-full justify-center">
        <div class="i-carbon-arrow-down-left text-slate-300"></div>
        <div class="i-carbon-arrow-down-right text-slate-300"></div>
      </div>
      <div class="flex gap-2 w-full justify-between">
        <div class="bg-white px-2 py-1 rounded border text-[10px]">找主管签字</div>
        <div class="bg-white px-2 py-1 rounded border text-[10px]">直接通过</div>
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
（互动环节）
刚才我说“工作就是流程”，大家可能没感觉。
现在请大家拿出纸笔，或者在脑子里想一下。

挑一个你觉得最烦琐的工作，试着把它画出来。
就像左边这个报销的例子一样。
一旦你能画出来，Dify 就能帮你跑出来。
-->
