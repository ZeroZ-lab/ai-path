---
layout: default
transition: slide-left
---

## 8.3 助理 B (分析师)：观点提取

<div class="mt-8 flex justify-between items-center px-4">

<!-- Step 1: Input -->
<div class="w-32 shrink-0">
  <div class="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm text-center">
    <div class="text-[10px] font-bold text-slate-400 mb-1">输入 (INPUT)</div>
    <div class="text-xs font-bold text-slate-800">📄 判决书.pdf</div>
    <div class="text-[9px] text-slate-400">(50页 PDF 文档)</div>
  </div>
</div>

<div class="text-slate-300 text-xl px-2">→</div>

<!-- Step 2: The Tool Node -->
<div v-click="1" class="w-48 shrink-0 relative group">
  <div class="absolute -top-2 -right-2 bg-amber-500 text-white px-1.5 py-0.5 rounded text-[8px] font-bold shadow animate-bounce">自动解析</div>
  <div class="bg-amber-50 border-2 border-amber-400 p-3 rounded-2xl shadow-md flex items-center gap-2">
    <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">📑</div>
    <div class="text-left">
      <div class="text-[10px] font-bold text-amber-600 uppercase">Doc Extractor</div>
      <div class="text-xs font-bold text-amber-900">文档解析</div>
    </div>
  </div>
  <div class="text-[9px] text-slate-400 mt-1 text-center font-mono">full_text.txt</div>
</div>

<div class="text-slate-300 text-xl px-2">→</div>

<!-- Step 3: LLM Summary (NEW) -->
<div v-click="2" class="w-48 shrink-0 relative group">
  <div class="bg-blue-50 border-2 border-blue-400 p-3 rounded-2xl shadow-md flex items-center gap-2">
    <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">⚖️</div>
    <div class="text-left">
      <div class="text-[10px] font-bold text-blue-600 uppercase">LLM Node</div>
      <div class="text-xs font-bold text-blue-900">观点提取</div>
    </div>
  </div>
  <div class="text-[9px] text-slate-400 mt-1 text-center">提取 & 分析</div>
</div>

<div class="text-slate-300 text-xl px-2">→</div>

<!-- Step 4: The Result -->
<div v-click="3" class="w-40 shrink-0">
  <div class="bg-slate-800 text-white p-3 rounded-2xl shadow-lg text-[10px] font-mono h-[160px] overflow-y-auto custom-scrollbar">
    <div class="text-amber-400 border-b border-white/10 pb-1 mb-1">📌 本院认为</div>
    <p class="mb-1"><span class="text-slate-400">观点 1:</span> 合同有效</p>>
    <p class="mb-1"><span class="text-slate-400">观点 2:</span> 违约金过高</p>>
    <p class="text-slate-400 mb-1">小结:</p>>
    <p class="text-slate-300 leading-tight">法院认定双方租赁关系成立，但鉴于被告实际损失较小，酌情调低违约金...</p>
  </div>
</div>

</div>

<div v-click="4" class="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4 mx-auto max-w-3xl">
  <div class="text-2xl mt-1">💡</div>
  <div>
    <h4 class="font-bold text-blue-900 mb-1">为什么需要两个步骤？</h4>
    <p class="text-sm text-blue-700 leading-relaxed">
      判决书是 <strong>非结构化数据</strong>（PDF/图片），LLM 无法直接“看”懂二进制文件。<br>
      必须先用 <strong>文档解析工具</strong> 将其转化为 <strong>结构化文本</strong>，再丢给 LLM <strong>分析提取</strong>。
    </p>
  </div>
</div>

<!--
这是我们的第二位助理：**分析师**。

很多律师头疼的问题是：手里有一堆 PDF 判决书，想知道法官到底怎么想的，得一行行看。

Dify 的 **Doc Extractor** 配合 **LLM** 可以完美解决。

1.  **文档解析 (Doc Extractor)**：它是“眼睛”。
    负责把 PDF、图片里的文字“扣”出来，变成机器能读懂的纯文本。不管你格式多乱，它都能识别。

2.  **观点提取 (LLM Node)**：它是“大脑”。
    拿到纯文本后，它根据你的指令（比如“只找本院认为部分”、“分析违约金认定逻辑”），精准提取核心观点。

**从此，50页的判决书，你只需要看这 500 字的摘要。**
-->
