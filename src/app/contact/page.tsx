import PageLayout from '@/components/PageLayout';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your online presence? We're here to help you succeed.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-4">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600" />
                    <a href="mailto:contact@astrve.com" className="text-base text-gray-900 hover:text-indigo-600">
                      contact@astrve.com
                    </a>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <PhoneIcon className="h-6 w-6 text-indigo-600" />
                    <a href="tel:+14699075923" className="text-base text-gray-900 hover:text-indigo-600">
                      (469) 907-5923
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                  <dl className="mt-3 space-y-1 text-base text-gray-600">
                    <div>
                      <dt className="font-semibold inline">Monday-Friday:</dt>
                      <dd className="inline"> 9:00 AM - 6:00 PM CST</dd>
                    </div>
                    <div>
                      <dt className="font-semibold inline">Saturday:</dt>
                      <dd className="inline"> By appointment only</dd>
                    </div>
                    <div>
                      <dt className="font-semibold inline">Sunday:</dt>
                      <dd className="inline"> Closed</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-6">
                <h2 className="text-2xl font-bold tracking-tight mb-6 text-gray-900">Schedule a Consultation</h2>
                <div className="w-full h-[600px] overflow-hidden">
                  {/* Calendar Embed */}
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/U7Wzv9plr0yEjHTQv2cp" 
                    style={{ width: '100%', border: 'none', overflow: 'hidden', height: '100%' }} 
                    scrolling="no" 
                    id="msgsndr-calendar">
                  </iframe>
                  <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="mt-16 py-16 sm:mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Our team is ready to help you achieve your business goals. Let's create something amazing together.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-xl bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
