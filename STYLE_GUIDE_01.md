# 样式风格指南

该课程使用了现代、干净且带有**毛玻璃拟态 (Glassmorphism)** 风格的设计系统。以下是核心样式特点总结：

## 1. 核心设计理念
*   **视觉风格**: 现代扁平化 + 毛玻璃效果。大量使用半透明白色背景 (`bg-white/90`) 配合背景模糊 (`backdrop-blur`)。
*   **布局**: 强调模块化卡片设计，通过 Grid 网格系统将内容分块。
*   **配色**: 以中性灰/蓝灰 (Slate) 为主基调，配合一套语义明确的辅助色（红/绿/蓝/黄/紫）。
*   **html**: 代码请不好空行。

## 2. 颜色系统 (UnoCSS/Tailwind)

### 基础色调
*   **背景**: `bg-slate-50`, `bg-white`, `bg-gradient-to-b from-white/90 to-[#eef3ff]/90`
*   **文本**:
    *   标题: `text-slate-900` (深黑)
    *   正文: `text-slate-700`, `text-slate-600` (次黑/深灰)
    *   辅助/标签: `text-slate-400`, `text-gray-500`

### 语义辅助色
用于区分不同模块、角色或状态：
*   **🔵 蓝色 (Blue)**: 通用信息、任务定义 (Task)。
    *   `bg-blue-50/80`, `border-blue-200`, `text-blue-900`, `text-blue-500`
*   **🟣 紫色 (Purple)**: 角色设定 (Role)、提示词心法。
    *   `bg-purple-50/80`, `border-purple-200`, `text-purple-900`, `text-purple-500`
*   **🟠 琥珀色 (Amber)**: 背景上下文 (Context)、隐秘区、警告。
    *   `bg-amber-50/80`, `border-amber-200`, `text-amber-900`, `text-amber-500`
*   **🟢 翡翠绿 (Emerald)**: 约束 (Constraints)、正面案例 (Do's)、开放区。
    *   `bg-emerald-50/80`, `border-emerald-200`, `text-emerald-900`, `text-emerald-500`
*   **🌹 玫瑰红 (Rose)**: 负面案例 (Don'ts)、错误示例。
    *   `bg-rose-50/80`, `border-rose-200`, `text-rose-900`, `text-rose-400`

## 3. 组件与容器样式

### 卡片 (Cards)
几乎所有的内容块都封装在圆角卡片中：
*   **圆角**: 极大圆角，常用 `rounded-2xl`, `rounded-3xl`, 甚至 `rounded-[32px]`。
*   **边框**: 细微边框，`border border-slate-100` 或带颜色的 `border-blue-200`。
*   **阴影**: 使用自定义的高级阴影，营造悬浮感。
    *   *例*: `shadow-[0_15px_35px_rgba(15,23,42,0.08)]`
    *   *悬停效果*: `hover:-translate-y-1 hover:shadow-[...]`

### 标签 (Labels/Badges)
常用于卡片左上角或标题上方，表示分类：
*   **样式**: 全大写、加粗、宽字间距。
*   *例*: `text-xs font-bold uppercase tracking-[0.3em] text-slate-400`

### 引用与强调 (Callouts)
*   使用 `GlassQuote` 组件（推测）或自定义 `div`。
*   带边框的彩色背景块，用于总结或核心观点。

## 4. 布局模式

### 网格系统 (Grid)
大量使用 `grid` 进行排版，而非简单的垂直堆叠：
*   **对比布局**: `grid gap-6 md:grid-cols-2` (左右分栏对比)。
*   **三列卡片**: `grid gap-6 md:grid-cols-3` (如：预训练/微调/对齐)。
*   **复杂时间轴/流程**: `grid grid-cols-[1fr_auto_1fr_auto_1fr]`。

## 5. 自定义组件
*   **`<ZoomImage />`**: 图片展示，带圆角、阴影和点击放大功能。
*   **`<v-clicks>`**: 列表项的逐个显示。
*   **`<LlmTokenFlow />`**: 复杂的交互式演示组件。

## 6. 代码片段示例

```html
<!-- 典型卡片结构 -->
<section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
    小标题/标签
  </div>
  <div class="mt-3 text-xl font-bold text-slate-900">
    主标题内容
  </div>
  <p class="mt-2 text-sm text-slate-600">
    详细的解释文本...
  </p>
</section>
```
