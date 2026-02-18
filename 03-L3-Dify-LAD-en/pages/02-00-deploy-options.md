---
layout: default
---

## 2.2 Option B: Self-Hosted Deployment — Complete Data Control

<div class="grid gap-8 md:grid-cols-[1fr_1.2fr] mt-6 items-start">

<!-- Left: Why Self-Host -->
<div class="space-y-4">
    <div class="rounded-2xl bg-amber-50 border border-amber-200 p-4">
        <h3 class="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
            <span class="text-lg">🔒</span> Why Do Enterprises Self-Host?
        </h3>
        <ul class="text-xs text-amber-800/80 space-y-2 list-disc pl-4">
            <li><strong>Data Sovereignty</strong>: Contracts, code, salary data never leave the company intranet.</li>
            <li><strong>Intranet Integration</strong>: Direct connection to internal OA, ERP databases.</li>
        </ul>
    </div>
    <div class="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
        <div class="text-[10px] font-bold text-slate-400 uppercase mb-2">Technical Requirements</div>
        <div class="flex items-center justify-between text-xs text-slate-600">
            <span>Docker</span>
            <span class="font-mono bg-white px-2 rounded border">Required</span>
        </div>
    </div>
</div>

<!-- Right: Installation Steps -->
<div class="space-y-4">
    <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
        <span class="i-carbon-terminal text-emerald-500"></span> 3 Commands to Deploy (For IT)
    </h3>
    <div class="relative group">
        <div class="absolute -left-3 top-0 bottom-0 w-0.5 bg-slate-200"></div>
        <!-- Step 1 -->
        <div v-click class="ml-4 mb-6 transition-all duration-500">
            <div class="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Step 1: Clone Repo</div>
            <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 shadow-lg">
                git clone https://github.com/langgenius/dify.git
            </div>
        </div>
        <!-- Step 2 -->
        <div v-click class="ml-4 mb-6 transition-all duration-500">
            <div class="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Step 2: Enter Directory</div>
            <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 shadow-lg">
                cd dify/docker
            </div>
        </div>
        <!-- Step 3 -->
        <div v-click class="ml-4 transition-all duration-500">
            <div class="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Step 3: Start Up</div>
            <div class="bg-slate-900 rounded-lg p-3 text-[10px] font-mono text-emerald-400 shadow-lg flex justify-between items-center">
                <span>docker compose up -d</span>
                <span class="text-slate-500 text-[9px] ml-2"># One-click start</span>
            </div>
        </div>
    </div>
</div>

</div>

<!--
Of course, if your company has extremely high data security requirements (like law firms, banks), or needs to connect to internal databases,
then **Option B: Self-Hosted Deployment** is the better choice.

(Click 1-3) Although it sounds "hardcore," Dify has actually made it very standardized.
Just send this page to your company's IT operations colleagues, have them run these three commands, and they can set up a Dify instance on your company's intranet in 10 minutes.
-->
