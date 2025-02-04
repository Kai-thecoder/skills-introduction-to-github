import React from 'react';
import { Menu, BookOpen, Tractor, SunMedium, Newspaper } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Menu className="h-6 w-6" />
          <span className="text-xl font-bold">Think Harvest</span>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveSection('study')}
            className={`flex items-center space-x-2 ${
              activeSection === 'study' ? 'text-yellow-300' : 'hover:text-yellow-200'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span>Study</span>
          </button>
          <button
            onClick={() => setActiveSection('farming')}
            className={`flex items-center space-x-2 ${
              activeSection === 'farming' ? 'text-yellow-300' : 'hover:text-yellow-200'
            }`}
          >
            <Tractor className="h-5 w-5" />
            <span>Farming</span>
          </button>
          <button
            onClick={() => setActiveSection('weather')}
            className={`flex items-center space-x-2 ${
              activeSection === 'weather' ? 'text-yellow-300' : 'hover:text-yellow-200'
            }`}
          >
            <SunMedium className="h-5 w-5" />
            <span>Weather</span>
          </button>
          <button
            onClick={() => setActiveSection('news')}
            className={`flex items-center space-x-2 ${
              activeSection === 'news' ? 'text-yellow-300' : 'hover:text-yellow-200'
            }`}
          >
            <Newspaper className="h-5 w-5" />
            <span>News</span>
          </button>
        </div>
      </div>
    </nav>
  );
}