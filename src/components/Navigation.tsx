import { useState } from 'react';
import { Menu, X, Church, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Give', href: '/give' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-2.5 rounded-xl">
                <Church className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <span className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold">
                Christ Heritage
              </span>
              <span className="block text-xs text-blue-500/80">Faith • Hope • Love</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPath === link.href
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-md'
                    : 'text-blue-900 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="/give"
            onClick={(e) => handleNavClick(e, '/give')}
            className="hidden lg:block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Give
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-blue-600" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-xl">
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  currentPath === link.href
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-md'
                    : 'text-blue-900 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
