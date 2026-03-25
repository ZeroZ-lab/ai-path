<script setup lang="ts">
import { ref, computed } from 'vue'

const currentStep = ref(0)
const loopCount = ref(1)
const isFinished = ref(false)

const steps = [
  { id: 'thought', label: '1. 思考', icon: '🧠', color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'action', label: '2. 行动', icon: '⚙️', color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 'observation', label: '3. 观察', icon: '👁️', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'decision', label: '4. 决策', icon: '⚖️', color: 'text-purple-600', bg: 'bg-purple-50' }
]

const loopData = [
  {
    thought: "用户要我确认某个 API 的认证方式。先找官方文档入口。",
    action: "Browser.search('product API authentication docs')",
    observation: "找到了文档首页，但认证细节还没展开。",
    decision: "继续进入认证章节，提取确切说明。"
  },
  {
    thought: "已进入认证章节，开始提取关键规则。",
    action: "Browser.click('Authentication') -> Extract",
    observation: "文档说明使用 Bearer Token，并要求在 Header 中传递。",
    decision: "信息已完整，生成结构化回答。"
  }
]

const next = () => {
  if (isFinished.value) {
    currentStep.value = 0; loopCount.value = 1; isFinished.value = false; return
  }
  if (currentStep.value < 3) {
    currentStep.value++
  } else {
    if (loopCount.value === 1) {
      currentStep.value = 0; loopCount.value = 2
    } else {
      isFinished.value = true
    }
  }
}
const activeData = computed(() => loopData[loopCount.value - 1])
</script>

<template>
  <div class="agent-loop-visualizer w-full bg-white/30 backdrop-blur-sm rounded-2xl p-3 border border-white/50 font-sans select-none overflow-hidden">
    <!-- 顶部 -->
    <div class="flex justify-between items-center mb-2">
      <div class="flex items-center gap-2">
        <div class="px-2 py-0.5 bg-slate-800 text-white rounded text-[10px] font-black uppercase tracking-widest">Loop #{{ loopCount }}</div>
        <div v-if="isFinished" class="px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] font-black">任务完成 ✅</div>
      </div>
      <button @click="next" class="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all active:scale-95">
        {{ isFinished ? '重置演示' : '下一步 →' }}
      </button>
    </div>

    <div class="grid grid-cols-[1.6fr_1fr] gap-4 items-center">
      <!-- 左侧：转盘 (提升对比度) -->
      <div class="relative h-56 flex items-center justify-center">
        <div class="absolute w-52 h-52 rounded-full border border-dashed border-slate-400/30 animate-[spin_30s_linear_infinite]"></div>
        <div v-for="(step, index) in steps" :key="step.id" 
          class="absolute transition-all duration-500 flex flex-col items-center"
          :style="{
            transform: `rotate(${index * 90}deg) translate(82px) rotate(-${index * 90}deg)`,
            opacity: currentStep === index ? 1 : 0.35,
            scale: currentStep === index ? 1.2 : 0.85
          }"
        >
          <div class="w-14 h-14 rounded-2xl shadow-sm border-2 flex items-center justify-center text-3xl bg-white"
            :class="currentStep === index ? `border-blue-500 ${step.bg}` : 'border-slate-200 bg-slate-50'"
          >
            {{ step.icon }}
          </div>
          <div class="mt-1 text-[10px] font-black uppercase tracking-widest text-center leading-none" :class="currentStep === index ? step.color : 'text-slate-600'">
            {{ step.label }}
          </div>
        </div>
        <div class="z-10 text-6xl transition-all duration-700 drop-shadow-xl animate-float" :style="{ transform: `rotate(${currentStep * 90}deg)` }">🦞</div>
      </div>

      <!-- 右侧：控制台 -->
      <div class="flex flex-col gap-1.5">
        <div v-for="(step, index) in steps" :key="step.id" 
          class="bg-white/60 p-2.5 rounded-xl border border-white transition-all duration-300" 
          :class="currentStep === index ? 'ring-1 ring-blue-400 shadow-md translate-x-1' : 'opacity-20 scale-95'"
        >
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="text-xs">{{ step.icon }}</span>
            <span class="text-[9px] font-black uppercase tracking-widest" :class="step.color">{{ step.id }}</span>
          </div>
          <div class="min-h-[24px] flex items-center">
            <p v-if="index === 0" class="text-[12px] text-slate-900 leading-tight font-semibold">{{ activeData.thought }}</p>
            <code v-if="index === 1" class="text-[11px] bg-slate-800 text-blue-300 px-1.5 rounded block font-mono w-full truncate">{{ activeData.action }}</code>
            <p v-if="index === 2" class="text-[12px] text-slate-800 leading-tight italic font-medium">{{ activeData.observation }}</p>
            <p v-if="index === 3" class="text-[12px] text-slate-900 leading-tight font-black">{{ isFinished ? '✅ 任务完成' : activeData.decision }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部总结 -->
    <div class="mt-4 py-1.5 pl-3 border-l-4 border-blue-600 bg-blue-100/20 rounded-r-lg">
      <div class="text-[10px] font-black text-blue-700 uppercase tracking-widest leading-none mb-1">Architectural Insight</div>
      <p class="text-[13px] text-slate-800 font-bold leading-tight">
        <span class="text-amber-700 font-black italic">Plan & Execute</span> 模式：宏观任务拆解，微观通过反馈实时修正。
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
.animate-float { animation: float 3s infinite ease-in-out; }
</style>
