import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CheckIcon } from '@heroicons/react/24/outline';
import ClientCalendly from '@/components/ClientCalendly';

const features = [
  'Strategic social media planning',
  'Content creation and curation',
  'Community management',
  'Social media advertising',
  'Analytics and reporting',
  'Brand voice development',
  'Engagement optimization',
  'Competitor analysis',
  'Crisis management',
  'Platform-specific strategies'
];

const getFeatureDescription = (feature: string) => {
  switch (feature) {
    case 'Strategic social media planning':
      return 'Develop a customized social media strategy that aligns with your business goals.';
    case 'Content creation and curation':
      return 'Create and curate high-quality content that resonates with your target audience.';
    case 'Community management':
      return 'Build and engage with your online community to foster brand loyalty and advocacy.';
    case 'Social media advertising':
      return 'Run targeted social media ads that drive conversions and increase brand awareness.';
    case 'Analytics and reporting':
      return 'Track and analyze your social media performance to optimize your strategy.';
    case 'Brand voice development':
      return 'Develop a unique and consistent brand voice that resonates with your target audience.';
    case 'Engagement optimization':
      return 'Optimize your social media content to increase engagement and drive conversions.';
    case 'Competitor analysis':
      return 'Analyze your competitors\' social media strategies to stay ahead of the game.';
    case 'Crisis management':
      return 'Develop a crisis management plan to protect your brand reputation.';
    case 'Platform-specific strategies':
      return 'Develop platform-specific strategies that cater to each social media platform\'s unique features and audience.';
    default:
      return '';
  }
};

