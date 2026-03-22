<template>
  <div class="flex gap-4 mt-4 px-4 h-auto">
    
    <!-- Temperature -->
    <div class="flex-1 bg-white rounded-3xl border border-rose-100 shadow-lg p-4 flex flex-col items-center text-center relative overflow-hidden group hover:border-rose-300 transition-all">
      <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-rose-500"></div>
      <div class="text-3xl mb-1 p-2 bg-rose-50 rounded-2xl group-hover:scale-110 transition-transform">🌡️</div>
      <h3 class="text-xl font-black text-rose-900 mb-1">Temperature</h3>
      <div class="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">温度 / 随机性</div>

      <div class="w-full space-y-2 mb-2">
        <div class="flex justify-between items-center text-xs px-2">
          <span class="text-slate-400">严谨 (0.0)</span>
          <span class="text-slate-400">发散 (1.0+)</span>
        </div>
        <!-- Visual Slider -->
        <div class="h-3 bg-slate-100 rounded-full relative overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 opacity-50"></div>
          <div class="absolute left-1/2 top-1/2 -ml-1.5 -mt-1.5 w-3 h-3 bg-rose-500 rounded-full shadow border border-white"></div>
        </div>
      </div>

      <div class="bg-rose-50/50 p-3 rounded-xl text-left w-full border border-rose-100/50 mt-1 flex-1">
        <div class="mb-2">
          <span class="text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-blue-600">Low (0.1)</span>
          <p class="text-xs text-slate-600 mt-1">适合：合同审查、法条引用</p>
          <p class="text-[10px] text-slate-400 italic">"严谨、稳定、不说胡话"</p>
        </div>
        <div>
          <span class="text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-rose-600">High (0.8)</span>
          <p class="text-xs text-slate-600 mt-1">适合：案情头脑风暴、庭辩策略</p>
          <p class="text-[10px] text-slate-400 italic">"有创意、多样性"</p>
        </div>
      </div>
    </div>

    <!-- Top P / Token Limit -->
    <div class="flex-1 space-y-4">
      
      <!-- Top P -->
      <div class="bg-white rounded-3xl border border-purple-100 shadow-md p-4 flex items-start gap-4 hover:border-purple-300 transition-all h-auto">
        <div class="text-3xl p-3 bg-purple-50 rounded-xl shrink-0">🎲</div>
        <div>
          <h3 class="text-xl font-bold text-purple-900 mb-1">Top P (采样范围)</h3>
          <p class="text-xs text-slate-500 mb-2">另一种“随机性”控制。</p>
          <p class="text-sm text-slate-600 leading-relaxed">
            想象你在选律师。
            <br><strong>0.1</strong> = 只在前 10% 最靠谱的候选词里选。
            <br><strong>0.9</strong> = 允许在前 90% 的词里选。
          </p>
        </div>
      </div>

      <!-- Max Tokens -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-md p-4 flex items-start gap-4 hover:border-slate-300 transition-all h-auto">
        <div class="text-3xl p-3 bg-slate-50 rounded-xl shrink-0">📏</div>
        <div>
          <h3 class="text-xl font-bold text-slate-800 mb-1">Max Tokens</h3>
          <p class="text-xs text-slate-500 mb-2">最大回复长度。</p>
          <p class="text-sm text-slate-600 leading-relaxed mb-1">
            限制律师一次能说多少话。
          </p>
          <div class="bg-slate-50 p-2 rounded border border-slate-100 text-xs flex gap-2">
            <span class="font-bold text-slate-700">512</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-500">短回复 (咨询)</span>
          </div>
          <div class="bg-slate-50 p-2 rounded border border-slate-100 text-xs flex gap-2 mt-1">
            <span class="font-bold text-slate-700">4096</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-500">长文书 (起诉状)</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
