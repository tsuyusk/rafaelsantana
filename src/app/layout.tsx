/* eslint-disable @next/next/no-page-custom-font */
import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafael Sant\'Ana',
  description: 'Portfolio do desenvolvedor fullstack de software Rafael Sant\'Ana, consta com projetos, história da carreira, cargos, suas redes sociais e muito mais.',
  themeColor: '#020617',
  icons: '/assets/rafael-santana-foto1.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
