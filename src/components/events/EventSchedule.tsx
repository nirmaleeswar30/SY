import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

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

const events: Record<string, Event[]> = {
  January: [],
  February: [],
  March: [
    {
      date: "March 2",
      title: "Mahashivaratri Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Brazil",
      venue: "Brazil Center",
    },
    {
      date: "March 21",
      title: "Birthday Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "India",
      venue: "India Center",
    },
  ],
  April: [
    {
      date: "April 6",
      title: "Shri Rama Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Asia",
      venue: "Asian Countries Center",
    },
    {
      date: "April 20",
      title: "Easter Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Australia",
      venue: "Australia Center",
    },
  ],
  May: [
    {
      date: "May 4",
      title: "Sahasrara Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center",
    },
  ],
  June: [
    {
      date: "June 8",
      title: "Shri Adi Shakti Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center",
    },
  ],
  July: [
    {
      date: "July 13",
      title: "Shri Adi Guru Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center",
    },
  ],
  August: [
    {
      date: "August 24",
      title: "Shri Krishna Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center",
    },
    {
      date: "August 30",
      title: "Shri Ganesha Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center",
    },
  ],
  September: [
    {
      date: "September 28",
      title: "Navaratri Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center",
    },
  ],
  October: [
    {
      date: "October 19",
      title: "Diwali Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "France",
      venue: "France Center",
    },
  ],
  November: [
    {
      date: "November 30",
      title: "Shri Bhairava Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "Tanzania",
      venue: "Africa Center",
    },
  ],
  December: [
    {
      date: "December 25",
      title: "Christmas Puja",
      time: "10:00 AM",
      mentor: "Sahaja Yoga",
      location: "India",
      venue: "India Center",
    },
  ],
};

const EventSchedule: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Event Schedule 2025</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join us for these transformative events
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`p-2 text-sm rounded-lg transition-colors ${
                selectedMonth === month
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {month.slice(0, 3)}
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
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors "
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    <p className="text-gray-600">
                      {event.date} at {event.time}
                    </p>
                    <p className="text-gray-600">Mentor: {event.mentor}</p>
                    <p className="text-gray-600">Location: {event.location}</p>
                    <p className="text-gray-600">Venue: {event.venue}</p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition">
                    Click Here
                  </button>
                </div>
              ))}
              {events[selectedMonth]?.length === 0 && (
                <p className="text-center text-gray-600">
                  No events scheduled for {selectedMonth}.
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
