import { Clock, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1667068114508-0055f7fb25a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWR8ZW58MXx8fHwxNzYwNzk2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church worship with hands raised"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6">
            Welcome to Christ Heritage
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            A community of believers growing in faith, hope, and love. Join us as we worship together and experience God's transforming power.
          </p>

          {/* Service Times */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
            <h3 className="text-white mb-4">Service Times</h3>
            <div className="space-y-3 text-gray-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Sunday Service: 8:00 AM - 11:00 AM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Mid-Week Service: Wednesday 6:00 PM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>123 Victory Road, Ikeja, Lagos</span>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-amber-600/90 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-white mb-3">Our Vision</h3>
            <p className="text-white">
              To be a beacon of light in our community, raising disciples who will transform their world through the power of the Gospel and demonstrate God's love in practical ways.
            </p>
          </div>

          {/* Latest News */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <h3 className="text-blue-900 mb-4">Latest Announcements</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <p className="text-gray-700 mb-1">
                  <span className="text-amber-600">New Members Class</span> - Starting October 27, 2025
                </p>
                <p className="text-gray-600 text-sm">Join us every Saturday at 4:00 PM for our 4-week new members orientation.</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <p className="text-gray-700 mb-1">
                  <span className="text-amber-600">Youth Conference 2025</span> - November 15-17, 2025
                </p>
                <p className="text-gray-600 text-sm">Three days of powerful worship, teaching, and fellowship. Registration now open!</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <p className="text-gray-700 mb-1">
                  <span className="text-amber-600">Community Outreach</span> - Every Last Saturday
                </p>
                <p className="text-gray-600 text-sm">Join us as we share God's love with our community through practical care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
