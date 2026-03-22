---
layout: default
---

## 5.3 Workflow

<div v-click class="relative mt-8 h-[320px] w-full rounded-[32px] bg-slate-100 border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center transition-all duration-500">
    <!-- Background Conveyor Belt -->
    <div class="absolute inset-x-0 top-1/2 h-4 bg-slate-300 -translate-y-1/2"></div>
    <!-- Node 1: Input -->
    <div class="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group">
        <div class="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center text-3xl z-10 group-hover:scale-110 transition-transform">
            🪵
        </div>
        <div class="bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm">原料 (Input)</div>
    </div>
    <!-- Arrow 1 -->
    <div class="absolute left-[25%] top-1/2 -translate-y-1/2 text-slate-400 animate-pulse">
        <span class="i-carbon-arrow-right text-3xl"></span>
    </div>
    <!-- Node 2: Processing -->
    <div class="absolute left-[40%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group">
        <div class="w-20 h-20 bg-blue-100 rounded-2xl shadow-lg border border-blue-200 flex items-center justify-center text-3xl z-10 group-hover:rotate-12 transition-transform">
            ⚙️
        </div>
        <div class="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">加工 (LLM)</div>
    </div>
    <!-- Arrow 2 -->
    <div class="absolute left-[55%] top-1/2 -translate-y-1/2 text-slate-400 animate-pulse">
        <span class="i-carbon-arrow-right text-3xl"></span>
    </div>
    <!-- Node 3: Packaging -->
    <div class="absolute left-[70%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group">
        <div class="w-20 h-20 bg-purple-100 rounded-2xl shadow-lg border border-purple-200 flex items-center justify-center text-3xl z-10 group-hover:-rotate-12 transition-transform">
            🎁
        </div>
        <div class="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">包装 (Format)</div>
    </div>
    <!-- Node 4: Output -->
    <div class="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <div class="text-4xl drop-shadow-md">✨</div>
        <div class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">成品 (Output)</div>
    </div>
</div>

<div class="mt-6 text-center text-slate-500 text-sm">
    Workflow 将复杂的任务拆解成一个个简单的步骤，像工厂流水线一样自动化执行。
</div>

<!--
各位同行，如果说“变量”是合同里的填空，那么 Workflow 就是律所里的 **SOP (标准作业程序)**。

（点击 1）以前我们办案，全靠经验，每个人都有自己的“小作坊”。但现在，我们要把它变成一条标准化的“数字流水线”：

- **第一步：原料 (Input)**
  就像当事人递给你的一叠杂乱无章的原始证据材料，或者是他语无伦次的一段口述。
- **第二步：加工 (LLM)**
  这是应用的核心，相当于一个“虚拟律师”。他会对原料进行提炼，查法条、归纳风险点、给出初步建议。
- **第三步：包装 (Format)**
  法务工作讲究体面。AI 加工出来的结论，我们需要通过节点把它“穿上西装”，排版成美观的 Markdown 格式或者标准的 JSON 接口。
- **第四步：成品 (Output)**
  最终送到你办公桌前，或者是直接交付给客户的，就是一份高度专业、可以闭眼交付的法律文书。

**我们在 Dify 编排 Workflow，本质上是在用“程序员的效率”，把“律师的专业经验”固化成流水线上的每一个工位。**
-->
