---
layout: default
---

## 1.3 Dify 主要架构

<div class="grid gap-6 mt-8 md:grid-cols-3">
  <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-lg">
    <h3 class="text-lg font-semibold text-slate-900">零门槛界面化</h3>
    <p class="text-sm text-slate-600 leading-relaxed">
      可视化流程编排、节点拖拽、即点即配，大幅降低法务团队的入门门槛。
      现场演示时可展示 Workflow 画布、Prompt 编辑器等界面细节。
    </p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-lg">
    <h3 class="text-lg font-semibold text-slate-900">模型 & 知识库解耦</h3>
    <p class="text-sm text-slate-600 leading-relaxed">
      同一应用可自由切换 GPT、Claude、Gemini 等模型，并挂载多知识库，
      适配不同法律场景。强调“配置 vs. 代码”分离的灵活性。
    </p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-lg">
    <h3 class="text-lg font-semibold text-slate-900">部署与权限管理</h3>
    <p class="text-sm text-slate-600 leading-relaxed">
      支持云端、Docker、自建机房多种部署方式，
      可通过成员、角色、API Key 实现精细化权限控制与审计。
    </p>
  </div>
</div>

<div class="mt-10 flex flex-col gap-4 text-sm text-slate-600 leading-relaxed">
  <p>
    讲解建议按照“看得见的界面 → 可插拔的模型/知识 → 可控的后台”顺序，
    每个模块配一个真实截图或 Demo，以便 50 分钟时段里穿插互动与提问。
  </p>
  <p>
    结合下方架构图，可快速概述数据流向：输入层（App / API）→ 模型服务 →
    知识检索 → 工作流/工具节点 → 输出与监控。
  </p>
</div>

<div class="mt-8 flex justify-center">
  <img src="/imgs/dify-architecture.png" class="h-[400px] rounded-1xl shadow-2xl border border-slate-200" alt="Dify Architecture" />
</div>
