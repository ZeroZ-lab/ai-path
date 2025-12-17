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

<!--
（交互演示）
我们来看这个例子。用户搜“iPhone 15 Pro 价格”。
初始状态下，Embedding 把“15 Pro”排在了第 4，前面全是“15”或者“15 Pro Max”。
为什么？因为它们字面太像了。

点击 **Rerank**：
奇迹发生了。Rerank 精准地识别出“Pro”这个关键字的重要性，直接把正确答案提到了第 1 位。
这就是为什么要花钱买 Rerank 的原因。
-->