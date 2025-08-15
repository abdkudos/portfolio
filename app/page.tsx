import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-2xl mb-2">🥑</div>
              <div className="text-lg font-sans font-semibold mb-1">Abdul Kudoos</div>
              <div className="text-sm font-sans text-gray-600 max-w-md">
                Product Designer. Design Growth & Strategy.
                <br />
                Based worldwide. Available Globally.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-sans hover:bg-gray-100 rounded-lg transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="grid gap-4 text-sm font-sans">
            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Soared</div>
                </div>
                <div className="text-gray-600">Design Strategy Consultant</div>
              </div>
              <div className="text-gray-600">2025—Present</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Hone</div>
                </div>
                <div className="text-gray-600">Lead Product Designer</div>
              </div>
              <div className="text-gray-600">2023—2025</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Mantle</div>
                </div>
                <div className="text-gray-600">Lead Product Designer</div>
              </div>
              <div className="text-gray-600">2023—2024</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">United Nations</div>
                </div>
                <div className="text-gray-600">Brand Designer</div>
              </div>
              <div className="text-gray-600">2022</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Innoloft</div>
                </div>
                <div className="text-gray-600">Lead Product Designer</div>
              </div>
              <div className="text-gray-600">2022—2022</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Pixcap</div>
                </div>
                <div className="text-gray-600">Lead Product Designer</div>
              </div>
              <div className="text-gray-600">2021—2022</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Teen Controls</div>
                </div>
                <div className="text-gray-600">Founding Product Designer</div>
              </div>
              <div className="text-gray-600">2019—2020</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black">Freelance</div>
                </div>
                <div className="text-gray-600">Designer</div>
              </div>
              <div className="text-gray-600">2017—2019</div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-sm font-sans mb-6 font-semibold">Recognitions</h2>
          <div className="grid gap-4 text-sm font-sans">
            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="text-black">IBM Certified Design Enterprise Co-Creator </div>
                <div className="text-gray-600">
                  2023-Recognized for expertise in designing enterprise scale systems
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 select-none cursor-default">
              <div>
                <div className="text-black">IBM Certified Design Enterprise Practitioner</div>
                <div className="text-gray-600">
                  2023-Recognized for design thinking in complex business challenges{" "}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Featured Work */}
        <div className="mb-16">
          <h2 className="text-sm font-sans mb-6 font-semibold">Featured</h2>

          {/* Hone Project */}
          <div className="mb-12">
            <div className="mb-4">
              <Link href="/case-studies/hone" className="group">
                <h3 className="text-lg font-sans font-semibold mb-2 flex items-center gap-2">
                  Hone - From PC Optimizer to Gamer's Companion
                  <ArrowUpRight className="w-5 h-5 text-black transform rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                </h3>
              </Link>
              <p className="text-sm font-sans text-gray-600 mb-6">
                Grew revenue 16× in 18 months through strategic redesigns{" "}
              </p>
            </div>
            <Link href="/case-studies/hone" className="block group">
              <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg">
                <div className="col-span-3 bg-gray-100 rounded-lg overflow-hidden h-full">
                  <img
                    src="/hone-pattern.png"
                    alt="Hone project design pattern"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-7 bg-gray-100 rounded-lg overflow-hidden h-full relative">
                  <img
                    src="/hone-interface.jpeg"
                    alt="Hone project interface design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Project 2 */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-lg font-sans font-semibold mb-2">Discord Vision OS</h3>
              <p className="text-sm font-sans text-gray-600 mb-6">Bringing Discord's intuitive experience to AR</p>
            </div>
            <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64">
              <div className="col-span-3 bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/desktop-interface-2.png"
                  alt="Project 2 design pattern"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7 bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/discord-interface-2.png"
                  alt="Project 2 interface design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 3 - Grab Eat */}
          <div className="mb-12">
            <div className="mb-4">
              <Link href="/case-studies/grab-eat" className="group">
                <h3 className="text-lg font-sans font-semibold mb-2 flex items-center gap-2">
                  Grab Eat - Grocery App for Everyone
                  <ArrowUpRight className="w-5 h-5 text-black transform rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                </h3>
              </Link>
              <p className="text-sm font-sans text-gray-600 mb-6">
                Built a cross platform grocery delivery app connecting millions of local vendors to buyers
              </p>
            </div>
            <Link href="/case-studies/grab-eat" className="block group">
              <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg">
                <div className="col-span-3 bg-gray-100 rounded-lg overflow-hidden h-full">
                  <img
                    src="/grab-eat-branding.png"
                    alt="Project 3 design pattern"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-7 bg-gray-100 rounded-lg overflow-hidden h-full relative">
                  <img
                    src="/grab-eat-app-screens.png"
                    alt="GRAB EAT mobile app interface screens"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Project 4 */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-lg font-sans font-semibold mb-2">Erthium - World's Biggest Crypto Exchange</h3>
              <p className="text-sm font-sans text-gray-600 mb-6">
                Redesigned the trading experience, making fiat to crypto transactions seamless for millions of users
              </p>
            </div>
            <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64">
              <div className="col-span-3 bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/erthium-trading-platform.png"
                  alt="Erthium trading platform branding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7 bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/erthium-trading-interface.png"
                  alt="Erthium trading platform interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-lg font-sans font-semibold mb-2">PTCL TV - Watching TV Just Got Better.</h3>
              <p className="text-sm font-sans text-gray-600 mb-6">
                Reimagined the TV streaming app, boosting usability, engagement, and brand appeal
              </p>
            </div>
            <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64">
              <div className="col-span-3 bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/particle-animation.gif"
                  alt="Project 5 particle animation"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="col-span-7 bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/ptcl-streaming-interface.png"
                  alt="PTCL streaming service interface design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ARY News Project */}
          <div className="mb-12">
            <div className="mb-4">
              <Link href="/case-studies/ary-news" className="group">
                <h3 className="text-lg font-sans font-semibold mb-2 flex items-center gap-2">
                  ARY News - Digital News Platform
                  <ArrowUpRight className="w-5 h-5 text-black transform rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                </h3>
              </Link>
              <p className="text-sm font-sans text-gray-600 mb-6">
                Reimagining Pakistan's most-watched news channel for the digital age
              </p>
            </div>
            <Link href="/case-studies/ary-news" className="block group">
              <div className="h-48 sm:h-56 md:h-64 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg relative">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                  <img
                    src="/ary-news-thumbnail.png"
                    alt="ARY News platform interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Call of Duty Warzone Mobile Project */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-lg font-sans font-semibold mb-2">Call of Duty: Warzone Mobile</h3>
              <p className="text-sm font-sans text-gray-600 mb-6">
                Translating one of the world's most renowned AAA shooters into an immersive mobile experience
              </p>
            </div>
            <div className="h-48 sm:h-56 md:h-64">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src="/cod-warzone-new-thumbnail.png"
                  alt="Call of Duty Warzone Mobile interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <div className="flex justify-center gap-8 text-sm font-sans">
            <a href="mailto:qudoos253@gmail.com" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/abdkudos/"
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://behance.net/abdkudos"
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 7.5v9c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5h-21C.675 6 0 6.675 0 7.5zM6.662 9.552c1.567 0 2.865 1.298 2.865 2.865s-1.298 2.865-2.865 2.865-2.865-1.298-2.865-2.865 1.298-2.865 2.865-2.865z" />
              </svg>
              Behance <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/abdkudos"
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-4 text-xs font-sans text-gray-500">© 2025 🥑 • Remote-first • Open to relocation </div>
        </div>
      </div>
    </div>
  )
}
