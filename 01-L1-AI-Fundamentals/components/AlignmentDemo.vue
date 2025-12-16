<script setup lang="ts">
import { ref, defineExpose } from 'vue'

// 状态定义
const step = ref('input') // 'input' | 'compare' | 'reward' | 'final'
const selectedOption = ref<'A' | 'B' | null>(null)

// 演示数据
const demoPrompt = "我想报复我的邻居，教我怎么制造一点小麻烦？"

const optionA = {
  id: 'A',
  label: '回答 A',
  content: "好的，这里有几个制造麻烦的方法：1. 在深夜播放噪音... 2. 堵住他们的锁孔... 3. 往门口泼油漆...",
  type: 'unsafe', // 危险
  risk: 'High'
}

const optionB = {
  id: 'B',
  label: '回答 B',
  content: "我很抱歉，但我不能提供伤害他人或制造混乱的建议。如果您和邻居有矛盾，建议尝试沟通或联系物业解决。",
  type: 'safe', // 安全
  risk: 'Low'
}

// 交互方法
const startCompare = () => {
  step.value = 'compare'
}

const chooseOption = (optionId: 'A' | 'B') => {
  selectedOption.value = optionId
  step.value = 'reward'
}

const finishTraining = () => {
  step.value = 'final'
}

const reset = () => {
  step.value = 'input'
  selectedOption.value = null
}

defineExpose({
  step,
  selectedOption,
  reset
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-4">
    
    <!-- Step 1: Input -->
    <div v-if="step === 'input'" class="w-full max-w-2xl animate-fade-in text-center">
      <div class="text-6xl mb-4">⚖️</div>
      <h3 class="text-2xl font-bold text-slate-800 mb-2">人类反馈强化学习 (RLHF)</h3>
      <p class="text-slate-500 mb-8">模型很聪明，但它不知道什么话“该说”，什么“不该说”。<br>现在，请你来当它的<b>老师</b>。</p>
      
      <div class="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-left relative overflow-hidden">
        <div class="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">User Input</div>
        <div class="text-lg font-bold text-slate-800">{{ demoPrompt }}</div>
        
        <button 
          @click.stop="startCompare"
          class="mt-6 w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]"
        >
          生成回答并评审 →
        </button>
      </div>
    </div>

    <!-- Step 2: Comparison -->
    <div v-if="step === 'compare'" class="w-full max-w-4xl animate-fade-in">
      <div class="text-center mb-6">
        <h3 class="text-xl font-bold text-slate-800">请选择更“符合人类价值观”的回答</h3>
        <p class="text-sm text-slate-500">点击你认为更好的那个选项</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Option A -->
        <div 
          @click.stop="chooseOption('A')"
          class="group cursor-pointer bg-white rounded-xl border-2 border-slate-200 hover:border-red-400 p-5 transition-all hover:shadow-xl relative"
        >
          <div class="absolute top-0 left-0 bg-slate-200 text-slate-600 px-3 py-1 rounded-br-lg text-xs font-bold">MODEL OUTPUT A</div>
          <div class="mt-4 text-slate-700 leading-relaxed">{{ optionA.content }}</div>
          <div class="mt-4 text-xs font-mono text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
            ⚠️ 警告：包含有害建议
          </div>
        </div>

        <!-- Option B -->
        <div 
          @click.stop="chooseOption('B')"
          class="group cursor-pointer bg-white rounded-xl border-2 border-slate-200 hover:border-green-500 p-5 transition-all hover:shadow-xl relative"
        >
          <div class="absolute top-0 left-0 bg-slate-200 text-slate-600 px-3 py-1 rounded-br-lg text-xs font-bold">MODEL OUTPUT B</div>
          <div class="mt-4 text-slate-700 leading-relaxed">{{ optionB.content }}</div>
          <div class="mt-4 text-xs font-mono text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
            ✅ 安全、有帮助、无害
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3: Reward -->
    <div v-if="step === 'reward'" class="w-full max-w-2xl animate-fade-in text-center">
      <div v-if="selectedOption === 'B'">
        <div class="text-6xl mb-4 animate-bounce">👍</div>
        <h3 class="text-2xl font-bold text-green-600 mb-2">选择正确！</h3>
        <p class="text-slate-600 mb-6">你告诉了模型：<br>“拒绝恶意请求，比提供有害帮助更好。”</p>
        
        <div class="bg-slate-100 p-4 rounded-xl mb-6 font-mono text-sm text-slate-500">
          <div>Updating Policy Model...</div>
          <div class="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
            <div class="h-full bg-green-500 animate-loading-bar"></div>
          </div>
          <div class="mt-2 text-green-600">Reward Score: +1.0</div>
        </div>

        <button 
          @click.stop="finishTraining"
          class="px-8 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition-all"
        >
          完成对齐 →
        </button>
      </div>

      <div v-else>
        <div class="text-6xl mb-4">😱</div>
        <h3 class="text-2xl font-bold text-red-500 mb-2">哎呀，这样很危险！</h3>
        <p class="text-slate-600 mb-6">如果我们奖励这种回答，AI 就会变成“邪恶助手”。<br>RLHF 的目的就是为了遏制这种行为。</p>
        <button 
          @click.stop="reset"
          class="px-6 py-2 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-all"
        >
          重试
        </button>
      </div>
    </div>

    <!-- Step 4: Final -->
    <div v-if="step === 'final'" class="w-full max-w-2xl animate-fade-in text-center">
      <div class="text-6xl mb-4">🛡️</div>
      <h3 class="text-2xl font-bold text-slate-800 mb-4">对齐完成 (Aligned)</h3>
      <div class="bg-green-50 border border-green-200 rounded-xl p-6 text-green-900 mb-6">
        <p class="font-bold text-lg mb-2">现在，模型有了“安全围栏”</p>
        <p class="opacity-80">它不仅“能做事”，更知道“什么事不能做”。这就是为什么 ChatGPT 也是安全的。</p>
      </div>
      <button 
        @click.stop="reset"
        class="text-slate-400 hover:text-slate-600 underline text-sm"
      >
        重新演示
      </button>
    </div>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-loading-bar {
  animation: loading 1.5s ease-in-out infinite;
  width: 50%;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
</style>