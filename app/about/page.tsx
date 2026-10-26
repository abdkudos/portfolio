import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Abdul Kudoos",
  description: "Product designer and founder from Lahore, Pakistan. Designed for over 5 million users and generated $1M in ARR from $0 without fundraising.",
}

const highlight = "rounded-md bg-gray-100 text-black dark:bg-gray-800 dark:text-white px-1.5 py-0.5 box-decoration-clone"

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans font-normal">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <nav aria-label="Main navigation" className="mx-auto max-w-2xl pt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft aria-hidden="true" className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </nav>

        <main>
          <header className="mx-auto max-w-2xl pt-8 pb-8">
            <h1 className="font-sans text-left text-[38px] min-[810px]:text-[46px] font-semibold leading-[0.85] tracking-[-0.05em]">
              Abdul Kudoos is a product designer and founder from{" "}
              <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="text-[38px] min-[810px]:text-[52px] font-normal min-[810px]:font-[450] not-italic tracking-[-0.05em] min-[810px]:tracking-[-0.04em]">
                Lahore,<span className="min-[810px]:tracking-[-0.14em]"> </span>Pakistan 🇵🇰.
              </span>
            </h1>
          </header>

          <section aria-label="About Abdul" className="mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I’m a Product Designer, born and raised in Lahore, Pakistan. <mark className={highlight}>Certified from IBM</mark> with a track record of leading design that directly drives growth, revenue and retention.
            </p>
            <p>
              I owe much of my career to curiosity, human psychology, and simply to the love of <mark className={highlight}>building something from nothing</mark>. I started designing and coding websites at 14, drawn by the idea that pixels could change how people think, feel, and act. Over time, I transitioned from web design to full scale product design, blending aesthetics with business impact.
            </p>
            <p>
              My first opportunities came from collaborating with small startups building products from the ground up across web, TV, desktop, and mobile. Along the way, I’ve designed for <mark className={highlight}>over 5 million users</mark>, generated <mark className={highlight}>$1M in ARR from $0 without fundraising</mark>, and worked on global initiatives with the United Nations.
            </p>
            <p>
              At Hone, as the only designer, I <mark className={highlight}>grew the company’s revenue 16x</mark> through product-led strategy and design. At Mantle, I led the strategy, launch, and design of a personalization platform <mark className={highlight}>in under a year</mark>. At Timey, I bootstrapped, designed, and launched the app on the <a href="https://apps.apple.com/us/app/timey-loud-shareable-alarms/id6761500088" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline underline-offset-4 hover:opacity-70 transition-opacity">App Store</a> and hired UGC creators. Over my career, I’ve helped teams embrace design as a growth engine not just a visual layer.
            </p>
            <p>
              Today, I build and grow my own ventures as a founder while working remotely with teams worldwide. I collaborate with founders, product managers, and developers to turn ideas into intuitive products that solve real problems and drive measurable growth. I move fast, design smarter, think in systems, and leave things better than I found them.
            </p>
          </section>
        </main>

        <footer className="pb-12 pt-16 sm:pt-24 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              { label: "Contact", href: "mailto:qudoos253@gmail.com" },
              { label: "X", href: "https://x.com/abdulkudooss" },
              { label: "GitHub", href: "https://github.com/abdkudos" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/abdkudos/" },
            ].map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label} className="inline-flex items-center gap-1 hover:underline underline-offset-4">
                {link.label === "X" ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.486 3.24H4.298L17.61 20.643Z" />
                  </svg>
                ) : link.label}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-gray-500 dark:text-gray-400">Abdul Kudoos © 2026</p>
        </footer>
      </div>
    </div>
  )
}
