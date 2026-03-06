import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reading — Owen Hochwald',
  description: 'Books and papers I have read or am currently reading.',
}

type ReadingItem = {
  title: string
  author: string
  status: 'read' | 'reading'
}

type ReadingSection = {
  heading: string
  items: ReadingItem[]
}

const READING: ReadingSection[] = [
  {
    heading: 'Distributed Systems / Backend',
    items: [
      {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        status: 'read',
      },
      {
        title: 'Computer Networking: A Top Down Approach',
        author: 'Kurose & Ross',
        status: 'read',
      },
      {
        title: "Computer Systems: A Programmer's Perspective",
        author: "Bryant & O'Hallaron",
        status: 'read',
      },
    ],
  },
  {
    heading: 'Algorithms / Fundamentals',
    items: [
      {
        title: 'Introduction to Algorithms (CLRS)',
        author: 'Cormen et al.',
        status: 'read',
      },
      {
        title: 'The Algorithm Design Manual',
        author: 'Skiena',
        status: 'read',
      },
    ],
  },
  {
    heading: 'Software Craft',
    items: [
      {
        title: 'The Pragmatic Programmer',
        author: 'Hunt & Thomas',
        status: 'read',
      },
      {
        title: 'A Philosophy of Software Design',
        author: 'Ousterhout',
        status: 'read',
      },
      {
        title: 'Operating Systems: Three Easy Pieces',
        author: 'Arpaci-Dusseau',
        status: 'reading',
      },
    ],
  },
]

const PAPERS: ReadingItem[] = [
  {
    title: 'Attention Is All You Need',
    author: 'Vaswani et al. (2017)',
    status: 'read',
  },
  {
    title: 'MapReduce: Simplified Data Processing on Large Clusters',
    author: 'Dean & Ghemawat (2004)',
    status: 'read',
  },
  {
    title: "Dynamo: Amazon's Highly Available Key-value Store",
    author: 'DeCandia et al. (2007)',
    status: 'read',
  },
]

function StatusBadge({ status }: { status: 'read' | 'reading' }) {
  if (status === 'reading') {
    return (
      <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium text-amber-600 ring-1 ring-amber-200 dark:text-amber-400 dark:ring-amber-800">
        reading
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium text-zinc-500 ring-1 ring-zinc-200 dark:text-zinc-400 dark:ring-zinc-700">
      read
    </span>
  )
}

function BookList({ items }: { items: ReadingItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.title} className="flex items-start justify-between gap-4">
          <div>
            <span className="font-normal text-zinc-900 dark:text-zinc-100">
              {item.title}
            </span>
            <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400">
              — {item.author}
            </span>
          </div>
          <div className="shrink-0 pt-0.5">
            <StatusBadge status={item.status} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function ReadingPage() {
  return (
    <main className="space-y-12 pb-24">
      <section>
        <p className="text-zinc-600 dark:text-zinc-400">
          Books and papers I have read or am working through.
        </p>
      </section>

      <section className="space-y-10">
        <h3 className="text-lg font-medium">Books</h3>
        {READING.map((section) => (
          <div key={section.heading}>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400 uppercase">
              {section.heading}
            </h4>
            <BookList items={section.items} />
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">Papers</h3>
        <BookList items={PAPERS} />
      </section>
    </main>
  )
}
