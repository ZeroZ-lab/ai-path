---
layout: default
class: px-14
---

## 1.1.5 Selection Guide: What Should We Use to Implement Workflows?

<div class="grid gap-4 md:grid-cols-3 mt-8 items-stretch">

  <div v-click class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Hardcore Development</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">LangChain / Python</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5 flex-1">
      <li>Pros: Unlimited flexibility, suitable for super complex logic.</li>
      <li>Cost: <strong>Business users can't participate</strong>—depends entirely on dev team scheduling.</li>
    </ul>
  </div>

  <div v-click class="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">SaaS Assistants</div>
    <h3 class="text-base font-semibold text-slate-900 mb-2">GPTs / Copilot</h3>
    <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5 flex-1">
      <li>Pros: Extremely fast to get started, ready to use out of the box.</li>
      <li>Cost: <strong>Black box, uncontrollable</strong>—data privacy hard to guarantee, difficult to integrate with business systems.</li>
    </ul>
  </div>

  <div v-click class="rounded-3xl border border-blue-200 bg-blue-50/60 p-5 shadow-inner flex flex-col transition-all duration-500 hover:-translate-y-1">
    <div class="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Best Balance</div>
    <h3 class="text-base font-semibold text-blue-900 mb-2">LLM Ops (Dify)</h3>
    <ul class="text-xs text-blue-900/80 space-y-1.5 list-disc pl-5 flex-1">
      <li>Business-friendly: <strong>Visual orchestration</strong>—if you understand the logic, you can modify it.</li>
      <li>Deliverable: Provides APIs, easily embedded into existing systems.</li>
      <li>Deployable: Supports private deployment, data stays secure.</li>
    </ul>
  </div>

</div>

<!--
Now we know we need to build an assembly line, so what kind of tools should we buy?

(Click 1) **Option 1: Build your own house from scratch (LangChain)**.
This is a programmer's favorite. Unlimited freedom—you can build it however you want. But the problem is: **the barrier is too high**. Should our legal and HR teams learn Python just to use AI?

(Click 2) **Option 2: Stay at a hotel (GPTs)**.
Move in with your luggage, facilities are complete. But the problem is: **it's someone else's property**. You can't change the layout, can't swap furniture, and most importantly, your data isn't secure. If the hotel closes down (account banned), you're homeless.

(Click 3) **Option 3: Buy a furnished apartment (Dify)**.
This is our choice today.
1.  **Visible**: You can understand the floor plan (Workflow)—want to change something? Just drag and drop.
2.  **Secure**: This is your own property (private deployment)—data stays locked in your own home.
3.  **Open**: Want to connect smart home devices (API)? No problem.

**Dify is the perfect balance that lets business users "understand" while giving technical users room to "extend."**
-->
