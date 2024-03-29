import React, { useState, useEffect } from "react";
import Card from "./card";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TeamDetails = [
  {
    id: 1,
    name: "Justin Quan",
    role: "Product Lead",
    description:
      "Building products, flipping balisongs, savoring onigiri - each it's own masterpiece.",
    image: "/memojis/justin.png",
    linkedin: "https://www.linkedin.com/in/justinquann/",
    category: "Leadership",
  },
  {
    id: 2,
    name: "Mia Laylo",
    role: "Lead Designer",
    description:
      "A bookworm who enjoys iced matcha tea lattes, has a LEGO addiction, and playing cozy games.",
    image: "/memojis/mia.png",
    linkedin: "https://www.linkedin.com/in/mialaylo/",
    category: "Leadership",
  },
  {
    id: 3,
    name: "Pranith Molakalapalli",
    role: "Lead Developer",
    description:
      "I like building things, I play many video games, watch anime and eating biryani!",
    image: "/memojis/pranith.png",
    linkedin: "https://www.linkedin.com/in/pranith-molakalapalli/",
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
    linkedin: "https://www.linkedin.com/in/adityasahas/",
    category: "Developers",
  },
  {
    id: 5,
    name: "Michael Beck",
    role: "Frontend",
    description: "My dream is to one day pass the Turing test.",
    image: "/memojis/michael.png",
    linkedin: "https://linkedin.com/in/michaelbeck0",
    category: "Developers",
  },
  {
    id: 6,
    name: "Shashank Sinha",
    role: "Full-Stack",
    description:
      "I want to star in a Batman sitcom where I make cheesy dad jokes during fights.",
    image: "/memojis/shashank.png",
    linkedin: "https://www.linkedin.com/in/shashank-sinha03/",
    category: "Developers",
  },
  {
    id: 7,
    name: "Razeen Ali",
    role: "Full-Stack",
    description:
      "Sometimes it's Codezeen & sometimes its Chefzeen. If you treat life like minecraft, it makes it better!",
    image: "/memojis/razeen.png",
    linkedin: "https://www.linkedin.com/in/razeenali/",
    category: "Developers",
  },
  {
    id: 8,
    name: "Akshitha Nagaraj",
    role: "Backend",
    description:
      "Just your average matcha loving CS girlie. Sometimes, I write and game.",
    image: "/memojis/akshitha.png",
    linkedin: "https://www.linkedin.com/in/akshitha-nagaraj-3986701bb/",
    category: "Developers",
  },
  // Designers
  {
    id: 9,
    name: "Joanna Lau",
    role: "UX / UI Designer",
    description: "I survive off of true crime shows and reality tv.",
    image: "/memojis/joanna.png",
    linkedin: "https://www.linkedin.com/in/joannalau11/",
    category: "Designers",
  },
  {
    id: 10,
    name: "Alena You",
    role: "UX / UI Designer",
    description:
      "Data nerd. Designer. Cat mom. Somehow always living life to the fullest ..or on the edge?",
    image: "/memojis/alena.png",
    linkedin: "https://www.linkedin.com/in/Alena-you",
    category: "Designers",
  },
  {
    id: 11,
    name: "Sarah Murray",
    role: "UX / UI Designer",
    description:
      "Design, photography and cinema are some of the things I like.",
    image: "/memojis/sarah.png",
    linkedin: "https://www.linkedin.com/in/discoverwithsaraw/",
    category: "Designers",
  },
  {
    id: 12,
    name: "Giselle Nguyen",
    role: "UX / UI Designer",
    description:
      "From piano keys to Keynote: crafting beautiful experiences for the audience.",
    image: "/memojis/giselle.png",
    linkedin: "https://www.linkedin.com/in/giselle-nguyen/",
    category: "Designers",
  },
  {
    id: 13,
    name: "Travis Flemming",
    role: "Senior UX / UI Designer",
    description:
      "Rad dad. Curious designer. Serious optimist. Life's too short to not be smiling.",
    image: "/memojis/travis.png",
    linkedin: "https://www.linkedin.com/in/travis-fleming111/",
    category: "Designers",
  },
];

const Carousel = ({ selected }: { selected: any }) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const filteredTeam = TeamDetails.filter(
    (member) => member.category === selected,
  );

  const handlePrevClick = () => {
    setCurrentGroup((prevGroup) =>
      prevGroup === 0
        ? Math.ceil(filteredTeam.length / visibleCards) - 1
        : prevGroup - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentGroup((prevGroup) =>
      prevGroup === Math.ceil(filteredTeam.length / visibleCards) - 1
        ? 0
        : prevGroup + 1,
    );
  };

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    setCurrentGroup(0);
  }, [selected]);

  const visibleCards = isMobile ? 1 : 3;
  const totalGroups = Math.ceil(filteredTeam.length / visibleCards);

  const getCardIndex = (index: number) => {
    const groupStartIndex = currentGroup * visibleCards;
    return groupStartIndex + index;
  };

  const showNavigationControls = totalGroups > 1;

  return (
    <>
      <div className="relative w-full">
        {/* <AnimatePresence initial={false} custom={currentIndex}> */}
        <motion.div
          key={currentGroup}
          initial={false}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center gap-8"
        >
          {Array.from({ length: visibleCards }).map((_, index) => {
            const cardIndex = getCardIndex(index);
            if (cardIndex < filteredTeam.length) {
              return (
                <Card
                  key={filteredTeam[cardIndex].id}
                  member={filteredTeam[cardIndex]}
                  isCurrentIndex={false}
                />
              );
            }
            return null;
          })}
        </motion.div>
        {/* </AnimatePresence> */}
      </div>
      {showNavigationControls && (
        <>
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={handlePrevClick}
              className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-secondary text-2xl text-text-primary transition-all duration-300 ease-in-out hover:bg-[#BCBBC3]"
            >
              <IoIosArrowBack />
            </button>

            <div className="flex items-center gap-x-1">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <div
                  key={index}
                  className="mx-[5px] flex items-center justify-center"
                >
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                      index === currentGroup
                        ? "w-9 bg-brand-accent"
                        : "w-3 bg-gray-200"
                    }`}
                    style={{
                      animation: `${
                        index === currentGroup
                          ? "grow 0.3s ease-in-out forwards"
                          : "shrink 0.3s ease-in-out forwards"
                      }`,
                    }}
                  ></div>
                  <button
                    onClick={() => setCurrentGroup(index)}
                    className="absolute h-3 w-9 cursor-pointer opacity-0"
                  ></button>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextClick}
              className="ml-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-secondary text-2xl text-text-primary transition-all duration-300 ease-in-out hover:bg-[#BCBBC3]"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Carousel;
