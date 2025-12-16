---
layout: default
---

## 7.4.3 实战难点：复杂逻辑分支 (Branching)

<div class="grid gap-8 md:grid-cols-[1fr_1.4fr] mt-8 items-center">

<!-- Left: Business Logic -->
<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">业务规则 (Business Rule)</div>
    <div class="space-y-4">
        <div class="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg">
            <p class="text-xs text-amber-900 font-bold mb-1">规则 A：大额风控</p>
            <p class="text-[10px] text-amber-800">
                如果合同金额 <strong>&gt; 500,000 元</strong>，必须自动插入《反商业贿赂条款》。
            </p>
        </div>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
            <p class="text-xs text-blue-900 font-bold mb-1">规则 B：跨境合规</p>
            <p class="text-[10px] text-blue-800">
                如果客户所在地为 <strong>EU (欧盟)</strong>，必须追加 GDPR 数据保护协议。
            </p>
        </div>
    </div>
    <div class="mt-6 text-[10px] text-slate-500">
        AI 不仅仅是生成器，更是<strong>逻辑执行器</strong>。
    </div>
</div>

<!-- Right: Dify Implementation -->
<div class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner relative overflow-hidden flex flex-col items-center justify-center h-[320px]">
    <!-- Background Grid -->
    <div class="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    <!-- Node Flow -->
    <div class="relative z-10 flex flex-col items-center gap-4 w-full max-w-sm">
        <!-- Start Variable -->
        <div class="bg-white border border-slate-300 p-2 rounded-lg text-[10px] font-mono text-slate-600 shadow-sm">
            amount = 800,000
        </div>
        <div class="i-carbon-arrow-down text-slate-300"></div>
        <!-- Condition Node -->
        <div class="bg-amber-100 border-2 border-amber-300 p-3 rounded-xl shadow-md w-full text-center relative">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[8px] px-2 rounded-full">IF-ELSE</div>
            <div class="text-xs font-bold text-amber-900">amount > 500,000 ?</div>
        </div>
        <!-- Branches -->
        <div class="grid grid-cols-2 gap-8 w-full">
            <!-- True Path -->
            <div class="flex flex-col items-center gap-2">
                <div class="text-[9px] font-bold text-green-600 bg-green-50 px-2 rounded">TRUE</div>
                <div class="i-carbon-arrow-down text-green-300"></div>
                <div class="bg-purple-100 border border-purple-200 p-2 rounded-lg text-[9px] text-purple-800 shadow-sm w-full text-center">
                    ➕ 插入反贿赂条款
                </div>
            </div>
            <!-- False Path -->
            <div class="flex flex-col items-center gap-2">
                <div class="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 rounded">FALSE</div>
                <div class="i-carbon-arrow-down text-slate-300"></div>
                <div class="bg-white border border-slate-200 p-2 rounded-lg text-[9px] text-slate-400 shadow-sm w-full text-center border-dashed">
                    (Do Nothing)
                </div>
            </div>
        </div>
    </div>

</div>

</div>
