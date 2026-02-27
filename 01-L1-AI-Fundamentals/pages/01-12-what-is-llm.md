## 1.4 什么是（文本）大模型（LLM）？

> 用海量文本做预训练的“通用语言引擎”，核心目标是预测下一个 token。

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-sm leading-6">
  <div class="bg-white bg-opacity-60 rounded-2xl p-5 shadow-lg shadow-blue-300/20">
    <h3 class="text-lg font-semibold mb-2">它是什么</h3>
    <ul class="space-y-1">
      <li><strong>模型</strong>：一个神经网络（常见架构是 Transformer）。</li>
      <li><strong>训练</strong>：先在大量文本上“自监督预训练”，再做对齐/指令微调。</li>
      <li><strong>能力</strong>：理解与生成语言，进而支持总结、推理、写作、代码与结构化输出。</li>
    </ul>
    <div class="mt-3 text-xs text-slate-600">
      简化理解：<code>输入文本 → token 化 → 预测下一个 token → 拼回输出</code>
    </div>
  </div>

  <div class="bg-white bg-opacity-60 rounded-2xl p-5 shadow-lg shadow-blue-300/20">
    <h3 class="text-lg font-semibold mb-2">它不是什么</h3>
    <ul class="space-y-1">
      <li>不是“背答案的题库”，也不是写死规则的专家系统。</li>
      <li>不是一个具体产品（ChatGPT/Claude 等是产品形态，LLM 是底层能力）。</li>
      <li>不保证永远正确：会<strong>幻觉</strong>，需要约束、工具与知识来落地。</li>
    </ul>
    <div class="mt-3 text-xs text-slate-600">
      落地三件套：<strong>提示词约束</strong> + <strong>外部知识（RAG）</strong> + <strong>工具调用（Agent）</strong>
    </div>
  </div>
</div>

<!--
这一页只讲“定义与边界”，不要展开细节。

讲法：
1) LLM 是“语言引擎”，核心训练目标是预测下一个 token；
2) 规模化（数据/算力/流程）带来更强泛化与涌现；
3) 它不是产品本身，也不天然可信，所以要用 RAG/工具/约束来交付。
-->
