<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useSlideContext } from '@slidev/client'

// Get global click state for the current slide
const { $clicks } = useSlideContext()

// Internal states for the bottom row animation
const showUser = ref(false)
const showArrow1 = ref(false)
const showSearch = ref(false)
const showArrow2 = ref(false)
const showLLM = ref(false)

// Reset animation states
const resetAnimation = () => {
  showUser.value = false
  showArrow1.value = false
  showSearch.value = false
  showArrow2.value = false
  showLLM.value = false
}

// Watch for click changes
watch($clicks, (newClick) => {
  // Click 1: Top Row appears (handled by template v-if/opacity)
  // Click 2: Middle Arrow appears
  // Click 3: Bottom Row appears -> Start Auto Animation
  if (newClick === 3) {
    // Start sequence
    setTimeout(() => { showUser.value = true }, 200)
    setTimeout(() => { showArrow1.value = true }, 800)
    setTimeout(() => { showSearch.value = true }, 1400)
    setTimeout(() => { showArrow2.value = true }, 2000)
    setTimeout(() => { showLLM.value = true }, 2600)
  } else if (newClick < 3) {
    resetAnimation()
  }
})

onMounted(() => {
    // Check initial state in case we navigate back/forward
    if ($clicks.value >= 3) {
         showUser.value = true
         showArrow1.value = true
         showSearch.value = true
         showArrow2.value = true
         showLLM.value = true
    }
})
</script>

<template>
<div class="flex flex-col justify-center h-full gap-3 mt-0">

  <!-- Top Row: Data Ingestion (Preparation) -->
  <!-- Visible on Click 1+ -->
  <div 
    class="rounded-3xl border border-slate-200 bg-slate-50/50 p-3 relative transition-all duration-500"
    :class="$clicks >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
  >
      <div class="absolute -top-3 left-6 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">前置准备：入库</div>
      <div class="flex items-center justify-center gap-4 text-sm text-slate-600">
          <div class="flex flex-col items-center gap-1">
              <span class="text-xl">📄</span>
              <span class="text-[10px]">私有文档</span>
          </div>
          <div class="i-carbon-arrow-right text-slate-400"></div>
          <div class="flex flex-col items-center gap-1">
              <span class="text-xl">✂️</span>
              <span class="text-[10px]">切片 (Chunking)</span>
          </div>
          <div class="i-carbon-arrow-right text-slate-400"></div>
          <div class="flex flex-col items-center gap-1">
              <span class="text-xl">🔢</span>
              <span class="text-[10px]">向量化</span>
          </div>
          <div class="i-carbon-arrow-right text-slate-400"></div>
          <div class="flex flex-col items-center gap-1 p-1.5 bg-amber-100 rounded-lg border border-amber-200">
              <span class="text-xl">🗄️</span>
              <span class="text-[10px] font-bold text-amber-800">向量数据库</span>
          </div>
      </div>
  </div>

  <!-- Middle Row: The Arrow Down -->
  <!-- Visible on Click 2+ -->
  <div 
    class="flex justify-center transition-all duration-500 py-1"
    :class="$clicks >= 2 ? 'opacity-100' : 'opacity-0'"
  >
      <div class="i-carbon-arrow-down text-2xl text-slate-300"></div>
  </div>

  <!-- Bottom Row: Retrieval & Generation (Runtime) -->
  <!-- Visible on Click 3+ -->
  <div 
    class="rounded-3xl border border-blue-100 bg-blue-50/50 p-4 relative transition-all duration-500"
    :class="$clicks >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
  >
      <div class="absolute -top-3 left-6 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded">实时问答流程</div>
      
      <div class="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-2">
          
          <!-- User -->
          <div class="flex flex-col items-center gap-1 transition-all duration-500" 
               :class="showUser ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
              <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg shadow-md">🙋‍♂️</div>
              <span class="text-[10px] font-bold text-blue-900">提问</span>
          </div>

          <!-- Arrow -->
          <div class="h-0.5 bg-blue-200 w-full relative transition-all duration-500"
               :class="showArrow1 ? 'opacity-100 w-full' : 'opacity-0 w-0'">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-slate-400 whitespace-nowrap">Embedding</div>
          </div>

          <!-- Vector Search -->
          <div class="flex flex-col items-center gap-1 p-2 bg-white rounded-xl border border-blue-200 shadow-sm z-10 transition-all duration-500"
               :class="showSearch ? 'opacity-100 scale-100' : 'opacity-0 scale-90'">
              <span class="text-xl">🔍</span>
              <span class="text-[10px] font-bold text-slate-700">向量检索</span>
              <div class="text-[9px] text-slate-500">Top K 匹配</div>
          </div>

          <!-- Arrow -->
          <div class="h-0.5 bg-blue-200 w-full relative transition-all duration-500"
               :class="showArrow2 ? 'opacity-100 w-full' : 'opacity-0 w-0'">
               <div class="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-slate-400 whitespace-nowrap">Prompt + Context</div>
          </div>

          <!-- LLM -->
          <div class="flex flex-col items-center gap-1 p-2 bg-white rounded-xl border border-purple-200 shadow-sm z-10 transition-all duration-500"
               :class="showLLM ? 'opacity-100 scale-100' : 'opacity-0 scale-90'">
              <span class="text-xl">🤖</span>
              <span class="text-[10px] font-bold text-purple-700">大模型生成</span>
              <div class="text-[9px] text-slate-500">最终回答</div>
          </div>

      </div>

      
  </div>

</div>
</template>
