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
                <span className="flex-1">Professional Social Media Services</span>
                <div className="w-px h-4 bg-indigo-200"></div>
                <span className="text-indigo-500">Results Guaranteed</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">Social Media</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Marketing Services
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-gray-800">
                    Stop Scrolling, Start
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Connecting</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-indigo-100 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl">
                  Cultivate genuine connections, spark conversations, and convert followers into loyal customers. At Website Alchemy, we craft campaigns rooted in authenticity, storytelling, and data-driven insights—so your brand doesn't just show up online, it stands out.
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
              <Image
                src="/services/social-media.svg"
                alt="Social Media Marketing services"
                width={1000}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Social Media Marketing Matters */}
      <div className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="relative">
              <div className="absolute -right-4 top-1/2 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70 -z-10"></div>
              <Image
                src="/social-media-engagement.svg"
                alt="Social media engagement illustration"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Social Media Marketing Matters</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Where Conversations Happen and Trends Are Born
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Social media is where your audience hangs out, finds new favorites, and shares what they love. Whether you're looking to promote your new product line, build community awareness, or simply engage with loyal fans, these platforms offer a unique opportunity to humanize your brand and drive real-world results.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Authentic Engagement</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Social platforms allow you to interact directly with your customers, addressing questions and feedback in real time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Brand Credibility</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Consistent content and a vibrant social presence help prospective clients see you as a go-to resource.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Targeted Reach</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      From local businesses to global enterprises, social media ads let you pinpoint exactly who needs to see your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Your Social Media Success, Simplified */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Social Media Success, Simplified
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We take the stress and guesswork out of social media marketing. Our strategic approach combines creativity, data analysis, and a deep understanding of your target audience to create a social media presence that drives real business growth. Here's how we do it:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  Discovery and Strategy
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We learn your brand voice, audience demographics, and goals. Then, we build a custom roadmap detailing which platforms and content types will generate the biggest impact.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  </div>
                  Content Creation and Curation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Say goodbye to aimless posting. We craft scroll-stopping visuals, write engaging captions, and curate relevant content that sparks conversation.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Community Management
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Prompt, friendly engagement is the key to turning casual scrollers into dedicated fans. We monitor comments, messages, and reviews to keep your online communities thriving.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Paid Advertising
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Need an extra boost? Our targeted ad campaigns place your brand front and center, reaching potential customers who are primed to take action.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Analytics and Optimization
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We track engagement rates, conversions, and audience growth. By continuously reviewing the numbers, we fine-tune your strategy for consistent improvements.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Proven Results
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our clients see real, measurable growth in their social media presence, engagement, and ultimately, their business. We're committed to delivering results that matter.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <figure className="mx-auto max-w-2xl">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                "Marketing isn't about instant sales; it's about being top-of-mind when your audience needs a solution. And social media marketing does that so perfectly well."
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Digital Marketing Expert</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Website Alchemy</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Turning Social Conversations into Tangible Results */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Measurable Outcomes</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Turning Social Conversations into Tangible Results
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our strategic approach to social media marketing delivers real business impact, helping you achieve concrete goals that drive growth and build lasting relationships.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="h-12 w-12 flex-none rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Growing Brand Awareness
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    More people recognizing and resonating with your mission. We help expand your reach and create memorable brand experiences that stick with your audience.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="h-12 w-12 flex-none rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 00-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  Driving Traffic and Sales
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Strategic posts and ads that guide viewers straight to your website or store. We create conversion-focused content that turns followers into customers.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="h-12 w-12 flex-none rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Building Trust & Loyalty
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Frequent, meaningful interactions show you're more than just a faceless business. We help humanize your brand and foster deeper connections with your audience.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="h-12 w-12 flex-none rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Staying Competitive
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Regular updates, trending content, and fresh ideas keep you relevant in a fast-paced market. We help you stay ahead of the curve and outshine your competition.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* SMM as Part of a Bigger Digital Strategy */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Integrated Approach</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                SMM as Part of a Bigger Digital Strategy
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Social media doesn't exist in a vacuum. Pairing it with robust SEO, a user-friendly website, and a solid email marketing plan ensures you get the most bang for your buck. Think of it as one powerful puzzle piece that complements the rest of your marketing framework—creating a cohesive brand experience for your customers.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    SEO Synergy
                  </dt>
                  <dd className="inline text-base text-gray-600"> - Social signals boost your search rankings</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    Content Amplification
                  </dt>
                  <dd className="inline text-base text-gray-600"> - Extend the reach of your blog and website content</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    Email List Growth
                  </dt>
                  <dd className="inline text-base text-gray-600"> - Convert social followers into email subscribers</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    Unified Analytics
                  </dt>
                  <dd className="inline text-base text-gray-600"> - Track the customer journey across all touchpoints</dd>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10">
                <img
                  src="/services/digital-strategy.svg"
                  alt="Digital marketing strategy diagram showing how social media connects with other channels"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-transparent to-transparent opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Connect With Your Audience? */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
            
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 p-6">
              <ClientCalendly />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Connect With Your Audience?</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You've got a story worth sharing, and we're here to help you tell it—loud and clear. Let's turn everyday social platforms into a dynamic stage for your brand. Ready to see what happens when your audience genuinely connects with your message?
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact Us
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms We Specialize In */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Platforms We Specialize In</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We craft tailored strategies for each platform, ensuring your brand's message resonates with the right audience in the right way.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Facebook */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 4h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-8 text-gray-900">Facebook</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Reach a massive, diverse audience with engaging posts, targeted ads, and community-building groups. We help you harness Facebook's wide-ranging tools to spark meaningful conversations and drive conversions.
              </p>
            </div>

            {/* Instagram */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-8 text-gray-900">Instagram</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Showcase your brand's visual side through stunning images, Reels, and Stories. From aesthetic cohesion to influencer collaborations, we'll help you create content that stops the scroll—and keeps your audience coming back.
              </p>
            </div>

            {/* X (Twitter) */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-8 text-gray-900">X (Twitter)</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Engage in real-time conversations, share quick updates, and establish your brand's voice on X (formerly Twitter). We'll guide you in crafting messages that cut through the noise and prompt genuine interaction.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-8 text-gray-900">LinkedIn</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Position yourself as an industry leader and connect with decision-makers in the professional world. Our LinkedIn strategies focus on thought leadership content, networking, and lead generation tailored for the B2B space.
              </p>
            </div>

            {/* TikTok */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 12A4 4 0 1 0 9 4 4 4 0 0 0 9 12z"></path>
                  <path d="M15 12V5c0-1.7-1.3-3-3-3h-1"></path>
                  <rect x="13" y="5" width="6" height="8" rx="3"></rect>
                  <path d="M9 12v7a3 3 0 0 0 6 0v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-8 text-gray-900">TikTok</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Capture attention with short, snappy videos that showcase your brand's personality. We'll show you how to tap into TikTok's viral nature, from brainstorming trending ideas to optimizing your content for maximum reach.
              </p>
            </div>

            {/* Pinterest */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path>
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
              <h3 className="text-xl font-bold leading-8 text-gray-900">Pinterest</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Turn inspiration into action by sharing eye-catching pins that link directly to your products or services. We'll help you design boards, optimize descriptions, and attract pinners ready to buy or learn more.
              </p>
            </div>

            {/* YouTube */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 h-full sm:col-span-1 lg:col-span-3 lg:max-w-2xl lg:mx-auto">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold leading-8 text-gray-900">YouTube</h3>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                Make a lasting impact with high-quality videos—from how-tos and product demos to storytelling that resonates with viewers. We'll guide you in building a channel that entertains, informs, and amplifies your brand's visibility.
              </p>
            </div>
          </div>
        </div>
      </div>


    </PageLayout>
  );
}
