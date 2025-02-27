import PageLayout from '@/components/PageLayout';
import ServiceCard from '@/components/ServiceCard';
import ServiceDetail from '@/components/ServiceDetail';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import ClientCalendly from '@/components/ClientCalendly';
import {
  GlobeAltIcon,
  PresentationChartLineIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-24 lg:pt-28">
        {/* Background pattern */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left column - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                <span className="flex-1">Expert Solutions</span>
                <div className="w-px h-4 bg-indigo-200"></div>
                <span className="text-indigo-500">Proven Results</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Digital Marketing Services
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-gray-800">
                    Real Solutions That Ignite
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Real</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-indigo-100 -rotate-1"></div>
                    </span>
                    Business Growth
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl">
                  From stand-out websites to unstoppable marketing strategies—discover how we help turn your vision into tangible results.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-indigo-50 rounded-full blur-2xl opacity-60"></div>
                <Link
                  href="#calendly"
                  className="relative rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-indigo-100 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70 -z-10"></div>
              <div className="relative">
                <Image
                  src="/digital-marketing.svg"
                  alt="Digital Marketing Services"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-500">
              Our Core Services
            </h2>
            <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You've got big dreams for your business, and we're here to help make them happen. Our services aren't just a random collection of marketing buzzwords; they're a curated suite of solutions designed to boost your online presence, engage your audience, and spark growth you can actually measure. We take the guesswork out of growing your online presence, so you can focus on what you do best.
            </p>
          </div>
          
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex items-center justify-center bg-indigo-50">
                <div className="p-4 rounded-xl bg-white shadow-sm">
                  <Image
                    src="/services/website-design.svg"
                    alt="Website Design"
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <dt className="text-xl font-bold text-gray-900 mb-3">Website Design</dt>
                <dd className="text-gray-600 mb-4">Create stunning, responsive websites that convert visitors into customers. Our designs are modern, fast, and optimized for all devices.</dd>
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer group">
                      <span>Key Takeaways</span>
                      <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                        <span className="text-xs">?</span>
                      </span>
                      <div className="absolute z-10 left-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="space-y-3">
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Mobile-First, Always:</span>{' '}
                            <span className="text-gray-600">Your site will look and perform great on any device.</span>
                          </li>
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Conversion-Focused:</span>{' '}
                            <span className="text-gray-600">Every page is designed to encourage action.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/website-design"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full text-center"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex items-center justify-center bg-indigo-50">
                <div className="p-4 rounded-xl bg-white shadow-sm">
                  <Image
                    src="/services/social-media.svg"
                    alt="Social Media Marketing"
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <dt className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</dt>
                <dd className="text-gray-600 mb-4">Build your brand presence and engage with your audience across all major social platforms. Data-driven strategies that deliver results.</dd>
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer group">
                      <span>Key Takeaways</span>
                      <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                        <span className="text-xs">?</span>
                      </span>
                      <div className="absolute z-10 left-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="space-y-3">
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Targeted Content:</span>{' '}
                            <span className="text-gray-600">Speak directly to your ideal customers.</span>
                          </li>
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Engagement & Growth:</span>{' '}
                            <span className="text-gray-600">Foster genuine connections that convert.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/social-media-marketing"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full text-center"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex items-center justify-center bg-indigo-50">
                <div className="p-4 rounded-xl bg-white shadow-sm">
                  <Image
                    src="/services/reputation.svg"
                    alt="Reputation Management"
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <dt className="text-xl font-bold text-gray-900 mb-3">Reputation Management</dt>
                <dd className="text-gray-600 mb-4">Take control of your online reputation. Monitor, manage, and improve how your business appears online.</dd>
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer group">
                      <span>Key Takeaways</span>
                      <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                        <span className="text-xs">?</span>
                      </span>
                      <div className="absolute z-10 left-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="space-y-3">
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Local Visibility:</span>{' '}
                            <span className="text-gray-600">Boost your business in local search rankings.</span>
                          </li>
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Positive Brand Image:</span>{' '}
                            <span className="text-gray-600">Build customer confidence with reviews.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/google-my-business-reputation-management"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full text-center"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex items-center justify-center bg-indigo-50">
                <div className="p-4 rounded-xl bg-white shadow-sm">
                  <Image
                    src="/services/email.svg"
                    alt="Email Marketing"
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <dt className="text-xl font-bold text-gray-900 mb-3">Email Marketing</dt>
                <dd className="text-gray-600 mb-4">Connect with your audience through targeted email campaigns. Build relationships and drive conversions with personalized content.</dd>
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer group">
                      <span>Key Takeaways</span>
                      <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                        <span className="text-xs">?</span>
                      </span>
                      <div className="absolute z-10 left-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="space-y-3">
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Personalized Campaigns:</span>{' '}
                            <span className="text-gray-600">Tailor emails that people want to open.</span>
                          </li>
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Automation:</span>{' '}
                            <span className="text-gray-600">Put your follow-ups and promotions on autopilot.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/email-marketing"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full text-center"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex items-center justify-center bg-indigo-50">
                <div className="p-4 rounded-xl bg-white shadow-sm">
                  <Image
                    src="/services/seo.svg"
                    alt="SEO"
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <dt className="text-xl font-bold text-gray-900 mb-3">SEO</dt>
                <dd className="text-gray-600 mb-4">Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO services.</dd>
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer group">
                      <span>Key Takeaways</span>
                      <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                        <span className="text-xs">?</span>
                      </span>
                      <div className="absolute z-10 left-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="space-y-3">
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">Keyword Strategy:</span>{' '}
                            <span className="text-gray-600">Research terms that matter for your niche.</span>
                          </li>
                          <li className="text-sm">
                            <span className="font-semibold text-gray-800">On-Page Optimization:</span>{' '}
                            <span className="text-gray-600">Content that aligns with user intent and SEO best practices.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/seo"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full text-center"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* How These Services Work Together Section */}
      <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/3 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How These Services <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-500">Work Together</span>
            </h2>
            <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each service complements the others—like pieces of a puzzle that fit together to create a bigger, brighter picture. A well-designed website pairs seamlessly with stellar social media campaigns, while strong SEO and reputation management ensure the right people find you and trust you. Simply put, it all clicks.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative mt-16 mx-auto max-w-5xl">
            {/* Process Flow */}
            <div className="hidden md:block">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 transform -translate-y-1/2"></div>
              
              {/* Directional Arrows */}
              <div className="absolute top-1/2 left-[25%] w-4 h-4 border-t-2 border-r-2 border-indigo-400 transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-[50%] w-4 h-4 border-t-2 border-r-2 border-indigo-400 transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-[75%] w-4 h-4 border-t-2 border-r-2 border-indigo-400 transform -translate-y-1/2 rotate-45"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1: Research */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">01. Research</h3>
                  <p className="text-center text-gray-600">We analyze your business goals, target audience, and competitive landscape.</p>
                </div>
              </div>

              {/* Step 2: Data Collection */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">02. Data Collection</h3>
                  <p className="text-center text-gray-600">We gather insights from your website, social media, and customer interactions.</p>
                </div>
              </div>

              {/* Step 3: Targeting */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">03. Targeting</h3>
                  <p className="text-center text-gray-600">We create tailored strategies that reach your ideal customers at the right time.</p>
                </div>
              </div>

              {/* Step 4: Result */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">04. Result</h3>
                  <p className="text-center text-gray-600">You get measurable growth in traffic, engagement, conversions, and revenue.</p>
                </div>
              </div>
            </div>

            {/* Integration Description */}
            <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Our services don't operate in silos—they're designed to work together, amplifying each other's impact. When your website, social media, SEO, and reputation management are all aligned, you create a consistent brand experience that builds trust and drives conversions.
                  </p>
                  <div className="flex gap-2">
                    <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Data-Driven</div>
                    <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Integrated</div>
                    <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Optimized</div>
                  </div>
                </div>
                <div className="relative aspect-square max-w-sm mx-auto">
                  {/* Abstract Connection Visualization */}
                  <div className="absolute inset-0">
                    {/* Central Element */}
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">WA</div>
                    </div>
                    
                    {/* Connecting Elements */}
                    <div className="absolute top-0 left-1/4 w-16 h-16 bg-indigo-100 rounded-full transform rotate-[15deg] animate-float-slow">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent rounded-full" />
                    </div>

                    <div className="absolute bottom-32 left-[15%] w-20 h-20 border border-indigo-200/50 transform rotate-45 animate-float">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent" />
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="absolute left-0 top-1/2 w-1/2 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 transform -rotate-45"></div>
                    <div className="absolute left-0 top-1/2 w-1/2 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 transform rotate-45"></div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-1/2 bg-gradient-to-t from-blue-400 to-indigo-100 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-green-400 to-indigo-400 transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Website Alchemy Section */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Shapes */}
          <div className="absolute top-20 left-[5%] w-24 h-24 border border-indigo-200/50 rounded-xl transform rotate-[15deg] animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent rounded-xl" />
          </div>

          <div className="absolute top-40 right-[10%] w-16 h-16 border border-purple-200/50 rounded-full animate-float-slower">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-full" />
          </div>

          <div className="absolute bottom-32 left-[15%] w-20 h-20 border border-indigo-200/50 transform rotate-45 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent" />
          </div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="max-w-xl space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Website
                  <span className="block text-indigo-600">Alchemy?</span>
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  We treat every brand like it's our own—pouring creativity, strategy, and a keen eye for data into everything we do. Think of us as your digital partners, working behind the scenes (and sometimes in front) to ensure your online presence is as powerful and unique as you are.
                </p>
                
                {/* Feature List */}
                <div className="space-y-5 mt-8">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Strategic Focus</h3>
                      <p className="mt-2 text-gray-600">Every action we take is rooted in real goals and metrics that matter to your bottom line.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Tailored Solutions</h3>
                      <p className="mt-2 text-gray-600">We customize each service to fit your brand's voice, industry, and future aspirations.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Collaborative Spirit</h3>
                      <p className="mt-2 text-gray-600">Your input is always valued, and we keep communication transparent and friendly.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Link
                    href="#calendly"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-500 transition-all duration-200 group"
                  >
                    Start Your Digital Transformation
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                {/* Abstract Visualization */}
                <div className="absolute inset-0">
                  {/* Central Element */}
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-100 to-white rounded-2xl shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-4 border-2 border-indigo-100 rounded-xl"></div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">WA</div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg shadow-lg transform rotate-12 animate-float-slow"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-full shadow-lg animate-float-slow delay-150"></div>

                  {/* Connection Lines */}
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform -rotate-45"></div>
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform rotate-45"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-1/2 bg-gradient-to-t from-blue-400 to-indigo-100 transform -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-green-400 to-indigo-400 transform -translate-y-1/2"></div>

                  {/* Data Points */}
                  <div className="absolute top-0 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                  <div className="absolute top-1/4 right-0 w-3 h-3 bg-indigo-300 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-purple-300 rounded-full animate-pulse delay-225"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Section */}
      <div id="calendly" className="relative bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-white to-purple-50"></div>
          
          {/* Decorative Shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-100 to-transparent opacity-40 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-100 to-transparent opacity-40 rounded-tr-full"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(79, 70, 229, 0.06) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="max-w-xl space-y-8 pt-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Ready to Elevate Your 
                  <span className="block text-indigo-600">Online Presence?</span>
                </h2>
                <p className="text-xl font-medium text-gray-900">Book Your FREE Consultation Now</p>
              </div>

              <p className="text-lg leading-8 text-gray-600">
                By combining creativity, strategy, and a genuine love for helping businesses like yours, 
                Website Alchemy is here to guide you every step of the way. Sound like a plan?
              </p>

              {/* Benefits */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">30-minute free consultation</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No obligation, just valuable insights</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Personalized strategy discussion</span>
                </div>
              </div>
            </div>

            {/* Right Side - Calendly Widget */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
              <div className="p-1">
                <ClientCalendly />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-50 rounded-full blur-2xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-50 rounded-full blur-2xl opacity-70"></div>
        </div>
      </div>
    </PageLayout>
  );
}
