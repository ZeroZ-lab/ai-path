import Link from "next/link"
import { getReadyCourses } from "@ai-path/course-manifest"

export default function HomePage() {
  const courses = getReadyCourses()

  return (
    <div className="shell">
      <section className="hero">
        <div className="hero__eyebrow">PPT Gallery For AI Training</div>
        <h1 className="hero__title">把分散的 Slidev 课程，整理成一个真正可浏览的学习站。</h1>
        <p className="hero__body">
          这里不是把课件改写成网页，而是给现有课程资产加上一层统一的展馆壳。用户可以从一个站内进入课程、直接浏览
          PPT，并沿着清晰的学习路径理解整套内容体系。
        </p>
        <div className="hero__actions">
          <Link href="/courses" className="button button--dark">
            进入课程展馆
          </Link>
          <Link href={`/courses/${courses[0]?.id ?? "l1"}`} className="button button--ghost">
            直接开始浏览
          </Link>
        </div>
        <div className="hero__stats">
          <div className="stat-chip">
            <strong>{courses.length}</strong>
            <span>已接入课程</span>
          </div>
          <div className="stat-chip">
            <strong>1 个站内入口</strong>
            <span>统一导航、分类与分享</span>
          </div>
          <div className="stat-chip">
            <strong>0 次内容迁移</strong>
            <span>保留现有 Slidev 内容结构</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <div>
            <div className="section-label">Current Collection</div>
            <h2 className="section__title">第一版可演示课程</h2>
          </div>
          <Link href="/courses" className="button button--ghost">
            查看全部课程
          </Link>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-card__cover">
                <img src={course.cover} alt={`${course.title} cover`} />
              </div>
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

      <section className="section">
        <div className="section__header">
          <div>
            <div className="section-label">Learning Path</div>
            <h2 className="section__title">从基础认知到工具实践</h2>
          </div>
        </div>
        <div className="path-grid">
          <div className="path-card">
            <strong>L1 基础认知</strong>
            <p className="section__body">先建立 AI 工作方式、能力边界和核心术语的共同语境。</p>
          </div>
          <div className="path-card">
            <strong>L2 Cherry Studio</strong>
            <p className="section__body">把认知落到工具操作与知识库实践，形成可复制的工作流。</p>
          </div>
          <div className="path-card">
            <strong>L3 Dify 实战指南</strong>
            <p className="section__body">系统掌握 Dify 的工作流、节点体系与综合案例，进入正式应用构建阶段。</p>
          </div>
          <div className="path-card">
            <strong>L4 Agent</strong>
            <p className="section__body">在后续阶段继续接入更高级的 Agent 课程，补齐完整课程矩阵。</p>
          </div>
        </div>
      </section>
    </div>
  )
}
