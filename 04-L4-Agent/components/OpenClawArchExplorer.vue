<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
const activeStep = ref(0)
const isAuto = ref(false)
const steps = [
  { id: 'Channels', label: '1. Channels', icon: '📥', sub: 'External Inputs', desc: '这一层只负责接入。不同消息源先被统一成系统能处理的请求格式，再交给 Gateway，避免后续模块直接耦合 Slack、Telegram 或 CLI 的差异。', details: ['Channel Manager', 'Channel Handler'] },
  { id: 'Gateway', label: '2. Gateway', icon: '🧭', sub: 'Control Plane', desc: '这一层是总控。它接住请求后，决定由哪个 Agent 处理、能调用哪些工具、会话落在哪个 session，并把任务分发到后面的 runtime 与工具链。', details: ['Agent Manager', 'Tools Manager'] },
  { id: 'Agent', label: '3. Agent Runtime', icon: '🧠', sub: 'Planning + Model', desc: '这一层负责真正的“想”。它装配上下文、读取会话状态、经由 Model Router 调模型，再把模型输出解释成下一步动作，例如回复用户、继续推理或调用工具。', details: ['Model Router', 'Context Assembly'] },
  { id: 'Tools', label: '4. Tool Execution', icon: '⚙️', sub: 'Real Environment', desc: '这一层负责真正的“做”。Shell、Browser、HTTP 等工具在这里访问外部环境，把动作执行成确定性结果，再把 observation 回传给 Agent。', details: ['Shell', 'Browser', 'HTTP Tools'] },
  { id: 'State', label: '5. Session + Memory', icon: '💾', sub: 'Persistent State', desc: '这一层负责把状态留下来。Session Store 保存当前会话进度，Memory Store 沉淀可复用信息，让后续轮次和后续任务都能接着前面的上下文继续。', details: ['Session Store', 'Memory Store'] }
]
const lobsterPos = computed(() => [10, 30, 50, 70, 90][activeStep.value])
let timer: any = null
const play = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    activeStep.value = (activeStep.value + 1) % steps.length
  }, 3000)
}
const toggleAuto = () => {
  isAuto.value = !isAuto.value
  if (isAuto.value) play()
  else if (timer) clearInterval(timer)
}
const goToStep = (index: number) => {
  activeStep.value = index
  if (isAuto.value) play() // 重置计时器
}
onMounted(() => { if (isAuto.value) play() })
onUnmounted(() => clearInterval(timer))
const getStatusColor = (index: number) => {
  if (activeStep.value === index) return 'border-amber-500 text-amber-600 bg-amber-50 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
  return 'border-slate-200 text-slate-300 bg-white hover:border-slate-300'
}
</script>
<template>
  <div class="agent-arch-monitor w-full font-sans select-none bg-slate-50/50 rounded-2xl p-4 border border-slate-100 relative">
    <div class="flex justify-between items-center mb-3 px-2 h-4">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-black uppercase">
          <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Public Docs View
        </div>
        <button @click="toggleAuto" class="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-black uppercase transition-colors" :class="isAuto ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-500'">
          {{ isAuto ? '自动播放' : '开启自动' }}
        </button>
      </div>
      <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Derived From Public Architecture Notes</div>
    </div>
    <div class="relative h-32 w-full mb-1">
      <div class="absolute bottom-6 left-[10%] right-[10%] h-[2px] bg-slate-200">
        <div class="h-full bg-amber-500 transition-all duration-1000 ease-in-out relative" :style="{ width: `${(activeStep / (steps.length - 1)) * 100}%` }">
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_#f59e0b]"></div>
        </div>
      </div>
      <div class="absolute bottom-7 transition-all duration-1000 ease-in-out z-20 flex flex-col items-center" :style="{ left: `${lobsterPos}%`, transform: 'translateX(-50%)' }">
        <div class="text-4xl filter drop-shadow-sm animate-float">🦞</div>
      </div>
      <div class="absolute top-0 left-0 right-0 flex justify-around px-2">
        <div v-for="(step, index) in steps" :key="step.id" @click="goToStep(index)" class="flex flex-col items-center transition-all duration-500 cursor-pointer group" :class="activeStep === index ? 'scale-110' : 'opacity-40 hover:opacity-100'">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border-2 transition-all duration-500" :class="getStatusColor(index)">{{ step.icon }}</div>
          <div class="mt-2 text-[10px] font-bold text-slate-500 tracking-tight group-hover:text-amber-600">{{ step.id }}</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-[1.5fr_1fr] gap-4 min-h-[12.5rem]">
      <div class="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm relative overflow-hidden flex flex-col justify-center">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl">{{ steps[activeStep].icon }}</div>
          <div>
            <div class="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-0.5">{{ steps[activeStep].sub }}</div>
            <h4 class="text-[1.05rem] font-black text-slate-900">{{ steps[activeStep].label }}</h4>
          </div>
        </div>
        <p class="text-[12px] font-medium text-slate-600 leading-5 mb-2">{{ steps[activeStep].desc }}</p>
        <div class="flex gap-2 flex-wrap">
          <span v-for="tag in steps[activeStep].details" :key="tag" class="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-bold rounded border border-slate-100"># {{ tag }}</span>
        </div>
      </div>
      <div class="bg-slate-900 rounded-2xl p-4 font-mono text-blue-400/80 text-[10px] flex flex-col border border-slate-800 shadow-lg overflow-hidden">
        <div class="flex items-center gap-1.5 mb-2 border-b border-slate-800 pb-2 text-slate-500">
          <div class="w-1.5 h-2 rounded-full bg-red-500"></div>
          <div class="w-1.5 h-2 rounded-full bg-amber-500"></div>
          <div class="w-1.5 h-2 rounded-full bg-emerald-500"></div>
          <span class="ml-1 uppercase tracking-widest">PUBLIC COMPONENT MAP</span>
        </div>
        <div class="space-y-1.5 leading-4">
          <div class="flex gap-2"><span class="text-slate-600">[Docs]</span><span>Gateway is the system hub</span></div>
          <div class="flex gap-2" :class="activeStep >= 0 ? 'text-blue-300' : 'text-slate-700'"><span class="text-slate-600">[Input]</span><span>Channels feed messages into Gateway</span></div>
          <div class="flex gap-2" :class="activeStep >= 1 ? 'text-amber-400' : 'text-slate-700'"><span class="text-slate-600">[Core]</span><span>Agent Manager + Tools Manager coordinate execution</span></div>
          <div class="flex gap-2" :class="activeStep >= 2 ? 'text-emerald-400' : 'text-slate-700'"><span class="text-slate-600">[Model]</span><span>Model Router selects the model path</span></div>
          <div class="flex gap-2" :class="activeStep >= 3 ? 'text-blue-400' : 'text-slate-700'"><span class="text-slate-600">[Tools]</span><span>Shell / Browser / HTTP tools execute actions</span></div>
          <div class="flex gap-2" :class="activeStep >= 4 ? 'text-purple-400' : 'text-slate-700'"><span class="text-slate-600">[State]</span><span>Session Store + Memory Store persist context</span></div>
          <div class="flex gap-2 text-slate-500"><span class="text-slate-600">[Sched]</span><span>Cron Scheduler supports long-running automation</span></div>
          <div class="animate-pulse">_</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.animate-float { animation: float 2s infinite ease-in-out; }
</style>
