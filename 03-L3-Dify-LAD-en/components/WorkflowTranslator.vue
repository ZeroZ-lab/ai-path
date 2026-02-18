<script setup lang="ts">
import { ref } from 'vue'

const steps = [
  { id: 1, text: 'Receive Request', node: 'Start', icon: '🏁', type: 'trigger' },
  { id: 2, text: 'Check Amount', node: 'If-Else', icon: '🔀', type: 'logic' },
  { id: 3, text: 'Query Clauses', node: 'Knowledge', icon: '📚', type: 'rag' },
  { id: 4, text: 'Generate Contract', node: 'LLM', icon: '🤖', type: 'gen' },
]

const currentStep = ref(0)

function next() {
  if (currentStep.value < steps.length) {
    currentStep.value++
  }
}

function reset() {
  currentStep.value = 0
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 select-none font-sans p-2">

    <div class="flex justify-between items-center px-4">
      <h3 class="text-xs font-bold uppercase text-slate-400 tracking-widest">SOP to Workflow</h3>
      <button
        @click="currentStep === steps.length ? reset() : next()"
        class="px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
        :class="currentStep === steps.length
          ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          : 'bg-blue-600 text-white hover:bg-blue-700 animate-pulse'"
      >
        <span>{{ currentStep === steps.length ? '↺ Reset' : '👇 Next Step' }}</span>
      </button>
    </div>

    <div class="flex gap-8 flex-1 items-stretch">

      <!-- Left: Human SOP -->
      <div class="w-1/3 flex flex-col gap-3">
        <div v-for="(step, idx) in steps" :key="step.id"
             class="p-3 rounded-xl border-2 transition-all duration-500 flex items-center gap-3 relative"
             :class="currentStep > idx
               ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-md translate-x-2'
               : 'border-slate-100 bg-white text-slate-400 opacity-60'">
          <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
               :class="currentStep > idx ? 'bg-blue-200 text-blue-700' : 'bg-slate-100'">
            {{ idx + 1 }}
          </div>
          <span class="text-xs font-bold">{{ step.text }}</span>

          <!-- Flying Particle Animation -->
          <div v-if="currentStep === idx + 1"
               class="absolute right-0 top-1/2 w-3 h-3 bg-blue-500 rounded-full animate-fly-right"></div>
        </div>
      </div>

      <!-- Right: Dify Canvas -->
      <div class="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-6 relative overflow-hidden flex flex-col items-center gap-4">
        <!-- Background Grid -->
        <div class="absolute inset-0 opacity-10"
             style="background-image: radial-gradient(#94a3b8 1px, transparent 1px); background-size: 16px 16px;">
        </div>

        <transition-group name="node-list">
          <div v-for="(step, idx) in steps.slice(0, currentStep)" :key="step.id"
               class="relative z-10 w-full flex flex-col items-center">

            <!-- Connector Line -->
            <div v-if="idx > 0" class="h-4 w-0.5 bg-slate-300 mb-2"></div>

            <!-- Node Card -->
            <div class="w-48 bg-white border p-3 rounded-xl shadow-lg flex items-center justify-between animate-pop-in"
                 :class="{
                   'border-blue-200': step.type === 'trigger',
                   'border-amber-200': step.type === 'logic',
                   'border-indigo-200': step.type === 'rag',
                   'border-purple-200': step.type === 'gen'
                 }">
              <div class="flex items-center gap-2">
                <span class="text-xl">{{ step.icon }}</span>
                <div class="flex flex-col text-left">
                  <span class="text-[10px] font-bold text-slate-700">{{ step.node }}</span>
                  <span class="text-[8px] text-slate-400 uppercase">{{ step.type }}</span>
                </div>
              </div>
              <div class="w-2 h-2 rounded-full bg-green-400"></div>
            </div>

          </div>
        </transition-group>

        <!-- Placeholder when empty -->
        <div v-if="currentStep === 0" class="absolute inset-0 flex items-center justify-center text-slate-300 text-xs">
          Waiting for input...
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.node-list-enter-active {
  transition: all 0.5s ease;
}
.node-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fly-right {
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100px); opacity: 0; }
}
.animate-fly-right {
  animation: fly-right 0.5s ease-out forwards;
}
</style>
