import { defineMonacoSetup } from '@slidev/types' // This line is causing issues if types are not installed

// Let's try a version without explicit import if the environment supports it, 
// or we can just export the function directly without the helper if we don't care about strong typing in this file.
// However, defineMonacoSetup is a helper. 

// FIX: If @slidev/types is missing, we can just export the function directly.
// Slidev expects a default export function that receives 'monaco'.

export default async function(monaco: any) {
  return {
    editorOptions: {
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: 'off',
      scrollBeyondLastLine: false,
      padding: { top: 10, bottom: 10 },
      renderLineHighlight: 'none',
      fontFamily: "'Fira Code', monospace",
    },
  }
}
