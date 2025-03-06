import PageLayout from '@/components/PageLayout';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PortfolioCard from '@/components/PortfolioCard';
import {
  GlobeAltIcon,
  PresentationChartLineIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import ClientCalendly from '@/components/ClientCalendly';

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-24 lg:pt-28 bg-rich-black">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-x-0 -top-40 -z-5 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300 to-gold-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left column - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 text-gold-300 text-sm font-medium mb-6 border border-gold-500/20">
                <span className="flex-1">Professional Web Services</span>
                <div className="w-px h-4 bg-gold-500/30"></div>
                <span className="text-gold-400">Results Guaranteed</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl opacity-30"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-gray-100 drop-shadow-sm">Website Design and</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    Development Services
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-serif font-medium tracking-tight text-gray-200">
                    Bring Your
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Brand</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                    </span>
                    to Life
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-300 font-sans max-w-2xl">
                  Create a digital home that's as inviting, functional, and memorable as your business itself. And enjoy the added benefit of having it work as your 24/7 salesperson!
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-gold-500/10 rounded-full blur-2xl opacity-30"></div>
                <Link
                  href="#calendly"
                  className="relative rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/10 hover:from-gold-400 hover:to-gold-500 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="relative">
                <Image
                  src="/digital-marketing.svg"
                  alt="Website design and development services"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-xl border border-gold-500/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-b from-rich-black to-rich-black/90">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gold-300 to-gold-200 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-200 sm:text-4xl">
                Website Design and Development That Delivers 
                <span className="relative inline-block px-2">
                  <span className="relative z-10 bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">Results</span>
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                </span>
              </h2>
              <p className="mt-4 text-xl font-serif font-semibold text-gold-300">
                It's More Than Just a Pretty Face
              </p>
              <div className="mt-8 flex justify-center">
                <div className="relative max-w-3xl">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                  <p className="pl-6 text-lg leading-8 text-gray-300 font-sans text-left">
                    Your website is often the first interaction someone has with your business. It's your digital storefront, your brand ambassador, and your primary sales tool – all rolled into one. We don't just build websites; we build online experiences that captivate your audience, communicate your value, and drive real results.
                  </p>
                  <p className="pl-6 mt-6 text-lg leading-8 text-gray-300 font-sans text-left">
                    Forget cookie-cutter templates and outdated designs. We create custom websites that are as unique as your business, strategically designed to achieve your specific goals.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="relative overflow-hidden rounded-lg border border-gold-500/20 bg-rich-black/60 p-8 shadow-sm transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-500/10 rounded-full opacity-30"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-500/10 text-gold-300 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-100">Custom Design</h3>
                  <p className="mt-2 text-gray-300 font-sans">Tailored specifically to your brand identity and business objectives.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="relative overflow-hidden rounded-lg border border-gold-500/20 bg-rich-black/60 p-8 shadow-sm transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-500/10 rounded-full opacity-30"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-500/10 text-gold-300 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-100">Responsive Design</h3>
                  <p className="mt-2 text-gray-300 font-sans">Optimized for all devices, ensuring a seamless experience for all visitors.</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="relative overflow-hidden rounded-lg border border-gold-500/20 bg-rich-black/60 p-8 shadow-sm transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-500/10 rounded-full opacity-30"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-500/10 text-gold-300 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-100">Conversion-Focused</h3>
                  <p className="mt-2 text-gray-300 font-sans">Strategically designed to turn visitors into leads and customers.</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
              <Link
                href="#calendly"
                className="relative rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/10 hover:from-gold-400 hover:to-gold-500 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Start Your Website Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Our Approach and Process */}
      <div className="relative py-24 sm:py-32 overflow-hidden bg-rich-black/90">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-rich-black/50 shadow-xl shadow-gold-600/10 ring-1 ring-gold-500/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-200 sm:text-4xl">
                Our Approach and Process: 
                <span className="relative ml-2 inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">How We Bring Your Vision to Life</span>
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans max-w-3xl mx-auto">
                We don't just slap together a website and call it a day. We take a strategic, holistic approach, combining beautiful design with powerful functionality and a focus on conversion. Here's how we do it:
              </p>
            </div>

            {/* Process Step 1 - Discovery and Planning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left column - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -left-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="relative bg-rich-black/60 p-6 rounded-2xl shadow-xl border border-gold-500/20">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                      alt="Discovery and Planning process"
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-rich-black font-serif font-bold text-xl">01</div>
                </div>
              </div>
              
              {/* Right column - Text content */}
              <div className="order-1 lg:order-2">
                <div className="bg-rich-black/60 p-8 rounded-2xl shadow-sm border border-gold-500/20">
                  <h3 className="text-2xl font-serif font-bold text-gray-200 mb-4">Discovery and Planning</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                    <p className="pl-6 text-lg leading-8 text-gray-300 font-sans">
                      We start by understanding your brand, audience, and objectives. What makes you unique? Which elements are critical for your customers? By pinpointing these details, we lay the groundwork for a site that truly align with your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Step 2 - Design and Wireframing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left column - Text content */}
              <div>
                <div className="bg-rich-black/60 p-8 rounded-2xl shadow-sm border border-gold-500/20">
                  <h3 className="text-2xl font-serif font-bold text-gray-200 mb-4">Design and Wireframing</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                    <p className="pl-6 text-lg leading-8 text-gray-300 font-sans">
                      Next, we create a visual blueprint that maps out your site's layout, navigation, and key features. This step ensures clarity on how users will flow from one section to another and helps us catch potential issues before any heavy coding begins.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right column - Image */}
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="relative bg-rich-black/60 p-6 rounded-2xl shadow-xl border border-gold-500/20">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Design and Wireframing process"
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-rich-black font-serif font-bold text-xl">02</div>
                </div>
              </div>
            </div>

            {/* Process Step 3 - Content and Messaging */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left column - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -left-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="relative bg-rich-black/60 p-6 rounded-2xl shadow-xl border border-gold-500/20">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                      alt="Content and Messaging process"
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-rich-black font-serif font-bold text-xl">03</div>
                </div>
              </div>
              
              {/* Right column - Text content */}
              <div className="order-1 lg:order-2">
                <div className="bg-rich-black/60 p-8 rounded-2xl shadow-sm border border-gold-500/20">
                  <h3 className="text-2xl font-serif font-bold text-gray-200 mb-4">Content and Messaging</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                    <p className="pl-6 text-lg leading-8 text-gray-300 font-sans">
                      We can help you craft compelling website copy that speaks directly to your target audience, clearly communicates your value proposition, and encourages action.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Step 4 - Development and Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left column - Text content */}
              <div>
                <div className="bg-rich-black/60 p-8 rounded-2xl shadow-sm border border-gold-500/20">
                  <h3 className="text-2xl font-serif font-bold text-gray-200 mb-4">Development and Integration</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                    <p className="pl-6 text-lg leading-8 text-gray-300 font-sans">
                      With a solid framework in place, copy and design ready, our developers bring everything to life. We focus on clean, efficient code for optimal performance, leveraging the right platforms and tools to build a secure, scalable, and responsive site.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right column - Image */}
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="relative bg-rich-black/60 p-6 rounded-2xl shadow-xl border border-gold-500/20">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                      alt="Development and Integration process"
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-rich-black font-serif font-bold text-xl">04</div>
                </div>
              </div>
            </div>

            {/* Process Step 5 - Testing and Launch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left column - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -left-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="relative bg-rich-black/60 p-6 rounded-2xl shadow-xl border border-gold-500/20">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
                      alt="Testing and Launch process"
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-rich-black font-serif font-bold text-xl">05</div>
                </div>
              </div>
              
              {/* Right column - Text content */}
              <div className="order-1 lg:order-2">
                <div className="bg-rich-black/60 p-8 rounded-2xl shadow-sm border border-gold-500/20">
                  <h3 className="text-2xl font-serif font-bold text-gray-200 mb-4">Testing and Launch</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                    <p className="pl-6 text-lg leading-8 text-gray-300 font-sans">
                      Before your site goes live, we run it through rigorous checks—mobile responsiveness, page speed, usability testing—to make sure everything's perfect. After launch, we stick around to watch how visitors interact with the site, ready to make tweaks if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Step 6 - Ongoing Support and Growth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Text content */}
              <div>
                <div className="bg-rich-black/60 p-8 rounded-2xl shadow-sm border border-gold-500/20">
                  <h3 className="text-2xl font-serif font-bold text-gray-200 mb-4">Ongoing Support and Growth</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                    <p className="pl-6 text-lg leading-8 text-gray-300 font-sans">
                      Websites are never a "set it and forget it" venture. From updating plugins and security patches to refreshing and creating content, we're here to keep your digital home healthy and in top shape.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right column - Image */}
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="relative bg-rich-black/60 p-6 rounded-2xl shadow-xl border border-gold-500/20">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80"
                      alt="Ongoing Support and Growth process"
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-rich-black font-serif font-bold text-xl">06</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-20 flex justify-center">
              <Link
                href="#calendly"
                className="relative rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/10 hover:from-gold-400 hover:to-gold-500 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Ready to Get Started?</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features & Benefits Section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-rich-black to-rich-black/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-200 sm:text-4xl">
              Key Features & <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 font-sans">
              What sets our websites apart and why our clients love working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {/* Feature 1 */}
            <div className="bg-rich-black/60 rounded-2xl shadow-sm border border-gold-500/20 p-8 transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-100 mb-3">Custom, On-Brand Design</h3>
              <p className="text-gray-300 font-sans">No cookie-cutter templates here. We tailor every pixel to match your brand's voice and style.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-rich-black/60 rounded-2xl shadow-sm border border-gold-500/20 p-8 transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-100 mb-3">Mobile Optimization</h3>
              <p className="text-gray-300 font-sans">Expect a seamless experience on desktops, tablets, and smartphones, so you never miss out on potential customers.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-rich-black/60 rounded-2xl shadow-sm border border-gold-500/20 p-8 transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-100 mb-3">Scalability</h3>
              <p className="text-gray-300 font-sans">Need new features down the road? Our flexible frameworks let us adapt to your evolving needs.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-rich-black/60 rounded-2xl shadow-sm border border-gold-500/20 p-8 transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-100 mb-3">Easy Content Management</h3>
              <p className="text-gray-300 font-sans">Want to add a blog post or update a product description? We'll set you up with a user-friendly CMS so you can make changes anytime - or use our SEO services to automate this.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-rich-black/60 rounded-2xl shadow-sm border border-gold-500/20 p-8 transition-all duration-200 hover:shadow-gold-500/10 hover:border-gold-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-100 mb-3">Built-In SEO Foundations</h3>
              <p className="text-gray-300 font-sans">We follow best practices for search engine rankings, giving your site a boost from the get-go.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div id="calendly" className="py-24 sm:py-32 bg-rich-black/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-200 sm:text-4xl">
              Ready to Get <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">Started?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Ready to turn your online presence into your most valuable business asset? Let's build a site that captures who you are and where you're headed. We're excited to hear about your vision—and even more excited to bring it to life.
            </p>
            
            <div className="mt-10">
              <ClientCalendly />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="relative py-24 sm:py-32 bg-rich-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="h-full w-full">
            {/* Dots Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217, 175, 88, 0.15) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 via-transparent to-gold-900/20"></div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-serif font-medium tracking-tight text-gray-200 sm:text-4xl">
              Portfolio
              <span className="block text-gold-300 mt-1">Looking for Samples?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Please take a look at the businesses under our care. Each of them is given the love and effort they deserve to not only expand their online presence but also bring in revenue. How about you? When do you plan to grow?
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <PortfolioCard
              title="Luxury Real Estate"
              description="A premium real estate website with virtual tours and advanced property filtering."
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
              href="https://website-alchemy.com/portfolio/real-estate"
            />
            
            <PortfolioCard
              title="Artisan Bakery"
              description="E-commerce site with online ordering system and loyalty program for a local bakery."
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              href="https://website-alchemy.com/portfolio/bakery"
            />
            
            <PortfolioCard
              title="Wellness Spa"
              description="Appointment booking system and service showcase for a high-end wellness spa."
              image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              href="https://website-alchemy.com/portfolio/spa"
            />
          </div>
          
          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link 
              href="https://website-alchemy.com/portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-rich-black font-serif font-medium hover:from-gold-400 hover:to-gold-500 transition-all duration-200"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Other Services Section */}
      {/* <div className="py-24 sm:py-32 bg-rich-black/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-200 sm:text-4xl">
              Other <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 font-sans">
              Enhance your online presence with our complete digital marketing solutions
            </p>
          </div>
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <ServiceCard
              title="Website Design"
              description="Create stunning, responsive websites that convert visitors into customers. Our designs are modern, fast, and optimized for all devices."
              href="/services/website-design"
              icon={GlobeAltIcon}
            />
            <ServiceCard
              title="Social Media Marketing"
              description="Build your brand presence and engage with your audience across all major social platforms. Data-driven strategies that deliver results."
              href="/services/social-media-marketing"
              icon={PresentationChartLineIcon}
            />
            <ServiceCard
              title="Reputation Management"
              description="Monitor, manage and improve your online reputation. Build trust with potential customers by showcasing authentic reviews and testimonials."
              href="/services/reputation-management"
              icon={ChatBubbleBottomCenterTextIcon}
            />
          </dl>
        </div>
      </div> */}
    </PageLayout>
  );
}
