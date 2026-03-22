<script setup lang="ts">
import { ref } from 'vue'

const mode = ref<'child' | 'parent'>('parent')

const query = "案件中张三转账了多少钱？"

const content = {
  child: {
    context: "转账记录：2023-10-01 50,000元; 2023-10-05 30,000元。",
    answer: "我看到了两笔转账，但这个片段里没有写是谁转的，无法确认是张三。",
    icon: "🤔",
    color: "text-amber-600"
  },
  parent: {
    context: "【资金分析报告】...嫌疑人张三账户(6222...)流水显示：\n转账记录：2023-10-01 50,000元; 2023-10-05 30,000元。\n以上资金均流向...",
    answer: "根据报告，张三共转账 80,000 元。",
    icon: "😎",
    color: "text-purple-600"
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 select-none">
    
    <div class="flex justify-center gap-4">
      <button @click="mode = 'child'" class="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all" 
        :class="mode === 'child' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-200 text-slate-400'">
        👶 仅检索子片段
      </button>
      <button @click="mode = 'parent'" class="px-4 py-1.5 rounded-lg text-xs font-bold border transition-all"
        :class="mode === 'parent' ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-400'">
        👨‍👦 召回父窗口
      </button>
    </div>

    <div class="flex-1 flex gap-4">
      <!-- Context Box -->
      <div class="flex-1 bg-white border rounded-xl p-4 shadow-sm relative overflow-hidden transition-all duration-500"
           :class="mode === 'parent' ? 'border-purple-200 bg-purple-50/30' : 'border-amber-200 bg-amber-50/30'">
        <div class="text-[10px] font-bold uppercase mb-2" :class="mode === 'parent' ? 'text-purple-400' : 'text-amber-400'">
          Context Window
        </div>
        <div class="text-xs text-slate-700 font-mono leading-relaxed">
          {{ content[mode].context }}
        </div>
        
        <!-- Visual Hint -->
        <div v-if="mode === 'parent'" class="absolute bottom-2 right-2 text-[50px] opacity-10">👨‍👦</div>
      </div>

      <!-- LLM Box -->
      <div class="w-1/3 flex flex-col justify-center gap-2">
        <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
          <div class="text-3xl mb-2">{{ content[mode].icon }}</div>
          <p class="text-[10px] leading-tight" :class="content[mode].color">
            {{ content[mode].answer }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
