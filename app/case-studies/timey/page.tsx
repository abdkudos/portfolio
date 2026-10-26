import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Timey - Abdul Kudoos",
  description: "Bootstrapping, designing, and launching a native alarm app for friends, family and micro-communities on iOS.",
}

export default function TimeyCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <header className="mb-16">
          <h1 className="text-3xl font-sans font-bold mb-4">Timey - Alarms That Bring People Together</h1>
          <p className="text-lg font-sans text-gray-600 dark:text-gray-300 mb-8">
            Bootstrapped, designed, and launched a native alarm app on iOS devices.
          </p>
          <a
            href="https://apps.apple.com/us/app/timey-loud-shareable-alarms/id6761500088"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 mb-8"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M17.05 12.54c.03 3.03 2.66 4.04 2.69 4.05-.02.07-.42 1.44-1.39 2.85-.84 1.22-1.71 2.44-3.08 2.47-1.34.03-1.77-.8-3.3-.8-1.53 0-2.01.77-3.28.83-1.32.05-2.32-1.32-3.16-2.54-1.72-2.49-3.03-7.04-1.27-10.11a4.9 4.9 0 0 1 4.14-2.51c1.29-.03 2.51.88 3.3.88.79 0 2.27-1.09 3.83-.93.65.03 2.49.26 3.67 1.99-.1.06-2.19 1.28-2.15 3.82ZM14.53 5.08c.7-.85 1.17-2.03 1.04-3.21-1.01.04-2.24.67-2.97 1.52-.65.75-1.22 1.94-1.07 3.09 1.13.09 2.29-.57 3-1.4Z" />
            </svg>
            Download on the App Store
            <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            {["Founder and Designer", "Product Strategy", "Launch and Growth", "iOS"].map((label) => (
              <span key={label} className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full">
                {label}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Built for inner circles</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            Timey is a mobile-native alarm app for friends, family and micro-communities. It snaps right onto your lock screen. There are no friend lists, likes, or ads, keeping the focus entirely on your inner circles.
          </p>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Maintain daily alarm streaks with your friend group, or stake real money on snoozing when nobody can afford to miss a plan. Create an alarm, send a link, and join. You can also use Timey as a regular personal alarm.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">From idea to launch</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            I bootstrapped Timey, designed the product, and launched it on iOS devices. As founder and designer, my work extended beyond the interface: I took responsibility for getting the app off the ground and finding its first audience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">A shared plan, one link away</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            The core experience centers on a simple flow: create an alarm, share its link, and join together. People can coordinate around a specific plan without building another social profile or maintaining a friend list. The lock screen keeps the alarm close at hand.
          </p>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Daily streaks give groups a reason to keep showing up. Money on snooze adds a financial stake for plans where being late matters. Both build on the same idea: an alarm can be a commitment you share with other people.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">Getting Timey off the ground</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            Launching the app was only part of the work. I hired user-generated content (UGC) creators and managed scouts to support creator outreach. Alongside designing the product, I managed the people and work needed to bring Timey to an audience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-sans font-semibold mb-6">From launch to first revenue</h2>
          <p className="text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
            Timey went from a bootstrapped idea to a launched iOS app and began making money. Taking it through design, launch, and early growth meant owning the whole journey: creating the product, organizing its promotion, and turning it into a revenue-generating business.
          </p>
        </section>

        <img
          src="/timey-case-study-banner.png"
          alt="Timey wordmark surrounded by playful objects in a blue and purple cosmic scene"
          width={3840}
          height={2160}
          className="w-full h-auto rounded-lg mb-12"
        />

        <a
          href="https://www.gettimey.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-sans hover:underline underline-offset-4"
        >
          Explore Timey
          <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
