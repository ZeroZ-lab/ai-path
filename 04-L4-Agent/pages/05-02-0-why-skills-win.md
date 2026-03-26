---
layout: default
---

## 15 为什么现在占统治地位的是 Skills


<div class="mt-6 grid gap-5 md:grid-cols-2">
  <section class="rounded-[28px] border border-blue-100 bg-blue-50/80 p-5 shadow-[0_15px_35px_rgba(59,130,246,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Engineering Reason</div>
    <div class="mt-3 text-[1.3rem] font-bold text-slate-900">Skills 更贴近“怎么让 Agent 真正会做事”</div>
    <ul class="mt-4 space-y-3 text-[14px] leading-6 text-slate-700">
      <li><b>Skills 直接组织工作流</b>：它告诉模型什么时候用什么工具、按什么步骤做，而不是只解决接线问题。</li>
      <li><b>编写和分发成本低</b>：很多 Skill 本质上就是一个 `SKILL.md` 加少量辅助文件，远比起一个完整协议接入轻得多。</li>
      <li><b>对模型更友好</b>：Skill 天然就是写给模型看的“说明书”，它离模型决策层更近。</li>
      <li><b>MCP 解决的是能力接入</b>，但 Skill 解决的是“拿到能力以后，具体怎么把事情做成”。</li>
    </ul>
  </section>

  <section class="rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-5 shadow-[0_15px_35px_rgba(16,185,129,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Product Reason</div>
    <div class="mt-3 text-[1.3rem] font-bold text-slate-900">从产品上看，Skills 更容易形成“统治感”</div>
    <ul class="mt-4 space-y-3 text-[14px] leading-6 text-slate-700">
      <li><b>用户感知更强</b>：用户不会记住底层协议，但会记住“装了一个技能，它就会做 X 了”。</li>
      <li><b>生态传播更快</b>：Skill 更像插件商店里的能力包，天然适合社区分发、复制和复用。</li>
      <li><b>边界更清楚</b>：一个 Skill 往往对应一个明确任务或场景，比协议层更容易理解和购买。</li>
      <li><b>MCP 更像基础设施</b>，重要但更偏幕后；Skill 更像用户真正摸得到的能力界面。</li>
    </ul>
  </section>
</div>

<!--
逐字稿：
这一页我想补一个判断：为什么现在看起来最占统治地位的是 Skills，而不是 MCP 或别的技术？

先说工程原因。因为 Skill 离“让 Agent 真正会做事”更近。MCP 主要解决的是能力怎么接进来，但 Skill 解决的是接进来以后，模型按什么步骤、什么策略去完成任务。它更像工作流说明书，而不是接线协议。

再说产品原因。因为用户真正感知到的，不是底层协议，而是“装了一个技能，它就会做某件事”。Skill 更像插件商店里的能力包，更容易传播，也更容易形成心智。

所以更准确的理解不是“Skills 打败了 MCP”，而是今天这个阶段，MCP 更像基础设施，而 Skills 更像真正统治用户心智和工作流组织层的东西。
-->
