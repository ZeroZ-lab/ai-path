# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-23
**Branch:** main

## OVERVIEW
This is a multi-level AI training course repository built as a pnpm monorepo using **Slidev** (Vue-powered slide deck framework). It contains courses from L1 to L4, a custom theme, and a web app. Target audience: Legal/white-collar professionals.

## STRUCTURE
```
.
├── 01-L1-AI-Fundamentals/ # AI basics and fundamentals
├── 02-L2-CherryStudio/    # Cherry Studio tool training
├── 03-L3-Dify-Guide/      # Dify platform formal course
├── 04-L4-Agent/           # Agent development course
├── apps/web/              # Web application
└── guan-theme/            # Custom Slidev theme with glassmorphism design
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Adding/editing slides | `[Course-Dir]/pages/` | Numbered files (e.g., `01-intro.md`) |
| Creating Vue components | `[Course-Dir]/components/` | Custom interactive elements |
| Theme design/styling | `guan-theme/` | Glassmorphism base rules and layouts |
| Workspace config | `package.json`, `tsconfig.json` | pnpm/bun workspace roots |

## CONVENTIONS
- **Component Styling**: Glassmorphism, extreme rounded corners (`rounded-2xl/3xl`), custom drop shadows (`shadow-[0_15px_35px...]`).
- **Semantic Colors**: Blue (Tasks), Purple (Roles/prompts), Amber (Warnings), Emerald (Constraints), Rose (Errors).
- **Tone**: Professional, engaging, relatable metaphors ("Factory", "Staff"), focus on "Why/How" over deep code.

## ANTI-PATTERNS (THIS PROJECT)
- **NO BLANK LINES IN HTML BLOCKS**: The #1 cause of layout breakage. Slidev treats blank lines as paragraph breaks inside `<div>`.
- **Misplaced Speaker Notes**: `<!-- ... -->` MUST be placed at the very bottom of the `.md` file, OR strictly outside Vue/HTML blocks. NEVER put them inside `<div>` blocks.

## UNIQUE STYLES
- Courses use numerical prefixes for ordering (e.g., `01-00-opening-poll.md`).
- Each course module is an independent package.

## COMMANDS
```bash
# Develop a course
cd [Course-Dir]
pnpm install
pnpm dev

# Build for production
pnpm build

# Theme development
cd guan-theme
npm run dev
```

## NOTES
Always inspect the actual rendered Slidev page (e.g., using a browser) after making changes. Visual overflow, clipped content, and bad click sequencing cannot be caught by just reading markdown.
