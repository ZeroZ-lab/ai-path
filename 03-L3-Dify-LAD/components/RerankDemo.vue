<script setup lang="ts">
import { ref } from 'vue'

const isReranked = ref(false)

const initialList = [
  { id: 1, text: "iPhone 15 价格 (¥5999)", score: 0.88, type: 'wrong' },
  { id: 2, text: "iPhone 15 Pro Max 价格 (¥9999)", score: 0.86, type: 'wrong' },
  { id: 3, text: "iPhone 14 Pro 价格 (¥6999)", score: 0.85, type: 'wrong' },
  { id: 4, text: "iPhone 15 Pro 价格 (¥7999)", score: 0.82, type: 'correct' }, // 正确答案排在第4
  { id: 5, text: "iPad Pro 价格", score: 0.75, type: 'wrong' }
]

const rerankedList = [
  { id: 4, text: "iPhone 15 Pro 价格 (¥7999)", score: 0.99, type: 'correct' }, // 逆袭到第1
  { id: 2, text: "iPhone 15 Pro Max 价格 (¥9999)", score: 0.45, type: 'wrong' },
  { id: 1, text: "iPhone 15 价格 (¥5999)", score: 0.42, type: 'wrong' },
  { id: 3, text: "iPhone 14 Pro 价格 (¥6999)", score: 0.38, type: 'wrong' },
  { id: 5, text: "iPad Pro 价格", score: 0.12, type: 'wrong' }
]

function toggle() {
  isReranked.value = !isReranked.value
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 font-sans select-none">
    
    <!-- Query Header -->
    <div class="flex items-center justify-between px-2">
      <div class="flex items-center gap-3">
        <span class="text-xs font-bold text-slate-400 uppercase">User Query</span>
        <div class="bg-blue-50 text-blue-800 text-sm px-4 py-2 rounded-xl font-bold border border-blue-100 shadow-sm">
          🔍 iPhone 15 <span class="text-rose-600">Pro</span> 价格
        </div>
      </div>
      
      <button 
        @click="toggle"
        class="px-6 py-2 rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-2 shadow-md"
        :class="isReranked ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-slate-500 border border-slate-200 hover:border-purple-300'"
      >
        <span class="text-lg">{{ isReranked ? '🔄 Reset' : '✨ Rerank' }}</span>
      </button>
    </div>

    <!-- Results List -->
    <div class="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-4 relative overflow-hidden">
      
      <transition-group name="list" tag="div" class="flex flex-col gap-2 relative">
        <div 
          v-for="(item, index) in (isReranked ? rerankedList : initialList)" 
          :key="item.id"
          class="bg-white p-3 rounded-xl border shadow-sm flex justify-between items-center transition-all duration-500"
          :class="[
            item.type === 'correct' && isReranked ? 'border-emerald-400 ring-2 ring-emerald-100' : 'border-slate-100',
            item.type === 'correct' && !isReranked ? 'border-dashed border-emerald-300' : ''
          ]"
        >
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                 :class="index === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'">
              {{ index + 1 }}
            </div>
            <div class="text-xs text-slate-700 font-mono">{{ item.text }}</div>
          </div>
          
          <div class="text-[10px] font-bold" 
               :class="isReranked ? 'text-purple-600' : 'text-blue-400'">
            Score: {{ item.score }}
          </div>
        </div>
      </transition-group>

      <!-- Watermark -->
      <div class="absolute bottom-4 right-4 text-4xl opacity-10 font-black tracking-tighter"
           :class="isReranked ? 'text-purple-500' : 'text-blue-500'">
        {{ isReranked ? 'RERANKED' : 'EMBEDDING' }}
      </div>

    </div>

  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
