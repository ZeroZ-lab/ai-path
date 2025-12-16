## 4.3 为什么 AI 总是“猜”不对？
<div class="mt-4 grid md:grid-cols-2 gap-16 items-center h-[80%]">
<!-- 视窗图示容器 -->
<div class="relative aspect-square ml-8 mt-6">
<!-- 顶部标签 -->
<div class="absolute -top-8 left-0 w-full flex text-sm font-bold text-slate-500">
<div class="flex-1 text-center">AI 知道</div>
<div class="flex-1 text-center">AI 不知道</div>
</div>
<!-- 左侧标签：使用绝对定位避免重叠 -->
<div class="absolute -left-8 top-0 h-full w-8 text-sm font-bold text-slate-500">
<div class="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">你 知道</div>
<div class="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">你 不知道</div>
</div>
<!-- 2x2 矩阵 -->
<div class="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full text-slate-800">
<!-- 左上：开放区 (AI知 + 你知) -->
<div class="bg-emerald-100/80 rounded-2xl flex flex-col items-center justify-center p-4 text-center border-2 border-emerald-200 shadow-sm">
<div class="text-xl font-bold text-emerald-800 mb-2">开放区</div>
<div class="text-xs text-emerald-700 font-medium leading-relaxed">提示词内容<br>明确的指令<br>共识知识</div>
</div>
<!-- 右上：隐秘区 (AI不知 + 你知) -> 这是 Prompt 重点 -->
<div class="bg-amber-100/90 rounded-2xl flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-amber-400 relative shadow-md">
<div class="text-xl font-bold text-amber-800 mb-2">隐秘区</div>
<div class="text-xs text-amber-700 font-bold leading-relaxed">你的真实意图<br>未说的背景<br>默认的假设</div>
</div>
<!-- 左下：盲目区 (AI知 + 你不知) -->
<div class="bg-slate-100 rounded-2xl flex flex-col items-center justify-center p-4 text-center opacity-60">
<div class="text-lg font-bold text-slate-600 mb-2">盲目区</div>
<div class="text-xs text-slate-500 leading-relaxed">AI 的黑盒能力<br>潜在的幻觉</div>
</div>
<!-- 右下：未知区 (AI不知 + 你不知) -->
<div class="bg-slate-100 rounded-2xl flex flex-col items-center justify-center p-4 text-center opacity-60">
<div class="text-lg font-bold text-slate-600 mb-2">未知区</div>
<div class="text-xs text-slate-500 leading-relaxed">未探索的领域<br>随机性结果</div>
</div>
</div>
<!-- 位于 2x2 矩阵的中心 - 使用 flex inset-0 确保完美居中 -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div class="text-7xl animate-bounce drop-shadow-lg">💡</div>
</div>
</div>
<!-- 说明文字 -->
<div class="flex flex-col justify-center gap-8 pr-4">
<div class="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-l-4 border-amber-400">
<h4 class="text-md font-bold text-amber-900 mb-3 flex items-center gap-2"><div class="i-carbon-warning-filled text-amber-500 text-xl"/>问题根源：隐秘区过大</h4>
<p class="text-sm text-slate-600 leading-7">我们常以为 AI "应该懂"，但实际上你的背景、目的、偏好都藏在<b>隐秘区</b>。对 AI 来说，如果不说出来，它们就不存在。</p>
</div>
<div class="rounded-2xl bg-blue-50/80 p-4 shadow-[0_8px_30px_rgba(37,99,235,0.12)] border-l-4 border-blue-500">
<h4 class="text-md font-bold text-blue-900 mb-3 flex items-center gap-2"><div class="i-carbon-idea text-blue-600 text-xl"/>提示词的核心作用</h4>
<p class="text-sm text-blue-800 leading-7">写 Prompt 的过程，就是不断<b>压缩隐秘区，扩大开放区</b>的过程。<br><br><span class="inline-block font-bold bg-white/60 px-2 py-1 rounded text-blue-900 mt-1">Prompting = Moving context from Hidden to Open.</span></p>
</div>
</div>
</div>

<!--
在绝大多数情况下，当我们觉得 AI 表现不尽如人意时，问题往往不在于模型本身，
而在于我们与 AI 之间的“信息分布结构”存在偏差。

请大家将目光投向左侧的图表，这是一个心理学领域非常经典的沟通模型，被称为“乔哈里视窗”。
它最初的用途是解释人际沟通中为何会产生误解，但将其应用于人机交互，尤其是与 AI 的沟通，却呈现出惊人的契合度。

在这张图里，最关键的区域并非那些复杂的术语，而是中间的这一块：隐秘区。
那么，“隐秘区”中究竟包含了哪些信息呢？
它承载的是您内心深处那些“自认为无需言明”的前提、您的真实目的、特定的使用场景、默认的假设，以及您真正关注的核心要点。

我们常常会下意识地觉得：“这些 AI 应该能够理解吧。”
然而，对于大模型而言，如果您没有明确地将其表达出来，那么这些信息对它来说就是不存在的。

因此，当 AI 给出一个“表面看起来合理，但实际上却与您的预期不符”的答案时，
它并非是在随意猜测，而是在一个信息严重不完整的前提下，尽其所能地做出了它认为最合理的推断。

这正是我们为何强调：AI 总是“猜不对”，而非“算不对”。

于是，右侧的这段话就显得至关重要：
撰写 Prompt 的过程，其本质并非是旨在让 AI 变得更聪明，
而是一个持续不断地将信息从“隐秘区”中挖掘出来，并将其搬运到“开放区”的过程。

您对 Prompt 的描述越明确，隐秘区所涵盖的信息就越少；
隐秘区越小，AI 的行为表现就越稳定、越可预期。

这一页的核心结论，可以用一句话来概括：
AI 表现出的不稳定性和不确定性，几乎永远不是因为您使用的 Prompt 不够“高级”或复杂，
而往往是因为您提供的信息还不够“完整”和充分。

在下一页中，我们将顺着这个结论，进一步详细阐述：
究竟哪些类型的信息，是我们在与 AI 沟通时，必须被明确地放置到“开放区”的关键要素。
-->
