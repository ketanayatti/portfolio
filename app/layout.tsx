import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import Preloader from '@/components/layout/Preloader'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio — DevOps Engineer',
  description: 'DevOps Engineer focused on deployment automation, CI/CD pipelines, and infrastructure reliability — with full-stack background that makes the application side visible too.',
  keywords: ['DevOps', 'CI/CD', 'Infrastructure', 'Deployment', 'Jenkins', 'Docker', 'Portfolio'],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover',
  openGraph: {
    title: 'Portfolio — DevOps Engineer',
    description: 'Systems built to survive production.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <div className="noise-overlay" />
            <Preloader>
              {children}
            </Preloader>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
