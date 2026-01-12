---
layout: default
---

## 6.5 助理 C (文书专员)：模板化生成 (Template Node)

<div class="mt-8 flex items-center justify-between gap-6 max-w-5xl mx-auto">

  <!-- Step 1: Form Input -->
  <div class="flex-1 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
    <div class="text-[40px] mb-4">📋</div>
    <div class="font-bold text-slate-700">结构化变量 (Variables)</div>
    <div class="mt-4 text-left bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-mono text-slate-500 space-y-2">
      <div class="flex justify-between"><span>tenant:</span> <span class="text-blue-600">"李四"</span></div>
      <div class="flex justify-between"><span>rent:</span> <span class="text-blue-600">"8000"</span></div>
      <div class="flex justify-between"><span>deposit:</span> <span class="text-blue-600">"押一付三"</span></div>
    </div>
  </div>

  <div class="i-carbon-arrow-right text-4xl text-slate-300"></div>

  <!-- Step 2: Template Node -->
  <div v-click="1" class="flex-1 bg-teal-50 border-2 border-teal-400 p-6 rounded-2xl shadow-md text-center relative">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">FILL THE BLANKS</div>
    <div class="text-[40px] mb-4">🧩</div>
    <div class="font-bold text-teal-900">Template Node</div>
    <div class="text-[10px] font-mono text-teal-700 mt-2 bg-white/50 p-2 rounded text-left leading-relaxed">
      甲方：<span class="text-blue-600 font-bold">{{ tenant }}</span><br>
      月租：<span class="text-blue-600 font-bold">{{ rent }}</span> 元<br>
      付款：<span class="text-blue-600 font-bold">{{ deposit }}</span><br>
      ...
    </div>
  </div>

  <div class="i-carbon-arrow-right text-4xl text-slate-300"></div>

  <!-- Step 3: Markdown Doc -->
  <div v-click="2" class="flex-1 bg-white border border-slate-200 p-6 rounded-2xl shadow-lg relative group cursor-pointer hover:-translate-y-2 transition-transform">
    <!-- Doc Icon -->
    <div class="absolute top-4 right-4 text-slate-200 text-xs font-bold">PREVIEW</div>
    <div class="w-16 h-20 bg-slate-100 mx-auto rounded-lg border border-slate-300 flex items-center justify-center text-slate-400 font-bold text-2xl mb-4">
      M
    </div>
    <div class="font-bold text-slate-800">标准合同.md</div>
    <div class="mt-4 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold inline-block border border-teal-200">
      ✅ Signed
    </div>
  </div>

</div>

<div v-click="3" class="mt-12 text-center text-slate-500 text-sm">
  “我们不生产文档，我们只是<strong class="text-slate-800">标准化流程</strong>的搬运工。”
</div>

<!--
最后是第三位助理：**文书工厂**。

我们不再让 AI 去“写”合同（很容易瞎编），而是让 AI 去“填”合同。

在 Dify 里，我们使用 **Template Node (模板节点)**。这就像大家熟悉的 Word **“邮件合并”** 或者做 **“填空题”**：

1.  **左边 (变量)**：先把“李四”、“8000”这些萝卜挖出来。
2.  **中间 (模板)**：我们准备好一个标准的法律合同模板，里面留好坑位（比如 `{{ tenant }}`）。
3.  **右边 (生成)**：Dify 自动把萝卜填进坑里。

这种方式生成的合同，每一个字、每一个标点符号都是你审核过的标准条款，绝对不会出现 AI 自由发挥导致的法律风险。
-->
