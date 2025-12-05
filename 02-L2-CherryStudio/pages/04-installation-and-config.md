---
layout: center
---

# 03 安装、配置与界面导览

---
layout: default
---

## 3.1 安装 & 首次启动

<div class="grid gap-6 md:grid-cols-2 mt-8 items-stretch">

<!-- OS Specifics -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-6 shadow-[0_15px_30px_rgba(59,130,246,0.1)] flex flex-col">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Download & Install</div>
  <h3 class="text-xl font-bold text-blue-900 mb-6">下载与安装</h3>
  
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-white text-2xl flex items-center justify-center shadow-sm">🍎</div>
      <div>
        <h4 class="font-bold text-slate-800">macOS</h4>
        <p class="text-sm text-slate-600 mt-1">下载 .dmg 文件，拖入 Applications。</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-white text-2xl flex items-center justify-center shadow-sm">🪟</div>
      <div>
        <h4 class="font-bold text-slate-800">Windows</h4>
        <p class="text-sm text-slate-600 mt-1">下载 .exe 安装包，双击运行即可。</p>
      </div>
    </div>
  </div>
</div>

<!-- First Run -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-[0_15px_30px_rgba(16,185,129,0.1)] flex flex-col">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4">Setup Wizard</div>
  <h3 class="text-xl font-bold text-emerald-900 mb-6">首次启动向导</h3>
  
  <div class="relative flex-1 bg-white/60 rounded-2xl border border-emerald-100/50 p-6 backdrop-blur-sm">
    <div class="space-y-4">
        <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs flex items-center justify-center font-bold">1</span>
            <span class="text-slate-700 font-bold">语言设置</span>
            <span class="text-xs text-slate-400 ml-auto">中文 / English</span>
        </div>
        <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs flex items-center justify-center font-bold">2</span>
            <span class="text-slate-700 font-bold">显示设置</span>
            <span class="text-xs text-slate-400 ml-auto">导航栏位置——左侧</span>
        </div>
        <div class="mt-6 p-4 bg-emerald-100/30 rounded-xl border border-emerald-200/50 text-center">
            <span class="text-emerald-700 font-bold">🚀 Ready to Go!</span>
        </div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

## 3.2 模型接入

<div class="grid gap-6 md:grid-cols-[1fr_1.5fr] mt-8">

<!-- Concept: API Key -->
<div class="rounded-[32px] border border-amber-100 bg-amber-50/80 p-6 shadow-[0_15px_30px_rgba(245,158,11,0.1)]">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 mb-4">The Key</div>
  <h3 class="text-xl font-bold text-amber-900 mb-4">什么是 API Key？</h3>
  
  <div class="flex justify-center my-6">
    <div class="text-6xl">🔑</div>
  </div>
  
  <p class="text-slate-700 text-sm leading-relaxed mb-4">
    它是连接 Cherry Studio 与云端大模型的「通行证」。
  </p>
  
  <div class="bg-white/60 rounded-xl p-3 border border-amber-200/50 text-xs text-amber-800 flex gap-2 items-start">
    <span class="text-lg">🛡️</span>
    <span><strong>安全提示：</strong><br>不要分享给他人。<br>按量计费，用多少扣多少。</span>
  </div>
</div>

<!-- Action: Configuration Steps -->
<div class="rounded-[32px] border border-purple-100 bg-purple-50/80 p-6 shadow-[0_15px_30px_rgba(147,51,234,0.1)]">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500 mb-4">Configuration</div>
  <h3 class="text-xl font-bold text-purple-900 mb-6">配置步骤</h3>

  <div class="space-y-4 text-sm">
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-purple-100/50">
      <span class="font-mono font-bold text-purple-600">Step 1</span>
      <span class="text-slate-700">打开设置 (Settings) > 模型服务 (Models)</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-purple-100/50">
      <span class="font-mono font-bold text-purple-600">Step 2</span>
      <span class="text-slate-700">选择 <strong>DeepSeek</strong> 或 <strong>CherryIN</strong> 提供商</span>
    </div>
    <div class="p-3 bg-white/80 rounded-xl border border-purple-200/50 shadow-sm">
      <div class="text-xs text-slate-500 mb-1">API Key 输入框</div>
      <div class="font-mono text-slate-400 bg-slate-100 p-2 rounded border border-slate-200 select-all">sk-xxxxxxxxxxxxxxxxxxxxxxxx</div>
    </div>
    <div class="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-purple-100/50">
      <span class="font-mono font-bold text-purple-600">Step 3</span>
      <span class="text-slate-700">点击「检查」或「保存」验证连通性 ✅</span>
    </div>
  </div>
