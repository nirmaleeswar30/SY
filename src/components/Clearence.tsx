import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface TechniqueData {
  title: string;
  image: string;
  process: string;
}

interface ClearanceData {
  [key: string]: TechniqueData;
}

const ClearancePage = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [activeTechnique, setActiveTechnique] = useState<string>('footsoaking');

  const clearanceData: ClearanceData = {
    footsoaking: {
      title: t('clearance.techniques.footsoaking.title'),
      image: "https://static.wixstatic.com/media/32b5c1_2feeb310e04e4f7b90b2772144c6a3f6~mv2.jpg/v1/fill/w_416,h_404,al_c,lg_1,q_80,enc_avif,quality_auto/candling5.jpg",
      process: t('clearance.techniques.footsoaking.process'),
    },
    shoebeating: {
      title: t('clearance.techniques.shoebeating.title'),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oSzGHJ72isz_8-5XDZY38_Ws_xR7T9yURA&s",
      process: t('clearance.techniques.shoebeating.process'),
    },
    matka: {
      title: t('clearance.techniques.matka.title'),
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX0bWmVmCaBmiwOxB9v5qRTWfMpmODeDSTm7AzkdEyUouclu6gKh7ooERuFHTp1Z3H3ZK54pCQxo8gQ4iOshwb0GQvmfG-Jya_rGYiRAH_KoA9nz83jrCJIldl42TWULp4vfZu/s320/DSC01336.JPG",
      process: t('clearance.techniques.matka.process'),
    },
    collective: {
      title: t('clearance.techniques.collective.title'),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKosEgSj9SUnnW-CcX-KJj9F-_DhiCWu4fbg&s",
      process: t('clearance.techniques.collective.process'),
    },
    candle: {
      title: t('clearance.techniques.candle.title'),
      image: "https://static.wixstatic.com/media/32b5c1_50815b5c9cf849e5981870a67c5a4b2d~mv2.jpeg/v1/fill/w_396,h_476,al_c,lg_1,q_80,enc_avif,quality_auto/candling1.jpeg",
      process: t('clearance.techniques.candle.process'),
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
            {t('clearance.title')}
          </h1>
          <h2 className="text-2xl text-red-500 font-medium">
            {t('clearance.subtitle')}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.keys(clearanceData).map((technique) => (
            <motion.button
              key={technique}
              onClick={() => setActiveTechnique(technique)}
              className={`px-6 py-3 rounded-full transition-all shadow-md ${activeTechnique === technique
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-50'
                }`}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              {clearanceData[technique].title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTechnique}
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
                      src={clearanceData[activeTechnique].image}
                      alt={clearanceData[activeTechnique].title}
                      className="w-full h-auto rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      layoutId={`technique-image-${activeTechnique}`}
                    />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
                      {clearanceData[activeTechnique].title}
                    </h2>
                  </div>
                </motion.div>

                <motion.div
                  className="lg:w-2/3"
                  variants={sectionVariants}
                >
                  <motion.div
                    className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      {t('clearance.process')} 
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {clearanceData[activeTechnique].process}
                    </p>
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

export default ClearancePage;