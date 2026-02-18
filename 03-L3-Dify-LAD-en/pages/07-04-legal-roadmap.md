---
layout: default
---

## 6.2 解决方案：你的三位“数字助理”

<div class="mt-8 flex gap-4 h-[400px]">

  <!-- Assistant 1: Receptionist -->
  <div v-click="1" class="flex-1 bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-3xl p-6 relative group hover:shadow-lg transition-all duration-500">
    <div class="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">🤖</div>
    <div class="h-full flex flex-col">
      <div class="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">Assistant A</div>
      <h3 class="text-xl font-bold text-slate-800 mb-2">案源分流</h3>
      <p class="text-sm text-slate-500 mb-2">"离婚？合规？合同？自动归类派单。"</p>
      <div class="text-[10px] uppercase font-bold text-rose-400 mb-2 tracking-wider">更多应用</div>
      <ul class="mb-6 space-y-1">
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-rose-300"></span>邮件智能分发</li>
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-rose-300"></span>咨询预处理</li>
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-rose-300"></span>案件类型归档</li>
      </ul>
      <div class="mt-auto bg-white/80 p-4 rounded-xl border border-rose-100">
        <div class="text-[10px] uppercase font-bold text-rose-400 mb-2">Power Skill</div>
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg">🔀</div>
          <div>
            <div class="text-xs font-bold text-slate-700">意图识别</div>
            <div class="text-[10px] text-slate-400">Question Classifier</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Assistant 2: Assistant -->
  <div v-click="2" class="flex-1 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-3xl p-6 relative group hover:shadow-lg transition-all duration-500">
    <div class="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">🕵️</div>
    <div class="h-full flex flex-col">
      <div class="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">Assistant B</div>
      <h3 class="text-xl font-bold text-slate-800 mb-2">观点提取</h3>
      <p class="text-sm text-slate-500 mb-2">"分析这50页判决书，法官的核心观点是什么？"</p>
      <div class="text-[10px] uppercase font-bold text-amber-400 mb-2 tracking-wider">更多应用</div>
      <ul class="mb-6 space-y-1">
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-amber-300"></span>合同风险审查</li>
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-amber-300"></span>证据链梳理</li>
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-amber-300"></span>长文档摘要</li>
      </ul>
      <div class="mt-auto bg-white/80 p-4 rounded-xl border border-amber-100">
        <div class="text-[10px] uppercase font-bold text-amber-400 mb-2">Power Skill</div>
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg">📄</div>
          <div>
            <div class="text-xs font-bold text-slate-700">文档解析</div>
            <div class="text-[10px] text-slate-400">Doc Extractor</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Assistant 3: Drafter -->
  <div v-click="3" class="flex-1 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-6 relative group hover:shadow-lg transition-all duration-500">
    <div class="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">✍️</div>
    <div class="h-full flex flex-col">
      <div class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">Assistant C</div>
      <h3 class="text-xl font-bold text-slate-800 mb-2">合同生成</h3>
      <p class="text-sm text-slate-500 mb-2">"拟一份北京租房合同，押一付三。"</p>
      <div class="text-[10px] uppercase font-bold text-blue-400 mb-2 tracking-wider">更多应用</div>
      <ul class="mb-6 space-y-1">
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-blue-300"></span>案件结案小结</li>
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-blue-300"></span>法律意见书</li>
        <li class="text-sm text-slate-400 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-blue-300"></span>诉讼标准文书</li>
      </ul>      
      <div class="mt-auto bg-white/80 p-4 rounded-xl border border-blue-100">
        <div class="text-[10px] uppercase font-bold text-blue-400 mb-2">Power Skill</div>
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg">📄</div>
          <div>
            <div class="text-xs font-bold text-slate-700">文书撰写</div>
            <div class="text-[10px] text-slate-400">HTTP / DocGen</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!--
针对律师面临的三大痛点，我们用 Dify 雇佣了三位免费的“数字助理”：

1.  **Assistant A (案源分流)**：利用 **Question Classifier** 意图分类。
    面对海量咨询，自动识别是“离婚”、“合规”还是“合同审核”，然后精准派单给对应的专业律师，不再需要人工手动分拣。

2.  **Assistant B (观点提取)**：利用 **Doc Extractor** 文档解析。
    丢给它几十页的判决书，自动识别并提取出“本院认为”等核心段落，瞬间生成案件摘要。不用你自己去翻到眼花。

3.  **Assistant C (合同生成)**：利用 **HTTP Request** 和逻辑节点。
    比如“生成租房合同”，它不是瞎写，而是基于最新法规和你的要求（押一付三、维修责任），生成结构严谨的专业文书，甚至直接导出 Word 文档。
-->
