import React, { useState } from "react";
import Card from "./card";
import { motion, AnimatePresence } from "framer-motion";

const TeamDetails = [
  {
    id: 1,
    name: "Justin Quan",
    role: "Product Lead",
    description:
      "Building products, flipping balisongs, savoring onigiri - each it's own masterpiece.",
    image: "/memojis/justin.png",
    category: "Leadership",
  },

  {
    id: 2,
    name: "Mia Laylo",
    role: "Lead Designer",
    description:
      "A bookworm who enjoys iced matcha tea lattes, has a LEGO addiction, and playing cozy games on my switch.",
    image: "/memojis/mia.png",
    category: "Leadership",
  },
  {
    id: 3,
    name: "Pranith Molakalapalli",
    role: "Lead Developer",
    description:
      "I like building things, I play many video games, watch anime and eating biryani!",
    image: "/memojis/pranith.png",
    category: "Leadership",
  },
  // Developers
  {
    id: 4,
    name: "Aditya Sahasranam",
    role: "Backend",
    description:
      "I like biryani and coding, but not together because I want to enjoy my biryani.",
    image: "/memojis/aditya.png",
    category: "Developers",
  },
  {
    id: 5,
    name: "Michael Beck",
    role: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus nibh porta nunc pretium massa quis.",
    image: "/memojis/michael.png",
    category: "Developers",
  },
  {
    id: 6,
    name: "Shashank Sinha",
    role: "Full-Stack",
    description:
      "I want to star in a Batman sitcom where I make cheesy dad jokes during fights.",
    image: "/memojis/shashank.png",
    category: "Developers",
  },
  {
    id: 7,
    name: "Razeen Ali",
    role: "Full-Stack",
    description:
      "Sometimes it's Codezeen & sometimes its Chefzeen. If you treat life like minecraft, it makes it better!",
    image: "/memojis/razeen.png",
    category: "Developers",
  },
  {
    id: 8,
    name: "Akshitha Nagaraj",
    role: "Backend",
    description:
      "Just your average matcha loving CS girlie. Sometimes, I write and game.",
    image: "/memojis/akshitha.png",
    category: "Developers",
  },
  // Designers
  {
    id: 9,
    name: "Joanna Lau",
    role: "UX / UI Designer",
    description: "I survive off of true crime shows and reality tv.",
    image: "/memojis/joanna.png",
    category: "Designers",
  },
  {
    id: 10,
    name: "Alena You",
    role: "UX / UI Designer",
    description:
      "Data nerd. Designer. Cat mom. Somehow always living life to the fullest ..or on the edge?",
    image: "/memojis/alena.png",
    category: "Designers",
  },
  {
    id: 11,
    name: "Sarah Murray",
    role: "UX / UI Designer",
    description:
      "Design, photography and cinema are some of the things I like.",
    image: "/memojis/sarah.png",
    category: "Designers",
  },
  {
    id: 12,
    name: "Giselle Nguyen",
    role: "UX / UI Designer",
    description:
      "From piano keys to Keynote: crafting beautiful experiences for the audience.",
    image: "/memojis/giselle.png",
    category: "Designers",
  },
  {
    id: 13,
    name: "Travis Flemming",
    role: "Senior UX / UI Designer",
    description:
      "Rad dad. Curious designer. Serious optimist. Life's too short to not be smiling.",
    image: "/memojis/travis.png",
    category: "Designers",
  },
];

const Carousel = ({ selected }: { selected: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredTeam = TeamDetails.filter(
    (member) => member.category === selected
  );

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredTeam.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredTeam.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleCards = 3;
  const totalCards = filteredTeam.length;
  const getCardIndex = (index: number) =>
    (currentIndex + index - Math.floor(visibleCards / 2) + totalCards) %
    totalCards;

  const showNavigationControls = totalCards > 3;

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-8"
          >
            {Array.from({ length: visibleCards }).map((_, index) => (
              <Card
                key={filteredTeam[getCardIndex(index)].id}
                member={filteredTeam[getCardIndex(index)]}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {showNavigationControls && (
        <>
          <div className="flex justify-center space-x-2 mt-4">
            {filteredTeam.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-brand-accent" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
          >
            &lt;
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
          >
            &gt;
          </button>
        </>
      )}
    </>
  );
};

export default Carousel;
