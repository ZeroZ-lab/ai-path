<script setup lang="ts">
import { ref } from 'vue'

const step = ref(0) // 0: Idle, 1: Search, 2: Expand

const nextStep = () => {
  if (step.value < 2) step.value++
  else step.value = 0
}

const parentText = `
**员工行为规范 (Parent Document)**

1.  **日常考勤**：员工应于每日 9:00 前打卡...
2.  **办公环境**：保持工位整洁，下班关闭电源...
3.  **【命中段落】数据安全**：严禁在未授权公网传输内部代码...
4.  **商务礼仪**：接待客户需着正装...
`
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-4 bg-transparent relative">
    
    <!-- Step Indicator (Minimal) -->
    <div class="absolute top-4 flex gap-2">
      <div class="h-1 w-12 rounded-full transition-colors duration-500" :class="step >= 0 ? 'bg-slate-800' : 'bg-slate-200'"></div>
      <div class="h-1 w-12 rounded-full transition-colors duration-500" :class="step >= 1 ? 'bg-blue-500' : 'bg-slate-200'"></div>
      <div class="h-1 w-12 rounded-full transition-colors duration-500" :class="step >= 2 ? 'bg-emerald-500' : 'bg-slate-200'"></div>
    </div>

    <!-- Main Visual Area -->
    <div class="relative w-full max-w-3xl h-64 flex items-center justify-center perspective-1000">

      <!-- The Parent Document (Background Layer) -->
      <div 
        class="absolute inset-0 bg-white border border-slate-200 shadow-xl rounded-2xl p-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center flex flex-col gap-2 overflow-hidden"
        :class="step === 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'"
      >
        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-100 pb-2">Retrieved Context (Full Document)</div>
        <div class="text-[13px] text-slate-300 leading-relaxed font-serif whitespace-pre-wrap blur-[1px]">
          {{ parentText }}
        </div>
        <!-- Highlighting the matching part inside the parent -->
        <div class="absolute top-[110px] left-6 right-6 h-8 bg-blue-50/50 border border-blue-200 rounded flex items-center px-2">
           <span class="text-[13px] font-bold text-blue-900">3. **【命中段落】数据安全**：严禁在未授权公网...</span>
        </div>
      </div>

      <!-- The Child Index Cards (Foreign Layer) -->
      <div 
        class="flex gap-4 transition-all duration-700 items-center transform"
        :class="step === 2 ? 'translate-y-24 scale-75 opacity-40' : 'translate-y-0 scale-100 opacity-100'"
      >
        <!-- Card 1 -->
        <div class="w-40 h-28 bg-white border border-slate-200 rounded-xl shadow-sm p-3 flex flex-col gap-2 relative transition-all duration-500" :class="step === 1 ? 'opacity-30 blur-[1px]' : ''">
          <div class="w-8 h-1 bg-slate-100 rounded-full"></div>
          <div class="flex-1 space-y-1">
            <div class="w-full h-1.5 bg-slate-50 rounded-full"></div>
            <div class="w-2/3 h-1.5 bg-slate-50 rounded-full"></div>
          </div>
          <div class="mt-auto text-[9px] text-slate-300 font-mono">ID: 001</div>
        </div>

        <!-- Card 2 (Target) -->
        <div 
          class="w-48 h-32 bg-white border-2 rounded-xl shadow-lg p-4 flex flex-col gap-2 relative transition-all duration-500 z-10"
          :class="step >= 1 ? 'border-blue-500 ring-4 ring-blue-50 scale-110' : 'border-slate-200'"
        >
          <div class="flex items-center justify-between">
             <div class="w-8 h-1 bg-blue-100 rounded-full"></div>
             <div v-if="step >= 1" class="text-[8px] font-black bg-blue-500 text-white px-1.5 rounded">MATCH</div>
          </div>
          <div class="flex-1">
            <p class="text-[10px] font-bold text-slate-700 leading-tight">
              3. **数据安全**：严禁在未授权公网传输...
            </p>
          </div>
          <div class="mt-auto flex justify-between items-end">
            <div class="text-[9px] text-slate-400 font-mono">ID: 002</div>
            <div class="text-[8px] text-slate-300">Child Chunk</div>
          </div>
          
          <!-- Connection Line to Parent (only visible in step 2) -->
           <div 
             class="absolute -top-12 left-1/2 w-0.5 bg-gradient-to-t from-blue-500 to-transparent transition-all duration-500" 
             :class="step === 2 ? 'h-12 opacity-100' : 'h-0 opacity-0'"
           ></div>
        </div>

        <!-- Card 3 -->
        <div class="w-40 h-28 bg-white border border-slate-200 rounded-xl shadow-sm p-3 flex flex-col gap-2 relative transition-all duration-500" :class="step === 1 ? 'opacity-30 blur-[1px]' : ''">
          <div class="w-8 h-1 bg-slate-100 rounded-full"></div>
          <div class="flex-1 space-y-1">
            <div class="w-full h-1.5 bg-slate-50 rounded-full"></div>
            <div class="w-2/3 h-1.5 bg-slate-50 rounded-full"></div>
          </div>
          <div class="mt-auto text-[9px] text-slate-300 font-mono">ID: 003</div>
        </div>
      </div>

    </div>

    <!-- Simple Instructions -->
    <div class="mt-12 text-center h-12">
      <p v-if="step === 0" class="text-sm font-bold text-slate-500">1. Indexing (索引): 只存储小切片</p>
      <p v-if="step === 1" class="text-sm font-bold text-blue-600">2. Searching (搜索): 精准命中子切片</p>
      <p v-if="step === 2" class="text-sm font-bold text-emerald-600">3. Parent Retrieval (溯源): 自动调取父文档</p>
    </div>

    <!-- Action Button -->
    <button 
      @click="nextStep"
      class="mt-4 px-8 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold tracking-widest active:scale-95 transition-transform shadow-lg hover:bg-black"
    >
      {{ step === 2 ? 'RESET' : 'NEXT STEP' }}
    </button>

  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>

