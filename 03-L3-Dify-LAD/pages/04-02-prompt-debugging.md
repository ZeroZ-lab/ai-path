---
layout: default
---

## 4.2 提示词编排：赋予灵魂

<div class="grid gap-6 md:grid-cols-2 mt-6 items-stretch">

<!-- Left: Configuration -->
<div class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm flex flex-col">
    <div class="flex items-center gap-2 mb-3 pb-2 border-b border-purple-200">
        <span class="text-xl">⚙️</span>
        <h3 class="text-sm font-bold text-purple-900">编排 (Orchestrate)</h3>
    </div>
    <div class="space-y-4 flex-1">
        <!-- System Prompt -->
        <div>
            <div class="text-[10px] font-bold text-purple-700 uppercase mb-1">Pre-prompt (人设)</div>
            <div class="bg-white p-3 rounded-xl border border-purple-100 text-[10px] text-slate-600 font-mono leading-relaxed h-32 overflow-y-auto">
                你是一个经验丰富的写作助手。<br>
                你的任务是帮助用户撰写、润色或翻译文本。<br>
                请保持语气专业、客观，并根据用户要求调整风格（如幽默、正式）。
            </div>
        </div>
        <!-- Features -->
        <div>
            <div class="text-[10px] font-bold text-purple-700 uppercase mb-1">Features (功能)</div>
            <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-white border border-purple-200 rounded text-[9px] text-purple-600">✅ 开场白 (Opening)</span>
                <span class="px-2 py-1 bg-white border border-purple-200 rounded text-[9px] text-purple-600">✅ 下一步建议</span>
                <span class="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[9px] text-slate-400">语音转文字</span>
            </div>
        </div>
    </div>
</div>

<!-- Right: Debugging -->
<div class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm flex flex-col">
    <div class="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-200">
        <span class="text-xl">🐞</span>
        <h3 class="text-sm font-bold text-emerald-900">调试 (Debug)</h3>
    </div>
    <div class="flex-1 flex flex-col gap-3">
        <!-- Chat Bubble: AI Opening -->
        <div class="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-100 max-w-[90%]">
            <p class="text-[10px] text-slate-600">👋 你好！我是你的智能写作助手。有什么可以帮你的吗？</p>
        </div>
        <!-- Chat Bubble: User -->
        <div class="self-end bg-emerald-600 p-3 rounded-2xl rounded-tr-none shadow-md max-w-[90%]">
            <p class="text-[10px] text-white">帮我写一段关于“周五下午”的朋友圈文案。</p>
        </div>
        <!-- Chat Bubble: AI Response -->
        <div class="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-100 max-w-[90%]">
            <p class="text-[10px] text-slate-600">
                没问题！试试这个：<br><br>
                “周五的阳光都是甜的 ☀️。合上电脑，把烦恼抛在脑后，周末模式：启动！🚀 #FridayVibes”
            </p>
        </div>
    </div>
    <div class="mt-3 pt-3 border-t border-emerald-200 text-center">
        <span class="text-[10px] text-emerald-700 font-bold cursor-pointer hover:underline">发布 (Publish) -></span>
    </div>
</div>

</div>
