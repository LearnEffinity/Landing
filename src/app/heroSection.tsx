"use client";
import React from "react";
import "./heroSection.css";
import SignUpButton from "@/components/SignUpForm";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" style={{ height: "calc(100vh + 2px)" }}>
      <div className="content-container">
        <h1 className="title-h1 text-4xl leading-normal lg:text-5xl font-semibold  text-center mx-auto px-4 lg:px-0 max-w-screen-lg title-with-gradient">
          <span className="title-span-non">
            Unlock Your Financial Potential,
          </span>
          <span className="title-s2 title-span ">
            Gamify Your Learning Journey
          </span>
        </h1>
        <p className="subtitle text-base lg:text-lg text-center mx-auto px-4 lg:px-0 mt-4 lg:mt-6 max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl whitespace-normal">
          Say goodbye to boring finance lessons and get ahead financially while
          having a blast with Effinity!
        </p>

        <SignUpButton />
      </div>
      <img
        src="/heroIcons/Board.png"
        alt="Board icon"
        className="backdrop board"
      />
      <img
        src="/heroIcons/trophy.png"
        alt="Trohpy icon"
        className="backdrop trophy"
      />
      <img
        src="/heroIcons/Online-Study.png"
        alt="Study icon"
        className="backdrop study"
      />
      <img
        src="/heroIcons/Star-1.png"
        alt="Star icon"
        className="backdrop star"
      />
      <img
        src="/heroIcons/Calculator-1.png"
        alt="calculator icon"
        className="backdrop calculator"
      />
      <img
        src="/heroIcons/Card-1.png"
        alt="Card icon"
        className="backdrop card"
      />
    </div>
  );
};

export default HeroSection;
