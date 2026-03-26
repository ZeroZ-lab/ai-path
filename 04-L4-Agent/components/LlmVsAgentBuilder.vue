<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const step = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const parts = [
  {
    title: '感知',
    icon: '👁️',
    color: 'text-blue-700',
    border: 'border-blue-200',
    bg: 'bg-blue-50/85',
    position: 'left-[36px] top-[56px]',
    line: 'left-[172px] top-[128px] w-[96px] h-[2px]',
    detail: '让它看到页面、文件、消息和环境状态。',
  },
  {
    title: '行动',
    icon: '🛠️',
    color: 'text-amber-700',
    border: 'border-amber-200',
    bg: 'bg-amber-50/85',
    position: 'right-[36px] top-[56px]',
    line: 'right-[172px] top-[128px] w-[96px] h-[2px]',
    detail: '让它真的去点、去跑、去改，而不只是提建议。',
  },
  {
    title: '记忆',
    icon: '🧠',
    color: 'text-emerald-700',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50/85',
    position: 'left-[92px] bottom-[30px]',
    line: 'left-[194px] bottom-[122px] w-[82px] h-[2px] rotate-[28deg]',
    detail: '让它能记住规则、历史、身份和上下文，不是每轮重来。',
  },
  {
    title: '调度',
    icon: '🔄',
    color: 'text-violet-700',
    border: 'border-violet-200',
    bg: 'bg-violet-50/85',
    position: 'right-[92px] bottom-[30px]',
    line: 'right-[194px] bottom-[122px] w-[82px] h-[2px] -rotate-[28deg]',
    detail: '让它观察结果、更新判断、继续下一步，形成循环。',
  },
] as const

const stageTitle = computed(() => {
  if (step.value === 0) return '只有 LLM'
  if (step.value < 4) return `LLM + ${parts[step.value - 1].title}`
  return 'LLM 被接成 Agent'
})

const stageSummary = computed(() => {
  if (step.value === 0) return '它会基于上下文继续预测，但还只是一个会说话的大脑核心。'
  if (step.value < 4) return parts[step.value - 1].detail
  return '当感知、行动、记忆、调度都补上以后，它才从“会回答”变成“会持续做事”。'
})

const activeCount = computed(() => Math.min(step.value, 4))

const startLoop = () => {
  timer = setInterval(() => {
    step.value = step.value >= 4 ? 0 : step.value + 1
  }, 1800)
}

onMounted(() => {
  startLoop()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="mt-5 grid gap-4 md:grid-cols-[1fr_290px] items-start">
    <div class="rounded-[26px] border border-slate-200 bg-white/90 p-3.5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
      <div class="relative h-[286px] overflow-hidden rounded-[20px] border border-slate-100 bg-[radial-gradient(circle_at_center,rgba(248,250,252,0.96),rgba(241,245,249,0.92))]">
        <svg class="absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <line
            x1="260" y1="175"
            x2="420" y2="225"
            stroke="#60a5fa"
            stroke-width="4"
            stroke-linecap="round"
            :opacity="activeCount > 0 ? 1 : 0.25"
          />
          <line
            x1="740" y1="175"
            x2="580" y2="225"
            stroke="#60a5fa"
            stroke-width="4"
            stroke-linecap="round"
            :opacity="activeCount > 1 ? 1 : 0.25"
          />
          <line
            x1="330" y1="455"
            x2="445" y2="340"
            stroke="#60a5fa"
            stroke-width="4"
            stroke-linecap="round"
            :opacity="activeCount > 2 ? 1 : 0.25"
          />
          <line
            x1="670" y1="455"
            x2="555" y2="340"
            stroke="#60a5fa"
            stroke-width="4"
            stroke-linecap="round"
            :opacity="activeCount > 3 ? 1 : 0.25"
          />
        </svg>

        <div
          v-for="(part, index) in parts"
          :key="part.title"
          class="absolute transition-all duration-500"
          :class="[
            index === 0 ? 'left-[24px] top-[36px]' : '',
            index === 1 ? 'right-[24px] top-[36px]' : '',
            index === 2 ? 'left-[74px] bottom-[24px]' : '',
            index === 3 ? 'right-[74px] bottom-[24px]' : '',
          ]"
          :style="{ opacity: activeCount > index ? 1 : 0.28 }"
        >
          <div
            class="w-[118px] rounded-[16px] border px-2.5 py-2.5 shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition-all duration-500"
            :class="activeCount > index ? [part.border, part.bg, 'scale-100'] : 'border-slate-200 bg-white/80 scale-[0.96]'"
          >
            <div class="flex items-center gap-2">
              <div class="text-[1rem] leading-none">{{ part.icon }}</div>
              <div class="text-[12px] font-bold text-slate-900">{{ part.title }}</div>
            </div>
          </div>
        </div>

        <div class="absolute left-1/2 top-[50%] h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.10)]"></div>
        <div
          class="absolute left-1/2 top-[50%] flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white text-[3rem] shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-all duration-500"
          :class="step >= 4 ? 'bg-emerald-600 scale-105' : 'bg-slate-900'"
        >
          {{ step >= 4 ? '🤖' : '🧠' }}
        </div>
        <div class="absolute left-1/2 bottom-[16px] w-[220px] -translate-x-1/2 text-center">
          <div class="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">
            {{ step >= 4 ? 'Agent Runtime' : 'LLM Core' }}
          </div>
          <div class="mt-0.5 text-[0.95rem] font-bold text-slate-900">
            {{ stageTitle }}
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-[24px] border border-slate-200 bg-white/90 p-3.5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
      <div class="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">Automatic Build</div>
      <div class="mt-1.5 text-[1.15rem] font-black text-slate-900">{{ stageTitle }}</div>
      <p class="mt-2 text-[13px] leading-5 text-slate-700">{{ stageSummary }}</p>

      <div class="mt-3.5 space-y-2">
        <div
          v-for="(part, index) in parts"
          :key="`${part.title}-item`"
          class="rounded-[14px] border px-3 py-2 transition-all duration-400"
          :class="activeCount > index ? [part.border, part.bg] : 'border-slate-200 bg-slate-50/60 opacity-60'"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <div class="text-[0.95rem] leading-none">{{ part.icon }}</div>
              <div class="text-[12px] font-bold text-slate-900">{{ part.title }}</div>
            </div>
            <div class="text-[10px] font-bold" :class="activeCount > index ? part.color : 'text-slate-400'">
              {{ activeCount > index ? '已接入' : '未接入' }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3.5 rounded-[16px] border border-amber-200 bg-amber-50/80 px-3.5 py-2.5 text-[12px] leading-5 text-amber-900">
        所以 Agent 不是“另一个模型”，而是把 LLM 一步步接成系统。
      </div>
    </div>
  </div>
</template>
