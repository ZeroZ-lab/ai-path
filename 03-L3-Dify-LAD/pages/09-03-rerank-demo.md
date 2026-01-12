---
layout: default
---

## 8.3.4 实战演示：Rerank 如何拯救结果？

<div class="h-[400px] w-full mt-6">
  <RerankDemo />
</div>

<div class="mt-4 text-center text-xs text-slate-500">
  <span class="font-bold text-slate-700">观察重点：</span>
  Embedding 虽然把正确答案（无权解除）召回了，但因为它和错误答案（有权解除）字面太像，所以排在了第 4。
  <br>Rerank 介入后，精准识别出“无权”这一否定词的关键语义，直接把它提到了第 1。
</div>

<!--
（交互演示）
我们来看这个法律场景的真实例子。用户搜“甲方无权单方解除合同”。
初始状态下，Embedding 把“甲方有权解除”排在第 1，而正确答案“无权”排在第 4。
为什么？因为“有权”和“无权”只差一个字，向量距离太近了。

点击 **Rerank**：
奇迹发生了。Rerank 有能力“精读”文本，它发现了“无权”这个否定词的重要性，直接把正确答案捞回到了第 1 位。
这就是为什么要花钱买 Rerank 的原因：为了**法律的严谨性**。
-->