import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with us through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-blue-900 mb-2">Our Location</h3>
                  <p className="text-gray-700">
                    123 Victory Road, Off Allen Avenue<br />
                    Ikeja, Lagos State<br />
                    Nigeria
                  </p>
                  <a
                    href="https://maps.google.com/?q=123+Victory+Road+Ikeja+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-blue-900 mb-2">Phone</h3>
                  <p className="text-gray-700 mb-2">+234 803 123 4567</p>
                  <a
                    href="https://wa.me/2348031234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-blue-900 mb-2">Email</h3>
                  <a href="mailto:info@gracelifechurch.ng" className="text-gray-700 hover:text-amber-600 transition-colors">
                    info@gracelifechurch.ng
                  </a>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-blue-900 mb-3">Service Times</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="text-amber-600">Sunday Service:</span> 8:00 AM - 11:00 AM</p>
                    <p><span className="text-amber-600">Mid-Week Service:</span> Wednesday 6:00 PM</p>
                    <p><span className="text-amber-600">Prayer Meeting:</span> Friday 6:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-blue-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[500px]">
              <iframe
                title="Christ Heritage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2161474267844!2d3.3554927!3d6.6126894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a14e3e2d8b%3A0x2c6d638f0f9eaf3b!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Visit Us CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-white mb-4">First Time Visitor?</h3>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            We'd love to welcome you! When you arrive, our hospitality team will be ready to greet you, answer your questions, and help you feel at home. Come as you are - you are welcome here!
          </p>
        </div>
      </div>
    </section>
  );
}
