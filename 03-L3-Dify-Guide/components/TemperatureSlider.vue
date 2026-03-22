<script setup lang="ts">
import { ref, computed } from 'vue'
const temperature = ref(0.1)
const prompt = "请律师给“AI法律助手”起个标语："
const outputs = {
  low: [
    "高效、精准、专业的法律合作伙伴。",
    "专注于法律领域的智能辅助工具。",
    "科技赋能法律，提升工作效率。"
  ],
  medium: [
    "懂法律的 AI，更懂你的 AI。",
    "你的 24 小时专属法务合伙人。",
    "智法未来，律政先锋。"
  ],
  high: [
    "律政界的钢铁侠，比你还懂法条！",
    "不想当律师的 AI 不是好法官（？",
    "让法律像喝咖啡一样简单（也许吧）。"
  ]
}
const currentOutput = computed(() => {
  if (temperature.value < 0.4) return outputs.low[0]
  if (temperature.value < 0.8) return outputs.medium[0]
  return outputs.high[0]
})
const modeLabel = computed(() => {
  if (temperature.value < 0.4) return { text: "严谨 (Conservative)", color: "text-blue-600", bg: "bg-blue-50" }
  if (temperature.value < 0.8) return { text: "平衡 (Balanced)", color: "text-purple-600", bg: "bg-purple-50" }
  return { text: "奔放 (Creative)", color: "text-orange-600", bg: "bg-orange-50" }
})
</script>
<template>
  <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg">
    <div class="flex items-center justify-between mb-8">
      <h3 class="text-lg font-bold text-slate-800">Prompt: {{ prompt }}</h3>
      <div :class="`px-3 py-1 rounded-full text-xs font-bold ${modeLabel.color} ${modeLabel.bg}`">
        {{ modeLabel.text }}
      </div>
    </div>
    <div class="h-32 bg-slate-50 rounded-2xl border border-slate-200 p-4 mb-8 flex items-center justify-center relative overflow-hidden transition-all duration-300">
      <div class="text-xl text-slate-700 font-serif text-center px-4 leading-relaxed transition-all duration-300 transform">
        “ {{ currentOutput }} ”
      </div>
      <div class="absolute bottom-2 right-3 text-[10px] text-slate-400">AI Output</div>
    </div>
    <div class="relative pt-6 pb-2 px-2">
       <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.1" 
        v-model="temperature"
        class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
      >
      <div class="flex justify-between mt-2 text-xs text-slate-400 font-medium">
        <span>0.0 (严谨)</span>
        <span class="text-indigo-600 font-bold">Temperature: {{ temperature }}</span>
        <span>1.0 (奔放)</span>
      </div>
    </div>
  </div>
</template>
