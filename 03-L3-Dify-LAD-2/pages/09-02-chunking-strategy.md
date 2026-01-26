---
layout: default
---

## 8.1 基础分段：怎么切才合理？

<div class="mt-4 grid gap-8 md:grid-cols-2 items-stretch">

<!-- 1. 自动分段 (Automatic) -->
<div v-click class="rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4">
        <span class="text-2xl bg-white p-2 rounded-xl shadow-sm text-blue-600">✂️</span>
        <div>
            <h3 class="text-lg font-bold text-blue-900">自动分段 (Automatic)</h3>
            <p class="text-xs text-blue-600">最通用，适合纯文本</p>
        </div>
    </div>
    <div class="bg-white p-4 rounded-2xl border border-blue-100 flex-1 space-y-4">
        <div>
            <div class="text-[10px] font-bold text-slate-400 uppercase mb-1">规则</div>
            <p class="text-xs text-slate-700 leading-relaxed">
                设置一个固定的 **Max Tokens** (如 500)，切满就换下一段。通常会加上 **Overlap** (重叠) 来保持句子连贯。
            </p>
        </div>
        <div class="bg-slate-50 p-2 rounded border border-slate-100 font-mono text-[10px] text-slate-500 break-all">
            [...Chunk 1...] <span class="text-blue-500 font-bold">这是重叠部分</span><br>
            <span class="text-blue-500 font-bold">这是重叠部分</span> [...Chunk 2...]
        </div>
    </div>
</div>

<!-- 2. 规则分段 (Rule-based) -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/50 p-6 shadow-sm flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4">
        <span class="text-2xl bg-white p-2 rounded-xl shadow-sm text-purple-600">📑</span>
        <div>
            <h3 class="text-lg font-bold text-purple-900">规则分段 (Rule-based)</h3>
            <p class="text-xs text-purple-600">适合结构化文档 (Markdown/Notion)</p>
        </div>
    </div>
    <div class="bg-white p-4 rounded-2xl border border-purple-100 flex-1 space-y-4">
        <div>
            <div class="text-[10px] font-bold text-slate-400 uppercase mb-1">规则</div>
            <p class="text-xs text-slate-700 leading-relaxed">
                按文档的自然结构切分。例如遇到 `# 标题` 或 `\n\n` 换行符时切断。
            </p>
        </div>
        <div class="space-y-2">
            <div class="bg-purple-50 p-1.5 rounded border border-purple-100 text-[10px] text-purple-800">
                # 1. 公司简介 (Chunk A)
            </div>
            <div class="bg-purple-50 p-1.5 rounded border border-purple-100 text-[10px] text-purple-800">
                ## 1.1 发展历程 (Chunk B)
            </div>
        </div>
    </div>
</div>

</div>

<div v-click class="mt-6 text-center text-xs text-slate-500 transition-all duration-500">
    <span class="font-bold">局限性：</span> 无论哪种方式，都可能把一个完整的语义切碎，导致“只见树木，不见森林”。
</div>

<!--
（点击 1）**自动分段**：这是最傻瓜的方式。就像切香肠，每 500 个字切一刀。
为了防止把“我爱你”切成“我爱”和“你”，我们会设置一点重叠（Overlap）。

（点击 2）**规则分段**：如果你有 Markdown 文档，最好按标题切。
保证每一个“章节”都是完整的。

（点击 3）但它们都有个大问题：
如果这一段只写了“他同意了”，但没写“他是谁”（在上一段），那这一段被检索出来也是废的。
-->
