import React from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <motion.div 
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-12"
    >
      <div className="relative max-w-2xl mx-auto">
        <svg 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        <input
          type="text"
          placeholder="Search for inspiring speeches..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all text-primary-900 placeholder-primary-300"
        />
      </div>
    </motion.div>
  );
};
