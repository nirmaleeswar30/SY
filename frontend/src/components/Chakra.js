import React, { useState } from 'react';

const ChakrasPage = () => {
  const [activeChakra, setActiveChakra] = useState('mooladhar');
  
  const chakraData = {
    mooladhar: {
      title: "Mooladhar Chakra",
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/mooldhara.jpg",
      location: "The Mooladhar chakra is located in the pelvic plexus at the base of your spine. The vibrations of this root chakra can be felt on the base of your palm.",
      qualities: "Your Mooladhar chakra forms the foundation of your entire subtle energy system. It represents eternal and indestructible qualities within you. These qualities only manifest to their fullest potential when your Kundalini energy has been awakened. This chakra is represented by a coral red color. It is closely aligned with the earth element.",
      benefits: "A balanced Mooladhar Chakra will help you maintain and increase your inner wisdom. You'll be able to quickly distinguish right from wrong. The wisdom of this chakra will enable you to avoid action (or inaction) that is harmful to yourself or others.",
      assessment: "If your Mooladhar chakra is out of balance, you may experience a poor sense of direction, poor memory, or a poor sense of balance (gravity). Other symptoms of disruption in this chakra include excretory problems, sexual disorders and reproductive difficulties.",
      balance: "Fortunately, it is quite simple to balance your Mooladhaa chakra. To begin, you should sit directly on the earth as often as possible. While enjoying a peaceful moment outdoors, you may clear your left Mooladhar Chakra by resting on the ground in a cross-legged fashion."
    },
    swadhisthan: {
      title: "Swadhisthan Chakra",
      image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/swadhisthan.jpg",
      location: "Your Swadisthan chakra is located in the aortic plexus above your sacrum bone.",
      qualities: "Creativity, pure knowledge, and the ability to develop artistic skills.",
      benefits: "The most important physiological function of your Swadisthan chakra is the breaking down of fat particles within your abdomen to replace your brain's gray and white matter.",
      assessment: "If your Swadisthan chakra is unbalanced, you may find that you have difficulty meditating and a general lack of creativity.",
      balance: "Meditation provides a simple means for balancing this chakra. To clear your Swadisthan chakra, you should soak your feet daily in normal temperature water."
    },
    nabhi: {
        title: "Nabhi Chakra",
        subtitle: "Peace and Satisfaction (Nabhi Chakra)",
        location: "Your Nabhi chakra is located within your spinal column. It can be found parallel to your navel. It is closely associated with your solar plexus. The vibrations of your Nabhi chakra can be felt in your middle fingers on your both hands.  The function of your abdominal organs (stomach, liver, kidneys, and bowels) is regulated by the Nabhi and Swadisthan chakras along with the Void. These three subtle centers work as an integrated unit in ensuring a harmonious physiologic environment in your body.",
        qualities: `The Nabhi chakra is represented by the color green. It is aligned with the essential element of water.
        The Nabhi chakra imparts several fundamental qualities, including generosity and the capacity to evolve. It is through your Nabhi chakra that you experience a desire to grow, improve and achieve your goals. It influences every “seeking” action within your life, from the fundamental quest for food and water to your quest for peace and spirituality. Because of this chakra, you have the capacity to evolve progressively to a higher stage of life.

        Another key quality of the Nabhi chakra is contentment (or satisfaction). It is through your Nabhi chakra that you may establish an ideal balance between all areas of your life (including family, work and spiritual). At the same time, energizing this chakra enables you to be nurturing and righteous. It imparts the qualities of caring, nurturing and affection to wives and mothers that help them take care of their families.`,
        benefits:
          `The most important physiological function of your Nabhi chakra is regulating many of your internal organs. The left Nabhi regulates the pancreas and spleen. Your center Nabhi regulates your stomach and intestines. Your right Nabhi regulates your liver and gall bladder.

          Your liver’s role in meditation cannot be overemphasized. It’s vital to achieving a state of perfect thoughtless awareness and attention. Because we tend to live stressful lives, our livers are prone to overheating and exhaustion. Practicing Sahaja Yoga will help you balance and protect this essential organ.

          The Nabhi chakra also plays an important role in proper digestion and metabolism. Over indulgence in food affects your Nabhi chakra. Good, nutritional food eaten at regular intervals helps keep the Nabhi chakra balanced.

          The Nabhi chakra is essential to your family life as well. As you energize and balance it through meditation, you may find yourself with renewed strength to face familial responsibilities. You may even find yourself enjoying duties you used to avoid.

          Achieving prosperity is a necessary step in your evolution. Your Nabhi chakra is at the core of your financial welfare. It will help you fulfill your essential needs and desires. You have been born with all the intellectual and physical talents necessary to allow you to earn the money that will fulfill those needs. A strong Nabhi chakra means that once your financial needs are fulfilled, you will start focusing on your spiritual prosperity.`,
        assessment:
          `If your left Nabhi becomes blocked or imbalanced, you may notice an increase in difficulties involving your family and household. You may also experience concerns about money. If you have a blockage of your center Nabhi, you may experience minor problems or imbalance with your digestion or metabolism.  When there is an imbalance of the right Nabhi, you may find yourself prone to worry and anxiety. You may also feel stingy and lack generosity. Fortunately, the practice of Sahaja Yoga will help you balance and restore the energy of this vital chakra.`,
        balance:
         ` Balancing your right Nabhi chakra is quite simple. Just hold your right hand, palm facing inward, a few inches in front of the location of your Nabhi chakra. When you feel the energy flowing through your hand, rotate it in a clockwise direction around the chakra. Repeat several times. You can also balance your right Nabhi by placing an ice pack on your right side, over your liver. To balance your left Nabhi chakra, soak your feet in a tub of warm water as you perform your usual meditation. `,
        image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/nabhi.png",
      },
      heart: {
        title: "Heart Chakra",
        subtitle: "Love and Compassion (Heart Chakra)",
        location: `The Anahat chakra is located within your spinal column. It may be found at the level of the center of your chest, behind your sternum bone. Associated with your cardiac plexus, the vibrations of the Anahat chakra may be felt in your little fingers on your both hands. `,
        qualities:
          ` The fundamental quality of the Anahat chakra is unconditional love. It is through energizing the heart chakra that you are able to become confident, self-assured, morally responsible and emotionally well balanced. When you open yourself to the qualities of the Anahat chakra, you will experience the pure joy of existence. You also discover your purpose and place in the world.`,
        benefits:
          `The most important physiological function of your Anahat chakra is the regulation of your heart and lungs. These organs control the health of your circulatory and respiratory systems, making proper function absolutely essential. The Anahat chakra also controls the breasts and thymus gland. The thymus gland is a small gland located behind the top of your breastbone. It is essential in the functioning of your immune system.

           Sometimes, we confuse love and compassion with less desirable feelings of possession and selfishness. Because the Sahaja Yoga fills your heart with the divine energy  , you are able to tell the difference. You will find yourself more aware of the needs of others. You will be able to love purely and without selfishness.

           As with many of the other chakras, the stresses of daily life can lead to blockage and imbalance. Excessive thinking, excessive planning, insecurity and anxiety can all contribute to an imbalance of your Anahat chakra. However, when you energize this chakra through meditation, you will regain balance. You will feel confident and secure-immune to negative influences. When the heart chakra is strong, you are free to fully appreciate the joy of life.
      
           If you have experienced negative maternal or paternal relationships, a strong Anahat chakra can even help you mend them. You’ll learn to set boundaries for your own behavior and respect the boundaries of others. All of your relationships will improve as a result.`,
        assessment:
          `If your Anahat chakra is blocked or unbalanced, you may experience symptoms such as heart palpitations, asthma and a weakened immune system. In the most severe of cases, heart attack, breast cancer and lung diseases may occur. However, it is unlikely that you’ve reached such a state. Balancing this chakra is simple and will help you prevent these serious diseases as well as less serious symptoms.`,
        balance:
          `If you need to balance your Anahat chakra, breathe deeply and slowly for several seconds. You will feel yourself relax as you inhale and exhale. Take a deep breath and hold it for a few seconds. Exhale slowly and smoothly. Repeat the process several times.

          For your right, center and left Anahat chakras, the following method may also be used to bring balance. Place your right hand a few inches away from your heart chakra, palm facing inward. As you feel energy flowing through your hand, rotate it around the chakra in a clockwise direction. Repeat the rotation several times.

          You can balance your left Anahat chakra specifically by placing your right hand on your heart while meditating. Speak these words several times: “I am one with my spirit.” Feel these words within your heart.`,
        image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/heart.jpg",
      },
      vishuddhi: {
        title: "Vishuddhi Chakra",
        subtitle: "Self-Expression (Vishuddhi Chakra)",
        location: `Your Vishuddhi chakra is located in the neck region of your spinal column. The vibrations of your Vishuddhi chakra can be felt in your index fingers on your both hands. Your left index finger is associated with the left Vishuddhi, while your right index finger is associated with the right Vishuddhi.`,
        qualities: `The Vishuddhi chakra is represented by a light shade of blue. It is aligned with the purifying element of ether. The fundamental qualities imparted by your Vishuddhi chakra include effective communication and a sense of community. When your Vishuddhi is balanced and energized, you feel in harmony with the rest of humanity. It is through the Vishuddhi chakra that you receive the ability to be diplomatic, polite and pleasant.
        The Vishuddhi chakra also gives you the ability to accept shortcomings and challenges without feelings of guilt.`,
        benefits:
          `The Vishuddhi chakra governs your neck, throat, arms, face, ears, mouth and teeth. It also controls your communication skills.

          When your Vishuddhi chakra is balanced, you have a balanced perspective on events in your life. Challenges can be faced with tranquility. You feel optimistic even in overwhelming situations. The Vishuddhi chakra allows you to recognize that external events exist outside you. As a result, you are able to witness them calmly.

          A balanced Vishuddhi is essential to your growth as a spiritual being.

          It is also essential to the growth of positive and healthy relationships with others. Diplomacy and respect are both enhanced by the strength of this chakra. Practice of meditation in Sahaja Yoga enables you to energize and protect both the left and right sides of your Vishuddhi chakra. You can also energize this chakra when you speak from the heart and praise rather than criticize.`,
        assessment:
          `If your Vishuddhi chakra is not balanced, you may experience a lack of self-respect and feelings of guilt. You may also experience periods of overreaction and aggressive communication.  Excessive talking or shouting can sometimes cause a block in the right Vishuddhi chakra. Pain or infection in your ears or teeth may indicate a Vishuddhi chakra blockage. Feelings of guilt may present themselves as sore or tense shoulders and neck. This can indicate an imbalance in your left Vishuddhi. Reoccurring colds, sinus and bronchial infections may indicate an imbalance of your right Vishuddhi.  Improper or illicit relationships may also cause imbalances in the Vishuddhi chakra.`,
        balance:
          `If you want to balance your Vishuddhi chakra, place your right hand a few inches in front of its location. Your palm should be facing inward. Once you feel energy flowing through your hand, rotate it around the chakra in a clockwise direction. Repeat this rotation several times.

          To clear your left Vishuddhi, hold a candle flame a few inches away from the intersection of your neck and left shoulder. Move the flame gently and slowly in a clockwise circle around the chakra.`,
        image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/vishuddi.jpg",
      },
      sahasrar: {
        title: "Sahastrara Chakra",
        subtitle: "Enlightenment (Sahasrar Chakra)",
        location: `Your Sahastrar chakra is located within your brain’s limbic system. You may feel the vibrations of the Sahastrar chakra in the center of your palm.`,
        qualities: `It is through the Sahastrar chakra that you are able to connect to the power that created you. Through this, you may discover the meaning of your life. It represents your ultimate destination – the realisation of heaven on earth.Each of your six main chakras (from Mooladhar Chakra through Agnya Chakra) has roots within your brain. When you practice Sahaja Yoga, the Kundalini rises. It passes through each of the six chakras and settles in the limbic region of your brain. This process is also known as Spiritual Enlightenment.

        The Sahastrar chakra is represented in the hollow space within the limbic area. One thousand nerves surround this space. When the Kundalini energy enters your Sahastrar chakra through meditation, all these nerves fire in unison. The Kundalini energy then manifests through the top of your head and unites with the Divine Energy of the universe`,
        benefits:
          `As the Kundalini energy pierces through the top of your head (also known as the fontanel area), it unites your individual consciousness (atma) to the universal consciousness (paramatma). This may be felt as a powerful pulsating sensation in the crown of your head. A melting sensation and cooler vibrations often follow these powerful pulsations. As a result of this experience, you will have obtained a new dimension of awareness that will allow you to better perceive truth. You will have everything you need to distinguish good from bad, right from wrong and truth from falsehood.

          Once you have achieved the connection of your Kundalini, to the Divine Energy of the universe, you will no longer be consumed with the past or the future. You experience true inner joy unlike any you have experienced before. At this point, your human awareness has been united with the divine and your physical, intellectual, emotional and spiritual selves have become one.

          You can now act in perfect harmony. You will no longer feel confusion or contradiction. You will experience complete inner calm and perfect joy. You will intuitively know what response or action is morally correct.Prior to achieving the connection of your Kundalini, you may have had to accept that God exists on faith alone. But afterward, you will move into a state of doubtless awareness, where you are both aware of and feel sure about the existence of the divine. As you continue to meditate, this doubtless awareness will become even stronger.`,
        assessment:
          `If your Sahastrar chakra is blocked or imbalanced, you may have difficulty feeling the vibrations in general. You may also experience doubts as to spiritual reality or the existence of the divine. Fortunately, the more you practice meditation in Sahaja Yoga, the clearer all your chakras (or energy centers) will become. This will eventually lead to balance within the Sahastrar. All that is required is an open mind and a willingness to continue practicing your meditation.  Eventually, you will achieve and experience the connection of your Kundalini to the Divine Energy fairly regularly.`,
        balance:
          `You can work towards balancing your Sahastrar chakra by placing your right hand firmly on the crown of your head. Rotate your hand slowly in a clockwise direction while saying, “Let me experience the state of meditation.”

          If you are unable to feel the vibrations initially, do not let that be a cause of doubt. Many people practicing Sahaja Yoga require longer amounts of time before they are able to experience vibrations or credibly confirm their own connection of the Kundalini energy.  Just be patient with yourself and keep at it. You’ll get there too. This is an important step in keeping your Sahastrar chakra open and free from obstructions.`,
        image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/sahastrara.jpg",
      },
      agnya: {
        title: "Agnya Chakra",
        subtitle: "Intuition and Knowledge (Agnya Chakra)",
        location: `The Agnya chakra is located in your brain. It is situated within the junction of your optic nerve fibers in the center of your forehead. The vibrations of the Agnya chakra can be felt in your ring fingers on your both hands.
`,
        qualities: `The color silver represents the Agnya chakra. This chakra is aligned with the essential element of air. The primary quality of Agnya is forgiveness. It is through this chakra that you learn to forgive yourself and others for human shortcomings. The Agnya chakra is also referred to as “the third eye.” When energized, this chakra allows you to achieve the thoughtless awareness, or mental silence, that is so essential to rejuvenating meditation.

        The Agnya chakra is the gateway to your Sahastrar chakra, which symbolizes the purest spiritual realm. Sahaja Yoga meditation is the simplest way to purify your mind and intentions. It allows your Kundalini energy to pass through the Agnya chakra and into the Sahastrar. The experience is quite miraculous, relieving and joyous as you find yourself connected to the higher power that created the universe.`,
        benefits:
          `Your Agnya chakra controls your sight, hearing and thoughts. It also controls your pituitary gland. This essential gland, also known as “the master gland,” regulates all the other endocrine glands and influences your growth, physiological maturation, metabolism and sleep.

          Many of us spend long hours on the computer as part of our jobs. We also spend a great deal of time in front of the television. Too much visual stimulation can weaken the Agnya chakra. Thankfully, the regular practice of meditation in Sahaja Yoga can alleviate this problem.

          Your left Agnya is connected to the superego portion of your brain, which retains your memories, experiences, habits and emotions. Your right Agnya is connected to the ego portion of your brain, which focuses on the future through thinking, planning and action. Your ego and superego intersect within the Agnya chakra.

          If your left Agnya is overactive, your superego may swell up like a balloon. All that focus on the past may lead to the development of a highly emotional temperament and self-harming thoughts or behaviors. Similarly, if your right Agnya is overactive, your ego will balloon up with all of the excess thinking and planning. This may lead to agitation, frequent loss of temper and even aggressive behavior towards others.

          Fortunately, filling the Agnya chakra with Kundalini energy is a very effective way to balance and deflate any balloons. The mental silence that comes from meditation instills humility in all of us. Through humility, we develop the power of forgiveness. Forgiveness is about acceptance and healing. It frees you from the negative bonds of anger, hatred and resentment. In forgiving, you can expect to experience a tremendous sense of peace and relief.`,
        assessment:
          `If your Agnya chakra is blocked, you may experience an inability to forgive yourself or others. You may also find yourself dwelling on the past or consumed with self-pity. Egoism and aggressiveness are other signs of an Agnya imbalance, as well as an obsession with pornography or distracting sexual fantasies. Worrying, excessive thinking and excessive planning may also indicate a blockage of the Agnya chakra.`,
        balance:
          `To balance your Agnya chakra, practice your meditation exercise in a natural setting. Try meditating outdoors while looking at the sky. You may also place your right hand on your forehead, then lower your head slightly and say, “I forgive everyone, including myself.” Try to express your forgiveness from your heart.

          The best way to keep your Agnya chakra balanced is to avoid excessive thinking and planning. Live in the present –and enjoy every second!`,
        image: "https://www.sahajayoga.org.in/assets/images/sahajayoga/agnya.jpg",
      }
  };

  return (
    <div className="bg-orange-100 min-h-screen">
      <main>
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Heading Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl text-red-700 font-medium">Chakras & Meditation</h1>
            <h2 className="text-2xl text-red-600 font-normal mt-2">Qualities of Seven Chakras</h2>
          </div>

          {/* Navigation for Chakras */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-300 mb-8 font-medium">
            {Object.keys(chakraData).map((chakra) => (
              <button
                key={chakra}
                onClick={() => setActiveChakra(chakra)}
                className={`pb-2 border-b-2 transition-colors ${
                  activeChakra === chakra
                    ? 'text-red-700 border-red-600'
                    : 'text-gray-600 border-transparent hover:text-red-600'
                }`}
              >
                {chakraData[chakra].title}
              </button>
            ))}
          </div>

          {/* Chakra Information Section */}
          <div className="bg-pink-100 rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-3xl text-red-700 font-medium mb-6">
                {chakraData[activeChakra].title}
              </h2>
              
              <div className="flex flex-col md:flex-row-reverse gap-6">
                {/* Chakra Image */}
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src={chakraData[activeChakra].image}
                    alt={`${chakraData[activeChakra].title}`}
                    className="h-[300px] w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                
                {/* Chakra Content */}
                <div className="md:w-2/3 space-y-4">
                  <div>
                    <h3 className="font-bold text-red-600">Location:</h3>
                    <p className="text-gray-700 leading-relaxed">{chakraData[activeChakra].location}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Qualities:</h3>
                    <p className="text-gray-700 leading-relaxed">{chakraData[activeChakra].qualities}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Experience and Benefits:</h3>
                    <p className="text-gray-700 leading-relaxed">{chakraData[activeChakra].benefits}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Self-Assessment:</h3>
                    <p className="text-gray-700 leading-relaxed">{chakraData[activeChakra].assessment}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">How to Balance:</h3>
                    <p className="text-gray-700 leading-relaxed">{chakraData[activeChakra].balance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChakrasPage;