## 4.5 提示词是编程接口
>  “提示词是一种可阅读、可组合、可复用的低代码语言。”

<div class="mt-8 overflow-hidden border border-slate-100 bg-white/90 text-xs text-slate-700 shadow-[0_20px_45px_rgba(15,23,42,0.1)] md:text-sm">
  <div class="grid grid-cols-5 bg-slate-50 text-[10px] font-semibold uppercase text-slate-500 md:grid-cols-5 md:text-xs">
    <div class="px-3 py-3 md:px-4">提示词作用</div>
    <div class="px-3 py-3 md:px-4">产品 PRD</div>
    <div class="px-3 py-3 md:px-4">法律 合同</div>
    <div class="px-3 py-3 md:px-4">管理 任务分配</div>
    <div class="px-3 py-3 md:px-4">财务 报表</div>
  </div>
  <div class="[&>div:nth-child(even)]:bg-slate-50/60">
    <div class="grid grid-cols-5 border-t border-slate-100">
      <div class="px-3 py-3 font-semibold text-slate-900 md:px-4">1. 任务定义</div>
      <div class="px-3 py-3 md:px-4">明确需求目标</div>
      <div class="px-3 py-3 md:px-4">明确合同目的</div>
      <div class="px-3 py-3 md:px-4">明确任务要做什么</div>
      <div class="px-3 py-3 md:px-4">明确报表/计算目的</div>
    </div>
    <div class="grid grid-cols-5 border-t border-slate-100">
      <div class="px-3 py-3 font-semibold text-slate-900 md:px-4">2. 设置角色</div>
      <div class="px-3 py-3 md:px-4">定义参与方 & 用户故事</div>
      <div class="px-3 py-3 md:px-4">定义双方义务与责任</div>
      <div class="px-3 py-3 md:px-4">指定执行者身份（谁来做）</div>
      <div class="px-3 py-3 md:px-4">定义责任人/科目角色</div>
    </div>
    <div class="grid grid-cols-5 border-t border-slate-100">
      <div class="px-3 py-3 font-semibold text-slate-900 md:px-4">3. 提供背景</div>
      <div class="px-3 py-3 md:px-4">用户故事</div>
      <div class="px-3 py-3 md:px-4">合同背景条款</div>
      <div class="px-3 py-3 md:px-4">补充背景信息（为什么做）</div>
      <div class="px-3 py-3 md:px-4">原始凭证 & 会计依据</div>
    </div>
    <div class="grid grid-cols-5 border-t border-slate-100">
      <div class="px-3 py-3 font-semibold text-slate-900 md:px-4">4. 规定格式</div>
      <div class="px-3 py-3 md:px-4">验收标准</div>
      <div class="px-3 py-3 md:px-4">交付标准</div>
      <div class="px-3 py-3 md:px-4">成果格式（表格/报告）</div>
      <div class="px-3 py-3 md:px-4">报表结构和输出字段</div>
    </div>
    <div class="grid grid-cols-5 border-t border-slate-100">
      <div class="px-3 py-3 font-semibold text-slate-900 md:px-4">5. 添加约束</div>
      <div class="px-3 py-3 md:px-4">功能边界</div>
      <div class="px-3 py-3 md:px-4">限制条款（不可行为）</div>
      <div class="px-3 py-3 md:px-4">工作范围限制 & 不得超范围</div>
      <div class="px-3 py-3 md:px-4">不得虚构数据 & 会计准则</div>
    </div>
    <div class="grid grid-cols-5 border-t border-slate-100">
      <div class="px-3 py-3 font-semibold text-slate-900 md:px-4">
        6. 控制风险
      </div>
      <div class="px-3 py-3 md:px-4">风险说明与边界判断</div>
      <div class="px-3 py-3 md:px-4">违约责任、免责条款</div>
      <div class="px-3 py-3 md:px-4">风险提醒</div>
      <div class="px-3 py-3 md:px-4">审核规则与一致性校验</div>
    </div>
  </div>
