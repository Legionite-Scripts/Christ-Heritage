import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface GalleryImage {
  _id: string;
  image: any;
  title: string;
  caption?: string;
  category: string;
}

export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = `*[_type == "galleryImage" && isActive == true] | order(_createdAt desc) {
          _id,
          image,
          title,
          caption,
          category
        }`;
        
        const data = await client.fetch(query);
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // All available categories (always show these)
  const allCategories = ['All', 'Worship', 'Service', 'Youth', 'Children', 'Fellowship', 'Building', 'Events', 'Outreach'];
  
  // Count images per category
  const getCategoryCount = (category: string) => {
    if (category === 'All') return images.length;
    return images.filter(img => img.category === category).length;
  };

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
            {allCategories.map((category) => {
              const count = getCategoryCount(category);
              const isEmpty = count === 0;
              
              return (
                <button
                  key={category}
                  onClick={() => !isEmpty && setSelectedCategory(category)}
                  disabled={isEmpty}
                  className={`px-6 py-2.5 rounded-xl transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transform scale-105'
                      : isEmpty
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-orange-50 text-orange-800 hover:bg-orange-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          ) : filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image._id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={urlFor(image.image).width(800).height(600).url()}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm shadow-lg mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                      {image.caption && (
                        <p className="text-gray-200 text-sm mt-1 line-clamp-2">{image.caption}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">
                {selectedCategory === 'All' 
                  ? 'No images yet'
                  : `No images in ${selectedCategory}`
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container with fixed max height */}
            <div className="relative bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-t-2xl overflow-hidden border-x border-t border-white/10">
              <img
                src={urlFor(selectedImage.image).width(1400).height(1000).url()}
                alt={selectedImage.title}
                className="w-full max-h-[65vh] object-contain"
              />
            </div>
            
            {/* Info section */}
            <div className="bg-white rounded-b-2xl p-6 sm:p-8 border-x border-b border-orange-100">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl sm:text-3xl text-orange-900 font-bold">{selectedImage.title}</h3>
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shrink-0">
                  {selectedImage.category}
                </span>
              </div>
              {selectedImage.caption && (
                <p className="text-gray-700 text-lg leading-relaxed">{selectedImage.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}

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