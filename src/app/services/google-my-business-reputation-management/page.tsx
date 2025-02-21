import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

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
  return (
    <PageLayout>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Google My Business Management
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Optimize your local presence and manage your online reputation effectively
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link href="/portfolio" className="text-sm font-semibold leading-6 text-gray-900">
                View Success Stories <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Reputation Management</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Google Business Profile Management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help businesses maintain a strong online presence through effective Google My Business
            management and reputation monitoring.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How we manage your online reputation
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Audit</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Review your current online presence and reputation
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Optimize</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Enhance your Google Business Profile
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Monitor</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Track and respond to reviews and updates
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Improve</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Continuously enhance your online reputation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to improve your online reputation?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let&apos;s enhance your Google Business Profile and manage your online presence
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
