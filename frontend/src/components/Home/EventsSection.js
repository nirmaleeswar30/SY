import React, { useState } from "react";

const EventsSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  // Helper function to format date
  const formatDate = (date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  };

  // Helper function to get month and year
  const getMonth = (date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]}`;
  };

  const events = [
    // March Events
    {
      id: 1,
      date: new Date(2025, 2, 2),
      time: "10:00 am",
      title: "Mahashivaratri Puja",
      mentor: "Sahaja Yoga",
      location: "Brazil",
      venue: "Brazil Center"
    },
    {
      id: 2,
      date: new Date(2025, 2, 21),
      time: "10:00 am",
      title: "Birthday Puja",
      mentor: "Sahaja Yoga",
      location: "India",
      venue: "India Center"
    },
    // April Events
    {
      id: 3,
      date: new Date(2025, 3, 6),
      time: "10:00 am",
      title: "Shri Rama Puja",
      mentor: "Sahaja Yoga",
      location: "Asia",
      venue: "Asian Countries Center"
    },
    {
      id: 4,
      date: new Date(2025, 3, 20),
      time: "10:00 am",
      title: "Easter Puja",
      mentor: "Sahaja Yoga",
      location: "Australia",
      venue: "Australia Center"
    },
    // May Events
    {
      id: 5,
      date: new Date(2025, 4, 4),
      time: "10:00 am",
      title: "Sahasrara Puja",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center"
    },
    // June Events
    {
      id: 6,
      date: new Date(2025, 5, 8),
      time: "10:00 am",
      title: "Shri Adi Shakti Puja",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center"
    },
    // July Events
    {
      id: 7,
      date: new Date(2025, 6, 13),
      time: "10:00 am",
      title: "Shri Adi Guru Puja",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center"
    },
    // August Events
    {
      id: 8,
      date: new Date(2025, 7, 24),
      time: "10:00 am",
      title: "Shri Krishna Puja",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center"
    },
    {
      id: 9,
      date: new Date(2025, 7, 30),
      time: "10:00 am",
      title: "Shri Ganesha Puja",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center"
    },
    // September Events
    {
      id: 10,
      date: new Date(2025, 8, 28),
      time: "10:00 am",
      title: "Navaratri Puja",
      mentor: "Sahaja Yoga",
      location: "Cabella",
      venue: "Italy Center"
    },
    // October Events
    {
      id: 11,
      date: new Date(2025, 9, 19),
      time: "10:00 am",
      title: "Diwali Puja",
      mentor: "Sahaja Yoga",
      location: "France",
      venue: "France Center"
    },
    // November Events
    {
      id: 12,
      date: new Date(2025, 10, 30),
      time: "10:00 am",
      title: "Shri Bhairava Puja",
      mentor: "Sahaja Yoga",
      location: "Tanzania",
      venue: "Africa Center"
    },
    // December Events
    {
      id: 13,
      date: new Date(2025, 11, 25),
      time: "10:00 am",
      title: "Christmas Puja",
      mentor: "Sahaja Yoga",
      location: "India",
      venue: "India Center"
    }
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filteredEvents = events.filter(
    (event) => getMonth(event.date) === selectedMonth
  );

  return (
    <div className="flex justify-center w-full bg-red-800">
      <div className="w-full max-w-[1920px] min-h-screen p-8 text-white">
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
                    <div className="font-bold">{formatDate(event.date)}</div>
                    <div className="text-red-300">{event.time}</div>
                  </div>
                  <div className="w-48">
                    <div className="font-bold">{event.title}</div>
                  </div>
                  <div className="w-48">
                    <div className="font-bold">{event.mentor}</div>
                  </div>
                  <div className="w-48">
                    <div className="font-bold">{event.location}</div>
                    <div className="text-red-300">{event.venue}</div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
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
    </div>
  );
};

export default EventsSection;