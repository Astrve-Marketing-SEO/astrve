import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-white to-gray-50/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.04) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-indigo-50 opacity-20 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-50 opacity-20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900">About ASTRVE Marketing & SEO</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              ASTRVE Marketing & SEO is a digital marketing agency specializing in website design and development, social media, SEO, and more. We deliver results-driven strategies to help your business thrive online.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Website Design & Development',
                'Digital Marketing Strategy',
                'SEO Optimization',
                'Social Media Management',
                'Content Creation'
              ].map((service) => (
                <li key={service}>
                  <Link href={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                        className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Blog',
                'Case Studies',
                'Free Tools',
                'Newsletter'
              ].map((resource) => (
                <li key={resource}>
                  <Link href={`/${resource.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@astrve.com" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  contact@astrve.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+14699075923" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  (469) 907-5923
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <a href="https://astrve.com" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  astrve.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 sm:pt-10">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; {new Date().getFullYear()} ASTRVE Marketing & SEO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
