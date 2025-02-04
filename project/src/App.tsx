import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { StudySection } from './components/StudySection';
import { FarmingSection } from './components/FarmingSection';
import { WeatherSection } from './components/WeatherSection';
import { QuizPage } from './components/QuizPage';

function App() {
  const [activeSection, setActiveSection] = useState('study');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="py-8">
          <Routes>
            <Route path="/" element={<StudySection />} />
            <Route path="/farming" element={<FarmingSection />} />
            <Route path="/weather" element={<WeatherSection />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
            <Route path="/news" element={
              <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Agricultural News</h1>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                      src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=800&q=80"
                      alt="Farming"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Sustainable Farming Practices on the Rise</h2>
                    <p className="text-gray-600">New research shows increasing adoption of sustainable farming methods...</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                      src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=800&q=80"
                      alt="Livestock"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Latest Developments in Livestock Management</h2>
                    <p className="text-gray-600">Innovative approaches to livestock care and management...</p>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;