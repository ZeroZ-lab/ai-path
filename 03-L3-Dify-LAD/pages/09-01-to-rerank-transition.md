---
layout: default
---

## 8.3 资料入库完毕，接下来呢？

<div class="mt-8 max-w-4xl mx-auto">
  <!-- Two Phases -->
  <div class="grid grid-cols-2 gap-8">
    <!-- Phase 1: Done -->
    <div v-click class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 relative">
      <div class="absolute -top-3 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
        ✅ 已完成
      </div>
      <div class="mt-2 text-center">
        <div class="text-2xl mb-3">📥</div>
        <div class="font-bold text-emerald-900 text-lg mb-2">入库阶段</div>
        <div class="text-sm text-slate-600 space-y-1">
          <div>1. 切片 (Chunking)</div>
          <div>2. 建索引 (Keyword / Vector)</div>
          <div>3. 存入知识库</div>
        </div>
      </div>
    </div>
    <!-- Phase 2: Next -->
    <div v-click class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 relative">
      <div class="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
        📍 接下来
      </div>
      <div class="mt-2 text-center">
        <div class="text-2xl mb-3">📤</div>
        <div class="font-bold text-blue-900 text-lg mb-2">召回阶段</div>
        <div class="text-sm text-slate-600 space-y-1">
          <div>1. 用户提问</div>
          <div>2. 检索召回 (Top K)</div>
          <div>3. <strong>Rerank 精排</strong></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Key Point -->
  <div v-click class="mt-10 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-6 text-center shadow-sm">
    <div class="text-lg font-bold text-purple-900 mb-2">
      🏛️ 图书馆已建好，现在该学"怎么借书"了
    </div>
    <div class="text-sm text-slate-600">
      入库只做一次，但<strong>召回</strong>每次用户提问都会触发。<br/>
      召回的质量直接决定了 LLM 能拿到多好的"参考资料"。
    </div>
  </div>
</div>

<!--
（承上启下）

到这里，我们已经完成了**入库阶段**的全部配置：
-   文档切成了合适的片段
-   每个片段都建好了索引（Keyword 或 Vector）
-   资料已经安安静静地躺在"图书馆"里了

**但光有图书馆还不够，关键是用户提问时，能不能快速、精准地把对的资料借出来。**

这就是**召回阶段**要解决的问题。

接下来我们要讲的 Rerank，就是召回阶段的一个关键配置——它决定了从图书馆拉出来的 20 条结果里，到底哪条应该排在第一位。
-->
