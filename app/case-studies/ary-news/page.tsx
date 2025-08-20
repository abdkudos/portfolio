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

        {/* Hero Image - Contained */}
        <div className="mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
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
        <div className="mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
            <img
              src="/ary-broadcast-interview.png"
              alt="ARY News broadcast interface showing Powerplay with Arshad Sharif"
              className="w-full"
            />
          </div>
        </div>

        {/* Broadcast Interview Interface Image */}
        <div className="mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
            <img
              src="/ary-broadcast-interview-interface.png"
              alt="ARY News broadcast interview interface design"
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
        <div className="mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
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
        <div className="mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
            <img
              src="/ary-new-look-package.png"
              alt="ARY News rebrand promotional package - The New Look of ARY"
              className="w-full"
            />
          </div>
        </div>

        {/* Dividing Line */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-16"></div>

        {/* Footer */}
        <div className="space-y-4 text-sm font-sans">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="text-gray-600 dark:text-gray-400">© 2025</div>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="mailto:qudoos253@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact
              </a>

              <a href="https://behance.net/abdkudos" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0.5 94.187 511 323.626">
                  <path d="M206.729 238.87s48.358-3.59 48.358-60.297c0-56.711-39.563-84.387-89.678-84.387H.5v316.909h164.909s100.671 3.18 100.671-93.537c0 .001 4.389-78.688-59.351-78.688zm-53.19-88.357h11.87s22.416 0 22.416 32.973c0 32.969-13.183 37.749-28.136 37.749H73.161v-70.722h80.378zm7.21 204.257H73.161v-84.69h92.248s33.41-.438 33.41 43.522c0 37.068-24.954 40.888-38.07 41.168zm239.593-179.953c-121.873 0-121.765 121.766-121.765 121.766s-8.362 121.141 121.765 121.141c0 0 108.438 6.195 108.438-84.271h-55.768s1.86 34.068-50.81 34.068c0 0-55.777 3.738-55.777-55.135H510.64c0-.001 17.968-137.569-110.298-137.569zm-54.53 95.263s6.81-48.846 55.769-48.846c48.949 0 48.336 48.846 48.336 48.846H345.812zm117.096-118.199H332.159v-39.025h130.749v39.025z"/>
                </svg>
                Behance
              </a>
              <a
                href="https://github.com/abdkudos"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
              >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
              <a
                href="https://www.linkedin.com/in/abdkudos/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
              >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
