'use client';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import ClientCalendly from '@/components/ClientCalendly';

const features = [
  'Email campaign strategy',
  'List management and segmentation',
  'Custom email template design',
  'A/B testing',
  'Automation workflows',
  'Performance analytics',
  'Lead nurturing campaigns',
  'Newsletter creation',
  'Drip campaign setup',
  'Deliverability optimization'
];

export default function EmailMarketingPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-rich-black">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>

        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40 relative z-1">
          <div className="px-6 lg:px-0 lg:pt-4 relative z-10">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 text-sm rounded-full bg-rich-dark/90 text-gold-400 ring-1 ring-inset ring-gold-500/20 shadow-lg font-serif">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>95% Open Rate Success</span>
                </div>
                <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500 drop-shadow-sm">
                  Email Marketing Services
                </h1>
                <p className="mt-6 text-xl font-serif leading-8 text-foreground">
                  Marketing on a More Personal Level for Maximum Results
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                  Nurture relationships, boost engagement, and drive consistent growth—one inbox at a time. We help you create email campaigns that get noticed, get opened, and get results.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#calendly"
                    className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-3 text-sm font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 ease-in-out"
                  >
                    Book a FREE Consultation
                  </a>
                  <a href="#benefits" className="text-sm font-serif font-semibold leading-6 text-gold-400 hover:text-gold-300">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen relative z-10">
            <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-gold-500/20">
              <div className="bg-rich-dark/90">
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 h-12 flex items-center px-4 text-rich-black">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm font-serif font-medium">Email Campaign Dashboard</div>
                </div>
                <div className="p-6 bg-rich-dark/90">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-rich-black/80 p-4 rounded-lg border border-gold-500/20">
                      <div className="text-sm text-gold-400 font-serif font-medium">Open Rate</div>
                      <div className="text-2xl font-serif font-bold text-foreground">42.8%</div>
                      <div className="text-xs text-gold-400 mt-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                          <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" />
                        </svg>
                        +12.4% vs. avg
                      </div>
                    </div>
                    <div className="bg-rich-black/80 p-4 rounded-lg border border-gold-500/20">
                      <div className="text-sm text-gold-400 font-serif font-medium">Click Rate</div>
                      <div className="text-2xl font-serif font-bold text-foreground">18.3%</div>
                      <div className="text-xs text-gold-400 mt-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                          <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" />
                        </svg>
                        +8.7% vs. avg
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-rich-black/80 rounded w-full">
                      <div className="h-8 bg-gradient-to-r from-gold-400 to-gold-500 rounded" style={{ width: '70%' }}></div>
                    </div>
                    <div className="h-8 bg-rich-black/80 rounded w-full">
                      <div className="h-8 bg-gradient-to-r from-gold-500 to-gold-300 rounded" style={{ width: '85%' }}></div>
                    </div>
                    <div className="h-8 bg-rich-black/80 rounded w-full">
                      <div className="h-8 bg-gradient-to-r from-gold-300 to-gold-400 rounded" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 sm:py-32 bg-rich-black relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        {/* Decorative pattern background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" aria-hidden="true" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(212, 175, 55, 0.5)\'/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px' }}
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-3xl lg:text-center relative z-10">
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-2xl opacity-20" aria-hidden="true">
              <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-gold-300/20 to-gold-500/20"
                style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 40.2%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.8% 41.9%)' }}
              ></div>
            </div>
            
            <div className="inline-flex items-center justify-center mb-6">
              <span className="inline-flex items-center rounded-md bg-rich-dark/90 px-3 py-1 text-sm font-serif font-medium text-gold-400 ring-1 ring-inset ring-gold-500/20 shadow-lg">
                Your Direct Line to Your Audience
              </span>
            </div>
            
            <h2 className="mt-2 text-4xl font-serif font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
              Build Lasting Relationships With Email Marketing
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Long before chatbots and social media, email was the digital channel for communication—and it's still going strong. Why? Because it's personal, flexible, and puts you directly in front of people who want to hear from you.
            </p>
          </div>
          
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {/* High ROI Potential */}
              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20 transition-all duration-200 hover:shadow-gold-500/10 hover:-translate-y-1">
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/3 translate-x-1/3 transform rounded-full bg-gold-400/20 opacity-20 blur-3xl"></div>
                
                <div className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground">High ROI Potential</h3>
                  
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    Dollar for dollar, email marketing often yields one of the best returns in digital marketing.
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2">
                    <div className="text-sm font-serif font-semibold text-gold-400">4200%</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-500 to-transparent"></div>
                    <div className="text-sm text-gray-400 font-sans">Average ROI</div>
                  </div>
                </div>
              </div>
              
              {/* Audience Ownership */}
              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20 transition-all duration-200 hover:shadow-gold-500/10 hover:-translate-y-1">
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/3 translate-x-1/3 transform rounded-full bg-gold-400/20 opacity-20 blur-3xl"></div>
                
                <div className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground">Audience Ownership</h3>
                  
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    Unlike social media where algorithms can bury your posts, your email list is yours to engage anytime.
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2">
                    <div className="text-sm font-serif font-semibold text-gold-400">100%</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-500 to-transparent"></div>
                    <div className="text-sm text-gray-400 font-sans">Direct access</div>
                  </div>
                </div>
              </div>
              
              {/* Personalization */}
              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 shadow-xl ring-1 ring-gold-500/20 transition-all duration-200 hover:shadow-gold-500/10 hover:-translate-y-1">
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/3 translate-x-1/3 transform rounded-full bg-gold-400/20 opacity-20 blur-3xl"></div>
                
                <div className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rich-dark/80 border border-gold-500/30 text-gold-400 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground">Personalization</h3>
                  
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    Segment by interests, behaviors, and purchase history to ensure each message speaks directly to its audience.
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2">
                    <div className="text-sm font-serif font-semibold text-gold-400">+26%</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-500 to-transparent"></div>
                    <div className="text-sm text-gray-400 font-sans">Higher open rates</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-14 flex justify-center">
              <a href="#process" className="inline-flex items-center gap-x-2 rounded-full bg-rich-dark/90 px-4 py-2.5 text-sm font-serif font-semibold text-gold-400 shadow-sm ring-1 ring-inset ring-gold-500/20 hover:bg-rich-dark hover:ring-gold-500/30 transition-all duration-200">
                Learn about our process
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-24 bg-rich-black overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-serif font-medium bg-rich-dark/90 text-gold-400 mb-4 ring-1 ring-inset ring-gold-500/20 shadow-lg">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-gold-300 to-gold-500 text-transparent bg-clip-text">
              How We Elevate Your Inbox Game
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 font-sans max-w-3xl mx-auto">
              Email marketing isn't about blasting out spam; it's about building relationships with your audience and delivering valuable content directly to their inbox. We help you create email campaigns that get noticed, get opened, and get results.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {/* Strategy and Segmentation */}
              <div className="relative p-8 rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-1">
                {/* Connecting line to next step */}
                <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-gold-500/30 to-transparent hidden lg:block"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0.5 h-16 bg-gradient-to-b from-gold-500/30 to-transparent lg:hidden"></div>
                
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 p-3 shadow-lg">
                  <div className="rounded-full bg-rich-black p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gold-400">
                      <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-serif font-medium bg-rich-dark/80 text-gold-400 mb-4 ring-1 ring-inset ring-gold-500/20">
                    Step 1
                  </span>
                  <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Strategy and Segmentation</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto my-3"></div>
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    We start by getting to know your goals, audience, and brand voice. Then, we organize your subscribers into meaningful groups so every message feels tailor-made.
                  </p>
                </div>
              </div>
              
              {/* Content Creation and Design */}
              <div className="relative p-8 rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-1 lg:mt-12">
                {/* Connecting line to next step */}
                <div className="absolute -left-4 top-1/2 w-8 h-0.5 bg-gradient-to-l from-gold-500/30 to-transparent hidden lg:block"></div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gold-500/30 to-transparent lg:hidden"></div>
                
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 p-3 shadow-lg">
                  <div className="rounded-full bg-rich-black p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gold-400">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-serif font-medium bg-rich-dark/80 text-gold-400 mb-4 ring-1 ring-inset ring-gold-500/20">
                    Step 2
                  </span>
                  <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Content Creation and Design</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto my-3"></div>
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    Eye-catching layouts, concise copy, and genuine brand storytelling come together to make your emails hard to resist.
                  </p>
                </div>
              </div>

              {/* Automation and Campaign Flows */}
              <div className="relative p-8 rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-1">
                {/* Connecting line to next step */}
                <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-gold-500/30 to-transparent hidden lg:block"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0.5 h-16 bg-gradient-to-b from-gold-500/30 to-transparent lg:hidden"></div>
                
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 p-3 shadow-lg">
                  <div className="rounded-full bg-rich-black p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gold-400">
                      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      <path fillRule="evenodd" d="M6.75 2.25C1.5 3.839 0 6.912 0 11.25c0 4.337 3.375 7.875 7.875 7.875 4.5 0 8.25-3.538 8.25-7.875 0-4.338-3.375-7.875-7.875-7.875zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-serif font-medium bg-rich-dark/80 text-gold-400 mb-4 ring-1 ring-inset ring-gold-500/20">
                    Step 3
                  </span>
                  <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Automation and Campaign Flows</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto my-3"></div>
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    Whether it's a welcome series, cart abandonment sequence, or product launch drip, we set up automations that nurture leads and drive conversions, even while you sleep.
                  </p>
                </div>
              </div>

              {/* Testing and Optimization */}
              <div className="relative p-8 rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-1 lg:mt-12">
                {/* Connecting line to final step */}
                <div className="absolute -left-4 top-1/2 w-8 h-0.5 bg-gradient-to-l from-gold-500/30 to-transparent hidden lg:block"></div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gold-500/30 to-transparent lg:hidden"></div>
                
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 p-3 shadow-lg">
                  <div className="rounded-full bg-rich-black p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gold-400">
                      <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-serif font-medium bg-rich-dark/80 text-gold-400 mb-4 ring-1 ring-inset ring-gold-500/20">
                    Step 4
                  </span>
                  <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Testing and Optimization</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto my-3"></div>
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    We'll keep tabs on overall performance, learning which campaigns resonate best and where new opportunities lie. It's all about growing your list and improving engagement over time.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Analytics and Growth - Special emphasis card */}
            <div className="mt-20 mx-auto max-w-xl relative">
              {/* Final step connector line */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent to-gold-500/30"></div>
              
              <div className="relative p-8 rounded-2xl bg-rich-dark/80 shadow-xl border border-gold-500/30 hover:shadow-gold-500/20 transition-all duration-300">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rich-black">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V7.5a1.875 1.875 0 011.875-1.875z" />
                  </svg>
                </div>
                <div className="mt-10 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-serif font-medium bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black mb-4 shadow-md">
                    Final Step
                  </span>
                  <h3 className="text-2xl font-serif font-bold leading-8 tracking-tight text-foreground">Analytics and Growth</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto my-4"></div>
                  <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                    We'll keep tabs on overall performance, learning which campaigns resonate best and where new opportunities lie. It's all about growing your list and improving engagement over time.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-16 text-center">
              <a href="#calendly" className="inline-flex items-center px-6 py-3 text-base font-serif font-medium rounded-md shadow-lg text-rich-black bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-400 hover:shadow-gold-500/20 focus:outline-none transition-all duration-300 transform hover:-translate-y-1">
                <span>Get started with email marketing</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Add some custom styles for animations */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
        
        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="relative py-24 bg-rich-black overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-7">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rich-dark/90 border border-gold-500/20 shadow-lg">
                <span className="text-sm font-serif font-medium text-gold-400">Omnichannel Marketing</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">
                <span className="block text-gray-400 font-light">Integrating Email with</span>
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Your Bigger Picture</span>
              </h2>
              
              <p className="text-base leading-7 text-gray-300 font-sans max-w-xl">
                Email marketing works wonders on its own—but pair it with a polished website, an active social media presence, and effective SEO, and you've got a force multiplier. By staying consistent across all channels, you create a seamless brand experience that meets customers wherever they are.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#calendly" className="inline-flex items-center px-6 py-3 text-base font-serif font-medium rounded-full shadow-lg text-rich-black bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-400 hover:shadow-gold-500/20 transition-all duration-300">
                  <span>Book a FREE Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a href="#benefits" className="inline-flex items-center px-6 py-3 text-base font-serif font-medium rounded-full text-gold-400 bg-rich-dark/90 hover:bg-rich-dark border border-gold-500/20 hover:border-gold-500/30 focus:outline-none transition-all duration-300">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative mt-12 lg:mt-0">
                <div className="relative bg-rich-dark/90 rounded-3xl shadow-lg border border-gold-500/20 p-8">
                  <div className="flex items-center justify-between gap-4 pt-8 pb-12">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-rich-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="text-sm font-serif font-medium text-foreground">Email</span>
                    </div>
                    
                    <div className="h-px w-16 bg-gold-500/20"></div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-rich-black" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16z" />
                        </svg>
                      </div>
                      <span className="text-sm font-serif font-medium text-foreground">Website</span>
                    </div>
                    
                    <div className="h-px w-16 bg-gold-500/20"></div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-rich-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-serif font-medium text-foreground">Social</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-rich-dark/90 px-5 py-2 rounded-full border border-gold-500/20">
                    <span className="text-sm font-serif font-medium text-gold-400">Seamless Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-28 bg-rich-black overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rich-dark/90 border border-gold-500/20 shadow-lg mb-6">
              <span className="text-sm font-serif font-medium text-gold-400">Proven Results</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-6">
              <span className="text-foreground">Why Our Clients</span>
              <span className="block bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent mt-1">Love Email Marketing</span>
            </h2>
            
            <p className="text-xl text-gray-300 font-sans mx-auto max-w-2xl">
              Email isn't just another marketing channel—it's a direct connection to your audience that delivers real business impact.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Steady Revenue Stream */}
            <div className="group relative bg-rich-dark/90 p-8 pt-14 rounded-3xl shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
              {/* Icon container */}
              <div className="absolute -top-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rich-black">
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-4">Steady Revenue Stream</h3>
              
              <p className="text-gray-300 font-sans leading-relaxed flex-grow">
                Turn subscribers into loyal customers who consistently return for your products or services.
              </p>
              
              <div className="mt-6 w-full">
                <div className="h-px w-full bg-gold-500/10"></div>
                <div className="flex items-center justify-center mt-4">
                  <button className="text-xs font-serif font-semibold text-gold-400 uppercase tracking-wider py-2 px-4 rounded-full bg-rich-dark/80 border border-gold-500/20 hover:bg-rich-dark transition-colors duration-200">
                    Measurable ROI
                  </button>
                </div>
              </div>
            </div>

            {/* Stronger Brand Loyalty */}
            <div className="group relative bg-rich-dark/90 p-8 pt-14 rounded-3xl shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
              {/* Icon container */}
              <div className="absolute -top-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rich-black">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-4">Stronger Brand Loyalty</h3>
              
              <p className="text-gray-300 font-sans leading-relaxed flex-grow">
                Consistent, valuable updates make people remember you—and trust you when it's time to buy.
              </p>
              
              <div className="mt-6 w-full">
                <div className="h-px w-full bg-gold-500/10"></div>
                <div className="flex items-center justify-center mt-4">
                  <button className="text-xs font-serif font-semibold text-gold-400 uppercase tracking-wider py-2 px-4 rounded-full bg-rich-dark/80 border border-gold-500/20 hover:bg-rich-dark transition-colors duration-200">
                    75% Customer Retention
                  </button>
                </div>
              </div>
            </div>

            {/* Flexibility and Control */}
            <div className="group relative bg-rich-dark/90 p-8 pt-14 rounded-3xl shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
              {/* Icon container */}
              <div className="absolute -top-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rich-black">
                    <path fillRule="evenodd" d="M15 3.75A2.25 2.25 0 0012 6v9a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0015 3.75z" />
                    <path fillRule="evenodd" d="M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-4">Flexibility and Control</h3>
              
              <p className="text-gray-300 font-sans leading-relaxed flex-grow">
                Launch targeted campaigns, respond to seasonal trends, or experiment with new offers at your own pace.
              </p>
              
              <div className="mt-6 w-full">
                <div className="h-px w-full bg-gold-500/10"></div>
                <div className="flex items-center justify-center mt-4">
                  <button className="text-xs font-serif font-semibold text-gold-400 uppercase tracking-wider py-2 px-4 rounded-full bg-rich-dark/80 border border-gold-500/20 hover:bg-rich-dark transition-colors duration-200">
                    Full Customization
                  </button>
                </div>
              </div>
            </div>

            {/* Deep Customer Insights */}
            <div className="group relative bg-rich-dark/90 p-8 pt-14 rounded-3xl shadow-lg border border-gold-500/20 hover:shadow-gold-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
              {/* Icon container */}
              <div className="absolute -top-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rich-black">
                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 008.25 8.25.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H12a.75.75 0 00-.75.75v7.5z" />
                    <path fillRule="evenodd" d="M12 4.5v15a2.25 2.25 0 002.25-2.25H12a2.25 2.25 0 00-2.25-2.25z" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-4">Deep Customer Insights</h3>
              
              <p className="text-gray-300 font-sans leading-relaxed flex-grow">
                Track clicks, conversions, and user behavior to fine-tune your overall marketing strategy.
              </p>
              
              <div className="mt-6 w-full">
                <div className="h-px w-full bg-gold-500/10"></div>
                <div className="flex items-center justify-center mt-4">
                  <button className="text-xs font-serif font-semibold text-gold-400 uppercase tracking-wider py-2 px-4 rounded-full bg-rich-dark/80 border border-gold-500/20 hover:bg-rich-dark transition-colors duration-200">
                    Data-Driven Decisions
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <a href="#calendly" className="inline-flex items-center px-8 py-4 text-base font-serif font-medium rounded-full shadow-lg text-rich-black bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-400 hover:shadow-gold-500/20 transition-all duration-300">
              <span>Start Your Email Strategy</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      </section>

      {/* CTA Section */}
      <section id="calendly" className="relative py-28 bg-rich-black overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rich-dark/90 border border-gold-500/20 shadow-lg mb-6">
                <span className="text-sm font-serif font-medium text-gold-400">Schedule a Consultation</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-foreground leading-tight">
                Ready to Click <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">'Send'</span> on Real Growth?
              </h2>
              
              <p className="mt-6 text-xl text-gray-600">
                You've already built an audience—now it's time to keep the conversation going. Let's work together to create email campaigns that your subscribers can't wait to open.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rich-dark/90 border border-gold-500/30">
                      <CheckIcon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <span className="font-serif font-medium text-foreground">Personalized Strategy</span> - Tailored to your unique business goals
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rich-dark/90 border border-gold-500/30">
                      <CheckIcon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <span className="font-serif font-medium text-foreground">Expert Guidance</span> - From our team of email marketing specialists
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rich-dark/90 border border-gold-500/30">
                      <CheckIcon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <span className="font-serif font-medium text-foreground">Measurable Results</span> - Clear reporting on campaign performance
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right column - Calendly */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-lg z-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-rich-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008H16.5V15z" />
                </svg>
              </div>
              
              <div className="relative bg-rich-dark/90 p-8 rounded-2xl shadow-xl border border-gold-500/20 z-10">
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-serif font-bold text-foreground">Book Your Free Consultation</h3>
                  <p className="text-gray-300 font-sans mt-2">Select a time that works for you</p>
                </div>
                <ClientCalendly />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      </section>
    </PageLayout>
  );
}
