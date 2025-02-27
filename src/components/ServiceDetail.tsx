'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface KeyTakeaway {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  imageSrc: string;
  keyTakeaways: KeyTakeaway[];
  ctaText: string;
  ctaLink: string;
}

export default function ServiceDetail({
  title,
  description,
  imageSrc,
  keyTakeaways,
  ctaText,
  ctaLink,
}: ServiceDetailProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-white border border-indigo-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
            <div className="relative inline-block mb-6">
              <button
                className="text-indigo-600 font-medium flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Key Takeaways 🔍
              </button>
              
              {showTooltip && (
                <div className="absolute z-10 left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <ul className="space-y-3">
                    {keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="text-sm">
                        <span className="font-semibold text-gray-800">{takeaway.title}:</span>{' '}
                        <span className="text-gray-600">{takeaway.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors duration-200 group"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
