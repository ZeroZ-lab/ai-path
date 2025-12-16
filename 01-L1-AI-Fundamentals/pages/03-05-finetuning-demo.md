<script setup>
import { ref, computed } from 'vue'

const demoRef = ref(null)

// 代理组件方法
const handleNext = () => demoRef.value?.nextStage()
const handlePrev = () => demoRef.value?.prevStage()
const handleRun = () => demoRef.value?.runDemo()

// 计算属性控制按钮状态
const isFirst = computed(() => demoRef.value?.currentStageIndex === 0)
const isLast = computed(() => demoRef.value?.currentStageIndex === 2)
const isTyping = computed(() => demoRef.value?.isTyping)
</script>

## 3.5 交互演示：微调的作用

<div class="flex items-center justify-center h-[80%]">
  <FinetuningDemo ref="demoRef" />
</div>

<!-- 底部控制栏 -->
<div class="fixed bottom-10 left-0 w-full flex justify-center gap-6 z-50">
  
  <!-- 阶段 1：基座模型 -->
  <template v-if="isFirst">
    <button 
      @click.stop="handleRun"
      class="px-6 py-2 bg-white border border-slate-200 shadow-lg rounded-full text-slate-700 font-bold hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-2"
      :disabled="isTyping"
    >
      <span v-if="!isTyping">▶️ 试探基座模型</span>
      <span v-else>生成中...</span>
    </button>
    <button 
      @click.stop="handleNext"
      class="px-6 py-2 bg-blue-600 shadow-lg shadow-blue-200 rounded-full text-white font-bold hover:bg-blue-700 active:scale-95 transition-all"
    >
      开始微调训练 →
    </button>
  </template>

  <!-- 阶段 2：训练中 -->
  <template v-else-if="!isFirst && !isLast">
    <button 
      @click.stop="handleNext"
      class="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-200 rounded-full text-white font-bold hover:scale-105 active:scale-95 transition-all animate-pulse"
    >
      完成微调，查看结果 ✨
    </button>
  </template>

  <!-- 阶段 3：微调后 -->
  <template v-else>
    <button 
      @click.stop="handlePrev"
      class="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 font-medium transition-all"
    >
      ← 回顾过程
    </button>
    <button 
      @click.stop="handleRun"
      class="px-6 py-2 bg-green-600 shadow-lg shadow-green-200 rounded-full text-white font-bold hover:bg-green-700 active:scale-95 transition-all"
      :disabled="isTyping"
    >
      <span v-if="!isTyping">🔄 再次测试助手</span>
      <span v-else>生成中...</span>
    </button>
  </template>

</div>

<!--
这个演示是为了让大家直观感受到“微调”前后的巨大差异。

1. **基座模型阶段**：
   当我们给它一个输入“今天天气真好”，它以为我们在玩成语接龙或者写作文。
   它续写了：“...我和小明去放风筝”。
   它没做错，只是它不知道我们是在“对话”。

2. **微调过程**：
   我们在做什么？我们在给它看成千上万个“对话范例”。
   Q：你好 A：你好
   Q：写首诗 A：好的，这是诗...
   这就像教一个博学的书呆子学会“说人话”。

3. **微调后模型**：
   同样的输入“今天天气真好”。
   现在它回答：“是的！很适合出门...”
   它终于听懂了，并且开始像一个助手一样回应我们。
-->
