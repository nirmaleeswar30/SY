import React, { useState } from 'react';


const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#f11b1b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
  
        <section className="px-4 py-16">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="w-full h-auto">
                <img 
                  src="https://res.cloudinary.com/dr8g09icb/image/upload/v1722277975/lucydavidstaringmoon_riyqgj.jpg" 
                  alt="First Image" 
                />
              </div>
              
              <div className="max-w-2xl pl-14">
                <h2 className="text-3xl pb-4 font-extrabold text-gray-900 sm:text-4xl text-center" style={{ fontFamily: "'Kalam', cursive" }}>
                  SAHAJA YOGA
                </h2>
                <div className="read-more-container">
                  <p className={`text-gray-700 leading-relaxed font-semibold text-base ${!isExpanded ? 'line-clamp-4' : ''}`}>
                    Sahaja Yoga is a simple meditation practice that nurtures an evolved spiritual personality through the awakening of the Kundalini, a process known as Self-Realization. Discovered by H.H. Shri Mataji Nirmala Devi in 1970, this awakening fulfills the universal goal shared by all religions. While the knowledge of Kundalini is ancient, it was historically kept secret and passed only from guru to disciple, as achieving Self-Realization was once extremely challenging. Shri Mataji made a breakthrough by connecting our Kundalini with the Spirit (Atma), through Self-Realization accessible to all humans for the first time in the history. This process brings physical, mental, and emotional balance as a natural outcome of Sahaja Yoga meditation. Self-Realization is the birthright of every human being, now made available to all at free of cost worldwide.
                  </p>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-red-600 hover:text-red-800 font-medium text-sm transition-colors"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div 
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#f40707] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
      </div>
    );
  };

  export default AboutSection;