<template>
<div class="grid gap-6 md:grid-cols-2 mt-4 items-start">

<!-- Problem -->
<div class="rounded-3xl border border-rose-100 bg-rose-50/80 p-5 shadow-sm">
    <h3 class="text-lg font-bold text-rose-900 flex items-center gap-2 mb-3">
        <span class="text-2xl">🐢</span> 常见问题
    </h3>
    <ul class="space-y-2 text-xs text-rose-800">
        <li class="flex items-start gap-2">
            <span class="mt-1 text-rose-500">•</span>
            <span><strong>GitHub Clone 失败：</strong><br>Connection timed out / RPC failed</span>
        </li>
        <li class="flex items-start gap-2">
            <span class="mt-1 text-rose-500">•</span>
            <span><strong>Docker Pull 缓慢：</strong><br>拉取镜像卡在 0% 或几十 KB/s</span>
        </li>
    </ul>
</div>

<!-- Solution -->
<div class="space-y-4">
    
    <!-- Git Mirror -->
    <div class="rounded-3xl border border-blue-100 bg-white p-4 shadow-sm">
        <div class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">方案 A：代码仓库加速</div>
        
        <!-- Slidev Monaco Editor Component -->
        <!-- Note: In a Vue component, we can't use markdown syntax directly. 
             We rely on the fact that this component will be rendered by Vue. 
             However, integrating the Monaco editor inside a Vue component within Slidev 
             usually requires using the internal <Monaco> component if exposed, 
             or we just use a styled pre/code block for simplicity if interactivity isn't strictly required.
             
             But the user wants Monaco. The markdown {monaco} syntax is a Slidev-specific transform.
             It doesn't work inside a Vue component file easily without setup.
             
             Wait, if I use a Vue component, I lose the easy markdown monaco transformation.
             
             Let's go back to Markdown file but simplify the HTML structure massively.
             I will abort creating this Vue file for now and try to fix the MD file one last time 
             by removing the wrapping divs around the code blocks and using grid layout differently.
        -->
    </div>
</div>
</div>
</template>
