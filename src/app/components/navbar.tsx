import React from "react";
import Button from "@mui/material/Button";
import { FaDiscord, FaLinkedin, FaInstagram , FaTwitter} from 'react-icons/fa';

import "./navbar.css";

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="inner-container">
                <div className="logo-container">
                    <img src="/logo.svg" alt="Logo" />
                    <p className="title">effinity.</p>
                </div>
                <div className="navbar-links">
                    <div className="nav-item">
                        <a href="https://www.linkedin.com/company/learneffinity" className="nav-link">
                            <FaLinkedin size={24}/>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="https://discord.gg/CVFPypSKgB" className="nav-link">
                            <FaDiscord size={24}/>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="https://www.instagram.com/learneffinity" className="nav-link">
                            <FaInstagram size={24}/>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="https://twitter.com/learneffinity" className="nav-link">
                            <FaTwitter size={24}/>
                        </a>
                    </div>
                </div>
            </div>
            <Button className="button" variant="contained">
                    Join Beta!
            </Button>
        </div>
    );
  }

  export default Navbar;