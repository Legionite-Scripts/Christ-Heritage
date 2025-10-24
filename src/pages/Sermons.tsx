import { Play, Download, Calendar, ArrowRight } from 'lucide-react';

const sermons = [
  {
    id: 1,
    title: 'Living a Life of Purpose',
    preacher: 'Pastor David Adeyemi',
    date: 'October 13, 2025',
    series: 'Foundations of Faith',
    scripture: 'Jeremiah 29:11',
    description: 'Discover God\'s plan for your life and learn how to walk in your divine purpose with confidence and faith.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    preacher: 'Pastor Grace Adeyemi',
    date: 'October 9, 2025',
    series: 'Wednesday Teaching',
    scripture: 'James 5:16',
    description: 'Understanding the importance of effectual fervent prayer and how to develop a consistent prayer life.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Faith That Moves Mountains',
    preacher: 'Pastor David Adeyemi',
    date: 'October 6, 2025',
    series: 'Foundations of Faith',
    scripture: 'Matthew 17:20',
    description: 'Learning to trust God completely and exercising faith that produces supernatural results in our lives.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    title: 'Walking in Love',
    preacher: 'Pastor Grace Adeyemi',
    date: 'September 29, 2025',
    series: 'Character of Christ',
    scripture: '1 Corinthians 13:4-8',
    description: 'Exploring what it means to walk in genuine Christian love and how love transforms our relationships.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 5,
    title: 'The Fear of the Lord',
    preacher: 'Pastor David Adeyemi',
    date: 'September 22, 2025',
    series: 'Foundations of Faith',
    scripture: 'Proverbs 9:10',
    description: 'Understanding the beginning of wisdom and how reverential fear of God shapes our lives and decisions.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 6,
    title: 'Stewarding Your Gift',
    preacher: 'Pastor Grace Adeyemi',
    date: 'September 15, 2025',
    series: 'Wednesday Teaching',
    scripture: '1 Peter 4:10',
    description: 'Discovering your spiritual gifts and learning how to use them effectively for God\'s glory and kingdom advancement.',
    gradient: 'from-indigo-500 to-purple-600',
  },
];

export function Sermons() {
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
            Messages & Teachings
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Recent Sermons &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Bible Teachings
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Catch up on our recent messages and grow in your understanding of God's Word.
          </p>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {sermons.map((sermon, index) => (
              <div
                key={sermon.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 hover:shadow-2xl transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${sermon.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  </div>
                  <span className="relative inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm border border-white/30">
                    {sermon.series}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl text-orange-900 mb-4">{sermon.title}</h3>

                  <div className="space-y-3 mb-6">
                    <p className={`bg-gradient-to-r ${sermon.gradient} bg-clip-text text-transparent`}>
                      {sermon.preacher}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{sermon.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="text-orange-600">Scripture:</span> {sermon.scripture}
                    </p>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed">{sermon.description}</p>

                  <div className="flex gap-3">
                    <button className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${sermon.gradient} hover:shadow-xl text-white px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105`}>
                      <Play className="w-5 h-5" />
                      Listen Now
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-600 px-6 py-3 rounded-xl border border-orange-200 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Never Miss a Message
              </h2>
              <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                Subscribe to our YouTube channel to get notifications when new sermons are uploaded. You can also visit our church to collect audio CDs of past messages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe on YouTube
                </button>
                <a
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all inline-flex items-center justify-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
