import Header from '@/components/layout/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import PaletteContextProvider from '@/context/PaletteContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Margarida Colors - Generate Stunning Color Palettes from Images',
  description:
    'Margarida Colors is your go-to online tool for effortlessly creating captivating color palettes from your favorite images. Transform your inspiration into beautiful, harmonious color schemes with just a few clicks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header className="absolute flex w-full items-center justify-center" />
        <PaletteContextProvider>{children}</PaletteContextProvider>
        <Footer />
      </body>
    </html>
  )
}
