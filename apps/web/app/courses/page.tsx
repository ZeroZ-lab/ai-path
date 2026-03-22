import Link from "next/link"
import { getReadyCourses } from "@ai-path/course-manifest"

export default function CoursesPage() {
  const courses = getReadyCourses()

  return (
    <div className="shell">
      <section className="section">
        <div className="section__header">
          <div>
            <div className="section-label">Course Gallery</div>
            <h1 className="section__title">课程展馆</h1>
          </div>
          <p className="section__body">当前版本已接入 L1、L2 与新的正式版 L3，用统一入口验证课程聚合站的课程闭环。</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-card__cover">
                <img src={course.cover} alt={`${course.title} cover`} />
              </div>
              <div className="course-card__meta">
                <span className="pill pill--blue">{course.level}</span>
                <span className="pill pill--amber">{course.track}</span>
              </div>
              <div>
                <h2 className="course-card__title">{course.title}</h2>
                <p className="course-card__summary">{course.summary}</p>
              </div>
              <p className="course-card__audience">{course.audience}</p>
              <div className="tag-list">
                {course.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="action-row">
                <Link href={`/courses/${course.id}`} className="button button--dark">
                  站内浏览
                </Link>
                <a href={course.entry} className="button button--ghost" target="_blank" rel="noreferrer">
                  直接打开课件
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
