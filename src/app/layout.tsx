import { NextUIProvider } from '@nextui-org/react'
import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './globals.css'

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suelen Muzzy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
