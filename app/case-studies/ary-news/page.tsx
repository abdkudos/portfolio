"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ARYNewsCase() {
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
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-sans font-semibold mb-4">ARY News - Digital News Platform</h1>
          <p className="text-lg font-sans text-gray-600 dark:text-gray-400 mb-8">
            Reimagining Pakistan's most-watched news channel for the digital age
          </p>
        </div>

        {/* Impact Results */}
        <div className="mb-12">
          <ul className="space-y-3 text-sm font-sans">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>Delivered a modern, trustworthy on air visual identity for the channel </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>Increased clarity of breaking news updates through a refined ticker system</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>Unified broadcast visuals with ARY's digital brand presence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>Reinforced ARY's brand presence digitally</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>Unified broadcast visuals with ARY's digital brand presence</span>
            </li>
          </ul>
        </div>

        {/* Hero Image - Full Width */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mx-6">
            <img src="/ary-news-thumbnail.png" alt="ARY News digital platform interface" className="w-full" />
          </div>
        </div>

        {/* Research & Insights */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Research & Insights</h2>
          <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Analyzed BBC, Al Jazeera, and CNN's digital strategies, as well as user habits for Pakistani news
            consumption.
          </p>
          <div className="mb-4">
            <h3 className="text-sm font-sans font-semibold mb-2 text-gray-700 dark:text-gray-200">Key Findings:</h3>
            <ul className="space-y-2 text-sm font-sans text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span>Pakistani users check news sites multiple times per day, especially for politics and sports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span>
                  Found that inconsistent lower thirds and cluttered tickers reduced readability and diluted brand
                  authority.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span>Existing designs overloaded users with ads and dense typography</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Broadcast Interface Showcase Image */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mx-6">
            <img
              src="/ary-broadcast-interview.png"
              alt="ARY News broadcast interface showing Powerplay with Arshad Sharif"
              className="w-full"
            />
          </div>
        </div>

        {/* Design Approach */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Design Approach</h2>
          <ul className="space-y-3 text-sm font-sans text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>
                <strong className="text-black dark:text-white">Breaking News First</strong> – Persistent ticker and
                "flash" section for urgent updates
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>
                <strong className="text-black dark:text-white">Live Event Templates</strong> – Designed scalable motion
                templates for political coverage, sports, and special reports
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>
                <strong className="text-black dark:text-white">Brand Consistency</strong> – Unified on-air visuals with
                ARY's digital presence for a cohesive multi platform identity
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span>
                <strong className="text-black dark:text-white">Typography for Speed</strong> – Selected typefaces
                optimized for TV readability under fast motion and varied lighting conditions.
              </span>
            </li>
          </ul>
        </div>

        {/* Press Badges Image */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mx-6">
            <img
              src="/ary-press-badges.png"
              alt="ARY News press badges and staff identification materials"
              className="w-full"
            />
          </div>
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Overview</h2>
          <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {
              "ARY News is one of Pakistan's most-watched news channels. I redesigned their on-air visual system from breaking news tickers to headline animations bringing clarity, speed, and modern brand consistency to millions of daily viewers."
            }
          </p>
        </div>

        {/* Impact */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Impact</h2>
          <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            The new broadcast identity elevated ARY's on air presence to match global standards, helping retain viewer
            attention and reinforcing the channel's authority in a competitive news landscape.
          </p>
        </div>

        {/* Promotional Package Image */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mx-6">
            <img
              src="/ary-new-look-package.png"
              alt="ARY News rebrand promotional package - The New Look of ARY"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
