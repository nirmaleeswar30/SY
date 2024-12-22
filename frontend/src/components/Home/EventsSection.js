import React, { useState } from "react";
import { format } from "date-fns";

const EventsSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("May 2024");

  const events = [
    // May Events
    {
      id: 1,
      date: new Date(2024, 4, 1),
      time: "12:00 am",
      title: "Yoga Alwin",
      mentor: "Ashton Porter",
      location: "New York",
      venue: "Gita Church",
    },
    {
      id: 2,
      date: new Date(2024, 4, 3),
      time: "9:00 am",
      title: "Meditation",
      mentor: "Ben Carter",
      location: "Chicago",
      venue: "Gita Church",
    },
    {
      id: 3,
      date: new Date(2024, 4, 11),
      time: "6:00 pm",
      title: "Healing",
      mentor: "Dylan Byrne",
      location: "Miami",
      venue: "Gita Church",
    },
    {
      id: 4,
      date: new Date(2024, 4, 18),
      time: "11:00 am",
      title: "Sound Bath",
      mentor: "Kate Sykes",
      location: "New York",
      venue: "Gita Church",
    },
    // June Events
    {
      id: 5,
      date: new Date(2024, 5, 5),
      time: "10:00 am",
      title: "Mindfulness Workshop",
      mentor: "Liam Scott",
      location: "Los Angeles",
      venue: "Zen Center",
    },
    {
      id: 6,
      date: new Date(2024, 5, 12),
      time: "3:00 pm",
      title: "Breathing Techniques",
      mentor: "Emma Wilson",
      location: "Seattle",
      venue: "Peace Hall",
    },
    // July Events
    {
      id: 7,
      date: new Date(2024, 6, 7),
      time: "2:00 pm",
      title: "Self-Healing Techniques",
      mentor: "Sophia Harris",
      location: "Houston",
      venue: "Harmony Hall",
    },
    {
      id: 8,
      date: new Date(2024, 6, 20),
      time: "5:00 pm",
      title: "Energy Balance",
      mentor: "James Carter",
      location: "Denver",
      venue: "Calm Oasis",
    },
  ];

  const months = ["May 2024", "June 2024", "July 2024"];

  const filteredEvents = events.filter(
    (event) => format(event.date, "MMMM yyyy") === selectedMonth
  );

  return (
    <div className="bg-red-800 min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">CALENDAR</h2>
          <h1 className="text-4xl font-bold mb-8">Event Schedule</h1>
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
                  <div className="font-bold">{event.mentor}</div>
                  <div className="text-red-300">Mentor</div>
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
  );
};

export default EventsSection;