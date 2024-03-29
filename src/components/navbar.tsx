"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

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
          <Image
            src="/Effinity-Logo.png"
            width={161}
            height={45}
            alt="Effinity Logo"
            className=""
          />
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
