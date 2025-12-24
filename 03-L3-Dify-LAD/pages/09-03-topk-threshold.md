---
layout: default
---

## 7.3.1 召回配置：Top K 与 Score Threshold

<div class="grid gap-8 md:grid-cols-2 mt-8 items-stretch">
<!-- Top K -->
<div v-click class="rounded-3xl border border-blue-100 bg-blue-50/80 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-4 mb-4 border-b border-blue-200 pb-3">
        <span class="text-4xl">🎯</span>
        <div>
            <h3 class="text-xl font-bold text-blue-900">Top K (召回数量)</h3>
            <p class="text-xs text-blue-700/70">拉多少条候选结果出来？</p>
        </div>
    </div>
    <div class="space-y-4 flex-1">
        <p class="text-sm text-slate-600 leading-relaxed">
            从知识库中检索与用户问题最相关的 <strong>前 K 条</strong> 片段。
        </p>
        <div class="bg-white p-4 rounded-xl border border-blue-100 text-xs space-y-2">
            <div class="flex justify-between items-center">
                <span class="text-slate-500">K = 3</span>
                <span class="text-blue-700">快速但可能遗漏</span>
            </div>
            <div class="flex justify-between items-center font-bold text-blue-800 bg-blue-100 p-2 rounded">
                <span>K = 10~20 ✅</span>
                <span>推荐：配合 Rerank</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-slate-500">K = 50</span>
                <span class="text-blue-700">多但噪声大</span>
            </div>
        </div>
    </div>
</div>
<!-- Score Threshold -->
<div v-click class="rounded-3xl border border-amber-100 bg-amber-50/80 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-4 mb-4 border-b border-amber-200 pb-3">
        <span class="text-4xl">📏</span>
        <div>
            <h3 class="text-xl font-bold text-amber-900">Score Threshold (相似度阈值)</h3>
            <p class="text-xs text-amber-700/70">多像才算"相关"？</p>
        </div>
    </div>
    <div class="space-y-4 flex-1">
        <p class="text-sm text-slate-600 leading-relaxed">
            只有相似度分数 <strong>高于阈值</strong> 的结果才会被返回。低于阈值的直接丢弃。
        </p>
        <div class="bg-white p-4 rounded-xl border border-amber-100 text-xs space-y-2">
            <div class="flex justify-between items-center">
                <span class="text-slate-500">0.3</span>
                <span class="text-amber-700">宽松，噪音多</span>
            </div>
            <div class="flex justify-between items-center font-bold text-amber-800 bg-amber-100 p-2 rounded">
                <span>0.5~0.7 ✅</span>
                <span>推荐：平衡召回与精度</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-slate-500">0.9</span>
                <span class="text-amber-700">严格，可能漏掉</span>
            </div>
        </div>
    </div>
</div>
</div>

<div v-click class="mt-8 bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
    <div class="text-sm text-slate-700">
        宁可多召回一些让 Rerank 去精选，也不要在第一步就漏掉关键条款。
    </div>
</div>

<!--
刚才我们学了怎么建索引，现在资料已经存好了。用户一提问，系统就会去"图书馆"里检索。

但检索时有两个关键开关需要你调：

（点击 1）**Top K（拉多少条）**：
*   比如设成 3，系统就只给你 3 条结果。万一正确答案排在第 4 条，你就错过了。
*   建议：先拉 15~20 条出来，让后面的 Rerank 去精选。多一点总比漏掉好。

（点击 2）**Score Threshold（及格线）**：
*   每条结果都有一个"相似度分数"。你可以设一个及格线，比如 0.5。
*   低于 0.5 的，系统直接不给你看。这能过滤掉那些"沾边但不靠谱"的结果。
*   **法律场景特别重要**：如果搜不到高质量证据，宁可让 AI 回答"资料不足，无法判断"，也不要强行编造。

**记住：Top K 决定"拉多少"，Threshold 决定"多差不要"。** 调好这两个，召回质量就有保障了。
-->
