import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '/contact',
    priceMonthly: 'Custom Quote',
    description: 'Perfect for small businesses just starting their digital journey.',
    features: [
      'Custom website design',
      'Mobile responsive layout',
      'Basic SEO setup',
      '3 pages included',
      'Contact form integration',
      '1 month of maintenance',
      'Basic analytics setup',
      'SSL certificate',
    ],
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/contact',
    priceMonthly: 'Custom Quote',
    description: 'Ideal for growing businesses seeking comprehensive digital presence.',
    features: [
      'Everything in Basic, plus:',
      'Up to 7 pages',
      'Blog setup',
      'Advanced SEO optimization',
      'Social media integration',
      'Google Business Profile setup',
      '3 months of maintenance',
      'Content management system',
      'Performance optimization',
      'Custom contact forms',
    ],
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    priceMonthly: 'Custom Quote',
    description: 'Custom solutions for large businesses with specific requirements.',
    features: [
      'Everything in Professional, plus:',
      'Unlimited pages',
      'E-commerce integration',
      'Custom functionality',
      'Priority support',
      'Advanced analytics',
      '12 months of maintenance',
      'Monthly performance reports',
      'API integrations',
      'Custom database solutions',
    ],
  },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-400 to-gold-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-serif tracking-wider gold-heading sm:text-6xl">
              ROI So High, It's Basically Free
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 font-serif tracking-wide">
              Choose the perfect plan for your business needs. All plans include our core features and dedicated support.
            </p>
          </div>

          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-3xl p-8 ring-1 ring-gray-700 bg-rich-dark/60 backdrop-blur-sm xl:p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-gold-900/10"
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2 className="text-lg font-serif leading-8 gold-text tracking-wide">{tier.name}</h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-400 font-serif tracking-wide">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-serif tracking-wider text-gold-400">{tier.priceMonthly}</span>
                </p>
                <Link
                  href={tier.href}
                  className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-serif tracking-widest leading-6 text-rich-black gold-btn shadow-sm"
                >
                  Get Started
                </Link>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-400">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-gold-400" aria-hidden="true" />
                      <span className="font-serif tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif tracking-wider gold-heading sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400 font-serif tracking-wide">
              Have questions? We're here to help.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg font-serif tracking-wider text-gold-300">What's included in the maintenance?</h3>
              <p className="text-gray-400 font-serif tracking-wide">
                Maintenance includes regular updates, security patches, performance monitoring, and basic content updates.
                Higher tiers receive more comprehensive maintenance services.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-serif tracking-wider text-gold-300">How long does it take to complete a project?</h3>
              <p className="text-gray-400 font-serif tracking-wide">
                Basic websites typically take 2-4 weeks, while more complex projects may take 6-12 weeks. We'll provide a
                detailed timeline during our initial consultation.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-serif tracking-wider text-gold-300">Do you offer custom solutions?</h3>
              <p className="text-gray-400 font-serif tracking-wide">
                Yes! Our Enterprise tier is fully customizable to meet your specific needs. Contact us to discuss your
                requirements and get a custom quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
