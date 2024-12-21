import { useState } from 'react';

const Nadis = () => {
  const [activeTab, setActiveTab] = useState('pingala');

  const nadiContent = {
    pingala: {
      title: "Pingala Nadi",
      content: [
        "Your right energy channel ( Pingala nadi), also called the sun channel, begins at your Swadisthan chakra and travels up the right side of your body, terminating in the ego area of the brain. The ego is the area of your brain that gives you a sense of individualism and self, as distinct from others. It is the ego that allows you to relate to yourself as \"me\" or \"I.\"",
        "Action and planning are essential qualities associated with the right energy channel. They drive your mental and physical activities. However, the demand for energy on the right side can sometimes be so great that the left side is weakened. When this occurs, your desire for joy may evaporate, and you find yourself grouchy and irritable. You may even feel like yelling at everyone or \"flying off the handle\" when the slightest thing goes wrong. As a result, the negativity, stress and aggression continue to build. Fortunately, awareness is the first step to correcting imbalance. Meditation, and accessing your Kundalini energy to restore harmony, will allow you to do so.",
        "In summary, your right energy channel influences your ability to plan and take action for the future. It also plays a role in negative emotions such as anger, irritability and stress. Your right channel thinks in terms of \"I,\" \"mine,\" and \"myself.\" Overdo any of these and you may become unpleasant to be around. However, your meditation will tell you when your right channel energy is too high and when it's time to cool down and rebalance."
      ]
    },
    ida: {
      title: "Ida Nadi",
      content: [
        "Your left energy channel (called Ida nadi in Sanskrit), also known as the moon channel, begins at the Mooladhara chakra and travels up the left side of your body, terminating in the superego area on the right side of your mind-brain. The superego is the storehouse of all your memories, habits and conditionings. Your superego is also the area of your brain that encourages moral behavior. In most of us, it has to wage war on our more selfish, pleasure seeking urges in the process.",
        "Joy is an essential quality associated with the left energy channel. Ideally, it is felt as the innocent joy of a child. Remember when you were a young child and you'd wake up happy every morning? The joy carried by the left energy channel feels just like that. As adults, we long for this joy, though we don't often find it. It may become blocked or \"bruised\" by some of our life experiences. However, it still lives within us and can be awakened through meditation.",
        "If you have a problem with your left energy channel, you may experience emotional extremes. This includes moods that shift rapidly from elation to depression and back again. You may also experience lethargy and extreme passivity. Most of us have suffered the occasional \"couch potato\" day.",
        "Remember the lack of energy and desire you felt as you sat around, doing nothing at all? That feeling may have been caused by a problem with your left energy channel. In summary, your left energy channel influences your emotions, feelings and desires. It is also connected to your memories and past experiences. As long as your emotions stay at normal levels, you'll do just fine. However, if you're feeling extremes of emotion such as depression, gloominess and brooding, then it's time to do something about it. All you need to start clearing your left channel is meditation. Sahaja Yoga techniques are easy, safe and the renewed feelings of joy and energy you'll experience can be positively addictive."
      ]
    },
    sushumna: {
      title: "Sushumna Nadi",
      content: [
        "Your central energy channel ( Sushumna nadi), also called the middle path, travels from the sacrum bone at the base of your spine (where your Kundalini energy resides) straight up your spine towards the Sahastrara chakra. Your central energy channel is the channel that aids your spiritual growth. In fact, we'd say that you've been drawn to Sahaja Yoga because of the strength of your central channel. The central energy channel can be used to help you evolve continuously into an improved personality with an increased focus on the subtler aspects of life.",
        "Your entire subtle energy system is integrated in the Sahastrara chakra. As such, it is the most important chakra for spiritual growth and meditation. It is also the chakra in which your Kundalini has the greatest ability to maximize its potential to help you. Clearing obstructions in the central energy channel is a critical component of Sahaja Yoga. When you are constantly in balance, your central channel remains clear. This paves the way for your Kundalini, to rise smoothly to the Sahastrara chakra. When this happens, your own Kundalini unites with the Divine Energy of the universe. Proper functioning of the central energy channel is crucial to maintaining energy balance. In a way, it represents the very essence of balancing the chakras and the primary goal of meditation.",
        "It may sound complex, but understanding your energy channels is quite simple if you think of them in the following way. You'll want to use your left and right energy channels to balance your emotions, desires and actions as you live and enjoy your life. At the same time, you'll want to spend time on the central energy channel so you can continuously improve yourself as a spiritual personality. Keeping all three channels balanced and clear will give you the power to manage your life, and all its challenges, with ease. You'll also experience and enjoy all of life's pleasures in a balanced and more meaningful way."
      ]
    }
  };

  return (
    <div className="bg-orange-100 pt-28 pb-12">
      <div className="text-center pb-4">
        <h1 className="text-4xl font-semibold text-rose-700">Nadis</h1>
      </div>

      <section className="max-w-6xl mx-auto mt-2 p-6 bg-pink-100 rounded-lg shadow-md">
        <div className="flex justify-center mt-4 space-x-6 border-b-2 border-rose-200 pb-2 font-semibold">
          {Object.keys(nadiContent).map((nadi) => (
            <button
              key={nadi}
              onClick={() => setActiveTab(nadi)}
              className={`${
                activeTab === nadi
                  ? "text-rose-700 border-b-2 border-rose-700"
                  : "text-gray-600 hover:text-rose-700"
              } font-medium`}
            >
              {nadiContent[nadi].title}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col lg:flex-row items-start">
          <div className="flex-1 text-justify">
            {activeTab === Object.keys(nadiContent)[0] && (
              <>
                <h2 className="text-2xl font-bold text-rose-700">What is an energy channel (nadi)?</h2>
                <p className="mt-4 text-gray-800">
                  The Kundalini travels throughout your body by way of three energy channels, or <em>nadis</em>.
                  The three nadis are the left channel, the right channel, and the center channel. All three
                  work perfectly together to integrate and balance the flow of your Kundalini. Each also plays
                  a specific role in maintaining your emotions, moods, and physical health.
                </p>
                <p className="mt-4 text-gray-800">
                  Each of the chakras is located on all the three channels. As the Kundalini energy rises through
                  the central channel, it nourishes each chakra, the center, left, and right side of each chakra.
                  At the 7th or Sahastrara chakra, it achieves a connection with the all-pervading divine energy.
                  The opening of the Sahastrara chakra thus facilitates the flow of the divine energy through this
                  opening back into the three nadis nourishing the chakras again.
                </p>
                <p className="mt-4 text-gray-800">
                  All this happens in a split second and nearly instantaneously. Also, the rising of the Kundalini
                  energy really means that a few strands of the thread-like Kundalini energy rise.
                </p>
              </>
            )}
            
            <h2 className="text-2xl font-bold text-rose-700">{nadiContent[activeTab].title}</h2>
            {nadiContent[activeTab].content.map((paragraph, index) => (
              <p key={index} className="mt-4 text-gray-800">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex-1 mt-6 lg:mt-0 lg:ml-10">
            <div className="relative">
              <img
                src="https://www.sahajayoga.org.in/new_images/subtle_image.jpg"
                alt="Subtle System"
                className="w-full max-w-md lg:max-w-lg mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nadis;