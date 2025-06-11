import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { MotionProvider } from "@/components/motion-provider"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata = {
  title: "Stanik Economy | Účtovnícke služby",
  description: "Profesionálne účtovnícke služby a ekonomické poradenstvo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <MotionProvider>
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
        </MotionProvider>
      </body>
    </html>
  )
}
