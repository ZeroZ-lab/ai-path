---
layout: default
---

## 7.1.5 切完了，然后呢？

<div class="mt-8 max-w-3xl mx-auto">
  <div class="flex items-center justify-center gap-6">
    <!-- Step 1: Chunks -->
    <div v-click class="flex flex-col items-center">
      <div class="w-20 h-20 rounded-2xl bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-4xl shadow-md">
        📄
      </div>
      <div class="mt-3 text-sm font-bold text-blue-800">切好的片段</div>
      <div class="text-xs text-slate-500">Chunks</div>
    </div>
    <!-- Arrow 1 -->
    <div v-click class="flex flex-col items-center">
      <div class="text-4xl text-slate-300">→</div>
      <div class="text-xs text-slate-400 mt-1">存入</div>
    </div>
    <!-- Step 2: Library -->
    <div v-click class="flex flex-col items-center">
      <div class="w-20 h-20 rounded-2xl bg-amber-100 border-2 border-amber-200 flex items-center justify-center text-4xl shadow-md">
        🏛️
      </div>
      <div class="mt-3 text-sm font-bold text-amber-800">知识库</div>
      <div class="text-xs text-slate-500">图书馆</div>
    </div>
    <!-- Arrow 2 -->
    <div v-click class="flex flex-col items-center">
      <div class="text-4xl text-slate-300">→</div>
      <div class="text-xs text-slate-400 mt-1">建索引</div>
    </div>
    <!-- Step 3: Index -->
    <div v-click class="flex flex-col items-center">
      <div class="w-20 h-20 rounded-2xl bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center text-4xl shadow-md">
        🔍
      </div>
      <div class="mt-3 text-sm font-bold text-emerald-800">可检索</div>
      <div class="text-xs text-slate-500">Index</div>
    </div>
  </div>
  <!-- Key Point -->
  <div v-click class="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-6 text-center shadow-sm">
    <div class="text-lg font-bold text-purple-900 mb-2">
      📚 图书馆的核心不是"有多少书"，而是"能不能找到书"
    </div>
    <div class="text-sm text-slate-600">
      切片只是把书拆成一页一页。<strong>建索引</strong>才是给每一页编上页码、做好目录，让你能快速翻到想要的那一页。
    </div>
  </div>
</div>

<!--
（承上启下）

刚才我们花了不少时间讲"怎么切"，但切完只是第一步。

你把一本书撕成 100 页纸条，如果直接扔进仓库里，找的时候还是大海捞针。

**所以，切完之后必须做两件事：**

1.  **存起来**：把这些片段存到我们的"知识库"（图书馆）里。
2.  **建索引**：给每个片段做标记，就像图书馆给每本书编上索书号、做好目录卡片一样。

**索引的质量，直接决定了后面"找"的效率。**

接下来，我们就来讲讲：Dify 里有哪几种"索引方式"，各自适合什么场景。
-->
