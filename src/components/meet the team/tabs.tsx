import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const tabs = ["Leadership", "Developers", "Designers"];

const ChipTabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-center w-full ">
      <div className=" bg-surface-secondary flex justify-center items-center w-[365px] h-[52px] md:w-[740px] md:h-[76px] rounded-xl mb-10">
        <div className="flex justify-center gap-5 px-4 md:px-0">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-primary hover:text-primary/90 hover:bg-gray-500/10 transition-colors duration-200 ease-in-out"
      } text-sm transition-colors rounded-md relative w-[104px] h-[36px] md:w-[213px] md:h-[52px]`}
    >
      <span className="relative z-10 text-md  md:text-lg font-medium">
        {text}
      </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-brand-accent w-[104px] h-[36px] md:w-[213px] md:h-[52px] text-center rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
