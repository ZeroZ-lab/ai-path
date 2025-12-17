<script setup lang="ts">
import { ref } from 'vue'

const isRunning = ref(false)
const activeNode = ref(0)

const team = [
  { role: 'Product Manager', task: '需求分析', humanIcon: '👩‍💼', modelIcon: '🤖', modelName: 'GPT-4o', skill: '擅长逻辑与规划' },
  { role: 'Copywriter', task: '文案撰写', humanIcon: '👨‍🎨', modelIcon: '📝', modelName: 'Claude 3.5', skill: '擅长文笔与创意' },
  { role: 'Risk Control', task: '合规审核', humanIcon: '👮‍♂️', modelIcon: '🛡️', modelName: 'DeepSeek', skill: '擅长风控与逻辑' },
]

function run() {
  if (isRunning.value) return
  isRunning.value = true
  activeNode.value = 0
  
  const interval = setInterval(() => {
    activeNode.value++
    if (activeNode.value > team.length) {
      clearInterval(interval)
      isRunning.value = false
    }
  }, 1200)
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 select-none font-sans p-2">
    
    <!-- Header -->
    <div class="flex justify-center">
      <button 
        @click="run"
        class="px-6 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 shadow-md"
        :class="isRunning ? 'bg-slate-100 text-slate-400' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105'"
      >
        <span>{{ isRunning ? 'Running...' : '🚀 开始协作' }}</span>
      </button>
    </div>

    <!-- Collaboration Flow -->
    <div class="flex-1 flex items-center justify-center gap-4">
      
      <div v-for="(member, idx) in team" :key="idx" class="flex items-center gap-2">
        
        <!-- Role Card -->
        <div class="w-48 h-64 rounded-2xl border-2 p-4 flex flex-col items-center justify-between transition-all duration-500 relative overflow-hidden"
             :class="activeNode === idx + 1 
               ? 'border-blue-500 bg-blue-50 shadow-xl scale-110 z-10' 
               : 'border-slate-200 bg-white opacity-80'">
          
          <!-- Human Side -->
          <div class="flex flex-col items-center gap-1 opacity-50 grayscale transition-all duration-500"
               :class="{ 'opacity-0 absolute -top-10': activeNode === idx + 1 }">
            <div class="text-4xl">{{ member.humanIcon }}</div>
            <div class="text-[10px] font-bold text-slate-500 uppercase">{{ member.role }}</div>
          </div>

          <!-- Model Side (Active) -->
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500"
               :class="activeNode === idx + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
            <div class="text-5xl animate-bounce">{{ member.modelIcon }}</div>
            <div class="text-center">
              <div class="text-sm font-bold text-blue-900">{{ member.modelName }}</div>
              <div class="text-[9px] text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full mt-1">{{ member.skill }}</div>
            </div>
          </div>

          <!-- Task Label -->
          <div class="w-full border-t border-slate-100 pt-2 text-center">
            <div class="text-xs font-bold text-slate-700">{{ member.task }}</div>
          </div>

        </div>

        <!-- Arrow -->
        <div v-if="idx < team.length - 1" class="i-carbon-arrow-right text-2xl text-slate-300"
             :class="{ 'text-blue-400 animate-pulse': activeNode === idx + 1 }">
        </div>

      </div>

    </div>

  </div>
</template>
