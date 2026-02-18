---
layout: center
---

# ✍️ Live Drawing Exercise

<div class="mt-4 text-xl font-bold text-slate-700 mb-8">
  Can your daily work be drawn as a flowchart?
</div>

<div class="grid grid-cols-2 gap-12 items-center max-w-4xl mx-auto">

  <!-- Example -->
  <div v-click class="rounded-3xl border-2 border-slate-200 bg-slate-50 p-6 opacity-80 scale-90">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">Example (Smart Customer Service)</div>
    <div class="flex flex-col gap-3 items-center">
      <div class="bg-white px-4 py-2 rounded-lg border border-slate-200 text-xs">Customer Inquiry</div>
      <div class="i-carbon-arrow-down text-slate-300"></div>
      <div class="bg-purple-100 px-4 py-2 rounded-lg border border-purple-200 text-xs font-bold text-purple-800 flex items-center gap-1">
        <span>Legal Advisor</span>
      </div>
      <div class="i-carbon-arrow-down text-slate-300"></div>
      <div class="bg-amber-100 px-4 py-2 rounded-lg border border-amber-200 text-xs font-bold text-amber-800">
        Is it a dispute?
      </div>
      <div class="flex gap-4 w-full justify-center">
        <div class="i-carbon-arrow-down-left text-slate-300"></div>
        <div class="i-carbon-arrow-down-right text-slate-300"></div>
      </div>
      <div class="flex gap-2 w-full justify-between">
        <div class="bg-white px-2 py-1 rounded border text-[10px]">Transfer to Human</div>
        <div class="bg-white px-2 py-1 rounded border text-[10px]">AI Auto-Reply</div>
      </div>
    </div>
  </div>

  <!-- Your Turn -->
  <div v-click class="flex flex-col items-center gap-6">
    <div class="text-6xl animate-bounce">🤔</div>
    <div class="text-center space-y-2">
      <h3 class="text-lg font-bold text-slate-800">Your Turn</h3>
      <p class="text-sm text-slate-500">
        Draw your most challenging business process on paper.
      </p>
    </div>
    <div class="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold border border-blue-100">
      Elements: Input -> Decision -> Action -> Output
    </div>
  </div>

</div>

<!--
Now, please think about this: In your daily work, are there any repetitive, tedious tasks that you feel could be **turned into a flowchart** and let AI run for you?

To understand everyone's daily work, please write down your routine tasks.

Like this **Smart Customer Service** example on the left:
*   **Input**: Receive a customer inquiry message.
*   **Processing**: Hand it to the LLM (Legal Advisor) to analyze intent, determine if it's a complaint.
*   **Action**: If it's a dispute, transfer to human support; if it's a regular question, AI generates a direct reply.

You see, all complex matters can be broken down into: **Input → Decision → Action → Output**, right?

**[Guide participants to think about their own work]**

Now, it's your turn.
On paper (or in your mind), **draw out your most challenging business process**.
Don't aim for perfection—capture its **core logic**.

Once you can "draw" it out, Dify can help you "run" it!
-->
