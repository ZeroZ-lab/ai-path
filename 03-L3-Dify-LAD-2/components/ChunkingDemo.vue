<script setup lang="ts">
import { ref } from 'vue'

const mode = ref<'bad' | 'good'>('bad')

// 原始文本
const fullText = "Dify 是一款开源的 LLM 应用开发平台。它由 LangGenius 团队开发。目前的最新版本支持 Workflow 编排功能。"

// 模拟切分结果
const chunks = {
  bad: [
    { id: 1, text: "Dify 是一款开源的 LLM 应用开发平台。", status: 'ignored' },
    { id: 2, text: "它由 LangGenius 团队开发。目前的", status: 'ignored' },
    { id: 3, text: "最新版本支持 Workflow 编排功能。", status: 'hit' } // 命中的片段
  ],
  good: [
    { id: 1, text: "Dify 是一款开源的 LLM...开发平台。它由 LangGenius...", status: 'ignored' },
    { id: 2, text: "...LLM 应用开发平台。它由 LangGenius 团队开发。目前的最新版本支持 Workflow 编排功能。", status: 'hit' } // 包含了上下文
  ]
}

const query = "谁支持 Workflow 编排？"

// 模拟 LLM 的回答
const llmResponse = {
  bad: {
    answer: "根据提供的上下文，我不知道是哪个软件支持。上下文中只提到了“最新版本”，未提及软件名称。",
    color: "text-rose-600",
    icon: "😵"
  },
  good: {
    answer: "根据上下文，Dify 的最新版本支持 Workflow 编排功能。",
    color: "text-emerald-600",
    icon: "🤓"
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 font-sans select-none">
    
    <!-- Header / Toggle -->
    <div class="flex justify-center gap-4 bg-slate-100 p-2 rounded-xl border border-slate-200">
      <button 
        @click="mode = 'bad'"
        class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
        :class="mode === 'bad' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'"
      >
        <span class="text-sm">🔪</span> 硬切分 (Fixed)
      </button>
      <button 
        @click="mode = 'good'"
        class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
        :class="mode === 'good' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'"
      >
        <span class="text-sm">🔄</span> 重叠切分 (Overlap)
      </button>
    </div>

    <!-- Query Simulation -->
    <div class="flex items-center gap-3 px-2">
      <span class="text-[10px] font-bold uppercase text-slate-400">User Query</span>
      <div class="bg-blue-50 text-blue-800 text-xs px-3 py-1.5 rounded-lg font-bold w-full">
        ❓ {{ query }}
      </div>
    </div>

    <!-- Visualization -->
    <div class="flex-1 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col gap-4 relative overflow-hidden">
      
      <!-- Chunks Visual -->
      <div class="space-y-2">
        <div class="text-[10px] font-bold uppercase text-slate-400 flex justify-between">
          <span>Database Chunks</span>
          <span class="text-blue-500" v-if="mode === 'good'">Overlap: 20%</span>
          <span class="text-rose-500" v-else>Overlap: 0%</span>
        </div>
        
        <div class="flex flex-col gap-2">
          <div v-for="chunk in chunks[mode]" :key="chunk.id" 
               class="p-3 rounded-lg border text-xs font-mono transition-all duration-300 relative"
               :class="chunk.status === 'hit' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100 z-10' : 'border-slate-100 bg-slate-50 text-slate-400 opacity-60'">
            
            <span v-if="chunk.status === 'hit'" class="absolute -top-2 -right-2 bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-full shadow-sm">
              Hit (Recall)
            </span>
            {{ chunk.text }}
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="flex justify-center">
        <div class="i-carbon-arrow-down text-slate-300"></div>
      </div>

      <!-- LLM Brain -->
      <div class="bg-slate-50 rounded-xl p-3 border border-slate-200">
        <div class="text-[10px] font-bold uppercase text-slate-400 mb-2">LLM Reasoning</div>
        <div class="flex gap-3 items-start">
          <div class="text-2xl">{{ llmResponse[mode].icon }}</div>
          <div class="text-xs leading-relaxed" :class="llmResponse[mode].color">
            {{ llmResponse[mode].answer }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
