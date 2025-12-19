---
layout: default
---

## 6.5 转换处理：Code, Template, Assigner

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- Code Node -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
    <!-- Badge -->
    <div class="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1.5 rounded-bl-2xl font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
        ⚔️ 高手 (Advanced)
    </div>
    <div class="flex items-center gap-3 mb-4 mt-2">
        <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl text-emerald-600">💻</div>
        <h3 class="text-lg font-bold text-slate-800">Code (代码)</h3>
    </div>
    <div class="flex-1 bg-slate-900 rounded-xl p-4 border border-slate-700 mb-3 overflow-hidden">
        <pre class="text-[10px] font-mono text-emerald-400 leading-relaxed">
def main(x):
    return {
        "res": x * 2
    }
</pre>
    </div>
    <p class="text-sm text-slate-500 leading-relaxed">
        处理复杂逻辑、数学运算或数据清洗。支持 Python/JS。
    </p>
</div>

<!-- Template Node -->
<div v-click class="rounded-3xl border border-pink-100 bg-pink-50/80 p-6 shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
    <!-- Badge -->
    <div class="absolute top-0 right-0 bg-pink-600 text-white px-3 py-1.5 rounded-bl-2xl font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
        ⭐ 核心 (Core)
    </div>
    <div class="flex items-center gap-3 mb-4 mt-2">
        <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-3xl text-pink-600">📝</div>
        <h3 class="text-lg font-bold text-slate-800">Template (模板)</h3>
    </div>
    <div class="flex-1 bg-white rounded-xl p-4 border border-pink-100 mb-3">
        <div class="text-[10px] font-mono text-slate-600 leading-relaxed">
            Hello {{name}},<br>
            Result: {{res}}
        </div>
    </div>
    <p class="text-sm text-slate-500 leading-relaxed">
        将多个变量拼装成文本或 JSON。Jinja2 语法。
    </p>
</div>

<!-- Assigner Node -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-3 mb-4 mt-2">
        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-3xl text-blue-600">💾</div>
        <h3 class="text-lg font-bold text-slate-800">Assigner (赋值)</h3>
    </div>
    <div class="flex-1 bg-white rounded-xl p-4 border border-blue-100 mb-3 flex flex-col justify-center gap-2">
        <div class="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-100 pb-1">
            <span>Target</span>
            <span class="font-mono text-blue-600">conv.score</span>
        </div>
        <div class="flex items-center justify-between text-[10px] text-slate-500">
            <span>Value</span>
            <span class="font-mono text-blue-600">100</span>
        </div>
    </div>
</div>

<!--
欢迎来到**转换部门**，这里负责把半成品加工成成品。

1.  **Template (模板)**：这是最常用的**排版文员**。LLM 写好的草稿，或者用户填的零散表单，交给它，它能迅速套进一个标准格式里（比如把“姓名+金额”拼成一段“通知短信”）。

2.  **Code (代码)**：这是公司的**IT外包小哥**。如果你需要复杂的数学计算，或者特殊的数据清洗，文员搞不定，就写几行代码交给他。虽然写代码有点难，但用来处理复杂逻辑非常强大。

3.  **Assigner (变量赋值)**：这是**记账员**。他手里的本子专门用来记“累计积分”、“对话轮数”这些需要长期保存的数据。
-->

</div>
