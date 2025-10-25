import { Church, Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Church className="w-7 h-7 text-white" />
              </div>
              <span className="text-xl text-white">Christ Heritage</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A community of believers growing in faith, hope, and love. Join us as we worship together and experience God's transforming power.
            </p>
            <div className="flex items-center gap-2 text-cyan-300">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Faith • Hope • Love</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Ministries', href: '/ministries' },
                { name: 'Events', href: '/events' },
                { name: 'Sermons', href: '/sermons' },
                { name: 'Give', href: '/give' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                <span className="text-sm leading-relaxed">123 Victory Road<br />Off Allen Avenue<br />Ikeja, Lagos</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                <a href="tel:+2348031234567" className="text-sm hover:text-cyan-300 transition-colors">
                  +234 803 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                <a href="mailto:info@christheritage.ng" className="text-sm hover:text-cyan-300 transition-colors">
                  info@christheritage.ng
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-xl text-white mb-6">Service Times</h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-8">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span>Sunday: 8:00 AM - 11:00 AM</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span>Wednesday: 6:00 PM - 8:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span>Friday: 6:00 AM - 7:00 AM</span>
              </li>
            </ul>
            
            <h3 className="text-xl text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-blue-600 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all transform hover:scale-110 border border-white/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all transform hover:scale-110 border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-red-600 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all transform hover:scale-110 border border-white/20"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} Christ Heritage. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm text-center md:text-right">
              Built with faith, hope & love ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
