import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Marquee from './Marquee';

const SahajaYogaPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation(); // Hook for translations

  const meditationSessions = [
    { type: t('welcome.sessions.morning.title'), time: t('welcome.sessions.morning.time') },
    { type: t('welcome.sessions.evening.title'), time: t('welcome.sessions.evening.time') }
  ];

  // Filter only the evening session for New Seekers
  const eveningSession = meditationSessions.filter(
    (session) => session.type === t('welcome.sessions.evening.title')
  );

  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(true);
    };
    
    setTimeout(handleVisibility, 100);
  }, []);

  return (
    <>
      <Marquee />
      <div className="min-h-screen bg-gradient-to-br from-white to-red-50 p-4 overflow-hidden">
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 transform 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-red-900 animate-fade-in hover:scale-105 transition-transform duration-300">
                  {t('welcome.title')}
                </h1>
                <p className="text-gray-700 text-sm leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  {t('welcome.subtitle')} {t('welcome.description')}
                </p>
              </div>

              {/* Daily Sessions */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-red-800 hover:scale-105 transition-transform duration-300">
                  {t('welcome.sessions.title')}
                </h2>
                <div className="space-y-2">
                  {meditationSessions.map((session, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center bg-white p-3 rounded-lg shadow-sm 
                        transform transition-all duration-500 hover:scale-105 hover:shadow-lg
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
                        `}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div>
                        <h3 className="font-medium text-sm">{session.type}</h3>
                        <p className="text-gray-600 text-xs">{session.time}</p>
                      </div>
                      <button className="bg-red-900 text-white px-4 py-1.5 rounded-full hover:bg-red-800 
                        transition-all duration-300 hover:shadow-lg hover:scale-105 transform text-sm">
                        {t('welcome.sessions.join')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Seekers Section */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-red-800 hover:scale-105 transition-transform duration-300">
                  {t('welcome.sessions.beginner.title')}
                </h2>
                <div className="space-y-2">
                  {eveningSession.map((session, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center bg-white p-3 rounded-lg shadow-sm 
                        transform transition-all duration-500 hover:scale-105 hover:shadow-lg
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
                        `}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div>
                        <h3 className="font-medium text-sm">{session.type}</h3>
                        <p className="text-gray-600 text-xs">{session.time}</p>
                      </div>
                      <button className="bg-red-900 text-white px-4 py-1.5 rounded-full hover:bg-red-800 
                        transition-all duration-300 hover:shadow-lg hover:scale-105 transform text-sm">
                        {t('welcome.sessions.join')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donation Button */}
              <button className={`w-full bg-red-900 text-white py-3 rounded-lg hover:bg-red-800 
                transition-all duration-500 hover:shadow-lg hover:scale-105 transform text-sm
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                style={{ transitionDelay: '600ms' }}>
                {t('welcome.donate')}
              </button>
            </div>

            {/* Right Content - Meditation Image with Glow Effect */}
            <div className={`relative group rounded-2xl overflow-hidden transform transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
              {/* Glow effect container */}
              <div className="absolute inset-0 animate-pulse blur-xl group-hover:blur-2xl transition-all duration-700" />
              
              {/* Main image container */}
              <div className="relative transform group-hover:scale-105 transition-transform duration-700 ml-36">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734203459/MF_035-17__1_1_1_2_sfpvvj.png"
                  alt="Meditation"
                  className="w-3/4 h-full object-cover rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SahajaYogaPage;