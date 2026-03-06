'use client'
import { useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

const GLITCH_CHARS = '01!@#$%&/\\|[]{}()<>_-+=~`^*;:,.?ABCDEFabcdef0123456789'

type GlitchTextProps = {
    children: string
    className?: string
    glitchInterval?: number // ms between glitch bursts
    glitchDuration?: number // ms a single glitch burst lasts
}

export function GlitchText({
    children,
    className,
    glitchInterval = 2500,
    glitchDuration = 250,
}: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(children)
    const [isGlitching, setIsGlitching] = useState(false)

    const glitch = useCallback(() => {
        setIsGlitching(true)
        const original = children
        const iterations = Math.floor(glitchDuration / 40)
        let i = 0

        const interval = setInterval(() => {
            setDisplayText(
                original
                    .split('')
                    .map((char, idx) => {
                        if (char === ' ') return ' '
                        // Progressively resolve characters from left to right
                        if (idx < (i / iterations) * original.length) return original[idx]
                        // Random chance to glitch each character
                        if (Math.random() < 0.4) {
                            return GLITCH_CHARS[
                                Math.floor(Math.random() * GLITCH_CHARS.length)
                            ]
                        }
                        return char
                    })
                    .join('')
            )
            i++
            if (i > iterations) {
                clearInterval(interval)
                setDisplayText(original)
                setIsGlitching(false)
            }
        }, 40)
    }, [children, glitchDuration])

    // Periodic glitch
    useEffect(() => {
        // Initial glitch on mount
        const initialTimeout = setTimeout(glitch, 400)

        const timer = setInterval(glitch, glitchInterval)
        return () => {
            clearTimeout(initialTimeout)
            clearInterval(timer)
        }
    }, [glitch, glitchInterval])

    // Glitch on hover
    const handleMouseEnter = () => {
        if (!isGlitching) glitch()
    }

    return (
        <span
            onMouseEnter={handleMouseEnter}
            className={cn('relative inline-block cursor-default', className)}
        >
            {/* Main text */}
            <span
                className={cn(
                    'relative z-10 font-mono transition-colors duration-100',
                    isGlitching && 'text-zinc-400 dark:text-zinc-400'
                )}
            >
                {displayText}
            </span>

            {/* Glitch layers (offset copies) */}
            {isGlitching && (
                <>
                    <span
                        aria-hidden
                        className="absolute inset-0 z-0 font-mono text-zinc-400/50 dark:text-zinc-500/50"
                        style={{
                            clipPath: 'inset(10% 0 60% 0)',
                            transform: 'translate(-2px, -1px)',
                        }}
                    >
                        {displayText}
                    </span>
                    <span
                        aria-hidden
                        className="absolute inset-0 z-0 font-mono text-zinc-500/50 dark:text-zinc-600/50"
                        style={{
                            clipPath: 'inset(50% 0 10% 0)',
                            transform: 'translate(2px, 1px)',
                        }}
                    >
                        {displayText}
                    </span>
                </>
            )}
        </span>
    )
}
