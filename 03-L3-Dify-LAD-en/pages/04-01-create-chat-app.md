---
layout: default
---

## 2.1 Create Application: Start Simple

<div class="grid gap-8 md:grid-cols-[1.2fr_1fr] mt-8 items-center">

<!-- Left: The Creation Modal Visual -->
<div v-click class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl relative overflow-hidden transition-all duration-500">
    <div class="absolute top-0 left-0 w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
        <div class="w-3 h-3 rounded-full bg-red-400"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div class="mt-6 space-y-4">
        <div>
            <label class="text-[10px] font-bold text-slate-500 uppercase">App Name</label>
            <div class="mt-1 p-2 bg-slate-50 rounded border border-slate-200 text-sm text-slate-800">
                ✍️ Smart Writing Assistant
            </div>
        </div>
        <div>
            <label class="text-[10px] font-bold text-slate-500 uppercase">App Type</label>
            <div class="flex gap-2 mt-1">
                <div class="flex-1 p-3 bg-blue-50 border-2 border-blue-500 rounded-xl text-center relative cursor-pointer">
                    <div class="text-2xl mb-1">💬</div>
                    <div class="text-[10px] font-bold text-blue-700">Chat App</div>
                    <div class="absolute -top-2 -right-2 bg-blue-600 text-white text-[8px] px-1.5 py-0.5 rounded-full">Selected</div>
                </div>
                <div class="flex-1 p-3 bg-white border border-slate-200 rounded-xl text-center opacity-50">
                    <div class="text-2xl mb-1">🤖</div>
                    <div class="text-[10px] font-bold text-slate-600">Agent</div>
                </div>
            </div>
        </div>
        <div>
            <label class="text-[10px] font-bold text-slate-500 uppercase">Orchestration</label>
            <div class="flex gap-2 mt-1">
                <div class="flex-1 p-2 bg-blue-50 border-2 border-blue-500 rounded-lg text-center text-[10px] font-bold text-blue-700">
                    Basic (Basic Orchestration)
                </div>
                <div class="flex-1 p-2 bg-white border border-slate-200 rounded-lg text-center text-[10px] text-slate-400">
                    Workflow
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Right: Steps -->
<div class="space-y-6">
    <div v-click class="flex gap-4 transition-all duration-500">
        <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">Create Blank Application</h4>
            <p class="text-xs text-slate-500 mt-1">Click the "Create from Blank" button on the homepage.</p>
        </div>
    </div>
    <div v-click class="flex gap-4 transition-all duration-500">
        <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
        <div>
            <h4 class="font-bold text-blue-700 text-sm">Select Type: Chat App</h4>
            <p class="text-xs text-slate-600 mt-1">
                We want to build a continuous conversation assistant, not a one-time task.<br>
                <strong>Note:</strong> Choose <strong>Basic</strong> for orchestration method—we haven't gotten to Workflow yet.
            </p>
        </div>
    </div>
    <div v-click class="flex gap-4 transition-all duration-500">
        <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
        <div>
            <h4 class="font-bold text-slate-800 text-sm">Name & Icon</h4>
            <p class="text-xs text-slate-500 mt-1">Give it a good name, like "Magic Writer".</p>
        </div>
    </div>
</div>

</div>

<!--
(Click 1) Return to the Dify homepage and click the blue "Create Application" button.
We'll see this modal.

(Click 2) There are two key choices here:
First, choose **Chat App** for application type (chat assistant).
Second, choose **Basic** for orchestration method (basic orchestration).
We'll leave Workflow for the afternoon—let's use Basic this morning to familiarize ourselves with the interface.

(Click 3) Give it a name, choose an icon, click create, and you'll have your first AI application.
(Click 4) After filling it out, click Create, and we'll enter the "studio".
-->
