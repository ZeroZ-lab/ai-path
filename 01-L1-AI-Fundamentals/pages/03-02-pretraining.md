## 3.2 阶段一：预训练（理解世界）

<div class="mt-4 rounded-3xl border border-blue-200 bg-blue-50/80 px-5 py-4 text-center text-base font-semibold text-blue-900">
  预训练解决的是“模型如何读懂世界语言与知识”的问题。
</div>

<div class="mt-8 grid gap-6 md:grid-cols-3">
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">① 它做了什么？</div>
    <div class="mt-3 text-xl font-bold text-slate-900">读海量文本，预测下一个词</div>
    <p class="mt-2 text-sm text-slate-600">像在吸收整个人类互联网，靠概率最大化不断逼近真实语言分布。</p>
  </section>
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">② 为什么这样能形成“理解”？</div>
    <div class="mt-3 text-sm font-semibold text-slate-700">每次预测都要判断：语言结构、概念关联、世界知识、逻辑模式</div>
    <p class="mt-2 text-sm text-slate-600">不断试错让模型掌握语言与世界的隐含规律。</p>
  </section>
  <section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">③ 它最终获得了什么能力？</div>
    <ul class="mt-3 space-y-2 text-sm font-semibold text-slate-700">
      <li>理解能力</li>
      <li>语言能力</li>
      <li>基础推断能力</li>
    </ul>
  </section>
</div>

<div class="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 px-4 py-3 text-center text-base font-semibold text-blue-900">
  预训练给了模型“理解世界”的底色。
</div>

<!--
您可以这样来理解——
在预训练阶段，大模型还不能被称为一个“智能助理”，也不是一个单纯的“工具”，它更像一个正在如饥似渴、疯狂阅读整个世界的学生。

在这个阶段，它所做的唯一一件事情是：
在海量的文本数据中，持续不断地预测下一个最可能出现的词语。

这听起来似乎非常简单，甚至有些“笨拙”，但其关键在于训练的规模和方式。
模型所阅读的并非是教科书，而是几乎达到了整个互联网量级的语言、知识、叙事结构、逻辑模式以及人类的经验沉淀。

核心要点并非是让模型“记住标准答案”，
而是迫使它在每一次预测时，都需要隐含地进行判断：
当前这句话的语法结构是什么？
这些概念通常如何一起出现？
在现实世界中，事物的发展一般遵循怎样的规律？
人类在这种语境下，通常会怎么说、怎么推理？

当这个极其庞大且复杂的过程被重复了数万亿次之后，
模型逐渐学习到的就不再是孤立的句子，
而是语言背后深层的结构以及世界运行的统计学规律。

因此，这一页希望传达的第一个关键点是：
预训练并非仅仅是知识的灌输，它更是在模型内部塑造一套完整的“世界模型”。

第二个重点，是解释为什么“预测下一个词”会产生对世界的“理解”。
因为要实现准确的预测，模型就必须在其内部构建一套对世界的抽象表征：
包括人物与事件之间的关系
因果逻辑与时间顺序
常识与反常识的区分
以及逻辑上的合理性与非合理性

这种“理解”并非通过显式的教导而获得，而是被反复的预测任务所“逼迫”出来的。
如果你不能真正理解语境和内容，就无法进行准确的预测；而预测不准确，模型的内部损失就会增加。

第三个重点，是预训练阶段真正为模型带来的能力边界。
在这一阶段，模型获得的是三种基础且核心的底层能力：
对自然语言的深度理解能力
对概念之间复杂关系的精确把握
以及最基本的推断和联想能力

但在这里需要强调一点：
此时的模型，还不能完全“按照您的具体指令去办事”。
它仅仅是“懂得了世界”，但尚未学会“听从指令”。

所以，这一页的收束句非常重要：
预训练阶段，为模型奠定了“理解世界的深厚底色”。

随后的微调和对齐阶段，都将是在这块底色之上，进一步教导模型如何高效工作、如何遵守规则，以及如何在行为上更像人类。

如果您在讲解这一页时，能让听众领会到以下这句话，那么就算是非常成功了：

大模型之所以表现得如此智能，并非因为它被直接灌输了大量的答案，
而是因为它首先学会了我们所处这个世界，其运行的大致规律和模式。
-->
