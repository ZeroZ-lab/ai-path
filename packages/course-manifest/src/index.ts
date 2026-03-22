export type CourseStatus = "ready" | "draft" | "hidden"

export type CourseManifestItem = {
  id: string
  title: string
  level: string
  track: string
  summary: string
  audience: string
  tags: string[]
  cover: string
  entry: string
  sourceDir: string
  status: CourseStatus
}

type CourseView = CourseManifestItem & {
  statusLabel: string
}

const statusLabels: Record<CourseStatus, string> = {
  ready: "已上线",
  draft: "准备中",
  hidden: "隐藏",
}

const courses: CourseManifestItem[] = [
  {
    id: "l1",
    title: "AI 基础认知与思维启蒙",
    level: "L1",
    track: "Fundamentals",
    summary: "建立 AI 的基本认知、能力边界和工作方式，适合作为整个课程体系的起点。",
    audience: "面向第一次系统接触 AI 的法律与白领人群，帮助统一语言和判断框架。",
    tags: ["AI 基础", "认知启蒙", "白领通识"],
    cover: "/slides/l1/imgs/ai.png",
    entry: "/slides/l1/index.html",
    sourceDir: "01-L1-AI-Fundamentals",
    status: "ready",
  },
  {
    id: "l2",
    title: "Cherry Studio 基础入门",
    level: "L2",
    track: "Tooling",
    summary: "从安装配置到对话、知识库和 MCP，快速进入 Cherry Studio 的实际使用场景。",
    audience: "适合已经具备 AI 基本认知、准备把能力落到工具操作和知识库工作流的人群。",
    tags: ["Cherry Studio", "知识库", "MCP"],
    cover: "/slides/l2/imgs/cherry-studio-logo.png",
    entry: "/slides/l2/index.html",
    sourceDir: "02-L2-CherryStudio",
    status: "ready",
  },
  {
    id: "l3",
    title: "Dify 实战指南",
    level: "L3",
    track: "Workflow",
    summary: "从 Dify 的基础配置、工作流搭建、节点理解，一路走到综合案例的完整正式主课。",
    audience: "面向已经完成基础认知与工具入门、准备系统掌握 Dify 工作流与应用构建的人群。",
    tags: ["Dify", "Workflow", "综合案例"],
    cover: "/slides/l3/imgs/dify-logo.svg",
    entry: "/slides/l3/index.html",
    sourceDir: "03-L3-Dify-Guide",
    status: "ready",
  },
]

export function getAllCourses(): CourseView[] {
  return courses.map((course) => ({
    ...course,
    statusLabel: statusLabels[course.status],
  }))
}

export function getReadyCourses(): CourseView[] {
  return getAllCourses().filter((course) => course.status === "ready")
}

export function getCourseById(id: string): CourseView | undefined {
  return getAllCourses().find((course) => course.id === id)
}
