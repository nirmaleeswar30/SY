import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getFeatures = (): Feature[] => {
    try {
      const translatedFeatures = t('welcome.sessions.features.items', { returnObjects: true });
      if (Array.isArray(translatedFeatures) && translatedFeatures.length > 0) {
        // Map the translated features to ensure they have the link property
        return translatedFeatures.map((feature, index) => ({
          ...feature,
          link: index === 0 ? '/schedule' : 
                index === 1 ? '#about-section' : 
                '#benefits-section'
        })) as Feature[];
      }
    } catch (error) {
      console.warn('Translation fallback used for features');
    }

    // Fallback features if translation fails
    return [
      {
        title: "Everyone Needs Meditation",
        description: "Today the humanity is shaken up and going through unprecedented imbalances. Sahaja Yoga gives the solution",
        icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734117524/meditation-meditate-mindful-mindfulness-svgrepo-com_crwhqj.svg",
        link: "/schedule"
      },
      {
        title: "Sahaja Yoga is Transformational",
        description: "Sahaja Yoga gives instant experience in hands, fingers and human body which is effortless and spontaneous. With this experience, you gain a new dimension in your lifestyle.",
        icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734117151/lotus-svgrepo-com_1_gtcxyp.svg",
        link: "#about"
      },
      {
        title: "Unlock The Benefits Today",
        description: "Sahaj Meditation makes you know thyself. You will experience stress reduction, enhanced concentration, improved memory and spiritual growth. Get started today!",
        icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734118671/plant-on-a-hand-svgrepo-com_1_hg0g3r.svg",
        link: "#benefits"
      }
    ];
  };

  const handleNavigation = (link: string) => {
    if (link.startsWith('#')) {
      // For hash links (internal navigation)
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For route navigation
      navigate(link);
    }
  };

  const features = getFeatures();

  return (
    <section className="py-56 bg-[#fdf6e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-16 rounded-lg shadow-lg text-center relative group cursor-pointer"
              onClick={() => handleNavigation(feature.link)}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4 filter text-red-800"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg mb-8">{feature.description}</p>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <ArrowRight 
                  className="w-6 h-6 text-red-800 transform transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;