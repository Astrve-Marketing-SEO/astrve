import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { UserGroupIcon, SparklesIcon, BuildingOffice2Icon, RocketLaunchIcon, LightBulbIcon, AcademicCapIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-rich-black">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-gold-200/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-sans border border-gold-500/20 mb-6">
                <span>About Us</span>
                <div className="w-px h-4 bg-gold-500/30"></div>
                <span className="text-gold-300">Our Story</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-gold-300/10 rounded-full blur-3xl opacity-30"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-foreground drop-shadow-sm">Discover the People</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-sm">
                    Turning Your Digital Vision
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-serif font-medium tracking-tight text-foreground">
                    into 
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Reality</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-300 font-sans max-w-2xl">
                  At Website Alchemy, we blend expertise, creativity, and a genuine love for helping businesses like yours succeed online.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
                <Link
                  href="#our-story"
                  className="relative rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center gap-2 group z-10"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="#contact"
                  className="relative rounded-full px-8 py-4 text-base font-serif font-semibold text-gold-400 shadow-lg shadow-rich-black/50 hover:shadow-gold-500/10 transition-all duration-200 flex items-center gap-2 bg-rich-dark/90 backdrop-blur-sm group border border-gold-500/30 z-10"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Right column - Image/Visual */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-gold-300/20 to-transparent opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-6 sm:p-8 shadow-xl border border-gold-500/20">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-300/20 to-gold-100/10 opacity-20"></div>
                  <div className="absolute inset-0 bg-rich-dark/80 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] -z-10"></div>
                  
                  <div className="relative grid grid-cols-2 gap-4">
                    {/* Team image */}
                    <div className="col-span-2 overflow-hidden rounded-lg bg-rich-dark/90 shadow-lg border border-gold-500/10">
                      <div className="relative">
                        <Image
                          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="Website Alchemy team collaborating"
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-foreground">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center">
                              <SparklesIcon className="w-5 h-5 text-gold-300" />
                            </div>
                            <div>
                              <h3 className="font-serif font-semibold text-base">Transforming Businesses</h3>
                              <p className="text-xs text-gray-300 font-sans">Since 2018</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats boxes */}
                    <div className="overflow-hidden rounded-lg bg-rich-dark/90 p-4 shadow-lg border border-gold-500/20">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-rich-dark/70 flex items-center justify-center border border-gold-500/30">
                          <UserGroupIcon className="h-5 w-5 text-gold-400" />
                        </div>
                        <div>
                          <div className="text-sm font-sans font-medium text-gray-300">Happy Clients</div>
                          <div className="text-lg font-serif font-semibold text-foreground">200<span className="text-gold-400">+</span></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg bg-rich-dark/90 p-4 shadow-lg border border-gold-500/20">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-rich-dark/70 flex items-center justify-center border border-gold-500/30">
                          <BuildingOffice2Icon className="h-5 w-5 text-gold-400" />
                        </div>
                        <div>
                          <div className="text-sm font-sans font-medium text-gray-300">Projects</div>
                          <div className="text-lg font-serif font-semibold text-foreground">500<span className="text-gold-400">+</span></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 overflow-hidden rounded-lg bg-rich-dark/90 p-4 shadow-lg border border-gold-500/20">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-rich-dark/70 flex items-center justify-center border border-gold-500/30">
                          <RocketLaunchIcon className="h-5 w-5 text-gold-400" />
                        </div>
                        <div>
                          <div className="text-sm font-sans font-medium text-gray-300">Our Mission</div>
                          <div className="text-base font-serif font-semibold text-foreground">Empowering businesses with <span className="text-gold-400">digital excellence</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="relative bg-rich-black py-24 sm:py-32">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.5))] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          {/* Introduction */}
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-sans border border-gold-500/20 mb-6">
              <span>Our Story</span>
              <div className="w-px h-4 bg-gold-500/30"></div>
              <span className="text-gold-300">Since 2018</span>
            </div>
            
            <p className="mt-6 text-xl leading-8 text-gray-300 font-sans italic">
              Ever wonder what goes on behind the scenes of your favorite digital campaigns and websites? We're a tight-knit group of strategists, designers, and marketers on a mission to make your brand shine. No complicated jargon, no hidden agendas—just honest collaboration and proven results.
            </p>
          </div>
          
          {/* How It All Began */}
          <div className="mb-24">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center drop-shadow-sm">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">How It All Began</span>
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Text content */}
              <div>
                <p className="text-lg leading-8 text-gray-300 font-sans mb-8">
                  Website Alchemy started with a simple idea: every business—no matter how small—deserves a powerful digital presence. We saw too many brands lost in the noise, unsure how to stand out. So we rolled up our sleeves, combined our diverse talents, and began offering solutions that actually make a difference.
                </p>
                
                <div className="space-y-10">
                  <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold-500 to-gold-300/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-10 w-10 rounded-full bg-rich-dark/70 flex items-center justify-center border border-gold-500/30">
                          <LightBulbIcon className="h-5 w-5 text-gold-400" />
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-foreground">Humble Roots</h3>
                      </div>
                      <p className="text-gray-300 font-sans">We began as a small collective of web enthusiasts who believed in user-centric design and transparent practices.</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold-400 to-gold-200/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-10 w-10 rounded-full bg-rich-dark/70 flex items-center justify-center border border-gold-500/30">
                          <AcademicCapIcon className="h-5 w-5 text-gold-400" />
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-foreground">Growing Expertise</h3>
                      </div>
                      <p className="text-gray-300 font-sans">Over time, we added social media gurus, SEO wizards, and email marketing pros to tackle every aspect of your online journey.</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold-300 to-gold-100/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-10 w-10 rounded-full bg-rich-dark/70 flex items-center justify-center border border-gold-500/30">
                          <ArrowPathIcon className="h-5 w-5 text-gold-400" />
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-foreground">Continual Evolution</h3>
                      </div>
                      <p className="text-gray-300 font-sans">The digital world never stops changing, and neither do we. We stay curious, learn new tools, and refine our strategies to keep you ahead.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold-300/20 to-transparent opacity-20 blur-2xl rounded-3xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gold-500/20">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Website Alchemy team working together"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-foreground">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-2xl font-serif font-bold">5+</span>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-xl">Years of Excellence</h3>
                        <p className="text-sm text-gray-300 font-sans">Transforming digital landscapes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* It's All About You Section */}
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center drop-shadow-sm">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">It's All About You</span>
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-6 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg">
                  <div className="h-12 w-12 rounded-full bg-rich-dark/70 flex items-center justify-center mb-4 border border-gold-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Collaboration First</h3>
                  <p className="text-gray-300 font-sans">We listen to your vision, ask plenty of questions, and invite you to co-create strategies that make sense for your specific goals.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-6 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg">
                  <div className="h-12 w-12 rounded-full bg-rich-dark/70 flex items-center justify-center mb-4 border border-gold-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Honest Communication</h3>
                  <p className="text-gray-300 font-sans">We keep you in the loop—from design concepts to campaign analytics—so you always know where your budget goes.</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-6 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg">
                  <div className="h-12 w-12 rounded-full bg-rich-dark/70 flex items-center justify-center mb-4 border border-gold-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h-7.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Data Meets Creativity</h3>
                  <p className="text-gray-300 font-sans">We love a great idea, but we love it even more when results back it up. Expect a blend of innovative concepts and performance-driven tactics.</p>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative p-6 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg">
                  <div className="h-12 w-12 rounded-full bg-rich-dark/70 flex items-center justify-center mb-4 border border-gold-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Long-Term Success</h3>
                  <p className="text-gray-300 font-sans">A single flashy campaign won't cut it. We focus on building your digital presence sustainably, so you'll keep growing year after year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faces Behind the Alchemy Section */}
      <section className="bg-rich-black py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold-300/20 to-transparent opacity-20"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-sans border border-gold-500/20 mb-6">
              <span>Our Team</span>
              <div className="w-px h-4 bg-gold-500/30"></div>
              <span className="text-gold-300">Meet the Experts</span>
            </div>
            
            <h2 className="mt-6 text-3xl font-serif font-bold tracking-tight bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent sm:text-4xl drop-shadow-sm">
              Faces Behind the Alchemy
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              We're a small but mighty team of digital experts, each bringing unique skills and perspectives to the table. Together, we create digital experiences that transform businesses and delight users.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3 lg:gap-y-16 xl:gap-x-12">
            {/* Team Member 1 */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20">
                <img 
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" 
                  src="https://randomuser.me/api/portraits/women/76.jpg" 
                  alt="Sarah Johnson" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-70"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Sarah Johnson</h3>
                <p className="text-base leading-7 text-gold-400 font-sans">Founder & Creative Director</p>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  With over 15 years of experience in digital design and marketing, Sarah leads our creative vision and ensures every project exceeds expectations.
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20">
                <img 
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Chen" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-70"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Michael Chen</h3>
                <p className="text-base leading-7 text-gold-400 font-sans">Technical Director</p>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  Michael brings technical expertise to every project, ensuring our websites are not just beautiful but also fast, secure, and built to last.
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.065 9.065 0 0112 15a9.065 9.065 0 01-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl bg-rich-dark/90 shadow-lg border border-gold-500/20">
                <img 
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Emily Rodriguez" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-70"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-serif font-semibold leading-8 tracking-tight text-foreground">Emily Rodriguez</h3>
                <p className="text-base leading-7 text-gold-400 font-sans">Marketing Strategist</p>
                <p className="mt-4 text-base leading-7 text-gray-300 font-sans">
                  Emily crafts data-driven marketing strategies that help our clients reach their target audience and achieve measurable business results.
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="relative rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center gap-2 group z-10"
            >
              <span>Get in Touch With Our Team</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Your All-in-One Digital Partner Section */}
      <section className="relative bg-rich-black py-24 sm:py-32">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-0 bg-gold-300/10 skew-y-[-3deg] transform origin-top-left h-[120%] -translate-y-24 opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-sans border border-gold-500/20 mb-6">
              <span>Our Services</span>
              <div className="w-px h-4 bg-gold-500/30"></div>
              <span className="text-gold-300">Comprehensive Solutions</span>
            </div>
            
            <h2 className="mt-6 text-3xl font-serif font-bold tracking-tight bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent sm:text-4xl drop-shadow-sm">
              Your All-in-One Digital Partner
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              We're not just about websites (though we do love a gorgeous homepage). From social media marketing and Google My Business optimization to email automation and SEO, we've got you covered. You choose how much or how little help you need—we'll adapt to suit your plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-rich-dark/70 mb-6 border border-gold-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">Website Design & Development</h3>
                <p className="text-gray-300 mb-6 flex-grow font-sans">Custom websites that look stunning, load fast, and convert visitors into customers. Mobile-friendly and optimized for search engines.</p>
                <Link href="/services/website-design" className="inline-flex items-center text-gold-400 font-serif font-medium group">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-rich-dark/70 mb-6 border border-gold-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">Social Media Marketing</h3>
                <p className="text-gray-300 mb-6 flex-grow font-sans">Strategic social media campaigns that engage your audience, build brand awareness, and drive traffic to your website.</p>
                <Link href="/services/social-media-marketing" className="inline-flex items-center text-gold-400 font-serif font-medium group">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-rich-dark/70 mb-6 border border-gold-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">SEO & Google My Business</h3>
                <p className="text-gray-300 mb-6 flex-grow font-sans">Boost your visibility in search results and local listings. We'll help you rank higher and attract more qualified leads.</p>
                <Link href="/services/seo" className="inline-flex items-center text-gold-400 font-serif font-medium group">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link
              href="/services"
              className="relative rounded-full bg-rich-dark/90 px-8 py-4 text-base font-serif font-semibold text-gold-400 shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center gap-2 group border border-gold-500/30"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Want to Know More About Us? Section */}
      <section id="contact" className="relative bg-rich-black py-24 sm:py-32">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-gold-200/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-sans border border-gold-500/20 mb-6">
                <span>Get in Touch</span>
                <div className="w-px h-4 bg-gold-500/30"></div>
                <span className="text-gold-300">Let's Connect</span>
              </div>
              
              <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-sm">Want to Know More About Us?</span>
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                </span>
              </h2>
              
              <p className="text-lg leading-8 text-gray-300 font-sans mb-8">
                Whether you want to revamp your website, launch a powerful marketing campaign, or explore new ways to connect with your customers, we're here for it. Let's cut the confusion and get straight to building something amazing—together.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <Link
                  href="https://calendly.com/website-alchemy/discovery-call"
                  className="relative rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center gap-2 group"
                  target="_blank"
                >
                  <span>Schedule a Call</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="mailto:hello@websitealchemy.com"
                  className="relative rounded-full px-8 py-4 text-base font-serif font-semibold text-gold-400 shadow-lg shadow-rich-black/50 hover:shadow-gold-500/10 transition-all duration-200 flex items-center gap-2 bg-rich-dark/90 backdrop-blur-sm group border border-gold-500/30"
                >
                  <span>Email Us</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Right column - Image/Calendar */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-gold-300/20 to-transparent opacity-20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-6 sm:p-8 shadow-xl border border-gold-500/20">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-300/20 to-gold-100/10 opacity-20"></div>
                <div className="absolute inset-0 bg-rich-dark/80 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] -z-10"></div>
                
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Website Alchemy calendar booking"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                  <div className="mt-6 bg-rich-dark/90 p-6 rounded-lg shadow-lg border border-gold-500/20">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">Book a Discovery Call</h3>
                    <p className="text-gray-300 mb-4 font-sans">Schedule a free 30-minute consultation to discuss your project needs and how we can help you achieve your digital goals.</p>
                    <Link
                      href="https://calendly.com/website-alchemy/discovery-call"
                      className="w-full inline-flex justify-center items-center rounded-md bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-3 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 transition-all duration-200"
                      target="_blank"
                    >
                      View Available Times
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
