---
layout: default
---

## 7.2.3 终极对决：我该怎么选？

<div v-click class="mt-6 mb-8 transition-all duration-500">
    <table class="w-full text-base text-left border-collapse rounded-2xl overflow-hidden shadow-md">
        <thead class="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
            <tr>
                <th class="p-4">维度</th>
                <th class="p-4 text-emerald-700 font-black">高质量 (Vector)</th>
                <th class="p-4 text-blue-700 font-black">经济 (Keyword)</th>
            </tr>
        </thead>
        <tbody class="bg-white text-slate-600 text-sm">
            <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td class="p-4 font-bold text-slate-400">核心能力</td>
                <td class="p-4 font-bold">语义理解，模糊匹配</td>
                <td class="p-4 font-bold">精确匹配，字面一致</td>
            </tr>
            <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td class="p-4 font-bold text-slate-400">典型场景</td>
                <td class="p-4">客服咨询、知识问答</td>
                <td class="p-4">查SKU、代码、专业术语</td>
            </tr>
            <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td class="p-4 font-bold text-slate-400">成本</td>
                <td class="p-4 text-emerald-600 font-bold">有 Token 费用</td>
                <td class="p-4 text-blue-600 font-bold">免费</td>
            </tr>
        </tbody>
    </table>
</div>

<div v-click class="rounded-3xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-slate-200 p-6 shadow-md relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
    <div class="absolute right-0 top-0 text-9xl opacity-5 rotate-12">🤝</div>
    <div class="relative z-10">
        <h3 class="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
            <span class="text-3xl">🏆</span> 最佳实践：混合检索 (Hybrid Search)
        </h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">
            成年人不做选择，我全都要。
        </p>
        <div class="flex items-center gap-4">
            <div class="bg-white px-5 py-3 rounded-xl shadow-sm border border-blue-100 text-sm font-bold text-blue-700">
                Keyword (精准)
            </div>
            <div class="text-slate-400 font-bold text-xl">+</div>
            <div class="bg-white px-5 py-3 rounded-xl shadow-sm border border-emerald-100 text-sm font-bold text-emerald-700">
                Vector (语义)
            </div>
            <div class="text-slate-400 font-bold text-xl">=</div>
            <div class="bg-slate-800 px-5 py-3 rounded-xl shadow-sm text-sm font-bold text-white">
                Rerank (重排序)
            </div>
        </div>
        <p class="mt-6 text-xs text-slate-500 font-bold leading-relaxed">
            Dify 支持同时开启两种模式，先分别召回，再通过 Rerank 模型进行综合打分，效果最好。
        </p>
    </div>
</div>

<!--
在关键词和向量检索之间做选择，这常常让法务团队感到纠结。其实，这就像在处理法律问题时，是在做“文字校对”还是“法律解释”。

（点击 1）大家看这个对比表。**关键词检索**就像一位**严谨的卷宗管理员**，他只认精确的字眼。如果你要找的是某个具体的案号或者是《民法典》的特定条款原文，它最可靠。而**向量检索**则更像是一位**资深律师助理**，他理解的是法律背后的“意思”。即使你搜的是“违约”，他也能帮你关联到“损害赔偿”等语义相关的判例。

（点击 2）但成年人的世界不做选择，我们要的是“混合检索”。这就像是组建了一个**专家组**：管理员负责拉出所有精确命中的法条，律师助理负责搜寻所有语义接近的先例。最后，通过一个叫 **Rerank (重排)** 的“高级合伙人”进行最后定稿，他会根据案件背景，从这一堆结果中筛选出最具说服力、最相关的法律依据。

**这是目前 99% 法律大模型应用的黄金标准：既有管理员的严谨，又有律师的慧眼。**
-->