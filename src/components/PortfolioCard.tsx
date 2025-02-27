import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function PortfolioCard({ title, description, image, href }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">
          {description}
        </p>
        <Link 
          href={href} 
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          View Project <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
