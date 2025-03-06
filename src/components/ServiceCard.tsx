import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export default function ServiceCard({ title, description, href, icon: Icon, className }: ServiceCardProps) {
  return (
    <div className={`relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${className || 'bg-white'}`}>
      <div className="space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg shadow-gold-100/50">
          <Icon className="h-6 w-6 text-rich-black" aria-hidden="true" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground font-serif">{title}</h3>
          <p className="text-gray-300 leading-relaxed font-sans">{description}</p>
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors group font-sans"
        >
          Learn More
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
