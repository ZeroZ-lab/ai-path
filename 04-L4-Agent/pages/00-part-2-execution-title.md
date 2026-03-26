---
layout: center
---

# 拆解 OpenClaw 的大脑

<div class="mt-6 text-xl text-slate-500">
真正关键的不是工具多，而是 loop、runtime 和反馈机制怎么接起来。
</div>

<!--
逐字稿：
前面我们先看了 OpenClaw 的系统结构。

但知道它有哪些模块，还不够解释它为什么会“自己往下走”。

所以接下来这一段，我们开始拆执行机制。也就是它的 loop 怎么跑，结果怎么回流，runtime 怎么把每一轮真正装起来。
-->
