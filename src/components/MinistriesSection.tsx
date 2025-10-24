import { Users, Baby, Heart, Music } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ministries = [
  {
    id: 1,
    name: 'Youth Ministry',
    icon: Users,
    description: 'Empowering young people aged 13-25 to live boldly for Christ. We meet every Saturday at 4:00 PM for fellowship, teaching, and fun activities.',
    image: 'https://images.unsplash.com/photo-1711157771635-b3bdd677491c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwcHJheWluZ3xlbnwxfHx8fDE3NjA4NTg4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'Saturdays, 4:00 PM',
  },
  {
    id: 2,
    name: "Children's Ministry",
    icon: Baby,
    description: 'Creating a safe, fun environment where children learn about Jesus through Bible stories, worship, and creative activities. For ages 3-12.',
    image: 'https://images.unsplash.com/photo-1713012633197-1426a345ca99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bmRheSUyMHNjaG9vbHxlbnwxfHx8fDE3NjA3ODg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'Sundays during service',
  },
  {
    id: 3,
    name: "Women's Ministry",
    icon: Heart,
    description: 'A fellowship for women to grow together in faith, support one another, and develop their God-given potential through prayer, study, and community.',
    image: 'https://images.unsplash.com/photo-1700936206635-c8b06c1928ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHByYXllciUyMGdyb3VwfGVufDF8fHx8MTc2MDg1ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'First Saturday monthly, 10:00 AM',
  },
  {
    id: 4,
    name: 'Choir Ministry',
    icon: Music,
    description: 'Using the gift of music to glorify God and lead the congregation in worship. We welcome singers and musicians of all skill levels.',
    image: 'https://images.unsplash.com/photo-1745852737245-66453f2a6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYwNzk3MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'Rehearsals: Thursdays, 6:00 PM',
  },
];

export function MinistriesSection() {
  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Our Ministries</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your place in our church family. We have ministries for every age and stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <div key={ministry.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={ministry.image}
                    alt={ministry.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-blue-900">{ministry.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{ministry.description}</p>
                  <div className="flex items-center gap-2 text-amber-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{ministry.schedule}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-white mb-4">Get Involved</h3>
          <p className="text-gray-100 text-lg mb-6 max-w-2xl mx-auto">
            Everyone has a place at Christ Heritage. Whether you're gifted in music, teaching, hospitality, or prayer, we'd love to help you discover your calling and use your gifts to serve.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
