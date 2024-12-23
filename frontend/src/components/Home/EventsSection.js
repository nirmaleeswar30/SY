import React, { useState } from "react";
import { format } from "date-fns";

const EventsSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  const events = [
    // March Events
    {
      id: 1,
      date: new Date(2025, 2, 2), // 2nd March 2025
      time: "All Day",
      title: "Mahashivaratri Puja",
      mentor: "N/A",
      location: "Brazil",
      venue: "South America",
    },
    {
      id: 2,
      date: new Date(2025, 2, 21), // 21st March 2025
      time: "All Day",
      title: "Birthday Celebration",
      mentor: "N/A",
      location: "India",
      venue: "India",
    },
    // April Events
    {
      id: 3,
      date: new Date(2025, 3, 6), // 6th April 2025
      time: "All Day",
      title: "Shri Rama Puja",
      mentor: "N/A",
      location: "Asia",
      venue: "Asian Countries",
    },
    {
      id: 4,
      date: new Date(2025, 3, 20), // 20th April 2025
      time: "All Day",
      title: "Easter Puja",
      mentor: "N/A",
      location: "Australia",
      venue: "Australia, New Zealand",
    },
    // May Events
    {
      id: 5,
      date: new Date(2025, 4, 4), // 4th May 2025
      time: "All Day",
      title: "Sahasrara Puja",
      mentor: "N/A",
      location: "Cabella, Italy",
      venue: "Austria, Germany, Hungary",
    },
    // June Events
    {
      id: 6,
      date: new Date(2025, 5, 8), // 8th June 2025
      time: "All Day",
      title: "Shri Adi Shakti Puja",
      mentor: "N/A",
      location: "Cabella, Italy",
      venue: "France, Spain, Netherlands",
    },
    // July Events
    {
      id: 7,
      date: new Date(2025, 6, 13), // 13th July 2025
      time: "All Day",
      title: "Shri Adi Guru Puja",
      mentor: "N/A",
      location: "Cabella, Italy",
      venue: "Middle East, Russia",
    },
    // August Events
    {
      id: 8,
      date: new Date(2025, 7, 24), // 24th August 2025
      time: "All Day",
      title: "Shri Krishna Puja",
      mentor: "N/A",
      location: "Cabella, Italy",
      venue: "Americas, Europe",
    },
    {
      id: 9,
      date: new Date(2025, 7, 30), // 30th August 2025
      time: "All Day",
      title: "Shri Ganesha Puja",
      mentor: "N/A",
      location: "Cabella, Italy",
      venue: "Italy",
    },
    // September Events
    {
      id: 10,
      date: new Date(2025, 8, 28), // 28th September 2025
      time: "All Day",
      title: "Navaratri Puja",
      mentor: "N/A",
      location: "Cabella, Italy",
      venue: "UK, Switzerland",
    },
    // October Events
    {
      id: 11,
      date: new Date(2025, 9, 19), // 19th October 2025
      time: "All Day",
      title: "Diwali Puja",
      mentor: "N/A",
      location: "France",
      venue: "Europe",
    },
    // November Events
    {
      id: 12,
      date: new Date(2025, 10, 30), // 30th November 2025
      time: "All Day",
      title: "Shri Bhairava Puja",
      mentor: "N/A",
      location: "Tanzania",
      venue: "Africa",
    },
    // December Events
    {
      id: 13,
      date: new Date(2025, 11, 25), // 25th December 2025
      time: "All Day",
      title: "Christmas Puja",
      mentor: "N/A",
      location: "India",
      venue: "India",
    },
  ];

  const months = [
    "March 2025",
    "April 2025",
    "May 2025",
    "June 2025",
    "July 2025",
    "August 2025",
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
  ];

  const filteredEvents = events.filter(
    (event) => format(event.date, "MMMM yyyy") === selectedMonth
  );

  return (
    <div className="bg-red-800 min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">CALENDAR</h2>
          <h1 className="text-4xl font-bold mb-8">Event Schedule 2025</h1>
          <div className="flex gap-6 border-b border-red-800 pb-4 overflow-x-auto">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`text-lg whitespace-nowrap ${
                  selectedMonth === month
                    ? "text-white font-bold"
                    : "text-red-300 hover:text-white"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between border-b border-red-700 py-6 group hover:bg-red-700 px-4 rounded-lg transition-all duration-300"
            >
              <div className="flex items-center gap-8 flex-wrap">
                <div className="w-36">
                  <div className="font-bold">{format(event.date, "d MMMM")}</div>
                  <div className="text-red-300">{event.time}</div>
                </div>
                <div className="w-48">
                  <div className="font-bold">{event.title}</div>
                </div>
                <div className="w-48">
                  <div className="font-bold">{event.location}</div>
                  <div className="text-red-300">{event.venue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <p className="text-red-300 text-center mt-8">
            No events scheduled for {selectedMonth}.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventsSection;
