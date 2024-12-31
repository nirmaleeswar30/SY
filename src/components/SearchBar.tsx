import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative w-full max-w-xl mx-auto mb-8"
    >
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for books..."
          className="w-full px-4 py-3 pl-12 text-gray-700 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg 
                   focus:outline-none focus:ring-2 focus:ring-maroon-400 transition-all duration-300
                   border border-maroon-100"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-maroon-400" size={20} />
      </div>
    </motion.div>
  );
};