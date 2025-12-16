---
layout: default
---

## 9.3.2 实战演示：Rerank 如何拯救结果？

<div class="h-[400px] w-full mt-6">
  <RerankDemo />
</div>

<div class="mt-4 text-center text-xs text-slate-500">
  <span class="font-bold text-slate-700">观察重点：</span>
  Embedding 虽然把正确答案（Pro）召回了，但因为它和普通版太像，所以排在了第 4。
  <br>Rerank 介入后，敏锐地发现了 "Pro" 这个差异点，直接把它提到了第 1。
</div>
