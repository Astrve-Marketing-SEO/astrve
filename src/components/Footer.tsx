import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="text-sm text-gray-600">
                <a href="mailto:contact@website-alchemy.com">contact@website-alchemy.com</a>
              </li>
              <li className="text-sm text-gray-600">(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Follow Us</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Website Alchemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
