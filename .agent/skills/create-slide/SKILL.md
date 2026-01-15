---
name: create-slide
description: Standardized workflow for creating and registering new Slidev slides (Markdown/Vue) with strict formatting rules.
---

# Create Slide Skill

This skill guides the AI in creating new slides for the "AI Grow Paths" Slidev project. It ensures consistency in file naming, directory structure, HTML formatting, and slide registration.

## 1. Context & Naming Analysis

Before creating a file, you MUST:
1.  **Identify the Target Chapter**:
    *   Analyze the user's request to determine the topic (e.g., "Deployment", "Legal Demo", "RAG").
    *   Match it to existing chapter prefixes in `03-L3-Dify-LAD/pages/`:
        *   `01-xx`: Intro
        *   `02-xx`: Deployment
        *   `03-xx`: Config
        *   `04-xx`: Quick Start
        *   `05-xx`: Core Concepts
        *   `06-xx`: Nodes
        *   `07-xx`: Workflow (Legal)
        *   `08-xx`: Ops
        *   `09-xx`: Knowledge Base (RAG)
2.  **Determine File Name**:
    *   Scan `03-L3-Dify-LAD/pages/` for the highest number in that chapter (e.g., if `09-04` exists, next is `09-05`).
    *   Format: `XX-YY-slug-name.md` (e.g., `09-05-rerank-strategy.md`).

## 2. Template Selection

Choose the appropriate template from `templates/` based on content type:

*   **Standard Concept (`content.md`)**: Left text, right image/code. Use for explaining concepts.
*   **Chapter Cover (`cover.md`)**: Big title, transition slide. Use for new sections.
*   **Visual/Diagram (`diagram.md`)**: Complex Vue components, flowcharts, animations. Use for "How it works".
*   **Demo/Walkthrough (`demo.md`)**: Interactive elements, step-by-step guides. Use for "Let's build this".

## 3. Critical Technical Constraints (MUST FOLLOW)

### A. HTML formatting within Markdown
*   **FATAL ERROR PREVENTION**: inside any HTML block (like `<div ...> ... </div>`), there must be **NO BLANK LINES**.
    *   BAD:
        ```html
        <div>
          Line 1

          Line 2
        </div>
        ```
    *   GOOD:
        ```html
        <div>
          Line 1
          Line 2
        </div>
        ```
*   Reason: Slidev parser breaks layout if it sees markdown paragraph breaks (blank lines) inside Vue/HTML components.

### B. Speaker Notes
*   **Location**: Notes MUST be the **absolute last element** in the file.
*   **Format**: Use HTML comments `<!-- ... -->`.
*   **Scope**: Do NOT put notes inside the main `<div>` wrapper.

### C. Visual Style
*   **Colors**: Use `slate` for neutral text, `rose` for primary accents (e.g., `text-rose-500`, `border-rose-400`).
*   **Hierarchy**: `text-xl` for headings, `text-sm` for body. Avoid `text-xs` unless necessary for labels.
*   **Containers**: Use `bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm` for cards.

## 4. Execution Workflow

1.  **Read Directory**: List `03-L3-Dify-LAD/pages` to find the next available index.
2.  **Generate Content**: Write the `.md` file to `03-L3-Dify-LAD/pages/` using the rules above.
3.  **Register Slide**:
    *   Read `03-L3-Dify-LAD/slides.md`.
    *   Locate the correct Chapter section (comment markers like `<!-- Chapter 08 -->`).
    *   Insert the new slide reference strictly following this format:
        ```markdown
        ---
        src: ./pages/XX-YY-your-file.md
        hide: false
        ---
        ```
    *   Ensure there is an empty line between slides.

