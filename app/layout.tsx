import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Footer from '@/components/footer'
import Header from '@/components/header'
import './globals.css'
import { Providers } from './providers'

const dmSans = localFont({
  src: [
    {
      path: './font/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/DMSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/DMSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Neuralix Datacenter',
  description: 'Transforming Businesses with Intelligent AI Solutions',
  openGraph: {
    title: 'Neuralix Datacenter',
    description: 'Transforming Businesses with Intelligent AI Solutions',
    images: [
      {
        //url: 'nix-indian-entity-website/public/favicon.ico',
        url: 'https://www.neuralixai.in/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Neuralix Datacenter Thumbnail',
      },
    ],
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
    <html lang='en'>
      <body className={dmSans.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
