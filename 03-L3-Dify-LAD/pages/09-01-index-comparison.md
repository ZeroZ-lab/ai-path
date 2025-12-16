---
layout: default
---

## 9.1.3 终极对决：我该怎么选？

<div class="mt-6 mb-8">
    <table class="w-full text-sm text-left border-collapse rounded-2xl overflow-hidden shadow-sm">
        <thead class="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
            <tr>
                <th class="p-4">维度</th>
                <th class="p-4 text-emerald-700">高质量 (Vector)</th>
                <th class="p-4 text-blue-700">经济 (Keyword)</th>
            </tr>
        </thead>
        <tbody class="bg-white text-slate-600 text-xs">
            <tr class="border-b border-slate-50">
                <td class="p-4 font-bold text-slate-400">核心能力</td>
                <td class="p-4">语义理解，模糊匹配</td>
                <td class="p-4">精确匹配，字面完全一致</td>
            </tr>
            <tr class="border-b border-slate-50">
                <td class="p-4 font-bold text-slate-400">典型场景</td>
                <td class="p-4">客服咨询、知识问答、跨语言</td>
                <td class="p-4">查SKU号、人名、医疗术语</td>
            </tr>
            <tr class="border-b border-slate-50">
                <td class="p-4 font-bold text-slate-400">成本</td>
                <td class="p-4">有 Token 费用</td>
                <td class="p-4">免费</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="rounded-3xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-slate-200 p-6 shadow-md relative overflow-hidden">
    <div class="absolute right-0 top-0 text-9xl opacity-5 rotate-12">🤝</div>
    <div class="relative z-10">
        <h3 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
            <span class="text-2xl">🏆</span> 最佳实践：混合检索 (Hybrid Search)
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed mb-4">
            成年人不做选择，我全都要。
        </p>
        <div class="flex items-center gap-4">
            <div class="bg-white px-4 py-2 rounded-xl shadow-sm border border-blue-100 text-xs font-bold text-blue-700">
                Keyword (精准)
            </div>
            <div class="text-slate-400 font-bold">+</div>
            <div class="bg-white px-4 py-2 rounded-xl shadow-sm border border-emerald-100 text-xs font-bold text-emerald-700">
                Vector (语义)
            </div>
            <div class="text-slate-400 font-bold">=</div>
            <div class="bg-slate-800 px-4 py-2 rounded-xl shadow-sm text-xs font-bold text-white">
                Rerank (重排序)
            </div>
        </div>
        <p class="mt-4 text-[10px] text-slate-500">
            Dify 支持同时开启两种模式，先分别召回，再通过 Rerank 模型进行综合打分，效果最好。
        </p>
    </div>
</div>
