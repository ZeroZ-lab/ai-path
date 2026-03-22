import Link from "next/link"

export default function NotFound() {
  return (
    <div className="shell empty-state">
      <div>
        <h1>课程未找到</h1>
        <p>当前聚合站只接入了可演示版课程。可以先回到展馆查看已上线内容。</p>
        <Link href="/courses" className="button button--dark">
          返回课程展馆
        </Link>
      </div>
    </div>
  )
}
