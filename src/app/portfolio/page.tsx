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
      
      <section className="relative bg-rich-black isolate px-6 pt-14 lg:px-8">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-gold-200/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-6xl">
              <span className="relative">
                <span className="relative z-10">Our</span>
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-gold-500/20 -rotate-1"></div>
              </span>
              <span className="block mt-2 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Showcasing our best work and success stories
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-rich-black py-16 sm:py-24">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.5))] opacity-10"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-sans border border-gold-500/20 mb-6">
              <span>Our Work</span>
              <div className="w-px h-4 bg-gold-500/30"></div>
              <span className="text-gold-300">Featured Projects</span>
            </div>
            
            <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent sm:text-4xl drop-shadow-sm">
              Transforming Digital Presence
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Take a look at some of our recent projects and the results we&apos;ve achieved for our clients.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/20 to-gold-100/10 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300 -z-10"></div>
                  <div className="flex-shrink-0 relative">
                    <Image
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-80"></div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-rich-dark/90 p-6 border border-gold-500/20">
                    <div className="flex-1">
                      <p className="text-sm font-sans font-medium text-gold-400">
                        {project.category}
                      </p>
                      <div className="mt-2">
                        <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-gold-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-base font-sans text-gray-300">
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
      </section>

      <section className="relative bg-rich-black mt-32 sm:mt-40 border-t border-gold-500/20">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-gold-200/10 opacity-20 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="relative z-10 px-6 py-24 sm:py-32 lg:px-8 xl:mx-auto xl:max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl">
              Ready to 
              <span className="relative inline-block ml-2">
                <span className="relative z-10 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">start your project?</span>
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-gold-500/20 -rotate-1"></div>
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Let&apos;s create something amazing together
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 text-base font-serif font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center gap-2 group"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="rounded-full px-6 py-3 text-base font-serif font-semibold text-gold-400 shadow-lg shadow-rich-black/50 hover:shadow-gold-500/10 transition-all duration-200 flex items-center gap-2 bg-rich-dark/90 backdrop-blur-sm group border border-gold-500/30"
              >
                View Our Services <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
