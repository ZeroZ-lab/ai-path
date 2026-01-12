---
layout: default
---

## 5.4.2 实战演练：搭建你的“法条工厂”

<div class="mt-4 flex gap-6 h-[400px]">
  <!-- Left: Dify Canvas Simulation -->
  <div class="flex-1 bg-slate-100 rounded-3xl p-6 border border-slate-200 relative overflow-hidden">
    <div class="absolute top-4 left-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dify Workflow Designer</div>
    <div class="mt-8 flex flex-col gap-4 items-center">
      <!-- Start Node -->
      <div class="w-40 bg-white border-2 border-slate-300 p-3 rounded-xl shadow-sm text-center">
        <div class="text-[10px] font-bold text-slate-400">START</div>
        <div class="text-xs font-bold text-slate-700">用户需求输入</div>
      </div>
      <div class="h-4 w-0.5 bg-slate-300"></div>
      <!-- LLM Node -->
      <div v-click class="w-40 bg-blue-50 border-2 border-blue-400 p-3 rounded-xl shadow-md text-center">
        <div class="text-[10px] font-bold text-blue-400">LLM</div>
        <div class="text-xs font-bold text-blue-900">意图提取 (JSON)</div>
      </div>
      <div v-click class="h-4 w-0.5 bg-blue-300"></div>
      <!-- Iteration Node -->
      <div v-click class="w-48 bg-purple-50 border-2 border-purple-400 p-4 rounded-xl shadow-md text-center relative">
        <div class="text-[10px] font-bold text-purple-400">ITERATION</div>
        <div class="text-xs font-bold text-purple-900">分段条款撰写</div>
        <!-- Recursive icon -->
        <div class="absolute -right-2 top-1/2 -translate-y-1/2 text-purple-400">🔄</div>
      </div>
      <div v-click class="h-4 w-0.5 bg-purple-300"></div>
      <!-- End Node -->
      <div v-click class="w-40 bg-slate-800 border-2 border-slate-900 p-3 rounded-xl shadow-sm text-center text-white">
        <div class="text-[10px] font-bold text-slate-500">END</div>
        <div class="text-xs font-bold">专业文书产出</div>
      </div>
    </div>
    <!-- Floating Tooltips -->
    <div v-click class="absolute top-20 right-4 bg-white/90 backdrop-blur p-2 rounded-lg border border-blue-100 shadow-xl text-[10px] max-w-[120px]">
      <span class="text-blue-600 font-bold">💡 技巧 1：</span><br>在 LLM 节点里设置 <strong>JSON Output</strong>，让大纲变成数组。
    </div>
    <div v-click class="absolute bottom-20 left-4 bg-white/90 backdrop-blur p-2 rounded-lg border border-purple-100 shadow-xl text-[10px] max-w-[120px]">
      <span class="text-purple-600 font-bold">💡 技巧 2：</span><br>迭代节点像<strong>“复印机”</strong>，把 10 个条款大纲印成 10 段法律文本。
    </div>
  </div>
  <!-- Right: Configuration Steps -->
  <div class="w-72 flex flex-col justify-center gap-4">
    <div v-click class="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
      <h4 class="text-sm font-bold text-slate-800 mb-1">第一步：格式化</h4>
      <p class="text-[11px] text-slate-500">将用户的碎语变成结构化 JSON：<br><code class="text-[9px] bg-slate-50 text-slate-400">{"partyA": "王大爷", "rent": 5000}</code></p>
    </div>
    <div v-click class="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
      <h4 class="text-sm font-bold text-slate-800 mb-1">第二步：配置循环</h4>
      <p class="text-[11px] text-slate-500">在 Iteration 节点中定义“变量并行”，让 AI 一次处理所有章节。</p>
    </div>
    <div v-click class="p-4 bg-slate-900 rounded-2xl shadow-lg border-t border-white/20">
      <h4 class="text-sm font-bold text-emerald-400 mb-1">🚀 马上动手</h4>
      <p class="text-[11px] text-slate-300">请同学们在 Dify 界面新建“工作流”，我们先连上这三个核心节点。</p>
    </div>
  </div>
</div>

<!--
现在，我们要把刚才的“解题思路”变成真正的“Dify 积木”。

1. **左侧是我们的设计画布**：
   - **Start**：接收用户那句“我要在北京租个房子”。
   - **LLM**：它不是直接写，而是充当“分拣员”。它把王大爷的名字、租金、租期挑出来，装进一个叫 JSON 的小盒子里。
   - **Iteration**：这是今天最核心的工具。它就像一个“流水线模具”，盒子里的每个条款（比如租金条款、违约条款）都会被它逐个精加工。

2. **右侧是我们的避坑指南**：
   - 大家在配置的时候，一定要勾选 LLM 的 JSON 模式，否则后面的 Iteration 读不懂数据。
   - 就像工厂里的传送带，如果零件尺寸（数据格式）不对，机器就会卡死。

准备好了吗？让我们进入 Dify 控制台，开始连线！
-->
