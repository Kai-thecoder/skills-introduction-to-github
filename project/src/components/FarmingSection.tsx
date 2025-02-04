import React from 'react';
import { Plane as Plant, Cog as Cow, Sun, Droplets } from 'lucide-react';
import { FarmingTip } from '../types';

const farmingTips: FarmingTip[] = [
  {
    id: 1,
    title: 'Crop Rotation',
    description: 'Rotate crops annually to maintain soil health and prevent pest problems.',
    category: 'crops'
  },
  {
    id: 2,
    title: 'Livestock Health Monitoring',
    description: 'Regular health checks and vaccinations are essential for livestock management.',
    category: 'livestock'
  },
  {
    id: 3,
    title: 'Sustainable Practices',
    description: 'Implement water conservation and natural pest control methods.',
    category: 'general'
  }
];

export function FarmingSection() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Farming & Livestock Management</h1>
        <p className="text-gray-600">Expert tips and guidance for successful farming and livestock management.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Crop Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Plant className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Crop Management</h2>
          </div>
          <div className="space-y-4">
            {farmingTips.filter(tip => tip.category === 'crops').map(tip => (
              <div key={tip.id} className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Seasonal Planning</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-sm font-medium">Spring Planting</span>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-sm font-medium">Summer Care</span>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-sm font-medium">Fall Harvest</span>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-sm font-medium">Winter Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Livestock Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Cow className="h-6 w-6 text-brown-600 mr-2" />
            <h2 className="text-xl font-semibold">Livestock Management</h2>
          </div>
          {farmingTips.filter(tip => tip.category === 'livestock').map(tip => (
            <div key={tip.id} className="border-l-4 border-brown-500 pl-4 py-2 mb-4">
              <h3 className="font-semibold text-gray-800">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Daily Checklist</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                <span className="text-sm">Check water supplies</span>
              </li>
              <li className="flex items-center">
                <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                <span className="text-sm">Monitor shelter conditions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Weather & News */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Sun className="h-6 w-6 text-yellow-600 mr-2" />
            <h2 className="text-xl font-semibold">Weather & Updates</h2>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Today's Forecast</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium">25°C</span>
                <Sun className="h-8 w-8 text-yellow-500" />
              </div>
              <p className="text-sm text-gray-600">Partly cloudy with light breeze</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Latest News</h3>
            <div className="space-y-2">
              <a href="#" className="block p-2 hover:bg-gray-50 rounded">
                <p className="text-sm font-medium">New sustainable farming practices</p>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </a>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded">
                <p className="text-sm font-medium">Market prices update</p>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}