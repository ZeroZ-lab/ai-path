---
layout: center
---

# 06 高阶功能：知识库

---
layout: default
---

## 6.1 为什么需要知识库？

<div class="grid gap-8 md:grid-cols-2 mt-10 items-stretch h-[380px]">

<!-- Left: The Problem (Without Knowledge Base) -->
<div class="rounded-[32px] border border-rose-100 bg-rose-50/80 p-8 shadow-[0_15px_30px_rgba(244,63,94,0.1)] relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl select-none group-hover:scale-110 transition-transform">😵</div>
  
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-rose-500 mb-4">The Limitation</div>
  <h3 class="text-2xl font-bold text-rose-900 mb-6">直接问模型的局限</h3>
  
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-rose-500 shrink-0">🤥</div>
      <div>
        <h4 class="font-bold text-slate-800">一本正经的胡说 (幻觉)</h4>
        <p class="text-sm text-slate-600 mt-1">当模型不知道答案时，它倾向于编造事实，而非承认未知。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-rose-500 shrink-0">🔒</div>
      <div>
        <h4 class="font-bold text-slate-800">不知道你的“秘密” (私有数据)</h4>
        <p class="text-sm text-slate-600 mt-1">模型没看过你公司的规章制度、项目文档或个人笔记。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-rose-500 shrink-0">📉</div>
      <div>
        <h4 class="font-bold text-slate-800">太长不看 (上下文限制)</h4>
        <p class="text-sm text-slate-600 mt-1">几百页的 PDF 直接粘贴进对话框，往往会超出长度限制或丢失细节。</p>
      </div>
    </div>
  </div>
</div>

<!-- Right: The Solution (With Knowledge Base) -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-8 shadow-[0_15px_30px_rgba(59,130,246,0.1)] relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl select-none group-hover:scale-110 transition-transform">🧠</div>

  <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">The Solution</div>
  <h3 class="text-2xl font-bold text-blue-900 mb-6">知识库的「外挂大脑」</h3>
  
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-blue-500 shrink-0">🔍</div>
      <div>
        <h4 class="font-bold text-slate-800">先搜索，再回答 (RAG)</h4>
        <p class="text-sm text-slate-600 mt-1">AI 会先在你的文档里翻书，找到依据后再回答，<strong>拒绝瞎编</strong>。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-blue-500 shrink-0">🏢</div>
      <div>
        <h4 class="font-bold text-slate-800">打造专属领域专家</h4>
        <p class="text-sm text-slate-600 mt-1">把公司文档、行业报告喂给它，它就是最懂你业务的 AI 助手。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-white text-xl flex items-center justify-center shadow-sm text-blue-500 shrink-0">📚</div>
      <div>
        <h4 class="font-bold text-slate-800">海量数据吞吐</h4>
        <p class="text-sm text-slate-600 mt-1">无论是几十本书还是一年的会议记录，都能建立索引，随时调用。</p>
      </div>
    </div>
  </div>
</div>

</div>
