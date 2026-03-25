# 03-L3-Dify-Guide KNOWLEDGE BASE

## OVERVIEW
Comprehensive Dify practical guide focusing on workflows, node configurations, and RAG (Knowledge Base) implementation for legal professionals.

## STRUCTURE
- `components/`: Interactive Vue components for visualizing RAG, chunking, and workflow logic.
- `pages/`: Modular slide content organized by chapter (01-09).
- `knowledge_dataset/`: Sample data for RAG demonstrations.
- `resource/`: Static assets and reference materials.
- `setup/`: Slidev setup scripts.

## WHERE TO LOOK
- **Workflow Logic**: `pages/05-` to `pages/07-` for node explanations and legal case studies.
- **RAG/Knowledge Base**: `pages/09-` and corresponding `components/Chunking*.vue` or `components/RagProcess.vue`.
- **Interactive Demos**: `components/` for complex visualizations like `SearchComparison.vue` or `RerankDemo.vue`.

## CONVENTIONS
- **Naming**: Pages use `XX-YY-description.md` where `XX` is chapter and `YY` is sequence.
- **Visuals**: Heavy use of interactive Vue components to explain abstract AI concepts (chunking, reranking).
- **Legal Context**: Examples should consistently relate to legal/white-collar workflows (e.g., `07-04-legal-case-study.md`).

## ANTI-PATTERNS
- **Static RAG Explanations**: Avoid using just text for RAG; prefer `RagProcess.vue` or `FileSlicingVisual.vue`.
- **Hardcoded Data**: Keep demo data in `knowledge_dataset/` or as component props, not hardcoded in `.md`.
