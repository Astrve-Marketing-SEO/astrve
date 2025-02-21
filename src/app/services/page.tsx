import PageLayout from '@/components/PageLayout';
import ServiceCard from '@/components/ServiceCard';
import {
  GlobeAltIcon,
  PresentationChartLineIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              description="Take control of your online reputation. Monitor, manage, and improve how your business appears online."
              href="/services/google-my-business-reputation-management"
              icon={ChatBubbleBottomCenterTextIcon}
            />
            <ServiceCard
              title="Email Marketing"
              description="Connect with your audience through targeted email campaigns. Build relationships and drive conversions with personalized content."
              href="/services/email-marketing"
              icon={EnvelopeIcon}
            />
            <ServiceCard
              title="SEO"
              description="Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO services."
              href="/services/seo"
              icon={MagnifyingGlassIcon}
            />
          </dl>
        </div>
      </div>
    </PageLayout>
  );
}
