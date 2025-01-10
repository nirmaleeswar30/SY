import React, { useState, useEffect } from 'react';
import { Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Session {
  days: string[];
  morning?: string[];
  evening: string[];
}

interface Event {
  month: string;
  date: string;
  day: string;
  time: string;
  title: string;
  location: string;
  description: string;
  calender: string;
}

const Schedule: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayEvents, setDisplayEvents] = useState<Event[]>([]);

  const regularSessions: Session = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    morning: ['5:30 - 6:30 AM', '5:30 - 6:30 AM', '5:30 - 6:30 AM', '5:30 - 6:30 AM', '5:30 - 6:30 AM', '5:30 - 6:30 AM', '5:30 - 6:30 AM'],
    evening: ['9:00 PM - 9:40 PM', '9:00 PM - 9:40 PM', '9:00 PM - 9:40 PM', '9:00 PM - 9:40 PM', '9:00 PM - 9:40 PM', '9:00 PM - 9:40 PM', '9:00 PM - 9:40 PM']
  };

  const newseekers: Session = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    evening: ['8.00 to 8.30 PM', '8.00 to 8.30 PM', '8.00 to 8.30 PM', '8.00 to 8.30 PM', '8.00 to 8.30 PM', '8.00 to 8.30 PM', '8.00 to 8.30 PM']
  };

  const events: Event[] = [
    { month: t('months.march'), date: t('events.dates.march2'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.mahashivaratri'), location: t('events.locations.brazil'), description: t('events.descriptions.mahashivaratri'), calender: t('events.calenders.mahashivaratri') },
    { month: t('months.march'), date: t('events.dates.march21'), day: t('days.Friday'), time: t('events.times.morning'), title: t('events.titles.birthday'), location: t('events.locations.india'), description: t('events.descriptions.birthday'), calender: t('events.calenders.birthday') },
    { month: t('months.april'), date: t('events.dates.april6'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.rama'), location: t('events.locations.asia'), description: t('events.descriptions.rama'), calender: t('events.calenders.rama') },
    { month: t('months.april'), date: t('events.dates.april20'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.easter'), location: t('events.locations.australia'), description: t('events.descriptions.easter'), calender: t('events.calenders.easter') },
    { month: t('months.may'), date: t('events.dates.may4'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.sahasrara'), location: t('events.locations.cabella'), description: t('events.descriptions.sahasrara'), calender: t('events.calenders.sahasrara') },
    { month: t('months.june'), date: t('events.dates.june8'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.adishakti'), location: t('events.locations.cabella'), description: t('events.descriptions.adishakti'), calender: t('events.calenders.adishakti') },
    { month: t('months.july'), date: t('events.dates.july13'), day: t('days.Saturday'), time: t('events.times.morning'), title: t('events.titles.guru'), location: t('events.locations.cabella'), description: t('events.descriptions.guru'), calender: t('events.calenders.guru') },
    { month: t('months.august'), date: t('events.dates.august24'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.krishna'), location: t('events.locations.cabella'), description: t('events.descriptions.krishna'), calender: t('events.calenders.krishna') },
    { month: t('months.august'), date: t('events.dates.august30'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.ganesha'), location: t('events.locations.cabella'), description: t('events.descriptions.ganesha'), calender: t('events.calenders.ganesha') },
    { month: t('months.september'), date: t('events.dates.september28'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.navaratri'), location: t('events.locations.cabella'), description: t('events.descriptions.navaratri'), calender: t('events.calenders.navaratri') },
    { month: t('months.october'), date: t('events.dates.october19'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.diwali'), location: t('events.locations.france'), description: t('events.descriptions.diwali'), calender: t('events.calenders.diwali') },
    { month: t('months.november'), date: t('events.dates.november30'), day: t('days.Sunday'), time: t('events.times.morning'), title: t('events.titles.bhairava'), location: t('events.locations.tanzania'), description: t('events.descriptions.bhairava'), calender: t('events.calenders.bhairava') },
    { month: t('months.december'), date: t('events.dates.december25'), day: t('days.Thursday'), time: t('events.times.morning'), title: t('events.titles.christmas'), location: t('events.locations.india'), description: t('events.descriptions.christmas'), calender: t('events.calenders.christmas') }
  ];

  // Filter events based on search query, view mode, and language changes
  useEffect(() => {
    let filtered = [...events];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.month.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setDisplayEvents(filtered);
  }, [searchQuery, t]); // Add dependencies here

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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#DC2626', // Darker red on hover
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
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
        <motion.section className="transform transition-all" variants={containerVariants}>
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('welcome.sessions.title')}
          </motion.h2>
          <motion.div
            className="overflow-x-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-800 to-red-700">
                <tr>
                  <th className="p-4 text-center text-white">{t('welcome.sessions.list')}</th>
                  {regularSessions.days.map((day) => (
                    <th key={day} className="p-4 text-center text-white">
                      {t(`days.${day}`)}
                    </th>
                  ))}
                  <th className="p-4 text-center text-white"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <motion.tr className="hover:bg-gray-50 transition-colors" variants={tableRowVariants}>
                  <td className="p-4 font-bold text-center border-t">{t('welcome.sessions.morning.title')}</td>
                  {regularSessions.morning?.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">
                      <span className="block text-center">{time}</span>
                    </td>
                  ))}
                  <td className="p-4 border-t">
                    <div className="flex flex-col space-y-2">
                      <motion.button
                        className="bg-red-700 text-white px-4 py-2 rounded-lg"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {t('welcome.sessions.join')}
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
                <motion.tr className="hover:bg-gray-50 transition-colors" variants={tableRowVariants}>
                  <td className="p-4 font-bold text-center border-t">{t('welcome.sessions.evening.title')}</td>
                  {regularSessions.evening.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">
                      <span className="block text-center">{time}</span>
                    </td>
                  ))}
                  <td className="p-4 border-t">
                    <div className="flex flex-col space-y-2">
                      <motion.button
                        className="bg-red-700 text-white px-4 py-2 rounded-lg"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {t('welcome.sessions.join')}
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* New Seekers Section */}
        <motion.section className="transform transition-all" variants={containerVariants}>
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('welcome.sessions.beginner.title')}
          </motion.h2>
          <motion.div
            className="overflow-x-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-800 to-red-700">
                <tr>
                  <th className="p-4 text-center text-white">{t('welcome.sessions.list')}</th>
                  {newseekers.days.map((day) => (
                    <th key={day} className="p-4 text-center text-white">
                      {t(`days.${day}`)}
                    </th>
                  ))}
                  <th className="p-4 text-center text-white"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <motion.tr className="hover:bg-gray-50 transition-colors" variants={tableRowVariants}>
                  <td className="p-4 font-bold text-center border-t">{t('welcome.sessions.evening.title')}</td>
                  {newseekers.evening.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">
                      <span className="block text-center">{time}</span>
                    </td>
                  ))}
                  <td className="p-4 border-t">
                    <div className="flex flex-col space-y-2">
                      <motion.button
                        className="bg-red-700 text-white px-4 py-2 rounded-lg"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {t('welcome.sessions.join')}
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Events Section */}
        <motion.section className="mt-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('events.sectitle')}
          </motion.h2>

          {/* Search and Filter Bar */}
          <motion.div
            className="flex flex-col md:flex-row justify-between gap-4 mb-8"
            variants={containerVariants}
          >
            <div className="relative flex-1 max-w-lg">
              <motion.input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Events List */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {displayEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className="group"
                variants={eventCardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover="hover"
                >
                  {/* Responsive Date and Day Section */}
                  <div
                    className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0"
                    style={{ minWidth: '6rem', maxWidth: '12rem' }}
                  >
                    <div className="text-2xl font-bold text-gray-900">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.day}</div>
                  </div>

                  {/* Event Details Section */}
                  <div className="flex-1 p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-lg font-bold mb-2">Places: {event.location}</p>
                    <p className="text-gray-600 text-lg font-bold mb-2">Time: {event.time}</p>
                    <p className="text-gray-600 text-lg font-bold mb-2">Seminar Dates: {event.description}</p>
                    <div className="text-red-800 text-lg font-extrabold mb-2">Panchang calendar: {event.calender}</div>
                    <div className="text-gray-600 text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis sm:text-base">
                      {event.month}
                    </div>
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