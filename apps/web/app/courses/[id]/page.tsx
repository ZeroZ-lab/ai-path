import Link from "next/link"
import { notFound } from "next/navigation"
import { getCourseById, getReadyCourses } from "@ai-path/course-manifest"

type CoursePageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getReadyCourses().map((course) => ({ id: course.id }))
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params
  const course = getCourseById(id)

  if (!course || course.status !== "ready") {
    notFound()
  }

  return (
    <div className="shell viewer-layout">
      <section className="viewer-panel">
        <div className="viewer-header">
          <div>
            <div className="section-label">{course.level}</div>
            <h1 className="viewer-title">{course.title}</h1>
            <p className="section__body">{course.summary}</p>
          </div>
          <div className="action-row">
            <Link href="/" className="button button--ghost">
              返回首页
            </Link>
            <a href={course.entry} className="button button--dark" target="_blank" rel="noreferrer">
              全屏 / 新窗口打开
            </a>
          </div>
        </div>
        <div className="notice">
          当前版本优先保证桌面端浏览闭环。课程内容保持原 Slidev 结构，主站只负责统一入口、切换与浏览壳层。
        </div>
      </section>

      <section className="viewer-frame" aria-label={`${course.title} 课件浏览器`}>
        <iframe title={course.title} src={course.entry} />
      </section>
    </div>
  )
}
