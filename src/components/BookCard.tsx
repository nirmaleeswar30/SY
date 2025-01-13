import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Book } from '../types/book';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-maroon-100"
    >
      <div className="relative aspect-[3/4]">
        <img
          src={book.cover}
          alt={t(book.title)} // Translate the title for alt text
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/40 to-transparent opacity-80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-maroon-900/60 opacity-0 transition-opacity duration-300"
        >
          <motion.a
            href={book.downloadUrl}
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-white text-maroon-700 rounded-lg hover:bg-maroon-50 transition-colors shadow-xl"
          >
            <Download size={18} className="mr-2" />
            {t('bookCard.downloadNow')} {/* Translate the download button text */}
          </motion.a>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          {/* <span className="px-3 py-1 text-xs font-medium text-maroon-700 bg-maroon-50 rounded-full">
            {book.genre}
          </span> */}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-maroon-700 transition-colors">
          {t(book.title)} {/* Translate the title */}
        </h3>
        <p className="text-maroon-600 mb-2">{t(book.author)} {/* Translate the author */}</p>
        {/* <p className="text-sm text-gray-500 line-clamp-2">{t(book.description)} {/* Translate the description */}
      </div>
    </motion.div>
  );
};