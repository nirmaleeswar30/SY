import React from 'react';
import { motion, useInView } from 'framer-motion';

interface BenefitCard {
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits: BenefitCard[] = [
    {
      title: "Improved Mental, Physical, Emotional And Spiritual Health",
      description: "Sahaja Yoga makes a person calm and peaceful, helping lead a more meaningful life to cope up easily and effectively with the situations, strains and stresses of life."
    },
    {
      title: "Loving Family And Compassionate Society",
      description: "The benefits of Sahaja Yoga accrue not only to the individual but also to society, to the nation and ultimately to the entire humanity."
    },
    {
      title: "From Religion To Spirituality",
      description: "Sahaja Yoga integrates all major religions of the world. Sahaja yoga is practiced by people irrespective of one's caste, creed, race, religion and nationality, worldwide, in over 130 countries."
    },
    {
      title: "In Sahaja Yoga Follow Your Experience Not What We Say",
      description: "Based on Vibratory Awareness attained after Self Realisation and establishment in Sahaja Yoga meditation, the seeker can judge the truth of vibrations themselves."
    },
    {
      title: "Health Benefit As A Byproduct Of Kundalini Awakening",
      description: "The seeker benefits through inner cure naturally as byproduct of Kundalini Awakening while improving harmony and love in family life and social relations."
    },
    {
      title: "Discover Your Persona Free From Stress, Tension And Worries",
      description: "One becomes courageous, confident, loving, peaceful and joyous and develops artistic talents. It is an entirely scientific experience with no scope for blind faith."
    }
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
          Benefits of Sahaja Yoga
        </motion.h1>

        <motion.p 
          className="text-gray-700 font-semibold text-center max-w-4xl mx-auto mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shri Mataji Nirmala Devi transformed lives through en masse Kundalini Awakening. For more than forty years, Shri Mataji traveled globally, offering free public lectures and the experience of self-realisation to all, regardless of race, caste, creed, religion or financial status. She not only enabled people to pass this valuable experience to others free of cost, but taught them the meditation technique necessary to sustain it known as Sahaja Yoga.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
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
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
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
            CLICK HERE TO VIEW MORE BENEFITS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;