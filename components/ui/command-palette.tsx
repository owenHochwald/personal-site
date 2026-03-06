'use client'
import { useEffect, useState, useCallback } from 'react'
import { Command } from 'cmdk'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const run = useCallback(
    (fn: () => void) => {
      setOpen(false)
      fn()
    },
    []
  )

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="[&_[cmdk-input-wrapper]]:border-b [&_[cmdk-input-wrapper]]:border-zinc-100 [&_[cmdk-input-wrapper]]:dark:border-zinc-800">
          <Command.Input
            placeholder="Type a command..."
            className="w-full bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />
          <Command.List className="max-h-64 overflow-y-auto p-1.5">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigate"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:dark:text-zinc-500"
            >
              <CmdItem onSelect={() => run(() => router.push('/'))}>
                Home
              </CmdItem>
              <CmdItem onSelect={() => run(() => router.push('/uses'))}>
                /uses
              </CmdItem>
              <CmdItem onSelect={() => run(() => router.push('/reading'))}>
                /reading
              </CmdItem>
              <CmdItem
                onSelect={() =>
                  run(() => {
                    document
                      .getElementById('projects')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  })
                }
              >
                Projects
              </CmdItem>
              <CmdItem
                onSelect={() =>
                  run(() => {
                    document
                      .getElementById('blog')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  })
                }
              >
                Blog
              </CmdItem>
            </Command.Group>

            <Command.Group
              heading="Actions"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:dark:text-zinc-500"
            >
              <CmdItem
                onSelect={() =>
                  run(() =>
                    navigator.clipboard.writeText('owenhochwald@gmail.com')
                  )
                }
              >
                Copy email
              </CmdItem>
              <CmdItem
                onSelect={() =>
                  run(() =>
                    window.open('https://github.com/owenHochwald/', '_blank')
                  )
                }
              >
                Open GitHub
              </CmdItem>
              <CmdItem
                onSelect={() =>
                  run(() => window.open('/resume.pdf', '_blank'))
                }
              >
                Open Resume
              </CmdItem>
              <CmdItem
                onSelect={() =>
                  run(() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                  )
                }
              >
                Toggle theme
              </CmdItem>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}

function CmdItem({
  children,
  onSelect,
}: {
  children: React.ReactNode
  onSelect: () => void
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center rounded-lg px-2 py-2 text-sm text-zinc-700 transition-colors aria-selected:bg-zinc-100 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/60"
    >
      {children}
    </Command.Item>
  )
}
