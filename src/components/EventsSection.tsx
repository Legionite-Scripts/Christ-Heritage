import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Youth Conference 2025',
    date: 'November 15-17, 2025',
    time: 'All Day Event',
    location: 'Church Auditorium',
    description: 'Three days of powerful worship, inspiring messages, and life-changing fellowship. Theme: "Called for Such a Time as This". Registration fee: ₦5,000.',
    category: 'Conference',
  },
  {
    id: 2,
    title: 'New Members Class',
    date: 'Every Saturday in October',
    time: '4:00 PM - 6:00 PM',
    location: 'Fellowship Hall',
    description: 'Four-week orientation for new members. Learn about our beliefs, vision, and how to get connected. Classes start October 27.',
    category: 'Training',
  },
  {
    id: 3,
    title: 'Prayer & Fasting',
    date: 'November 1-7, 2025',
    time: 'Daily Prayer at 6:00 AM',
    location: 'Church Building',
    description: 'Join us for seven days of corporate prayer and fasting. Morning prayer sessions and evening teaching. Theme: "Seeking God for Breakthrough".',
    category: 'Prayer',
  },
  {
    id: 4,
    title: 'Community Outreach',
    date: 'Last Saturday Monthly',
    time: '9:00 AM - 1:00 PM',
    location: 'Various Locations',
    description: 'Practical demonstration of God\'s love through food distribution, medical care, and gospel sharing in our neighborhood.',
    category: 'Outreach',
  },
  {
    id: 5,
    title: 'Women\'s Fellowship Breakfast',
    date: 'November 2, 2025',
    time: '10:00 AM - 12:00 PM',
    location: 'Fellowship Hall',
    description: 'Monthly gathering for women with worship, teaching, and fellowship. Guest speaker: Pastor Mrs. Adeola Johnson. Theme: "Embracing Your Purpose".',
    category: 'Fellowship',
  },
  {
    id: 6,
    title: 'End of Year Thanksgiving',
    date: 'December 31, 2025',
    time: '9:00 PM - 12:30 AM',
    location: 'Church Auditorium',
    description: 'Cross over into the new year with praise, worship, and thanksgiving. Special programs, testimony time, and midnight celebration.',
    category: 'Special Service',
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for these upcoming events and programs. Everyone is welcome!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6">
                <span className="inline-block bg-amber-600 text-white text-sm px-3 py-1 rounded-full mb-3">
                  {event.category}
                </span>
                <h3 className="text-white">{event.title}</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 pt-3 border-t">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar CTA */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-blue-900 mb-3">Stay Connected</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Don't miss out on any of our events! Follow us on social media or contact the church office to receive regular updates about our programs and activities.
          </p>
        </div>
      </div>
    </section>
  );
}
