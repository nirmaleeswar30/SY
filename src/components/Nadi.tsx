import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface NadiContent {
  title: string;
  content: string[];
}

interface NadiData {
  [key: string]: NadiContent;
}

const Nadis = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('pingala');

  const nadiContent: NadiData = {
    pingala: {
      title: t('nadis.pingala.title'),
      content: [
        t('nadis.pingala.content.1'),
        t('nadis.pingala.content.2'),
        t('nadis.pingala.content.3')
      ]
    },
    ida: {
      title: t('nadis.ida.title'),
      content: [
        t('nadis.ida.content.1'),
        t('nadis.ida.content.2'),
        t('nadis.ida.content.3')
      ]
    },
    sushumna: {
      title: t('nadis.sushumna.title'),
      content: [
        t('nadis.sushumna.content.1'),
        t('nadis.sushumna.content.2'),
        t('nadis.sushumna.content.3')
      ]
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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  console.log('Active Tab:', activeTab);
  console.log('Nadi Content:', nadiContent);

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
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
            {t('nadis.title')}
          </h1>
          <h2 className="text-2xl text-red-500 font-medium">{t('nadis.subtitle')}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.keys(nadiContent).map((nadi) => (
            <motion.button
              key={nadi}
              onClick={() => setActiveTab(nadi)}
              className={`px-6 py-3 rounded-full transition-all shadow-md ${
                activeTab === nadi
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-50'
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              {nadiContent[nadi].title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
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
                      src="https://www.sahajayoga.org.in/new_images/subtle_image.jpg"
                      alt="Subtle System"
                      className="w-full h-auto rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      layoutId={`nadi-image-${activeTab}`}
                    />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
                      {nadiContent[activeTab].title}
                    </h2>
                  </div>
                </motion.div>

                <motion.div
                  className="lg:w-2/3"
                  variants={contentVariants}
                >
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                    {activeTab === 'pingala' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                      >
                        <h3 className="text-xl font-bold text-red-700 mb-4">{t('nadis.pingala.intro')}</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('nadis.pingala.introDescription')}
                        </p>
                      </motion.div>
                    )}

                    <div className="space-y-6">
                      {nadiContent[activeTab].content.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          className="text-gray-700 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default Nadis;
