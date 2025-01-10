import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="about-section" className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Left Side: Full-Screen Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 h-full"
      >
        <img
          src="https://res.cloudinary.com/dr8g09icb/image/upload/v1736491025/image_8_gk6esb.png"
          alt={t('about.meditation.altText')}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-1/2 flex items-center justify-center px-8 bg-[#fdf6e9]"
      >
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 lg:mt-0 mt-12">
            {t('about.title')}
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 text-justify">
            {t('about.description')}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;