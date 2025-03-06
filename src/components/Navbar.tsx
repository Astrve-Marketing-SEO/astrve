"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
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
  const dropdownRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const handleDropdownToggle = (name: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Handle clicking outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeDropdown && !dropdownRefs.current.get(activeDropdown)?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Register ref for dropdown
  const registerDropdownRef = (name: string, element: HTMLDivElement | null) => {
    if (element) {
      dropdownRefs.current.set(name, element);
    } else {
      dropdownRefs.current.delete(name);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-rich-black/90 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-rich-gray py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-gold-300 font-serif tracking-wider">Welcome to ASTRVE Marketing & SEO</div>
          <div className="flex items-center gap-6">
            <div className="text-gold-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@astrve.com" className="hover:text-gold-400 tracking-wider">contact@astrve.com</a>
            </div>
            <div className="text-gold-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+14699075923" className="hover:text-gold-400 tracking-wider">(469) 907-5923</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-serif text-xl gold-text tracking-widest">
            ASTRVE
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <div className="flex items-center" ref={(element) => registerDropdownRef(`desktop-${item.name}`, element)}>
                  <Link
                    href={item.href}
                    className="text-sm font-serif text-gold-300 hover:text-gold-400 transition-colors tracking-wider"
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={(event) => handleDropdownToggle(`desktop-${item.name}`, event)}
                    className="ml-1 p-1 flex items-center text-gold-300 hover:text-gold-400"
                    aria-label="Toggle dropdown"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === `desktop-${item.name}` ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === `desktop-${item.name}` && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-rich-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm font-serif text-gold-300 hover:bg-rich-gray hover:text-gold-400 tracking-wider"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-serif text-gold-300 hover:text-gold-400 transition-colors tracking-wider"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center">
          <Link
            href="/contact"
            className="ml-8 inline-flex items-center justify-center rounded-md px-4 py-2 gold-btn shadow-md hover:shadow-lg tracking-widest text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gold-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-rich-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif text-xl gold-text tracking-widest">
              ASTRVE
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gold-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-rich-gray/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <div className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5" ref={(element) => registerDropdownRef(`mobile-${item.name}`, element)}>
                          <Link
                            href={item.href}
                            className="text-base font-serif text-gold-300 hover:text-gold-400 tracking-wider"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={(event) => handleDropdownToggle(`mobile-${item.name}`, event)}
                            className="p-1 text-gold-300 hover:text-gold-400"
                            aria-label="Toggle dropdown"
                          >
                            <svg
                              className={`h-5 w-5 flex-none transition-transform ${
                                activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        {activeDropdown === `mobile-${item.name}` && (
                          <div className="mt-2 space-y-2 pl-7">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block rounded-lg py-2 pl-3 pr-3.5 text-sm font-serif text-gold-300 hover:bg-rich-gray hover:text-gold-400 tracking-wider"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
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
                        className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-serif text-gold-300 hover:bg-rich-gray hover:text-gold-400 tracking-wider"
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
                  href="/contact"
                  className="block rounded-md px-4 py-2 text-center gold-btn shadow-md tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
