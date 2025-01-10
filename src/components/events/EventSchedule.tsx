import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Event = {
  date: string;
  title: string;
  time: string;
  mentor: string;
  location: string;
  venue: string;
};

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const EventSchedule: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);

  const handleScheduleClick = () => {
    navigate('/schedule');
  };

  // Define events object with translations
  const events: Record<string, Event[]> = {
    January: [],
    February: [],
    March: [
      {
        date: t('events.dates.march2', 'March 2'),
        title: t('events.titles.mahashivaratri', 'Mahashivaratri Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.brazil', 'Brazil'),
        venue: t('events.venues.brazilCenter', 'Brazil Center'),
      },
      {
        date: t('events.dates.march21', 'March 21'),
        title: t('events.titles.birthday', 'Birthday Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.india', 'India'),
        venue: t('events.venues.indiaCenter', 'India Center'),
      },
    ],
    April: [
      {
        date: t('events.dates.april6', 'April 6'),
        title: t('events.titles.rama', 'Shri Rama Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.asia', 'Asia'),
        venue: t('events.venues.asiaCenter', 'Asian Countries Center'),
      },
      {
        date: t('events.dates.april20', 'April 20'),
        title: t('events.titles.easter', 'Easter Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.australia', 'Australia'),
        venue: t('events.venues.australiaCenter', 'Australia Center'),
      },
    ],
    May: [
      {
        date: t('events.dates.may4', 'May 4'),
        title: t('events.titles.sahasrara', 'Sahasrara Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.cabella', 'Cabella'),
        venue: t('events.venues.italyCenter', 'Italy Center'),
      },
    ],
    June: [
      {
        date: t('events.dates.june8', 'June 8'),
        title: t('events.titles.adishakti', 'Shri Adi Shakti Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.cabella', 'Cabella'),
        venue: t('events.venues.italyCenter', 'Italy Center'),
      },
    ],
    July: [
      {
        date: t('events.dates.july13', 'July 13'),
        title: t('events.titles.guru', 'Shri Adi Guru Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.cabella', 'Cabella'),
        venue: t('events.venues.italyCenter', 'Italy Center'),
      },
    ],
    August: [
      {
        date: t('events.dates.august24', 'August 24'),
        title: t('events.titles.krishna', 'Shri Krishna Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.cabella', 'Cabella'),
        venue: t('events.venues.italyCenter', 'Italy Center'),
      },
      {
        date: t('events.dates.august30', 'August 30'),
        title: t('events.titles.ganesha', 'Shri Ganesha Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.cabella', 'Cabella'),
        venue: t('events.venues.italyCenter', 'Italy Center'),
      },
    ],
    September: [
      {
        date: t('events.dates.september28', 'September 28'),
        title: t('events.titles.navaratri', 'Navaratri Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.cabella', 'Cabella'),
        venue: t('events.venues.italyCenter', 'Italy Center'),
      },
    ],
    October: [
      {
        date: t('events.dates.october19', 'October 19'),
        title: t('events.titles.diwali', 'Diwali Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.france', 'France'),
        venue: t('events.venues.franceCenter', 'France Center'),
      },
    ],
    November: [
      {
        date: t('events.dates.november30', 'November 30'),
        title: t('events.titles.bhairava', 'Shri Bhairava Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.tanzania', 'Tanzania'),
        venue: t('events.venues.africaCenter', 'Africa Center'),
      },
    ],
    December: [
      {
        date: t('events.dates.december25', 'December 25'),
        title: t('events.titles.christmas', 'Christmas Puja'),
        time: t('events.times.morning', '10:00 AM'),
        mentor: t('events.mentors.sahajayoga', 'Sahaja Yoga'),
        location: t('events.locations.india', 'India'),
        venue: t('events.venues.indiaCenter', 'India Center'),
      },
    ],
  };

  // Get translated months
  const translatedMonths = months.map(month => ({
    original: month,
    translated: t(`months.${month.toLowerCase()}`, month)
  }));

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            {t('events.title', 'Event Schedule 2025')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('events.subtitle', 'Join us for these transformative events')}
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
          {translatedMonths.map(({ original, translated }) => (
            <button
              key={original}
              onClick={() => setSelectedMonth(original)}
              className={`p-2 text-sm rounded-lg transition-colors ${
                selectedMonth === original
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {translated.slice(0, 3)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMonth}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="space-y-6">
              {events[selectedMonth]?.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    <p className="text-gray-600">
                      {t('events.dateTime', '{{date}} at {{time}}', { date: event.date, time: event.time })}
                    </p>
                    <p className="text-gray-600">
                      {t('events.location', 'Location: {{location}}', { location: event.location })}
                    </p>
                  </div>
                  <button 
                    onClick={handleScheduleClick}
                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
                  >
                    {t('events.button', 'Click Here')}
                  </button>
                </div>
              ))}
              {events[selectedMonth]?.length === 0 && (
                <p className="text-center text-gray-600">
                  {t('events.noEvents', 'No events scheduled for {{month}}.', { month: selectedMonth })}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventSchedule;