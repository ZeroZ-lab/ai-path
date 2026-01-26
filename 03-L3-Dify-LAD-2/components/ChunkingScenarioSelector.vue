<script setup lang="ts">
import { ref } from 'vue'

const selectedScenario = ref<string | null>(null)

const scenarios = [
  { 
    id: 'wiki', 
    icon: '📘', 
    title: '产品说明书 / Wiki', 
    desc: '结构清晰、段落独立的通用文档。',
    recommendation: {
      mode: '自动分段 (Automatic)',
      icon: '✂️',
      color: 'blue',
      reason: '通用性最强。设置 500-800 Token + 10% 重叠即可满足大部分需求。'
    }
  },
  { 
    id: 'qa', 
    icon: '❓', 
    title: '客服 QA 问答对', 
    desc: 'Excel/CSV 格式，一问一答。',
    recommendation: {
      mode: 'QA 分段 (Q&A Split)',
      icon: '💬',
      color: 'emerald',
      reason: '不仅索引“问题”，还索引“答案”。确保检索时能匹配到问题的各种变体。'
    }
  },
  { 
    id: 'legal', 
    icon: '⚖️', 
    title: '法律合同 / 长篇小说', 
    desc: '上下文依赖极强，前文定义后文引用。',
    recommendation: {
      mode: '父子索引 (Parent-Child)',
      icon: '👨‍👦',
      color: 'purple',
      reason: '必须保留长窗口上下文！否则切片后的“本协议”、“甲方”将失去指代意义。'
    }
  },
  { 
    id: 'meeting', 
    icon: '🗣️', 
    title: '庭审笔录 / 会议', 
    desc: '长篇对话，话题跳跃，逻辑流式分布。',
    recommendation: {
      mode: '父子索引 (Parent-Child)',
      icon: '👨‍👦',
      color: 'purple',
      reason: '搜“子切片”（单句发言）能精准定位，但喂给 LLM 时需提供“父切片”（完整质证上下文），否则容易断章取义。'
    }
  },
  { 
    id: 'statutes', 
    icon: '📜', 
    title: '法规条文 / 红头文件', 
    desc: '结构极度标准，按“编-章-节-条”排列。',
    recommendation: {
      mode: '规则分段 (Rule-based)',
      icon: '📐',
      color: 'cyan',
      reason: '利用正则（如“第[零一二]+条”）作为分隔符。保证每一条法规都是独立的切片，引用时精准定位到条款。'
    }
  },
  { 
    id: 'case_files', 
    icon: '🗂️', 
    title: '案件卷宗 / 尽调报告', 
    desc: '包含证据、笔录、报表等多源信息，逻辑复杂。',
    recommendation: {
      mode: '父子索引 (Parent-Child)',
      icon: '👨‍👦',
      color: 'purple',
      reason: '检索“证据碎片”（子）时，必须带出整个“案件背景”（父）。否则模型无法进行跨文档的逻辑推理。'
    }
  }
]
</script>

<template>
  <div class="w-full h-full flex gap-6 font-sans select-none">
    
    <!-- Left: Scenarios Grid -->
    <div class="flex-1 grid grid-cols-2 gap-3 content-start">
      <button 
        v-for="s in scenarios" 
        :key="s.id"
        @click="selectedScenario = s.id"
        class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-300 hover:shadow-md text-center h-24"
        :class="selectedScenario === s.id 
          ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-100' 
          : 'border-slate-200 bg-white hover:border-blue-300'"
      >
        <span class="text-2xl mb-1">{{ s.icon }}</span>
        <span class="text-[10px] font-bold text-slate-700">{{ s.title }}</span>
        <span class="text-[8px] text-slate-400 mt-0.5 line-clamp-1">{{ s.desc }}</span>
      </button>
    </div>

    <!-- Right: Recommendation Engine -->
    <div class="w-[45%] flex flex-col">
      <div class="h-full bg-slate-50 rounded-3xl border border-slate-200 p-5 flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        <!-- Placeholder State -->
        <div v-if="!selectedScenario" class="opacity-40 flex flex-col items-center gap-3">
          <div class="text-5xl animate-bounce">🤔</div>
          <p class="text-xs font-bold text-slate-500">请在左侧选择您的文档类型</p>
          <p class="text-[10px] text-slate-400">系统将为您推荐最佳切分策略</p>
        </div>

        <!-- Result State -->
        <div v-else class="relative z-10 w-full animate-fade-in-up">
          <div class="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-4">Recommended Strategy</div>
          
          <div class="bg-white rounded-2xl shadow-lg border p-6 mb-4"
               :class="`border-${scenarios.find(s => s.id === selectedScenario)!.recommendation.color}-200`">
            <div class="text-5xl mb-3">
              {{ scenarios.find(s => s.id === selectedScenario)!.recommendation.icon }}
            </div>
            <h3 class="text-lg font-bold mb-2" 
                :class="`text-${scenarios.find(s => s.id === selectedScenario)!.recommendation.color}-700`">
              {{ scenarios.find(s => s.id === selectedScenario)!.recommendation.mode }}
            </h3>
          </div>

          <div class="bg-white/50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed text-left">
            <span class="font-bold text-slate-800">💡 推荐理由：</span>
            {{ scenarios.find(s => s.id === selectedScenario)!.recommendation.reason }}
          </div>
        </div>

        <!-- Background Decor -->
        <div v-if="selectedScenario" 
             class="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-slate-200"
             :class="`from-${scenarios.find(s => s.id === selectedScenario)!.recommendation.color}-100`">
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
