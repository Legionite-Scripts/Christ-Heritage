import { Copy, Heart, Check } from 'lucide-react';
import { useState } from 'react';

const bankAccounts = [
  {
    id: 1,
    accountName: 'Christ Heritage',
    accountNumber: '0123456789',
    bankName: 'First Bank of Nigeria',
    type: 'Naira Account',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 2,
    accountName: 'Christ Heritage',
    accountNumber: '9876543210',
    bankName: 'GTBank',
    type: 'Naira Account (Alternative)',
    gradient: 'from-purple-500 to-pink-600',
  },
];

const givingCategories = [
  {
    title: 'Ministry Operations',
    description: 'Supporting our pastoral staff, facility maintenance, and day-to-day church activities.',
    icon: '⛪',
  },
  {
    title: 'Community Outreach',
    description: 'Feeding programs, medical care, and practical assistance to those in need in our community.',
    icon: '❤️',
  },
  {
    title: 'Youth & Children',
    description: 'Resources and programs for raising the next generation in faith and godly character.',
    icon: '👥',
  },
  {
    title: 'Mission & Evangelism',
    description: 'Supporting missions, church planting, and spreading the Gospel beyond our local area.',
    icon: '🌍',
  },
];

export function Give() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-cyan-900/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 border border-white/20">
            <Heart className="w-10 h-10 text-amber-300" />
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Give with a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              Cheerful Heart
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your generosity enables us to spread the Gospel, serve our community, and support those in need.
          </p>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-white italic mb-4 leading-relaxed">
                "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
              </p>
              <p className="text-xl text-amber-200">- Luke 6:38</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-600 bg-orange-50 px-4 py-2 rounded-full text-sm mb-6">
              Banking Details
            </span>
            <h2 className="text-4xl md:text-5xl text-orange-900 mb-4">
              Account Information
            </h2>
            <p className="text-xl text-gray-700">
              Use any of these accounts to make your donation
            </p>
          </div>

          <div className="space-y-8">
            {bankAccounts.map((account) => (
              <div key={account.id} className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 overflow-hidden hover:shadow-2xl transition-all">
                <div className={`h-3 bg-gradient-to-r ${account.gradient}`}></div>
                
                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className={`bg-gradient-to-r ${account.gradient} text-white px-5 py-2 rounded-full`}>
                      {account.type}
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Account Name</label>
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                        <span className="text-xl text-orange-900">{account.accountName}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Account Number</label>
                      <div className="flex items-center justify-between bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                        <span className="text-2xl text-orange-900 tracking-wider">{account.accountNumber}</span>
                        <button
                          onClick={() => copyToClipboard(account.accountNumber, account.id)}
                          className={`ml-4 p-3 rounded-lg transition-all transform hover:scale-110 ${
                            copiedId === account.id
                              ? 'bg-green-100 text-green-600'
                              : `bg-gradient-to-r ${account.gradient} text-white hover:shadow-lg`
                          }`}
                          aria-label="Copy account number"
                        >
                          {copiedId === account.id ? (
                            <Check className="w-6 h-6" />
                          ) : (
                            <Copy className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Bank Name</label>
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                        <span className="text-xl text-orange-900">{account.bankName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Categories */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-600 bg-white px-4 py-2 rounded-full text-sm mb-6 shadow-sm">
              Impact
            </span>
            <h2 className="text-4xl md:text-5xl text-orange-900 mb-4">
              Your Giving Supports
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {givingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all">
                <div className="flex items-start gap-5">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl text-orange-900 mb-3">{category.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-orange-100">
            <Heart className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl text-orange-900 mb-6">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Every contribution, no matter the size, makes a difference in advancing God's kingdom and touching lives. If you need a receipt for your giving or have any questions, please contact the church office.
            </p>
            <a
              href="/contact"
              className="mt-10 inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
