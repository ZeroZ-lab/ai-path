# Gemini's Project Memory

## Critical Technical Constraints

1.  **Slidev Rendering Sensitivity**:
    *   **NO Blank Lines in HTML Blocks**: When writing `.md` files for Slidev (Vue components), **NEVER** leave blank lines between HTML tags (like `<div>` and `</div>` or `<div>` and other elements) within the same block.
    *   **Reason**: Slidev's Markdown parser might misinterpret blank lines as paragraph breaks, causing layout breakages (e.g., unexpected large gaps, flexbox failures).
    *   **Example (BAD)**:
        ```html
        <div class="container">

          <div class="item">Item 1</div>

        </div>
        ```
    *   **Example (GOOD)**:
        ```html
        <div class="container">
          <div class="item">Item 1</div>
        </div>
        ```
    *   **Action**: Always compact the HTML structure in `write_file` calls for `.md` or `.vue` files used in Slidev.

2.  **Speaker Notes Location**:
    *   **Rule**: HTML comments `<!-- ... -->` used for speaker notes MUST be placed at the **very bottom** of the markdown file, or strictly outside of any Vue/HTML component blocks.
    *   **Reason**: If placed inside a `div`, they might be treated as part of the DOM or fail to be parsed as notes.

3.  **Visual Hierarchy**:
    *   **Font Sizes**: Prefer `text-sm` (14px) or `text-base` (16px) for body text. `text-xs` (12px) is often too small for projection.
    *   **Card Styling**: Use `border-2`, `shadow-md`, and hover effects (`hover:-translate-y-1`) to create depth.

## Project Structure (Current)

*   `01-xx`: Intro & Cognition (Pain -> Need -> Dify)
*   `02-xx`: Deployment (Cloud vs Self-Host)
*   `03-xx`: Configuration (Model & Plugin)
*   `04-xx`: Quick Start (Chat App Demo)
*   `05-xx`: Core Concepts (JSON, Variables, Workflow)
*   `06-xx`: Nodes Deep Dive (5 Categories)
*   `07-xx`: Workflow Practice (Part 1: Writer, Part 2: Legal Agent)
*   `08-xx`: Ops (Debug, Publish, Monitor)
*   `09-xx`: Knowledge Base (RAG, Chunking, Rerank)

## User Preferences

*   **Tone**: Professional yet engaging (use metaphors like "Factory", "Staff", "Brain").
*   **Visuals**: Clean, aligned, large fonts, rich interactions (Vue components).
*   **Audience**: Legal/White-collar (Non-tech). Focus on "Why" and "How to use", avoid deep code details.
