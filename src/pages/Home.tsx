import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Users, Heart, BookOpen, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

// Icon mapping
const iconMap = {
  users: Users,
  calendar: Calendar,
  heart: Heart,
  book: BookOpen,
  sparkles: Sparkles
};

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface Announcement {
  _id: string;
  title: string;
  description: string;
  image?: any;
  icon: string;
  label: string;
  linkText: string;
}

export function Home() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const query = `*[_type == "announcement" && isActive == true] | order(_createdAt desc)[0...6] {
          _id,
          title,
          description,
          image,
          icon,
          label,
          linkText
        }`;
        
        const data = await client.fetch(query);
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559005446-facbaebc2537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwc3Vuc2V0JTIwd29yc2hpcHxlbnwxfHx8fDE3NjA4NTkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Worship at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-cyan-900/90"></div>
          
          {/* Animated overlay patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-white text-sm">Welcome Home</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Experience God's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300">
                Transforming Love
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our family as we grow together in faith, worship with purpose, and make a lasting impact in our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="group bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Visit Us This Sunday
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Card - Overlapping */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-4 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-blue-900 mb-2">Sunday Service</h3>
                <p className="text-blue-600 text-lg">8:00 AM - 11:00 AM</p>
                <p className="text-gray-600 text-sm mt-1">Main Worship Service</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-blue-900 mb-2">Mid-Week Service</h3>
                <p className="text-blue-600 text-lg">Wednesday 6:00 PM</p>
                <p className="text-gray-600 text-sm mt-1">Bible Study & Prayer</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-blue-900 mb-2">Our Location</h3>
                <p className="text-blue-600 text-lg">Ikeja, Lagos</p>
                <p className="text-gray-600 text-sm mt-1">123 Victory Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-sm mb-4">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl text-blue-900 mb-6">
                Transforming Lives Through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  The Power of the Gospel
                </span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are a beacon of light in our community, raising disciples who will transform their world through faith, hope, and love. Together, we're building a church family that impacts Lagos and beyond.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-blue-900 mb-3">Love & Community</h3>
                <p className="text-gray-700">
                  Experience authentic fellowship in a family that cares. We believe in building meaningful relationships grounded in Christ's love.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-blue-900 mb-3">Biblical Teaching</h3>
                <p className="text-gray-700">
                  Grow in your faith through sound, practical teaching from God's Word that applies to everyday life.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-blue-900 mb-3">Spirit-Led Worship</h3>
                <p className="text-gray-700">
                  Encounter God's presence through passionate, authentic worship that touches hearts and transforms lives.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-blue-900 mb-3">Community Impact</h3>
                <p className="text-gray-700">
                  Making a real difference through compassionate service, outreach programs, and practical care for those in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements - NOW WITH OPTIONAL IMAGES */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4 border border-white/20">
              What's Happening
            </span>
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Latest Announcements
            </h2>
            <p className="text-xl text-gray-200">
              Stay updated with upcoming events and church news
            </p>
          </div>

          {loading ? (
            <div className="text-center text-white">
              <div className="inline-block w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              <p className="mt-4">Loading announcements...</p>
            </div>
          ) : announcements.length > 0 ? (
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {announcements.map((announcement, index) => {
                  const IconComponent = iconMap[announcement.icon as keyof typeof iconMap] || Users;
                  
                  // Cycle through colors
                  const colors = [
                    { bg: 'bg-cyan-500', text: 'text-cyan-300' },
                    { bg: 'bg-indigo-500', text: 'text-indigo-300' },
                    { bg: 'bg-blue-500', text: 'text-blue-300' },
                    { bg: 'bg-purple-500', text: 'text-purple-300' },
                  ];
                  const colorIndex = index % colors.length;
                  const color = colors[colorIndex];
                  
                  return (
                    <div key={announcement._id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all">
                      {/* Optional Image */}
                      {announcement.image && (
                        <div className="w-full h-48 overflow-hidden">
                          <img 
                            src={urlFor(announcement.image).width(600).height(400).url()} 
                            alt={announcement.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <span className={`${color.text} text-sm`}>{announcement.label}</span>
                        </div>
                        <h3 className="text-white mb-3">{announcement.title}</h3>
                        <p className="text-gray-200 mb-4">
                          {announcement.description}
                        </p>
                        <a href="/events" className={`${color.text} hover:opacity-80 inline-flex items-center gap-2 transition-colors`}>
                          {announcement.linkText}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center text-white">
              <p>No announcements at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Whether you're new to faith or looking for a church home, you're welcome here. Join us this Sunday and experience authentic community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Plan Your Visit
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all inline-flex items-center justify-center"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}