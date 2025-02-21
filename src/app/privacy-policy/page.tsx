import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Last updated: February 19, 2025
            </p>
          </div>

          <div className="mt-16 prose prose-lg prose-indigo mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100/20">
            <div className="space-y-8">
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Website Alchemy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website.
            </p>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us such as:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business information</li>
              <li>Payment information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP addresses</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
              <li>Cookies and similar technologies</li>
            </ul>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect for:</p>
            <ul>
              <li>Providing and maintaining our services</li>
              <li>Responding to your inquiries</li>
              <li>Improving our website and services</li>
              <li>Sending marketing communications</li>
              <li>Complying with legal obligations</li>
            </ul>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your
              information with:
            </p>
            <ul>
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors</li>
            </ul>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information. However, no method of transmission over the Internet is 100% secure.
            </p>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold
              certain information. You can instruct your browser to refuse all cookies or to indicate when
              a cookie is being sent.
            </p>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect
              personal information from children under 13.
            </p>

            </section>

            <section className="pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the date at the top.
            </p>

            </section>

            <section className="pb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@website-alchemy.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Digital Way, Silicon Valley, CA 94025</li>
            </ul>

            </section>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 hover:scale-105"
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
