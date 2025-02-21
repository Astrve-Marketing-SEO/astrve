import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <PageLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Terms and Conditions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Last updated: February 19, 2025
            </p>
          </div>

          <div className="mt-16 prose prose-lg prose-indigo mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg text-black">
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to be bound by these Terms and Conditions and comply
              with all applicable laws and regulations. If you do not agree with any of these terms, you
              are prohibited from using or accessing this site.
            </p>

            <h2>2. Services</h2>
            <p>
              Website Alchemy provides web design, development, and digital marketing services. All services
              are provided &quot;as is&quot; and &quot;as available&quot; for your use, without any representation, warranties
              or conditions of any kind.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by Website Alchemy
              and are protected by international copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              You are responsible for ensuring that all persons who access our website through your internet
              connection are aware of these Terms and Conditions and comply with them.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms for our services will be outlined in individual service agreements. All fees are
              non-refundable unless otherwise specified in writing.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Website Alchemy be liable for any indirect, incidental, special,
              consequential or punitive damages, including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms of service at any time. We will notify users of
              any changes by updating the date at the top of this page.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: contact@website-alchemy.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Digital Way, Silicon Valley, CA 94025</li>
            </ul>

            <div className="mt-12 text-center">
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
