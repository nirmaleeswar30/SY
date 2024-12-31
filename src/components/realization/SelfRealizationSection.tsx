import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SelfRealisationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref}>
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-red-700 font-bold text-center mb-12"
        >
          Self Realisation And Kundalini Awakening, <br />Experience Now
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-8 text-lg font-medium"
          >
            <blockquote className="text-gray-700 italic">
              <p className="mb-4">
                "Now the time has come; the blossom time has come for many people to get Realisation. They have to get it. This is predicted, the time has come that you all have to get Realisation."
              </p>
              <footer className="text-sm">
                - H.H. Shri Mataji Nirmala Devi, 14.08.1980, Preston, UK.
              </footer>
            </blockquote>

            <blockquote className="text-gray-700 italic">
              <p className="mb-4">
                "The truth is, first one, that you are not this body, this mind, these conditionings or ego but you are pure spirit and the second truth is that there is an all-pervading power of divine love which works out all the living work."
              </p>
              <footer className="text-sm">
                - H.H. Shri Mataji Nirmala Devi, 24.07.1992, Public Talk, Paris Gaveau France.
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="aspect-video">
              <iframe 
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/l8gfotcxvYA"
                title="Sahaja Yoga Meditation Kundalini Awakening"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-sm font-semibold text-gray-600">
              Note: The above video is just an animated representation of the awakening of Kundalini energy, to experience. Please, Click the below to experience your Self Realisation.
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.a 
            href="#" 
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold mt-8 px-8 py-4 rounded-2xl transition-colors duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              // Add your self realisation link/function here
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            CLICK HERE TO EXPERIENCE YOUR SELF REALISATION
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SelfRealisationSection;
