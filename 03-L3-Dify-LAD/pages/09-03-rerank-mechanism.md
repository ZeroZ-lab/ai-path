---
layout: default
---

## 9.3.1 Rerank 原理：速读 vs 精读

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">

<!-- Embedding (Fast Reading) -->
<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col relative group">
    <div class="absolute -top-3 left-4 bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Embedding</div>
    <div class="text-center mb-6 mt-2">
        <h3 class="text-lg font-bold text-slate-700">👀 匆忙的“速读”</h3>
        <p class="text-xs text-slate-400 mt-1">就像在书店快速翻书</p>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div class="text-4xl mb-2">🏃‍♂️💨</div>
        <p class="text-xs text-slate-600 text-center leading-relaxed">
            它把你的问题和文档分别变成两串数字，然后比一比这两串数字像不像。
        </p>
        <div class="w-full h-px bg-slate-200 my-2"></div>
        <p class="text-[10px] text-slate-400 text-center italic">
            "大概意思差不多就行，我没时间细看。"
        </p>
    </div>
</div>

<!-- Rerank (Deep Reading) -->
<div class="rounded-2xl border border-purple-200 bg-purple-50/30 p-6 shadow-md flex flex-col relative group">
    <div class="absolute -top-3 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">Rerank</div>
    <div class="text-center mb-6 mt-2">
        <h3 class="text-lg font-bold text-purple-900">🧐 认真的“精读”</h3>
        <p class="text-xs text-purple-600/70 mt-1">就像专家在审阅合同</p>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center gap-4 bg-white rounded-xl p-4 border border-purple-100 shadow-sm">
        <div class="text-4xl mb-2">🧠💡</div>
        <p class="text-xs text-slate-600 text-center leading-relaxed">
            它把你得问题和文档<strong>放在一起</strong>，逐字逐句地阅读、思考、揣摩它们之间的逻辑关系。
        </p>
        <div class="w-full h-px bg-purple-100 my-2"></div>
        <p class="text-[10px] text-purple-500 text-center italic">
            "虽然字面上不像，但这确实就是你要找的答案。"
        </p>
    </div>
</div>

</div>

<div class="mt-8 text-center bg-amber-50 border border-amber-100 p-3 rounded-xl text-xs text-amber-800">
    <strong>最佳策略：</strong> 先让“速读者”快速找出前 50 本书，再让“精读者”从中挑出最好的 3 本。既快又准。
</div>
