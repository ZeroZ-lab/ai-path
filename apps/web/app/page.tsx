import { getReadyCourses } from "@ai-path/course-manifest"
import { CourseCover } from "../components/course-cover"
import Link from "next/link"

export default function HomePage() {
  const courses = getReadyCourses()

  return (
    <div className="shell">
      <section className="section">
        <div className="section__header">
          <div>
            <div className="section-label">Courses</div>
            <h2 className="section__title">课程</h2>
          </div>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <CourseCover entry={course.entry} title={course.title} />
              <div className="course-card__meta">
                <span className="pill pill--blue">{course.level}</span>
                <span className="pill pill--emerald">{course.statusLabel}</span>
              </div>
              <div>
                <h3 className="course-card__title">{course.title}</h3>
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
                  进入浏览
                </Link>
                <a href={course.entry} className="button button--ghost" target="_blank" rel="noreferrer">
                  新窗口打开
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
