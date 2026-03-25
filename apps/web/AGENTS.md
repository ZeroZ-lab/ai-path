# WEB APP KNOWLEDGE BASE

**Generated:** 2026-03-23
**Domain:** Next.js 15 Course Aggregator

## OVERVIEW
A Next.js 15 application that serves as a centralized gallery and viewer for the AI Path Slidev course ecosystem.

## STRUCTURE
- `app/`: Next.js App Router (Layouts, Pages, Styles)
- `app/courses/`: Course listing and dynamic viewer (`[id]`)
- `public/`: Static assets (icons, images)

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Course Viewer | `app/courses/[id]/page.tsx` | Core logic for embedding Slidev via `iframe` |
| Global Styles | `app/globals.css` | Centralized CSS variables and glassmorphism rules |
| Course Data | `@ai-path/course-manifest` | External workspace package for course metadata |
| Site Layout | `app/layout.tsx` | Global header and navigation structure |

## CONVENTIONS
- **Styling**: Pure CSS with custom variables (`--bg`, `--panel`, etc.). **No Tailwind CSS**.
- **Data Fetching**: Always use `@ai-path/course-manifest` to retrieve course info. Never hardcode.
- **Layout**: Use the `.shell` class for max-width containment (1180px).
- **Language**: UI is primarily in Simplified Chinese (`zh-CN`).
- **Server Components**: Prefer Server Components (default in Next.js 15) for SEO and performance.

## ANTI-PATTERNS
- **NO INLINE STYLES**: Use `globals.css` variables for consistency with the glassmorphism theme.
- **NO DIRECT COURSE DATA**: Never hardcode course titles or summaries; always use the manifest.
- **NO HEAVY CLIENT COMPONENTS**: Keep pages as Server Components unless interactivity is strictly required.
- **NO HARDCODED URLS**: Use `Link` component for internal navigation and `course.entry` for course links.
