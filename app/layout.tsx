import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Particles } from '@/components/ui/particles'
import { Analytics } from "@vercel/analytics/next"

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
}

export const metadata: Metadata = {
    title: 'Owen Hochwald — Software Engineer',
    description:
        'CS student at UBC building distributed systems, CLIs, and ML-powered products.',
    verification: { google: 'google212fd64ec34b7c1f.html' },
    openGraph: {
        title: 'Owen Hochwald',
        description: 'Software Engineer · UBC Computer Science',
        images: [{ url: '/og', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Owen Hochwald',
        images: ['/og'],
    },
}

const geist = Geist({
    variable: '--font-geist',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>-
            <body
                className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
            >

                <ThemeProvider
                    enableSystem={true}
                    attribute="class"
                    storageKey="theme"
                    defaultTheme="system"
                >

                    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
                        <div className="fixed inset-0 -z-10">
                            <Particles className="absolute h-full w-full" />
                        </div>

                        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">

                            <Header />

                            {children}
                            <Analytics />

                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
