import { Copy, Heart, Check } from 'lucide-react';
import { useState } from 'react';

const bankAccounts = [
  {
    id: 1,
    accountName: 'Christ Heritage',
    accountNumber: '0123456789',
    bankName: 'First Bank of Nigeria',
    type: 'Naira Account',
  },
  {
    id: 2,
    accountName: 'Christ Heritage',
    accountNumber: '9876543210',
    bankName: 'GTBank',
    type: 'Naira Account (Alternative)',
  },
];

export function GiveSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="give" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-blue-900 mb-4">Give</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generosity enables us to spread the Gospel, serve our community, and support those in need.
          </p>
        </div>

        {/* Scripture */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 mb-12 text-center">
          <p className="text-xl text-white italic mb-2">
            "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
          </p>
          <p className="text-amber-400">- Luke 6:38</p>
        </div>

        {/* Bank Details */}
        <div className="space-y-6 mb-12">
          {bankAccounts.map((account) => (
            <div key={account.id} className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full">
                  {account.type}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Account Name</label>
                  <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 mt-1">
                    <span className="text-gray-900">{account.accountName}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Account Number</label>
                  <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 mt-1">
                    <span className="text-gray-900">{account.accountNumber}</span>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber, account.id)}
                      className="ml-2 p-2 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Copy account number"
                    >
                      {copiedId === account.id ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Bank Name</label>
                  <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 mt-1">
                    <span className="text-gray-900">{account.bankName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Giving Categories */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-blue-900 mb-6 text-center">Your Giving Supports</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Ministry Operations</h4>
                <p className="text-gray-600 text-sm">
                  Supporting our pastoral staff, facility maintenance, and day-to-day church activities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Community Outreach</h4>
                <p className="text-gray-600 text-sm">
                  Feeding programs, medical care, and practical assistance to those in need in our community.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Youth & Children</h4>
                <p className="text-gray-600 text-sm">
                  Resources and programs for raising the next generation in faith and godly character.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Mission & Evangelism</h4>
                <p className="text-gray-600 text-sm">
                  Supporting missions, church planting, and spreading the Gospel beyond our local area.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Thank you for your generous support! Every contribution, no matter the size, makes a difference in advancing God's kingdom. If you need a receipt for your giving, please contact the church office.
          </p>
        </div>
      </div>
    </section>
  );
}
