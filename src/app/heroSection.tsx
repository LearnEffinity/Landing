'use client';
import React from 'react';
// import material ui button
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import './heroSection.css';
interface HeroSectionProps {
    // Define any props you need for the HeroSection component
}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className='hero-section'>
            <div className="content-container">
                <h1 className='title'>
                    <p className="title-part1">Unlock Your Financial Potential,</p>
                    <p className="title-part2">Gamify Your Learning Journey</p>
                </h1>
                <p className='subtitle'>
                    Say goodbye to boring finance lessons and get ahead financially while having a blast with Effinity!
                </p> 
                <div className='sign-up-cta'>
                    <OutlinedInput className="email-input" placeholder="Email Address..." sx={{ "& fieldset": { border: "none" } }} />
                    <Button className="button-input" variant="contained" color="primary">Join Beta!</Button>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;