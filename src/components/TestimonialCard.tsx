import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export default function TestimonialCard({ quote, name, title, imageUrl }: TestimonialCardProps) {
  return (
    <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-6">
        {/* Quote */}
        <p className="text-gray-600 leading-relaxed">
          "{quote}"
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              width={48}
              height={48}
              className="object-cover rounded-full"
              unoptimized
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-transparent rounded-tr-2xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-50 to-transparent rounded-bl-2xl -z-10"></div>
    </div>
  );
}
