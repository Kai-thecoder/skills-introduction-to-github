import React from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';
import { WeatherData } from '../types';

const mockWeatherData: WeatherData = {
  temperature: 25,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12
};

export function WeatherSection() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Weather Forecast</h1>
        <p className="text-gray-600">Stay updated with accurate weather information for better planning.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Current Weather */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-4xl font-bold text-gray-800">{mockWeatherData.temperature}°C</div>
              <div className="text-gray-600">{mockWeatherData.condition}</div>
            </div>
            <Cloud className="h-16 w-16 text-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Droplets className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Humidity</div>
                <div className="font-semibold">{mockWeatherData.humidity}%</div>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Wind Speed</div>
                <div className="font-semibold">{mockWeatherData.windSpeed} km/h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Forecast */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">7-Day Forecast</h2>
          <div className="space-y-4">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="flex items-center justify-between border-b last:border-0 pb-2">
                <div className="flex items-center">
                  <div className="w-20">
                    <div className="text-sm font-medium">
                      {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                  </div>
                  <Cloud className="h-5 w-5 text-blue-500 mx-2" />
                </div>
                <div className="flex items-center">
                  <Thermometer className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm">{Math.round(20 + Math.random() * 10)}°C</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Weather Alerts</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Cloud className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Light Rain Expected</h3>
                  <p className="text-sm text-yellow-700 mt-1">Tomorrow morning, 6 AM - 9 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Wind className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Strong Winds</h3>
                  <p className="text-sm text-blue-700 mt-1">Expected in the afternoon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}