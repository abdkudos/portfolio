import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ARYNewsCase() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-sans font-semibold mb-4">ARY News - Digital News Platform</h1>
          <p className="text-lg font-sans text-gray-400 mb-8">
            Reimagining Pakistan's most-watched news channel for the digital age
          </p>
        </div>

        {/* Impact Results */}
        <div className="mb-12">
          <ul className="space-y-3 text-sm font-sans">
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Created a visually modern, trustworthy news platform</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Improved content hierarchy for breaking news, live TV, and featured stories</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Optimized cross-platform usability for web and mobile</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Reinforced ARY's brand presence digitally</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Positioned ARY as a digitally credible, globally competitive news source</span>
            </li>
          </ul>
        </div>

        {/* Hero Image */}
        <div className="mb-12 -mx-6">
          <img
            src="/ary-news-thumbnail.png"
            alt="ARY News digital platform interface"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Overview</h2>
          <p className="text-sm font-sans text-gray-300 leading-relaxed mb-4">
            ARY is one of most watched news channels. Conceptually designed ARY's digital platforms to prioritize
            clarity, trust, and speed delivering a modern interface that reflects the urgency and authority of broadcast
            journalism.
          </p>
        </div>

        {/* Research & Insights */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Research & Insights</h2>
          <p className="text-sm font-sans text-gray-300 leading-relaxed mb-4">
            Analyzed BBC, Al Jazeera, and CNN's digital strategies, as well as user habits for Pakistani news
            consumption.
          </p>
          <div className="mb-4">
            <h3 className="text-sm font-sans font-semibold mb-2 text-gray-200">Key Findings:</h3>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <span>Pakistani users check news sites multiple times per day, especially for politics and sports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <span>Live video integration is underutilized locally despite high engagement potential</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <span>Existing designs overloaded users with ads and dense typography</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Design Approach */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Design Approach</h2>
          <ul className="space-y-3 text-sm font-sans text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="text-white">Breaking News First</strong> – Persistent ticker and "flash" section for
                urgent updates
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="text-white">Clean Article Layout</strong> – Generous white space, readable font
                sizing, and focused media embedding
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="text-white">Live TV Integration</strong> – One-tap streaming from homepage
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>
                <strong className="text-white">Brand Modernization</strong> – Polished ARY's logo treatments and
                tightened their color system for consistency
              </span>
            </li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mb-12">
          <h2 className="text-lg font-sans font-semibold mb-4">Impact</h2>
          <p className="text-sm font-sans text-gray-300 leading-relaxed">
            This design positions ARY as a digitally credible, globally competitive news source, giving users a reason
            to stay longer, engage more deeply, and trust the platform in a crowded media space.
          </p>
        </div>
      </div>
    </div>
  )
}
