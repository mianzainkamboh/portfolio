import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from './components/CustomCursor'

export const metadata: Metadata = {
  title: 'ZAIN | AI Automation Engineer Portfolio',
  description: 'Elite AI Automation Engineer specialized in creating intelligent ecosystems that scale.',
  icons: {
    icon: '/images/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
      </head>
      <body className="font-body-md selection:bg-electric-cyan selection:text-deep-obsidian">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
