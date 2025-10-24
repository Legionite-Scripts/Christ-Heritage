import { Play, Download, Calendar } from 'lucide-react';

const sermons = [
  {
    id: 1,
    title: 'Living a Life of Purpose',
    preacher: 'Pastor David Adeyemi',
    date: 'October 13, 2025',
    series: 'Foundations of Faith',
    scripture: 'Jeremiah 29:11',
    description: 'Discover God\'s plan for your life and learn how to walk in your divine purpose with confidence and faith.',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    preacher: 'Pastor Grace Adeyemi',
    date: 'October 9, 2025',
    series: 'Wednesday Teaching',
    scripture: 'James 5:16',
    description: 'Understanding the importance of effectual fervent prayer and how to develop a consistent prayer life.',
  },
  {
    id: 3,
    title: 'Faith That Moves Mountains',
    preacher: 'Pastor David Adeyemi',
    date: 'October 6, 2025',
    series: 'Foundations of Faith',
    scripture: 'Matthew 17:20',
    description: 'Learning to trust God completely and exercising faith that produces supernatural results in our lives.',
  },
  {
    id: 4,
    title: 'Walking in Love',
    preacher: 'Pastor Grace Adeyemi',
    date: 'September 29, 2025',
    series: 'Character of Christ',
    scripture: '1 Corinthians 13:4-8',
    description: 'Exploring what it means to walk in genuine Christian love and how love transforms our relationships.',
  },
  {
    id: 5,
    title: 'The Fear of the Lord',
    preacher: 'Pastor David Adeyemi',
    date: 'September 22, 2025',
    series: 'Foundations of Faith',
    scripture: 'Proverbs 9:10',
    description: 'Understanding the beginning of wisdom and how reverential fear of God shapes our lives and decisions.',
  },
  {
    id: 6,
    title: 'Stewarding Your Gift',
    preacher: 'Pastor Grace Adeyemi',
    date: 'September 15, 2025',
    series: 'Wednesday Teaching',
    scripture: '1 Peter 4:10',
    description: 'Discovering your spiritual gifts and learning how to use them effectively for God\'s glory and kingdom advancement.',
  },
];

export function SermonsSection() {
  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Recent Sermons</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catch up on our recent messages and grow in your understanding of God's Word.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full mb-2">
                    {sermon.series}
                  </span>
                  <h3 className="text-blue-900">{sermon.title}</h3>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-gray-600">
                <p className="text-amber-600">{sermon.preacher}</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{sermon.date}</span>
                </div>
                <p className="text-sm">Scripture: {sermon.scripture}</p>
              </div>

              <p className="text-gray-700 mb-6">{sermon.description}</p>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors">
                  <Play className="w-4 h-4" />
                  Listen
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sermon Archive CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-white mb-4">Want More?</h3>
          <p className="text-gray-100 text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel to get notifications when new sermons are uploaded. You can also visit our church to collect audio CDs of past messages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors">
              Subscribe on YouTube
            </button>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg transition-colors inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
