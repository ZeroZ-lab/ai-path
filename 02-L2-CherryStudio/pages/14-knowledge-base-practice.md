---
layout: center
---

# 07 实操：三步构建知识库


---
layout: default
---

## 7.1 实操：三步构建知识库

<div class="grid gap-6 md:grid-cols-3 mt-10 items-stretch">

<!-- Step 1: Create & Upload -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-lg flex flex-col group hover:-translate-y-2 transition-transform">
  <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">Step 01</div>
  <div class="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-sm text-blue-600 mb-4">📂</div>
  <h3 class="text-xl font-bold text-blue-900 mb-2">新建与上传</h3>
  <p class="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
    进入“知识库”图标，点击“新建知识库”。将文件拖入窗口。
  </p>
  <div class="bg-white/60 rounded-xl p-3 border border-blue-100/50">
    <div class="text-[10px] font-bold text-slate-500 mb-1">支持格式</div>
    <div class="flex gap-2">
        <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold">PDF</span>
        <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold">DOCX</span>
        <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold">MD</span>
    </div>
  </div>
</div>

<!-- Step 2: Embedding (Auto) -->
<div class="rounded-[32px] border border-purple-100 bg-purple-50/80 p-6 shadow-lg flex flex-col group hover:-translate-y-2 transition-transform">
  <div class="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">Step 02</div>
  <div class="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-sm text-purple-600 mb-4">⚙️</div>
  <h3 class="text-xl font-bold text-purple-900 mb-2">切片与索引</h3>
  <p class="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
    点击列表右侧的“训练/索引”按钮。系统会自动进行切片和向量化。
  </p>
  <div class="bg-white/60 rounded-xl p-3 border border-purple-100/50">
    <div class="text-[10px] font-bold text-slate-500 mb-1">状态指示</div>
    <div class="flex items-center gap-2 text-[10px] text-slate-700">
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span>Indexing... (处理中)</span>
    </div>
    <div class="flex items-center gap-2 text-[10px] text-slate-700 mt-1">
        <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
        <span>Ready (完成)</span>
    </div>
  </div>
</div>

<!-- Step 3: Chat with KB -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-lg flex flex-col group hover:-translate-y-2 transition-transform">
  <div class="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">Step 03</div>
  <div class="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-sm text-emerald-600 mb-4">💬</div>
  <h3 class="text-xl font-bold text-emerald-900 mb-2">挂载与对话</h3>
  <p class="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
    回到对话界面，点击输入框上方的“知识库”图标，勾选刚才创建的库。
  </p>
  <div class="bg-white/60 rounded-xl p-3 border border-emerald-100/50">
    <div class="text-[10px] font-bold text-slate-500 mb-1">测试提问</div>
    <div class="p-2 bg-slate-50 rounded border border-emerald-100 text-[10px] text-slate-700 italic">
        “员工手册里关于带猫上班是怎么规定的？”
    </div>
  </div>
</div>

</div>

<div class="mt-8 text-center">
    <span class="inline-block px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold shadow-sm">
        🎯 任务：请下载《员工手册》并完成以上步骤
    </span>
</div>