</div>

</div>

---
layout: default
---

## 3.3 界面总览

<div class="relative mt-8 w-full h-[400px] rounded-[32px] overflow-hidden shadow-2xl group">
  <img src="/imgs/interface-overview.png" class="w-full h-full object-cover" alt="Interface Overview" />

  <!-- Overlays (Tooltips) - Positioned relatively to the image -->
  <div class="absolute top-10 left-4">
    <div class="w-4 h-4 rounded-full bg-rose-500 animate-ping absolute"></div>
    <div class="w-4 h-4 rounded-full bg-rose-500 relative border-2 border-white"></div>
    <div class="absolute left-8 top-0 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        功能导航区
    </div>
  </div>

  <div class="absolute top-20 left-[20%]">
     <div class="absolute left-8 top-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        会话/助手列表
    </div>
  </div>

  <div class="absolute top-[50%] left-[60%]">
     <div class="absolute left-8 top-0 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        多模型对话主区
    </div>
  </div>
</div>

---
layout: default
---

## 3.4 学员实操任务

<div class="grid gap-8 md:grid-cols-2 mt-10 items-stretch">

<!-- Task A -->
<div class="rounded-[32px] border border-blue-100 bg-blue-50/80 p-8 shadow-[0_15px_30px_rgba(59,130,246,0.1)] hover:scale-[1.02] transition-transform">
  <div class="flex justify-between items-start mb-6">
    <h3 class="text-2xl font-bold text-blue-900">任务 A</h3>
    <span class="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-bold">Basic</span>
  </div>
  <div class="space-y-4">
    <p class="text-slate-700 font-medium text-lg">成功安装并启动 Cherry Studio</p>
    <div class="h-px bg-blue-200/50 w-full"></div>
    <ul class="space-y-3 text-slate-600">
      <li class="flex items-center gap-3">
        <div class="w-5 h-5 rounded border border-blue-400 flex items-center justify-center"></div>
        <span>完成下载 (Mac/Win)</span>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-5 h-5 rounded border border-blue-400 flex items-center justify-center"></div>
        <span>完成首次引导设置</span>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-5 h-5 rounded border border-blue-400 flex items-center justify-center"></div>
        <span>看到主界面</span>
      </li>
    </ul>
  </div>
</div>

<!-- Task B -->
<div class="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-8 shadow-[0_15px_30px_rgba(16,185,129,0.1)] hover:scale-[1.02] transition-transform">
  <div class="flex justify-between items-start mb-6">
    <h3 class="text-2xl font-bold text-emerald-900">任务 B</h3>
    <span class="px-3 py-1 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold">Action</span>
  </div>
  <div class="space-y-4">
    <p class="text-slate-700 font-medium text-lg">配置模型并发送消息</p>
    <div class="h-px bg-emerald-200/50 w-full"></div>
    <ul class="space-y-3 text-slate-600">
      <li class="flex items-center gap-3">
        <div class="w-5 h-5 rounded border border-emerald-400 flex items-center justify-center"></div>
        <span>添加 DeepSeek 或 OpenAI Key</span>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-5 h-5 rounded border border-emerald-400 flex items-center justify-center"></div>
        <span>在对话框输入 "Hello AI"</span>
      </li>
      <li class="flex items-center gap-3">
        <div class="w-5 h-5 rounded border border-emerald-400 flex items-center justify-center"></div>
        <span>获得成功回复</span>
      </li>
    </ul>
  </div>
</div>

</div>
