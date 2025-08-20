import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Abdul Kudoos - Lead Product Designer",
  description:
    "IBM Certified Product Designer with 7+ years of experience leading design for SaaS, gaming and consumer tech products. Trusted by startups to drive growth, retention and revenue through strategic design.",
  generator: "v0.app",
  metadataBase: new URL("https://abdulkudoos.com"),
  icons: {
    icon: '/avocado-favicon.png',
  },
  openGraph: {
    title: "Abdul Kudoos - Lead Product Designer",
    description:
      "IBM Certified Product Designer with 7+ years of experience leading design for SaaS, gaming and consumer tech products.",
    url: "https://abdulkudoos.com",
    siteName: "Abdul Kudoos Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Kudoos - Lead Product Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Kudoos - Lead Product Designer",
    description:
      "IBM Certified Product Designer with 7+ years of experience leading design for SaaS, gaming and consumer tech products.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <body>
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <ThemeToggle />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
