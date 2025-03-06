import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
  className?: string;
}

export default function TestimonialCard({ quote, name, title, imageUrl, className }: TestimonialCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl transition-shadow duration-300 ${className || 'bg-white shadow-lg hover:shadow-xl'}`}>
      <div className="space-y-6">
        {/* Quote */}
        <p className="text-gray-300 leading-relaxed font-sans">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              width={48}
              height={48}
              className="object-cover rounded-full border border-gold-500/30"
              unoptimized
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground font-serif">{name}</h4>
            <p className="text-sm text-gold-400 font-sans">{title}</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/10 to-transparent rounded-tr-2xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold-400/10 to-transparent rounded-bl-2xl -z-10"></div>
    </div>
  );
}
