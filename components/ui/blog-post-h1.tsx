'use client'
import { usePathname } from 'next/navigation'

export function BlogPostH1({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const slug = pathname.split('/').pop() || ''
  return (
    <h1 style={{ viewTransitionName: `blog-title-${slug}` }}>{children}</h1>
  )
}
