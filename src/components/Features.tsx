"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
// import { GradientPath } from "gradient-path";

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
      className={`w-full relative flex items-center py-12 md:py-28 justify-center ${alignment}`}
    >
      <div
        ref={containerRef}
        className="card w-full h-full desktop:max-w-[1038px] md:max-w-[580px] desktop:h-[556px] md:h-[354px] grid place-items-center p-1 rounded-2xl md:rounded-[42px]"
      >
        <div
          className={`w-full h-full border-white border-5 ring-4 ring-offset-4 duration-500 transition-shadow ring-surface-secondary md:rounded-4xl rounded-2xl flex md:p-16 z-10 ${className}`}
        >
          {children}
          <div className="flex flex-col gap-4 w-full text-white max-w-[500px] relative">
            <span
              className={`absolute -z-10 select-none font-semibold desktop:text-[240px]/[240px] text-[152px]/[152px ${textClassName}`}
            >
              {index.toString().padStart(2, "0")}
            </span>
            <h2 className="font-semibold desktop:text-3xl/12 md:text-2xl/9">
              {heading}
            </h2>
            <p className="font-medium desktop:text-lg/8 md:text-base/6">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Connector({ direction }: { direction: "left" | "right" }) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      gsap.from(pathRef.current, {
        scrollTrigger: {
          start: "top center",
          end: "bottom top",
          trigger: pathRef.current,
          toggleClass: "opacity-0",
        },
      });
    },
    {
      scope: pathRef,
    }
  );

  // * If you want the gradient to genuinely follow the path, you can use the below code (it's not worth it)

  // const svgRef = useRef<SVGSVGElement | null>(null);
  // const rendered = useRef(false);

  // const colors = [
  //   { color: "#AC9DFE", pos: 0 },
  //   { color: "#F4809C", pos: 1 },
  // ];

  // useEffect(() => {
  //   renderGradient();

  //   return () => {
  //     removeGradient();
  //   };
  // }, [svgRef]);

  // function renderGradient() {
  //   if (!svgRef.current || rendered.current) return;

  //   const path = svgRef.current.querySelector("path");

  //   if (!path) return;

  //   const clonedPath = path.cloneNode(true);
  //   svgRef.current.appendChild(clonedPath);

  //   const gp = new GradientPath({
  //     path,
  //     segments: 25,
  //     samples: 5,
  //     precision: 2,
  //   });

  //   gp.render({
  //     type: "path",
  //     fill: colors,
  //     width: 3,
  //     stroke: colors,
  //     strokeWidth: 0.5,
  //   });

  //   rendered.current = true;
  // }

  // function removeGradient() {
  //   if (!svgRef.current || !rendered.current) return;

  //   const gradient = svgRef.current.querySelector("g.gradient-path");

  //   if (!gradient) return;

  //   svgRef.current.removeChild(gradient);
  //   rendered.current = false;
  // }

  return (
    <svg
      // ref={svgRef}
      viewBox="0 0 287 192"
      fill="none"
      className={`max-w-[25%] -my-12 md:-my-28 ${
        direction === "left" && "-scale-x-100"
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M285 192V118.292C285 107.246 276.046 98.2918 265 98.2918H22C10.9543 98.2918 2 89.3375 2 78.2918V0"
        strokeWidth="4"
        className="animate-gradient-stroke"
      />
      <path
        ref={pathRef}
        d="M285 192V118.292C285 107.246 276.046 98.2918 265 98.2918H22C10.9543 98.2918 2 89.3375 2 78.2918V0"
        stroke="#EFEEF6"
        strokeWidth="5"
        className="transition-opacity duration-100"
      />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center">
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
      <Connector direction="left" />
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
      <Connector direction="right" />
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
