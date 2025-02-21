import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import ServiceCard from '@/components/ServiceCard';
import { 
  GlobeAltIcon, 
  PresentationChartLineIcon, 
  ChatBubbleBottomCenterTextIcon,
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
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              <span>Our Services</span>
              <div className="w-px h-4 bg-indigo-200"></div>
              <span className="text-indigo-500">Tailored Solutions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              Transform Your Digital Presence
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive digital solutions powered by data-driven insights to help your business thrive in the digital landscape
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <ServiceCard
                  icon={GlobeAltIcon}
                  title="Website Design & Development"
                  description="Custom websites that capture your brand's essence and drive results. Built with modern technologies and optimized for performance."
                  href="/services/website-design"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <ServiceCard
                  icon={PresentationChartLineIcon}
                  title="Digital Marketing"
                  description="Strategic marketing solutions backed by data analytics to increase your online visibility and drive measurable results."
                  href="/services/digital-marketing"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-indigo-50/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <ServiceCard
                  icon={ChatBubbleBottomCenterTextIcon}
                  title="SEO Optimization"
                  description="Data-driven SEO strategies to improve your search rankings, attract qualified traffic, and increase your organic reach."
                  href="/services/seo"
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
