---
layout: default
---

## 3.2 Plugin Architecture: Unlimited Extensibility

<div class="grid gap-8 md:grid-cols-2 mt-8 items-center">

<!-- Concept: Everything is a Plugin -->
<div v-click class="rounded-[32px] border border-violet-100 bg-violet-50/80 p-8 shadow-lg flex flex-col justify-center text-center relative overflow-hidden h-[360px] transition-all duration-500">
    <div class="relative z-10">
        <div class="text-xs font-bold uppercase tracking-[0.3em] text-violet-500 mb-4">Core Philosophy</div>
        <h3 class="text-2xl font-bold text-violet-900 mb-6">Everything is a Plugin</h3>
        <div class="flex justify-center gap-4 mb-8">
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-violet-100 flex flex-col items-center gap-2 w-24">
                <span class="text-2xl">🧠</span>
                <span class="text-[10px] font-bold text-slate-600">Model</span>
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-violet-100 flex flex-col items-center gap-2 w-24">
                <span class="text-2xl">🛠️</span>
                <span class="text-[10px] font-bold text-slate-600">Tool</span>
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-violet-100 flex flex-col items-center gap-2 w-24">
                <span class="text-2xl">🔌</span>
                <span class="text-[10px] font-bold text-slate-600">Extension</span>
            </div>
        </div>
        <p class="text-sm text-violet-800 leading-relaxed px-4">
            Dify doesn't hardcode functionality—it dynamically loads through the plugin marketplace.<br>
            Whatever capability you need, just install the corresponding plugin.
        </p>
    </div>
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>

<!-- Action: How to Install -->
<div v-click class="flex flex-col gap-4 transition-all duration-500">
    <!-- Step 1 -->
    <div class="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-center shadow-sm hover:border-violet-300 transition-colors">
        <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">1</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">Enter Plugin Marketplace</h4>
            <p class="text-xs text-slate-500 mt-1">Click avatar in top-right > Plugin Marketplace</p>
        </div>
    </div>
    <!-- Step 2 -->
    <div class="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-center shadow-sm hover:border-violet-300 transition-colors">
        <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">2</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">Discover & Install</h4>
            <p class="text-xs text-slate-500 mt-1">Search "DeepSeek" or "Google Search", one-click Install.</p>
        </div>
    </div>
    <!-- Step 3 -->
    <div class="rounded-2xl border border-slate-200 bg-white p-5 flex gap-4 items-center shadow-sm hover:border-violet-300 transition-colors">
        <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">3</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">Authorize & Use</h4>
            <p class="text-xs text-slate-500 mt-1">Configure necessary API Keys, then drag and drop in your workflow.</p>
        </div>
    </div>

</div>

</div>

<!--
(Click 1) Besides models, another core philosophy of Dify is "Everything is a Plugin."
Before, if we wanted to use Google Search, we had to write code to call the API. Now, it's just a "plugin."
Models are plugins, tools are plugins, extension features are also plugins.

(Click 2) Using it is as simple as installing an app on your phone:
Enter the plugin marketplace, search for what you need (like Google Search), click install, fill in the Key, done.
Once installed, you can directly drag and drop it in your workflow.
-->
