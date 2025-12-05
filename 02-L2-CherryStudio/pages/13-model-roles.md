---
layout: default
---

## 5.6 模型分工：谁在干什么？

<div class="grid gap-6 md:grid-cols-2 mt-4 items-stretch">

<!-- Embedding Model -->
<div class="rounded-[32px] border border-cyan-100 bg-cyan-50/80 p-6 shadow-[0_15px_30px_rgba(6,182,212,0.1)] flex flex-col items-center text-center group hover:scale-[1.02] transition-transform">
  <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-md mb-4 group-hover:rotate-12 transition-transform">
    📐
  </div>
  <h3 class="text-xl font-bold text-cyan-900 mb-1">Embedding Model</h3>
  <div class="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-4">The Indexer</div>
  
  <div class="text-slate-600 text-xs space-y-3 text-left w-full bg-white/60 p-3 rounded-2xl">
    <div class="flex justify-between">
        <strong>职责：</strong>
        <span>将文本转化为向量</span>
    </div>
    <div class="flex justify-between">
        <strong>特点：</strong>
        <span>体积小，速度快，不说话</span>
    </div>
    <div class="flex justify-between">
        <strong>代表：</strong>
        <span class="font-mono text-[10px]">text-embedding-3-small</span>
    </div>
    <div class="flex justify-between">
        <strong></strong>
        <span class="font-mono text-[10px]">bge-m3 (本地)</span>
    </div>
  </div>
</div>

<!-- Chat Model -->
<div class="rounded-[32px] border border-violet-100 bg-violet-50/80 p-6 shadow-[0_15px_30px_rgba(139,92,246,0.1)] flex flex-col items-center text-center group hover:scale-[1.02] transition-transform">
  <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-md mb-4 group-hover:-rotate-12 transition-transform">
    💬
  </div>
  <h3 class="text-xl font-bold text-violet-900 mb-1">Chat Model</h3>
  <div class="text-xs font-bold uppercase tracking-widest text-violet-500 mb-4">The Author</div>
  
  <div class="text-slate-600 text-xs space-y-3 text-left w-full bg-white/60 p-3 rounded-2xl">
    <div class="flex justify-between">
        <strong>职责：</strong>
        <span>理解上下文，组织语言回答</span>
    </div>
    <div class="flex justify-between">
        <strong>特点：</strong>
        <span>体积大，智能强，能对话</span>
    </div>
    <div class="flex justify-between">
        <strong>代表：</strong>
        <span class="font-mono text-[10px]">GPT-4o / Claude 3.5</span>
    </div>
    <div class="flex justify-between">
        <strong></strong>
        <span class="font-mono text-[10px]">DeepSeek-V3</span>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-slate-500 text-xs">
    <span class="inline-block px-2 py-1 rounded-full bg-slate-100 border border-slate-200">
        🤝 两个模型配合，才能完成 RAG 任务
    </span>
</div>
