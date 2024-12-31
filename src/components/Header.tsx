import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <svg 
          className="w-10 h-10 text-primary-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
        <h1 className="text-4xl font-bold text-primary-900">Inspiring Speeches</h1>
      </div>
      <p className="text-primary-700 text-lg">Discover powerful speeches that changed the world</p>
    </motion.header>
  );
};
