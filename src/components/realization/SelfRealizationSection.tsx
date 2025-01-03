import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const SelfRealisationSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref}>
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-red-700 font-bold text-center mb-12"
        >
          {t('selfRealisation.title')} <br />
          {t('selfRealisation.experienceNow')}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-8 text-lg font-medium"
          >
            <blockquote className="text-gray-700 italic">
              <p className="mb-4">
                {t('selfRealisation.quote1.text')}
              </p>
              <footer className="text-sm">
                - {t('selfRealisation.quote1.author')}, {t('selfRealisation.quote1.location')}
              </footer>
            </blockquote>

            <blockquote className="text-gray-700 italic">
              <p className="mb-4">
                {t('selfRealisation.quote2.text')}
              </p>
              <footer className="text-sm">
                - {t('selfRealisation.quote2.author')}, {t('selfRealisation.quote2.location')}
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="aspect-video">
              <iframe 
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/l8gfotcxvYA"
                title="Sahaja Yoga Meditation Kundalini Awakening"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-sm font-semibold text-gray-600">
              {t('selfRealisation.videoNote')}
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.a 
            href="#" 
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold mt-8 px-8 py-4 rounded-2xl transition-colors duration-300 transform hover:scale-105"
            onClick={(e) => {
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