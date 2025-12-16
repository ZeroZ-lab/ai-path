---
layout: default
---

## 9.2.1 进阶：父子索引 (Parent-Child)

<div class="mt-4 text-xs text-slate-500 mb-6 text-center">
    <strong>核心理念：</strong> 用“小切片”做精准检索，用“大切片”做完整上下文。
</div>

<div class="grid gap-8 md:grid-cols-2 items-stretch">
    <!-- Mode A: Parent Chunk -->
    <div class="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 shadow-sm flex flex-col relative overflow-hidden">
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
        <p class="text-[10px] text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-indigo-100">
            检索时命中下方的<strong>子切片</strong>，但提交给 LLM 时，自动替换为它所属的<strong>父切片</strong>窗口。<br>
            <span class="text-indigo-600 font-bold">适用：</span> 长文章、长上下文关联的内容。
        </p>
    </div>
    <!-- Mode B: Parent Document -->
    <div class="rounded-3xl border border-teal-100 bg-teal-50/60 p-6 shadow-sm flex flex-col relative overflow-hidden">
        <div class="absolute -right-4 -top-4 w-16 h-16 bg-teal-200 rounded-full blur-xl opacity-50"></div>
        <h3 class="text-sm font-bold text-teal-900 mb-4 flex items-center gap-2">
            <span class="bg-white p-1 rounded border border-teal-100 shadow-sm">🅱️</span>
            全文模式 (Full Document)
        </h3>
        <!-- Visual -->
        <div class="flex-1 flex flex-col items-center justify-center gap-2 mb-4">
            <!-- Parent -->
            <div class="w-full bg-white border-2 border-solid border-teal-600 p-2 rounded-xl text-center shadow-sm relative">
                <div class="text-[10px] font-bold text-teal-800 uppercase">Full Document (File)</div>
                <div class="absolute -right-2 -top-2 bg-teal-600 text-white text-[8px] px-1.5 rounded-full">DOC</div>
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
        <p class="text-[10px] text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-teal-100">
            检索时命中某个片段，直接把<strong>整篇文档</strong>喂给 LLM。<br>
            <span class="text-teal-600 font-bold">适用：</span> 篇幅较短的规章制度、合同条款，需全文理解。
        </p>
    </div>

</div>
