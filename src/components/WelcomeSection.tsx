import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ParallaxImage } from './animations/ParallaxImage';
import { FadeInWhenVisible } from './animations/FadeInWhenVisible';
import Marquee from './Marquee';

const WelcomeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const { t } = useTranslation();

  return (
    <>
      <Marquee />
      <motion.section
        ref={containerRef}
        style={{ opacity }}
        className="min-h-screen bg-gradient-to-br from-white to-gray-50 pb-32 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <motion.div style={{ scale }} className="lg:w-6/12 pt-16 sticky top-24 z-10">
              <FadeInWhenVisible>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  {t('welcome.title')}
                </h1>
                <p className="text-lg text-gray-600">
                  {t('welcome.subtitle')}
                </p>
                <p className="text-lg text-gray-600 mb-12">
                  {t('welcome.description')}
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="space-y-8">
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-semibold text-primary mb-6">
                      {t('welcome.sessions.title')}
                    </h3>
                    <div className="space-y-6">
                      <motion.div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div>
                          <p className="text-lg font-medium">{t('welcome.sessions.morning.title')}</p>
                          <p className="text-gray-600">{t('welcome.sessions.morning.time')}</p>
                        </div>
                        <motion.button
                          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition text-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('welcome.sessions.join')}
                        </motion.button>
                      </motion.div>
                      <motion.div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div>
                          <p className="text-lg font-medium">{t('welcome.sessions.evening.title')}</p>
                          <p className="text-gray-600">{t('welcome.sessions.evening.time')}</p>
                        </div>
                        <motion.button
                          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition text-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('welcome.sessions.join')}
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-semibold text-primary mb-6">
                      {t('welcome.sessions.beginner.title')}
                    </h3>
                    <div className="space-y-6">
                      <motion.div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div>
                          <p className="text-lg font-medium">{t('welcome.sessions.evening.title')}</p>
                          <p className="text-gray-600">{t('welcome.sessions.evening.time')}</p>
                        </div>
                        <motion.button
                          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition text-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('welcome.sessions.join')}
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition w-full text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.getElementById('donation-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('welcome.donate')}
                  </motion.button>
                </div>
              </FadeInWhenVisible>
            </motion.div>
            <div className="lg:w-7/12">
              <div className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[800px]">
                <ParallaxImage
                  src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734203459/MF_035-17__1_1_1_2_sfpvvj.png"
                  alt={t('welcome.imageAlt')}
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.section>
    </>
  );
};

export default WelcomeSection;