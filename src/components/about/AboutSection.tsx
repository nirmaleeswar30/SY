import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Left Side: Full-Screen Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Meditation practice"
          className="w-full h-full object-cover"
        />
      </motion.div>
{/* Right Side: Text Content */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="lg:w-1/2 flex items-center justify-center px-8"
>
  <div className="max-w-lg">
    {/* Title: "About Sahaja Yoga" */}
    <h2 className="text-4xl font-bold text-gray-900 mb-6 lg:mt-0 mt-12">About Sahaja Yoga</h2>
    
    {/* Description */}
    <p className="text-lg text-gray-600 mb-6 text-justify">
      Sahaja Yoga is a simple meditation practice that nurtures an evolved spiritual personality through the awakening of the Kundalini, a process known as Self-Realization. Discovered by H.H. Shri Mataji Nirmala Devi in 1970, this awakening fulfills the universal goal shared by all religions. While the knowledge of Kundalini is ancient, it was historically kept secret and passed only from guru to disciple, as achieving Self-Realization was once extremely challenging. Shri Mataji made a breakthrough by connecting our Kundalini with the Spirit (Atma), through Self-Realization accessible to all humans for the first time in the history. This process brings physical, mental, and emotional balance as a natural outcome of Sahaja Yoga meditation. Self-Realization is the birthright of every human being, now made available to all at free of cost worldwide.
    </p>
    
    {/* Learn More Button */}
    <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition">
      Learn More
    </button>
  </div>
</motion.div>

    </section>
  );
};

export default AboutSection;
