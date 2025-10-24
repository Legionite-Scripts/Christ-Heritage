import { Heart, Target, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our journey, mission, and the leadership guiding our community.
          </p>
        </div>

        {/* Church History */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-blue-900 mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Christ Heritage was founded in 2015 by Pastor David Adeyemi and a small group of believers with a vision to establish a Bible-believing church in Ikeja. What started as a home fellowship of 12 people has grown into a vibrant community of over 200 members.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we have remained committed to teaching God's Word with clarity, fostering authentic community, and serving our neighborhood. We believe that the church is not just a building, but a family of believers united in Christ.
            </p>
            <p className="text-gray-700">
              Today, Christ Heritage continues to grow, not just in numbers, but in spiritual maturity and impact. We are grateful for what God has done and excited about what He will do in the future.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9ufGVufDF8fHx8MTc2MDg1ODg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Church congregation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-blue-900 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To make disciples of Jesus Christ who are grounded in the Word, empowered by the Spirit, and committed to reaching the lost and loving our community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-blue-900 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a beacon of light in Lagos, raising up generations of believers who will impact Nigeria and the nations with the transforming power of the Gospel.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-blue-900 mb-3">Our Values</h3>
            <p className="text-gray-700">
              Biblical truth, authentic community, passionate worship, compassionate service, and faithful stewardship guide everything we do as a church family.
            </p>
          </div>
        </div>

        {/* Pastoral Team */}
        <div>
          <h3 className="text-blue-900 mb-8 text-center">Our Pastoral Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <Users className="w-24 h-24 text-white/30" />
              </div>
              <div className="p-6">
                <h4 className="text-blue-900 mb-2">Pastor David Adeyemi</h4>
                <p className="text-amber-600 mb-3">Senior Pastor</p>
                <p className="text-gray-700">
                  Pastor David has been serving in ministry for over 15 years. He is passionate about teaching the Word and equipping believers for ministry. He is married to Pastor (Mrs.) Grace, and they have three children.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center">
                <Users className="w-24 h-24 text-white/30" />
              </div>
              <div className="p-6">
                <h4 className="text-blue-900 mb-2">Pastor (Mrs.) Grace Adeyemi</h4>
                <p className="text-amber-600 mb-3">Associate Pastor</p>
                <p className="text-gray-700">
                  Pastor Grace oversees our women's ministry and children's department. She is a gifted teacher and counselor with a heart for mentoring young women and raising godly children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
