---
layout: default
---

## 6.5 转换处理：Code, Template, Assigner

<div class="grid gap-6 md:grid-cols-3 mt-8 items-stretch">

<!-- Code Node -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-5 flex flex-col shadow-sm hover:shadow-md transition-all duration-500">
    <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl text-emerald-600">💻</div>
        <h3 class="text-sm font-bold text-slate-800">Code (代码)</h3>
    </div>
    <div class="flex-1 bg-slate-900 rounded-xl p-3 border border-slate-700 mb-2 overflow-hidden">
        <pre class="text-[9px] font-mono text-emerald-400 leading-relaxed">
def main(x):
    return {
        "res": x * 2
    }
</pre>
    </div>
    <p class="text-[10px] text-slate-500 leading-relaxed">
        处理复杂逻辑、数学运算或数据清洗。支持 Python/JS。
    </p>
</div>

<!-- Template Node -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-5 flex flex-col shadow-sm hover:shadow-md transition-all duration-500">
    <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-xl text-pink-600">📝</div>
        <h3 class="text-sm font-bold text-slate-800">Template (模板)</h3>
    </div>
    <div class="flex-1 bg-white rounded-xl p-3 border border-pink-100 mb-2">
        <div class="text-[9px] font-mono text-slate-600 leading-relaxed">
            Hello {{name}},<br>
            Result: {{res}}
        </div>
    </div>
    <p class="text-[10px] text-slate-500 leading-relaxed">
        将多个变量拼装成文本或 JSON。Jinja2 语法。
    </p>
</div>

<!-- Assigner Node -->
<div v-click class="rounded-3xl border border-slate-200 bg-slate-50 p-5 flex flex-col shadow-sm hover:shadow-md transition-all duration-500">
    <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl text-blue-600">💾</div>
        <h3 class="text-sm font-bold text-slate-800">Assigner (赋值)</h3>
    </div>
    <div class="flex-1 bg-white rounded-xl p-3 border border-blue-100 mb-2 flex flex-col justify-center gap-2">
        <div class="flex items-center justify-between text-[9px] text-slate-500 border-b border-slate-100 pb-1">
            <span>Target</span>
            <span class="font-mono text-blue-600">conv.score</span>
        </div>
        <div class="flex items-center justify-between text-[9px] text-slate-500">
            <span>Value</span>
            <span class="font-mono text-blue-600">100</span>
        </div>
    </div>
    <p class="text-[10px] text-slate-500 leading-relaxed">
        写入会话变量。用于实现长期记忆、状态保持或计数器。
    </p>
</div>

</div>

<!--
（点击 1）**Code**：虽然我们说低代码，但有时候写一行代码（比如算个加法）比拖是个节点都快。
（点击 2）**Template**：这是最常用的。比如把“姓名”和“金额”填进一个“合同模板”里。
（点击 3）**Assigner**：它负责“记笔记”。比如聊天过程中，用户说“我喜欢红色”，Assigner 就赶紧拿小本本记下来“color=red”，下次就知道了。
-->
