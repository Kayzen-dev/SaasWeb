import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NameForge AI - AI-Powered Startup Namer",
  description:
    "Generate catchy, brandable names and taglines instantly using advanced AI. Perfect for startups, creators, eCommerce, and mobile apps. Try it free today!",
  keywords: "AI naming, startup names, brand names, business names, domain names, AI generator",
  authors: [{ name: "Kayzen" }],
  creator: "Kayzen",
  publisher: "NameForge AI",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
