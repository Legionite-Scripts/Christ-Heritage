import { Heart, Target, Users, BookOpen, Sparkles, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
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
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Our Story of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Faith & Community
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From humble beginnings to a thriving church family, discover how God has been faithful in our journey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-orange-600 bg-orange-50 px-4 py-2 rounded-full text-sm mb-6">
                Since 2015
              </span>
              <h2 className="text-4xl md:text-5xl text-orange-900 mb-6">
                A Journey of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  Faith & Growth
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Christ Heritage was founded in 2015 by Pastor David Adeyemi and a small group of believers with a vision to establish a Bible-believing church in Ikeja. What started as a home fellowship of just 12 people has grown into a vibrant community of over 200 members.
                </p>
                <p>
                  Over the years, we have remained committed to teaching God's Word with clarity, fostering authentic community, and serving our neighborhood with compassion. We believe that the church is not just a building, but a family of believers united in Christ.
                </p>
                <p>
                  Today, Christ Heritage continues to grow, not just in numbers, but in spiritual maturity and impact. We are grateful for what God has done and excited about what He will do in the future as we continue to serve Him and our community.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9ufGVufDF8fHx8MTc2MDg1ODg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Church congregation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-orange-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-orange-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To make disciples of Jesus Christ who are grounded in the Word, empowered by the Spirit, and committed to reaching the lost and loving our community with authentic faith.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-purple-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-orange-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a beacon of light in Lagos, raising up generations of believers who will impact Nigeria and the nations with the transforming power of the Gospel and God's love.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-amber-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-orange-900 mb-4">Our Values</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Biblical truth, authentic community, passionate worship, compassionate service, and faithful stewardship guide everything we do as a church family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-600 bg-orange-50 px-4 py-2 rounded-full text-sm mb-6">
              Our Beliefs
            </span>
            <h2 className="text-4xl md:text-5xl text-orange-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-700">
              Our faith is built on the timeless truths of God's Word
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: BookOpen,
                title: 'The Bible',
                description: 'We believe the Bible is the inspired, inerrant Word of God and our final authority for faith and practice.'
              },
              {
                icon: Sparkles,
                title: 'The Trinity',
                description: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.'
              },
              {
                icon: Heart,
                title: 'Salvation',
                description: 'We believe salvation is by grace through faith in Jesus Christ alone, not by works.'
              },
              {
                icon: Users,
                title: 'The Church',
                description: 'We believe the church is the body of Christ, called to worship, fellowship, and serve together.'
              }
            ].map((belief, index) => {
              const Icon = belief.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-orange-900 mb-2">{belief.title}</h3>
                      <p className="text-gray-700 text-lg">{belief.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pastoral Team */}
      <section className="py-24 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-cyan-900/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Meet Our Pastoral Team
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dedicated leaders committed to shepherding our church family with wisdom and love
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all">
              <div className="h-80 bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-300 rounded-full blur-2xl"></div>
                </div>
                <Users className="w-32 h-32 text-white/40 relative z-10" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-white mb-2">Pastor David Adeyemi</h3>
                <p className="text-amber-300 text-lg mb-4">Senior Pastor</p>
                <p className="text-gray-200 leading-relaxed">
                  Pastor David has been serving in ministry for over 15 years. He is passionate about teaching the Word and equipping believers for ministry. He is married to Pastor (Mrs.) Grace, and they have three children.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all">
              <div className="h-80 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-2xl"></div>
                </div>
                <Users className="w-32 h-32 text-white/40 relative z-10" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-white mb-2">Pastor (Mrs.) Grace Adeyemi</h3>
                <p className="text-purple-300 text-lg mb-4">Associate Pastor</p>
                <p className="text-gray-200 leading-relaxed">
                  Pastor Grace oversees our women's ministry and children's department. She is a gifted teacher and counselor with a heart for mentoring young women and raising godly children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-orange-900 mb-6">
            Become Part of Our Family
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            We'd love to welcome you this Sunday. Come experience authentic worship, biblical teaching, and genuine community.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Plan Your Visit
          </a>
        </div>
      </section>
    </div>
  );
}
