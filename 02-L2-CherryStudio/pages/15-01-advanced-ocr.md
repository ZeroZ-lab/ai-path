---
layout: center
---

# 07 进阶实效功能：OCR 与视觉解析

---
layout: default
---

## 7.1 从「单纯聊天」到「看图说话」

<div class="grid gap-6 md:grid-cols-2 mt-8 items-stretch h-[380px]">

<!-- Left: The Problem (Text Only) -->
<div class="rounded-[32px] border border-rose-100 bg-rose-50/80 p-8 shadow-[0_15px_30px_rgba(244,63,94,0.1)] relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl select-none group-hover:scale-110 transition-transform">😵</div>
  
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-rose-500 mb-4">The Limitation</div>
  <h3 class="text-2xl font-bold text-rose-900 mb-6">纯文本对话的局限</h3>
  
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-rose-500 shrink-0">📊</div>
      <div>
        <h4 class="font-bold text-slate-800">打不开的图表</h4>
        <p class="text-sm text-slate-600 mt-1">看到包含大量数据的财报或营销报表截图，需要手动一行行敲到 Excel 里。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-rose-500 shrink-0">📄</div>
      <div>
        <h4 class="font-bold text-slate-800">扫描件与图片发票</h4>
        <p class="text-sm text-slate-600 mt-1">面对不可复制内容的 PDF、发票或外文海报，只能对着图片进行肉眼翻译。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-rose-500 shrink-0">📝</div>
      <div>
        <h4 class="font-bold text-slate-800">手写笔记转化难</h4>
        <p class="text-sm text-slate-600 mt-1">会议上的白板画图、头脑风暴笔记，会后整理需要耗费数小时才能转成电子档。</p>
      </div>
    </div>
  </div>
</div>

<!-- Right: The Solution (Vision Integration) -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-8 shadow-[0_15px_30px_rgba(16,185,129,0.1)] relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl select-none group-hover:scale-110 transition-transform">👁️</div>

  <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4">The Solution</div>
  <h3 class="text-2xl font-bold text-emerald-900 mb-6">OCR 视觉解析能力</h3>
  
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-emerald-500 shrink-0">⚡</div>
      <div>
        <h4 class="font-bold text-slate-800">一键提取结构化数据</h4>
        <p class="text-sm text-slate-600 mt-1">直接拖入图表截图，AI 几秒钟生成可复制的 Markdown/Excel 表格数据。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-emerald-500 shrink-0">🌐</div>
      <div>
        <h4 class="font-bold text-slate-800">所见即所得的翻译</h4>
        <p class="text-sm text-slate-600 mt-1">丢进外文研报或包装说明图，让模型直接对照图片区域给你中文精细翻译与解释。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-emerald-500 shrink-0">🧠</div>
      <div>
        <h4 class="font-bold text-slate-800">智能草图还原</h4>
        <p class="text-sm text-slate-600 mt-1">上传会议白板手绘草稿，AI 可一键整理成结构清晰的逻辑框架大纲或流程图代码。</p>
      </div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

## 7.2 实操演练：图像解析场景任务

<div class="grid gap-3 md:grid-cols-3 mt-4 items-stretch">

<!-- Scenario 1: Data Table -->
<div class="rounded-[24px] border border-blue-100 bg-blue-50/80 p-4 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
  <div class="flex items-center gap-3 mb-2 border-b border-blue-200 pb-2">
    <span class="text-2xl">📈</span>
    <div>
      <div class="text-[10px] font-bold uppercase tracking-wider text-blue-500">Scenario 01</div>
      <h3 class="text-lg font-bold text-blue-900">数据提取与转换</h3>
    </div>
  </div>
  <div class="space-y-2 flex-1">
    <div class="bg-white/60 p-2 rounded-xl border border-blue-100">
        <div class="text-xs font-bold text-blue-600 mb-1">准备材料</div>
        <p class="text-[10px] text-slate-600 leading-tight">随意找一张包含财务数据或排期的复杂数据表格截图。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-blue-100">
        <div class="text-xs font-bold text-blue-600 mb-1">执行操作</div>
        <p class="text-[10px] text-slate-600 leading-tight">拖入Cherry Studio 对话框（确保使用 GPT-4o 或 Claude 3.5 Sonnet 模型）。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-blue-100">
        <div class="text-xs font-bold text-blue-600 mb-1">验证结果</div>
        <p class="text-[10px] text-slate-600 leading-tight">输入："提取图中的所有数据，并输出为标准 Markdown 表格格式"。</p>
    </div>
  </div>
</div>

<!-- Scenario 2: Image Translation -->
<div class="rounded-[24px] border border-amber-100 bg-amber-50/80 p-4 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
  <div class="flex items-center gap-3 mb-2 border-b border-amber-200 pb-2">
    <span class="text-2xl">🌍</span>
    <div>
      <div class="text-[10px] font-bold uppercase tracking-wider text-amber-500">Scenario 02</div>
      <h3 class="text-lg font-bold text-amber-900">多语种长图翻译</h3>
    </div>
  </div>
  <div class="space-y-2 flex-1">
    <div class="bg-white/60 p-2 rounded-xl border border-amber-100">
        <div class="text-xs font-bold text-amber-600 mb-1">准备材料</div>
        <p class="text-[10px] text-slate-600 leading-tight">一张全是英文/日文的产品说明书或海报长截图。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-amber-100">
        <div class="text-xs font-bold text-amber-600 mb-1">执行操作</div>
        <p class="text-[10px] text-slate-600 leading-tight">将图片作为附件发送给翻译助手。</p>
    </div>
     <div class="bg-white/60 p-2 rounded-xl border border-amber-100">
        <div class="text-xs font-bold text-amber-600 mb-1">验证结果</div>
        <p class="text-[10px] text-slate-600 leading-tight">输入："翻译这张图的核心内容，保留原有的排版层级，用信达雅的中文表达"。</p>
    </div>
  </div>
</div>

<!-- Scenario 3: Handwriting / Diagrams -->
<div class="rounded-[24px] border border-purple-100 bg-purple-50/80 p-4 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
  <div class="flex items-center gap-3 mb-2 border-b border-purple-200 pb-2">
    <span class="text-2xl">✍️</span>
    <div>
      <div class="text-[10px] font-bold uppercase tracking-wider text-purple-500">Scenario 03</div>
      <h3 class="text-lg font-bold text-purple-900">手绘草图结构化</h3>
    </div>
  </div>
  <div class="space-y-2 flex-1">
    <div class="bg-white/60 p-2 rounded-xl border border-purple-100">
        <div class="text-xs font-bold text-purple-600 mb-1">准备材料</div>
        <p class="text-[10px] text-slate-600 leading-tight">会议桌上的手绘流程草图或错综复杂的头脑风暴白板照片。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-purple-100">
        <div class="text-xs font-bold text-purple-600 mb-1">执行操作</div>
        <p class="text-[10px] text-slate-600 leading-tight">上传图片至对话框。</p>
    </div>
     <div class="bg-white/60 p-2 rounded-xl border border-purple-100">
        <div class="text-xs font-bold text-purple-600 mb-1">验证结果</div>
        <p class="text-[10px] text-slate-600 leading-tight">输入："理解图中的流程逻辑，帮我整理出一份结构化的会议大纲和具体的行动项(Action Items)"。</p>
    </div>
  </div>
</div>

</div>
