"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Logo = (
  <svg
    width="161"
    height="45"
    viewBox="0 0 161 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.048 24.908C50.672 27.164 52.364 28.292 55.124 28.292C56.9 28.292 58.244 27.692 59.156 26.492L62.9 28.652C61.124 31.22 58.508 32.504 55.052 32.504C52.076 32.504 49.688 31.604 47.888 29.804C46.088 28.004 45.188 25.736 45.188 23C45.188 20.288 46.076 18.032 47.852 16.232C49.628 14.408 51.908 13.496 54.692 13.496C57.332 13.496 59.504 14.408 61.208 16.232C62.936 18.056 63.8 20.312 63.8 23C63.8 23.6 63.74 24.236 63.62 24.908H50.048ZM49.976 21.308H59.156C58.892 20.084 58.34 19.172 57.5 18.572C56.684 17.972 55.748 17.672 54.692 17.672C53.444 17.672 52.412 17.996 51.596 18.644C50.78 19.268 50.24 20.156 49.976 21.308ZM92.2906 14V32H87.6466V18.464H82.3546V32H77.7106V18.464H72.3826V32H67.7386V18.464H65.1466V14H67.7386V13.82C67.7386 11.276 68.4466 9.344 69.8626 8.024C71.2786 6.704 73.3906 6.128 76.1986 6.296V10.76C73.6546 10.568 72.3826 11.588 72.3826 13.82V14H77.7106V13.46C77.7106 8.444 80.5306 5.936 86.1706 5.936C87.4666 5.936 88.8826 6.104 90.4186 6.44V10.688C88.7626 10.496 87.3466 10.4 86.1706 10.4C84.8986 10.4 83.9386 10.628 83.2906 11.084C82.6666 11.516 82.3546 12.308 82.3546 13.46V14H92.2906ZM105.106 13.496C107.074 13.496 108.694 14.156 109.966 15.476C111.262 16.796 111.91 18.62 111.91 20.948V32H107.266V21.524C107.266 20.324 106.942 19.412 106.294 18.788C105.646 18.14 104.782 17.816 103.702 17.816C102.502 17.816 101.542 18.188 100.822 18.932C100.102 19.676 99.7421 20.792 99.7421 22.28V32H95.0981V14H99.7421V16.016C100.87 14.336 102.658 13.496 105.106 13.496ZM116.739 11.84C115.971 11.84 115.299 11.564 114.723 11.012C114.171 10.436 113.895 9.764 113.895 8.996C113.895 8.228 114.171 7.556 114.723 6.98C115.299 6.404 115.971 6.116 116.739 6.116C117.531 6.116 118.203 6.404 118.755 6.98C119.331 7.556 119.619 8.228 119.619 8.996C119.619 9.764 119.331 10.436 118.755 11.012C118.203 11.564 117.531 11.84 116.739 11.84ZM114.435 32V14H119.079V32H114.435ZM133.626 18.464H129.558V25.952C129.558 26.576 129.714 27.032 130.026 27.32C130.338 27.608 130.794 27.776 131.394 27.824C131.994 27.848 132.738 27.836 133.626 27.788V32C130.434 32.36 128.178 32.06 126.858 31.1C125.562 30.14 124.914 28.424 124.914 25.952V18.464H121.782V14H124.914V10.364L129.558 8.96V14H133.626V18.464ZM149.023 14H153.991L147.439 32C146.503 34.592 145.255 36.464 143.695 37.616C142.159 38.792 140.239 39.32 137.935 39.2V34.88C139.183 34.904 140.167 34.64 140.887 34.088C141.631 33.536 142.219 32.648 142.651 31.424L135.271 14H140.347L145.027 26.096L149.023 14ZM157.792 31.568C157.192 32.168 156.472 32.468 155.632 32.468C154.792 32.468 154.072 32.168 153.472 31.568C152.872 30.968 152.572 30.248 152.572 29.408C152.572 28.568 152.872 27.848 153.472 27.248C154.072 26.648 154.792 26.348 155.632 26.348C156.472 26.348 157.192 26.648 157.792 27.248C158.392 27.848 158.692 28.568 158.692 29.408C158.692 30.248 158.392 30.968 157.792 31.568Z"
      fill="#080808"
    />
    <path
      d="M28.9077 17.8491L24.7429 22.9688L22.6123 20.3498C21.6165 19.1278 20.1235 18.4167 18.5453 18.4167H11.052C8.39122 18.4167 6.19119 20.4018 5.85659 22.9688C5.82823 22.7448 5.8125 22.5177 5.8125 22.286V14.5474C5.8125 11.6558 8.15911 9.31282 11.052 9.31282H24.8407C29.2534 9.31282 31.69 14.4276 28.9077 17.8491Z"
      fill="#4D37C9"
    />
    <path
      d="M24.7418 22.9675L22.6112 25.5864C21.6153 26.81 20.1224 27.5195 18.5442 27.5195H11.0509C8.3901 27.5195 6.19008 25.536 5.85547 22.9675C6.19008 20.4005 8.3901 18.4155 11.0509 18.4155H18.5442C20.1224 18.4155 21.6153 19.1265 22.6112 20.3486L24.7418 22.9675Z"
      fill="#7C71F4"
    />
    <path
      d="M24.8407 36.625H11.052C8.15927 36.625 5.8125 34.2804 5.8125 31.3887V23.6503C5.8125 23.4184 5.82823 23.1913 5.85659 22.9675C6.19119 25.5359 8.39122 27.5194 11.052 27.5194H18.5453C20.1235 27.5194 21.6165 26.8099 22.6123 25.5865L24.7429 22.9675L28.9077 28.0871C31.69 31.5085 29.2534 36.625 24.8407 36.625Z"
      fill="#583AFE"
    />
  </svg>
);

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <nav
        className={`fixed top-0 z-[9999] flex h-[80px] w-full items-center justify-between bg-surface-primary px-24 drop-shadow-[0_4px_40px_rgba(0,0,0,0.06)] transition-all duration-300 md:h-[120px] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-full items-center justify-center md:justify-start">
          {Logo}
          <div className="mx-8 hidden h-7 w-[2px] bg-black md:block" />
          <div className=" hidden flex-row items-center gap-x-8 md:flex">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/learneffinity/"
              className="text-icon-primary transition-all duration-300 ease-in-out hover:text-icon-primary/70"
            >
              <AiFillLinkedin size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://discord.gg/mpBfqw5BG8"
              className="text-icon-primary transition-all duration-300 ease-in-out hover:text-icon-primary/70"
            >
              <FaDiscord size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/learneffinity/"
              className="text-icon-primary transition-all duration-300 ease-in-out hover:text-icon-primary/70"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/learneffinity"
              className="text-icon-primary transition-all duration-300 ease-in-out hover:text-icon-primary/70"
            >
              <FaXTwitter size={24} />
            </Link>
          </div>
        </div>
        <a
          href="#cta"
          className="hidden h-[54px] w-[158px] items-center justify-center rounded-xl bg-brand-accent font-semibold text-white transition-all duration-300 ease-in-out hover:bg-brand-primary md:flex"
        >
          Join Beta!
        </a>
      </nav>
    </>
  );
}
