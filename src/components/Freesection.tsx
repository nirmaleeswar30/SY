import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FreeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref}>
      <div className="bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left side - Image */}
          <motion.div
            className="w-64 h-64 lg:w-96 lg:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-red-500 rounded-full w-full h-full flex items-center justify-center">
              <span className="text-white text-4xl lg:text-6xl font-bold">It's Free</span>
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            className="max-w-2xl pl-0 sm:pl-24"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-red-500 mb-6">
              You Can Not Pay For Your Self-Realisation
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 font-semibold">
              "So one should understand that you are not to pay for this. You are not to pay for what I say to you, or for my lectures, or anything, or for your Realisation, not at all, not a single pie for that. You cannot pay for it. It is so invaluable. ... It is absolutely overflowing. It's absolutely freely coming to you. So you cannot pay for your Self-Realisation. It's Love, and Love, you cannot purchase."
            </p>
            
            <p className="text-gray-600 italic">
              - H.H. Shri Mataji Nirmala Devi, London, 1982
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FreeSection;
