import React, { useState } from 'react';

const DonationsSection = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = () => {
    // Handle donation logic here
    console.log('Donation amount:', donationAmount);
  };

  return (
    <section className="py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="mt-12 md:mt-0 pr-14">
            <img 
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
              alt="About Us Image" 
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="max-w-2xl">
            <h1 className="text-red-700 text-3xl font-bold">Donations</h1>
            <hr className="h-1 my-2 bg-red-800 w-full dark:bg-red-700 rounded-md" />
            
            <p className="mt-4 text-gray-600 text-lg text-justify ">
              Sahaja Yoga meditation is offered free of charge across the globe to promote 
              spiritual growth, inner peace, and harmony. Every contribution, big or small, 
              directly supports our mission to spread peace and joy through Sahaja Yoga. 
              Donations are voluntary and deeply appreciated.
              "By giving, we receive the joy of sharing."
            </p>

            <div className="mt-6 py-3 border-red-600">
              <input 
                type="number" 
                placeholder=" ₹ 0.00" 
                className="border-gray-500 focus:ring-red-500 focus:border-red-500 rounded-md"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>

            <div>
              <button 
                className="mt-4 px-6 py-2 bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={handleDonation}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;