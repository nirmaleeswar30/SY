import React from 'react';

const SelfRealisationSection = () => {
 return (
   <section>
     <div className="max-w-6xl mx-auto px-4 pb-12">
       <h1 className="text-4xl md:text-5xl text-red-600 font-bold text-center mb-12">
         Self Realisation And Kundalini Awakening, Experience Now
       </h1>

       <div className="grid md:grid-cols-2 gap-12">
         <div className="space-y-6 pt-8 text-lg font-medium">
           <blockquote className="text-gray-700 italic">
             <p className="mb-4">
               "Now the time has come; the blossom time has come for many people to get Realisation. They have to get it. This is predicted, the time has come that you all have to get Realisation."
             </p>
             <footer className="text-sm">
               - H.H. Shri Mataji Nirmala Devi, 14.08.1980, Preston, UK.
             </footer>
           </blockquote>

           <blockquote className="text-gray-700 italic">
             <p className="mb-4">
               "The truth is, first one, that you are not this body, this mind, these conditionings or ego but you are pure spirit and the second truth is that there is an all-pervading power of divine love which works out all the living work."
             </p>
             <footer className="text-sm">
               - H.H. Shri Mataji Nirmala Devi, 24.07.1992, Public Talk, Paris Gaveau France.
             </footer>
           </blockquote>
         </div>

         <div className="space-y-6">
           <div className="aspect-video">
             <iframe 
               className="w-full h-full rounded-lg shadow-lg"
               src="https://www.youtube.com/embed/l8gfotcxvYA"
               title="Sahaja Yoga Meditation Kundalini Awakening"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             />
           </div>
           
           <p className="text-sm font-semibold text-gray-600">
             Note: The above video is just an animated representation of the awakening of Kundalini energy, to experience. Please, Click the below to experience your Self Realisation.
           </p>
         </div>
       </div>

       <div className="text-center">
         <a 
           href="#" 
           className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold mt-8 px-8 py-4 rounded-2xl transition-colors duration-300 transform hover:scale-105"
           onClick={(e) => {
             e.preventDefault();
             // Add your self realisation link/function here
           }}
         >
           CLICK HERE TO EXPERIENCE YOUR SELF REALISATION
         </a>
       </div>
     </div>
   </section>
 );
};

export default SelfRealisationSection;