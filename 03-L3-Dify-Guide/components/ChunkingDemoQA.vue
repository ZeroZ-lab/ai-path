<script setup lang="ts">
import { ref } from 'vue'

const mode = ref<'normal' | 'qa'>('qa')

const query = "差旅报销标准是多少？"

const results = {
  normal: {
    chunks: [
      { id: 1, text: "...登录OA系统。问题：差旅报销标准是多少？", status: 'hit' },
      { id: 2, text: "回答：每人每天 200 元...", status: 'miss' } // 答案被切到了下一段，且未被召回
    ],
    answer: "根据这段片段，我只看到了问题，没有看到具体的金额标准。",
    color: "text-rose-600",
    icon: "😵"
  },
  qa: {
    chunks: [
      { id: 1, text: "Q: 差旅报销标准是多少？\nA: 每人每天 200 元，实报实销。", status: 'hit' } // 完美包裹
    ],
    answer: "标准是每人每天 200 元，实报实销。",
    color: "text-emerald-600",
    icon: "🤓"
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 select-none">
    
    <div class="flex justify-center gap-4">
      <button @click="mode = 'normal'" class="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all" 
        :class="mode === 'normal' ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-white border-slate-200 text-slate-400'">
        🔪 普通硬切
      </button>
      <button @click="mode = 'qa'" class="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all"
        :class="mode === 'qa' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-200 text-slate-400'">
        🧩 QA 分段
      </button>
    </div>

    <div class="bg-slate-50 p-2 rounded-lg text-center text-xs text-slate-600">
      <span class="font-bold">Excel 原文：</span>
      <span class="bg-white px-2 py-0.5 rounded border">Q: 差旅报销标准是多少？</span>
      <span class="mx-1">+</span>
      <span class="bg-white px-2 py-0.5 rounded border">A: 每人每天 200 元...</span>
    </div>

    <div class="flex-1 bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
      
      <!-- Chunks Visual -->
      <div class="flex flex-col gap-2">
        <div v-for="chunk in results[mode].chunks" :key="chunk.id"
             class="p-3 rounded border text-[10px] font-mono transition-all"
             :class="chunk.status === 'hit' ? 'border-blue-400 bg-blue-50 text-blue-800' : 'border-slate-100 text-slate-300'">
          <div class="flex justify-between mb-1">
            <span class="font-bold">Chunk #{{ chunk.id }}</span>
            <span v-if="chunk.status === 'hit'" class="bg-blue-500 text-white px-1 rounded text-[8px]">Retrieved</span>
          </div>
          {{ chunk.text }}
        </div>
      </div>

      <!-- LLM Answer -->
      <div class="mt-auto bg-slate-50 p-3 rounded-lg flex items-start gap-3 border border-slate-100">
        <div class="text-xl">{{ results[mode].icon }}</div>
        <div class="text-xs" :class="results[mode].color">
          {{ results[mode].answer }}
        </div>
      </div>

    </div>
  </div>
</template>
