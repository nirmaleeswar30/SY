import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechniqueData {
    title: string;
    image: string;
    process: string;
}

interface ClearanceData {
    [key: string]: TechniqueData;
}

const ClearancePage: React.FC = () => {
    const [activeTechnique, setActiveTechnique] = React.useState<string>('footsoaking');

    const clearanceData: ClearanceData = {
        footsoaking: {
            title: "Footsoaking",
            image: "https://static.wixstatic.com/media/32b5c1_2feeb310e04e4f7b90b2772144c6a3f6~mv2.jpg/v1/fill/w_416,h_404,al_c,lg_1,q_80,enc_avif,quality_auto/candling5.jpg",
            process: "Light a candle (fire and light elements) in front of a photo of Shri Mataji.\nPlace your feet in a basin of cool or luke-warm* water containing a handful of salt (water and earth elements).\nSit comfortably in a chair with hands, palms up, on your lap.\nRaise the Kundalini and put on a bandhan.\nMeditate or/give vibrations to your chakras for 10-15 minutes.\nFinish by again raising the Kundalini and putting on a bandhan.\nRinse and dry your feet (use the clean water for rinsing).\nSit in meditation for 5 minutes or so.\nFlush the footsoak water down the toilet.\nUse the foot soak bowl only for footsoaking.\n*If the right hand is heaviest, use cold water, if the left hand heavy, use warm water.",
        },
        shoebeating: {
            title: "Shoebeating",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oSzGHJ72isz_8-5XDZY38_Ws_xR7T9yURA&s",
            process: "1. Put yourself in Bandhan in front of Shree Mataji`s photograph \n2. Look out for a place in the back-yard of your house OR patio (balcony) to execute shoe-beat procedure ( Don`t do shoe-beat in front of MOTHER`s photograph)\n3.Write the xyz problem on the floor/ground with your right hand fingers. It may be a negativity causing personal problem / a collective problem OR your own ego/super-ego.\n4. Encircle the area on the floor with 7 clock-wise parabolic (Not circular, as vibrations always propagate in Parabolic fashion) bandhans saying the mantra for Shree Maha-Laxmi, Shree Maha-Saraswati, Shree Maha-Kali, Shree Ganehsa-Gouri ( you may nclude all these names in a single mantra )\n5.Take your left shoe in your right hand & then shoe beat the problem with the heel of the left shoe 21 times.\n6. Repeat steps 4) & 5) above 2 more times saying the mantra for (2nd round)– Shree Hanumana, Shree Kartikeya, Shree Bhairava (3rd round)–Shree Jagadamba, Shree Durga, Shree Eka-Dasha Rudra ( You may swap 2nd & 3rd round mantras above) All the above mantras are the negativity destroying mantras & hence they are chanted during shoe-beat.\n7. Always keep your attention on Sahasrara during the whole process of shoe-beating\n8. After completing the process, waive your hand in the air above the area of shoe-beat & draw a Swastika & a Cross saying the mantra for Shree Ganesha-Gouri & Shree Jesus-Mary respectively."
        },
        matka: {
            title: "Matka Treatment",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX0bWmVmCaBmiwOxB9v5qRTWfMpmODeDSTm7AzkdEyUouclu6gKh7ooERuFHTp1Z3H3ZK54pCQxo8gQ4iOshwb0GQvmfG-Jya_rGYiRAH_KoA9nz83jrCJIldl42TWULp4vfZu/s320/DSC01336.JPG",
            process: "a)Take a Clay Matka (pot) with a lid\nb)Put 7 lemons (rounded ones) & 7 chillies in it. Add some water & sprinkle someKumkum(vermillion) powder in it\nc)Keep this matka with all the contents in it before MOTHER`s photograph & pray HER tovibrate it \nd)After a day or two, keep the Matka (pot) below the bed side of the person who needs to be treated\ne)Keep the lid open during Night time & close it during the day time\nf)Don`t touch the matka & keep it for 7/21 days as required\ng)After 7/21 days are completed,waive your hand on top of the Matka to draw Swastika &a Cross saying the mantra of Shree Ganesha-Gauri & Shree Jesus-Mary. Now touch them& pick them up.\nh)Dispense all the contents along with Matka in running water body\ni)There are no restrictions of any kind about New Moon day (Amavasya) OR Full Moonday (Poornima) while executing the Matka treatment "
        },
        collective: {
            title: "Collective Clearance",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKosEgSj9SUnnW-CcX-KJj9F-_DhiCWu4fbg&s",
            process: "1. Attend regular collective meditation centers\n2. Participate in group clearing sessions\n3. Maintain collective attention\n4. Follow the protocols"
        },
        candle: {
            title: "Candle Treatment",
            image: "https://static.wixstatic.com/media/32b5c1_50815b5c9cf849e5981870a67c5a4b2d~mv2.jpeg/v1/fill/w_396,h_476,al_c,lg_1,q_80,enc_avif,quality_auto/candling1.jpeg",
            process: "Mother has particularly recommended using larger candies that give a bigger flame, otherwise the technique is not so effective.\nA candle treatment can consist of numerous combinations:\n•  Light a candle in front of the photograph.\n•  Use a second candle by moving it up and down on your left side, using the mantras of the left side.\n•  Use a candle to give clockwise (full-circle) bandhans to the affected chakras on the left side.\n•  While the left hand points towards the photo, keep a burning candle in front of your left hand. The right hand is to be put on or pointing towards Mother Earth, which sucks in all the negativity.\n•  Use a candle behind or near your left Swadhisthan chakra while meditating.\n•  To improve the Agnya chakra look through the flame and at the bindi on Mother's forehead. Do not focus on the flame. The light element clears out all the negativity"
        }
    };

    const handleTechniqueClick = (techniqueName: string): void => {
        setActiveTechnique(techniqueName);
    };

    const technique = clearanceData[activeTechnique];

    return (
        <motion.div 
            className="bg-orange-100 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <main>
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Heading Section with Animation */}
                    <motion.div 
                        className="text-center mb-8"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-4xl text-red-700 font-bold">Clearance Techniques</h1>
                        <h2 className="text-2xl text-red-600 font-medium mt-6">Clearance for our bodies</h2>
                    </motion.div>

                    {/* Navigation for Techniques with Hover Animation */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 border-b border-gray-300 mb-8 font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {Object.keys(clearanceData).map((techniqueName) => (
                            <motion.button
                                key={techniqueName}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-gray-600 hover:text-red-600 pb-2 border-b-2 px-2 transition-colors duration-300 ${
                                    activeTechnique === techniqueName
                                        ? 'text-red-700 border-red-600'
                                        : 'border-transparent'
                                }`}
                                onClick={() => handleTechniqueClick(techniqueName)}
                            >
                                {clearanceData[techniqueName].title}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Technique Information Section with Animation */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTechnique}
                            className="bg-pink-100 rounded-lg p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-3xl text-red-700 font-medium mb-4">{technique.title}</h3>
                            <div className="flex flex-col md:flex-row-reverse">
                                {/* Technique Image with Animation */}
                                <motion.div 
                                    className="md:w-1/3 flex justify-center mb-6 md:mb-0"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <motion.img
                                        src={technique.image}
                                        alt={`${technique.title}`}
                                        className="h-64 w-auto object-contain rounded-lg shadow-md"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                                {/* Technique Content with Animation */}
                                <motion.div 
                                    className="md:w-2/3 md:pr-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <div>
                                        <span className="font-bold text-red-600 mt-4 block">Process & Steps:</span>
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{technique.process}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </motion.div>
    );
};

export default ClearancePage;