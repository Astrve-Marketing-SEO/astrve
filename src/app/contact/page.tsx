import PageLayout from '@/components/PageLayout';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-400 to-gold-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-serif tracking-wider gold-heading sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 font-serif tracking-wide">
              Ready to transform your online presence? We're here to help you succeed.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif tracking-wider gold-heading">Contact Information</h2>
                  <p className="mt-6 text-base leading-7 text-gray-400 font-serif tracking-wide">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-4">
                    <EnvelopeIcon className="h-6 w-6 text-gold-400" />
                    <a href="mailto:contact@astrve.com" className="text-base text-gray-300 hover:text-gold-400 font-serif tracking-wide">
                      contact@astrve.com
                    </a>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <PhoneIcon className="h-6 w-6 text-gold-400" />
                    <a href="tel:+14699075923" className="text-base text-gray-300 hover:text-gold-400 font-serif tracking-wide">
                      (469) 907-5923
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif tracking-wider text-gold-300">Office Hours</h3>
                  <dl className="mt-3 space-y-1 text-base text-gray-400 font-serif tracking-wide">
                    <div>
                      <dt className="font-serif inline">Monday-Friday:</dt>
                      <dd className="inline"> 9:00 AM - 6:00 PM CST</dd>
                    </div>
                    <div>
                      <dt className="font-serif inline">Saturday:</dt>
                      <dd className="inline"> By appointment only</dd>
                    </div>
                    <div>
                      <dt className="font-serif inline">Sunday:</dt>
                      <dd className="inline"> Closed</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <div className="bg-rich-dark/70 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-gray-800">
                <h2 className="text-2xl font-serif tracking-wider gold-heading mb-6">Schedule a Consultation</h2>
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
        <div className="mt-16 py-16 sm:mt-24 bg-gradient-to-r from-gold-700 to-gold-500 rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-serif tracking-wider text-rich-black sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-rich-black/80 font-serif tracking-wide">
                Our team is ready to help you achieve your business goals. Let's create something amazing together.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-xl bg-rich-black px-6 py-3 text-lg font-serif tracking-widest text-gold-400 shadow-sm hover:bg-rich-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
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
