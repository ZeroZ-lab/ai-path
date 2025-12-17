<script setup lang="ts">
import { ref } from 'vue'

const isConnected = ref(false)
const status = ref('Thinking...')

function connect() {
  isConnected.value = true
  status.value = 'Executing...'
  setTimeout(() => {
    status.value = 'Done ✅'
  }, 1500)
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 select-none font-sans p-2">
    
    <div class="flex justify-center">
      <button 
        @click="connect"
        class="px-6 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 shadow-md"
        :class="isConnected ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-slate-800 text-white hover:bg-slate-700'"
      >
        <span>{{ isConnected ? '已连接工具' : '🔌 连接工具' }}</span>
      </button>
    </div>

    <div class="flex-1 flex items-center justify-center gap-8 relative">
      
      <!-- Brain (LLM) -->
      <div class="w-40 h-40 bg-purple-50 border-2 border-purple-200 rounded-full flex flex-col items-center justify-center z-10 shadow-lg relative">
        <div class="text-5xl mb-2">🧠</div>
        <div class="text-xs font-bold text-purple-900">LLM</div>
        <div class="text-[9px] text-purple-500 bg-white px-2 py-0.5 rounded-full mt-1 border border-purple-100">Thinking</div>
        
        <!-- Thought Bubble -->
        <div class="absolute -top-8 right-0 bg-white p-2 rounded-xl rounded-bl-none border border-slate-200 text-[9px] text-slate-500 shadow-sm w-24 animate-pulse">
          "我算好了，该发邮件了..."
        </div>
      </div>

      <!-- The Arm (Visual Connection) -->
      <div class="flex-1 h-2 bg-slate-100 rounded-full relative overflow-hidden transition-all duration-1000"
           :class="{ 'w-32': !isConnected, 'w-48 bg-blue-100': isConnected }">
        <div class="absolute inset-0 flex items-center justify-center">
          <div v-if="isConnected" class="w-full h-full bg-blue-500 animate-slide-right opacity-20"></div>
          <div v-if="!isConnected" class="text-xs text-slate-300">❌ No Access</div>
          <div v-else class="text-xs font-bold text-blue-600 flex items-center gap-1">
            <span class="animate-spin">⚙️</span> API Call
          </div>
        </div>
      </div>

      <!-- Action (Tools) -->
      <div class="w-40 h-40 bg-white border-2 border-slate-200 rounded-2xl flex flex-col items-center justify-center z-10 shadow-md transition-all duration-500"
           :class="{ 'border-green-400 ring-4 ring-green-50': isConnected && status === 'Done ✅' }">
        <div class="grid grid-cols-2 gap-2 mb-2 opacity-50">
          <div class="text-2xl bg-slate-50 p-1 rounded">📧</div>
          <div class="text-2xl bg-slate-50 p-1 rounded">📅</div>
          <div class="text-2xl bg-slate-50 p-1 rounded">☁️</div>
          <div class="text-2xl bg-slate-50 p-1 rounded">🔍</div>
        </div>
        <div class="text-xs font-bold text-slate-700">外部世界</div>
        <div v-if="isConnected" class="mt-2 text-[10px] font-bold text-white px-3 py-1 rounded-full transition-colors duration-300"
             :class="status === 'Done ✅' ? 'bg-green-500' : 'bg-blue-500'">
          {{ status }}
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
@keyframes slide-right {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-slide-right {
  animation: slide-right 1s infinite linear;
}
</style>
