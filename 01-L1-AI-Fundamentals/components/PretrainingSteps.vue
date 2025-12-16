<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const steps = [
  {
    title: '海量数据收集',
    desc: '从互联网、书籍、论文中收集PB级文本数据',
    icon: '📚',
    detail: '包括维基百科、GitHub代码、Common Crawl等...这是大模型的"食物"。'
  },
  {
    title: '分词 (Tokenization)',
    desc: '将文本切分成模型能理解的最小单位 (Tokens)',
    icon: '✂️',
    detail: '就像把句子拆解成积木。例如："Understanding AI" → ["Under", "stand", "ing", " AI"]'
  },
  {
    title: '预测训练 (Next Token Prediction)',
    desc: '核心任务：根据上文预测下一个词',
    icon: '🔮',
    detail: '这是训练的本质。模型不断试错：输入 "The cat sat on the"，目标输出 "mat"。数万亿次的练习后，它学会了概率。'
  },
  {
    title: '基座模型 (Base Model)',
    desc: '习得语言规律和世界知识的通用模型',
    icon: '🧠',
    detail: '此时的模型像一个博学家，懂世界万物，但还不会遵循人类指令（比如它可能会续写你的问题而不是回答它）。'
  }
]

const currentStep = ref(0)

const next = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++
}

const prev = () => {
  if (currentStep.value > 0) currentStep.value--
}

// Expose the methods and state so parent can control them
defineExpose({
  nextStep: next,
  prevStep: prev,
  currentStep,
  steps // Expose steps array for length check
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-4">
    <!-- Progress Bar -->
    <div class="flex items-center gap-2 mb-8 w-full max-w-2xl">
      <div 
        v-for="(step, idx) in steps" 
        :key="idx"
        class="flex-1 h-2 rounded-full transition-all duration-500"
        :class="idx <= currentStep ? 'bg-blue-500' : 'bg-slate-200'"
      ></div>
    </div>

    <!-- Main Content Card -->
    <div class="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden min-h-[320px] flex flex-col">
      <div class="p-8 flex-1 flex flex-col items-center text-center transition-all duration-500" :key="currentStep">
        <div class="text-6xl mb-6 animate-bounce-in">{{ steps[currentStep].icon }}</div>
        <h3 class="text-2xl font-bold text-slate-800 mb-3">{{ steps[currentStep].title }}</h3>
        <p class="text-lg text-slate-600 mb-6">{{ steps[currentStep].desc }}</p>
        <div class="bg-slate-50 rounded-xl p-4 text-slate-500 text-sm w-full border border-slate-100">
          <span class="font-bold text-slate-400 uppercase tracking-wider text-xs block mb-1">DETAIL</span>
          {{ steps[currentStep].detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-bounce-in {
  animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}
</style>
