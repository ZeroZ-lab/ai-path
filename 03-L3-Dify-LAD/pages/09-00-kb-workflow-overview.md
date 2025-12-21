---
layout: default
---

## 7.0.3 知识库搭建全景图：从上传到落地

<div class="mt-4 text-xs text-slate-500 mb-6 font-bold uppercase tracking-widest text-center">
    知识库配置的三个关键环节
</div>

<div class="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
    <table class="w-full text-sm text-left border-collapse bg-white">
        <thead class="bg-slate-800 text-white font-bold">
            <tr>
                <th class="p-4 border-r border-slate-700 w-1/4">功能板块</th>
                <th class="p-4 border-r border-slate-700 w-1/4 text-center">核心概念 (Dify)</th>
                <th class="p-4 w-2/4">法务实战场景例子</th>
            </tr>
        </thead>
        <tbody class="text-slate-700">
            <!-- Segmentation -->
            <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">
                    <div class="flex items-center gap-2">
                        <span class="text-xl">✂️</span>
                        <span>分段设置 (Chunking)</span>
                    </div>
                </td>
                <td class="p-4 text-center border-r border-slate-200">
                    <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-bold text-[10px]">自动 / 规则分段</span>
                </td>
                <td class="p-4 italic text-slate-500 leading-relaxed">
                    “我有一份 50 页的《劳动合同法》全文，是该按字数强制切断，还是按**‘第几章第几条’**来保留语义完整性？”
                </td>
            </tr>
            <!-- Indexing -->
            <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">
                    <div class="flex items-center gap-2">
                        <span class="text-xl">📖</span>
                        <span>索引方式 (Index)</span>
                    </div>
                </td>
                <td class="p-4 text-center border-r border-slate-200">
                    <span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md font-bold text-[10px]">高质量 / 经济模式</span>
                </td>
                <td class="p-4 italic text-slate-500 leading-relaxed">
                    “用户搜‘辞退赔偿’，AI 是只找含这四个字的文档（经济），还是能理解**‘违法解除合同的经济补偿金’**的意思（向量）？”
                </td>
            </tr>
            <!-- Retrieval -->
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">
                    <div class="flex items-center gap-2">
                        <span class="text-xl">🔎</span>
                        <span>检索设置 (Retrieval)</span>
                    </div>
                </td>
                <td class="p-4 text-center border-r border-slate-200">
                    <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-bold text-[10px]">Top-K / Rerank</span>
                </td>
                <td class="p-4 italic text-slate-500 leading-relaxed">
                    “系统海选出了 20 个相关案例，如何让**‘高级合伙人’ (Rerank)** 选出最能赢官司、最匹配案情的 Top 3 案例？”
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="mt-8 flex items-center justify-between gap-4">
    <div class="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div class="w-1/3 h-full bg-slate-800"></div>
    </div>
    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
        接下来，我们将按照这三大板块深度拆解
    </div>
    <div class="flex-1 h-1 bg-slate-100 rounded-full"></div>
</div>

<!--
刚才我们看的是 RAG 的基本流程，现在我们把目光移到 Dify 的操作界面上。

（参考表格）知识库的搭建不仅是上传一个 PDF 那么简单，它背后涉及到三个核心的决策：

1.  **怎么切（分段）**：就像我们整理卷宗，你是用订书机随便订（自动分段），还是按照法条的章节目录分类整理（规则分段）？这决定了 AI 能不能看懂逻辑。

2.  **怎么存（索引）**：是只让它记住“关键词”，还是教它理解“法理语义”？这决定了用户搜“辞退”时，AI 知不知道要去查“补偿金”。

3.  **怎么找（检索）**：大海捞针之后，如何确保捞上来的那根针是能定罪或者能辩护的关键性证据？这就需要 Rerank 面试官。

**这就是我们要掌握的“三步走策略”。接下来，我们一个板块一个板块地深度拆解。**
-->
