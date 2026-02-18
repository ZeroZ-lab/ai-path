---
layout: center
class: px-14
---

# 1.1 Why Do We Need Workflows?

<div class="mt-4 text-sm text-slate-500 leading-relaxed">
  Business scenarios are extremely complex—"one prompt" simply won't cut it.
</div>

---
layout: default
class: px-14
---

## 1.1.1 Real Business: It's Not Q&A, It's a "Process"

<div class="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
  <div class="space-y-4 text-sm text-slate-700">
    <h3 class="text-base font-semibold text-slate-900">
      Our work is essentially a "stateful process"
    </h3>
    <ul v-click class="list-disc pl-6 space-y-2 text-xs transition-all duration-500">
      <li>First, <span class="font-semibold">collect information</span>: confirm the other party's intent.</li>
      <li>Then, <span class="font-semibold">review materials</span>: check contracts, check policies.</li>
      <li>Next, <span class="font-semibold">logical judgment</span>: if amount > $500K, follow Process A; otherwise, Process B.</li>
      <li>Finally, <span class="font-semibold">generate deliverables</span>: write emails, send notifications.</li>
    </ul>
  </div>
  <div v-click class="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 shadow-inner text-xs text-slate-700 space-y-3 transition-all duration-500">
    <div class="text-[11px] font-bold uppercase tracking-widest text-blue-500">If We Only Use a Chat Box</div>
    <ul class="list-disc pl-5 space-y-1.5">
      <li>Steps get mixed together, easy to miss items.</li>
      <li>Different phrasing each time, random results.</li>
      <li>Experience locked in personal chats, can't be handed off.</li>
    </ul>
    <p class="text-[11px] text-blue-700/80 font-bold mt-2">
      We need to "draw out" these invisible steps and let AI follow them.
    </p>
  </div>
</div>

<!--
This diagram is the visualization of the **business process** we just discussed.

Any complex work, when broken down, has these **four core stages**:
1.  **Collect information**: Like a detective solving a case, first gather firsthand information.
2.  **Review materials**: Back at the office, go through files, find useful clues.
3.  **Logical judgment**: Based on collected information and reviewed materials, use professional knowledge to analyze and make decisions.
4.  **Generate deliverables**: Finally, submit your conclusions or results in the form of emails or reports.

If we only use a chat box, all these invisible steps get muddled together in a pile of chat history, making them difficult to manage and reuse.

**The core value of Workflow is to clearly 'draw out' this process map in our heads, and then let AI execute it step by step according to this map.**
-->
