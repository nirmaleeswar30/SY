import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';

const PublicProgramsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="pt-10">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
         
        {/* Users Icon Above the Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Users size={52} className="text-red-800 mx-auto" />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-center text-red-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact Us For Free Public Programs
        </motion.h1>

        <motion.p
          className="text-gray-600 text-center font-semibold max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          All public programs globally are entirely free of charge and always open to the public. Those who experience the peace and joy of this new state naturally have the desire to share this discovery with as many people as possible. There are many seminars, workshops and programs conducted weekly around the world.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src="https://img.freepik.com/premium-photo/cyberpunk-cityscape-background_662214-3982.jpg" alt="Rural Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Public Program in Rural Schools</h3>
                <p className="text-sm">Ask for Weekly Free Meditation in Schools</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src="https://images.gog-statics.com/63bb90a5dc06df0530fd85c1ac057527de6ef2653249e3b2f958316602cb4370_product_card_v2_mobile_slider_639.jpg" alt="Corporate Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Corporate Stress Relief Programs</h3>
                <p className="text-sm">Balancing Mind, Body & Spirit</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2RkxZ5FwSG4IW13GQ4qucp_QNyKa5kHdvQ&s" alt="School Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Private School Programs</h3>
                <p className="text-sm">Better memory & concentration</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1" alt="Workshop" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Personality Development</h3>
                <p className="text-sm">Improve productivity through meditation</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RDCGTLcwLyn6Sr2tq5oiJ3MnZvOjc4eYxg&s" alt="Bank Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Bank Employee Programs</h3>
                <p className="text-sm">Stress management for banking sector</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="Primary School" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Primary School Programs</h3>
                <p className="text-sm">Building moral and integrated education</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublicProgramsSection;