'use client'
import { GlitchText } from '@/components/ui/glitch-text'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

import dynamic from 'next/dynamic'

const WireframeOrb = dynamic(
    () =>
        import('@/components/ui/wireframe-orb').then((m) => ({
            default: m.WireframeOrb,
        })),
    { ssr: false }
)


export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link href="/" className="font-medium text-black dark:text-white">
                    <GlitchText>Owen Hochwald</GlitchText>
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
            <WireframeOrb />
        </header>
    )
}
