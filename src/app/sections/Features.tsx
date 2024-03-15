"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FeatureCard({
  index,
  heading,
  paragraph,
  className,
  textClassName,
  children,
}: {
  heading: string | React.ReactNode;
  paragraph: string;
  index: number;
  className: string;
  textClassName: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const alignment = index % 2 === 0 ? "sm:justify-start" : "sm:justify-end";

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          start: "top center",
          end: "bottom top",
          trigger: containerRef.current,
          toggleClass: "active",
        },
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      className={`w-full relative flex items-center py-12 desktop:py-28 justify-center ${alignment}`}
    >
      <div
        ref={containerRef}
        className="card w-full h-full max-w-[1038px] desktop:h-[556px] max-h-[556px] grid place-items-center p-1 rounded-2xl desktop:rounded-[42px]"
      >
        <div
          className={`w-full h-full border-white border-5 ring-4 ring-offset-4 transition-shadow ring-surface-secondary desktop:rounded-4xl rounded-2xl flex desktop:p-16 z-10 ${className}`}
        >
          {children}
          <div className="flex flex-col gap-4 w-full text-white max-w-[500px] relative">
            <span
              className={`absolute -z-10 select-none font-semibold desktop:text-[240px]/[240px] text-[152px]/[152px ${textClassName}`}
            >
              {index.toString().padStart(2, "0")}
            </span>
            <h2 className="font-semibold text-3xl/12">{heading}</h2>
            <p className="font-medium text-lg/8">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col">
      <FeatureCard
        index={1}
        heading={
          <>
            Gamifying Your Finances:
            <br />
            Learn While You Play!
          </>
        }
        paragraph="Who said learning about money has to be dull? With our gamified approach, you'll be mastering finance while having a blast!"
        className="bg-brand-primary justify-end"
        textClassName="bottom-0 left-0 -translate-x-1/2 -translate-y-8 text-brand-primary-dark"
      >
        <img
          src="/features/Feature-Image-1.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src="/features/Coin.png"
          alt=""
          className="absolute right-0 bottom-0"
        />
      </FeatureCard>
      <FeatureCard
        index={2}
        heading="Made for You: Personalize Your Learning Adventure Now!"
        paragraph="No two learners are the same, and neither are our paths! Discover a learning experience designed just for you."
        className="bg-brand-secondary justify-center items-center"
        textClassName="inset-0 text-brand-secondary-dark desktop:-translate-x-48 desktop:-translate-y-24"
      >
        <img
          src="/features/Feature-Image-2.png"
          alt=""
          className="absolute right-0 top-0"
        />
        <img
          src="/features/Pig.png"
          alt=""
          className="absolute left-8 bottom-0"
        />
      </FeatureCard>
      <FeatureCard
        index={3}
        heading="Quick and Easy: Digestible Financial Lessons at Your Fingertips!"
        paragraph="Short on time? No problem! Our bite-sized lessons deliver big on knowledge without taking up too much of your day."
        className="bg-brand-accent justify-end items-end"
        textClassName="inset-0 text-brand-accent-dark -translate-x-1/4 -translate-y-1/2"
      >
        <img
          src="/features/Feature-Image-3.png"
          alt=""
          className="absolute inset-0"
        />
        <img
          src="/features/Money.png"
          alt=""
          className="absolute right-8 top-0"
        />
      </FeatureCard>
    </section>
  );
}
