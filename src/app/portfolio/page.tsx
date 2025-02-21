import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'Custom e-commerce platform with integrated payment processing',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
    category: 'Web Development'
  },
  {
    title: 'Restaurant Website',
    description: 'Modern website with online ordering system',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    category: 'Web Design'
  },
  {
    title: 'Digital Marketing Campaign',
    description: 'Comprehensive social media and SEO campaign',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    category: 'Digital Marketing'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
    category: 'Web Development'
  },
  {
    title: 'Healthcare Provider',
    description: 'Medical practice website with appointment booking',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
    category: 'Web Design'
  },
  {
    title: 'Tech Startup',
    description: 'Brand identity and website development',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop',
    category: 'Branding'
  }
];

export default function PortfolioPage() {
  return (
    <PageLayout>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Showcasing our best work and success stories
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Featured Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transforming Digital Presence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a look at some of our recent projects and the results we&apos;ve achieved for our clients.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {project.category}
                    </p>
                    <div className="mt-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let&apos;s create something amazing together
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Your Project
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                View Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
