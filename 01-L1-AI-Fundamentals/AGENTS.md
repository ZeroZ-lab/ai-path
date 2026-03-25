# L1 COURSE KNOWLEDGE BASE (AI FUNDAMENTALS)

## OVERVIEW
AI basics and fundamentals course for legal/white-collar professionals, covering LLM mechanisms and prompt engineering.

## STRUCTURE
- `pages/`: Slide content files, organized by chapter (e.g., `01-`, `02-`).
- `components/`: Custom Vue components for interactive teaching (e.g., `LlmTokenFlow.vue`).
- `public/`: Static assets like images and diagrams.
- `snippets/`: Code snippets for the slides.

## WHERE TO LOOK
- **Slide Content**: `pages/*.md` (Main entry: `slides.md`).
- **Interactive Demos**: `components/*.vue`.
- **Assets**: `public/imgs/`.

## CONVENTIONS
- **Chapter-based Naming**: Files in `pages/` must follow `XX-YY-name.md` (e.g., `01-01-intro.md`).
- **Glassmorphism Cards**: Use `rounded-[32px]`, `bg-white/90`, and `shadow-[0_25px_60px_rgba(15,23,42,0.12)]` for main content containers.
- **Speaker Notes**: Extensive use of `<!-- ... -->` for delivery guidance; often longer than the slide content.
- **Interactive Components**: Use custom Vue components for abstract concepts (Token flow, Training stages).
- **MDC Syntax**: Enabled and preferred for markdown content.

## ANTI-PATTERNS
- **Text Overload**: Avoid putting too much text on a single slide; use `<v-clicks>` or speaker notes instead.
- **Inconsistent Naming**: Do not break the `XX-YY-name.md` naming convention in `pages/`.
- **Hardcoded Styles**: Avoid inline styles; prefer the project's Tailwind-based glassmorphism patterns.
- **Missing Speaker Notes**: Every slide should have delivery guidance in speaker notes.
