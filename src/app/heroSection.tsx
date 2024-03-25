"use client";
import React from "react";
// import material ui button
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./heroSection.css";

import { motion } from "framer-motion";
import SignUpCTA from "./singUpCTA";
interface HeroSectionProps {
  // Define any props you need for the HeroSection component
}

const HeroSection: React.FC<HeroSectionProps> = () => {
return (
    <div className="hero-section">
        <div className="content-container">
            <h1 className="title">
                <p className="title-part1">Unlock Your Financial Potential,</p>
                <p className="title-part2">Gamify Your Learning Journey</p>
            </h1>
            <p className="subtitle">
                Say goodbye to boring finance lessons and get ahead financially while
                having a blast with Effinity!
            </p>
            <SignUpCTA />
            <motion.img
                src="/heroIcons/Board.png"
                alt="Descriptive alt text"
                className="backdrop board"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
                src="/heroIcons/trophy.png"
                alt="Descriptive alt text"
                className="backdrop trophy"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
                src="/heroIcons/Online-Study.png"
                alt="Descriptive alt text"
                className="backdrop study"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
                src="/heroIcons/Star-1.png"
                alt="Descriptive alt text"
                className="backdrop star"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
                src="/heroIcons/Calculator-1.png"
                alt="Descriptive alt text"
                className="backdrop calculator"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
                src="/heroIcons/Card-1.png"
                alt="Descriptive alt text"
                className="backdrop card"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
        </div>
    </div>
);
};

export default HeroSection;
