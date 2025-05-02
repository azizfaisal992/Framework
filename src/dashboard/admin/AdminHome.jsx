import React from 'react';

export default function AdminHome() {
  const cards = [
    { title: 'Orders',      value: 128, icon: '🛒' },
    { title: 'Customers',   value: 54,  icon: '👥' },
    { title: 'Sellers',     value: 23,  icon: '🏬' },
    { title: 'Restaurants', value: 12,  icon: '🍴' },
    { title: 'Wallet',      value: '$4.2K', icon: '💰' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map(c => (
          <div key={c.title} className="bg-white p-4 rounded-lg shadow">
            <div className="text-4xl">{c.icon}</div>
            <div className="mt-2 text-lg font-medium">{c.title}</div>
            <div className="text-2xl font-bold">{c.value}</div>
          </div>
        ))}
      </div>

      {/* you can then add Restaurant Nearby, Menu Category, etc. just like on your design */}
    </div>
  );
}
