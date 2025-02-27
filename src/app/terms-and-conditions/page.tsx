import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { 
  DocumentTextIcon, 
  ScaleIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ClockIcon, 
  ExclamationTriangleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

export default function TermsAndConditionsPage() {
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
          <div className="text-center max-w-3xl mx-auto py-16 lg:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              <span className="flex-1">Legal Documentation</span>
              <div className="w-px h-4 bg-indigo-200"></div>
              <span className="text-indigo-500">Last Updated: February 28, 2025</span>
            </div>
            
            <h1 className="relative space-y-3">
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute right-8 bottom-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
              <div className="relative">
                <span className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">Terms and</span>
              </div>
              <div className="relative">
                <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                  Conditions
                </span>
              </div>
            </h1>
            
            <div className="relative mt-8">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-20"></div>
              <p className="pl-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Please read these terms carefully before using our services. By accessing our website, you agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
          
          {/* Main content */}
          <div className="mx-auto max-w-4xl pb-24">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-30"></div>
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] -z-10"></div>
              
              <div className="relative space-y-10">
                <section id="agreement">
                  <div className="flex items-center gap-3 mb-4">
                    <DocumentTextIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      By accessing **Business Name**'s website, you agree to be bound by these Terms and Conditions and comply
                      with all applicable laws and regulations. If you do not agree with any of these terms, you
                      are prohibited from using or accessing this site.
                    </p>
                  </div>
                </section>

                <section id="services">
                  <div className="flex items-center gap-3 mb-4">
                    <ScaleIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">2. Our Services</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      **Business Name** operates as a **Service/Business Type**. Our services include web development, 
                      digital marketing, and other online solutions. All services are provided "as is" and "as available."
                    </p>
                  </div>
                </section>

                <section id="contact">
                  <div className="flex items-center gap-3 mb-4">
                    <EnvelopeIcon className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">3. Contact Information</h2>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm flex items-start gap-3">
                        <EnvelopeIcon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Email</h3>
                          <p className="mt-1 text-sm text-gray-600">**Business Email**</p>
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
                          <p className="mt-1 text-sm text-gray-600">123 Business Street, City, State, Zip Code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}