'use client'
import { useEffect, useState } from 'react'

const LINES = [
  { type: 'cmd', text: '$ whoami' },
  { type: 'out', text: 'owen hochwald' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: '$ cat interests.txt' },
  { type: 'out', text: 'distributed systems, terminal tooling, ML, problems where performance matters' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: '$ echo $STATUS' },
  { type: 'out', text: 'open to high-signal work' },
]

const CHAR_DELAY = 40
const LINE_PAUSE = 500

export function TerminalBio() {
  const [displayed, setDisplayed] = useState<{ text: string; done: boolean }[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine >= LINES.length) return

    const line = LINES[currentLine]

    if (line.type === 'blank') {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, { text: '', done: true }])
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, LINE_PAUSE)
      return () => clearTimeout(t)
    }

    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setDisplayed((d) => {
          const next = [...d]
          if (next.length <= currentLine) {
            next.push({ text: line.text[currentChar], done: false })
          } else {
            next[currentLine] = {
              text: next[currentLine].text + line.text[currentChar],
              done: false,
            }
          }
          return next
        })
        setCurrentChar((c) => c + 1)
      }, CHAR_DELAY)
      return () => clearTimeout(t)
    }

    // Line finished — pause before next
    const t = setTimeout(() => {
      setDisplayed((d) => {
        const next = [...d]
        if (next[currentLine]) next[currentLine].done = true
        return next
      })
      setCurrentLine((l) => l + 1)
      setCurrentChar(0)
    }, LINE_PAUSE)
    return () => clearTimeout(t)
  }, [currentLine, currentChar])

  const isTyping = currentLine < LINES.length

  return (
    <div className="rounded-xl bg-zinc-950 p-4 font-[family-name:var(--font-geist-mono)] text-sm dark:bg-zinc-900">
      {/* Traffic lights */}
      <div className="mb-3 flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>

      <div className="space-y-0.5">
        {displayed.map((line, i) => {
          const src = LINES[i]
          const isCurrentTyping = i === currentLine && isTyping
          return (
            <p
              key={i}
              className={
                src?.type === 'cmd'
                  ? 'text-green-400'
                  : 'text-zinc-400'
              }
            >
              {line.text}
              {isCurrentTyping && (
                <span className="animate-pulse">▋</span>
              )}
            </p>
          )
        })}
        {/* Cursor after last line when done */}
        {!isTyping && (
          <p className="text-green-400">
            $ <span className="animate-pulse">▋</span>
          </p>
        )}
      </div>
    </div>
  )
}
