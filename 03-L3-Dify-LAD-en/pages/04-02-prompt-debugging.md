---
layout: default
---

## 2.2 Prompt Orchestration: Giving It a Soul

<div class="grid gap-6 md:grid-cols-2 mt-6 items-stretch">

<!-- Left: Configuration -->
<div v-click class="rounded-3xl border border-purple-100 bg-purple-50/80 p-5 shadow-sm flex flex-col transition-all duration-500">
    <div class="flex items-center gap-2 mb-3 pb-2 border-b border-purple-200">
        <span class="text-xl">⚙️</span>
        <h3 class="text-sm font-bold text-purple-900">Orchestrate</h3>
    </div>
    <div class="space-y-4 flex-1">
        <!-- System Prompt -->
        <div>
            <div class="text-[10px] font-bold text-purple-700 uppercase mb-1">Pre-prompt (Persona)</div>
            <div class="bg-white p-3 rounded-xl border border-purple-100 text-[10px] text-slate-600 font-mono leading-relaxed h-32 overflow-y-auto">
                You are an experienced writing assistant.<br>
                Your task is to help users write, polish, or translate text.<br>
                Please maintain a professional, objective tone and adjust your style according to user requirements (e.g., humorous, formal).
            </div>
        </div>
        <!-- Features -->
        <div>
            <div class="text-[10px] font-bold text-purple-700 uppercase mb-1">Features</div>
            <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-white border border-purple-200 rounded text-[9px] text-purple-600">✅ Opening Statement</span>
                <span class="px-2 py-1 bg-white border border-purple-200 rounded text-[9px] text-purple-600">✅ Next Steps Suggestion</span>
                <span class="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[9px] text-slate-400">Speech to Text</span>
            </div>
        </div>
    </div>
</div>

<!-- Right: Debugging -->
<div v-click class="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm flex flex-col transition-all duration-500">
    <div class="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-200">
        <span class="text-xl">🐞</span>
        <h3 class="text-sm font-bold text-emerald-900">Debug</h3>
    </div>
    <div class="flex-1 flex flex-col gap-3">
        <!-- Chat Bubble: AI Opening -->
        <div class="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-100 max-w-[90%]">
            <p class="text-[10px] text-slate-600">👋 Hello! I'm your smart writing assistant. How can I help you today?</p>
        </div>
        <!-- Chat Bubble: User -->
        <div class="self-end bg-emerald-600 p-3 rounded-2xl rounded-tr-none shadow-md max-w-[90%]">
            <p class="text-[10px] text-white">Help me write a social media post about "Friday afternoon".</p>
        </div>
        <!-- Chat Bubble: AI Response -->
        <div class="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-100 max-w-[90%]">
            <p class="text-[10px] text-slate-600">
                No problem! Try this:<br><br>
                "Friday sunshine tastes sweet ☀️. Close the laptop, leave worries behind, weekend mode: activated! 🚀 #FridayVibes"
            </p>
        </div>
    </div>
    <div class="mt-3 pt-3 border-t border-emerald-200 text-center">
        <span class="text-[10px] text-emerald-700 font-bold cursor-pointer hover:underline">Publish -></span>
    </div>
</div>

</div>

<!--
(Click 1) After entering the studio, the interface is split into left and right panels.
The left side is the **"Orchestration Area"**. The most important thing here is the Pre-prompt.
What you write here is the "soul" you inject into the AI.
For example, tell it: "You are a humorous writing assistant," and it will become witty.
You can also enable some enhanced features, like "Opening Statement" and "Next Steps Suggestions".

(Click 2) The right side is the **"Debug Area"**.
Whatever you change on the left, you can test immediately on the right.
For example, type "write a Friday post" and see what it generates.
If you're not satisfied, go back to the left, modify the Prompt, and test again.
Once satisfied, click "Publish" in the top right, and your application goes live!
-->
