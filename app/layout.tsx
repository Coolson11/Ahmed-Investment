import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmed Investment',
  description: 'Specializing in photography, videography, and graphic design',
  icons: {
    icon: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK89M2OvyskOWpFrP30bLUytDQvzZiKTjxHgMwA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}