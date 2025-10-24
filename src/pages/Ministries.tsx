import { Users, Baby, Heart, Music, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const ministries = [
  {
    id: 1,
    name: 'Youth Ministry',
    icon: Users,
    description: 'Empowering young people aged 13-25 to live boldly for Christ through fellowship, teaching, and fun activities.',
    details: 'We meet every Saturday at 4:00 PM for dynamic worship, relevant Bible teaching, and authentic community. Our youth are being equipped to be world-changers.',
    image: 'https://images.unsplash.com/photo-1711157771635-b3bdd677491c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwcHJheWluZ3xlbnwxfHx8fDE3NjA4NTg4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'Saturdays, 4:00 PM',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 2,
    name: "Children's Ministry",
    icon: Baby,
    description: 'Creating a safe, fun environment where children learn about Jesus through Bible stories, worship, and creative activities.',
    details: 'For ages 3-12, we provide age-appropriate teaching that helps kids build a strong foundation of faith while having fun and making friends.',
    image: 'https://images.unsplash.com/photo-1713012633197-1426a345ca99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bmRheSUyMHNjaG9vbHxlbnwxfHx8fDE3NjA3ODg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'Sundays during service',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    name: "Women's Ministry",
    icon: Heart,
    description: 'A fellowship for women to grow together in faith, support one another, and develop their God-given potential.',
    details: 'Through prayer, Bible study, and community, we empower women to embrace their identity in Christ and impact their families and communities.',
    image: 'https://images.unsplash.com/photo-1700936206635-c8b06c1928ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHByYXllciUyMGdyb3VwfGVufDF8fHx8MTc2MDg1ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'First Saturday monthly, 10:00 AM',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 4,
    name: 'Choir Ministry',
    icon: Music,
    description: 'Using the gift of music to glorify God and lead the congregation in worship with excellence and passion.',
    details: 'We welcome singers and musicians of all skill levels. Join us as we create an atmosphere where God\'s presence can be experienced through worship.',
    image: 'https://images.unsplash.com/photo-1745852737245-66453f2a6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYwNzk3MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    schedule: 'Rehearsals: Thursdays, 6:00 PM',
    gradient: 'from-amber-500 to-orange-600',
  },
];

export function Ministries() {
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
            Get Involved
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Find Your Place to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Grow & Serve
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover ministries for every age and stage of life. Everyone has a place in our church family.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={ministry.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${ministry.gradient} rounded-3xl blur-2xl opacity-20`}></div>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <ImageWithFallback
                          src={ministry.image}
                          alt={ministry.name}
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${ministry.gradient} rounded-2xl mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl text-orange-900 mb-4">{ministry.name}</h2>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      {ministry.description}
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                      {ministry.details}
                    </p>

                    <div className="flex items-center gap-3 mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <div className={`w-10 h-10 bg-gradient-to-br ${ministry.gradient} rounded-lg flex items-center justify-center`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Schedule</p>
                        <p className="text-orange-800">{ministry.schedule}</p>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${ministry.gradient} hover:shadow-xl text-white px-8 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105`}
                    >
                      Get Involved
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Discover Your Calling
              </h2>
              <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                Everyone has a place at Christ Heritage. Whether you're gifted in music, teaching, hospitality, or prayer, we'd love to help you discover your calling and use your gifts to serve.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white hover:bg-gray-50 text-orange-600 px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Contact Us to Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
