<script setup lang="ts">
import { computed, ref } from 'vue'

type StageKey = 'qa' | 'assist' | 'agent'

const selected = ref<StageKey>('agent')

const stages: Array<{
  key: StageKey
  era: string
  title: string
  icon: string
  milestone: string
  border: string
  bg: string
  color: string
  interactionBefore: string
  interactionAfter: string
  toolsBefore: string
  toolsAfter: string
  agencyBefore: string
  agencyAfter: string
  summary: string
}> = [
  {
    key: 'qa',
    era: '2022-2023',
    title: '一问一答',
    icon: '💬',
    milestone: '大模型先把“问答”这件事做得前所未有地顺。',
    border: 'border-slate-200',
    bg: 'bg-white/90',
    color: 'text-slate-600',
    interactionBefore: '用户逐轮提问',
    interactionAfter: '系统按轮回答',
    toolsBefore: '几乎没有工具',
    toolsAfter: '知识与文本生成',
    agencyBefore: '行动靠人继续做',
    agencyAfter: '自主性接近零',
    summary: '先解决“能答”，还没解决“能做”。',
  },
  {
    key: 'assist',
    era: '2024-2025',
    title: '辅助推进',
    icon: '🧭',
    milestone: '产品开始从“回答”转向“协助完成任务”。',
    border: 'border-blue-200',
    bg: 'bg-blue-50/80',
    color: 'text-blue-700',
    interactionBefore: '你给一个任务目标',
    interactionAfter: '它拆任务、推几步',
    toolsBefore: '只能回答或提示',
    toolsAfter: '接少量工具或流程',
    agencyBefore: '用户主导流程',
    agencyAfter: '需要频繁确认',
    summary: '开始“推进任务”，但还没进入持续执行。',
  },
  {
    key: 'agent',
    era: '2025-2026',
    title: '高自主性 Agent',
    icon: '🦞',
    milestone: '像 OpenClaw 这样的产品，把能力推进到“持续执行”。',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50/80',
    color: 'text-emerald-700',
    interactionBefore: '用户给目标',
    interactionAfter: '系统自己跑多轮',
    toolsBefore: '工具偏单点调用',
    toolsAfter: '浏览器、文件、终端被串起',
    agencyBefore: '每一步都要人推进',
    agencyAfter: '能自己续下一步',
    summary: '重点从“更会说”变成“持续执行”。',
  },
]

const current = computed(() => stages.find((item) => item.key === selected.value) ?? stages[2])
</script>

<template>
  <div class="mt-5">
    <div class="relative rounded-[20px] border border-slate-200 bg-white/90 px-3 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.07)]">
      <div class="absolute left-[62px] right-[62px] top-[48px] h-[3px] rounded-full bg-slate-200"></div>
      <div class="relative grid gap-2.5 md:grid-cols-3">
        <button
          v-for="stage in stages"
          :key="stage.key"
          class="relative z-10 rounded-[16px] border px-2.5 py-2 text-left transition duration-200"
          :class="selected === stage.key ? [stage.border, stage.bg, '-translate-y-1 shadow-[0_15px_35px_rgba(15,23,42,0.06)]'] : 'border-slate-200 bg-white/80'"
          @click="selected = stage.key"
        >
          <div class="flex items-center justify-between gap-3">
            <div>
              <div class="text-[8px] font-black uppercase tracking-[0.16em]" :class="selected === stage.key ? stage.color : 'text-slate-400'">
                {{ stage.era }}
              </div>
              <div class="mt-0.5 text-[0.96rem] font-bold text-slate-900">{{ stage.title }}</div>
            </div>
            <div class="text-[1.7rem] leading-none">{{ stage.icon }}</div>
          </div>
          <div class="mt-2 h-4 w-4 rounded-full border-[3px] border-white bg-blue-500 shadow-[0_4px_10px_rgba(59,130,246,0.16)]"></div>
          <div class="mt-1 text-[11px] leading-4" :class="selected === stage.key ? 'text-slate-700' : 'text-slate-500'">
            {{ stage.milestone }}
          </div>
        </button>
      </div>
    </div>

    <div class="mt-2 rounded-[18px] border bg-white/90 p-2.5 shadow-[0_12px_28px_rgba(15,23,42,0.07)]" :class="[current.border, current.bg]">
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="text-[8px] font-black uppercase tracking-[0.16em]" :class="current.color">能力跃迁</div>
          <div class="mt-0.5 text-[1.2rem] font-black text-slate-900">{{ current.title }}</div>
          <div class="mt-0.5 text-[13px] font-medium text-slate-700">{{ current.milestone }}</div>
        </div>
        <div class="text-[2.7rem] leading-none">{{ current.icon }}</div>
      </div>

      <div class="mt-2 grid gap-2 md:grid-cols-3">
        <section class="rounded-[15px] border border-slate-200 bg-white/85 p-2">
          <div class="text-[8px] font-black uppercase tracking-[0.14em] text-slate-400">交互</div>
          <div class="mt-1 text-[9px] font-bold text-slate-400">Before</div>
          <p class="mt-0.5 text-[12px] leading-4 text-slate-600">{{ current.interactionBefore }}</p>
          <div class="mt-1 text-[9px] font-bold" :class="current.color">After</div>
          <p class="mt-0.5 text-[12px] leading-4 text-slate-700">{{ current.interactionAfter }}</p>
        </section>
        <section class="rounded-[15px] border border-slate-200 bg-white/85 p-2">
          <div class="text-[8px] font-black uppercase tracking-[0.14em] text-slate-400">工具</div>
          <div class="mt-1 text-[9px] font-bold text-slate-400">Before</div>
          <p class="mt-0.5 text-[12px] leading-4 text-slate-600">{{ current.toolsBefore }}</p>
          <div class="mt-1 text-[9px] font-bold" :class="current.color">After</div>
          <p class="mt-0.5 text-[12px] leading-4 text-slate-700">{{ current.toolsAfter }}</p>
        </section>
        <section class="rounded-[15px] border border-slate-200 bg-white/85 p-2">
          <div class="text-[8px] font-black uppercase tracking-[0.14em] text-slate-400">自主性</div>
          <div class="mt-1 text-[9px] font-bold text-slate-400">Before</div>
          <p class="mt-0.5 text-[12px] leading-4 text-slate-600">{{ current.agencyBefore }}</p>
          <div class="mt-1 text-[9px] font-bold" :class="current.color">After</div>
          <p class="mt-0.5 text-[12px] leading-4 text-slate-700">{{ current.agencyAfter }}</p>
        </section>
      </div>

      <div class="mt-2 rounded-[15px] border border-amber-200 bg-amber-50/80 px-2.5 py-1.5 text-[12px] leading-4 text-amber-900">
        {{ current.summary }}
      </div>
    </div>
  </div>
</template>