export default function SocialMediaMarketingPage() {
  return (
    <PageLayout>
      {/* Hero section */}
      <section className="relative bg-rich-black px-6 pt-24 lg:pt-28 overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Background pattern - gold gradient */}
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
                <span className="flex-1">Professional Social Media Services</span>
                <div className="w-px h-4 bg-gold-500/30"></div>
                <span className="text-gold-300">Results Guaranteed</span>
              </div>
              
              <h1 className="relative space-y-4">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl opacity-30"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-foreground drop-shadow-sm">Social Media</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-sm">
                    Marketing Services
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-serif font-medium tracking-tight text-foreground">
                    Stop Scrolling, Start
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Connecting</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-500/20 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-30"></div>
                <p className="pl-6 text-lg leading-8 text-gray-300 max-w-2xl font-sans">
                  Cultivate genuine connections, spark conversations, and convert followers into loyal customers. At Website Alchemy, we craft campaigns rooted in authenticity, storytelling, and data-driven insights—so your brand doesn't just show up online, it stands out.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
                <Link
                  href="#calendly"
                  className="relative rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200 flex items-center gap-2 group z-10"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative z-10">
              <div className="absolute -right-4 top-1/2 w-72 h-72 bg-gold-300/10 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl ring-1 ring-gold-500/20">
                <Image
                  src="/services/social-media.svg"
                  alt="Social Media Marketing services"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-rich-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Media Marketing Matters */}
      <section className="py-24 bg-rich-black overflow-hidden relative">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <div className="absolute -right-4 top-1/2 w-72 h-72 bg-gold-300/10 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-gold-500/20">
                <Image
                  src="/social-media-engagement.svg"
                  alt="Social media engagement illustration"
                  width={800}
                  height={600}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-rich-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-base font-serif font-semibold leading-7 text-gold-400">Why Social Media Marketing Matters</h2>
              <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  Where Conversations Happen and Trends Are Born
                </span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                Social media is where your audience hangs out, finds new favorites, and shares what they love. Whether you're looking to promote your new product line, build community awareness, or simply engage with loyal fans, these platforms offer a unique opportunity to humanize your brand and drive real-world results.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">Authentic Engagement</h3>
                    <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      Social platforms allow you to interact directly with your customers, addressing questions and feedback in real time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043 3.745 3.745 0 011.043-3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">Brand Credibility</h3>
                    <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      Consistent content and a vibrant social presence help prospective clients see you as a go-to resource.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-foreground">Targeted Reach</h3>
                    <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                    <p className="mt-2 text-base leading-7 text-gray-300 font-sans">
                      From local businesses to global enterprises, social media ads let you pinpoint exactly who needs to see your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Your Social Media Success, Simplified */}
      <section className="bg-rich-black py-24 sm:py-32 relative">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl lg:text-center relative z-10">
            <h2 className="text-base font-serif font-semibold leading-7 text-gold-400">Comprehensive Approach</h2>
            <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Your Social Media Success, Simplified
              </span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              We take the stress and guesswork out of social media marketing. Our strategic approach combines creativity, data analysis, and a deep understanding of your target audience to create a social media presence that drives real business growth. Here's how we do it:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none relative z-10">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-serif font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  Discovery and Strategy
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    We learn your brand voice, audience demographics, and goals. Then, we build a custom roadmap detailing which platforms and content types will generate the biggest impact.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-serif font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  </div>
                  Content Creation and Curation
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Say goodbye to aimless posting. We craft scroll-stopping visuals, write engaging captions, and curate relevant content that sparks conversation.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-serif font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043 3.745 3.745 0 011.043-3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Community Management
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Prompt, friendly engagement is the key to turning casual scrollers into dedicated fans. We monitor comments, messages, and reviews to keep your online communities thriving.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-serif font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Paid Advertising
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Need an extra boost? Our targeted ad campaigns place your brand front and center, reaching potential customers who are primed to take action.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-serif font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Analytics and Optimization
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    We track engagement rates, conversions, and audience growth. By continuously reviewing the numbers, we fine-tune your strategy for consistent improvements.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-serif font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-rich-dark/90 border border-gold-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Proven Results
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Our clients see real, measurable growth in their social media presence, engagement, and ultimately, their business. We're committed to delivering results that matter.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-rich-dark py-24 sm:py-32 relative">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-rich-black/40 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <figure className="mx-auto max-w-2xl relative z-10">
            <div className="text-center">
              <svg width="45" height="36" className="mx-auto mb-6 text-gold-400" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4 36C11.48 36 9.72 35.3467 8.12 34.04C6.52 32.68 4.93333 30.0533 3.36 26.16C1.84 22.2667 1.08 18.48 1.08 14.8C1.08 10.9067 2.64 7.38667 5.76 4.24C8.88 1.04 12.56 0 16.8 0C19.28 0 21.3333 0.706667 22.96 2.12C24.5867 3.48 25.4 5.2 25.4 7.28C25.4 9.36 24.6667 11.0933 23.2 12.48C21.7867 13.8667 19.9733 14.56 17.76 14.56C15.6 14.56 13.76 13.76 12.24 12.16C12.08 13.6267 12.32 15.7333 12.96 18.48C13.6533 21.2267 14.24 23.04 14.72 23.92C15.0933 24.5333 15.6267 24.84 16.32 24.84C17.0133 24.84 17.9467 24.4 19.12 23.52C20.2933 22.5867 21.1733 21.9467 21.76 21.6C21.92 22.1333 22 22.6133 22 23.04C22 24.9333 21 26.9067 19 28.96C17 30.96 15.0667 32.5733 13.2 33.8C11.9733 35.2667 10.6933 36 9.36 36H13.4ZM35.24 36C33.32 36 31.56 35.3467 29.96 34.04C28.36 32.68 26.7733 30.0533 25.2 26.16C23.68 22.2667 22.92 18.48 22.92 14.8C22.92 10.9067 24.48 7.38667 27.6 4.24C30.72 1.04 34.4 0 38.64 0C41.12 0 43.1733 0.706667 44.8 2.12C46.4267 3.48 47.24 5.2 47.24 7.28C47.24 9.36 46.5067 11.0933 45.04 12.48C43.6267 13.8667 41.8133 14.56 39.6 14.56C37.44 14.56 35.6 13.76 34.08 12.16C33.92 13.6267 34.16 15.7333 34.8 18.48C35.4933 21.2267 36.08 23.04 36.56 23.92C36.9333 24.5333 37.4667 24.84 38.16 24.84C38.8533 24.84 39.7867 24.4 40.96 23.52C42.1333 22.5867 43.0133 21.9467 43.6 21.6C43.76 22.1333 43.84 22.6133 43.84 23.04C43.84 24.9333 42.84 26.9067 40.84 28.96C38.84 30.96 36.9067 32.5733 35.04 33.8C33.8133 35.2667 32.5333 36 31.2 36H35.24Z" fill="currentColor" />
              </svg>
            </div>
            <blockquote className="text-center text-xl font-serif font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">
              <p className="relative">
                <span className="relative z-10">Marketing isn't about instant sales; it's about being top-of-mind when your audience needs a solution. And social media marketing does that so perfectly well.</span>
                <span className="absolute -inset-8 -z-10 block transform-gpu blur-2xl" aria-hidden="true">
                  <div className="mx-auto h-full w-full bg-gradient-to-r from-gold-300/10 to-gold-400/10 opacity-10"></div>
                </span>
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-serif font-semibold text-foreground">Digital Marketing Expert</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gold-400">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gold-400 font-serif">Website Alchemy</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Turning Social Conversations into Tangible Results */}
      <section className="py-24 bg-rich-black relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl lg:text-center relative z-10">
            <h2 className="text-base font-serif font-semibold leading-7 text-gold-400">Measurable Outcomes</h2>
            <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Turning Social Conversations into Tangible Results
              </span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Our strategic approach to social media marketing delivers real business impact, helping you achieve concrete goals that drive growth and build lasting relationships.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none relative z-10">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-serif font-semibold leading-7 text-foreground">
                  <div className="h-12 w-12 flex-none rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Growing Brand Awareness
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    More people recognizing and resonating with your mission. We help expand your reach and create memorable brand experiences that stick with your audience.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-serif font-semibold leading-7 text-foreground">
                  <div className="h-12 w-12 flex-none rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 00-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  Driving Traffic and Sales
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Strategic posts and ads that guide viewers straight to your website or store. We create conversion-focused content that turns followers into customers.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-serif font-semibold leading-7 text-foreground">
                  <div className="h-12 w-12 flex-none rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043 3.745 3.745 0 011.043-3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Building Trust & Loyalty
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Frequent, meaningful interactions show you're more than just a faceless business. We help humanize your brand and foster deeper connections with your audience.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-serif font-semibold leading-7 text-foreground">
                  <div className="h-12 w-12 flex-none rounded-full bg-rich-dark/90 border border-gold-500/30 shadow-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Staying Competitive
                </dt>
                <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-sans">
                  <p className="flex-auto">
                    Regular updates, trending content, and fresh ideas keep you relevant in a fast-paced market. We help you stay ahead of the curve and outshine your competition.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SMM as Part of a Bigger Digital Strategy */}
      <section className="py-24 bg-rich-black relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="relative z-10">
              <h2 className="text-base font-serif font-semibold leading-7 text-gold-400">Integrated Approach</h2>
              <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  SMM as Part of a Bigger Digital Strategy
                </span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                Social media doesn't exist in a vacuum. Pairing it with robust SEO, a user-friendly website, and a solid email marketing plan ensures you get the most bang for your buck. Think of it as one powerful puzzle piece that complements the rest of your marketing framework—creating a cohesive brand experience for your customers.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="relative pl-9">
                  <dt className="inline font-serif font-semibold text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-gold-400">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    SEO Synergy
                  </dt>
                  <dd className="inline text-base text-gray-300 font-sans"> - Social signals boost your search rankings</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-serif font-semibold text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-gold-400">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    Content Amplification
                  </dt>
                  <dd className="inline text-base text-gray-300 font-sans"> - Extend the reach of your blog and website content</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-serif font-semibold text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-gold-400">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    Email List Growth
                  </dt>
                  <dd className="inline text-base text-gray-300 font-sans"> - Convert social followers into email subscribers</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-serif font-semibold text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-gold-400">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    Unified Analytics
                  </dt>
                  <dd className="inline text-base text-gray-300 font-sans"> - Track the customer journey across all touchpoints</dd>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-xl bg-rich-dark/90 shadow-lg ring-1 ring-gold-500/20">
                <img
                  src="/services/digital-strategy.svg"
                  alt="Digital marketing strategy diagram showing how social media connects with other channels"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/10 via-transparent to-transparent opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Connect With Your Audience? */}
      <section className="bg-rich-black py-24 sm:py-32 relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
            
            <div className="relative z-10 overflow-hidden rounded-xl bg-rich-dark/90 shadow-lg ring-1 ring-gold-500/20 p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-10"></div>
              <ClientCalendly />
            </div>
            <div className="flex flex-col justify-center relative z-10">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  Ready to Connect With Your Audience?
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                You've got a story worth sharing, and we're here to help you tell it—loud and clear. Let's turn everyday social platforms into a dynamic stage for your brand. Ready to see what happens when your audience genuinely connects with your message?
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-gradient-to-r from-gold-400 to-gold-500 px-3.5 py-2.5 text-sm font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-400 transition-all duration-200"
                >
                  Contact Us
                </a>
                <a href="#" className="text-sm font-serif font-semibold leading-6 text-gold-400 hover:text-gold-300 transition-colors">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Specialize In */}
      <section className="bg-rich-black py-24 sm:py-32 relative overflow-hidden">
        {/* Background overlay for improved text readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-gold-300/20 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-bl from-gold-300/20 to-transparent rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-1">
          <div className="mx-auto max-w-2xl text-center relative">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Platforms We Specialize In
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              We craft tailored strategies for each platform, ensuring your brand's message resonates with the right audience in the right way.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Facebook */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">Facebook</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Reach a massive, diverse audience with engaging posts, targeted ads, and community-building groups. We help you harness Facebook's wide-ranging tools to spark meaningful conversations and drive conversions.
              </p>
            </div>

            {/* Instagram */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border and gradient background */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400 relative z-10">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">Instagram</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Showcase your brand's visual side through stunning images, Reels, and Stories. From aesthetic cohesion to influencer collaborations, we'll help you create content that stops the scroll—and keeps your audience coming back.
              </p>
            </div>

            {/* X (Twitter) */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">X (Twitter)</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Engage in real-time conversations, share quick updates, and establish your brand's voice on X (formerly Twitter). We'll guide you in crafting messages that cut through the noise and prompt genuine interaction.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">LinkedIn</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Position yourself as an industry leader and connect with decision-makers in the professional world. Our LinkedIn strategies focus on thought leadership content, networking, and lead generation tailored for the B2B space.
              </p>
            </div>

            {/* TikTok */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                  <path d="M9 12A4 4 0 1 0 9 4 4 4 0 0 0 9 12z"></path>
                  <path d="M15 12V5c0-1.7-1.3-3-3-3h-1"></path>
                  <rect x="13" y="5" width="6" height="8" rx="3"></rect>
                  <path d="M9 12v7a3 3 0 0 0 6 0v-1"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">TikTok</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Capture attention with short, snappy videos that showcase your brand's personality. We'll show you how to tap into TikTok's viral nature, from brainstorming trending ideas to optimizing your content for maximum reach.
              </p>
            </div>

            {/* Pinterest */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                  <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0"></path>
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">Pinterest</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Turn inspiration into action by sharing eye-catching pins that link directly to your products or services. We'll help you design boards, optimize descriptions, and attract pinners ready to buy or learn more.
              </p>
            </div>

            {/* YouTube */}
            <div className="flex flex-col rounded-2xl bg-rich-dark/90 p-8 shadow-lg ring-1 ring-gold-500/20 xl:p-10 h-full sm:col-span-1 lg:col-span-3 lg:max-w-2xl lg:mx-auto relative overflow-hidden group hover:ring-gold-500/40 transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Icon container with gold border */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rich-dark border border-gold-500/30 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-bold leading-8 text-foreground">YouTube</h3>
              <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500/50"></div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-300 font-sans">
                Make a lasting impact with high-quality videos—from how-tos and product demos to storytelling that resonates with viewers. We'll guide you in building a channel that entertains, informs, and amplifies your brand's visibility.
              </p>
            </div>
          </div>
        </div>
      </section>


    </PageLayout>
  );
}
