<script setup lang="ts">
import { ref } from 'vue'

const mode = ref<'fixed' | 'separator'>('fixed')

const toggleMode = (m: 'fixed' | 'separator') => {
  mode.value = m
}

const textBlocks = [
  "第五条  【服务费用及支付方式】",
  "1. 本合同总金额为人民币（大写）伍拾万元整（¥500,000.00）。",
  "2. 甲方应在合同签订后 5 个工作日内支付预付款 30%。",
  "3. 乙方完成项目初稿并经甲方确认后，甲方支付进度款 40%。",
  "4. 项目验收合格后 5 个工作日内，甲方支付剩余 30% 尾款。"
]
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-2 bg-transparent rounded-3xl overflow-hidden relative border border-slate-100 shadow-inner">
    
    <!-- Controls (Compact) -->
    <div class="mb-4 flex gap-4 bg-slate-100 p-1.5 rounded-xl shadow-sm border border-slate-200 shrink-0">
      <button 
        @click="toggleMode('fixed')"
        class="px-4 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-2"
        :class="mode === 'fixed' ? 'bg-white text-rose-600 shadow-md' : 'text-slate-500 hover:text-slate-700'"
      >
        <span class="text-sm text-rose-500">📏</span> 固定切分 (Fixed)
      </button>
      <button 
        @click="toggleMode('separator')"
        class="px-4 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-2"
        :class="mode === 'separator' ? 'bg-white text-emerald-600 shadow-md' : 'text-slate-500 hover:text-slate-700'"
      >
        <span class="text-sm text-emerald-500">🏷️</span> 逻辑切分 (Logical)
      </button>
    </div>

    <!-- The Visualization Area (Flexible Height) -->
    <div class="relative w-full max-w-4xl flex-1 min-h-0 flex items-center justify-center mb-2">
      
      <!-- Fixed Mode Visualization -->
      <div v-if="mode === 'fixed'" class="w-full h-full flex items-center justify-center gap-2">
        <!-- Chunk 1 -->
        <div class="relative group bg-white border-2 border-rose-100 rounded-xl shadow-sm p-3 w-44 h-44 flex flex-col transition-all hover:scale-105 hover:z-10 hover:shadow-lg">
          <div class="absolute -top-3 left-2 bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded shadow">CHUNK #01 (50 tokens)</div>
          <div class="text-[10px] leading-relaxed text-slate-800 font-serif">
            第五条 【服务费用及支付方式】 1. 本合同总金额为人民币（大写）伍拾万元整（¥500,000.00）。 2. 甲方应在合同签订
          </div>
          <div class="mt-auto h-0.5 w-full bg-rose-100"></div>
          <!-- Cut Line -->
          <div class="absolute -right-1.5 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-rose-300 z-20"></div>
        </div>

        <!-- Chunk 2 -->
        <div class="relative group bg-white border-2 border-rose-100 rounded-xl shadow-sm p-3 w-44 h-44 flex flex-col transition-all hover:scale-105 hover:z-10 hover:shadow-lg">
          <div class="absolute -top-3 left-2 bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded shadow">CHUNK #02 (50 tokens)</div>
          <div class="text-[10px] leading-relaxed text-slate-800 font-serif">
            后 5 个工作日内支付预付款 30%。 3. 乙方完成项目初稿并经甲方确认后，甲方支付进度款 40%。 4. 项目验收合格后 5 个
          </div>
          <div class="mt-auto h-0.5 w-full bg-rose-100"></div>
          <!-- Cut Line -->
          <div class="absolute -right-1.5 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-rose-300 z-20"></div>
        </div>

        <!-- Chunk 3 -->
        <div class="relative group bg-white border-2 border-rose-100 rounded-xl shadow-sm p-3 w-44 h-44 flex flex-col transition-all hover:scale-105 hover:z-10 hover:shadow-lg opacity-60">
           <div class="absolute -top-3 left-2 bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded shadow">CHUNK #03 (50 tokens)</div>
           <div class="text-[10px] leading-relaxed text-slate-800 font-serif">
            工作日内，甲方支付剩余 30% 尾款。...
          </div>
        </div>
      </div>

      <!-- Separator Mode Visualization -->
      <div v-else class="w-full h-full flex flex-col gap-2 justify-center items-center overflow-y-auto pr-1">
        <!-- Loop logic for distinct blocks -->
        <div v-for="(block, index) in textBlocks" :key="index" class="w-full max-w-xl bg-white border-l-4 border-emerald-500 rounded-r-lg shadow-sm p-2.5 hover:bg-emerald-50 transition-colors cursor-default group flex items-start gap-3">
          <div class="mt-0.5 text-[9px] font-black text-emerald-300 group-hover:text-emerald-600">#0{{ index + 1 }}</div>
          <div class="text-[12px] text-slate-700 font-serif leading-tight">
            {{ block }}
          </div>
        </div>
      </div>

    </div>

    <!-- Summary Box (Compact) -->
    <div class="mt-auto mb-2 bg-white/90 p-3 rounded-xl border border-slate-200 shadow-md max-w-xl text-center backdrop-blur-sm shrink-0">
      <div v-if="mode === 'fixed'" class="space-y-1">
        <h4 class="text-[12px] font-black text-rose-600 uppercase flex items-center justify-center gap-2">⚠️ 语义断裂风险</h4>
        <p class="text-[11px] text-slate-600 leading-tight">
          看Chunk #02开头：“后 5 个工作日...”。AI 会困惑：<strong>什么是"后"？这是针对什么的期限？</strong>因为主语仍在上一块。
        </p>
      </div>
      <div v-else class="space-y-1">
        <h4 class="text-[12px] font-black text-emerald-600 uppercase flex items-center justify-center gap-2">✅ 语义完整保留</h4>
        <p class="text-[11px] text-slate-600 leading-tight">
          看 #03 和 #04：每一条付款条件的<strong>主语、金额、期限</strong>都在各自的块内。
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-duration: 500ms;
}
</style>


