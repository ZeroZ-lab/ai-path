<script setup>
import { ref, computed } from 'vue'

const pretrainingStepsRef = ref(null)

const handleNext = () => {
  if (pretrainingStepsRef.value && pretrainingStepsRef.value.nextStep) {
    pretrainingStepsRef.value.nextStep()
  }
}

const handlePrev = () => {
  if (pretrainingStepsRef.value && pretrainingStepsRef.value.prevStep) {
    pretrainingStepsRef.value.prevStep()
  }
}

const isFirstStep = computed(() => pretrainingStepsRef.value?.currentStep === 0)
const isLastStep = computed(() => pretrainingStepsRef.value?.currentStep === (pretrainingStepsRef.value?.steps?.length - 1))
</script>

## 3.3 交互演示：预训练的流水线

<div class="flex items-center justify-center h-[80%]">
  <PretrainingSteps ref="pretrainingStepsRef" />
</div>

<div class="flex justify-center gap-4 mt-4">
  <button
    @click.stop="handlePrev"
    class="px-6 py-2 rounded-lg text-lg font-semibold transition-colors focus:outline-none"
    :class="isFirstStep ? 'text-slate-400 bg-slate-100 cursor-not-allowed' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'"
    :disabled="isFirstStep"
  >
    ← 上一步
  </button>
  <button
    @click.stop="handleNext"
    class="px-6 py-2 rounded-lg text-lg font-semibold transition-colors focus:outline-none"
    :class="isLastStep ? 'text-slate-400 bg-slate-100 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'"
    :disabled="isLastStep"
  >
    下一步 →
  </button>
</div>

<!--
我们刚才说了预训练的原理。
现在，我们通过这个简单的交互，来模拟一下这个过程。

(点击下一步)
第一步，是吃数据。就像把整个图书馆的书搬进电脑。

(点击下一步)
第二步，是切分。模型不认识“苹果”这个词，它可能认识的是“苹”和“果”，或者更细的编码。这叫 Tokenization。

(点击下一步)
第三步，是最关键的预测。遮住后面一个词，猜它是谁。猜对了奖励，猜错了惩罚。这就叫训练。

(点击下一步)
最后，我们得到了基座模型。它懂很多，但还不会好好说话。
-->