</div>

<!--
如果我们将大模型视为一个智能系统，那么 Prompt（提示词）就不再是简单的聊天内容，而是其对外暴露的 API。
只不过，这个 API 无需编写复杂的代码，而是以人类的自然语言作为交互界面。

接下来，请大家将目光聚焦到屏幕上的这张图表。

您可以这样向听众阐述：
这张图表并非旨在教授您如何撰写 Prompt，
而是想揭示一个事实——您在过去的工作经历中，其实早就已经以不同的名称和形式，撰写过无数的“提示词”了。

比如，左侧的第一列所代表的“产品 PRD”（产品需求文档）。
PRD 的本质功能是什么？
它并非是为了堆砌华丽的辞藻，而是为了将一件事情清晰、无歧义地表达出来：
明确要做什么、由谁来执行、为什么做、需要达到何种程度，以及哪些行为是被严格禁止的。

再看法律合同。
合同的起草，从来就不是凭借灵感爆发，它必然会包含：明确的目的、双方的角色与责任、详细的背景条款、清晰的权利义务边界，以及风险控制条款。

管理领域中的任务分配、财务领域中的各类报表，其内在的结构逻辑，实际上是完全一致的。

您可以顺着表格中的每一行逐一进行讲解，但请注意，不要仅仅是机械地念诵，而是要进行“转译”和“阐释”。

第一行，任务定义。
您可以这样强调：
任何一个有效的 Prompt，其首要任务就是回答一个核心问题——您到底希望 AI 完成什么？
这并非是“帮我一下”这种模糊请求，而是一个具体可执行的动作。

第二行，设置角色。
在这里，您可以特别强调：
角色设定的目的并非为了“有趣”或“好玩”，而是为了明确限定 AI 的能力边界和视角。
同样一句话，让 AI 以“产品经理”的身份来处理，与以“法律顾问”的身份来处理，其输出的结构、侧重点和语气风格，必然会截然不同。

第三行，提供背景。
这里您可以点出许多人的痛点：
很多人抱怨 AI 不懂业务，但实际上，您的业务背景信息往往都隐藏在您自己的大脑中，并未明确告知 AI。
背景信息并非冗余的废话，它是模型理解“为什么要这么做”的前提和基础。

第四行，规定格式。
这是确保 AI 输出“可用性”的关键一步。
如果不规定输出格式，AI 可能只会给出一段普通文本；
但如果您明确了格式，例如要求表格或 JSON，AI 才会开始像一个结构化的系统一样工作。

第五行，添加约束。
在这里，您可以强调一个非常重要的观点：
设定约束，并非是为了限制模型的能力，而是为了更好地“保护您自己”。
例如，不允许编造信息、不得超范围执行、不得触碰某些敏感内容，这本质上都是为了规避潜在的风险。

第六行，控制风险。
您可以这样提示听众：
一个真正成熟且实用的 Prompt，在设计之初，一定会预设并考虑“如果 AI 出了错怎么办”。
这一步的思考，许多人在日常使用中往往完全忽视，但在企业级应用中，却是至关重要的一环。

最后，您可以给出一个总结：

所以您会发现，撰写 Prompt 并非一项全新的技能。
它仅仅是将您在过去编写 PRD、合同、流程文档或财务报表时所习得的那套“工程化表达”和“结构化思维”，
首次直接应用于与智能系统进行交互。

当您以“接口设计”的心态去构建提示词时，
AI 就不再像一个行为不稳定的聊天对象，
而开始演变成一个可以被反复调用、结果稳定可预期的 (“工具”)。

这正是我们为何强调：
提示词，是低代码时代背景下，最为重要的一种“接口语言”。

当这一页讲解完毕，听众的心态应该已经从过去的“如何讨好 AI”，
彻底转变为“我该如何清晰地设计和定义我的任务”。
-->