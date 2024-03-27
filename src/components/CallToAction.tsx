"use client";
import gsap from "gsap";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import SignUpForm from "./SignUpForm";

export default function CallToAction() {
  const container = useRef(null);
  const bush = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 430px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    if (isMobile) {
      gsap.to("#rocket", {
        duration: 2,
        y: -10,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: "#callToAction",
          start: "top bottom",
          toggleActions: "play pause play pause",
        },
      });
    } else {
      gsap.to("#rocket", {
        duration: 2.5,
        x: -20,
        y: -20,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: "#callToAction",
          start: "top bottom",
          toggleActions: "play pause play pause",
        },
      });
    }

    if (!isMobile) {
      gsap.to("#atom", {
        delay: 0.5,
        duration: 2.5,
        y: -20,
        yoyo: true,
        ease: "sine.inOut",
        repeat: -1,
        scrollTrigger: {
          trigger: "#callToAction",
          start: "top bottom",
          toggleActions: "play pause play pause",
        },
      });
    }
  }, [isMobile]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "start end"],
  });

  const bushY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10" id="#callToAction">
        <div
          className="mx-auto h-full w-full hidden lg:block"
          id="cta"
          ref={bush}
        >
          <div className="inset-y-0 left-0 mt-28" id="atom">
            <Image
              src="/cta/atom.png"
              width={272}
              height={272}
              quality={100}
              alt="atom"
              className="mr-16 hidden lg:block "
            />
          </div>
        </div>
        <div className="flex flex-col justify-start order-2 lg:order-none">
          <div className="text-center ">
            <h2 className="text-2xl md:text-[52px]/[76px] text-center font-semibold pb-4 flex flex-col">
              Ready to go to
              <span className="bg-gradient-to-r from-decorative-blue to-decorative-red text-transparent bg-clip-text">
                Effinity and Beyond?
              </span>
            </h2>
            <p className="flex justify-center md:text-lg w-full md:max-w-none max-w-[360px]">
              Take control of your financial journey. Get started - for free.
            </p>
          </div>
          <SignUpForm />
        </div>
        <div
          className="mx-auto h-full w-full flex justify-center"
          id="rocket"
          ref={container}
        >
          <div className="lg:inset-y-0 lg:right-0 lg:mr-0 mr-6">
            <Image
              src="/cta/rocket.png"
              width={148}
              height={178}
              quality={100}
              alt="rocket"
              className="lg:ml-16 mt-1 mb-10 lg:mb-0 md:w-[272px] lg:transform-none rotate-[20deg]"
            />
          </div>
        </div>
      </div>
      <motion.div style={{ y: bushY }}>
        <Image
          src="/cta/person-bush.png"
          width={1248}
          height={580}
          quality={100}
          alt="atom"
          className="mt-25"
          id="bush"
        />
      </motion.div>
    </>
  );
}
