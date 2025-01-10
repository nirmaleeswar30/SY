import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Kundalini = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-orange-50 to-pink-50 min-h-screen"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <motion.section
        className="max-w-7xl mx-auto px-4 py-12"
        variants={staggerContainer}
      >
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600 leading-tight"
            variants={fadeInUp}
          >
            {t('kundalini.title')}
          </motion.h1>
          {/* Subtitle removed */}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0">
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={fadeInUp}
          >
            <motion.img
              src="https://www.sahajayoga.org.in/images/kundalini.png"
              alt={t('kundalini.imageAlt')}
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
              variants={imageVariants}
              whileHover="hover"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            variants={staggerContainer}
          >
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-md space-y-4">
              {[
                t('kundalini.description')
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 leading-relaxed"
                  variants={paragraphVariants}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 space-y-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold text-red-700 mb-4">{t('kundalini.whatIsKundalini.title')}</h2>
            <div className="space-y-4">
              {[
                t('kundalini.whatIsKundalini.description')
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 leading-relaxed"
                  variants={paragraphVariants}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold text-red-700 mb-4">{t('kundalini.references.title')}</h2>
            <motion.p className="text-gray-700 mb-4" variants={paragraphVariants}>
              {t('kundalini.references.description')}
            </motion.p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {[
                t('kundalini.references.items.0'),
                t('kundalini.references.items.1'),
                t('kundalini.references.items.2'),
                t('kundalini.references.items.3'),
                t('kundalini.references.items.4'),
                t('kundalini.references.items.5')
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={paragraphVariants}
                  className="leading-relaxed"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Kundalini;