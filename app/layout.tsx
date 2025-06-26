import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kutie's Portfolio",
  description: 'Kutie is a social media influencer and content creator.',
  // generator: 'Kutie',
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
