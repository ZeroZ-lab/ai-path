---
layout: default
class: px-14
---

## 7.0 为什么“只靠大模型”不够？

<div class="mt-2 text-sm text-slate-500 mb-4">
  在企业落地中，直接使用通用大模型（LLM）通常会面临“四大硬伤”：
</div>

<div class="grid gap-4 md:grid-cols-2 items-stretch">

  <!-- 痛点 1：幻觉与准确性 -->
  <div v-click class="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-2xl">🤥</span>
      <h3 class="text-base font-bold text-rose-900">1. 幻觉与胡说 (Hallucination)</h3>
    </div>
    <p class="text-sm text-rose-900/80 leading-relaxed">
      模型本质是概率预测。当它不确定时，倾向于“一本正经地编造”事实，而在金融、法律、医疗等严肃场景下，这是不可接受的。
    </p>
  </div>

  <!-- 痛点 2：时效性与更新 -->
  <div v-click class="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-2xl">📅</span>
      <h3 class="text-base font-bold text-rose-900">2. 知识滞后 (Outdated)</h3>
    </div>
    <p class="text-sm text-rose-900/80 leading-relaxed">
      模型的知识截止于训练时刻。它不知道昨天新发的红头文件，也不知道公司今早刚改的考勤制度。微调模型更新频率低且昂贵。
    </p>
  </div>

  <!-- 痛点 3：私有数据与隐私 -->
  <div v-click class="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-2xl">🔒</span>
      <h3 class="text-base font-bold text-rose-900">3. 私有数据壁垒 (Privacy)</h3>
    </div>
    <p class="text-sm text-rose-900/80 leading-relaxed">
      企业的合同、财务报表、客户名单绝对不能上传到公有模型进行训练。通用模型缺乏企业内部的“独家上下文”。
    </p>
  </div>

  <!-- 痛点 4：上下文窗口 -->
  <div v-click class="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-2xl">📝</span>
      <h3 class="text-base font-bold text-rose-900">4. 窗口限制 (Context Limit)</h3>
    </div>
    <p class="text-sm text-rose-900/80 leading-relaxed">
虽然模型支持长文本，但一次性塞入整本《民法典》或几十兆的技术手册，不仅费用昂贵（Token Cost），而且检索精度会显著下降。
    </p>
  </div>

</div>

<!--
很多同学问："大模型已经这么强了，为什么我们还要搞 RAG、搞知识库？"

我们可以把大模型想象成一个**非常聪明、博学，但"没带书"进考场的学生。**

（点击 1）**幻觉（瞎蒙）**：他虽然聪明，但有些细节记不清。你问他公司具体的报销规定，他为了不交白卷，就开始**一本正经地瞎蒙**。在法律场景里，瞎蒙一个法条，后果不堪设想。

（点击 2）**知识滞后（课本过期）**：他脑袋里装的知识是半年前的"老教材"。你问他昨天新发的司法解释，他两眼一抹黑，还在拿旧法条回你。

（点击 3）**私有数据（没看过你的卷宗）**：他读过的书都是公开出版物。你公司的合同模板、内部规章、历史案例，他压根没机会读到。所以你问他"我们公司的违约金怎么算"，他只能泛泛而谈。

（点击 4）**窗口限制（翻书太贵）**：你说"那我现场把整本《民法典》塞给他看"？可以，但他翻一页就扣你一块钱（Token 费用），翻完一本书你可能破产了，而且他也未必能精准找到你要的那一条。

**所以，我们需要给这位"裸考学生"配一个智能图书馆——让他能像专业律师翻阅卷宗一样，又快、又准、又省钱。这就是 RAG 的价值。**
-->
