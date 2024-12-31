import React from 'react';
import { motion } from 'framer-motion';

const Kundalini = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const listItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="bg-orange-100"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <motion.section 
        className="max-w-6xl mx-auto px-4 lg:px-0 py-12"
        variants={staggerContainer}
      >
        {/* Heading */}
        <motion.div 
          className="text-center mb-8"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl md:text-4xl font-medium text-red-600 mb-2"
            variants={fadeInUp}
          >
            Kundalini Awakening Meditation By Sahaja Yoga
          </motion.h1>
          <motion.h2 
            className="text-lg md:text-2xl font-medium text-red-400"
            variants={fadeInUp}
          >
            Pure Desire Of The God Almighty With Us
          </motion.h2>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0">
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={fadeInUp}
          >
            <motion.img
              src="https://www.sahajayoga.org.in/images/kundalini.png"
              alt="Kundalini Diagram"
              className="w-full h-auto max-w-md"
              variants={imageVariants}
              whileHover="hover"
            />
          </motion.div>

          {/* Paragraph Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-gray-700 leading-relaxed text-md text-justify"
            variants={staggerContainer}
          >
            <motion.p className="mb-4" variants={paragraphVariants}>
              Kundalini is the power of pure desire within us, a motherly and
              soothing spiritual energy which lies dormant at the base of the
              spine in the sacrum bone (the ancient civilizations knew that in
              this bone resides a sacred energy).
            </motion.p>
            <motion.p className="mb-4" variants={paragraphVariants}>
              Self realisation is the awakening of the Kundalini through the
              central channel, piercing through the six chakras above the sacrum
              bone and emerging at the top of the head (fontanel bone area) as a
              gentle "fountain" of coolness.
            </motion.p>
            <motion.p className="mb-4" variants={paragraphVariants}>
              The word fontanel itself means "little fountain" which shows again
              the ancient knowledge about this phenomenon of Self realisation.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Self realisation has always been the ultimate goal of all religions
              and spiritual traditions of the world, but was extremely difficult
              to attain in the past. It has now become a mass phenomenon achieved
              effortlessly through Sahaja Yoga, which is Shri Mataji's invaluable
              gift to humanity.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="w-full text-gray-700 leading-relaxed text-md text-justify mt-6"
          variants={staggerContainer}
        >
          <motion.p className="mb-4" variants={paragraphVariants}>
            In Shri Mataji's own words, "Self realisation is the first encounter with Reality". 
            "We have the Mother within ourselves, in our hearts, and if She is awakened, She is 
            going to look after us. She is going to give all the protection that is needed. And 
            there is nothing to be frightened of."
          </motion.p>
          <motion.p className="mb-4" variants={paragraphVariants}>
            "Kundalini cures you, she improves you, she bestows all the blissful things upon you. 
            She takes you away from the worries at the grosser level", says -H.H. Shri Mataji 
            Nirmala Devi.
          </motion.p>
          <motion.p className="mb-4" variants={paragraphVariants}>
            The Kundalini is like a rope with a thousand strands; when we first get our 
            Self-realisation, only one or two strands find their way through the chakras and 
            reach the sahastrara (the top chakra). However, with regular meditation, gradually 
            more strands of the Kundalini rise and connects us to the divine power.
          </motion.p>

          <motion.h2 
            className="text-red-600 text-xl font-semibold mt-6 mb-4"
            variants={fadeInUp}
          >
            References to Kundalini
          </motion.h2>

          <motion.p className="mb-4" variants={paragraphVariants}>
            This movement of Kundalini is felt by the presence of a cool or, in the case of 
            imbalance, a warm breeze across the palms of hands or the soles of feet. Such a 
            phenomenon can be seen to be described in a diverse array of scripture like:
          </motion.p>

          <motion.ul 
            className="list-disc pl-6 space-y-2"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              "Aquarian Gospel of Christ, ch. 44, v19, ch. 161, v35, ch. 162, v4;",
              "Gyaneshwari, ch.6;",
              "Ezekiel, ch. 37, vs. 5-6;",
              "Old Testament; John, ch. 14 vs. 15- 17 & 25: New Testament;",
              "Quran, sura 24, vs. 24; sura 35, vs. 9; sura 36, vs. 64;",
              "Descieux, 1998iii"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={listItemVariants}
                custom={index}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Kundalini;
