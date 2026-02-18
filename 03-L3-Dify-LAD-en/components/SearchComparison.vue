<script setup lang="ts">
import { ref } from 'vue'

const currentScenario = ref<null | 'semantic' | 'exact'>(null)
const isSearching = ref(false)

const scenarios = {
  semantic: {
    query: "公司管饭吗？",
    keyword: {
      status: 'miss',
      doc: '未找到匹配项',
      reason: '文档中没有包含“管饭”这两个字。'
    },
    vector: {
      status: 'hit',
      doc: '《员工手册》：每日提供 30 元午餐补助',
      reason: '匹配成功！系统理解“管饭”约等于“午餐补助”。'
    }
  },
  exact: {
    query: "Error-502",
    keyword: {
      status: 'hit',
      doc: 'Log: Gateway Error-502 Bad Gateway',
      reason: '匹配成功！精确找到了 "Error-502" 字符串。'
    },
    vector: {
      status: 'hit',
      doc: '服务器连接超时 / 网关错误',
      reason: '匹配成功。但对于专有名词，语义匹配不一定比字面匹配更有优势。'
    }
  }
}

function play(type: 'semantic' | 'exact') {
  if (isSearching.value) return
  currentScenario.value = type
  isSearching.value = true
  
  // Simulate network delay
  setTimeout(() => {
    isSearching.value = false
  }, 1200)
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 font-sans select-none">
    
    <!-- Control Panel -->
    <div class="flex flex-col items-center gap-4">
      <div class="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Select a Scenario</div>
      <div class="flex gap-4">
        <button 
          @click="play('semantic')"
          class="px-5 py-2 rounded-xl border-2 transition-all duration-200 flex items-center gap-2 text-xs font-bold"
          :class="currentScenario === 'semantic' ? 'border-purple-500 bg-purple-50 text-purple-700 ring-2 ring-purple-200' : 'border-slate-200 bg-white text-slate-500 hover:border-purple-300'"
        >
          <span>🧠</span> 场景一：语义模糊
        </button>
        <button 
          @click="play('exact')"
          class="px-5 py-2 rounded-xl border-2 transition-all duration-200 flex items-center gap-2 text-xs font-bold"
          :class="currentScenario === 'exact' ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200' : 'border-slate-200 bg-white text-slate-500 hover:border-blue-300'"
        >
          <span>🎯</span> 场景二：精准代码
        </button>
      </div>
    </div>

    <!-- Search Box Simulation -->
    <div class="bg-white rounded-2xl border border-slate-200 p-3 shadow-inner flex items-center gap-3 mx-8">
      <div class="i-carbon-search text-slate-400 text-lg"></div>
      <div class="flex-1 font-mono text-sm text-slate-700 h-6 flex items-center">
        <span v-if="currentScenario" class="animate-type">{{ scenarios[currentScenario].query }}</span>
        <span v-else class="text-slate-300 italic">等待输入...</span>
      </div>
      <div v-if="isSearching" class="i-carbon-circle-dash animate-spin text-slate-400"></div>
    </div>

    <!-- Engines Comparison -->
    <div class="grid grid-cols-2 gap-4 flex-1">
      
      <!-- Keyword Engine -->
      <div class="bg-blue-50/50 rounded-2xl border border-blue-100 p-4 flex flex-col relative overflow-hidden transition-all duration-500"
           :class="{ 'opacity-50 blur-[1px]': isSearching }">
        <div class="flex items-center gap-2 mb-3 border-b border-blue-100 pb-2">
          <span class="text-xl">📖</span>
          <h3 class="text-xs font-bold text-blue-900">经济模式 (Keyword)</h3>
        </div>
        
        <div v-if="currentScenario && !isSearching">
          <div v-if="scenarios[currentScenario].keyword.status === 'hit'" 
               class="bg-white p-3 rounded-xl border-l-4 border-green-500 shadow-sm mb-2">
            <div class="text-[10px] font-mono text-green-700 break-all">
              {{ scenarios[currentScenario].keyword.doc }}
            </div>
          </div>
          <div v-else 
               class="bg-white p-3 rounded-xl border-l-4 border-rose-400 shadow-sm mb-2">
            <div class="text-[10px] font-mono text-rose-700">
              ❌ No Match Found
            </div>
          </div>
          <p class="text-[10px] text-slate-500 leading-relaxed">
            {{ scenarios[currentScenario].keyword.reason }}
          </p>
        </div>
        
        <div v-else class="flex-1 flex items-center justify-center text-blue-200 text-4xl opacity-20">
          A=A
        </div>
      </div>

      <!-- Vector Engine -->
      <div class="bg-purple-50/50 rounded-2xl border border-purple-100 p-4 flex flex-col relative overflow-hidden transition-all duration-500"
           :class="{ 'opacity-50 blur-[1px]': isSearching }">
        <div class="flex items-center gap-2 mb-3 border-b border-purple-100 pb-2">
          <span class="text-xl">📐</span>
          <h3 class="text-xs font-bold text-purple-900">高质量模式 (Vector)</h3>
        </div>

        <div v-if="currentScenario && !isSearching">
          <div class="bg-white p-3 rounded-xl border-l-4 border-green-500 shadow-sm mb-2">
            <div class="flex justify-between items-start mb-1">
              <span class="text-[9px] bg-green-100 text-green-700 px-1 rounded font-bold">Sim: 0.89</span>
            </div>
            <div class="text-[10px] text-slate-700">
              {{ scenarios[currentScenario].vector.doc }}
            </div>
          </div>
          <p class="text-[10px] text-slate-500 leading-relaxed">
            {{ scenarios[currentScenario].vector.reason }}
          </p>
        </div>

        <div v-else class="flex-1 flex items-center justify-center text-purple-200 text-4xl opacity-20">
          cos(θ)
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.animate-type {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 0.5s steps(20, end);
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>
