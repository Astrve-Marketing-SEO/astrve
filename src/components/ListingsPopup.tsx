'use client';

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const listings = [
  {
    category: 'Restaurants',
    platforms: 'Yelp, TripAdvisor, OpenTable, Zomato (and potentially local food blogs/review sites)',
    importance: 'These platforms are where hungry customers actively search for places to eat. A strong presence here drives reservations and foot traffic.',
  },
  {
    category: 'Hotels',
    platforms: 'Booking.com, Expedia, Hotels.com, TripAdvisor (and potentially niche travel sites)',
    importance: 'These sites are essential for reaching travelers and securing bookings.',
  },
  {
    category: 'Home Services',
    platforms: 'Angi (formerly Angie\'s List), HomeAdvisor, Thumbtack, Yelp',
    importance: 'These platforms connect homeowners with trusted service providers, generating leads and building credibility.',
  },
  {
    category: 'Healthcare Providers',
    platforms: 'Healthgrades, Zocdoc, RateMDs (and potentially specialized directories for your specific field)',
    importance: 'These sites help patients find and evaluate healthcare professionals, driving appointments and building trust.',
  },
  {
    category: 'Salons and Spas',
    platforms: 'StyleSeat, Booksy, Yelp',
    importance: 'These are where most people find salons and spas in their area and book appointments.',
  },
  {
    category: 'E-commerce',
    platforms: 'Amazon, Etsy',
    importance: 'These platforms are where people search to buy products.',
  },
]

export default function ListingsPopup({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-8">
                      Industry-Specific Listings
                    </Dialog.Title>
                    <div className="space-y-8">
                      {listings.map((listing) => (
                        <div key={listing.category} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{listing.category}</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Key Platforms:</span> {listing.platforms}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Why They Matter:</span> {listing.importance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
