import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search audios..."
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-maroon-500 focus:ring-2 focus:ring-maroon-200 transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;  
