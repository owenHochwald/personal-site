'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Owen Hochwald
        </Link>
        <p className="text-zinc-600 dark:text-zinc-500">
          Building{' '}
          <TextLoop
            interval={2.5}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-zinc-600 dark:text-zinc-500"
          >
            <span>distributed systems</span>
            <span>terminal tooling</span>
            <span>ML pipelines</span>
            <span>things that ship</span>
          </TextLoop>
        </p>
      </div>
    </header>
  )
}
