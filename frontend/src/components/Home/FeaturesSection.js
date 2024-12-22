
// Feature Cards Component
const FeaturesSection = () => {
  const cards = [
    {
      icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734117524/meditation-meditate-mindful-mindfulness-svgrepo-com_crwhqj.svg",
      title: "Everyone Needs\nMeditation",
      description: "Today the humanity is shaken up and going through unprecedented imbalances. Sahaja Yoga gives the solution"
    },
    {
      icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734117151/lotus-svgrepo-com_1_gtcxyp.svg",
      title: "Sahaja Yoga is Transformational",
      description: "Sahaja Yoga gives instant experience in hands, fingers and human body which is effortless and spontaneous. With this experience, you gain a new dimension in your lifestyle."
    },
    {
      icon: "https://res.cloudinary.com/dodaypz5o/image/upload/v1734118671/plant-on-a-hand-svgrepo-com_1_hg0g3r.svg",
      title: "Unlock\nThe Benefits Today",
      description: "Sahaj Meditation makes you know thyself. You will experience stress reduction, enhanced concentration, improved memory and spiritual growth. Get started today!"
    }
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 mt-5">
              <div className="mb-4">
                <img className={`${index === 0 ? 'w-20 h-20' : 'w-24 h-24'} mx-auto`} src={card.icon} alt="" />
              </div>
              <h3 className="text-3xl font-semibold mb-4" style={{ whiteSpace: 'pre-line' }}>{card.title}</h3>
              <p className="text-gray-600 text-xl text-justify ">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;