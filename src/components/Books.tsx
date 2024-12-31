import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Library } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { BookCard } from './BookCard';
import { books } from '../data/books';

const Books: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = useMemo(() => {
    return books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-12">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <Library className="text-red-800 mr-3" size={48} />
            </motion.div>
            <h1 className="text-5xl font-bold text-maroon-800 text-red-800">Sahaja Yoga</h1>
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </motion.div>

        {filteredBooks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl">No books found matching your search.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Books;
