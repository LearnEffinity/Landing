import React from "react";

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  category: string;
}

interface CardProps {
  member: Member;
  isCurrentIndex: boolean;
}

const Card: React.FC<CardProps> = ({ member, isCurrentIndex }) => {
  return (
    <div
      className={`h-[624px] w-[392px] rounded-[26px] drop-shadow-lg ${
        isCurrentIndex
          ? "bg-gradient-to-r from-decorative-blue/50 to-decorative-red/50"
          : ""
      } p-[3px]`}
    >
      <div className="flex flex-col h-full px-6 pt-14 pb-20 w-full items-center rounded-3xl justify-center bg-surface-primary ">
        <img
          src={member.image}
          key={member.id}
          width={250}
          height={250}
          alt="Memoji"
          className="mb-10"
        />
        <h1 className="font-semibold text-2xl">{member.name}</h1>
        <p className="font-medium text-lg text-text-tertiary mt-1">
          {member.role}
        </p>
        <p className="text-center font-normal text-lg text-main-secondary max-w-[345px] max-h-[96px] mt-6 leading-9">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
