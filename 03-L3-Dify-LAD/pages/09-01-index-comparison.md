---
layout: default
---

## 9.1.3 终极对决：我该怎么选？

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
选关键词还是选向量？这是很多开发者的终极纠结。

（点击 1）**关键词**就像一个**一板一眼的质检员**，只认编码；**向量**就像一个**情商很高的销售**，只认意思。
*   如果你做的是医疗器械查询、故障代码报错，选关键词模式。
*   如果你做的是法律咨询、客服聊天、心情树洞，选高质量模式。

（点击 2）但小孩子才做选择，大人我全都要。
所谓的 **混合检索**，就是把这两个人（质检员和销售）同时派出去找答案。
1.  关键词找回一批精准的。
2.  向量找回一批意思相近的。
3.  最后通过一个叫 **Rerank (重排)** 的面试官，给这些结果统一打分，选出最完美的那个。

**这是目前 99% 商业级 AI 应用的唯一选择：双重保险，疗效最好。**
-->