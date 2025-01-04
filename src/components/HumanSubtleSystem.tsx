import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const chakrasData = [
  {
    title: "chakras.mooladhara",
    content: "chakras.mooladharaContent"
  },
  {
    title: "chakras.swadishthan",
    content: "chakras.swadishthanContent"
  },
  {
    title: "chakras.nabhi",
    content: "chakras.nabhiContent"
  },
  {
    title: "chakras.anahat",
    content: "chakras.anahatContent"
  },
  {
    title: "chakras.vishuddhi",
    content: "chakras.vishuddhiContent"
  },
  {
    title: "chakras.agnya",
    content: "chakras.agnyaContent"
  },
  {
    title: "chakras.sahastrara",
    content: "chakras.sahastraraContent"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const HumanSubtleSystem = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
            {t('chakras.subtle')}
          </h1>
          <h2 className="text-2xl font-medium text-red-500">
            {t('chakras.ancientKnowledge')}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0 mt-8">
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://www.sahajayoga.org.in/images/kundalini.png"
              alt="Kundalini Diagram"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-gray-700 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-700">
                {t('chakras.subtleSystemDescription')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-red-600 text-lg font-semibold mb-4 mt-8">
            {t('chakras.threeNadis')}
          </h2>
          <p className="mb-8">
            {t('chakras.threeNadisDescription')}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-red-600 text-lg font-semibold mb-4">
            {t('chakras.sevenChakras')}
          </h2>
          <p className="mb-8">
            {t('chakras.sevenChakrasDescription')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-12 space-y-8"
        >
          {chakrasData.map((chakra, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h2 className="text-xl font-bold text-red-700 mb-4">
                {t(chakra.title)}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t(chakra.content)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default HumanSubtleSystem;
