<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type Candidate = {
  token: string
  score: number
}

type Step = {
  context: string
  candidates: Candidate[]
}

const steps: Step[] = [
  {
    context: '',
    candidates: [
      { token: '你', score: 0.52 },
      { token: '我', score: 0.18 },
      { token: '它', score: 0.12 },
      { token: '他', score: 0.08 },
      { token: '这', score: 0.06 },
    ],
  },
  {
    context: '你',
    candidates: [
      { token: '好', score: 0.61 },
      { token: '在', score: 0.14 },
      { token: '的', score: 0.11 },
      { token: '们', score: 0.08 },
      { token: '会', score: 0.06 },
    ],
  },
  {
    context: '你好',
    candidates: [
      { token: '！', score: 0.55 },
      { token: '啊', score: 0.22 },
      { token: '，', score: 0.12 },
      { token: '呀', score: 0.07 },
      { token: '~', score: 0.04 },
    ],
  },
  {
    context: '你好！',
    candidates: [
      { token: '很', score: 0.38 },
      { token: '请', score: 0.22 },
      { token: '有', score: 0.18 },
      { token: '欢迎', score: 0.12 },
      { token: '需要', score: 0.1 },
    ],
  },
  {
    context: '你好！很',
    candidates: [
      { token: '高', score: 0.57 },
      { token: '荣', score: 0.17 },
      { token: '大', score: 0.12 },
      { token: '值', score: 0.08 },
      { token: '幸', score: 0.06 },
    ],
  },
  {
    context: '你好！很高',
    candidates: [
      { token: '兴', score: 0.6 },
      { token: '级', score: 0.17 },
      { token: '度', score: 0.1 },
      { token: '效', score: 0.07 },
      { token: '亮', score: 0.06 },
    ],
  },
  {
    context: '你好！很高兴',
    candidates: [
      { token: '认', score: 0.43 },
      { token: '见', score: 0.23 },
      { token: '遇', score: 0.18 },
      { token: '和', score: 0.1 },
      { token: '能', score: 0.06 },
    ],
  },
  {
    context: '你好！很高兴认',
    candidates: [
      { token: '识', score: 0.66 },
      { token: '知', score: 0.19 },
      { token: '同', score: 0.09 },
      { token: '识你', score: 0.06 },
      { token: '见你', score: 0.05 },
    ],
  },
  {
    context: '你好！很高兴认识',
    candidates: [
      { token: '你', score: 0.78 },
      { token: '大家', score: 0.1 },
      { token: '朋友', score: 0.07 },
      { token: '各位', score: 0.05 },
    ],
  },
  {
    context: '你好！很高兴认识你',
    candidates: [
      { token: '！', score: 0.72 },
      { token: '。', score: 0.15 },
      { token: '哦', score: 0.07 },
      { token: '呀', score: 0.06 },
    ],
  },
]

const currentStep = ref(0)
const builtText = computed(() => steps[currentStep.value].context + topToken.value)
const topToken = computed(() => steps[currentStep.value].candidates[0].token)
const totalSteps = steps.length

const play = ref(true)
let timer: ReturnType<typeof setInterval> | null = null

const next = () => {
  currentStep.value = (currentStep.value + 1) % totalSteps
}

const togglePlay = () => {
  play.value = !play.value
  if (play.value) {
    startLoop()
  } else {
    stopLoop()
  }
}

const startLoop = () => {
  stopLoop()
  timer = setInterval(next, 1000)
}

const stopLoop = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startLoop()
})

onBeforeUnmount(() => {
  stopLoop()
})
</script>

<template>
  <div
    class="w-full max-w-[820px] rounded-[22px] border bg-gradient-to-b from-white/90 to-[#eef3ff]/90 p-4 sm:p-5 shadow-[0_14px_45px_rgba(15,23,42,0.12)] backdrop-blur"
  >
    <div class="mb-3 grid gap-2 sm:grid-cols-[1fr_auto_auto] sm:items-center">
      <div
        class="rounded-xl border border-blue-600/20 bg-blue-600/10 px-3 py-2 text-[clamp(1rem,1.4vw,1.2rem)] font-extrabold text-slate-900"
        v-html="builtText"
      />
      <button
        class="justify-self-start rounded-lg bg-slate-900 px-3 py-2 text-sm font-bold text-white shadow-[0_8px_22px_rgba(15,23,42,0.22)] transition hover:opacity-90 sm:justify-self-auto"
        type="button"
        @click="togglePlay"
      >
        {{ play ? '暂停' : '播放' }}
      </button>
    </div>
    <div class="grid gap-3 sm:gap-4 md:grid-cols-2">
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.08)]">
        <div class="mb-1 text-sm font-bold text-slate-700">当前上下文</div>
        <div
          class="min-h-[1.8rem] text-sm font-bold text-slate-900"
          v-html="steps[currentStep].context || '(起始符)'"
        />
      </div>
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.08)]">
        <div class="mb-2 text-sm font-bold text-slate-700">候选及分数</div>
        <ul class="space-y-2">
          <li
            v-for="(c, idx) in steps[currentStep].candidates.slice(0, 4)"
            :key="c.token + idx"
            class="grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-xl border border-slate-900/10 bg-slate-900/5 px-3 py-2"
            :class="idx === 0 ? 'border-blue-600/30 bg-blue-600/10' : ''"
          >
            <span class="text-xs font-bold text-slate-900">{{ c.token }}</span>
            <span class="text-[11px] font-semibold text-slate-600 [font-variant-numeric:tabular-nums]">
              {{ Math.round(c.score * 100) }}%
            </span>
            <span
              v-if="idx === 0"
              class="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-bold text-white"
            >
              取最高
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
