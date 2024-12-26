import React, { useState } from 'react';
import { Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const [viewMode, setViewMode] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');

  const regularSessions = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    morning: ['6:00 AM', '2:00 PM', '8:00 AM', '7:00 PM', '5:00 PM', '10:00 AM', '7:00 AM'],
    evening: ['6:00 PM', '2:00 PM', '8:00 PM', '7:00 PM', '5:00 PM', '10:00 PM', '7:00 PM']
  };

  const newseekers = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    evening: ['6:00 PM', '2:00 PM', '8:00 PM', '7:00 PM', '5:00 PM', '10:00 PM', '7:00 PM']
  };

  const events = [
    {
      month: 'December 2024',
      date: '13',
      day: 'FRI',
      title: 'Festival of Colors 2024',
      location: 'Manhattan Club 355 5th Ave, New York, NY, United States',
      description: 'Duis sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      price: 285
    },
    // Add more events as needed
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Sessions Section */}
      <div className="space-y-12">
        <section className="transform transition-all hover:scale-[1.01]">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Regular Online Sessions
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-lg">
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
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold border-t">Morning</td>
                  {regularSessions.morning.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">{time}</td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold border-t">Evening</td>
                  {regularSessions.evening.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">{time}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="transform transition-all hover:scale-[1.01]">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            New Seekers Sessions
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-lg">
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
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold border-t">Evening</td>
                  {newseekers.evening.map((time, idx) => (
                    <td key={idx} className="p-4 border-t">{time}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        

        {/* Events Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Upcoming Events
          </h2>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search for events"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <button 
                className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg hover:from-red-800 hover:to-red-700 transition-all shadow-md hover:shadow-lg"
              >
                Find Events
              </button>
              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                {['List', 'Month', 'Day'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode.toLowerCase())}
                    className={`px-4 py-2 ${
                      viewMode === mode.toLowerCase()
                        ? 'bg-red-100 text-red-800'
                        : 'text-gray-600 hover:bg-gray-50'
                    } transition-colors`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Date Navigation */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-6 py-2 bg-red-100 text-red-800 rounded-lg font-medium hover:bg-red-200 transition-colors">
              Now – Jun 10, 2025
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Events List */}
          <div className="space-y-8">
            {events.map((event, idx) => (
              <div key={idx} className="group">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{event.month}</h3>
                <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                    <img 
                    //   src="/api/placeholder/400/320"
                    src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Schedule;