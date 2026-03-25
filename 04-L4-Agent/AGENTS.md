# AGENTS.md - 04-L4-Agent

## OVERVIEW
Advanced Agent development course focusing on OpenClaw architecture, autonomous loops, and MCP-based skill systems.

## STRUCTURE
- `components/`: Interactive Vue visualizations (AgentLoop, ArchExplorer, Identity).
- `pages/`: Numbered slide content (00-21) following the course narrative.
- `source/`: Reference materials, raw content, and HTML prototypes.

## WHERE TO LOOK
- `slides.md`: Main entry point; defines the slide sequence and global settings.
- `pages/*.md`: Individual slide content; contains layout, Tailwind styling, and speaker notes.
- `components/*.vue`: Custom interactive elements for demonstrating agentic behavior.

## CONVENTIONS
- **Agent Loop Terminology**: Strictly follow the `Thought -> Action -> Observation -> Decision` cycle.
- **Visual Metaphors**: Use "Lobster" (OpenClaw) and "Staff/Intern" metaphors for agent roles.
- **Color Coding**: 
  - **Blue**: Thought / Context / Definitions.
  - **Amber**: Action / Instructions / `SKILL.md`.
  - **Emerald**: Observation / Logic / `logic.ts`.
  - **Purple**: Decision / Roles / Identity.
- **Interactive Demos**: Prefer `<AgentLoopVisualizer />` or `<OpenClawArchExplorer />` for complex logic over static text.

## ANTI-PATTERNS
- **Static Diagrams**: Avoid using static images for loops; use the interactive Vue components to show state transitions.
- **Prompt Overload**: Never display massive raw prompts; use the "Anatomy of a Skill" breakdown (Instructions + Logic).
- **Linear Thinking**: Avoid slides that imply LLMs are "one-shot" responders; always emphasize the iterative loop and feedback.
- **Manual Ordering**: Do not skip numbers in `pages/` filenames; maintain the `00-XX` prefix for logical flow.

## FATAL AI ERROR LOG
- **2026-03-23**: Failed to follow the 'NO BLANK LINES IN HTML BLOCKS' rule twice. AI must strictly sanitize all HTML blocks in Slidev markdown files by removing any inner empty newlines.
