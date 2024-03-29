"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  category: string;
}

interface CardProps {
  member: Member;
  isCurrentIndex: boolean;
}

const Card: React.FC<CardProps> = ({ member }) => {
  return (
    <div
      className={`group relative h-[624px] w-[392px] rounded-[26px] p-[3px] `}
    >
      <div className="absolute inset-0 rounded-[26px] bg-gradient-to-r from-decorative-blue/50 to-decorative-red/50 opacity-0 transition-opacity duration-[300ms] ease-in-out group-hover:opacity-100"></div>
      <div className="relative  z-10 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-surface-primary px-6 pb-20 pt-14 hover:drop-shadow-[0_4px_30px_rgba(88,58,254,0.15)]">
        <div className="flex h-[484px] flex-col items-center justify-center">
          <img
            src={member.image}
            key={member.id}
            width={250}
            height={250}
            alt="Memoji"
            className="mb-10"
          />
          <div className="flex h-[192px] w-[344px] flex-col items-center justify-between">
            <div>
              <h3 className="text-center text-2xl font-semibold">
                {member.name}
              </h3>
              <p className="mt-1 text-center text-lg font-medium text-text-tertiary">
                {member.role}
              </p>
              <p className="text-main-secondary mt-6 w-full text-center text-lg font-normal leading-9">
                {member.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center pt-4">
          <a href={member.linkedin} target="_blank">
            <FaLinkedin className="h-7 w-7 cursor-pointer text-black transition-colors duration-300 hover:text-black/60" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
