import Link from "next/link"

export default function NotFound() {
  return (
    <div className="shell empty-state">
      <div>
        <h1>课程未找到</h1>
        <p>当前站点只保留首页和已接入课程入口。可以先回到首页继续浏览。</p>
        <Link href="/" className="button button--dark">
          返回首页
        </Link>
      </div>
    </div>
  )
}
