import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1667068114508-0055f7fb25a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWR8ZW58MXx8fHwxNzYwNzk2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Worship service with hands raised in praise',
    category: 'Worship',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9ufGVufDF8fHx8MTc2MDg1ODg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Church congregation gathered for service',
    category: 'Service',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1745852737245-66453f2a6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYwNzk3MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Church choir singing during worship',
    category: 'Worship',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1711157771635-b3bdd677491c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwcHJheWluZ3xlbnwxfHx8fDE3NjA4NTg4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Youth group praying together',
    category: 'Youth',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1713012633197-1426a345ca99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bmRheSUyMHNjaG9vbHxlbnwxfHx8fDE3NjA3ODg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Children in Sunday school learning about Jesus',
    category: 'Children',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1569292567777-e5d61a759322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBmZWxsb3dzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MDg1ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Church fellowship and community gathering',
    category: 'Fellowship',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1700936206635-c8b06c1928ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHByYXllciUyMGdyb3VwfGVufDF8fHx8MTc2MDg1ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Women prayer group meeting',
    category: 'Fellowship',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1649701920167-38c5ee92a34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDg1ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Church building exterior',
    category: 'Building',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYwODU4ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Bible study group discussion',
    category: 'Fellowship',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1760319726429-fcda77d3cb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzYwNzg1ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Church community gathering event',
    category: 'Events',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1672237983944-eec248019fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NjAzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Modern church interior',
    category: 'Building',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1610414961792-b7fffebddd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBwcmVhY2hpbmd8ZW58MXx8fHwxNzYwNzg1NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Pastor preaching from pulpit',
    category: 'Service',
  },
];

const categories = ['All', 'Worship', 'Service', 'Youth', 'Children', 'Fellowship', 'Building', 'Events'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
            Photo Gallery
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Moments of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Faith & Fellowship
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Glimpses of our church life, worship services, and community activities.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-orange-50 text-orange-800 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm shadow-lg">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 text-center border border-orange-100">
            <h2 className="text-4xl md:text-5xl text-orange-900 mb-6">
              See More on Social Media
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Follow us on Instagram and Facebook to see more photos and videos from our services, events, and daily church life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </button>
              <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
