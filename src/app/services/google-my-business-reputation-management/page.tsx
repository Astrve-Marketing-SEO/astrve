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
      <section className="relative bg-rich-black px-6 pt-24 lg:pt-28 overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-transparent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>

        <div className="mx-auto max-w-7xl relative z-1">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left column - Text content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/80 border border-gold-500/20 text-gold-400 text-sm font-serif mb-6 shadow-lg">
                <span className="flex-1">Local Business Growth Experts</span>
                <div className="w-px h-4 bg-gold-500/30"></div>
                <span className="text-gold-300">Top-Ranked Results</span>
              </div>
              
              <h1 className="relative space-y-4">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl opacity-30"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-foreground drop-shadow-sm">Google My Business</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-sm">
                    & Reputation Management
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-serif font-medium tracking-tight text-foreground">
                    Own Your Local
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Presence</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-30"></div>
                <p className="pl-6 text-lg leading-8 text-gray-300 max-w-2xl font-sans">
                  Boost your visibility on Google, earn customers' trust, and protect your brand's image online. Stand out where it matters most.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
                <a
                  href="#calendly"
                  className="relative rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 flex items-center gap-2 group z-10"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#business-platforms"
                  className="relative rounded-full px-8 py-4 text-base font-serif font-semibold text-gold-400 shadow-lg bg-rich-dark/90 border border-gold-500/20 hover:bg-rich-dark/70 hover:text-gold-300 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Explore Features</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative lg:ml-auto z-10">
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-gold-300/10 to-transparent opacity-30 blur-2xl"></div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-8 shadow-xl border border-gold-500/20">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-300/10 to-transparent opacity-30"></div>
                  <div className="absolute inset-0 bg-grid-slate-800/10 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.7))] -z-10"></div>
                  
                  <div className="relative grid grid-cols-6 gap-4">
                    {/* Top row icons */}
                    <div className="col-span-1 flex justify-center items-center">
                      <MapPinIcon className="h-8 w-8 text-gold-400" />
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                      <div className="relative h-16 w-full overflow-hidden rounded-lg bg-rich-dark/70 p-2 shadow-sm border border-gold-500/20">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-serif font-semibold text-foreground">Your Business</div>
                          <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-gold-400" />
                            <StarIcon className="h-5 w-5 text-gold-400" />
                            <StarIcon className="h-5 w-5 text-gold-400" />
                            <StarIcon className="h-5 w-5 text-gold-400" />
                            <StarIcon className="h-5 w-5 text-gold-400" />
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-gold-300 font-sans">4.9 ★ (200+ reviews)</div>
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-gold-400" />
                    </div>
                    
                    {/* Middle section - graph */}
                    <div className="col-span-6 h-32 overflow-hidden rounded-lg bg-rich-dark/70 p-2 shadow-sm border border-gold-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-300 font-sans">Monthly Views</div>
                        <div className="text-sm font-semibold text-gold-400">+48%</div>
                      </div>
                      <div className="relative h-20">
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between space-x-0.5">
                          {[35, 60, 40, 30, 55, 80, 65, 75, 65, 95, 80, 90].map((height, i) => (
                            <div key={i} className="w-full bg-rich-gray/90 rounded-t" style={{ height: `${height}%` }}>
                              <div className="h-full w-full bg-gold-400 rounded-t opacity-80" style={{ height: `${height * 0.7}%` }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom row stats */}
                    <div className="col-span-2 overflow-hidden rounded-lg bg-rich-dark/70 p-2 shadow-sm border border-gold-500/20">
                      <div className="text-sm font-medium text-gray-300 font-sans">Calls</div>
                      <div className="text-lg font-semibold text-foreground">+<span className="text-gold-400">32</span>%</div>
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-lg bg-rich-dark/70 p-2 shadow-sm border border-gold-500/20">
                      <div className="text-sm font-medium text-gray-300 font-sans">Direction Requests</div>
                      <div className="text-lg font-semibold text-foreground">+<span className="text-gold-400">86</span>%</div>
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-lg bg-rich-dark/70 p-2 shadow-sm border border-gold-500/20">
                      <div className="text-sm font-medium text-gray-300 font-sans">Website Clicks</div>
                      <div className="text-lg font-semibold text-foreground">+<span className="text-gold-400">49</span>%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GMB Power Section */}
      <section id="business-platforms" className="bg-rich-black py-24 sm:py-32 relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center relative z-10">
            <div className="flex items-center justify-center">
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl opacity-50 -z-10"></div>
                <span className="relative bg-rich-dark/90 text-gold-400 text-sm font-serif px-4 py-1.5 rounded-full border border-gold-500/20">
                  Stand Out in Local Search
                </span>
              </div>
            </div>
            
            <h2 className="mt-6 text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
              The Power of <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Google My Business</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-gold-500/20 -rotate-1 -z-10"></div>
              </span>
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto font-sans">
              Your Google My Business listing is like a digital front window for local shoppers. It's often the first thing people see when they search for your business or services near them. An optimized GMB listing not only drives foot traffic but also nudges online visitors to take action—call, book, or buy—in just a few clicks.
            </p>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-300/10 to-transparent opacity-30 rounded-3xl"></div>
            
            <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-3 lg:items-center">
              {/* Left Column: Features */}
              <div className="relative z-10">
                <div className="space-y-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/90 border border-gold-500/30 shadow-lg transform transition-transform hover:scale-105">
                      <MapPinIcon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold leading-8 text-foreground">
                      Local SEO Boost
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      A well-managed GMB profile can dramatically improve your ranking in local searches, making your business appear before competitors.
                    </p>
                  </div>
                  
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/90 border border-gold-500/30 shadow-lg transform transition-transform hover:scale-105">
                      <ChartBarIcon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold leading-8 text-foreground">
                      Performance Tracking
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      Access detailed insights about how customers find and interact with your business, allowing for data-driven decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Middle Column: Image/Visual */}
              <div className="relative z-10 flex justify-center">
                <div className="relative max-w-xs overflow-hidden rounded-2xl bg-rich-dark/90 p-4 shadow-xl ring-1 ring-gold-500/20">
                  <div className="relative rounded-lg overflow-hidden h-64 w-full">
                    {/* GMB Profile Mockup */}
                    <div className="h-16 bg-gradient-to-r from-gold-400 to-gold-500 flex items-center px-4">
                      <div className="text-rich-black font-serif font-medium">Google Business Profile</div>
                    </div>
                    <div className="bg-rich-dark/70 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-rich-dark/90 border border-gold-500/30 flex items-center justify-center text-gold-400 font-serif font-bold">YB</div>
                        <div>
                          <div className="font-serif font-semibold text-foreground">Your Business Name</div>
                          <div className="text-sm text-gray-300 font-sans">Local Business</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-gold-400 mb-3">
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
                        <span className="text-gray-300 ml-1 text-sm font-sans">5.0 (120+)</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="col-span-1 h-12 rounded-lg bg-rich-dark/60 border border-gold-500/10"></div>
                        <div className="col-span-1 h-12 rounded-lg bg-rich-dark/60 border border-gold-500/10"></div>
                        <div className="col-span-1 h-12 rounded-lg bg-rich-dark/60 border border-gold-500/10"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-4 rounded bg-rich-dark/60 border border-gold-500/10 w-full"></div>
                        <div className="h-4 rounded bg-rich-dark/60 border border-gold-500/10 w-11/12"></div>
                        <div className="h-4 rounded bg-rich-dark/60 border border-gold-500/10 w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: More Features */}
              <div className="relative z-10">
                <div className="space-y-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/90 border border-gold-500/30 shadow-lg transform transition-transform hover:scale-105">
                      <StarIcon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold leading-8 text-foreground">
                      Instant Credibility
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      Complete, up-to-date information builds immediate trust with potential customers searching for local services.
                    </p>
                  </div>
                  
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/90 border border-gold-500/30 shadow-lg transform transition-transform hover:scale-105">
                      <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold leading-8 text-foreground">
                      At-a-Glance Engagement
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
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
              className="group relative inline-flex items-center gap-x-2 rounded-full bg-rich-dark/90 px-8 py-4 text-base font-serif font-semibold text-gold-400 shadow-lg border border-gold-500/20 hover:bg-rich-dark/70 hover:text-gold-300"
            >
              <span>Start optimizing your GMB profile today</span>
              <ArrowUpRight className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reputation Management Section */}
      <section className="bg-rich-black py-24 sm:py-32 relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 border border-gold-500/20 text-gold-400 text-sm font-serif mb-6 shadow-lg">
              <span className="flex-1">Reputation Management and Recovery</span>
            </div>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
              Because Your Brand Image <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Is Priceless</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Even a few negative reviews or misinformation can turn away potential customers. Our reputation management goes beyond simple damage control: we proactively set you up for positive feedback, address concerns before they become crises, and guide you in showcasing the strengths that make your brand shine.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5 z-10">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-24 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gold-600/60 via-gold-500/40"></div>
                <div className="relative">
                  <div className="font-serif font-semibold text-xl text-rich-black">
                    "Your reputation takes years to build, seconds to destroy, and forever to repair. We make sure you never have to worry about the latter two."
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rich-black/20 backdrop-blur-md">
                        <span className="text-rich-black font-serif font-bold">WA</span>
                      </div>
                      <div>
                        <div className="font-serif font-semibold text-rich-black">Website Alchemy</div>
                        <div className="text-rich-black/80 font-sans">Reputation Management Experts</div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 mix-blend-overlay" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <pattern id="pattern" width="128" height="128" patternUnits="userSpaceOnUse">
                          <path d="M0 128V.5H128" fill="none" stroke="rgba(0, 0, 0, 0.1)" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#pattern)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative z-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="p-6 rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-4">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">Review Monitoring and Response</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300 font-sans">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Timely replies to customer feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Professional response templates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Monitoring across all platforms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-4">
                    <StarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">Review Generation Strategies</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300 font-sans">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Automated follow-up systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>QR codes for easy reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>In-store review collection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-4">
                    <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">Crisis and Damage Control</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300 font-sans">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Rapid response protocols</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Proactive issue resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Reputational recovery plans</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-4">
                    <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">Content Management</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300 font-sans">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Regular profile updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Fresh, engaging posts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                      <span>Consistent brand messaging</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 flex justify-center md:justify-start">
                <a href="#calendly" className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-3.5 text-sm font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 flex items-center gap-2">
                  <span>Protect Your Brand Today</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Section */}
      <section className="relative overflow-hidden bg-rich-black py-24 sm:py-32">
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
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl text-center relative z-10">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-serif bg-rich-dark/90 text-gold-400 ring-1 ring-inset ring-gold-500/20 shadow-lg">
                Optimization for Long-Term Success
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              Keep Your Listing <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Fresh and Thriving</span>
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-[90%] h-[0.4em] w-full fill-gold-300/40" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Optimization isn't a one-and-done deal. Your business evolves, and so do the search algorithms. We stay on top of these changes, continually refining your listing and strategy so you maintain (and grow) your local market share.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            {/* Illustration */}
            <div className="relative mb-12 flex justify-center">
              <div className="relative rounded-xl overflow-hidden h-64 w-full max-w-3xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-4 gap-4 w-full max-w-2xl">
                    {[PencilSquareIcon, PhotoIcon, AdjustmentsHorizontalIcon, ChartBarIcon].map((Icon, i) => (
                      <div key={i} className="flex flex-col items-center justify-center bg-rich-dark/20 backdrop-blur-sm p-4 rounded-lg hover:bg-rich-dark/30 transition-all duration-300">
                        <Icon className="h-10 w-10 text-rich-black" aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 flex justify-center w-full">
                <span className="inline-flex items-center rounded-full bg-rich-dark/90 px-4 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20 shadow-lg">
                  Always evolving, always improving
                </span>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:gap-x-8">
              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-6 shadow-lg ring-1 ring-gold-500/20 transition-all duration-300 hover:shadow-gold-500/10">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">Regular Content Updates</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  Posts, offers, and event announcements to keep your profile active. We create tailored content that resonates with your audience and positions you as an industry authority.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Weekly post scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Seasonal promotions and offers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Event announcements and recaps</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-6 shadow-lg ring-1 ring-gold-500/20 transition-all duration-300 hover:shadow-gold-500/10">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <PhotoIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">High-Quality Images and Videos</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  Showcase products, team photos, or behind-the-scenes glimpses that captivate viewers and bring your business to life in the digital space.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Professional photo optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">360° virtual tours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Short-form video content</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-6 shadow-lg ring-1 ring-gold-500/20 transition-all duration-300 hover:shadow-gold-500/10">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <AdjustmentsHorizontalIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">Keyword and Category Refinements</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  Make sure your listing accurately reflects what you offer and who you serve, with strategic adjustments based on market trends and competition.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Local keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Strategic category selection</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-6 shadow-lg ring-1 ring-gold-500/20 transition-all duration-300 hover:shadow-gold-500/10">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">Analytics and Insights</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  Track profile views, search queries, and customer actions—then tweak strategies for even better results. Data-driven optimization keeps you ahead.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Monthly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Search query analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Conversion tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex items-center justify-center">
              <div className="relative isolate overflow-hidden bg-rich-dark/90 px-6 py-5 shadow-2xl sm:rounded-3xl sm:px-24 sm:py-8 border border-gold-500/20">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">
                    Ready to optimize your Google Business Profile?
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-300 font-sans">
                    Let us help you stay ahead of the competition with a strategy that evolves with your business.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-6">
                    <a
                      href="#calendly"
                      className="rounded-md bg-gradient-to-r from-gold-400 to-gold-500 px-3.5 py-2.5 text-sm font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 flex items-center gap-2"
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
                      <stop offset={1} stopColor="#D4AF37" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="bg-rich-black py-24 sm:py-32 relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl text-center relative z-10">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-serif bg-rich-dark/90 text-gold-400 ring-1 ring-inset ring-gold-500/20 shadow-lg">
                Our Workflow
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              What Working with <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Us Looks Like</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              A streamlined, transparent process that delivers results while keeping you informed every step of the way.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            {/* Step timeline visualization */}
            <div className="relative mb-20">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gold-500/30"></div>
              </div>
              <div className="relative flex justify-between">
                {/* Step markers */}
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${step === 1 ? 'bg-gold-500 border-gold-400' : 'bg-rich-dark border-gold-500/30'} z-10`}>
                      <span className={`text-sm font-serif font-semibold ${step === 1 ? 'text-rich-black' : 'text-gold-400'}`}>{step}</span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-300 hidden sm:block font-serif">Step {step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-rich-dark/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6 shadow-md">
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">
                    <span className="absolute inset-0"></span>
                    Audit and Analysis
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300 font-sans">
                    We take a deep dive into your current GMB listing, reviews, and overall reputation to spot immediate opportunities and issues.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Competitive analysis
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Keyword research
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Reviews assessment
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-rich-dark/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6 shadow-md">
                    <WrenchScrewdriverIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">
                    <span className="absolute inset-0"></span>
                    Cleanup and Setup
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300 font-sans">
                    From removing outdated details to correcting inaccurate info, we tidy up your listing so it's accurate and appealing.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Profile verification
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      NAP consistency
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Category selection
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-rich-dark/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6 shadow-md">
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">
                    <span className="absolute inset-0"></span>
                    Ongoing Management
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300 font-sans">
                    We schedule regular check-ins, respond to reviews on your behalf if needed, and keep your listing fresh with new content.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Weekly updates
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Content calendar
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Review responses
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-rich-dark/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6 shadow-md">
                    <StarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">
                    <span className="absolute inset-0"></span>
                    Review Generation Plan
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300 font-sans">
                    We strategize ways to encourage happy customers to leave feedback, boosting your positive reviews and overall rating.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Custom QR codes
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Email campaigns
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      SMS follow-ups
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-rich-dark/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6 shadow-md">
                    <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">
                    <span className="absolute inset-0"></span>
                    Monitoring and Optimization
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300 font-sans">
                    We watch the metrics, adjust strategies when necessary, and keep you informed about changes in local search trends.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Monthly reports
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      KPI tracking
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-2 py-1 text-xs font-serif text-gold-400 ring-1 ring-inset ring-gold-500/20">
                      Strategy refinement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success indicator */}
            <div className="mt-16 rounded-2xl bg-rich-dark/90 p-8 ring-1 ring-inset ring-gold-500/20 shadow-lg">
              <div className="md:flex md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-lg font-serif font-semibold leading-7 text-foreground">Ready to enhance your Google presence?</h3>
                  <p className="mt-1 text-sm text-gray-300 font-sans">
                    From audit to optimization, our comprehensive process ensures your business stands out when local customers search.
                  </p>
                </div>
                <div className="mt-6 flex md:mt-0">
                  <a
                    href="#calendly"
                    className="rounded-md bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-3 text-sm font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 flex items-center gap-2"
                  >
                    <span>Get Started Today</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Google Section */}
      <section className="relative py-24 sm:py-32 bg-rich-black overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-rich-dark/50 shadow-xl shadow-gold-600/10 ring-1 ring-gold-500/20 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl lg:max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              {/* Content */}
              <div className="md:max-w-xl">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-gold-400 to-gold-500">
                    <MapPinIcon className="h-4 w-4 text-rich-black" aria-hidden="true" />
                  </div>
                  <p className="text-base font-serif font-semibold leading-7 text-gold-400">Expand Your Digital Footprint</p>
                </div>
                <h2 className="mt-4 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
                  Beyond Google: <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Maximizing Your Reach</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                  While Google My Business is crucial for most local businesses, it's not the only online directory that matters. Depending on your industry, other platforms might be even more important for reaching your target audience.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsListingsOpen(true)}
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-4 py-2.5 text-sm font-serif font-semibold text-rich-black shadow-xl hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 hover:translate-y-[-2px]"
                  >
                    <span>View Industry-Specific Listings</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#calendly"
                    className="flex items-center justify-center gap-2 rounded-full bg-rich-dark/90 px-4 py-2.5 text-sm font-serif font-semibold text-gold-400 shadow-sm ring-1 ring-inset ring-gold-500/20 hover:bg-rich-dark hover:ring-gold-500/30 transition-all duration-200"
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
                  <div className="group relative flex items-center justify-center rounded-xl bg-rich-dark/80 p-3 shadow-sm hover:bg-rich-dark hover:shadow-md ring-1 ring-gold-500/20 transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-serif font-bold text-red-400">Yelp</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* TripAdvisor */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-rich-dark/80 p-3 shadow-sm hover:bg-rich-dark hover:shadow-md ring-1 ring-gold-500/20 transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-serif font-bold text-green-400">Trip<br/>Advisor</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* Facebook */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-rich-dark/80 p-3 shadow-sm hover:bg-rich-dark hover:shadow-md ring-1 ring-gold-500/20 transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-serif font-bold text-blue-400">Facebook</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* Apple Maps */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-rich-dark/80 p-3 shadow-sm hover:bg-rich-dark hover:shadow-md ring-1 ring-gold-500/20 transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-serif font-bold text-gray-300">Apple<br/>Maps</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* Bing */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-rich-dark/80 p-3 shadow-sm hover:bg-rich-dark hover:shadow-md ring-1 ring-gold-500/20 transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-lg font-serif font-bold text-blue-300">Bing</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  
                  {/* View More */}
                  <div className="group relative flex items-center justify-center rounded-xl bg-rich-dark/60 p-3 shadow-sm hover:bg-rich-dark hover:shadow-md ring-1 ring-gold-500/30 transition-all duration-200" onClick={() => setIsListingsOpen(true)}>
                    <div className="flex h-12 w-12 items-center justify-center">
                      <span className="text-md font-serif font-semibold text-gold-400">View<br/>More</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature list */}
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-rich-dark/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 ring-1 ring-gold-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <StarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-serif font-semibold leading-7 tracking-tight text-foreground">Consistent Brand Identity</h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      Maintain consistent information, images, and messaging across all your listings for a unified brand presence.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-rich-dark/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 ring-1 ring-gold-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-serif font-semibold leading-7 tracking-tight text-foreground">Industry-Specific Focus</h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      We identify and prioritize the platforms that are most relevant to your specific industry and target audience.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-rich-dark/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 ring-1 ring-gold-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-serif font-semibold leading-7 tracking-tight text-foreground">Reputation Management</h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      Monitor and respond to reviews across all platforms, not just Google, to maintain a stellar online reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="calendly" className="relative isolate overflow-hidden bg-rich-black py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-gold-500/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-rich-dark/90 px-4 py-1.5 text-sm font-serif font-medium text-gold-400 mb-8 ring-1 ring-inset ring-gold-500/20 shadow-lg">
                <SparklesIcon className="mr-1.5 h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                Start Your Journey
              </span>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Ready to Make a <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Lasting First Impression?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans max-w-2xl mx-auto">
                Whether you're new to Google My Business or looking to revamp an existing profile, we'll make sure you're set up for success. From local SEO boosts to reputation recovery, we're here to help you shine.
              </p>
            </div>
            
            <div className="mt-16 relative">
              {/* Decorative elements */}
              <div className="hidden lg:block absolute -top-12 -left-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rich-dark/60 ring-1 ring-inset ring-gold-500/20">
                  <MapPinIcon className="h-10 w-10 text-gold-400/60" aria-hidden="true" />
                </div>
              </div>
              <div className="hidden lg:block absolute -top-16 -right-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rich-dark/60 ring-1 ring-inset ring-gold-500/20">
                  <StarIcon className="h-8 w-8 text-gold-400/60" aria-hidden="true" />
                </div>
              </div>
              
              {/* Card with shadow for Calendly */}
              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/80 shadow-xl ring-1 ring-gold-500/20">
                <div className="p-8 sm:p-10">
                  {/* Top section with benefits */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                          <CheckIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-serif font-medium text-foreground">Free 30-minute consultation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                          <CheckIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-serif font-medium text-foreground">Custom action plan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-rich-dark/80 border border-gold-500/30 text-gold-400">
                          <CheckIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-serif font-medium text-foreground">No obligation next steps</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Calendly integration */}
                  <div className="bg-rich-black/60 p-6 rounded-xl border border-gold-500/20">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
                      Book Your Strategy Session Now
                    </h3>
                    <ClientCalendly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ListingsPopup open={isListingsOpen} setOpen={setIsListingsOpen} />
    </PageLayout>
  );
}
