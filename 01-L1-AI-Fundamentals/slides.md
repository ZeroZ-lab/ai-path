---
# try also 'default' to start simple
theme: ../guan-theme

title: AI 基础认知与思维启蒙
info: 
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
---

## AI 基础认知与启蒙


<template #graphic>
  <img src="/imgs/ai.png" alt="" />
</template>


---
src: ./pages/00-course-intro.md
hide: false
---


---
layout: center
src: ./pages/01-00-chapter-intro.md
hide: false
---

---
layout: default
src: ./pages/01-01-moment-of-surprise.md
hide: false
---

---
layout: image-right
image: /imgs/1.png
src: ./pages/01-02-poll.md
hide: false
---

---
layout: default
class: flex flex-col items-center justify-center
src: ./pages/01-03-history.md
hide: false
---

---
layout: default
src: ./pages/01-04-multimodal-io.md
hide: false
---

---
layout: image
image: /imgs/3.png
hide: false
---

<!--
「你现在看到的这个‘多模态大模型’，
并不是一个文本模型 + 一个图像模型 + 一个语音模型。
它不是拼装货。」

「它是一个统一的语义引擎。」

「无论是文字、图片、声音还是视频，
都会被编码成同一种‘语义表示’再进行推理。」

「你可以把左边想象成：
不同语言、不同感官，
被同时翻译成‘模型内部语言’。」

文本：人类最习惯的指令形式

图像：把空间、结构一次性交给模型

语音：把情绪、语气、现场记录交给模型

视频：把时间变化也交进来

「当模型在中间完成‘理解和推理’之后，
接下来只是一个问题：
我要用哪种模态，把结果表达出来？」

文本：最通用、最低成本的表达

图像：结构化或情绪化表达

音频：陪伴感、即时感

视频：叙事 + 行动示范

多模态大模型 =
多种输入 → 统一语义理解 → 推理 → 多种输出

「像人一样理解，
像工具一样交付。」

「一旦输入和输出都不再受限于形式，
你会发现：
‘岗位’开始变成‘任务组合’。」
-->

---
layout: default
src: ./pages/01-05-multimodal-input.md
hide: false
---

---
layout: default
src: ./pages/01-06-multimodal-output-img.md
hide: false
---

---
layout: default
src: ./pages/01-07-multimodal-output-gen.md
hide: false
---

---
layout: default
src: ./pages/01-08-multimodal-output-struct.md
hide: false
---

---
layout: default
src: ./pages/01-09-multimodal-output-video.md
hide: false
---

---
layout: default
src: ./pages/01-10-ai-vs-llm.md
hide: false
---

---
layout: default
src: ./pages/01-11-why-different.md
hide: false
---

---
layout: center
src: ./pages/02-00-chapter-intro.md
hide: false
---


---
layout: default
src: ./pages/02-01-why-possible.md
hide: false
---

---
layout: default
src: ./pages/02-02-thought-experiment.md
hide: false
---

---
layout: default
src: ./pages/02-03-human-language-logic.md
hide: false
---

---
layout: default
src: ./pages/02-04-llm-mechanism.md
hide: false
---

---
layout: center
src: ./pages/03-00-chapter-intro.md
hide: false
---


---
layout: default
src: ./pages/03-01-training-stages.md
hide: false
---

---
layout: default
src: ./pages/03-02-pretraining.md
hide: false
---

---
layout: default
src: ./pages/03-03-pretraining-steps.md
hide: false
---

---
layout: default
src: ./pages/03-04-finetuning.md
hide: false
---

---
layout: default
src: ./pages/03-05-finetuning-demo.md
hide: false
---

---
layout: default
src: ./pages/03-06-alignment.md
hide: false
---

---
layout: default
src: ./pages/03-07-alignment-demo.md
hide: false
---

---
layout: default
src: ./pages/03-08-six-characteristics.md
hide: false
---

---
layout: default
src: ./pages/03-09-capabilities.md
hide: false
---


---
layout: center
src: ./pages/04-00-chapter-intro.md
hide: false
---


---
layout: default
src: ./pages/04-01-prompt-is-coding.md
hide: false
---


---
layout: default
src: ./pages/04-02-communication-essence.md
hide: false
---

---
layout: default
src: ./pages/04-03-johari-window.md
hide: false
---


---
layout: default
src: ./pages/04-04-prompt-essence.md
hide: false
---

---
layout: default
src: ./pages/04-05-prompt-interface.md
hide: false
---

---
layout: default
src: ./pages/04-06-bad-prompts.md
hide: false
---

---
layout: default
src: ./pages/04-07-bad-prompt-analysis.md
hide: false
---

---
layout: default
src: ./pages/04-08-good-prompts-demo.md
hide: false
---

---
layout: default
src: ./pages/04-09-prompt-structure-basic.md
hide: false
---

---
layout: default
src: ./pages/04-10-requirement-breakdown.md
hide: false
---

---
layout: default
src: ./pages/04-11-structure-basic-template.md
hide: false
---

---
layout: default
src: ./pages/04-12-structure-advanced.md
hide: false
---

---
layout: default
src: ./pages/04-13-practice.md
hide: false
---

---
layout: default
src: ./pages/04-14-few-shot.md
hide: false
---

---
layout: default
src: ./pages/04-15-mental-models.md
hide: false
---

---
layout: default
src: ./pages/05-00-summary.md
hide: false
---
