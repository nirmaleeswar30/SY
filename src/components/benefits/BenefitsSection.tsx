import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface BenefitCard {
  key: string;  // Added key for translation lookup
}

const BenefitsSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits: BenefitCard[] = [
    { key: 'mental' },
    { key: 'family' },
    { key: 'religion' },
    { key: 'experience' },
    { key: 'health' },
    { key: 'persona' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="bg-[#fdf6e9] p-8"
    >
      <div className="max-w-7xl mx-auto mt-12">
        <motion.h1 
          className="text-4xl font-bold text-center text-red-600 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('benefits.title')}
        </motion.h1>

        <motion.p 
          className="text-gray-700 font-semibold text-center max-w-4xl mx-auto mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('benefits.description')}
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.key}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                translateY: -10
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-bold text-red-600 mb-4">
                {t(`benefits.cards.${benefit.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`benefits.cards.${benefit.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="bg-red-700 text-white px-8 py-3 rounded-xl hover:bg-red-800 transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('benefits.viewMoreButton')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;