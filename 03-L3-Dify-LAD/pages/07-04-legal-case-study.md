---
layout: default
---

## 5.4.1 场景还原：律师的“周一早高峰”

<div class="mt-8 grid grid-cols-3 gap-6">

<div v-click="1" class="relative group">
  <div class="absolute -top-3 -left-3 w-10 h-10 bg-rose-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg z-10 border-2 border-white">📞</div>
  <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm h-64 flex flex-col justify-between group-hover:-translate-y-1 transition-all duration-300">
    <div>
      <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">场景一：案源分流</div>
      <div class="bg-slate-50 p-3 rounded-xl text-sm text-slate-600 italic border border-dashed border-slate-300">
        “王律师，我想咨询下离婚财产分割...顺便问下你们谁做企业合规？我有几十个合同要审。”
      </div>
    </div>
    <div class="text-xs text-rose-600 font-bold bg-rose-50 px-3 py-2 rounded-lg">
      😓 痛点：该推给谁？如果你在开庭，这单大客户可能就漏了。
    </div>
  </div>
</div>

<div v-click="2" class="relative group">
  <div class="absolute -top-3 -left-3 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg z-10 border-2 border-white">🔍</div>
  <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm h-64 flex flex-col justify-between group-hover:-translate-y-1 transition-all duration-300">
    <div>
      <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">场景二：背景调查</div>
      <div class="bg-slate-50 p-3 rounded-xl text-sm text-slate-600 italic border border-dashed border-slate-300">
        “快帮我查查‘北京虚构科技公司’有没有涉诉？老板是不是老赖？我要在 10 分钟内决定签不签。”
      </div>
    </div>
    <div class="text-xs text-amber-600 font-bold bg-amber-50 px-3 py-2 rounded-lg">
      😓 痛点：企查查/裁判文书网一个个搜？10分钟根本来不及。
    </div>
  </div>
</div>

<div v-click="3" class="relative group">
  <div class="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg z-10 border-2 border-white">📝</div>
  <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm h-64 flex flex-col justify-between group-hover:-translate-y-1 transition-all duration-300">
    <div>
      <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">场景三：文书生成</div>
      <div class="bg-slate-50 p-3 rounded-xl text-sm text-slate-600 italic border border-dashed border-slate-300">
        “拟一份北京两居室的租房合同，月租8000，押一付三，要求加上禁止转租条款。”
      </div>
    </div>
    <div class="text-xs text-blue-600 font-bold bg-blue-50 px-3 py-2 rounded-lg">
      😓 痛点：手写太慢，用 Word 模板改容易漏改关键字段（比如日期、金额），不仅不专业，还可能有法律风险。
    </div>
  </div>
</div>

</div>

<!--
各位律师朋友，这个场景熟悉吗？
周一早上，你的微信可能是炸的。

1.  **左边**：潜在客户的咨询。有的值钱，有的不值钱，你需要立刻判断并分流。
2.  **中间**：急迫的背景调查。客户在谈判桌上等着，你需要像特工一样立刻给出情报。
3.  **右边**：无聊的文书起草。虽然简单，但不能出错，一旦把“2025年”写成“2024年”，专业形象就崩了。

这三件事同时来，你是三头六臂也忙不过来。
但今天，我要送给你三位“数字助理”，帮你搞定这一切。
-->
