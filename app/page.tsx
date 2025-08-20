import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ImageSlideshow } from "@/components/image-slideshow"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-2xl mb-2">🥑</div>
              <div className="text-lg font-sans font-semibold mb-1">Abdul Kudoos</div>
              <div className="text-sm font-sans text-gray-600 dark:text-gray-400 max-w-md">
                Product Designer. Design Growth & Strategy.
                <br />
                Based worldwide. Available Globally.
              </div>
            </div>
            <div className="flex items-center gap-2">
                          <Link
              href="/about"
              className="px-3 py-2 text-sm font-sans hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 rounded-lg transition-colors"
            >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="grid gap-4 text-sm font-sans">
            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Soared</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Design Strategy Consultant</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2025—Present</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Hone</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Lead Product Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2023—2025</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Mantle</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Lead Product Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2023—2024</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">United Nations</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Brand Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2022</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Innoloft</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Lead Product Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2022—2022</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Pixcap</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Lead Product Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2021—2022</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Teen Controls</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Founding Product Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2019—2020</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-black dark:text-white">Freelance</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">Designer</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">2017—2019</div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-sm font-sans mb-6 font-semibold">Recognitions</h2>
          <div className="grid gap-4 text-sm font-sans">
            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="text-black dark:text-white">IBM Certified Design Enterprise Co-Creator </div>
                <div className="text-gray-600 dark:text-gray-400">
                  2023-Recognized for expertise in designing enterprise scale systems
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
            <div className="group relative flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 select-none cursor-default">
              <div>
                <div className="text-black dark:text-white">IBM Certified Design Enterprise Practitioner</div>
                <div className="text-gray-600 dark:text-gray-400">
                  2023-Recognized for design thinking in complex business challenges{" "}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Featured Work */}
        <div className="mb-16">
          <h2 className="text-sm font-sans mb-6 font-semibold">Featured</h2>

          {/* Hone Project */}
          <div className="mb-12">
            <Link href="/case-studies/hone" className="block group">
              <div className="mb-4">
                <h3 className="text-lg font-sans font-semibold mb-2 flex items-center gap-2">
                  Hone - From PC Optimizer to Gamer's Companion
                  <ArrowUpRight className="w-5 h-5 text-black dark:text-white transform rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                </h3>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                  Grew revenue 16× in 18 months through strategic redesigns{" "}
                </p>
              </div>
              <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg">
                <div className="col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                  <img
                    src="/hone-pattern.png"
                    alt="Hone project design pattern"
                    className="w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300"
                  />
                </div>
                <div className="col-span-7 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full relative">
                  <img
                    src="/hone-interface.png"
                    alt="Hone project interface design"
                    className="w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300"></div>
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
              <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">Bringing Discord's intuitive experience to AR</p>
            </div>
                          <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64">
                <div className="col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                  <img
                    src="/desktop-interface-2.png"
                    alt="Project 2 design pattern"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-7 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
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
            <Link href="/case-studies/grab-eat" className="block group">
              <div className="mb-4">
                <h3 className="text-lg font-sans font-semibold mb-2 flex items-center gap-2">
                  Grab Eat - Grocery App for Everyone
                  <ArrowUpRight className="w-5 h-5 text-black dark:text-white transform rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                </h3>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                  Built a cross platform grocery delivery app connecting millions of local vendors to buyers
                </p>
              </div>
              <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg">
                <div className="col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                  <img
                    src="/grab-eat-branding.png"
                    alt="Project 3 design pattern"
                    className="w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300"
                  />
                </div>
                <div className="col-span-7 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full relative">
                  <img
                    src="/grab-eat-app-screens.png"
                    alt="GRAB EAT mobile app interface screens"
                    className="w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300"></div>
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
              <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                Redesigned the trading experience, making fiat to crypto transactions seamless for millions of users
              </p>
            </div>
            <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64">
              <div className="col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                <img
                  src="/erthium-trading-platform.png"
                  alt="Erthium trading platform branding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
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
              <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                Reimagined the TV streaming app, boosting usability, engagement, and brand appeal
              </p>
            </div>
            <div className="grid grid-cols-10 gap-2 sm:gap-4 h-48 sm:h-56 md:h-64">
              <div className="col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                <img
                  src="/particle-animation.gif"
                  alt="Project 5 particle animation"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="col-span-7 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
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
            <Link href="/case-studies/ary-news" className="block group">
              <div className="mb-4">
                <h3 className="text-lg font-sans font-semibold mb-2 flex items-center gap-2">
                  ARY News - Digital News Platform
                  <ArrowUpRight className="w-5 h-5 text-black dark:text-white transform rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                </h3>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                  Reimagining Pakistan's most-watched news channel for the digital age
                </p>
              </div>
              <div className="h-48 sm:h-56 md:h-64 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg relative">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                  <img
                    src="/ary-news-thumbnail.png"
                    alt="ARY News platform interface"
                    className="w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300"></div>
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
                              <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                  Translating one of the world's most renowned AAA shooters into an immersive mobile experience
                </p>
            </div>
                          <div className="h-48 sm:h-56 md:h-64">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                <img
                  src="/cod-warzone-new-thumbnail.png"
                  alt="Call of Duty Warzone Mobile interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* AI Agent Interface Project */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-lg font-sans font-semibold mb-2">Designing a Human Interface for a General-Purpose AI Agent</h3>
              <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mb-6">
                Turning abstract AI power into a simple, natural, human-first experience.
              </p>
            </div>
            <div className="h-48 sm:h-56 md:h-64">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-full">
                <ImageSlideshow
                  images={[
                    "/your-ai-agent-image-1.png",
                    "/your-ai-agent-image-2.png",
                    "/your-ai-agent-image-3.png",
                    "/your-ai-agent-image-4.png"
                  ]}
                  alt="AI Agent interface design"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-16"></div>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm font-sans">
          <div className="text-gray-600 dark:text-gray-400">© 2025</div>
          <div className="flex gap-8">
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
  )
}
