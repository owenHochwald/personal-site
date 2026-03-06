import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses — Owen Hochwald',
  description: 'Tools, languages, and hardware I use daily.',
}

type Item = {
  name: string
  description?: string
}

type Section = {
  title: string
  items: Item[]
}

const USES: Section[] = [
  {
    title: 'Editor',
    items: [
      { name: 'VS Code', description: 'with Vim keybindings' },
      { name: 'Geist Mono', description: 'font' },
      { name: 'Tokyo Night', description: 'theme' },
    ],
  },
  {
    title: 'Terminal',
    items: [
      { name: 'Ghostty' },
      { name: 'zsh + starship', description: 'shell and prompt' },
    ],
  },
  {
    title: 'Hardware',
    items: [{ name: 'MacBook Pro M3 Pro' }],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Go', description: 'systems, CLIs, backend' },
      { name: 'TypeScript', description: 'web, fullstack' },
      { name: 'Python', description: 'ML, scripting' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Homebrew, Docker, Git' },
      { name: 'Vercel, Railway', description: 'deployment' },
      { name: 'Volt', description: 'HTTP load testing CLI — my own project' },
    ],
  },
  {
    title: 'Currently exploring',
    items: [{ name: 'Rust' }, { name: 'WebAssembly' }],
  },
]

export default function UsesPage() {
  return (
    <main className="space-y-12 pb-24">
      <section>
        <p className="text-zinc-600 dark:text-zinc-400">
          A curated list of the tools, languages, and hardware I use day to day.
        </p>
      </section>

      {USES.map((section) => (
        <section key={section.title}>
          <h3 className="mb-5 text-lg font-medium">{section.title}</h3>
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item.name} className="flex items-baseline gap-2">
                <span className="font-normal text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </span>
                {item.description && (
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    — {item.description}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
