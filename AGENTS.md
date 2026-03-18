# Agents.md

This file provides guidance to AI assistants (Claude, Gemini, etc.) when working with code in this repository.

## Repository Overview

This is a multi-level AI training course repository built with **Slidev** (Vue-powered slide deck framework). The repository contains:

- **L1 (01-L1-AI-Fundamentals)**: AI basics and fundamentals
- **L2 (02-L2-CherryStudio)**: Cherry Studio tool training
- **L3 (03-L3-Dify / 03-L3-Dify-LAD)**: Dify platform courses with workflow examples
- **guan-theme**: Custom Slidev theme with glassmorphism design

Target audience: Legal/white-collar professionals (non-technical).

## Critical Technical Constraints

### Slidev Markdown Rendering

**NO BLANK LINES IN HTML BLOCKS** - This is the #1 cause of layout breakage:

```html
<!-- BAD - Will break layout -->
<div class="container">

  <div class="item">Item 1</div>

</div>

<!-- GOOD - Compact structure -->
<div class="container">
  <div class="item">Item 1</div>
</div>
```

**Reason**: Slidev's Markdown parser treats blank lines as paragraph breaks, causing flexbox/grid failures and unexpected gaps.

**Action**: Always compact the HTML structure when writing `.md` or `.vue` files for Slidev.

### Speaker Notes Location

HTML comments `<!-- ... -->` for speaker notes MUST be placed:
- At the very bottom of the markdown file, OR
- Strictly outside Vue/HTML component blocks

Placing them inside `<div>` blocks may cause DOM parsing issues.

### Visual Hierarchy

- **Font Sizes**: Prefer `text-sm` (14px) or `text-base` (16px) for body text. `text-xs` (12px) is often too small for projection.
- **Card Styling**: Use `border-2`, `shadow-md`, and hover effects (`hover:-translate-y-1`) to create depth.

## Project Structure

### Course Modules

Each course follows a modular structure:
- `slides.md` - Main entry file with frontmatter config and page imports
- `pages/` - Individual slide pages (e.g., `01-intro.md`, `02-installation.md`)
- `components/` - Custom Vue components for interactive elements
- `public/` - Static assets (images, PDFs, etc.)

### Course Content Organization

Courses use numerical prefixes for ordering:
```
01-00-opening-poll.md       # Chapter 1, Section 0 (intro/poll)
01-01-workflow-need.md      # Chapter 1, Section 1
02-00-deploy-options.md     # Chapter 2, Section 0
09-03-rerank-mechanism.md   # Chapter 9, Section 3
```

### L3-Dify-LAD Chapter Overview

- `01-xx`: Intro & Cognition (Pain -> Need -> Dify)
- `02-xx`: Deployment (Cloud vs Self-Host)
- `03-xx`: Configuration (Model & Plugin)
- `04-xx`: Quick Start (Chat App Demo)
- `05-xx`: Core Concepts (JSON, Variables, Workflow)
- `06-xx`: Nodes Deep Dive (5 Categories)
- `07-xx`: Workflow Practice (Part 1: Writer, Part 2: Legal Agent)
- `08-xx`: Ops (Debug, Publish, Monitor)
- `09-xx`: Knowledge Base (RAG, Chunking, Rerank)

## Key Commands

### Development

Each course module is independent. Navigate to the specific course directory first:

```bash
cd 01-L1-AI-Fundamentals  # or 02-L2-CherryStudio, 03-L3-Dify-LAD, etc.
pnpm install              # Install dependencies
pnpm dev                  # Start dev server (usually at http://localhost:3030)
pnpm build                # Build for production
pnpm export               # Export slides to PDF/PPTX
```

### Theme Development

```bash
cd guan-theme
npm install
npm run dev               # Preview theme with example.md
npm run screenshot        # Generate PNG previews
```

## Style Guide

### Design System

The courses use a modern **glassmorphism** style with these characteristics:

**Colors** (UnoCSS/Tailwind):
- Base: `bg-slate-50`, `bg-white`, `text-slate-900` (headings), `text-slate-600` (body)
- Semantic colors for different module types:
  - Blue: Tasks/general info (`bg-blue-50/80`, `border-blue-200`)
  - Purple: Roles/prompts (`bg-purple-50/80`, `border-purple-200`)
  - Amber: Context/warnings (`bg-amber-50/80`, `border-amber-200`)
  - Emerald: Constraints/positive examples (`bg-emerald-50/80`, `border-emerald-200`)
  - Rose: Negative examples/errors (`bg-rose-50/80`, `border-rose-200`)

**Card Components**:
```html
<section class="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
  <div class="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
    Label/Badge
  </div>
  <div class="mt-3 text-xl font-bold text-slate-900">
    Main Title
  </div>
  <p class="mt-2 text-sm text-slate-600">
    Description text...
  </p>
</section>
```

**Layout Patterns**:
- Use `grid gap-6 md:grid-cols-2` for side-by-side comparisons
- Use `grid gap-6 md:grid-cols-3` for three-column card layouts
- Extreme rounded corners: `rounded-2xl`, `rounded-3xl`, `rounded-[32px]`
- Custom shadows for depth: `shadow-[0_15px_35px_rgba(15,23,42,0.08)]`
- Hover effects: `hover:-translate-y-1 hover:shadow-[...]`

### Content Tone

- Professional yet engaging
- Use metaphors relatable to legal/white-collar audience ("Factory", "Staff", "Brain", "岗位职责")
- Focus on "Why" and "How to use" rather than technical implementation details
- Avoid deep code explanations

## Dependencies

All course modules use:
- **Slidev CLI** (`@slidev/cli`) - different versions across modules
- **Vue 3** - for components
- **UnoCSS/Tailwind** - for styling (via Slidev)
- **pnpm** - preferred package manager (but npm also works)

The theme (`guan-theme`) is referenced locally via relative path in slide frontmatter:
```yaml
---
theme: ../guan-theme
---
```

## Working with Existing Styles

Reference existing files for consistent styling:
- `STYLE_GUIDE_01.md` - Detailed style specifications
- `AGENTS.md` - This file: project memory and technical constraints
- Sample pages in `03-L3-Dify-LAD/pages/` - Well-structured examples
