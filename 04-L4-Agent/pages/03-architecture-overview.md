---
layout: default
---

## 08 OpenClaw 架构图

<OpenClawArchExplorer />

<!--
这页不要讲成“官方原图”，而要讲成“根据公开文档整理出的结构理解图”。
主线是：Channels 进入 Gateway，Gateway 负责会话、路由、工具和记忆协调，再把任务交给 Agent/Model，最后联动 Tools 执行，并更新 Session/Memory。
重点不是某个花哨术语，而是让听众看懂：OpenClaw 更像一个长期运行的系统，而不是一次性的函数调用。
-->
