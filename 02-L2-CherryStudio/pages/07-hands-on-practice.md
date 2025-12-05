---
layout: default
---

## 4.3 实战演练：场景化任务

<div class="grid gap-3 md:grid-cols-3 mt-2 items-stretch">

<!-- Scenario 1: Translation -->
<div class="rounded-[24px] border border-blue-100 bg-blue-50/80 p-4 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
  <div class="flex items-center gap-3 mb-2 border-b border-blue-200 pb-2">
    <span class="text-2xl">🌍</span>
    <div>
      <div class="text-[10px] font-bold uppercase tracking-wider text-blue-500">Scenario 01</div>
      <h3 class="text-lg font-bold text-blue-900">中英互译 + 语气</h3>
    </div>
  </div>
  <div class="space-y-2 flex-1">
    <div class="bg-white/60 p-2 rounded-xl border border-blue-100">
        <div class="text-xs font-bold text-blue-600 mb-1">Task 1: 基础翻译</div>
        <p class="text-[10px] text-slate-600 leading-tight">将一封中文邮件翻译成英文（或反向）。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-blue-100">
        <div class="text-xs font-bold text-blue-600 mb-1">Task 2: 语气调整</div>
        <p class="text-[10px] text-slate-600 leading-tight">同一内容生成「正式版」vs「友好版」。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-blue-100">
        <div class="text-xs font-bold text-blue-600 mb-1">Task 3: 多模型对比</div>
        <p class="text-[10px] text-slate-600 leading-tight">利用「一问多答」对比 2-3 个模型，评测自然度与风格。</p>
    </div>
  </div>
</div>

<!-- Scenario 2: Meeting Minutes -->
<div class="rounded-[24px] border border-amber-100 bg-amber-50/80 p-4 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
  <div class="flex items-center gap-3 mb-2 border-b border-amber-200 pb-2">
    <span class="text-2xl">📝</span>
    <div>
      <div class="text-[10px] font-bold uppercase tracking-wider text-amber-500">Scenario 02</div>
      <h3 class="text-lg font-bold text-amber-900">会议记录整理</h3>
    </div>
  </div>
  <div class="space-y-2 flex-1">
    <div class="bg-white/60 p-2 rounded-xl border border-amber-100">
        <div class="text-xs font-bold text-amber-600 mb-1">Task 4: 文本粘贴</div>
        <p class="text-[10px] text-slate-600 leading-tight">粘贴杂乱记录，提取：主题、参与人、决策、待办。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-amber-100">
        <div class="text-xs font-bold text-amber-600 mb-1">Task 5: 文件处理</div>
        <p class="text-[10px] text-slate-600 leading-tight">将内容存为 .txt/.docx，上传整理。对比纯文本 vs 文件体验。</p>
    </div>
  </div>
</div>

<!-- Scenario 3: Writing Assistant -->
<div class="rounded-[24px] border border-purple-100 bg-purple-50/80 p-4 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
  <div class="flex items-center gap-3 mb-2 border-b border-purple-200 pb-2">
    <span class="text-2xl">✍️</span>
    <div>
      <div class="text-[10px] font-bold uppercase tracking-wider text-purple-500">Scenario 03</div>
      <h3 class="text-lg font-bold text-purple-900">写作 & 助手固化</h3>
    </div>
  </div>
  <div class="space-y-2 flex-1">
    <div class="bg-white/60 p-2 rounded-xl border border-purple-100">
        <div class="text-xs font-bold text-purple-600 mb-1">Task 6: 从 0 起草</div>
        <p class="text-[10px] text-slate-600 leading-tight">描述需求（对象/目的/语气）生成草稿，并进行 1-2 轮润色。</p>
    </div>
    <div class="bg-white/60 p-2 rounded-xl border border-purple-100">
        <div class="text-xs font-bold text-purple-600 mb-1">Task 7: 固化为助手</div>
        <p class="text-[10px] text-slate-600 leading-tight">将成功的 Prompt 保存为「邮件/公告助手」，测试一键生成。</p>
    </div>
  </div>
</div>

</div>
