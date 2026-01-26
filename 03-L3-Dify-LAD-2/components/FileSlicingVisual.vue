<script setup lang="ts">
import { ref } from 'vue'

const isSliced = ref(false)

const toggleSlice = () => {
  isSliced.value = !isSliced.value
}

const chunks = [
  { id: 1, text: "根据《劳动合同法》第十条，建立劳动关系，应当订立书面劳动合同。", tokens: "42", delay: "0s", transform: "-translate-x-16 -translate-y-4 rotate-[-1deg]" },
  { id: 2, text: "已建立劳动关系，未同时订立书面劳动合同的，", tokens: "31", delay: "0.1s", transform: "-translate-x-4 translate-y-6 rotate-[0.5deg]" },
  { id: 3, text: "应当自用工之日起一个月内订立书面劳动合同。", tokens: "33", delay: "0.2s", transform: "translate-x-4 -translate-y-6 rotate-[-0.5deg]" },
  { id: 4, text: "用人单位与劳动者在用工前订立劳动合同的，劳动关系自用工之日起建立。", tokens: "48", delay: "0.3s", transform: "translate-x-16 translate-y-4 rotate-[1deg]" }
]
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-4 bg-transparent rounded-3xl overflow-hidden relative">
    
    <!-- The Document Container (Horizontal Layout) -->
    <div class="relative w-full max-w-4xl h-64 transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)" :class="isSliced ? 'scale-95' : 'scale-100'">
      
      <!-- Slicing Tool (Vertical Laser) -->
      <div 
        class="absolute inset-y-0 w-1 bg-rose-500 shadow-[0_0_20px_#f43f5e] z-50 transition-all duration-1000 ease-in-out pointer-events-none" 
        :style="{ left: isSliced ? '100%' : '0%', opacity: isSliced ? 0 : 1 }"
      >
        <div class="absolute top-2 left-2 bg-rose-600 text-white text-[8px] px-2 py-0.5 rounded shadow-xl font-black animate-pulse whitespace-nowrap">
          ✂️ CUT
        </div>
      </div>

      <!-- Document Content (Horizontal Flex) -->
      <div class="flex flex-row gap-2 h-full items-center justify-center">
        <div 
          v-for="(chunk, index) in chunks" 
          :key="chunk.id"
          class="w-1/4 bg-white border border-slate-200 rounded-lg shadow-sm p-3 flex flex-col transition-all duration-700 select-none cursor-default group"
          :style="{ 
            height: '180px',
            transitionDelay: isSliced ? chunk.delay : '0s'
          }"
          :class="isSliced ? [chunk.transform, 'shadow-lg border-blue-200 ring-2 ring-blue-50'] : 'hover:border-slate-300'"
        >
          <!-- Text Content (Larger & Bold) -->
          <div class="text-[18px] font-bold leading-snug font-serif tracking-tight transition-colors duration-500" :class="isSliced ? 'text-blue-900' : 'text-slate-600'">
             {{ chunk.text }}
          </div>

          <!-- Metadata Tag -->
          <div 
            class="mt-auto flex items-center justify-between transition-all duration-500"
            :class="isSliced ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'"
          >
            <div class="text-[8px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase tracking-tighter">
              #0{{ chunk.id }}
            </div>
            <div class="text-[8px] font-bold text-slate-400">
              {{ chunk.tokens }} tk
            </div>
          </div>

          <!-- Vertical Split Line (Only visible when not sliced) -->
          <div v-if="!isSliced && index < chunks.length - 1" class="absolute -right-1 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-100 z-0"></div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="mt-8 flex flex-col items-center gap-3 z-10">
      <button 
        @click="toggleSlice"
        class="group relative px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[12px] tracking-widest transition-all shadow-xl active:scale-95 overflow-hidden"
      >
        <div class="relative z-10 flex items-center gap-2">
          <span>{{ isSliced ? '♻️' : '✂️' }}</span>
          {{ isSliced ? 'RESET' : 'START CHUNKING' }}
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
      <div class="text-[10px] font-bold text-slate-400 tracking-tight uppercase">
        {{ isSliced ? 'Processed Chunks ready for Vector Database' : 'Source: Labor Contract Law' }}
      </div>
    </div>

    <!-- Metaphor / Insight (Cleaned up) -->
    <Transition name="fade">
      <div v-show="isSliced" class="absolute top-4 right-4 max-w-[180px] bg-white/90 backdrop-blur p-3 rounded-xl border border-blue-100 shadow-xl transition-all">
        <p class="text-[10px] leading-tight text-blue-900 font-medium italic">
          "将长合同横向切分为**语义碎片**，每一片都能被 AI 精准检索。"
        </p>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .7; }
}

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>


