import React, { useState } from 'react';
import { Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Session {
  days: string[];
  morning?: string[];
  evening: string[];
}

interface Event {
  month: string;
  date: string;
  day: string;
  title: string;
  location: string;
  description: string;
  price: number;
}

type ViewMode = 'list' | 'month' | 'day';

const Schedule: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regularSessions: Session = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    morning: ['6:00 AM', '2:00 PM', '8:00 AM', '7:00 PM', '5:00 PM', '10:00 AM', '7:00 AM'],
    evening: ['6:00 PM', '2:00 PM', '8:00 PM', '7:00 PM', '5:00 PM', '10:00 PM', '7:00 PM']
  };

  const newseekers: Session = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    evening: ['6:00 PM', '2:00 PM', '8:00 PM', '7:00 PM', '5:00 PM', '10:00 PM', '7:00 PM']
  };

  const events: Event[] = [
    {
      month: 'December 2024',
      date: '13',
      day: 'FRI',
      title: 'Festival of Colors 2024',
      location: 'Manhattan Club 355 5th Ave, New York, NY, United States',
      description: 'Duis sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      price: 285
    },
    {
      month: 'June 2025',
      date: '13',
      day: 'FRI',
      title: 'Festival of Colors 2024',
      location: 'Manhattan Club 355 5th Ave, New York, NY, United States',
      description: 'Duis sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      price: 285
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const eventCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-8 space-y-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Sessions Section */}
      <div className="space-y-12">
        <motion.section
          className="transform transition-all"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Regular Online Sessions
          </motion.h2>
          <motion.div 
            className="overflow-x-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-800 to-red-700">
                <tr>
                  <th className="p-4 text-left text-white">Day</th>
                  {regularSessions.days.map(day => (
                    <th key={day} className="p-4 text-left text-white">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                <motion.tr 
                  className="hover:bg-gray-50 transition-colors"
                  variants={tableRowVariants}
                >
                  <td className="p-4 font-bold border-t">Morning</td>
                  {regularSessions.morning?.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">{time}</td>
                  ))}
                </motion.tr>
                <motion.tr 
                  className="hover:bg-gray-50 transition-colors"
                  variants={tableRowVariants}
                >
                  <td className="p-4 font-bold border-t">Evening</td>
                  {regularSessions.evening.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">{time}</td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Similar animation for New Seekers section */}
        <motion.section
          className="transform transition-all"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            New Seekers Sessions
          </motion.h2>
          <motion.div 
            className="overflow-x-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Table content similar to above */}
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-800 to-red-700">
                <tr>
                  <th className="p-4 text-left text-white">Day</th>
                  {newseekers.days.map(day => (
                    <th key={day} className="p-4 text-left text-white">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                <motion.tr 
                  className="hover:bg-gray-50 transition-colors"
                  variants={tableRowVariants}
                >
                  <td className="p-4 font-bold border-t">Evening</td>
                  {newseekers.evening.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">{time}</td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Events Section */}
        <motion.section 
          className="mt-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Events
          </motion.h2>
          
          {/* Search and Filter Bar */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between gap-4 mb-8"
            variants={containerVariants}
          >
            <div className="relative flex-1 max-w-lg">
              <motion.input
                type="text"
                placeholder="Search for events"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg hover:from-red-800 hover:to-red-700 transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Events
              </motion.button>
              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                {['List', 'Month', 'Day'].map((mode) => (
                  <motion.button
                    key={mode}
                    onClick={() => setViewMode(mode.toLowerCase() as ViewMode)}
                    className={`px-4 py-2 ${
                      viewMode === mode.toLowerCase()
                        ? 'bg-red-100 text-red-800'
                        : 'text-gray-600 hover:bg-gray-50'
                    } transition-colors`}
                    whileHover={{ backgroundColor: viewMode === mode.toLowerCase() ? '#FEE2E2' : '#F9FAFB' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mode}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Events List */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                className="group"
                variants={eventCardVariants}
                whileHover="hover"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{event.month}</h3>
                <motion.div 
                  className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-md overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200 md:w-24">
                    <div className="text-2xl font-bold text-gray-900">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.day}</div>
                  </div>
                  <div className="flex-1 p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 mb-2">{event.location}</p>
                    <p className="text-gray-500 text-sm">{event.description}</p>
                    <div className="mt-4 text-red-800 font-semibold">${event.price}</div>
                  </div>
                  <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden">
                    <motion.img 
                      src="/api/placeholder/400/320"
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Schedule;
