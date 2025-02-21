import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

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
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Email Marketing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with your audience through targeted and effective email campaigns
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
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Email Marketing Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Drive Results with Email Marketing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We create and manage email marketing campaigns that engage your audience and drive conversions.
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
              How we create successful email campaigns
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Strategy</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Develop targeted email marketing strategies
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Design</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Create engaging email templates
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Automate</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Set up automated email workflows
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Optimize</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Test and improve campaign performance
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
              Ready to start email marketing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let&apos;s create email campaigns that engage and convert
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
