import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-cyan-900/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            We'd Love to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Hear From You
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Whether you're new, need prayer, or have questions, we're here for you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-orange-900 mb-3">Visit Us</h3>
              <p className="text-gray-700 leading-relaxed">
                123 Victory Road<br />
                Off Allen Avenue<br />
                Ikeja, Lagos
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-orange-900 mb-3">Call Us</h3>
              <p className="text-gray-700 mb-3">+234 803 123 4567</p>
              <a
                href="https://wa.me/2348031234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-orange-900 mb-3">Email Us</h3>
              <a
                href="mailto:info@gracelifechurch.ng"
                className="text-gray-700 hover:text-orange-600 transition-colors break-words"
              >
                info@gracelifechurch.ng
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-orange-900 mb-3">Service Times</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p>Sun: 8AM - 11AM</p>
                <p>Wed: 6PM - 8PM</p>
                <p>Fri: 6AM - 7AM</p>
              </div>
            </div>
          </div>

          {/* Map & Form Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                <iframe
                  title="Christ Heritage Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2161474267844!2d3.3554927!3d6.6126894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a14e3e2d8b%3A0x2c6d638f0f9eaf3b!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=123+Victory+Road+Ikeja+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all w-full transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Contact Form Placeholder & Social */}
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 border-2 border-orange-100 shadow-xl mb-8">
                <h3 className="text-2xl text-orange-900 mb-6">Send Us a Message</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none bg-white resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-orange-100">
                <h3 className="text-2xl text-orange-900 mb-6 text-center">Follow Us on Social Media</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 rounded-xl flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Time Visitor CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Planning Your First Visit?
              </h2>
              <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                We'd love to welcome you! When you arrive, our hospitality team will be ready to greet you, answer your questions, and help you feel at home. Come as you are—you are welcome here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="inline-block bg-white hover:bg-gray-50 text-orange-600 px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Learn More About Us
                </a>
                <a
                  href="https://wa.me/2348031234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
