import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Marquee = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-orange-500 font-medium italic text-white py-2 overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{
            x: [0, "-50%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex flex-nowrap shrink-0"
        >
          <span className="px-8">{t('marquee.seminar')}</span>
          <span className="px-8">{t('marquee.registration')}</span>
          <span className="px-8">{t('marquee.seminar')}</span>
          <span className="px-8">{t('marquee.registration')}</span>
          <span className="px-8">{t('marquee.seminar')}</span>    
          <span className="px-8">{t('marquee.registration')}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;