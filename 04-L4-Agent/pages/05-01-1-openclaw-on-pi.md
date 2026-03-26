---
layout: default
---

## 13 Pi：OpenClaw 的核心底层之一

<div class="mt-6 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
  <section class="rounded-[28px] border border-blue-100 bg-blue-50/80 p-5 shadow-[0_15px_35px_rgba(59,130,246,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">What The Docs Explicitly Say</div>
    <ul class="mt-4 space-y-2.5 text-[14px] leading-6 text-slate-700">
      <li>默认使用 <b>bundled Pi binary in RPC mode</b>。</li>
      <li>基础工具层直接提到 <b>pi’s codingTools</b>。</li>
      <li>模型、鉴权与架构文档里也直接出现 <b>ModelRegistry / AuthStorage / Pi Integration Architecture</b>。</li>
    </ul>
    <div class="mt-4 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-[13px] leading-5 text-slate-600">
      结论：OpenClaw 不是完全另起炉灶，而是在 Pi 之上包出自己的 gateway、channels、工具集和运行策略。
    </div>
  </section>

  <section class="rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-5 shadow-[0_15px_35px_rgba(16,185,129,0.10)]">
    <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">What OpenClaw Adds On Top</div>
    <div class="mt-4 space-y-2.5">
      <div class="rounded-2xl bg-white/80 px-4 py-3">
        <div class="text-[13px] font-bold text-slate-900">1. 消息与 Gateway 层</div>
        <div class="mt-1 text-[13px] leading-5 text-slate-600">把 WhatsApp、Telegram、Discord、iMessage 这些真实入口包起来。</div>
      </div>
      <div class="rounded-2xl bg-white/80 px-4 py-3">
        <div class="text-[13px] font-bold text-slate-900">2. 扩展工具与策略层</div>
        <div class="mt-1 text-[13px] leading-5 text-slate-600">往上再加 messaging、browser、cron、sandbox、policy filtering。</div>
      </div>
      <div class="rounded-2xl bg-white/80 px-4 py-3">
        <div class="text-[13px] font-bold text-slate-900">3. 产品化的 Agent 体验</div>
        <div class="mt-1 text-[13px] leading-5 text-slate-600">真正让它火的，是把这一层能力做成了可见、可传播的 OpenClaw 体验。</div>
      </div>
    </div>
  </section>
</div>

<div class="mt-5 rounded-[24px] border border-amber-200 bg-amber-50/80 px-5 py-4 text-[15px] leading-6 text-amber-900 shadow-[0_12px_30px_rgba(245,158,11,0.10)]">
  “OpenClaw 底下什么都是自己造”，而是：<b>它把 Pi 这一层 agent runtime，产品化成了一个更完整、可连接真实世界的系统。</b>
</div>

<!--
逐字稿：
这一页我想补一个很关键的工程事实：OpenClaw 不是从零造了整套 agent runtime。

官方文档里最直接的证据有几个。第一，它默认会使用 bundled Pi binary in RPC mode。第二，工具架构里直接写了底层是 pi 的 codingTools。第三，模型和鉴权层也明确写着用的是 pi 的 ModelRegistry 和 AuthStorage。甚至文档里专门有一节就叫 Pi Integration Architecture。

所以更准确地说，OpenClaw 不是把底层所有东西都重新造了一遍，而是在 Pi 之上，继续加 gateway、消息通道、浏览器、cron、canvas、sandbox、policy filtering 这些东西。

而真正让它火的，也不是“底层 loop 首次出现”，而是它把这一层能力产品化成了一个更完整、可接真实世界、可传播的体验。
-->
