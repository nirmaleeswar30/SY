import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

interface ChakraData {
  title: string;
  image: string;
  location: string;
  qualities: string;
  benefits: string;
  assessment: string;
  balance: string;
  subtitle?: string;
}

interface ChakrasData {
  [key: string]: ChakraData;
}

const ChakrasPage = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [activeChakra, setActiveChakra] = useState<string>('mooladhar');

  const chakraData: ChakrasData = {
    mooladhar: {
      title: t('chakras.mooladhara'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/mooldhara.jpg",
      location: t('chakras.mooladharaContent'),
      qualities: t('chakras.mooladharaQualities'),
      benefits: t('chakras.mooladharaBenefits'),
      assessment: t('chakras.mooladharaAssessment'),
      balance: t('chakras.mooladharaBalance')
    },
    swadhisthan: {
      title: t('chakras.swadishthan'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/swadhisthan.jpg",
      location: t('chakras.swadishthanContent'),
      qualities: t('chakras.swadishthanQualities'),
      benefits: t('chakras.swadishthanBenefits'),
      assessment: t('chakras.swadishthanAssessment'),
      balance: t('chakras.swadishthanBalance')
    },
    nabhi: {
      title: t('chakras.nabhi'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/nabhi.png",
      location: t('chakras.nabhiContent'),
      qualities: t('chakras.nabhiQualities'),
      benefits: t('chakras.nabhiBenefits'),
      assessment: t('chakras.nabhiAssessment'),
      balance: t('chakras.nabhiBalance')
    },
    heart: {
      title: t('chakras.anahat'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/heart.jpg",
      location: t('chakras.anahatContent'),
      qualities: t('chakras.anahatQualities'),
      benefits: t('chakras.anahatBenefits'),
      assessment: t('chakras.anahatAssessment'),
      balance: t('chakras.anahatBalance')
    },
    vishuddhi: {
      title: t('chakras.vishuddhi'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/vishuddi.jpg",
      location: t('chakras.vishuddhiContent'),
      qualities: t('chakras.vishuddhiQualities'),
      benefits: t('chakras.vishuddhiBenefits'),
      assessment: t('chakras.vishuddhiAssessment'),
      balance: t('chakras.vishuddhiBalance')
    },
    agnya: {
      title: t('chakras.agnya'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/agnya.jpg",
      location: t('chakras.agnyaContent'),
      qualities: t('chakras.agnyaQualities'),
      benefits: t('chakras.agnyaBenefits'),
      assessment: t('chakras.agnyaAssessment'),
      balance: t('chakras.agnyaBalance')
    },
    sahasrar: {
      title: t('chakras.sahastrara'),
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/sahastrara.jpg",
      location: t('chakras.sahastraraContent'),
      qualities: t('chakras.sahastraraQualities'),
      benefits: t('chakras.sahastraraBenefits'),
      assessment: t('chakras.sahastraraAssessment'),
      balance: t('chakras.sahastraraBalance')
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-orange-50 to-pink-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl text-red-700 font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
            {t('chakras.title')}
          </h1>
          <h2 className="text-2xl text-red-500 font-medium">{t('chakras.subtitle')}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.keys(chakraData).map((chakra) => (
            <motion.button
              key={chakra}
              onClick={() => setActiveChakra(chakra)}
              className={`px-6 py-3 rounded-full transition-all shadow-md ${
                activeChakra === chakra
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-50'
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              {chakraData[chakra].title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeChakra}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            layout
          >
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-12">
                <motion.div
                  className="lg:w-1/3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-6">
                    <motion.img
                      src={chakraData[activeChakra].image}
                      alt={chakraData[activeChakra].title}
                      className="w-full h-auto rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      layoutId={`chakra-image-${activeChakra}`}
                    />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
                      {chakraData[activeChakra].title}
                    </h2>
                  </div>
                </motion.div>

                <motion.div
                  className="lg:w-2/3 space-y-6"
                  variants={sectionVariants}
                >
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                  >
                    <motion.div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        📍 {t('chakras.location')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {chakraData[activeChakra].location}
                      </p>
                    </motion.div>

                    <motion.div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        ✨ {t('chakras.qualities')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {chakraData[activeChakra].qualities}
                      </p>
                    </motion.div>

                    <motion.div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        🎯 {t('chakras.benefits')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {chakraData[activeChakra].benefits}
                      </p>
                    </motion.div>
                    <motion.div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      🔍 {t('chakras.assessment')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {chakraData[activeChakra].assessment}
                      </p>
                    </motion.div>
                    <motion.div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      ⚖️ {t('chakras.balance')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {chakraData[activeChakra].balance}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default ChakrasPage;
