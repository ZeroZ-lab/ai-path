import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Path 聚合站",
  description: "在一个站内浏览 AI Path 的课程体系与 Slidev 课件。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="site-header">
          <div className="shell site-header__inner">
            <Link href="/" className="site-brand" aria-label="返回 AI Path 首页">
              <span className="site-brand__mark" />
              <span>
                <span className="site-brand__eyebrow">AI PATH</span>
                <span className="site-brand__title">课程聚合站</span>
              </span>
            </Link>
          </div>
        </header>
        <main className="page">{children}</main>
      </body>
    </html>
  )
}
