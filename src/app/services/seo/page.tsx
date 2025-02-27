import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import ClientCalendly from '@/components/ClientCalendly';
import Image from 'next/image';

const features = [
  'Keyword research and analysis',
  'On-page SEO optimization',
  'Technical SEO improvements',
  'Content strategy development',
  'Link building',
  'Local SEO optimization',
  'Performance monitoring',
  'Competitor analysis',
  'Mobile optimization',
  'Regular reporting'
];

const visibilityFeatures = [
  {
    title: 'Increased Traffic and Conversions',
    description: 'More visitors who actually need your products or services.'
  },
  {
    title: 'Better User Experience',
    description: 'A well-optimized site is easier to navigate, which makes for happier customers.'
  },
  {
    title: 'Sustainable Growth',
    description: 'Over time, your organic presence can outpace fluctuations in ad costs or social media algorithms.'
  },
  {
    title: 'Measurable Results',
    description: 'We provide clear analytics so you know exactly what\'s working—and what needs refinement.'
  }
];

export default function SEOPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
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
                <span className="flex-1">Professional SEO Services</span>
                <div className="w-px h-4 bg-indigo-200"></div>
                <span className="text-indigo-500">Results Focused</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">Dominate</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Search Results
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-gray-800">
                    Get Found
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Organically</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-indigo-100 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl">
                  Elevate your search rankings, attract quality traffic, and stay ahead of your competition—without the guesswork. Our data-driven SEO approach drives real, measurable results.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-indigo-50 rounded-full blur-2xl opacity-60"></div>
                <a
                  href="#calendly"
                  className="relative rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-indigo-100 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70 -z-10"></div>
              <Image
                src="/services/seo.svg"
                alt="SEO services illustration"
                width={1000}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why SEO Matters Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="absolute top-24 left-0 -z-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-24 right-0 -z-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <div className="flex justify-center">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600 ring-1 ring-inset ring-indigo-600/25 mb-4">
                <div className="h-3 w-3 rounded-full bg-indigo-600"></div>
                <div className="absolute h-11 w-11 animate-ping rounded-full bg-indigo-600/10 ring-1 ring-inset ring-indigo-600/25"></div>
              </div>
            </div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-wide">Why SEO Matters</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Be <span className="bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">Seen</span>,
              Be <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">Chosen</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Search engine optimization isn't just about chasing algorithms; it's about connecting with real people who need what you offer.
              Whether they're local customers searching for services nearby or online shoppers looking for the perfect product,
              showing up on the first page of search results builds credibility and drives conversions.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-20 blur-sm transition duration-300 group-hover:opacity-100"></div>
                <div className="relative rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-100 h-full flex flex-col">
                  <div className="mb-6 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Term Value</h3>
                  <p className="text-gray-600 flex-grow">Unlike paid ads, SEO improvements can keep driving traffic for months—even years—after you've done the work.</p>
                  <div className="w-12 h-1 bg-indigo-100 mt-4"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-20 blur-sm transition duration-300 group-hover:opacity-100"></div>
                <div className="relative rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-100 h-full flex flex-col">
                  <div className="mb-6 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Intent Audience</h3>
                  <p className="text-gray-600 flex-grow">People who find you organically are often ready to take action, leading to higher-quality leads.</p>
                  <div className="w-12 h-1 bg-indigo-100 mt-4"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-20 blur-sm transition duration-300 group-hover:opacity-100"></div>
                <div className="relative rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-100 h-full flex flex-col">
                  <div className="mb-6 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Authority</h3>
                  <p className="text-gray-600 flex-grow">Consistently ranking well positions you as a credible option in your industry.</p>
                  <div className="w-12 h-1 bg-indigo-100 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50/50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4 bg-indigo-50 rounded-full blur-3xl opacity-40 -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-4 mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
              <span>Our Approach</span>
              <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              How We Make Your Website
              <span className="block bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mt-2">
                Search-Ready
              </span>
            </h2>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              When was the last time you clicked to the second or third page of Google? Exactly. If you're not showing up where customers are looking,
              you're missing out on potential leads every day. At Website Alchemy, we take an evidence-based approach to SEO,
              ensuring your business doesn't just get found—it shines.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature} className="relative pl-16 group">
                {/* Animated number */}
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md ring-1 ring-gray-100 group-hover:bg-indigo-50 transition-colors duration-200">
                  <span className="text-xl font-bold text-indigo-600">{index + 1}</span>
                  <div className="absolute h-full w-full rounded-lg bg-indigo-50 opacity-0 group-hover:animate-ping group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                
                <div className="group-hover:-translate-y-1 transition-transform duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span>{feature}</span>
                    <div className="h-px flex-grow ml-4 bg-indigo-100"></div>
                  </h3>
                  <p className="text-gray-600">
                    Our expert team ensures your website meets the highest standards of search optimization through comprehensive {feature.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 lg:mt-24 flex justify-center">
            <a
              href="#calendly"
              className="relative rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:ring-indigo-300 hover:bg-indigo-50/50 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Schedule Your SEO Strategy Session</span>
              <ArrowUpRightIcon className="w-4 h-4 text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Transform Visibility Section */}
      <section className="py-24 sm:py-32 bg-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Transform Visibility into Real-World Impact</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {visibilityFeatures.map((item, index) => (
                <div key={item.title} className="flex flex-col bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-8 flex justify-end">
                    <div className="w-12 h-1 bg-indigo-100"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO as Cornerstone Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <div className="flex justify-center">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600 ring-1 ring-inset ring-indigo-600/25 mb-4">
                <div className="h-3 w-3 rounded-full bg-indigo-600"></div>
                <div className="absolute h-12 w-12 animate-ping rounded-full bg-indigo-600/10 ring-1 ring-inset ring-indigo-600/25"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO as a <span className="relative inline-block">
                <span className="relative z-10">Cornerstone</span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-indigo-100 -rotate-1 -z-10"></div>
              </span> of Your Marketing Mix
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SEO isn't just another marketing channel—it's the foundation that makes all your other marketing efforts more effective.
              From social media to email marketing, when your website ranks well, every aspect of your digital presence becomes more powerful.
            </p>
          </div>
          
          <div className="mt-16 relative">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start">
              {/* Left Column: Marketing Channels */}
              <div className="lg:col-span-1 space-y-10">
                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Social Media Amplification
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    When your website has strong SEO, your social media posts drive more qualified traffic and conversions.
                  </p>
                </div>
                
                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Email Marketing Enhancement
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    SEO-optimized landing pages increase the effectiveness of your email campaigns and boost conversion rates.
                  </p>
                </div>
              </div>
              
              {/* Middle Column: Visual */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative max-w-xs overflow-hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200/30">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <div className="h-full w-full bg-gradient-to-br from-indigo-50 to-white p-6 flex flex-col items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-indigo-100 mb-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">SEO Foundation</h4>
                        <p className="text-sm text-gray-600">The cornerstone that strengthens all marketing channels</p>
                      </div>
                      <div className="mt-6 grid grid-cols-3 gap-2 w-full">
                        <div className="h-1 bg-indigo-600 rounded"></div>
                        <div className="h-1 bg-indigo-400 rounded"></div>
                        <div className="h-1 bg-indigo-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: More Marketing Channels */}
              <div className="lg:col-span-1 space-y-10">
                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Paid Advertising Efficiency
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Strong organic rankings improve your Quality Score, lowering your cost-per-click in paid campaigns.
                  </p>
                </div>
                
                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-md transform transition-transform group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Content Marketing Synergy
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    SEO-driven content strategy ensures your blogs, videos, and resources reach the right audience at the right time.
                  </p>
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
              <span>Create your integrated SEO strategy</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="py-24 sm:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
              <span className="flex-1">Free Strategy Session</span>
              <div className="w-px h-4 bg-indigo-200"></div>
              <span className="text-indigo-500">No Obligation</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Boost</span> Your Search Rankings?
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 relative">
              <div className="absolute -left-8 -top-8 w-16 h-16 bg-indigo-100 rounded-full blur-xl opacity-60 -z-10"></div>
              Book a free consultation with our SEO experts and discover how we can help your business climb to the top of search results.
            </p>
            
            <div className="mt-12 relative">
              <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
              </div>
              
              <div className="relative p-6 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200/50 max-w-4xl mx-auto">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-4">
                  <ClientCalendly />
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <span className="text-gray-600">30-Min Session</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Expert Advice</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                      </svg>
                    </div>
                    <span className="text-gray-600">100% Free</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>No credit card required. Cancel anytime.</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
