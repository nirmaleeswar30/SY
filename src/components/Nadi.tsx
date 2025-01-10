import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface NadiContent {
  title: string;
  content: string[];
  image: string;
}

interface NadiData {
  [key: string]: NadiContent;
}

const Nadis = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('pingala');

  const nadiContent: NadiData = {
    pingala: {
      title: t('nadis.pingala.title') || 'Pingala Nadi', // Fallback title
      content: [
        t('nadis.pingala.content.0') || 'Your right energy channel (Pingala nadi), also called the sun channel...',
        t('nadis.pingala.content.1') || 'Action and planning are essential qualities associated with the right energy channel...',
        t('nadis.pingala.content.2') || 'In summary, your right energy channel influences your ability to plan and take action...'
      ],
      image: 'https://res.cloudinary.com/dodaypz5o/image/upload/v1736262011/nadis-inside-img-00003_1_bopw6l.jpg'
    },
    ida: {
      title: t('nadis.ida.title') || 'Ida Nadi', // Fallback title
      content: [
        t('nadis.ida.content.0') || 'Your left energy channel (called Ida nadi in Sanskrit), also known as the moon channel...',
        t('nadis.ida.content.1') || 'Joy is an essential quality associated with the left energy channel...',
        t('nadis.ida.content.2') || 'If you have a problem with your left energy channel, you may experience emotional extremes...'
      ],
      image: 'https://res.cloudinary.com/dodaypz5o/image/upload/v1736262011/nadis-inside-img-002_1_mqcoph.jpg'
    },
    sushumna: {
      title: t('nadis.sushumna.title') || 'Sushumna Nadi', // Fallback title
      content: [
        t('nadis.sushumna.content.0') || 'Your central energy channel (Sushumna nadi), also called the middle path...',
        t('nadis.sushumna.content.1') || 'Your entire subtle energy system is integrated in the Sahastrara chakra...',
        t('nadis.sushumna.content.2') || 'It may sound complex, but understanding your energy channels is quite simple...'
      ],
      image: 'https://res.cloudinary.com/dodaypz5o/image/upload/v1736262012/Central-Channel-SY-929x1024_1_po379q.jpg'
    }
  };

  // Debugging: Log unresolved translation keys
  useEffect(() => {
    Object.keys(nadiContent).forEach((nadi) => {
      nadiContent[nadi].content.forEach((paragraph, index) => {
        if (paragraph.startsWith('nadis.')) {
          console.warn(`Missing translation for key: ${paragraph}`);
        }
      });
    });
  }, [nadiContent]);

  // Animation variants
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

  return (
    <motion.div
      className="bg-gradient-to-br from-orange-50 to-pink-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600 leading-tight">
            {t('nadis.title')}
          </h1>
          <h2 className="text-2xl text-red-500 font-medium leading-tight">
            {t('nadis.subtitle')}
          </h2>
        </motion.div>

        {/* Tabs for Nadis */}
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

        {/* Content for Active Tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="bg-white rounded-2xl shadow-xl overflow-visible"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            layout
          >
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Image and Title */}
                <motion.div
                  className="lg:w-1/3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-6">
                    <motion.img
                      src={nadiContent[activeTab].image}
                      alt={`${nadiContent[activeTab].title} Image`}
                      className="w-full h-auto rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      layoutId={`nadi-image-${activeTab}`}
                    />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600 leading-tight">
                      {nadiContent[activeTab].title}
                    </h2>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="lg:w-2/3"
                  variants={contentVariants}
                >
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
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