import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Define types for our navigation items
interface NavItem {
  title: string;
  path: string;
  category?: string;
}

interface SearchProps {
  onClose?: () => void;
}

const NavbarSearch: React.FC<SearchProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<NavItem[]>([]);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Combine all navigation items
  const navItems: NavItem[] = [
    { title: 'Home', path: '/' },
    { title: 'Schedule', path: '/schedule' },
    { title: 'Our Centers', path: '/centers' },
    { title: 'Clearence', path: '/clearence' },
    { title: 'Contact', path: '/contact' },
    // Chakra items
    { title: 'The Human Subtle System', path: '/subtle', category: 'Chakras & Nadis' },
    { title: 'Seven Chakra', path: '/chakras', category: 'Chakras & Nadis' },
    { title: 'Three Nadis', path: '/nadis', category: 'Chakras & Nadis' },
    { title: 'Kundalini', path: '/kundalini', category: 'Chakras & Nadis' },
    // Resource items
    { title: 'Books', path: '/resources/books', category: 'Resources' },
    { title: 'Speeches', path: '/resources/speeches', category: 'Resources' },
    { title: 'Bhajans', path: '/resources/bhajans', category: 'Resources' },
    { title: 'Photos', path: '/resources/gallery', category: 'Resources' },
    { title: 'Sahaj Miracles', path: '/resources/sahaj_miracles', category: 'Resources' },
  ];

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
        if (onClose) onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Filter items based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearchActive(true);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = navItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(filteredResults);
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchActive(false);
    if (onClose) onClose();
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsSearchActive(true)}
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
          placeholder="Search..."
        />
      </div>

      {isSearchActive && searchResults.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <ul className="py-2 text-sm text-gray-700">
            {searchResults.map((result, index) => (
              <li key={index}>
                <Link
                  to={result.path}
                  onClick={handleResultClick}
                  className="flex flex-col px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  <span className="font-medium">{result.title}</span>
                  {result.category && (
                    <span className="text-xs text-gray-500">{result.category}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;