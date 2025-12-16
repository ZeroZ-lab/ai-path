<script setup lang="ts">
import { ref, computed, defineExpose } from 'vue'

const stages = ['base', 'training', 'finetuned'] as const
const currentStageIndex = ref(0)
const outputText = ref('')
const isTyping = ref(false)

// 模拟数据
const demoPrompt = "今天天气真好"

const baseModelOutput = "，我和小明决定去公园放风筝。草地绿油油的，风儿轻轻吹过..."
const finetunedModelOutput = "是的！阳光明媚的日子确实很适合出门走走。你有什么出行计划吗？"

const trainingData = [
  { q: "你好", a: "你好！我是AI助手。" },
  { q: "写首诗", a: "床前明月光..." },
  { q: "总结全文", a: "本文主要讲述了..." },
]

// 打字机效果工具函数
const typeText = async (text: string) => {
  isTyping.value = true
  outputText.value = ''
  for (let i = 0; i < text.length; i++) {
    outputText.value += text[i]
    await new Promise(r => setTimeout(r, 50))
  }
  isTyping.value = false
}

// 暴露给父组件的方法
const nextStage = () => {
  if (currentStageIndex.value < stages.length - 1) {
    currentStageIndex.value++
    outputText.value = ''
    
    // 如果进入微调完成阶段，自动触发打字
    if (currentStageIndex.value === 2) {
      setTimeout(() => runDemo(), 500)
    }
  }
}

const prevStage = () => {
  if (currentStageIndex.value > 0) {
    currentStageIndex.value--
    outputText.value = ''
  }
}

const runDemo = () => {
  if (currentStageIndex.value === 0) {
    typeText(baseModelOutput)
  } else if (currentStageIndex.value === 2) {
    typeText(finetunedModelOutput)
  }
}

defineExpose({
  nextStage,
  prevStage,
  runDemo,
  currentStageIndex,
  isTyping
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 select-none">
    
    <!-- Stage 1: Base Model -->
    <div v-if="currentStageIndex === 0" class="w-full max-w-2xl animate-fade-in">
      <div class="text-center mb-6">
        <div class="text-6xl mb-2">📚</div>
        <h3 class="text-2xl font-bold text-slate-700">基座模型 (Base Model)</h3>
        <p class="text-slate-500">它读了很多书，但不知道怎么“聊天”。它只会<span class="text-blue-600 font-bold">续写</span>。</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 text-xs text-slate-400 font-mono flex gap-2">
          <div class="w-3 h-3 rounded-full bg-red-400"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
          <span>EDITOR</span>
        </div>
        <div class="p-6 font-mono text-lg min-h-[120px]">
          <span class="text-blue-600 font-bold">{{ demoPrompt }}</span>
          <span class="text-slate-800">{{ outputText }}</span>
          <span v-if="isTyping" class="animate-pulse">|</span>
        </div>
      </div>
    </div>

    <!-- Stage 2: Training -->
    <div v-if="currentStageIndex === 1" class="w-full max-w-2xl animate-fade-in">
      <div class="text-center mb-8">
        <div class="text-6xl mb-2 animate-bounce">🎓</div>
        <h3 class="text-2xl font-bold text-slate-700">正在微调 (Fine-tuning)</h3>
        <p class="text-slate-500">给模型看大量的“指令-回答”范例，教它学会<span class="text-amber-600 font-bold">听指令</span>。</p>
      </div>

      <div class="relative h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 flex flex-col gap-3 p-4 opacity-50">
          <div v-for="(item, i) in trainingData" :key="i" class="bg-white p-3 rounded-lg shadow-sm transform translate-x-4 animate-slide-up" :style="{ animationDelay: `${i * 0.5}s` }">
            <span class="bg-blue-100 text-blue-800 text-xs px-1 rounded">Q</span> {{ item.q }}
            <span class="ml-2 bg-green-100 text-green-800 text-xs px-1 rounded">A</span> {{ item.a }}
          </div>
        </div>
        <div class="z-10 bg-white px-6 py-3 rounded-full shadow-xl font-bold text-slate-700 flex items-center gap-3">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          Learning Human Intent...
        </div>
      </div>
    </div>

    <!-- Stage 3: Finetuned Model -->
    <div v-if="currentStageIndex === 2" class="w-full max-w-2xl animate-fade-in">
      <div class="text-center mb-6">
        <div class="text-6xl mb-2">🤖</div>
        <h3 class="text-2xl font-bold text-slate-700">微调后模型 (Instruct Model)</h3>
        <p class="text-slate-500">现在它是一个<span class="text-green-600 font-bold">助手</span>了，能理解你的意图。</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 text-xs text-slate-400 font-mono flex justify-between items-center">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span>CHAT INTERFACE</span>
        </div>
        <div class="p-4 flex flex-col gap-4 min-h-[160px]">
          <!-- User Bubble -->
          <div class="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm shadow-md">
            {{ demoPrompt }}
          </div>
          <!-- AI Bubble -->
          <div v-if="outputText" class="self-start bg-gray-100 text-slate-800 px-4 py-2 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%]">
            {{ outputText }}
            <span v-if="isTyping" class="inline-block w-2 h-4 bg-slate-400 animate-pulse align-middle ml-1"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 2s infinite linear;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  0% { transform: translateY(100%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-150%); opacity: 0; }
}
</style>
