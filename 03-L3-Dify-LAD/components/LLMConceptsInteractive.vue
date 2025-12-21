<template>
  <div class="flex gap-6 h-[450px] mt-8">
    <!-- Menu -->
    <div class="w-1/3 flex flex-col gap-3 h-full overflow-y-auto pr-1">
      <div 
        v-for="item in items" 
        :key="item.key"
        @click="active = item.key"
        class="p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4"
        :class="active === item.key ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' : 'bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50'"
      >
        <div class="text-3xl filter drop-shadow-sm">{{ item.icon }}</div>
        <div>
          <div class="font-bold text-base leading-tight">{{ item.title }}</div>
          <div class="text-[10px] mt-1 opacity-80 font-mono tracking-wide uppercase">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 bg-white rounded-3xl border border-slate-200 shadow-xl p-8 relative overflow-hidden flex flex-col items-center text-center transition-all duration-300">
      
      <!-- Background Decor -->
      <div class="absolute -right-10 -top-10 text-[200px] opacity-5 select-none pointer-events-none filter blur-sm">
        {{ activeItem.icon }}
      </div>

      <div class="relative z-10 w-full flex flex-col items-center h-full">
        
        <div class="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-4 shadow-inner border border-blue-100">
           {{ activeItem.icon }}
        </div>

        <h2 class="text-3xl font-black text-slate-800 mb-2 tracking-tight">{{ activeItem.title }}</h2>
        
        <div class="inline-flex items-center gap-2 text-blue-600 font-bold text-base mb-4 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          <span class="i-carbon-idea text-lg"></span>
          <span>{{ activeItem.metaphor }}</span>
        </div>

        <div class="overflow-y-auto max-h-32 mb-auto custom-scrollbar w-full">
          <p class="text-slate-600 leading-relaxed text-lg max-w-lg mx-auto">
            {{ activeItem.desc }}
          </p>
        </div>
        
        <!-- Code preview -->
        <div v-if="activeItem.code" class="w-full mt-4 bg-slate-900 rounded-xl p-5 pb-2 text-left shadow-lg border border-slate-800 ring-1 ring-white/10 relative overflow-hidden group flex-shrink-0">
          <div class="absolute top-2 right-3 text-[10px] text-slate-500 font-mono uppercase tracking-widest">{{ activeItem.codeTitle }}</div>
          <div class="overflow-y-auto max-h-32 custom-scrollbar pr-2">
             <pre class="text-sm text-emerald-400 font-mono whitespace-pre-wrap leading-relaxed relative z-10">{{ activeItem.code }}</pre>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const active = ref('system')

const items = [
  {
    key: 'system',
    title: 'System Prompt',
    subtitle: '人设与指令',
    icon: '📜',
    metaphor: '律所指派函 / 岗位职责',
    desc: '给 AI 设定的核心指令。定义了它的角色定位、回复风格以及必须遵循的行为准则。',
    codeTitle: 'SYSTEM PROMPT',
    code: '你是一位资深刑辩律师，用专业、严谨的口吻回答。引用法条时必须精准。'
  },
  {
    key: 'messages',
    title: 'Messages',
    subtitle: '对话历史',
    icon: '🗣️',
    metaphor: '庭审记录 / 谈话笔录',
    desc: '所有的聊天记录。User 是当事人的话，Assistant 是律师之前回的话。AI 需要看这些才知道聊到哪了。',
    codeTitle: 'CHAT HISTORY',
    code: '[User]: 我被骗了怎么办？\n[Assistant]: 首先请保留证据...\n[User]: 可是证据丢了...'
  },
  {
    key: 'context',
    title: 'Context',
    subtitle: '上下文引用',
    icon: '🧠',
    metaphor: '案卷材料 / 法律条文',
    desc: '从知识库（RAG）里临时检索到的真相片段。没有它，AI 只能瞎编；有了它，AI 就会据实回答。',
    codeTitle: 'RETRIEVED CONTEXT',
    code: '根据《刑法》第266条：诈骗公私财物，数额较大的，处三年以下有期徒刑...'
  },
  {
    key: 'memory',
    title: 'Memory',
    subtitle: '记忆窗口',
    icon: '📼',
    metaphor: '律师的脑容量',
    desc: 'AI 记不住无限长的对话。我们需要设置“窗口”，比如只记最近 10 轮，或者把前面的对话总结成摘要。',
    codeTitle: 'CONFIGURATION',
    code: 'Window Size: 10\nMode: Sliding Window Summary'
  },
  {
    key: 'struct',
    title: 'Structured Output',
    subtitle: '结构化输出',
    icon: '📊',
    metaphor: '填写标准表单',
    desc: '强制 AI 按特定 JSON 格式输出结果。不许废话，只填空。方便后续程序处理。',
    codeTitle: 'JSON SCHEMA',
    code: '{\n  "risk_level": "High",\n  "advice_summary": "建议立即报警"\n}'
  }
]

const activeItem = computed(() => items.find(i => i.key === active.value))
</script>
