---
layout: default
---

## 9.2.1 进阶：父子索引 (Parent-Child)

<div class="mt-4 text-xs text-slate-500 mb-6 text-center">
    <strong>核心理念：</strong> 用“小切片”做精准检索，用“大切片”做完整上下文。
</div>

<div class="grid gap-8 md:grid-cols-2 items-stretch">
    <!-- Mode A: Parent Chunk -->
    <div v-click class="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 shadow-sm flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
        <div class="absolute -right-4 -top-4 w-16 h-16 bg-indigo-200 rounded-full blur-xl opacity-50"></div>
        <h3 class="text-sm font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <span class="bg-white p-1 rounded border border-indigo-100 shadow-sm">🅰️</span>
            父切片模式 (Parent Chunk)
        </h3>
        <!-- Visual -->
        <div class="flex-1 flex flex-col items-center justify-center gap-2 mb-4">
            <!-- Parent -->
            <div class="w-full bg-white border-2 border-dashed border-indigo-300 p-2 rounded-xl text-center">
                <div class="text-[10px] font-bold text-indigo-400 uppercase">Parent Window (2000 tokens)</div>
            </div>
            <!-- Links -->
            <div class="flex gap-4 w-full justify-center">
                <div class="h-4 w-px bg-indigo-300"></div>
                <div class="h-4 w-px bg-indigo-300"></div>
                <div class="h-4 w-px bg-indigo-300"></div>
            </div>
            <!-- Children -->
            <div class="flex gap-2 w-full justify-center">
                <div class="w-1/4 h-8 bg-indigo-600 rounded-lg shadow-md"></div>
                <div class="w-1/4 h-8 bg-indigo-600 rounded-lg shadow-md animate-pulse"></div>
                <div class="w-1/4 h-8 bg-indigo-600 rounded-lg shadow-md"></div>
            </div>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-indigo-100 shadow-inner">
            检索时命中下方的<strong>子切片</strong>，但提交给 LLM 时，自动替换为它所属的<strong>父切片</strong>窗口。<br>
            <span class="text-indigo-600 font-bold">适用：</span> 长文章、长上下文关联的内容。
        </p>
    </div>
    <!-- Mode B: Parent Document -->
    <div v-click class="rounded-3xl border border-teal-100 bg-teal-50/60 p-6 shadow-sm flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
        <div class="absolute -right-4 -top-4 w-16 h-16 bg-teal-200 rounded-full blur-xl opacity-50"></div>
        <h3 class="text-base font-bold text-teal-900 mb-4 flex items-center gap-2">
            <span class="bg-white p-1.5 rounded border border-teal-100 shadow-sm">🅱️</span>
            全文模式 (Full Document)
        </h3>
        <!-- Visual -->
        <div class="flex-1 flex flex-col items-center justify-center gap-2 mb-4">
            <!-- Parent -->
            <div class="w-full bg-white border-2 border-solid border-teal-600 p-2 rounded-xl text-center shadow-sm relative">
                <div class="text-[10px] font-bold text-teal-800 uppercase">Full Document (File)</div>
                <div class="absolute -right-2 -top-2 bg-teal-600 text-white text-[8px] px-1.5 rounded-full shadow-sm">DOC</div>
            </div>
            <!-- Link -->
            <div class="h-4 w-px bg-teal-300"></div>
            <!-- Children -->
            <div class="flex gap-2 w-full justify-center">
                <div class="w-1/4 h-8 bg-teal-400/50 rounded-lg"></div>
                <div class="w-1/4 h-8 bg-teal-400 rounded-lg shadow-md border-2 border-teal-600 animate-pulse"></div>
                <div class="w-1/4 h-8 bg-teal-400/50 rounded-lg"></div>
            </div>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-teal-100 shadow-inner">
            检索时命中某个片段，直接把<strong>整篇文档</strong>喂给 LLM。<br>
            <span class="text-teal-600 font-bold">适用：</span> 篇幅较短的规章制度、合同条款，需全文理解。
        </p>
    </div>

</div>

<!--
之前的分段方式有一个致命伤：**只见树木，不见森林。** AI 虽然找到了那一句话，但它不知道前因后果。于是，我们有了 **父子索引 (Parent-Child)**。

（点击 1）**父切片模式 (书摘模式)**：
我们把一本书做成很多张**小卡片（子切片）**。
*   **搜索时**：我们在小卡片里飞速查找，定位非常精准。
*   **回答时**：一旦找到了某张卡片，我们不只给 AI 看卡片，而是把卡片背后那一整页**原书内容（父切片）**都递给它。
*   **结果**：AI 既能秒回，又懂上下文。

（点击 2）**全文模式 (一问全知)**：
这更简单。如果你问的是《员工守则》，只要命中了里面任何一条，我就把**整本守则**都丢给 AI 读。

**父子索引是解决“AI 断章取义”的终极武器。**
-->