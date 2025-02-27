import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ShieldCheckIcon, DocumentTextIcon, UserGroupIcon, ServerIcon, LockClosedIcon, UserIcon, CogIcon, FingerPrintIcon, ExclamationTriangleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-24 lg:pt-28">
        {/* Background pattern */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto py-16 lg:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              <span className="flex-1">Data Protection</span>
              <div className="w-px h-4 bg-indigo-200"></div>
              <span className="text-indigo-500">Last Updated: February 19, 2025</span>
            </div>
            
            <h1 className="relative space-y-3">
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
              <div className="relative">
                <span className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">Privacy</span>
              </div>
              <div className="relative">
                <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </div>
            </h1>
            
            <div className="relative mt-8">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
              <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Website Alchemy is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>
          </div>
          
          {/* Main content */}
          <div className="mx-auto max-w-4xl pb-24">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-100 to-purple-50 opacity-30"></div>
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] -z-10"></div>
              
              <div className="relative space-y-10">
                <section id="introduction">
                  <div className="flex items-center gap-3 mb-4">
                    <DocumentTextIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      Website Alchemy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                      when you visit our website.
                    </p>
                  </div>
                </section>
                
                <section id="information-collection">
                  <div className="flex items-center gap-3 mb-4">
                    <UserGroupIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
                  </div>
                  <div className="pl-10">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">We may collect personal information that you provide to us such as:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Name and contact information</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Business information</li>
                        <li>Payment information</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">When you visit our website, we may automatically collect:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>IP addresses</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Usage data</li>
                        <li>Cookies and similar technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section id="information-usage">
                  <div className="flex items-center gap-3 mb-4">
                    <CogIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed mb-2">We may use the information we collect for:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Providing and maintaining our services</li>
                      <li>Responding to your inquiries</li>
                      <li>Improving our website and services</li>
                      <li>Sending marketing communications</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </section>
                
                <section id="information-sharing">
                  <div className="flex items-center gap-3 mb-4">
                    <ServerIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">4. Information Sharing</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We do not sell or rent your personal information to third parties. We may share your
                      information with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Service providers and business partners</li>
                      <li>Legal authorities when required by law</li>
                      <li>Professional advisors</li>
                    </ul>
                  </div>
                </section>
                
                <section id="data-security">
                  <div className="flex items-center gap-3 mb-4">
                    <LockClosedIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal
                      information. However, no method of transmission over the Internet is 100% secure.
                    </p>
                  </div>
                </section>
                
                <section id="your-rights">
                  <div className="flex items-center gap-3 mb-4">
                    <UserIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed mb-2">You have the right to:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Withdraw consent</li>
                    </ul>
                  </div>
                </section>
                
                <section id="cookies">
                  <div className="flex items-center gap-3 mb-4">
                    <FingerPrintIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">7. Cookies</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies and similar tracking technologies to track activity on our website and hold
                      certain information. You can instruct your browser to refuse all cookies or to indicate when
                      a cookie is being sent.
                    </p>
                  </div>
                </section>
                
                <section id="childrens-privacy">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheckIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">8. Children&apos;s Privacy</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      Our website is not intended for children under 13 years of age. We do not knowingly collect
                      personal information from children under 13.
                    </p>
                  </div>
                </section>
                
                <section id="policy-changes">
                  <div className="flex items-center gap-3 mb-4">
                    <ExclamationTriangleIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">9. Changes to This Privacy Policy</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by
                      posting the new Privacy Policy on this page and updating the date at the top.
                    </p>
                  </div>
                </section>
                
                <section id="contact-us">
                  <div className="flex items-center gap-3 mb-4">
                    <EnvelopeIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">10. Contact Us</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm flex items-start gap-3">
                        <EnvelopeIcon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Email</h3>
                          <p className="mt-1 text-sm text-gray-600">privacy@website-alchemy.com</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm flex items-start gap-3">
                        <PhoneIcon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Phone</h3>
                          <p className="mt-1 text-sm text-gray-600">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm flex items-start gap-3">
                        <MapPinIcon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Address</h3>
                          <p className="mt-1 text-sm text-gray-600">123 Digital Way, Silicon Valley, CA 94025</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10 flex justify-center">
                      <Link
                        href="/contact"
                        className="relative rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-indigo-100 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 flex items-center gap-2"
                      >
                        <span>Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </PageLayout>
  );
}
