import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <PageLayout>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Website Alchemy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transforming digital presence through innovative web solutions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Crafting Digital Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Website Alchemy was founded with a simple yet powerful mission: to help businesses transform
            their online presence into powerful tools for growth. We combine technical expertise with
            creative innovation to deliver exceptional digital solutions.
          </p>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Drives Us
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Innovation</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We stay ahead of digital trends to deliver cutting-edge solutions
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Excellence</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We strive for perfection in every project we undertake
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Integrity</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We build trust through transparency and honesty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do Best
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Web Development
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Custom websites built with modern technologies and best practices
                </p>
              </div>
              <div className="relative rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Digital Marketing
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Comprehensive marketing strategies to grow your online presence
                </p>
              </div>
              <div className="relative rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  SEO & Analytics
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Data-driven optimization for better search visibility
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
              Ready to transform your digital presence?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let&apos;s work together to achieve your digital goals
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </Link>
              <Link href="/portfolio" className="text-sm font-semibold leading-6 text-gray-900">
                View Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
