"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function About() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-sans text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-2xl font-sans font-semibold mb-8">About Me</h1>
          <div className="text-sm font-sans text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              {
                "I’m a Product Designer, born and raised in Lahore, Pakistan. Certified from IBM with a track record of leading design that directly drives growth, revenue and retention."
              }
            </p>
            <p>
              {
                "I owe much of my career to curiosity, human psychology, and simply for the love of building something from nothing. I started designing and coding websites at 14, drawn by the idea that pixels could change how people think, feel, and act. Over time, I transitioned from web design to full scale product design, blending aesthetics with business impact."
              }
            </p>
            <p>
              {
                "My first opportunities came from collaborating with small startups building products from the ground up across web, TV, desktop, and mobile. Along the way, I’ve designed for millions of users and even worked on global initiatives with the United Nations."
              }
            </p>
            <p>
              {
                "At Hone, as the only designer, I grew the company’s revenue 16x through product-led strategy and design. At Mantle, I led the strategy, launch, and design of a personalization platform in under a year. At Innoloft, I built a scalable design system to accelerate product delivery. Over my career, I’ve helped teams embrace design as a growth engine not just a visual layer."
              }
            </p>
            <p>
              {
                "Today I work remotely with teams worldwide, collaborating with founders, product managers, and developers to deliver intuitive experiences that solve real problems and deliver measurable impact."
              }
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center"></div>
      </div>
    </div>
  )
}
