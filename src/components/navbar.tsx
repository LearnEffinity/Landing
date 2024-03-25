import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="h-[120px] w-full flex items-center justify-between bg-surface-primary px-24">
        <div className="flex items-center md:justify-start w-full justify-center">
          <Image
            src="/Effinity-Logo.png"
            width={161}
            height={45}
            alt="Effinity Logo"
            className=""
          />
          <div className="w-[2px] h-7 bg-black mx-8 hidden md:block" />
          <div className=" items-center flex-row gap-x-8 hidden md:flex">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/learneffinity/"
              className="text-icon-primary"
            >
              <AiFillLinkedin size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://discord.gg/mpBfqw5BG8"
              className="text-icon-primary"
            >
              <FaDiscord size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/learneffinity/"
              className="text-icon-primary"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/learneffinity"
              className="text-icon-primary"
            >
              <FaXTwitter size={24} />
            </Link>
          </div>
        </div>
        <a
          href="#cta"
          className="w-[158px] h-[54px] bg-brand-accent text-white rounded-xl justify-center items-center font-semibold hover:bg-brand-primary transition-all duration-300 ease-in-out hidden md:flex"
        >
          Join Beta!
        </a>
      </nav>
    </>
  );
}
