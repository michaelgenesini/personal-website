import type { Metadata } from "next"
import { Geist, Geist_Mono, Lora, STIX_Two_Text } from "next/font/google"
import "./globals.css"

const stix = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Michael Genesini | Engineering Manager & Tinkerer",
  description:
    "Personal writing for clear thinking—mostly reflections and ideas, with occasional notes on engineering management.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${geistSans.variable} ${geistMono.variable} ${stix.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
