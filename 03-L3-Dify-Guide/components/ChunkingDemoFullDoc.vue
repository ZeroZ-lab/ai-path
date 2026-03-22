<script setup lang="ts">
import { ref } from 'vue'

const mode = ref<'split' | 'full'>('full')

const news = "【快讯】某公司发布新财报，虽然营收增长 20%，但由于投入巨额研发，净利润下降 50%。股价应声下跌。分析师认为短期承压，长期看好。"

const content = {
  split: {
    visual: [
      '...营收增长 20%...', 
      '...净利润下降 50%...',
      '...股价应声下跌...'
    ],
    answer: "片段1显示增长，片段2显示下降。信息碎片化，难以判断整体情绪是褒是贬。",
    icon: "😕",
    color: "text-slate-600"
  },
  full: {
    visual: [news],
    answer: "整体情绪：中性偏负面。核心逻辑是增收不增利导致股价下跌，但长期逻辑未坏。",
    icon: "📉",
    color: "text-red-600"
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 font-sans select-none p-2">
    
    <!-- Controls -->
    <div class="flex justify-center gap-4">
      <button @click="mode = 'split'" class="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-2" 
        :class="mode === 'split' ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-white border-slate-200 text-slate-400'">
        <span>✂️</span> 碎片化
      </button>
      <button @click="mode = 'full'" class="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-2"
        :class="mode === 'full' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white border-slate-200 text-slate-400'">
        <span>📰</span> 全文阅读
      </button>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col gap-4">
      
      <!-- Input Visual -->
      <div class="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-wrap content-start gap-2">
        <div class="text-[10px] font-bold text-slate-400 w-full mb-1 uppercase tracking-widest">Input Documents</div>
        
        <div v-for="(text, idx) in content[mode].visual" :key="idx"
             class="bg-slate-50 border p-3 rounded-lg text-[10px] text-slate-700 leading-relaxed transition-all duration-300"
             :class="mode === 'split' ? 'border-dashed border-slate-300 w-[48%]' : 'border-solid border-red-100 w-full'">
          {{ text }}
          <span v-if="mode === 'split'" class="text-[8px] text-slate-400 block mt-1">Chunk #{{idx+1}}</span>
        </div>
      </div>

      <!-- Arrow -->
      <div class="flex justify-center -my-2 z-10">
        <div class="i-carbon-arrow-down text-slate-300 text-lg bg-white rounded-full"></div>
      </div>

      <!-- Output Visual -->
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-4 shadow-sm">
        <div class="text-3xl bg-white p-2 rounded-lg border border-slate-100">{{ content[mode].icon }}</div>
        <div class="flex-1">
          <div class="text-[10px] font-bold uppercase text-slate-400 mb-1">LLM Analysis</div>
          <div class="text-xs font-bold leading-relaxed" :class="content[mode].color">
            {{ content[mode].answer }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>