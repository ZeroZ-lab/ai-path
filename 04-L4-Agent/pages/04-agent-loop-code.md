---
layout: default
---

## 10 Agent Loop 的工程本质

<div class="grid grid-cols-[1fr_2fr] gap-10 mt-6 items-start">
  <div class="space-y-6">
    <div class="border-l-4 border-amber-500 pl-4 py-1">
      <div class="text-sm font-black text-slate-900">核心本质</div>
      <p class="text-[13px] text-slate-500 mt-1 leading-relaxed">
        Agent 不是魔法，而是一个带有 <span class="text-amber-600 font-bold">Feedback Loop</span> 的 While 循环。
      </p>
    </div>
    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
      <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">执行逻辑</div>
      <div class="space-y-4">
        <div class="flex items-start gap-3">
          <div class="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
          <div>
            <div class="text-[12px] text-slate-800 font-bold">LLM 决策</div>
            <div class="text-[10px] text-slate-400">输出具体的工具调用指令</div>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="mt-1 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold">2</div>
          <div>
            <div class="text-[12px] text-slate-800 font-bold">本地执行</div>
            <div><code class="text-[10px] bg-white border px-1 rounded text-slate-500 italic">invoke_tool()</code></div>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">3</div>
          <div>
            <div class="text-[12px] text-slate-800 font-bold">结果喂回</div>
            <div class="text-[10px] text-slate-400">将 Observation 追加进上下文</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rounded-3xl border border-slate-200 bg-white/90 shadow-[0_18px_40px_rgba(15,23,42,0.10)] overflow-hidden">
    <div class="px-5 py-3 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
      <div class="text-[11px] font-black uppercase tracking-[0.28em] text-slate-400">示意代码</div>
      <span class="text-[10px] text-slate-500 font-mono tracking-widest uppercase">agent_core.py</span>
    </div>
    <div class="p-5 bg-white/90 loop-code-dark">
```python
def run_agent(prompt):
    # 初始化上下文
    ctx = [{"role": "user", "content": prompt}]

    while True:
        # 1. 思考与决策
        msg = llm.chat(ctx, tools=my_tools)
        ctx.append(msg)

        if not msg.tool_calls:
            return msg.content  # ✅ 达成目标

        # 2. 依次执行请求的工具
        for call in msg.tool_calls:
            res = invoke(call.func, call.args)

            # 3. 最关键：将结果喂回 Loop
            ctx.append({"role": "tool", "content": res})
```
    </div>
  </div>
</div>

<style>
.loop-code-dark {
  max-height: 360px;
  overflow: auto;
}
</style>

<!--
逐字稿：
前一页我们先把 Agent Loop 讲成了直觉上的循环。

这一页我想把它再往工程层落一步：Agent 不是魔法，本质上就是一个带反馈回路的 while 循环。

第一步，模型基于当前上下文做决策，决定要不要调用工具。

第二步，如果要调用工具，系统就在本地真实执行这些动作。

第三步，最关键的一步来了：工具结果不会停在外面，而是会被重新追加进上下文，成为下一轮决策的输入。

所以 Agent 的关键不在于“会不会调用一次工具”，而在于工具结果能不能回流，形成持续判断和修正。

你可以把右边这段代码理解成整个 Agent 系统最朴素的工程骨架。
-->
