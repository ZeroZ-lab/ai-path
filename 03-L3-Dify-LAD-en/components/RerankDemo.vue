<script setup lang="ts">
import { ref } from 'vue'

const isReranked = ref(false)

const initialList = [
  { id: 1, text: "Party A has the right to unilaterally terminate the contract (due to Party B's breach)", score: 0.89, type: 'wrong' },
  { id: 2, text: "Party B has no right to unilaterally terminate the contract", score: 0.87, type: 'wrong' },
  { id: 3, text: "Agreement termination clauses and consequences", score: 0.85, type: 'wrong' },
  { id: 4, text: "Party A has NO right to unilaterally terminate the contract (unless force majeure)", score: 0.84, type: 'correct' }, // Correct answer ranked 4th
  { id: 5, text: "Compensation liability after contract termination", score: 0.78, type: 'wrong' }
]

const rerankedList = [
  { id: 4, text: "Party A has NO right to unilaterally terminate the contract (unless force majeure)", score: 0.98, type: 'correct' }, // Jumped to 1st
  { id: 1, text: "Party A has the right to unilaterally terminate the contract (due to Party B's breach)", score: 0.45, type: 'wrong' },
  { id: 2, text: "Party B has no right to unilaterally terminate the contract", score: 0.41, type: 'wrong' },
  { id: 3, text: "Agreement termination clauses and consequences", score: 0.35, type: 'wrong' },
  { id: 5, text: "Compensation liability after contract termination", score: 0.22, type: 'wrong' }
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
          🔍 Party A <span class="text-rose-600">NO right</span> to unilaterally terminate
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
