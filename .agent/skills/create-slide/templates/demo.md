---
layout: default
---

# Demo: Feature Name

<div class="mt-8 grid grid-cols-2 gap-8 h-[400px]">

  <!-- Left: Setup / Context -->
  <div class="space-y-4">
    <div class="text-lg font-bold text-slate-700">Scenario</div>
    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
       <p class="text-sm text-slate-600 leading-relaxed">
         Describe the context here. For example: "The user needs to extract specific clauses from a contract."
       </p>
    </div>
  </div>

  <!-- Right: Solution / Result -->
  <div class="space-y-4">
    <div class="text-lg font-bold text-rose-600">Dify Solution</div>
    <div v-click class="bg-white border-2 border-rose-400 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      <!-- Badge -->
      <div class="absolute top-0 right-0 bg-rose-500 text-white text-xs px-3 py-1 rounded-bl-xl font-bold">NODE CONFIG</div>
      
      <div class="mt-2 space-y-2">
         <div class="flex justify-between items-center border-b border-slate-100 pb-2">
            <span class="text-sm font-bold text-slate-700">Node Type</span>
            <span class="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">LLM</span>
         </div>
         <div>
            <span class="text-sm font-bold text-slate-700 block mb-1">Prompt</span>
            <div class="bg-slate-800 text-green-400 text-xs p-3 rounded font-mono">
               Extract key entities...
            </div>
         </div>
      </div>
    </div>
  </div>

</div>

<!--
Speaker Notes:
Walk through the demo scenario.
-->
