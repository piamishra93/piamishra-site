import type React from "next"
import type { Metadata } from "next"
import { DM_Sans, EB_Garamond } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pia Mishra | Personal Website",
  description: "Personal website and blog of Pia Mishra",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${garamond.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
