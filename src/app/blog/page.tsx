import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Importance of Mobile-First Design',
    description: 'Learn why designing for mobile devices should be your primary focus in 2025',
    author: 'Sarah Johnson',
    date: 'February 15, 2025',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop'
  },
  {
    title: 'SEO Best Practices for 2025',
    description: 'Stay ahead of the curve with these essential SEO strategies',
    author: 'Michael Chen',
    date: 'February 10, 2025',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=800&auto=format&fit=crop'
  },
  {
    title: 'Maximizing Social Media ROI',
    description: 'Effective strategies to improve your social media marketing returns',
    author: 'Emily Rodriguez',
    date: 'February 5, 2025',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop'
  },
  {
    title: 'The Future of E-commerce',
    description: 'Emerging trends and technologies shaping online retail',
    author: 'David Kim',
    date: 'January 30, 2025',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop'
  },
  {
    title: 'Website Security Essentials',
    description: 'Protect your website with these crucial security measures',
    author: 'Lisa Thompson',
    date: 'January 25, 2025',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop'
  },
  {
    title: 'Optimizing Website Performance',
    description: 'Tips and techniques for faster loading websites',
    author: 'James Wilson',
    date: 'January 20, 2025',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop'
  }
];

export default function BlogPage() {
  return (
    <PageLayout>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Blog & Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Insights and updates from the world of digital marketing and web development
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Want to stay updated?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
