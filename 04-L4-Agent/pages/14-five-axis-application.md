---
layout: default
---

## 24 用同一套 5 根轴，现场套一次 OpenClaw / Claude Code / Codex

<div class="mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-md">
  <table class="w-full border-collapse bg-white text-sm">
    <thead class="bg-slate-900 text-white">
      <tr>
        <th class="p-4 text-left">判断轴</th>
        <th class="p-4 text-left">OpenClaw</th>
        <th class="p-4 text-left">Claude Code</th>
        <th class="p-4 text-left">Codex</th>
      </tr>
    </thead>
    <tbody class="text-slate-700">
      <tr class="border-t border-slate-100">
        <td class="p-4 font-bold">运行位置</td>
        <td class="p-4">本地优先、长期 runtime</td>
        <td class="p-4">开发者终端 / 仓库工作区</td>
        <td class="p-4">以代码任务代理平台为中心</td>
      </tr>
      <tr class="border-t border-slate-100 bg-slate-50">
        <td class="p-4 font-bold">能力边界</td>
        <td class="p-4">真实工具链、消息、文件、浏览器、记忆</td>
        <td class="p-4">围绕代码、终端、测试和补丁协作</td>
        <td class="p-4">围绕代码任务求解、执行和交付闭环</td>
      </tr>
      <tr class="border-t border-slate-100">
        <td class="p-4 font-bold">自主程度</td>
        <td class="p-4">高，强调多步连续执行</td>
        <td class="p-4">中高，通常围绕开发者协作节奏</td>
        <td class="p-4">高，但聚焦在代码任务闭环</td>
      </tr>
      <tr class="border-t border-slate-100 bg-slate-50">
        <td class="p-4 font-bold">状态与记忆</td>
        <td class="p-4">长期上下文、记忆、控制面更重</td>
        <td class="p-4">项目上下文和会话协作更重</td>
        <td class="p-4">任务上下文与执行结果更重</td>
      </tr>
      <tr class="border-t border-slate-100">
        <td class="p-4 font-bold">风险控制</td>
        <td class="p-4">权限、沙盒、审计是系统级问题</td>
        <td class="p-4">更像开发工作流内的权限与执行边界</td>
        <td class="p-4">更像代码代理平台的任务边界与执行治理</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-8 rounded-3xl border border-blue-100 bg-blue-50/80 p-6 shadow-md">
  <div class="text-sm font-bold text-blue-900">这页的作用</div>
  <p class="mt-3 text-sm text-slate-600 leading-6">前面那 5 根轴不是抽象口号。真正的用法是：以后你拿到任何一个新 Agent 产品，都能像这样逐轴套进去。只要你能逐轴说清，它就不再只是一个“看起来很强的 demo”，而是一个可以被定位、被比较、被判断的系统。</p>
</div>
