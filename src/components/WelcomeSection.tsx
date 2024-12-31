import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxImage } from './animations/ParallaxImage';
import { FadeInWhenVisible } from './animations/FadeInWhenVisible';

const WelcomeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-48 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            style={{ scale }}
            className="lg:w-1/2 mb-10 lg:mb-0 z-10"
          >
            <FadeInWhenVisible>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                WELCOME TO SAHAJA YOGA
              </h1>
              <p className="text-lg text-gray-600 mb-8">
              The time has come for all of you to get your self-realisation,
                  by which your attention becomes enlightened, your health gets
                  completely all right, your mental processes are sensible, but
                  above all you stand in your present.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-6">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Daily Free Meditation Sessions
                  </h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex justify-between items-center"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div>
                        <p className="font-medium">Morning Session</p>
                        <p className="text-gray-600">6:00 AM - 7:00 AM</p>
                      </div>
                      <motion.button 
                        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Join
                      </motion.button>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div>
                        <p className="font-medium">For Beginners</p>
                        <p className="text-gray-600">7:00 PM - 8:00 PM</p>
                      </div>
                      <motion.button 
                        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Join
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </motion.div>
          <div className="lg:w-1/2 lg:pl-16">
          <div className="relative w-full h-0 pb-[100%]">
            <ParallaxImage
              src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734203459/MF_035-17__1_1_1_2_sfpvvj.png"
              alt="Meditation"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-secondary opacity-10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-primary opacity-10 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.section>
  );
};

export default WelcomeSection;
