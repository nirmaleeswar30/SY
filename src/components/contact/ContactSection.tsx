import React, { useState, useRef } from 'react';
import { Send, Flower, Sparkle } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-red-100 flex items-center justify-center p-4"
    >
      <motion.div
        className="bg-white backdrop-blur-lg rounded-lg p-8 w-full max-w-3xl shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <Flower className="text-red-800 w-12 h-12" />
          </motion.div>
          <motion.h1 
            className="text-3xl font-bold text-red-800 ml-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4 }}
          >
            Connect With Us
          </motion.h1>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="space-y-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-black">Name</label>
            <motion.input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-red-700 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-black">Email</label>
            <motion.input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-red-700 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-black">Message</label>
            <motion.textarea
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-red-700 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.button
            className="w-full py-3 bg-red-700 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.span>Send Message</motion.span>
            <motion.div
              animate={isInView ? { x: [0, 4, 0] } : { x: 0 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Send className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              className="mt-4 p-4 bg-red-700/20 rounded-lg text-red-800 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkle className="w-5 h-5 mr-2" />
              </motion.div>
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactSection;