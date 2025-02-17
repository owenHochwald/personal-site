import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Particles } from '@/components/ui/particles'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
}

export const metadata: Metadata = {
    title: 'Owen Hochwald - Personal website',
    description:
        'A personal website.',
    verification: { google: "google212fd64ec34b7c1f.html" },

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

                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
