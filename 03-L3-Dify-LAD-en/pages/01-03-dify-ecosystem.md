---
layout: center
---

# 01 Introduction to Dify

---
layout: center
---

# 🤔 Summarize in One Sentence: What Do You Think Dify Is?

---
layout: default
---

## What Is Dify?

<div class="grid gap-4 md:grid-cols-[1fr_1.8fr_1fr] mt-18 items-center">
<!-- Left: What Dify Abstracts (The Dirty Work) -->
<div v-click="4" class="flex flex-col gap-3 text-right opacity-80 transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Shield Complexity</div>
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-sm">
        <strong>Model Heterogeneity</strong>
        <div class="text-[9px] text-slate-400 mt-0.5">No need to adapt OpenAI/Claude interfaces</div>
    </div>
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-sm">
        <strong>RAG Engineering</strong>
        <div class="text-[9px] text-slate-400 mt-0.5">Auto chunking/cleaning/vectorization</div>
    </div>
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-sm">
        <strong>Context Management</strong>
        <div class="text-[9px] text-slate-400 mt-0.5">Auto-handles token window limits</div>
    </div>
</div>
<!-- Center: The Stack Diagram -->
<div class="flex flex-col gap-1 relative">
    <!-- Layer 3: Apps (Top) -->
    <div v-click="3" class="rounded-2xl bg-indigo-50 border border-indigo-200 p-3 text-center relative z-10 transition-all duration-500">
        <div class="absolute -top-2 left-1/2 -translate-x-1/2 bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Application Layer</div>
        <div class="flex justify-center gap-2 mt-1">
            <span class="text-xl">💻</span>
            <span class="text-xl">📱</span>
            <span class="text-xl">🤖</span>
        </div>
        <div class="text-[10px] font-bold text-indigo-900 mt-1">Web App / Mobile / Slack Bot</div>
    </div>
    <!-- Arrows Up -->
    <div v-click="3" class="h-4 flex justify-center items-center transition-all duration-500">
        <div class="i-carbon-arrow-up text-indigo-300 animate-bounce"></div>
    </div>
    <!-- Layer 2: Dify (Core) -->
    <div v-click="1" class="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-2xl relative z-20 transform hover:scale-105 transition-transform duration-300">
        <div class="bg-white rounded-[20px] p-4 text-center">
            <img src="/imgs/dify-logo.svg" class="h-10 w-auto mx-auto mb-2" alt="Dify Logo" />
            <p class="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">LLM App Dev Platform</p>
            <div class="grid grid-cols-2 gap-1 mt-2">
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">Orchestration</div>
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">RAG Engine</div>
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">Prompt IDE</div>
                <div class="bg-slate-50 p-1.5 rounded-lg text-[9px] font-bold text-slate-700">Ops / Logs</div>
            </div>
        </div>
    </div>
    <!-- Arrows Down -->
    <div v-click="2" class="h-4 flex justify-center items-center transition-all duration-500">
        <div class="i-carbon-arrow-down text-slate-300"></div>
    </div>
    <!-- Layer 1: Infra (Bottom) -->
    <div v-click="2" class="rounded-2xl bg-slate-100 border border-slate-200 p-3 text-center relative z-10 opacity-80 transition-all duration-500">
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Model Infrastructure</div>
        <div class="flex justify-center gap-2 text-[9px] font-mono text-slate-500 mt-0.5">
            <span>OpenAI</span>
            <span>•</span>
            <span>Hugging Face</span>
            <span>•</span>
            <span>Vector DB</span>
        </div>
    </div>
</div>
<!-- Right: What Dify Delivers (The Value) -->
<div v-click="5" class="flex flex-col gap-3 text-left transition-all duration-500">
    <div class="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Deliver Value</div>
    <div class="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 shadow-sm">
        <strong>Standard API Delivery</strong>
        <div class="text-[9px] text-emerald-600/80 mt-0.5">One-click backend API generation</div>
    </div>
    <div class="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 shadow-sm">
        <strong>Ready-to-Use WebApp</strong>
        <div class="text-[9px] text-emerald-600/80 mt-0.5">No frontend development needed, share and use</div>
    </div>
    <div class="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 shadow-sm">
        <strong>Observability</strong>
        <div class="text-[9px] text-emerald-600/80 mt-0.5">Complete logs, annotations, and analytics</div>
    </div>
</div>
</div>

<!--
Let's not talk about technology first. Let me ask everyone a question.

At a law firm, how is a **compliant legal opinion** produced?

It's definitely not something one person writes off the top of their head,
but rather a **very standardized process**:

Someone researches the laws,
Someone retrieves case precedents,
Someone drafts the initial analysis,
And finally a senior lawyer reviews, finalizes, and takes responsibility.

Right?

Now many people say:
"AI is so powerful, can't we just ask ChatGPT directly?"

But for lawyers, there's a fatal problem here:
**You don't know how it arrived at its conclusion.**

This is fine for entertainment scenarios,
But in legal scenarios, it's unacceptable.

So what we're discussing today with Dify isn't "smarter AI,"
But something more important:

**It's an "orchestrable legal workflow system."**

If we use an analogy lawyers can understand:

* Large models are like an **intern lawyer**
  Can research, write, summarize, but not responsible.

* Dify is like a **standardized case handling process**
  It fixes "what to research, how to research, when to decide, who reviews"
  all in place.

Let's look at the specifics.

First, **it helps you break down the process clearly**.

For example, contract review isn't one question,
But a series of actions:

1️⃣ First identify the contract type
2️⃣ Then locate key clauses
3️⃣ Compare against laws and past cases
4️⃣ Output risk points and modification suggestions

