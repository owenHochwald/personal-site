import type { Metadata } from 'next'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Reading — Owen Hochwald',
    description: 'Books I love or am currently reading.',
}

type ReadingItem = {
    title: string
    author: string
    status: 'read' | 'reading'
}

type Rating = 1 | 2 | 3 | 4 | 5

type PersonalReadingItem = {
    title: string
    author: string
    rating: Rating
}

type ReadingSection = {
    heading: string
    items: ReadingItem[]
}

const PERSONAL_READING: PersonalReadingItem[] = [
    {
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        rating: 5,
    },
    {
        title: 'East of Eden',
        author: 'John Steinbeck',
        rating: 5,
    },
    {
        title: 'Name of the Wind',
        author: 'Patrick Rothfuss',
        rating: 5,
    },
    {
        title: 'Game of Thrones',
        author: 'George R.R. Martin',
        rating: 4,
    },
    {
        title: 'The Stranger',
        author: 'Albert Camus',
        rating: 4,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkein',
        rating: 5,
    }

]

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
                title: 'Operating Systems: Three Easy Pieces',
                author: 'Arpaci-Dusseau',
                status: 'read',
            },
            {
                title: 'Effective Java',
                author: 'Joshua Bloch',
                status: 'read',
            },
        ],
    },
    {
        heading: 'Cognitive Science / Psychology',
        items: [
            {
                title: 'Thinking, Fast and Slow',
                author: 'Daniel Kahneman',
                status: 'reading',
            },
            {
                title: 'Deep Work',
                author: 'Cal Newport',
                status: 'read',
            },
            {
                title: 'Atomic Habits',
                author: 'James Clear',
                status: 'read',
            }
        ],
    }
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

function FavoritesBookList({ items }: { items: PersonalReadingItem[] }) {
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
                    <div className="flex shrink-0 items-center gap-0.5 pt-0.5 text-amber-500 dark:text-amber-400">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={index}
                                className="h-3.5 w-3.5"
                                fill={index < item.rating ? 'currentColor' : 'none'}
                                strokeWidth={1.8}
                            />
                        ))}
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

            <section className="space-y-4">
                <h3 className="text-lg font-medium">Favorites</h3>
                <FavoritesBookList items={PERSONAL_READING} />
            </section>
        </main>
    )
}
