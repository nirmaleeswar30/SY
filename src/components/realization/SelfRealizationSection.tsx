import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const SelfRealisationSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoUrl = 'https://res.cloudinary.com/dsobwzsfl/video/upload/v1736267900/sbwsu2a31q0b1bn0gbx8.mp4';

  const handlePlay = (): void => {
    setIsPlaying(true);
  };

  // Reset video state when component unmounts
  useEffect(() => {
    return () => {
      setIsPlaying(false);
    };
  }, []);

  return (
    <section ref={ref}>
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-red-700 font-bold text-center mb-12"
        >
          {t('selfRealisation.title')} <br />
          {t('selfRealisation.experienceNow')}
        </motion.h1>

        {/* Grid Layout for Quotes and Video */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Quotes Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-8 text-lg font-medium"
          >
            <blockquote className="text-gray-700 italic">
              <p className="mb-4">{t('selfRealisation.quote1.text')}</p>
              <footer className="text-sm">
                - {t('selfRealisation.quote1.author')}, {t('selfRealisation.quote1.location')}
              </footer>
            </blockquote>

            <blockquote className="text-gray-700 italic">
              <p className="mb-4">{t('selfRealisation.quote2.text')}</p>
              <footer className="text-sm">
                - {t('selfRealisation.quote2.author')}, {t('selfRealisation.quote2.location')}
              </footer>
            </blockquote>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="aspect-video relative">
              {!isPlaying ? (
                <div className="absolute inset-0 w-full h-full bg-black rounded-lg">
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg"
                  >
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={`${videoUrl}${isPlaying ? '?autoplay=1' : ''}`}
                  title="Sahaja Yoga Meditation Kundalini Awakening"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Experience Button */}
        <div className="text-center">
          <motion.a
            href="#"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold mt-8 px-8 py-4 rounded-2xl transition-colors duration-300 transform hover:scale-105"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              // Add your self realisation link/function here
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('selfRealisation.experienceButton')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SelfRealisationSection;