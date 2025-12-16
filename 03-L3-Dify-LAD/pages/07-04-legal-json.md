---
layout: default
---

## 7.4.2 关键技术：如何让 AI "填空"？

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">

  <!-- The Challenge -->
  <div class="rounded-3xl border border-rose-100 bg-rose-50/50 p-6 shadow-sm flex flex-col">
    <h3 class="text-base font-bold text-rose-900 mb-4 flex items-center gap-2">
      <span class="text-2xl">🤯</span> 挑战：AI 话太多
    </h3>
    <div class="bg-white p-4 rounded-2xl border border-rose-100 text-xs text-slate-600 space-y-3 flex-1">
      <p><strong>Prompt:</strong> 提取姓名和金额。</p>
      <div class="h-px bg-slate-100"></div>
      <p class="text-rose-600 leading-relaxed">
        "好的，没问题！根据您的描述，我为您提取到了以下信息：<br>
        姓名是张三，金额是5000元。<br>
        希望能帮到您！"
      </p>
    </div>
    <p class="mt-4 text-xs text-rose-800/80 font-bold">
        ❌ 这种“自然语言”包裹的答案，后续的程序节点根本无法识别。
    </p>
  </div>

  <!-- The Solution -->
  <div class="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm flex flex-col">
    <h3 class="text-base font-bold text-emerald-900 mb-4 flex items-center gap-2">
      <span class="text-2xl">🛠️</span> 解法：JSON Mode
    </h3>
    <div class="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs font-mono text-emerald-400 space-y-3 flex-1">
      <div>
        <p class="text-slate-500 mb-1">// System Prompt</p>
        <p class="text-white">你是一个数据提取器。只输出 JSON，不要有任何废话。</p>
      </div>
      <div>
        <p class="text-slate-500 mb-1">// Output</p>
        <p>
          {<br>
          &nbsp;&nbsp;"name": "张三",<br>
          &nbsp;&nbsp;"amount": 5000<br>
          }
        </p>
      </div>
    </div>
    <p class="mt-4 text-xs text-emerald-800/80 font-bold">
        ✅ 开启 "JSON Mode"，强制模型输出结构化数据。
    </p>
  </div>

</div>