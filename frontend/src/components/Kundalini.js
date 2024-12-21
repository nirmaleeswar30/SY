import React from 'react';

const Kundalini = () => {
  return (
    <div className="bg-orange-100">
      <section className="mt-10 max-w-6xl mx-auto px-4 lg:px-0 py-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-medium text-red-600 mb-2">
            Kundalini Awakening Meditation By Sahaja Yoga
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-red-400">
            Pure Desire Of The God Almighty With Us
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://www.sahajayoga.org.in/images/kundalini.png"
              alt="Kundalini Diagram"
              className="w-full h-auto max-w-md"
            />
          </div>

          {/* Paragraph Content */}
          <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed text-md text-justify">
            <p className="mb-4">
              Kundalini is the power of pure desire within us, a motherly and
              soothing spiritual energy which lies dormant at the base of the
              spine in the sacrum bone (the ancient civilizations knew that in
              this bone resides a sacred energy).
            </p>
            <p className="mb-4">
              Self realisation is the awakening of the Kundalini through the
              central channel, piercing through the six chakras above the sacrum
              bone and emerging at the top of the head (fontanel bone area) as a
              gentle "fountain" of coolness.
            </p>
            <p className="mb-4">
              The word fontanel itself means "little fountain" which shows again
              the ancient knowledge about this phenomenon of Self realisation.
            </p>
            <p>
              Self realisation has always been the ultimate goal of all religions
              and spiritual traditions of the world, but was extremely difficult
              to attain in the past. It has now become a mass phenomenon achieved
              effortlessly through Sahaja Yoga, which is Shri Mataji's invaluable
              gift to humanity.
            </p>
          </div>
        </div>

        <div className="w-full text-gray-700 leading-relaxed text-md text-justify mt-6">
          <p className="mb-4">
            In Shri Mataji's own words, "Self realisation is the first encounter with Reality". 
            "We have the Mother within ourselves, in our hearts, and if She is awakened, She is 
            going to look after us. She is going to give all the protection that is needed. And 
            there is nothing to be frightened of."
          </p>
          <p className="mb-4">
            "Kundalini cures you, she improves you, she bestows all the blissful things upon you. 
            She takes you away from the worries at the grosser level", says -H.H. Shri Mataji 
            Nirmala Devi.
          </p>
          <p className="mb-4">
            The Kundalini is like a rope with a thousand strands; when we first get our 
            Self-realisation, only one or two strands find their way through the chakras and 
            reach the sahastrara (the top chakra). However, with regular meditation, gradually 
            more strands of the Kundalini rise and connects us to the divine power.
          </p>

          <h2 className="text-red-600 text-xl font-semibold mt-6 mb-4">
            References to Kundalini
          </h2>

          <p className="mb-4">
            This movement of Kundalini is felt by the presence of a cool or, in the case of 
            imbalance, a warm breeze across the palms of hands or the soles of feet. Such a 
            phenomenon can be seen to be described in a diverse array of scripture like:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Aquarian Gospel of Christ, ch. 44, v19, ch. 161, v35, ch. 162, v4;</li>
            <li>Gyaneshwari, ch.6;</li>
            <li>Ezekiel, ch. 37, vs. 5-6;</li>
            <li>Old Testament; John, ch. 14 vs. 15- 17 & 25: New Testament;</li>
            <li>Quran, sura 24, vs. 24; sura 35, vs. 9; sura 36, vs. 64;</li>
            <li>Descieux, 1998iii</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Kundalini;