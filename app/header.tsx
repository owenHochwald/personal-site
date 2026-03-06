'use client'
import { GlitchText } from '@/components/ui/glitch-text'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const WireframeOrb = dynamic(
    () =>
        import('@/components/ui/wireframe-orb').then((m) => ({
            default: m.WireframeOrb,
        })),
    { ssr: false }
)

function CmdKHint() {
    const [isMac, setIsMac] = useState(true)

    useEffect(() => {
        setIsMac(/mac|iphone|ipad|ipod/i.test(navigator.platform))
    }, [])

    return (
        <button
            onClick={() => {
                const event = new KeyboardEvent('keydown', {
                    key: 'k',
                    metaKey: isMac,
                    ctrlKey: !isMac,
                    bubbles: true,
                })
                document.dispatchEvent(event)
            }}
            className="flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-xs text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-400"
            title="Open command palette"
        >
            <kbd className="font-sans">{isMac ? '⌘' : 'Ctrl'}</kbd>
            <kbd className="font-sans">K</kbd>
        </button>
    )
}

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
                <div className="mt-1.5">
                    <CmdKHint />
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <WireframeOrb />
            </div>
        </header>
    )
}
