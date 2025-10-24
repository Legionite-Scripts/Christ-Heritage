import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { client } from '../lib/sanity';

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  gradient: string;
  isFeatured: boolean;
  order: number;
}

export function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const query = `*[_type == "event" && isActive == true] | order(order asc) {
          _id,
          title,
          date,
          time,
          location,
          description,
          category,
          gradient,
          isFeatured,
          order
        }`;
        
        const data = await client.fetch(query);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const featuredEvents = events.filter(e => e.isFeatured);
  const regularEvents = events.filter(e => !e.isFeatured);

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
            What's Happening
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Upcoming Events &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Special Programs
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us for these exciting events and experience community, worship, and spiritual growth.
          </p>
        </div>
      </section>

      {loading ? (
        <div className="py-24 text-center">
          <div className="inline-block w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      ) : (
        <>
          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <span className="inline-block text-orange-600 bg-orange-50 px-4 py-2 rounded-full text-sm mb-6">
                    Don't Miss
                  </span>
                  <h2 className="text-4xl md:text-5xl text-orange-900 mb-4">
                    Featured Events
                  </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {featuredEvents.map((event) => (
                    <div
                      key={event._id}
                      className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 hover:shadow-2xl transition-all"
                    >
                      <div className={`h-48 bg-gradient-to-br ${event.gradient} p-8 relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                        </div>
                        <span className="relative inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm border border-white/30">
                          {event.category}
                        </span>
                        <h3 className="relative text-2xl text-white mt-6">{event.title}</h3>
                      </div>

                      <div className="p-8">
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3 text-gray-700">
                            <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regular Events */}
          {regularEvents.length > 0 && (
            <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <span className="inline-block text-orange-600 bg-white px-4 py-2 rounded-full text-sm mb-6 shadow-sm">
                    More Events
                  </span>
                  <h2 className="text-4xl md:text-5xl text-orange-900 mb-4">
                    Other Programs
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularEvents.map((event) => (
                    <div
                      key={event._id}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className={`inline-block bg-gradient-to-r ${event.gradient} text-white px-4 py-1.5 rounded-full text-sm`}>
                          {event.category}
                        </span>
                      </div>

                      <h3 className="text-2xl text-orange-900 mb-4">{event.title}</h3>

                      <div className="space-y-3 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* No Events Message */}
          {events.length === 0 && (
            <section className="py-24">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xl text-gray-600">No upcoming events at this time. Check back soon!</p>
              </div>
            </section>
          )}
        </>
      )}

      {/* Stay Updated CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 text-center border border-orange-100">
            <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl text-orange-900 mb-6">Stay Connected</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Don't miss out on any of our events! Follow us on social media or contact the church office to receive regular updates about our programs and activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Contact Church Office
              </a>
              <a
                href="#"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Follow on Social Media
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}