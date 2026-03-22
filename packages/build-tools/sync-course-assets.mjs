import fs from "node:fs"
import path from "node:path"

const [, , courseId] = process.argv

if (!courseId) {
  console.error("Usage: node packages/build-tools/sync-course-assets.mjs <courseId>")
  process.exit(1)
}

const repoRoot = process.cwd()
const source = path.join(repoRoot, "courses", courseId, "dist-platform")
const target = path.join(repoRoot, "apps", "web", "public", "slides", courseId)

if (!fs.existsSync(source)) {
  console.error(`Missing source directory: ${source}`)
  process.exit(1)
}

fs.rmSync(target, { recursive: true, force: true })
fs.mkdirSync(path.dirname(target), { recursive: true })
fs.cpSync(source, target, { recursive: true })

console.log(`Synced ${courseId} assets to ${target}`)
