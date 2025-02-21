import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  'Custom website design and development',
  'Responsive design for all devices',
  'Modern UI/UX implementation',
  'Fast loading speeds and optimization',
  'SEO-friendly structure',
  'Content management system integration',
  'E-commerce capabilities',
  'Security features and SSL certificates',
  'Analytics integration',
  'Regular maintenance and updates'
];

export default function WebsiteDesignPage() {
  return (
    <PageLayout>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Website Design & Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create a stunning online presence that converts visitors into customers
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link href="/portfolio" className="text-sm font-semibold leading-6 text-gray-900">
                View Portfolio <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Professional Web Design</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a world-class website
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We create beautiful, functional websites that help your business grow. Our designs are modern,
            responsive, and optimized for conversion.
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
              How we bring your vision to life
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Discovery</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We learn about your business, goals, and target audience
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Design</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Create wireframes and design mockups for your approval
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Development</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Build your website with clean, efficient code
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Launch</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Deploy your site and provide ongoing support
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
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let&apos;s create a website that helps your business grow
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