In Dify, this isn't a "long prompt,"
But **clear, step-by-step stages**.

Each step you can see, modify, and trace.
Second, **it helps you solidify experience**.

At a law firm, the most valuable thing isn't the law itself,
But:

> "For this type of contract, what does a senior lawyer usually look at first?"

This experience used to only be passed down through "mentorship."

Now it can be directly turned into a **reusable workflow**,
New hires use the same logic,
But the final judgment authority still rests with the lawyer.
Third, and what lawyers care most about:
**The responsibility boundary is clear.**

What is AI responsible for?
It's only responsible for **assisting analysis and material organization**.

Who gives the final conclusion?
You do—the lawyer who signs off.

Dify's value isn't "taking responsibility for you,"
But letting you **take responsibility more steadily, faster, with fewer omissions**.
So if we summarize in a sentence lawyers can accept:

**Dify isn't meant to replace lawyers,
But to systematize, standardize, and scale "the lawyer's professional judgment."**

What it does isn't "auto-judging cases,"
But **reducing the cost of basic work, returning time to where real judgment is needed.**
-->

---
layout: default
---

## Selection Guide: When to Use a Chatbot? When to Build a Dify App?

<div class="grid grid-cols-2 gap-10 mt-16 px-4">

<!-- Left: Chatbot -->
<div class="flex flex-col gap-4 p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-slate-300 transition-all shadow-sm">
    <div class="text-2xl font-bold text-slate-700 flex items-center gap-3">
        <span class="text-4xl text-slate-400">🤖</span>
        <span>General Chatbot</span>
    </div>
    <div class="text-sm font-medium text-slate-400 uppercase tracking-widest">Personal Assistant</div>
    <div class="my-2 text-base text-slate-600 leading-relaxed">
        Suitable for <span class="font-bold text-slate-800">low-frequency, general, one-time</span> tasks.
    </div>
    <ul class="space-y-3 text-sm text-slate-600 flex-1">
        <li class="flex gap-2">
            <div class="i-carbon-checkmark text-green-500 text-lg"></div>
            <span><strong>Simple document polishing/translation</strong><br><span class="text-xs text-slate-400">"Help me translate this email into English"</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark text-green-500 text-lg"></div>
            <span><strong>Quick legal concept lookup</strong><br><span class="text-xs text-slate-400">"Explain what 'force majeure' means"</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark text-green-500 text-lg"></div>
            <span><strong>Inspiration/brainstorming</strong><br><span class="text-xs text-slate-400">"Give me 5 contract negotiation approaches"</span></span>
        </li>
    </ul>
</div>

<!-- Right: Dify App -->
<div class="flex flex-col gap-4 p-6 rounded-2xl bg-indigo-50 border-2 border-indigo-200 shadow-md">
    <div class="text-2xl font-bold text-indigo-700 flex items-center gap-3">
        <span class="text-4xl">🚀</span>
        <span>Dify Smart Application</span>
    </div>
    <div class="text-sm font-medium text-indigo-400 uppercase tracking-widest">Professional Workflow</div>
    <div class="my-2 text-base text-indigo-900 leading-relaxed">
        Suitable for <span class="font-bold text-indigo-700">high-frequency, professional, process-driven</span> business.
    </div>
    <ul class="space-y-3 text-sm text-indigo-800 flex-1">
        <li class="flex gap-2">
            <div class="i-carbon-checkmark-filled text-indigo-600 text-lg"></div>
            <span><strong>Answers based on private data (RAG)</strong><br><span class="text-xs text-indigo-500">"Based on Company Law and past cases, answer..."</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark-filled text-indigo-600 text-lg"></div>
            <span><strong>Complex process automation (Workflow)</strong><br><span class="text-xs text-indigo-500">"Read contract -> Extract risk points -> Generate audit report"</span></span>
        </li>
        <li class="flex gap-2">
            <div class="i-carbon-checkmark-filled text-indigo-600 text-lg"></div>
            <span><strong>Team collaboration & standardization</strong><br><span class="text-xs text-indigo-500">Solidify senior lawyer experience for team-wide reuse</span></span>
        </li>
    </ul>
</div>
</div>

<!--
As lawyers, our most valuable assets are "experience" and "billable hours." When introducing AI, we must first learn to "deploy our forces strategically": when should we directly use chatbots like ChatGPT, and when should we invest effort in building a Dify application?

(Left) **General Chatbots (like ChatGPT) are like "paid interns."**
They've read a lot of books, respond quickly, but the biggest problem is: **they don't know your rules.**
They don't know which contract templates your firm prefers, or your past handling style for similar cases. Every time you use them, you have to painstakingly write a long prompt.
**Use case**: Suitable for "low-frequency, general, one-time" miscellaneous tasks. For example: translating an English email, or drafting a holiday notice.

(Right) **Dify Smart Applications are like "the firm's digital SOP (Standard Operating Procedure)."**
This is no longer a simple chat box, but a **production line**.
1.  **It has a brain (RAG)**: Behind it connects to your firm's document library, evidence repository, and legal database.
2.  **It has hands and feet (Workflow)**: It knows the first step in reviewing a contract is checking the parties, the second step is verifying breach clauses, and the third step is outputting an audit report.
3.  **It can accumulate assets**: Interns leave, but the Dify program is a digital asset of the firm. It can minimize the cost of "senior mentoring junior" like a senior partner.

**One sentence summary: If you just want to "chat casually," choose a Chatbot; if you need to solve "repetitive hard work," you must build a Dify application.**
-->



---
layout: center
---

# 👋 Hands-On: Getting to Know Dify's Interface
