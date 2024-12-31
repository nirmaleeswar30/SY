import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734117524/meditation-meditate-mindful-mindfulness-svgrepo-com_crwhqj.svg",
    title: "Everyone Needs\nMeditation",
    description: "Today the humanity is shaken up and going through unprecedented imbalances. Sahaja Yoga gives the solution"
  },
  {
    icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734117151/lotus-svgrepo-com_1_gtcxyp.svg",
    title: "Sahaja Yoga is Transformational",
    description: "Sahaja Yoga gives instant experience in hands, fingers and human body which is effortless and spontaneous. With this experience, you gain a new dimension in your lifestyle."
  },
  {
    icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734118671/plant-on-a-hand-svgrepo-com_1_hg0g3r.svg",
    title: "Unlock\nThe Benefits Today",
    description: "Sahaj Meditation makes you know thyself. You will experience stress reduction, enhanced concentration, improved memory and spiritual growth. Get started today!"
  }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-56 bg-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-16 rounded-lg shadow-lg text-center"
            >
              {typeof feature.icon === 'string' ? (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4 filter text-red-800"
                />
              ) : null}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 ">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;