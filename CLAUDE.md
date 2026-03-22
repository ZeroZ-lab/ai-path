# CLAUDE.md

This file provides Claude Code-specific guidance. For general project information, see [AGENTS.md](./AGENTS.md).

## Quick Start

```bash
# Development
cd 01-L1-AI-Fundamentals  # or 02-L2-CherryStudio, 03-L3-Dify-Guide, etc.
pnpm install
pnpm dev                    # http://localhost:3030

# Theme development
cd guan-theme
npm run dev
```

## Project Structure

```
01-L1-AI-Fundamentals/    # AI basics
02-L2-CherryStudio/       # Cherry Studio tool
03-L3-Dify-Guide/         # Dify formal course
guan-theme/               # Custom Slidev theme
```

## Claude-Specific Notes

### When Editing Slide Files

1. **ALWAYS read AGENTS.md first** for:
   - Critical technical constraints (no blank lines in HTML blocks)
   - Speaker notes placement rules
   - Style guide and design system
   - Content tone guidelines

2. **Check existing pages** in `03-L3-Dify-Guide/pages/` for reference implementations

3. **Run dev server** to verify changes: `pnpm dev`

### Common Tasks

**Adding a new slide:**
```bash
# 1. Create page file following naming convention: XX-YY-topic.md
cd pages && touch 01-05-new-topic.md

# 2. Add to slides.md with src: import

# 3. Follow style patterns from existing pages
```

**Creating Vue components:**
- Place in `components/` directory
- Use glassmorphism design system
- See existing components for patterns

---

📖 **Full documentation:** [AGENTS.md](./AGENTS.md)
