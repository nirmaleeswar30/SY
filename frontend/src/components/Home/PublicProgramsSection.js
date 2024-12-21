import React from 'react';

const PublicProgramsSection = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
          Contact Us For Free Public Programs
        </h1>
        
        <p className="text-gray-600 text-center font-semibold max-w-4xl mx-auto mb-16">
          All public programs globally are entirely free of charge and always open to the public. Those who experience the peace and joy of this new state naturally have the desire to share this discovery with as many people as possible. There are many seminars, workshops and programs conducted weekly around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="https://source.unsplash.com/random/800x600?meditation" alt="Rural Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Public Program in Rural Schools</h3>
                <p className="text-sm">Ask for Weekly Free Meditation in Schools</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="https://source.unsplash.com/random/800x600?corporate" alt="Corporate Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Corporate Stress Relief Programs</h3>
                <p className="text-sm">Balancing Mind, Body & Spirit</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="https://source.unsplash.com/random/800x600?school" alt="School Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Private School Programs</h3>
                <p className="text-sm">Better memory & concentration</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="https://source.unsplash.com/random/800x600?workshop" alt="Workshop" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Personality Development</h3>
                <p className="text-sm">Improve productivity through meditation</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="https://source.unsplash.com/random/800x600?bank" alt="Bank Program" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Bank Employee Programs</h3>
                <p className="text-sm">Stress management for banking sector</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="https://source.unsplash.com/random/800x600?primary-school" alt="Primary School" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Primary School Programs</h3>
                <p className="text-sm">Building moral and integrated education</p>
                <span className="inline-block mt-4 text-white hover:text-blue-300 transition-colors">
                  Contact Us →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicProgramsSection;
