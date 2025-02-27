"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const topBarLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Pinterest', href: '#', icon: 'pinterest' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Website Design & Development', href: '/services/website-design' },
      { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { name: 'Google My Business - Reputation Management', href: '/services/google-my-business-reputation-management' },
      { name: 'Email Marketing', href: '/services/email-marketing' },
      { name: 'SEO', href: '/services/seo' }
    ]
  },
  { name: 'Web Hosting', href: '/hosting' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-indigo-50">Welcome to Website Alchemy</div>
          <div className="flex items-center gap-6">
            <div className="text-indigo-50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +698 695 806
            </div>
            <div className="flex items-center gap-4">
              {topBarLinks.map((link) => (
                <a key={link.icon} href={link.href} className="text-indigo-50 hover:text-white transition-colors">
                  <span className="sr-only">{link.name}</span>
                  <i className={`fab fa-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">WA</div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Website Alchemy</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors mr-1"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
                    >
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                          role="menuitem"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#calendly"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200"
            >
              FREE Consultation
            </Link>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Website Alchemy</span>
              <span className="text-xl font-bold">Website Alchemy</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          <span>Services Menu</span>
                          <svg
                            className={`ml-2 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === item.name && (
                          <div className="mt-2 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#calendly"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  FREE Consultation
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
