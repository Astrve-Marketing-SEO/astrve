'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon, StarIcon, ChartBarIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon, ShieldCheckIcon, PencilSquareIcon, PhotoIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ArrowUpRight } from 'lucide-react';
import ClientCalendly from '@/components/ClientCalendly';
import ListingsPopup from '@/components/ListingsPopup';
import { SparklesIcon } from '@heroicons/react/24/solid';

const benefits = [
  {
    name: 'Enhanced Local Visibility',
    description: 'Appear prominently in local search results and Google Maps when potential customers search for your services.',
    icon: MapPinIcon,
  },
  {
    name: 'Reputation Building',
    description: 'Build and maintain a stellar online reputation through proactive review management and response strategies.',
    icon: StarIcon,
  },
  {
    name: 'Performance Insights',
    description: 'Get detailed analytics about how customers find and interact with your business profile.',
    icon: ChartBarIcon,
  },
  {
    name: 'Customer Engagement',
    description: 'Engage with customers through Q&A, posts, and direct messaging to build lasting relationships.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

const features = [
  'Google Business Profile optimization',
  'Review management and response',
  'Local SEO optimization',
  'Business information updates',
  'Photo and content management',
  'Competitor analysis',
  'Performance tracking',
  'Review generation strategies',
  'Crisis management',
  'Regular reporting'
];

export default function GoogleMyBusinessPage() {
  const [isListingsOpen, setIsListingsOpen] = useState(false);
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
                <span className="flex-1">Local Business Growth Experts</span>
                <div className="w-px h-4 bg-indigo-200"></div>
                <span className="text-indigo-500">Top-Ranked Results</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">Google My Business</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    & Reputation Management
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-gray-800">
                    Own Your Local
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Presence</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-indigo-100 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl">
                  Boost your visibility on Google, earn customers' trust, and protect your brand's image online. Stand out where it matters most.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-indigo-50 rounded-full blur-2xl opacity-60"></div>
                <a
                  href="#calendly"
                  className="relative rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-indigo-100 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#business-platforms"
                  className="relative rounded-full px-8 py-4 text-base font-semibold text-gray-900 shadow-lg shadow-gray-100 hover:shadow-md transition-all duration-200 flex items-center gap-2 bg-white/80 backdrop-blur-sm group border border-gray-100"
                >
                  <span>Explore Features</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative lg:ml-auto">
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-indigo-50 to-transparent opacity-40 blur-2xl"></div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-indigo-50 p-8 shadow-xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-30"></div>
                  <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] -z-10"></div>
                  
                  <div className="relative grid grid-cols-6 gap-4">
                    {/* Top row icons */}
                    <div className="col-span-1 flex justify-center items-center">
                      <MapPinIcon className="h-8 w-8 text-indigo-500" />
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                      <div className="relative h-16 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold text-gray-800">Your Business</div>
                          <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-gray-500">4.9 ★ (200+ reviews)</div>
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-indigo-500" />
                    </div>
                    
                    {/* Middle section - graph */}
                    <div className="col-span-6 h-32 overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-600">Monthly Views</div>
                        <div className="text-sm font-semibold text-indigo-600">+48%</div>
                      </div>
                      <div className="relative h-20">
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between space-x-0.5">
                          {[35, 60, 40, 30, 55, 80, 65, 75, 65, 95, 80, 90].map((height, i) => (
                            <div key={i} className="w-full bg-indigo-100 rounded-t" style={{ height: `${height}%` }}>
                              <div className="h-full w-full bg-indigo-500 rounded-t opacity-80" style={{ height: `${height * 0.7}%` }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom row stats */}
                    <div className="col-span-2 overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                      <div className="text-sm font-medium text-gray-600">Calls</div>
                      <div className="text-lg font-semibold text-gray-900">+32%</div>
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                      <div className="text-sm font-medium text-gray-600">Direction Requests</div>
                      <div className="text-lg font-semibold text-gray-900">+86%</div>
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                      <div className="text-sm font-medium text-gray-600">Website Clicks</div>
                      <div className="text-lg font-semibold text-gray-900">+49%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GMB Power Section */}
      <div id="business-platforms" className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <div className="flex items-center justify-center">
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-indigo-100 rounded-full blur-xl opacity-50 -z-10"></div>
                <span className="relative bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full border border-indigo-100">
                  Stand Out in Local Search
                </span>
              </div>
            </div>
            
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Power of <span className="relative inline-block">
                <span className="relative z-10">Google My Business</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100 -rotate-1 -z-10"></div>
              </span>
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Your Google My Business listing is like a digital front window for local shoppers. It's often the first thing people see when they search for your business or services near them. An optimized GMB listing not only drives foot traffic but also nudges online visitors to take action—call, book, or buy—in just a few clicks.
            </p>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent opacity-50 rounded-3xl"></div>
            
            <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-3 lg:items-center">
              {/* Left Column: Features */}
              <div className="relative z-10">
                <div className="space-y-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform hover:scale-105">
                      <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      Local SEO Boost
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      A well-managed GMB profile can dramatically improve your ranking in local searches, making your business appear before competitors.
                    </p>
                  </div>
                  
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform hover:scale-105">
                      <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      Performance Tracking
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Access detailed insights about how customers find and interact with your business, allowing for data-driven decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Middle Column: Image/Visual */}
              <div className="relative z-10 flex justify-center">
                <div className="relative max-w-xs overflow-hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200/30">
                  <div className="relative rounded-lg overflow-hidden h-64 w-full">
                    {/* GMB Profile Mockup */}
                    <div className="h-16 bg-indigo-600 flex items-center px-4">
                      <div className="text-white font-medium">Google Business Profile</div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">YB</div>
                        <div>
                          <div className="font-semibold">Your Business Name</div>
                          <div className="text-sm text-gray-500">Local Business</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-yellow-400 mb-3">
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <span className="text-gray-700 ml-1 text-sm">5.0 (120+)</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="col-span-1 h-12 rounded-lg bg-gray-100"></div>
                        <div className="col-span-1 h-12 rounded-lg bg-gray-100"></div>
                        <div className="col-span-1 h-12 rounded-lg bg-gray-100"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-4 rounded bg-gray-100 w-full"></div>
                        <div className="h-4 rounded bg-gray-100 w-11/12"></div>
                        <div className="h-4 rounded bg-gray-100 w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: More Features */}
              <div className="relative z-10">
                <div className="space-y-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform hover:scale-105">
                      <StarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      Instant Credibility
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Complete, up-to-date information builds immediate trust with potential customers searching for local services.
                    </p>
                  </div>
                  
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform hover:scale-105">
                      <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      At-a-Glance Engagement
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Users see reviews, photos, and FAQs before even hitting your website, creating a seamless customer journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 flex justify-center">
            <a 
              href="#calendly" 
              className="group relative inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50 hover:ring-indigo-300"
            >
              <span>Start optimizing your GMB profile today</span>
              <ArrowUpRight className="h-5 w-5 text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Reputation Management Section */}
      <div className="bg-gradient-to-b from-white to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
              <span className="flex-1">Reputation Management and Recovery</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Because Your Brand Image <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Is Priceless</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Even a few negative reviews or misinformation can turn away potential customers. Our reputation management goes beyond simple damage control: we proactively set you up for positive feedback, address concerns before they become crises, and guide you in showcasing the strengths that make your brand shine.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-24 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600/80"></div>
                <div className="relative">
                  <div className="font-semibold text-xl text-white">
                    "Your reputation takes years to build, seconds to destroy, and forever to repair. We make sure you never have to worry about the latter two."
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                        <span className="text-white font-bold">WA</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Website Alchemy</div>
                        <div className="text-indigo-200">Reputation Management Experts</div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 mix-blend-overlay" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <pattern id="pattern" width="128" height="128" patternUnits="userSpaceOnUse">
                          <path d="M0 128V.5H128" fill="none" stroke="rgba(255, 255, 255, 0.1)" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#pattern)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="p-6 rounded-2xl bg-white shadow-xl ring-1 ring-indigo-200/50">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-4">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Review Monitoring and Response</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Timely replies to customer feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Professional response templates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Monitoring across all platforms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-white shadow-xl ring-1 ring-indigo-200/50">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-4">
                    <StarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Review Generation Strategies</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Automated follow-up systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>QR codes for easy reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>In-store review collection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-white shadow-xl ring-1 ring-indigo-200/50">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-4">
                    <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Crisis and Damage Control</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Rapid response protocols</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Proactive issue resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Reputational recovery plans</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-white shadow-xl ring-1 ring-indigo-200/50">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-4">
                    <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Content Management</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Regular profile updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Fresh, engaging posts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                      <span>Consistent brand messaging</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 flex justify-center md:justify-start">
                <a href="#calendly" className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2">
                  <span>Protect Your Brand Today</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Section */}
      <div className="relative overflow-hidden bg-white py-24 sm:py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="optimization-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M0 64V.5H64" fill="none" stroke="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#optimization-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                Optimization for Long-Term Success
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Keep Your Listing <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">Fresh and Thriving</span>
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-[90%] h-[0.4em] w-full fill-indigo-300/40" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Optimization isn't a one-and-done deal. Your business evolves, and so do the search algorithms. We stay on top of these changes, continually refining your listing and strategy so you maintain (and grow) your local market share.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            {/* Illustration */}
            <div className="relative mb-12 flex justify-center">
              <div className="relative rounded-xl overflow-hidden h-64 w-full max-w-3xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-4 gap-4 w-full max-w-2xl">
                    {[PencilSquareIcon, PhotoIcon, AdjustmentsHorizontalIcon, ChartBarIcon].map((Icon, i) => (
                      <div key={i} className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                        <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 flex justify-center w-full">
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  Always evolving, always improving
                </span>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:gap-x-8">
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-indigo-100/5 transition-all duration-300 hover:shadow-indigo-100/50">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">Regular Content Updates</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Posts, offers, and event announcements to keep your profile active. We create tailored content that resonates with your audience and positions you as an industry authority.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Weekly post scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Seasonal promotions and offers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Event announcements and recaps</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-indigo-100/5 transition-all duration-300 hover:shadow-indigo-100/50">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <PhotoIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">High-Quality Images and Videos</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Showcase products, team photos, or behind-the-scenes glimpses that captivate viewers and bring your business to life in the digital space.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Professional photo optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>360° virtual tours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Short-form video content</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-indigo-100/5 transition-all duration-300 hover:shadow-indigo-100/50">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <AdjustmentsHorizontalIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">Keyword and Category Refinements</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Make sure your listing accurately reflects what you offer and who you serve, with strategic adjustments based on market trends and competition.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Local keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Strategic category selection</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-indigo-100/5 transition-all duration-300 hover:shadow-indigo-100/50">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">Analytics and Insights</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Track profile views, search queries, and customer actions—then tweak strategies for even better results. Data-driven optimization keeps you ahead.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Search query analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>Conversion tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex items-center justify-center">
              <div className="relative isolate overflow-hidden bg-indigo-600 px-6 py-5 shadow-2xl sm:rounded-3xl sm:px-24 sm:py-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-lg font-semibold leading-8 tracking-tight text-white">
                    Ready to optimize your Google Business Profile?
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-indigo-100">
                    Let us help you stay ahead of the competition with a strategy that evolves with your business.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-6">
                    <a
                      href="#calendly"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
                    >
                      <span>Book a FREE Consultation</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                  aria-hidden="true"
                >
                  <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
                  <defs>
                    <radialGradient id="gradient">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#4f46e5" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working Process Section */}
      <div className="bg-gradient-to-b from-white to-indigo-50/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                Our Workflow
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Working with <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">Us Looks Like</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A streamlined, transparent process that delivers results while keeping you informed every step of the way.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            {/* Step timeline visualization */}
            <div className="relative mb-20">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-indigo-300/30"></div>
              </div>
              <div className="relative flex justify-between">
                {/* Step markers */}
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${step === 1 ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-indigo-300'} z-10`}>
                      <span className={`text-sm font-semibold ${step === 1 ? 'text-white' : 'text-indigo-600'}`}>{step}</span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-500 hidden sm:block">Step {step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-white/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6 shadow-md">
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    <span className="absolute inset-0"></span>
                    Audit and Analysis
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    We take a deep dive into your current GMB listing, reviews, and overall reputation to spot immediate opportunities and issues.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Competitive analysis
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Keyword research
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Reviews assessment
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-white/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6 shadow-md">
                    <WrenchScrewdriverIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    <span className="absolute inset-0"></span>
                    Cleanup and Setup
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    From removing outdated details to correcting inaccurate info, we tidy up your listing so it's accurate and appealing.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Profile verification
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      NAP consistency
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Category selection
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-white/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6 shadow-md">
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    <span className="absolute inset-0"></span>
                    Ongoing Management
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    We schedule regular check-ins, respond to reviews on your behalf if needed, and keep your listing fresh with new content.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Weekly updates
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Content calendar
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Review responses
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-white/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6 shadow-md">
                    <StarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    <span className="absolute inset-0"></span>
                    Review Generation Plan
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    We strategize ways to encourage happy customers to leave feedback, boosting your positive reviews and overall rating.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Custom QR codes
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Email campaigns
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      SMS follow-ups
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-white/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6 shadow-md">
                    <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    <span className="absolute inset-0"></span>
                    Monitoring and Optimization
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    We watch the metrics, adjust strategies when necessary, and keep you informed about changes in local search trends.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Monthly reports
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      KPI tracking
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Strategy refinement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success indicator */}
            <div className="mt-16 rounded-2xl bg-indigo-50 p-8 ring-1 ring-inset ring-indigo-200">
              <div className="md:flex md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">Ready to enhance your Google presence?</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    From audit to optimization, our comprehensive process ensures your business stands out when local customers search.
                  </p>
                </div>
                <div className="mt-6 flex md:mt-0">
                  <a
                    href="#calendly"
                    className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2"
                  >
                    <span>Get Started Today</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beyond Google Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              {/* Content */}
              <div className="md:max-w-xl">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                    <MapPinIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-base font-semibold leading-7 text-indigo-600">Expand Your Digital Footprint</p>
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Beyond Google: <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">Maximizing Your Reach</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  While Google My Business is crucial for most local businesses, it's not the only online directory that matters. Depending on your industry, other platforms might be even more important for reaching your target audience.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsListingsOpen(true)}
                    className="flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:translate-y-[-2px]"
                  >
                    <span>View Industry-Specific Listings</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#calendly"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50 hover:ring-indigo-300 transition-all duration-200"
                  >
                    <span>Schedule a Consultation</span>
                  </a>
                </div>
              </div>
              
              {/* Platform logos grid */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300/0"></div>
                </div>
                <div className="relative grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Yelp */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-gray-50 p-3 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-bold text-red-600">Yelp</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* TripAdvisor */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-gray-50 p-3 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-bold text-green-600">Trip<br/>Advisor</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* Facebook */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-gray-50 p-3 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-bold text-blue-600">Facebook</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* Apple Maps */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-gray-50 p-3 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-bold text-gray-800">Apple<br/>Maps</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* Bing */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-gray-50 p-3 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-bold text-blue-800">Bing</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* View More */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-indigo-50 p-3 shadow-sm hover:bg-indigo-100 hover:shadow-md transition-all duration-200" onClick={() => setIsListingsOpen(true)}>
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-md font-semibold text-indigo-600">View<br/>More</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature list */}
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <StarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">Consistent Brand Identity</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Maintain consistent information, images, and messaging across all your listings for a unified brand presence.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <MagnifyingGlassIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">Industry-Specific Focus</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      We identify and prioritize the platforms that are most relevant to your specific industry and target audience.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">Reputation Management</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Monitor and respond to reviews across all platforms, not just Google, to maintain a stellar online reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div id="calendly" className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/70 to-white py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 mb-8 ring-1 ring-inset ring-indigo-500/20">
                <SparklesIcon className="mr-1.5 h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                Start Your Journey
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Ready to Make a <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">Lasting First Impression?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Whether you're new to Google My Business or looking to revamp an existing profile, we'll make sure you're set up for success. From local SEO boosts to reputation recovery, we're here to help you shine.
              </p>
            </div>
            
            <div className="mt-16 relative">
              {/* Decorative elements */}
              <div className="hidden lg:block absolute -top-12 -left-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-inset ring-indigo-100">
                  <MapPinIcon className="h-10 w-10 text-indigo-300" aria-hidden="true" />
                </div>
              </div>
              <div className="hidden lg:block absolute -top-16 -right-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-inset ring-indigo-100">
                  <StarIcon className="h-8 w-8 text-indigo-300" aria-hidden="true" />
                </div>
              </div>
              
              {/* Card with shadow for Calendly */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
                <div className="p-8 sm:p-10">
                  {/* Top section with benefits */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
                          <CheckIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Free 30-minute consultation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
                          <CheckIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Custom action plan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
                          <CheckIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">No obligation next steps</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Calendly integration */}
                  <div className="bg-gradient-to-b from-indigo-50 to-white p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Book Your Strategy Session Now
                    </h3>
                    <ClientCalendly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListingsPopup open={isListingsOpen} setOpen={setIsListingsOpen} />
    </PageLayout>
  );
}
