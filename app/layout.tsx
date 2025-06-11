import type React from "react"
import type { Metadata } from "next"
import { averta } from "./font"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nucleus Dashboard",
  description: "Dashboard for Nucleus platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={averta.className}>{children}</body>
    </html>
  )
}
