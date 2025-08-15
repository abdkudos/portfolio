"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

export default function GrabEatCaseStudy() {
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
          <h1 className="text-3xl font-sans font-bold mb-4">Grab Eat - Grocery App for Everyone</h1>
          <p className="text-lg font-sans text-gray-600 dark:text-gray-300 mb-8">
            Built a cross platform grocery delivery app connecting millions of local vendors to buyers.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              Product Strategy
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              Mobile Design
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              UX Research
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
              iOS & Android
            </span>
          </div>
        </div>

        {/* Impact Results */}
        <div className="mb-16">
          <ul className="space-y-3 text-base font-sans text-gray-600 dark:text-gray-300">
            <li>• Shipped functional MVP in 8 weeks</li>
            <li>• Developed a scalable vendor onboarding system adopted by 100+ sellers</li>
            <li>• Bridged the digital gap between customers and traditional markets</li>
            <li>• Enabled bulk ordering, freshness guarantees, and smart delivery routing</li>
          </ul>
        </div>

        {/* Hero Images - Full Width */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mx-6">
            <img
              src="/grab-eat-app-screens.png"
              alt="Grab Eat mobile app interface showcase"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Overview</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            Grab Eat set out to unify the fragmented grocery shopping experience—especially for communities relying on
            street vendors and traditional markets. My goal was to design an app that made ordering groceries simple for
            customers while giving low-digital-literacy vendors the tools to sell online.
          </p>
        </div>

        {/* The Challenge */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">The Challenge</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h3 className="text-base font-sans font-semibold mb-2">
                  Most shoppers still preferred trusted local vendors over supermarkets
                </h3>
                <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                  Traditional markets offered better prices and personal relationships.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h3 className="text-base font-sans font-semibold mb-2">Street vendors had no digital presence</h3>
                <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                  No tools to manage orders or reach customers online.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h3 className="text-base font-sans font-semibold mb-2">
                  Consumers demanded convenience and delivery flexibility
                </h3>
                <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                  Fresh produce, time savings, and flexible delivery options were essential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Insights */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Research & Insights</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I conducted interviews with urban buyers, street vendors, and quality-focused shoppers:
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-300">
                  Users shopped 3–4 times/month, wanted to avoid crowds, and valued time savings
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-300">
                  Vendors were willing to go digital but required a minimal, order-focused interface
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-300">
                  Buyers cared about discounts, freshness, and eco-friendly delivery options
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Solutions */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Design Solutions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-sans font-semibold mb-3">For Customers</h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Created a personalized shopping experience with simplified checkout and delivery flexibility.
              </p>
              <ul className="space-y-2 text-sm font-sans text-gray-500 dark:text-gray-400">
                <li>• Personalized recommendations and simplified checkout</li>
                <li>• Delivery options from eco-friendly to express</li>
                <li>• Freshness guarantees and quality ratings to build trust</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-sans font-semibold mb-3">For Vendors</h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Designed a lightweight vendor interface focused on essential order management.
              </p>
              <ul className="space-y-2 text-sm font-sans text-gray-500 dark:text-gray-400">
                <li>• Lightweight vendor app with product toggles and order alerts</li>
                <li>• No complex dashboards only essential actions like fulfill/cancel</li>
                <li>• Built-in micro-education on handling orders and managing reviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
      </div>
    </div>
  )
}
