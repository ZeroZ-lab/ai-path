<script setup lang="ts">
import { ref, computed } from 'vue'

const activeFlow = ref<'indexing' | 'retrieval'>('indexing')

const steps = {
  indexing: [
    { icon: 'QS', label: '原始文档', desc: 'PDF, Word, Markdown 等企业私有数据' },
    { icon: 'CX', label: '分段清洗', desc: 'Text Splitter: 将长文档切分成 500-1000 token 的小片段' },
    { icon: 'EK', label: '语义编码', desc: '将文本的"意思"转化为数字坐标（就像GPS定位）' },
    { icon: 'SJ', label: '向量存储', desc: '存入 Vector DB，构建索引以便快速搜索' },
  ],
  retrieval: [
    { icon: 'YR', label: '用户提问', desc: '用户输入自然语言问题 (Query)' },
    { icon: 'EK', label: '语义编码', desc: '将问题也转化为同样的数字坐标' },
    { icon: 'JS', label: '相似度搜索', desc: '在库中计算相似度，找出最相似的 N 个片段' },
    { icon: 'ZH', label: 'Prompt 组装', desc: 'Context (片段) + Question -> 最终 Prompt' },
    { icon: 'DN', label: 'LLM 生成', desc: '大模型基于提供的上下文生成准确回答' },
  ]
}

const currentSteps = computed(() => steps[activeFlow.value])

// Helper for dynamic flow lines animation
const isIndexing = computed(() => activeFlow.value === 'indexing')
</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 select-none font-sans">
    
    <!-- Controls -->
    <div class="flex justify-center gap-4">
      <button 
        @click="activeFlow = 'indexing'"
        class="px-6 py-2 rounded-full border-2 transition-all duration-300 flex items-center gap-2 font-bold text-sm"
        :class="isIndexing ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md scale-105' : 'border-slate-200 bg-white text-slate-400 hover:border-blue-200'"
      >
        <span class="text-lg">📚</span> 1. 知识入库 (Indexing)
      </button>
      <button 
        @click="activeFlow = 'retrieval'"
        class="px-6 py-2 rounded-full border-2 transition-all duration-300 flex items-center gap-2 font-bold text-sm"
        :class="!isIndexing ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md scale-105' : 'border-slate-200 bg-white text-slate-400 hover:border-purple-200'"
      >
        <span class="text-lg">🔍</span> 2. 问答检索 (Retrieval)
      </button>
    </div>

    <!-- Visualization Area -->
    <div class="flex-1 bg-slate-50/50 rounded-3xl border border-slate-200 relative p-8 flex items-center justify-center overflow-hidden">
      
      <!-- Background Grid -->
      <div class="absolute inset-0 opacity-10" 
           style="background-image: radial-gradient(#94a3b8 1px, transparent 1px); background-size: 20px 20px;">
      </div>

      <!-- Flow Container -->
      <div class="relative z-10 flex items-center gap-4 w-full justify-between px-4">
        
        <div v-for="(step, idx) in currentSteps" :key="idx" 
             class="flex flex-col items-center gap-3 relative group"
             :style="{ transitionDelay: `${idx * 100}ms` }">
          
          <!-- Node Card -->
          <div class="w-24 h-24 rounded-2xl border-2 flex flex-col items-center justify-center shadow-lg transition-all duration-500 transform bg-white z-20"
               :class="isIndexing ? 'border-blue-100 group-hover:border-blue-400 group-hover:scale-110' : 'border-purple-100 group-hover:border-purple-400 group-hover:scale-110'">
            
            <!-- Dynamic Icons -->
            <div class="text-3xl mb-1">
               <span v-if="step.icon === 'QS'">📄</span>
               <span v-else-if="step.icon === 'CX'">✂️</span>
               <span v-else-if="step.icon === 'EK'">📐</span>
               <span v-else-if="step.icon === 'SJ'">🗄️</span>
               <span v-else-if="step.icon === 'YR'">🙋</span>
               <span v-else-if="step.icon === 'JS'">🔎</span>
               <span v-else-if="step.icon === 'ZH'">🧩</span>
               <span v-else-if="step.icon === 'DN'">🤖</span>
            </div>
            
            <div class="text-[10px] font-bold text-slate-700 text-center px-1">{{ step.label }}</div>
          </div>

          <!-- Arrow (Except last) -->
          <div v-if="idx < currentSteps.length - 1" class="absolute -right-[2.5rem] top-1/2 -translate-y-1/2 z-10">
             <div class="i-carbon-arrow-right text-2xl text-slate-300 animate-pulse"></div>
          </div>

          <!-- Description Tooltip (Always visible at bottom for clarity) -->
          <div class="absolute top-28 w-40 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div class="bg-slate-800 text-white text-[10px] p-2 rounded-lg shadow-xl relative z-30">
              {{ step.desc }}
              <!-- Arrow up -->
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
          </div>

        </div>

      </div>

      <!-- Vector DB Central Node (Visual Anchor) -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
         <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Knowledge Base</div>
         <div class="w-64 h-2 bg-slate-300 rounded-full"></div>
      </div>

    </div>

    <!-- Static Legend/Explanation -->
    <div class="h-16 flex items-center justify-center text-center">
       <p v-if="isIndexing" class="text-xs text-blue-800 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 animate-fade-in">
         💡 <strong>核心逻辑：</strong> 将非结构化文档（PDF）转化为计算机可理解的数学向量（Vector），并存入数据库。
       </p>
       <p v-else class="text-xs text-purple-800 bg-purple-50 px-4 py-2 rounded-xl border border-purple-100 animate-fade-in">
         💡 <strong>核心逻辑：</strong> 先从数据库里“搜”到答案所在的段落，再把段落喂给大模型“写”出回复。
       </p>
    </div>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
