import { ImageWithFallback } from './figma/ImageWithFallback';

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
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Glimpses of our church life, worship services, and community activities.
          </p>
        </div>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-amber-600 text-white text-sm px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us CTA */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-blue-900 mb-4">See More on Social Media</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Follow us on Instagram and Facebook to see more photos and videos from our services, events, and daily church life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors">
              Follow on Facebook
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-colors">
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
