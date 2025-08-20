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

        {/* Hero Images - Contained */}
        <div className="mb-16">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
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

          <div className="mt-8 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-research.png"
                alt="Grab Eat research findings"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-user interviews.png"
                alt="Grab Eat user interviews"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-desk research.png"
                alt="Grab Eat desk research"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-desk research 2.png"
                alt="Grab Eat additional desk research"
                className="w-full h-auto"
              />
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

          <div className="mt-8 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-personas.png"
                alt="Grab Eat user personas"
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-user journey.png"
                alt="Grab Eat user journey mapping"
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-challenges.png"
                alt="Grab Eat design challenges"
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-ideas.png"
                alt="Grab Eat design ideas and concepts"
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-lowfidelity1.png"
                alt="Grab Eat low fidelity wireframes 1"
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-lowfidelity2.png"
                alt="Grab Eat low fidelity wireframes 2"
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/grab-eat-mobile-interface.png"
                alt="Grab Eat mobile app interface design"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Key Takeaway</h2>
          <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            Understanding user needs through research and designing for both sides of a marketplace creates a more balanced and successful product experience.
          </p>
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
