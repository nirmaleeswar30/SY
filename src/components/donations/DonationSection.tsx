import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DonationSection = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleDonate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle donation logic
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 pt-28 sm:p-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t('donation.title', 'Support Our Mission')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              {t('donation.description', 'Sahaja Yoga meditation is offered free of charge across the globe to promote spiritual growth, inner peace, and harmony. Every contribution, big or small, directly supports our mission to spread peace and joy through Sahaja Yoga. Donations are voluntary and deeply appreciated.')}
              <p className='font-semibold text-red-900'>
                {t('donation.quote', '"By giving, we receive the joy of sharing."')}
              </p>
            </p>
            
            <form onSubmit={handleDonate} className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-xl font-bold text-gray-700 mb-2">
                  {t('donation.amount', 'Donation Amount')}
                </label>
                <div className="mt-1 relative rounded-xl shadow-lg overflow-hidden">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="focus:ring-primary focus:border-primary block w-full pl-8 pr-12 sm:text-lg border-2 border-gray-300 rounded-xl py-4 transition-all duration-300 ease-in-out transform hover:shadow-xl"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-lg">$</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-primary hover:bg-primary-dark transition"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {t('donation.button', 'Donate Now')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt={t('donation.imageAlt', 'Donation')}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;