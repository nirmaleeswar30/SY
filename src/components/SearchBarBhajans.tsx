import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange,
  placeholder = 'Search videos...'
}) => (
  <div className="relative max-w-xl mx-auto mb-8">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-12 pr-4 py-3 rounded-xl border border-red-200 focus:border-red-800 focus:ring-2 focus:ring-red-100 transition-all"
    />
  </div>
);