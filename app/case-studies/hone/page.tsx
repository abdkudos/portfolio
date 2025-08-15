"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

export default function HoneCaseStudy() {
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
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl font-sans font-bold mb-4">
            Hone - From PC Optimizer to 1,500,000+ Gamer's Companion
          </h1>
          <p className="text-lg font-sans text-gray-600 dark:text-gray-300 mb-8">
            16× revenue growth in 18 months with strategic redesign
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              Product Strategy
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              Interaction Design
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              UX Design
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              Desktop
            </span>
          </div>
        </div>

        <div className="mb-16">
          <ul className="space-y-3 text-base font-sans text-gray-600 dark:text-gray-300">
            <li>• 1150% revenue growth within 16 months</li>
            <li>• Increased monthly active users from 12,000 to 200,000+</li>
            <li>• Improved onboarding completion and optimization application rates</li>
            <li>• Boosted optimization runs by 36% through clearer workflows</li>
            <li>• Extended average session duration from 25 seconds to 3 minutes</li>
            <li>• Reduced dev/design handoff time with a scalable design system</li>
          </ul>
        </div>

        {/* Hero Images - Full Width */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16"></div>

        {/* Context */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Context</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            When I joined Hone, it was a raw prototype — functional but untrustworthy, confusing, and unappealing to
            gamers. The vision: transform it into a trusted, everyday companion for PC gamers that feels as intuitive as
            a controller and as powerful as a top-tier GPU.
          </p>
        </div>

        {/* Challenge Image - Full Width */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden aspect-video mx-6">
            <img
              src="/hone-interface-updated.png"
              alt="Hone before transformation showing complex interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Challenges</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h3 className="text-base font-sans font-semibold mb-2">
                  Users didn't understand what Hone did or why they should trust it
                </h3>
                <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                  The onboarding was confusing and failed to communicate value clearly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h3 className="text-base font-sans font-semibold mb-2">Workflows for core actions were clunky</h3>
                <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                  Benchmarks and optimizations required multiple complex steps.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h3 className="text-base font-sans font-semibold mb-2">
                  Industry stigma around "PC boosters" hurt credibility
                </h3>
                <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                  Performance tools had a reputation for overpromising and underdelivering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Process */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">What I Did</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-sans font-semibold mb-3">
                Rebuilt onboarding to clearly communicate value in under 60 seconds
              </h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Created a streamlined first-time experience that immediately showed users what Hone could do for their
                specific setup.
              </p>
            </div>

            <div>
              <h3 className="text-base font-sans font-semibold mb-3">
                Simplified optimization workflows from multiple steps to one click
              </h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
                Reduced friction by automating complex processes while maintaining user control and transparency.
              </p>
            </div>

            <div>
              <h3 className="text-base font-sans font-semibold mb-3">
                Added social proof, expert endorsements, and visual personality
              </h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
                Integrated testimonials from pro gamers and content creators to build trust and credibility in the
                gaming community.
              </p>
            </div>

            <div>
              <h3 className="text-base font-sans font-semibold mb-3">
                Designed a scalable system to support rapid feature launches
              </h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
                Built a flexible design system that could accommodate new features without compromising the core
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
      </div>
    </div>
  )
}
