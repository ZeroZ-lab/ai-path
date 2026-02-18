## 4.15 进阶心法：当 AI 听不懂时——给例子

<div class="mt-6 grid gap-6 md:grid-cols-2 h-[75%] items-center">
  <!-- 左侧：痛点与原理 -->
  <div class="flex flex-col gap-6">
    <div class="rounded-2xl border-l-4 border-rose-400 bg-rose-50 p-5 shadow-sm">
      <h3 class="text-lg font-bold text-rose-900">😩 痛点</h3>
      <p class="mt-2 text-sm text-rose-800">
        “我把任务、角色、背景、约束都写了，为什么它写出来的文案还是没那味儿？”
      </p>
    </div>
    <div class="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-5 shadow-sm">
      <h3 class="text-lg font-bold text-emerald-900">💡 解决方案：Few-Shot（少样本提示）</h3>
      <p class="mt-2 text-sm text-emerald-800">
        不要只告诉它“要做什么”，直接给它看“<b>做好的样子</b>”。
        <br><br>
        <span class="font-bold">人类是“看例子”学习的动物，AI 也是。</span>
        给 1-3 个优质范例，效果提升 50% 以上。
      </p>
    </div>
  </div>

  <!-- 右侧：对比案例 -->
  <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl text-sm">
    <div class="mb-4 border-b border-slate-100 pb-3">
      <div class="text-xs font-bold uppercase tracking-widest text-slate-400">❌ 只有指令 (Zero-Shot)</div>
      <div class="mt-2 font-mono text-slate-600 bg-slate-50 p-2 rounded">
        任务：请把这句话改成小红书风格。<br>
        内容：“这款面霜保湿效果很好。”
      </div>
      <div class="mt-2 text-slate-500 italic">
        → AI：亲们！这款面霜真的绝绝子，保湿炸裂！(过于浮夸)
      </div>
    </div>
    <div>
      <div class="text-xs font-bold uppercase tracking-widest text-blue-500">✅ 指令 + 例子 (Few-Shot)</div>
      <div class="mt-2 font-mono text-slate-800 bg-blue-50 p-2 rounded border border-blue-100">
        任务：请把这句话改成小红书风格。<br>
        <span class="text-blue-600 font-bold">参考范例：</span><br>
        输入：“这家咖啡好喝。”<br>
        输出：“☕️ 在转角遇到一家宝藏咖啡店，入口顺滑，瞬间治愈周一。”<br>
        <br>
        内容：“这款面霜保湿效果很好。”
      </div>
      <div class="mt-2 text-slate-800 font-semibold">
        → AI：💧 换季救星！这款面霜的保湿力太感人了，涂完脸蛋软乎乎的。
      </div>
    </div>
  </div>
</div>

<!--
这一页，我们要讲提示词领域最高效的一招，叫“Few-Shot Prompting”，翻译成人话就是“给例子”。

大家刚才在练习的时候，可能会遇到一种情况：
你明明把“角色、背景、约束”都写得很完美了，但 AI 输出的内容，味道就是不对。
比如你让它写“小红书风格”，它就给你满屏的“绝绝子”和感叹号，看起来特别假。

为什么？因为语言是抽象的。
你心里的“幽默”，和 AI 语料库里的“幽默”，可能根本不是一回事。
你心里的“专业”，和 AI 以为的“掉书袋”，可能有很大偏差。

这时候，与其费劲去形容“我要什么样的风格”，
不如直接做一件事：**喂饭。**

把做好的成品，直接贴给它看。

大家看右边的对比。
上面是“只给指令”，AI 只能猜什么是“小红书风”，结果猜过头了。
下面是“给指令 + 给例子”。
你给它看了一个具体的例子：从“咖啡好喝”变成“宝藏店铺、瞬间治愈”。
AI 瞬间就懂了：
“哦~ 原来你要的不是感叹号，而是这种生活化的、有场景感的描述。”

于是，它再写“面霜”的时候，就能模仿这个调性，写出“换季救星、软乎乎”。

这就叫 **Few-Shot（少样本提示）**。
它是大模型微调原理在提示词层面的应用。
你在用例子，临时“微调”了模型的表现。

所以，记住这个进阶心法：
**当 AI 听不懂人话的时候，别解释了，直接上例子。**
-->
