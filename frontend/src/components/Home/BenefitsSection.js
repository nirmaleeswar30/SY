import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="bg-[#fdf6e9] p-8">
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          Benefits of Sahaja Yoga
        </h1>

        <p className="text-gray-700 font-semibold text-center max-w-4xl mx-auto mb-16">
          Shri Mataji Nirmala Devi transformed lives through en masse Kundalini Awakening. For more than forty years, Shri Mataji traveled globally, offering free public lectures and the experience of self-realisation to all, regardless of race, caste, creed, religion or financial status. She not only enabled people to pass this valuable experience to others free of cost, but taught them the meditation technique necessary to sustain it known as Sahaja Yoga.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Improved Mental, Physical, Emotional And Spiritual Health
            </h3>
            <p className="text-gray-600">
              Sahaja Yoga makes a person calm and peaceful, helping lead a more meaningful life to cope up easily and effectively with the situations, strains and stresses of life.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Loving Family And Compassionate Society
            </h3>
            <p className="text-gray-600">
              The benefits of Sahaja Yoga accrue not only to the individual but also to society, to the nation and ultimately to the entire humanity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              From Religion To Spirituality
            </h3>
            <p className="text-gray-600">
              Sahaja Yoga integrates all major religions of the world. Sahaja yoga is practiced by people irrespective of one's caste, creed, race, religion and nationality, worldwide, in over 130 countries.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              In Sahaja Yoga Follow Your Experience Not What We Say
            </h3>
            <p className="text-gray-600">
              Based on Vibratory Awareness attained after Self Realisation and establishment in Sahaja Yoga meditation, the seeker can judge the truth of vibrations themselves.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Health Benefit As A Byproduct Of Kundalini Awakening
            </h3>
            <p className="text-gray-600">
              The seeker benefits through inner cure naturally as byproduct of Kundalini Awakening while improving harmony and love in family life and social relations.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Discover Your Persona Free From Stress, Tension And Worries
            </h3>
            <p className="text-gray-600">
              One becomes courageous, confident, loving, peaceful and joyous and develops artistic talents. It is an entirely scientific experience with no scope for blind faith.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-700 text-white px-8 py-3 rounded-xl hover:bg-red-800 transition-colors duration-300 transform hover:scale-105">
            CLICK HERE TO VIEW MORE BENEFITS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
