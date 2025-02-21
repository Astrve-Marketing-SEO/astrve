'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoBadgeProps {
  logo: string
  name: string
}

export default function LogoBadge({ logo, name }: LogoBadgeProps) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative aspect-[3/2] w-full max-w-[240px] mx-auto">
        {/* Card Container */}
        <div className="relative h-full bg-white/80 rounded-2xl
          shadow-[0_4px_20px_rgba(0,0,0,0.04)]
          backdrop-blur-sm
          transition-all duration-300 group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]
          overflow-hidden
          border border-white/90">
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Logo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo}
                alt={name}
                className="object-contain transition-all duration-300 filter contrast-125"
                fill
                sizes="240px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Subtle Label */}
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600 font-medium tracking-wide">{name}</p>
        </div>
      </div>
    </motion.div>
  );
}
