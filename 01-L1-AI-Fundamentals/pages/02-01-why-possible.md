## 2.1 为什么大模型可以做到？
<div class="h-full flex flex-col justify-center py-6">
<div class="text-slate-700 text-lg">同一个模型，为什么能<strong>跨任务</strong>、<strong>跨领域</strong>？</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm leading-6">
<div v-click class="bg-white/70 rounded-2xl p-4 shadow-lg shadow-blue-300/20 border border-slate-200">
<h3 class="text-base font-semibold mb-2 text-slate-900">1) 统一接口：语言</h3>
<p>很多任务都能被“说清楚”：</p>
<p class="text-slate-700">输入是文字描述或文本材料，输出也是文字（答案、摘要、步骤、代码）。</p>
</div>
<div v-click class="bg-white/70 rounded-2xl p-4 shadow-lg shadow-blue-300/20 border border-slate-200">
<h3 class="text-base font-semibold mb-2 text-slate-900">2) 统一目标：预测</h3>
<p>LLM 的核心训练目标很单一：</p>
<p class="text-slate-700">在给定上下文时，预测下一个 token 的概率分布。</p>
</div>
<div v-click class="bg-white/70 rounded-2xl p-4 shadow-lg shadow-blue-300/20 border border-slate-200">
<h3 class="text-base font-semibold mb-2 text-slate-900">3) 规模化：数据与算力</h3>
<p>当数据、算力、训练流程规模足够大时：</p>
<p class="text-slate-700">模型会学到更通用的语言规律，从而泛化到新任务。</p>
</div>
</div>
<div v-click class="mt-6 border border-slate-200 rounded-3xl bg-white/70 p-4 text-slate-800 shadow-lg text-base font-medium"><p>问题来了：如果“预测下一句话”，为什么会变成翻译、总结、写作，甚至写代码？</p></div>
<div v-click class="mt-3 text-xs text-slate-500">注：能做不等于可信（会错、会编）。交付需要验证与约束，常用手段是 RAG 和工具调用。</div>
</div>

<!--
2.1 的目标是把“跨领域”这个现象收束成一个可解释的问题，而不是堆案例。

讲法（1 分钟以内）：
1) 统一接口：很多任务都能转写成语言的输入输出；
2) 统一目标：训练时一直在做“预测下一个 token”；
3) 规模化：当数据/算力/流程规模足够大，就会出现泛化与涌现。

然后抛出承接 2.2 的问题：
“预测下一句话”这件事，为什么能产生这么多能力？
-->
