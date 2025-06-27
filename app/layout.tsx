import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ai Meal Planner',
  description: 'Created for ai generted meal plans with ingredients and cooking instructions',
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
