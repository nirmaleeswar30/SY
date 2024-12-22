import React from 'react';

const WelcomeSection = () => {
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

      <section className="section-padding welcome-section">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" style={{ fontFamily: "'Kalam', cursive" }}>
                WELCOME TO SAHAJA YOGA
              </h2>
              <p className="mt-4 text-gray-600 text-lg text-justify ">
                The time has come for all of you to get your self-realisation, by which your attention becomes enlightened, your health gets completely all right, your mental processes are sensible, but above all you stand in your present.
              </p>
              <div className="mt-8">
                <h3 className="mt-4 text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Kalam', cursive", textDecoration: "underline" }}>
                  Daily Free Meditation Sessions
                </h3>
                <div>
                  <div className="flex">
                    <p className="mt-3 mr-4 text-gray-600 text-lg">Morning Session:</p>
                    <button 
                      style={{ width: "90px" }} 
                      type="button" 
                      className="w-44 mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2 me-2 mb-2"
                    >
                      Join
                    </button>
                  </div>
                  
                  <div className="flex">
                    <p className="mt-3 mr-4 text-gray-600 text-lg">Evening Session:</p>
                    <button 
                      style={{ width: "90px" }} 
                      type="button" 
                      className="w-44 mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2 me-2 mb-2 ml-1"
                    >
                      Join
                    </button>
                  </div>
                </div>

                <h3 className="mt-2 text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Kalam', cursive", textDecoration: "underline" }}>
                  For Beginners
                </h3>
                <div className="flex">
                  <p className="mt-4 mr-4 text-gray-600 text-lg">Evening Session:</p>
                  <button 
                    style={{ width: "90px" }} 
                    type="button" 
                    className="w-44 mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2 me-2 mb-2"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>

            <div className="ml-12 md:mt-0">
              <img 
                src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734203459/MF_035-17__1_1_1_2_sfpvvj.png" 
                alt="About Us Image" 
                className="object-cover rounded-lg ml-24 h-auto w-96"
              />
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

export default WelcomeSection;