import React, { useState, useRef } from 'react';
import { Send, Flower, Sparkle } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
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

  return (
    <div ref={ref} id='contact-section' className="min-h-screen bg-red-100 flex items-center justify-center p-4">
      <motion.div
        className="bg-white backdrop-blur-lg rounded-lg p-8 w-full max-w-3xl shadow-xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="flex items-center justify-center mb-8">
          <Flower className="text-red-800 w-12 h-12" />
          <motion.h1 className="text-3xl font-bold text-red-800 ml-3">
            {t('contact.title')}
          </motion.h1>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-black">{t('contact.nameLabel')}</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-red-700 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={t('contact.namePlaceholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-black">{t('contact.emailLabel')}</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-red-700 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={t('contact.emailPlaceholder')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-black">{t('contact.messageLabel')}</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-red-700 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
              placeholder={t('contact.messagePlaceholder')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-700 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600"
          >
            <span>{t('contact.sendButton')}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div className="mt-4 p-4 bg-red-700/20 rounded-lg text-red-800">
              <Sparkle className="w-5 h-5 mr-2" />
              {t('contact.successMessage')}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactSection;
