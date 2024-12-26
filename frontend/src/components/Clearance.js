import React from 'react';

const ClearancePage = () => {
    const [activeTechnique, setActiveTechnique] = React.useState('footsoaking');

    const clearanceData = {
        footsoaking: {
            title: "Footsoaking",
            image: "/api/placeholder/400/300",
            process: "Light a candle (fire and light elements) in front of a photo of Shri Mataji.\nPlace your feet in a basin of cool or luke-warm* water containing a handful of salt (water and earth elements).\nSit comfortably in a chair with hands, palms up, on your lap.\nRaise the Kundalini and put on a bandhan.\nMeditate or/give vibrations to your chakras for 10-15 minutes.\nFinish by again raising the Kundalini and putting on a bandhan.\nRinse and dry your feet (use the clean water for rinsing).\nSit in meditation for 5 minutes or so.\nFlush the footsoak water down the toilet.\nUse the foot soak bowl only for footsoaking.\n*If the right hand is heaviest, use cold water, if the left hand heavy, use warm water.",
        },
        shoebeating: {
            title: "Shoebeating",
            image: "/api/placeholder/400/300",
            process: "1. Put yourself in Bandhan in front of Shree Mataji`s photograph \n2. Look out for a place in the back-yard of your house OR patio (balcony) to execute shoe-beat procedure ( Don`t do shoe-beat in front of MOTHER`s photograph)\n3.Write the xyz problem on the floor/ground with your right hand fingers. It may be a negativity causing personal problem / a collective problem OR your own ego/super-ego.\n4. Encircle the area on the floor with 7 clock-wise parabolic (Not circular, as vibrations always propagate in Parabolic fashion) bandhans saying the mantra for Shree Maha-Laxmi, Shree Maha-Saraswati, Shree Maha-Kali, Shree Ganehsa-Gouri ( you may nclude all these names in a single mantra )\n5.Take your left shoe in your right hand & then shoe beat the problem with the heel of the left shoe 21 times.\n6. Repeat steps 4) & 5) above 2 more times saying the mantra for (2nd round)– Shree Hanumana, Shree Kartikeya, Shree Bhairava (3rd round)–Shree Jagadamba, Shree Durga, Shree Eka-Dasha Rudra ( You may swap 2nd & 3rd round mantras above) All the above mantras are the negativity destroying mantras & hence they are chanted during shoe-beat.\n7. Always keep your attention on Sahasrara during the whole process of shoe-beating\n8. After completing the process, waive your hand in the air above the area of shoe-beat & draw a Swastika & a Cross saying the mantra for Shree Ganesha-Gouri & Shree Jesus-Mary respectively."
        },
        matka: {
            title: "Matka Treatment",
            image: "/api/placeholder/400/300",
            process: "a)Take a Clay Matka (pot) with a lid\nb)Put 7 lemons (rounded ones) & 7 chillies in it. Add some water & sprinkle someKumkum(vermillion) powder in it\nc)Keep this matka with all the contents in it before MOTHER`s photograph & pray HER tovibrate it \nd)After a day or two, keep the Matka (pot) below the bed side of the person who needs to be treated\ne)Keep the lid open during Night time & close it during the day time\nf)Don`t touch the matka & keep it for 7/21 days as required\ng)After 7/21 days are completed,waive your hand on top of the Matka to draw Swastika &a Cross saying the mantra of Shree Ganesha-Gauri & Shree Jesus-Mary. Now touch them& pick them up.\nh)Dispense all the contents along with Matka in running water body\ni)There are no restrictions of any kind about New Moon day (Amavasya) OR Full Moonday (Poornima) while executing the Matka treatment "
        },
        collective: {
            title: "Collective Clearance",
            image: "/api/placeholder/400/300",
            process: "1. Join regular collective meditation sessions\n2. Follow conductor's guidance\n3. Participate in group clearing techniques\n4. Maintain collective attention\n5. Practice synchronous meditation"
        },
        candle: {
            title: "Candle Treatment",
            image: "/api/placeholder/400/300",
            process: "Mother has particularly recommended using larger candies that give a bigger flame, otherwise the technique is not so effective.\nA candle treatment can consist of numerous combinations:\n•  Light a candle in front of the photograph.\n•  Use a second candle by moving it up and down on your left side, using the mantras of the left side.\n•  Use a candle to give clockwise (full-circle) bandhans to the affected chakras on the left side.\n•  While the left hand points towards the photo, keep a burning candle in front of your left hand. The right hand is to be put on or pointing towards Mother Earth, which sucks in all the negativity.\n•  Use a candle behind or near your left Swadhisthan chakra while meditating.\n•  To improve the Agnya chakra look through the flame and at the bindi on Mother's forehead. Do not focus on the flame. The light element clears out all the negativity"
        }
    };

    const handleTechniqueClick = (techniqueName) => {
        setActiveTechnique(techniqueName);
    };

    const technique = clearanceData[activeTechnique];

    return (
        <div className="bg-orange-100">
            <main>
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Heading Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl text-red-700 font-medium">Clearance Techniques</h1>
                        <h2 className="text-2xl text-red-600 font-normal mt-2">Clearance for our bodies</h2>
                    </div>

                    {/* Navigation for Techniques */}
                    <div className="flex flex-wrap justify-center gap-4 border-b border-gray-300 mb-8 font-medium">
                        {Object.keys(clearanceData).map((techniqueName) => (
                            <button
                                key={techniqueName}
                                className={`text-gray-600 hover:text-red-600 pb-2 border-b-2 px-2 ${
                                    activeTechnique === techniqueName
                                        ? 'text-red-700 border-red-600'
                                        : 'border-transparent'
                                }`}
                                onClick={() => handleTechniqueClick(techniqueName)}
                            >
                                {clearanceData[techniqueName].title}
                            </button>
                        ))}
                    </div>

                    {/* Technique Information Section */}
                    <div className="bg-pink-100 rounded-lg p-6">
                        <h3 className="text-3xl text-red-700 font-medium mb-4">{technique.title}</h3>
                        <div className="flex flex-col md:flex-row-reverse">
                            {/* Technique Image */}
                            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                                <img
                                    src={technique.image}
                                    alt={`${technique.title}`}
                                    className="h-64 w-auto object-contain rounded-lg shadow-md"
                                />
                            </div>
                            {/* Technique Content */}
                            <div className="md:w-2/3 md:pr-8">
                                <div>
                                    <span className="font-bold text-red-600 mt-4 block">Process & Steps:</span>
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{technique.process}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClearancePage;