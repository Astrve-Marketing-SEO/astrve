import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ClientCalendly from '@/components/ClientCalendly';
import LogoBadge from '@/components/LogoBadge';
import { 
  ComputerDesktopIcon,
  ShareIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { ArrowUpRight, ArrowRight, BarChart3, LineChart, Network } from 'lucide-react';

export default function HomePage() {
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
                <span className="flex-1">Data-Driven Marketing Agency</span>
                <div className="w-px h-4 bg-indigo-200"></div>
                <span className="text-indigo-500">98% Client Satisfaction</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">Stop Guessing,</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Start Growing
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-gray-800">
                    Data-Driven Digital Marketing
                    <br />
                    That
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Works</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-indigo-100 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl">
                  Your digital presence should be more than just a 'website.' It should be your brand's online heartbeat—where customers connect, engage, and discover the real value you offer.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-indigo-50 rounded-full blur-2xl opacity-60"></div>
                <Link
                  href="/services"
                  className="relative rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-indigo-100 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Services</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/pricing"
                  className="relative rounded-full px-8 py-4 text-base font-semibold text-gray-900 shadow-lg shadow-gray-100 hover:shadow-md transition-all duration-200 flex items-center gap-2 bg-white/80 backdrop-blur-sm group border border-gray-100"
                >
                  <span>Pricing</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="relative mt-16 grid grid-cols-3 gap-6 py-8 border-y border-gray-100/50">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-transparent to-indigo-50/50 opacity-50 blur-xl"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">250%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1.2M+</div>
                  <div className="text-sm text-gray-600">Leads Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Right column - Interactive visualization */}
            <div className="relative lg:ml-auto bg-white rounded-2xl shadow-2xl shadow-indigo-100 p-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-2xl -z-10"></div>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-gray-900">Marketing Performance</div>
                    <div className="text-sm text-gray-600">Last 30 days</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-600">
                      <BarChart3 className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                      <LineChart className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-600">
                      <Network className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Graph Placeholder */}
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-50 to-white p-4">
                  <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-25 rounded-lg"></div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1 p-4 rounded-lg bg-indigo-50">
                    <div className="text-sm text-gray-600">Traffic</div>
                    <div className="text-lg font-semibold text-indigo-600">+47.5%</div>
                  </div>
                  <div className="space-y-1 p-4 rounded-lg bg-indigo-50">
                    <div className="text-sm text-gray-600">Conversions</div>
                    <div className="text-lg font-semibold text-indigo-600">+32.2%</div>
                  </div>
                  <div className="space-y-1 p-4 rounded-lg bg-indigo-50">
                    <div className="text-sm text-gray-600">Revenue</div>
                    <div className="text-lg font-semibold text-indigo-600">+28.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-indigo-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="max-w-xl space-y-6">
                <h2 className="text-[32px] font-medium text-gray-900 leading-tight tracking-tight">
                  We combine captivating design, strategic marketing, and
                  <span className="block mt-1 text-indigo-600">relentless optimization</span>
                  to turn casual visitors into loyal customers.
                </h2>
                
                <p className="text-base text-gray-600">
                  Interested in a FREE 20-Minute Consultation?
                </p>
                
                <div className="pt-2">
                  <Link
                    href="#calendly"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-500 transition-all duration-200 group"
                  >
                    Grow My Business Today!
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - Data Visualization */}
            <div className="relative lg:-mr-8">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                {/* Abstract Data Elements */}
                <div className="absolute inset-0">
                  {/* Network Nodes */}
                  <div className="absolute left-1/4 top-1/4 w-3 h-3 bg-indigo-200 rounded-full animate-pulse"></div>
                  <div className="absolute right-1/3 top-1/2 w-3 h-3 bg-indigo-300 rounded-full animate-pulse delay-75"></div>
                  <div className="absolute left-1/2 bottom-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-150"></div>
                  
                  {/* Connection Lines */}
                  <div className="absolute left-1/4 top-1/4 w-[200px] h-[1px] bg-gradient-to-r from-indigo-200 to-transparent transform rotate-45"></div>
                  <div className="absolute right-1/3 top-1/2 w-[150px] h-[1px] bg-gradient-to-l from-indigo-200 to-transparent transform -rotate-45"></div>
                  
                  {/* Data Visualization Elements */}
                  <div className="absolute left-1/4 bottom-1/4 w-32 h-32">
                    <div className="w-full h-full border-4 border-indigo-100 rounded-xl transform rotate-45"></div>
                    <div className="absolute inset-2 border-4 border-indigo-50 rounded-lg transform rotate-45"></div>
                  </div>
                  
                  <div className="absolute right-1/4 top-1/3 w-40 h-40">
                    <div className="w-full h-full border border-indigo-100/50 rounded-full"></div>
                    <div className="absolute inset-4 border border-indigo-100/30 rounded-full"></div>
                    <div className="absolute inset-8 border border-indigo-100/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Our Alchemy: Services That Turn Heads
              <span className="block text-indigo-600">and Drive Results</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you need a bold new website, an engaging social media presence, or a powerhouse reputation on Google,
              our solutions are tailored to fit your goals—no cookie-cutter templates here.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {/* Service Cards */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <ServiceCard
                icon={ComputerDesktopIcon}
                title="Stunning Websites That Convert"
                description="First impressions matter. We build beautiful, responsive websites that are not just visually appealing, but strategically designed to convert visitors into customers."
                href="/services/website-design"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <ServiceCard
                icon={ShareIcon}
                title="Ignite Your Social Presence"
                description="Connect with your audience on a deeper level. We create engaging social media strategies that build brand awareness, foster community, and drive traffic."
                href="/services/social-media-marketing"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <ServiceCard
                icon={MapPinIcon}
                title="Dominate Local Search & Protect Your Reputation"
                description="Get found where it matters most – local search. We optimize your Google My Business profile and manage your online reputation to build trust and attract local customers."
                href="/services/google-my-business-reputation-management"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with Us section */}
      <div className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30 pointer-events-none">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-indigo-300 to-purple-200 -rotate-[30deg]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Why Partner
                <span className="block text-indigo-600 font-semibold mt-1">with Us?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Just like the old alchemists who turned base metals into gold, we take ordinary digital efforts and transform them into powerful, results-driven strategies. It's not magic—it's expertise, creativity, and a passion for seeing you thrive online.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-500 transition-all duration-200 group"
                >
                  About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative lg:ml-8">
              <div className="relative aspect-[4/3] w-full">
                {/* Main Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central Element */}
                  <div className="relative w-48 h-48 bg-gradient-to-br from-indigo-100 to-white rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-2 border-2 border-indigo-100 rounded-xl"></div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">WA</div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-1/4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg shadow-lg transform rotate-12 animate-float-slow"></div>
                  <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-full shadow-lg animate-float-slow delay-150"></div>

                  {/* Connection Lines */}
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform -rotate-45"></div>
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform rotate-45"></div>

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

      {/* Testimonials section */}
      <div className="relative py-24 sm:py-32 bg-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="h-full w-full">
            {/* Dots Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30"></div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Real Results,
              <span className="block text-indigo-400 mt-1">Real Stories</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're proud to have helped businesses of all sizes discover their digital potential.
              Here's a quick look at what they're saying:
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <TestimonialCard
              quote="Website Alchemy took our online presence to the next level! We saw a significant increase in traffic and leads within just a few months."
              name="Sarah Johnson"
              title="Marketing Director, Acme Corp"
              imageUrl="https://randomuser.me/api/portraits/women/23.jpg"
            />
            <TestimonialCard
              quote="Their data-driven approach helped us make informed decisions and optimize our marketing campaigns for maximum ROI."
              name="David Lee"
              title="CEO, Beta Industries"
              imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard
              quote="We highly recommend Website Alchemy to any business looking for a reliable and results-oriented digital marketing partner."
              name="Emily Chen"
              title="Owner, Gamma Solutions"
              imageUrl="https://randomuser.me/api/portraits/women/45.jpg"
            />
          </div>
        </div>
      </div>

      {/* Calendly section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 pt-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
                  Ready to Transform
                  <span className="block text-indigo-600">Your Marketing?</span>
                </h2>
                <p className="text-2xl font-medium text-gray-900">Book Your FREE Consultation Now</p>
              </div>

              <p className="text-lg leading-8 text-gray-600">
                You've worked hard to build your business. Now, let's make sure everyone else sees the value you bring.
                Our team is here to help you stand out, grow faster, and leave a lasting impression on every visitor.
              </p>

              {/* Time Indicator */}
              <div className="flex items-center gap-3 text-gray-500">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>30-minute free consultation</span>
              </div>
            </div>

            {/* Right Side - Calendly Widget */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <ClientCalendly />
            </div>
          </div>
        </div>
      </div>

      {/* Accolades Section */}
      <div className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-24 sm:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Floating Shapes */}
          <div className="absolute inset-0">
            {/* Top Left Square */}
            <div className="absolute top-20 left-[5%] w-24 h-24 border border-blue-200/50 rounded-xl transform rotate-[15deg] animate-float-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl" />
            </div>

            {/* Top Right Circle */}
            <div className="absolute top-40 right-[10%] w-16 h-16 border border-purple-200/50 rounded-full animate-float-slower">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-full" />
            </div>

            {/* Bottom Left Diamond */}
            <div className="absolute bottom-32 left-[15%] w-20 h-20 border border-indigo-200/50 transform rotate-45 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent" />
            </div>

            {/* Bottom Right Square */}
            <div className="absolute bottom-40 right-[8%] w-28 h-28 border border-blue-200/50 rounded-xl transform -rotate-[15deg] animate-float-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl" />
            </div>

            {/* Center Decorative Elements */}
            <div className="absolute top-1/2 left-[2%] w-2 h-2 bg-purple-200 rounded-full animate-pulse" />
            <div className="absolute top-[40%] right-[3%] w-3 h-3 bg-blue-200 rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-[35%] left-[7%] w-2 h-2 bg-indigo-200 rounded-full animate-pulse delay-300" />
          </div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Accolades
            </h2>
            <div className="mt-4">
              <p className="text-lg leading-8 text-gray-600">
                Trusted by industry leaders and powered by cutting-edge tools
              </p>
            </div>
          </div>

          {/* All Logos Grid */}
          <div className="mx-auto grid max-w-lg grid-cols-1 items-start gap-10 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/google-ads-2.svg"
              name="Google Ads Partner"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/hubspot-1.svg"
              name="HubSpot Solutions"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
              name="AWS Advanced"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/semrush.svg"
              name="SEMrush Pro"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/mailchimp.svg"
              name="Mailchimp Expert"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/ahrefs.svg"
              name="Ahrefs Master"
            />
          </div>
        </div>
      </div>

      {/* Latest Blog Section */}
      <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="absolute -left-8 top-full w-96 h-96 -translate-y-1/2 bg-indigo-50 opacity-50 blur-3xl"></div>
          <div className="absolute -right-8 bottom-full w-96 h-96 translate-y-1/2 bg-indigo-50 opacity-50 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Latest from Our
              <span className="block text-indigo-600 mt-1">Digital Alchemy Lab</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover insights, strategies, and success stories that can transform your digital presence
              from ordinary to extraordinary.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Blog Post 1 */}
            <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                alt="Data Analytics Dashboard"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-15" className="mr-8">Jan 15, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5">Data Analytics</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href="/blog/data-driven-marketing-strategies" className="hover:text-indigo-300 transition-colors">
                  <span className="absolute inset-0"></span>
                  Data-Driven Marketing Strategies for 2024
                </Link>
              </h3>
            </article>

            {/* Blog Post 2 */}
            <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="SEO Strategy Meeting"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-10" className="mr-8">Jan 10, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5">SEO</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href="/blog/seo-best-practices" className="hover:text-indigo-300 transition-colors">
                  <span className="absolute inset-0"></span>
                  SEO Best Practices That Actually Work in 2024
                </Link>
              </h3>
            </article>

            {/* Blog Post 3 */}
            <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Social Media Strategy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-05" className="mr-8">Jan 05, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5">Social Media</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href="/blog/social-media-engagement" className="hover:text-indigo-300 transition-colors">
                  <span className="absolute inset-0"></span>
                  Boost Your Social Media Engagement with AI
                </Link>
              </h3>
            </article>
          </div>

          {/* View All Posts Button */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 group"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
