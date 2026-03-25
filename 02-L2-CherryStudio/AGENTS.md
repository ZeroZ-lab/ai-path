# 02-L2-CherryStudio KNOWLEDGE BASE

## OVERVIEW
Course module focused on Cherry Studio, covering multi-model management, RAG (Knowledge Base), and MCP architecture for legal/white-collar professionals.

## STRUCTURE
- `components/`: Interactive Vue components (e.g., `RagProcess.vue`, `LlmTokenFlow.vue`).
- `pages/`: Numbered markdown files for slide content.
- `materials/`: Supporting documents or assets for the course.
- `snippets/`: Code snippets for live demos or examples.

## WHERE TO LOOK
- **Slide Content**: `pages/*.md` (e.g., `03-cherry-studio-positioning.md`).
- **Interactive Diagrams**: `components/*.vue` (e.g., `RagProcess.vue`).
- **Course Entry**: `slides.md` (main Slidev entry point).

## CONVENTIONS
- **Visual Hierarchy**: Use `rounded-[32px]` for main cards and `rounded-2xl/3xl` for sub-elements.
- **Color Semantics**:
    - **Blue**: Role definitions, user actions, core features.
    - **Purple**: Use cases, LLM generation, advanced concepts.
    - **Emerald**: Live action, success states, demos.
    - **Amber**: Warnings, icons, vector databases.
- **Interactivity**: Use `useSlideContext` and `$clicks` in Vue components to sync animations with Slidev click events.
- **Layouts**: Prefer `grid` with `gap-6` for multi-column content.
- **Glassmorphism**: Use `bg-white/90` or `bg-blue-50/80` with `backdrop-blur-sm` for cards.

## ANTI-PATTERNS
- **Hardcoded Click Counts**: Avoid hardcoding click indices in components if they can be passed as props, though current practice uses `$clicks` directly.
- **Inline Styles**: Avoid inline styles; use Tailwind classes for consistency with the glassmorphism theme.
- **Complex Logic in Markdown**: Keep complex HTML/Vue logic in `components/` rather than bloating `pages/*.md`.
- **Blank Lines in HTML**: Never include blank lines inside `<div>` blocks in markdown files to avoid layout breakage.
