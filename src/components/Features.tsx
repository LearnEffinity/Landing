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
    },
  );

  return (
    <div
      className={`relative flex w-full items-center justify-center py-12 lg:py-28 ${alignment}`}
    >
      <div
        ref={containerRef}
        className="card grid h-full w-max place-items-center rounded-2xl p-1 lg:h-[354px] lg:w-full lg:max-w-screen-md lg:rounded-[42px] desktop:h-[556px] desktop:max-w-[1038px]"
      >
        <div
          className={`border-5 relative z-10 flex h-full w-full flex-col items-start rounded-[14px] border-white p-5 ring-4 ring-surface-secondary ring-offset-4 transition-shadow duration-500 lg:static lg:flex-row lg:rounded-4xl lg:p-16 ${className}`}
        >
          {children}
          <div className="relative flex w-full max-w-[500px] flex-col gap-4 text-white">
            <span
              className={`absolute right-0 -z-10 -translate-y-full select-none text-[152px]/[152px] font-semibold lg:translate-y-0 desktop:text-[240px]/[240px] ${textClassName}`}
            >
              {index.toString().padStart(2, "0")}
            </span>
            <h2 className="text-xl/7 font-semibold lg:text-2xl/9 desktop:text-3xl/12">
              {heading}
            </h2>
            <p className="text-base/6 font-medium lg:text-base/6 desktop:text-lg/8">
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
    },
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
      className={`-my-12 max-w-[25%] lg:-my-28 ${
        direction === "left" && "-scale-x-100"
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M285 192V118.292C285 107.246 276.046 98.2918 265 98.2918H22C10.9543 98.2918 2 89.3375 2 78.2918V0"
        className="animate-gradient-stroke stroke-[9] sm:stroke-[4]"
      />
      <path
        ref={pathRef}
        d="M285 192V118.292C285 107.246 276.046 98.2918 265 98.2918H22C10.9543 98.2918 2 89.3375 2 78.2918V0"
        stroke="#EFEEF6"
        className="stroke-[10] transition-opacity duration-100 sm:stroke-[5]"
      />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="-mt-[46px] flex flex-col items-center sm:mt-0">
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
        className="bg-brand-primary lg:items-center lg:justify-end "
        textClassName="lg:bottom-0 lg:left-0 desktop:-translate-x-1/2 desktop:-translate-y-8 text-brand-primary-dark"
      >
        <img
          src="/features/Feature-Image-1.png"
          alt=""
          className=" top-0 h-full max-h-96 -translate-x-10 -translate-y-32 transform sm:translate-y-0 md:bottom-0 lg:absolute lg:max-h-none lg:-translate-x-3/4 desktop:h-auto desktop:-translate-x-full"
        />
        <img
          src="/features/Coin.png"
          alt=""
          className="absolute -bottom-10 -right-2 h-20 w-20 lg:-right-10 lg:h-auto lg:w-auto lg:scale-75 desktop:scale-100"
        />
      </FeatureCard>
      <Connector direction="left" />
      <FeatureCard
        index={2}
        heading="Made for You: Personalize Your Learning Adventure Now!"
        paragraph="No two learners are the same, and neither are our paths! Discover a learning experience designed just for you."
        className="bg-brand-secondary lg:items-center lg:justify-center"
        textClassName="lg:inset-0 text-brand-secondary-dark desktop:-translate-x-48 desktop:-translate-y-24"
      >
        <img
          src="/features/Feature-Image-2.png"
          alt=""
          className=" top-0 h-full max-h-96 -translate-x-12 lg:absolute lg:max-h-none lg:translate-x-[110%] desktop:h-auto"
        />
        <img
          src="/features/Pig.png"
          alt=""
          className="absolute -bottom-10 -right-2 h-20 w-20 md:-bottom-10 lg:-right-10 lg:bottom-10 lg:left-8 lg:h-auto lg:w-auto lg:scale-75 desktop:scale-100"
        />
      </FeatureCard>
      <Connector direction="right" />
      <FeatureCard
        index={3}
        heading="Quick and Easy: Digestible Financial Lessons at Your Fingertips!"
        paragraph="Short on time? No problem! Our bite-sized lessons deliver big on knowledge without taking up too much of your day."
        className="bg-brand-accent lg:items-end lg:justify-end"
        textClassName="lg:inset-0 text-brand-accent-dark desktop:-translate-x-1/4 desktop:-translate-y-1/2"
      >
        <img
          src="/features/Feature-Image-3.png"
          alt=""
          className="top-10 h-full max-h-96 -translate-x-10 md:right-10 md:-translate-x-1 lg:absolute lg:max-h-none lg:-translate-x-[200%] desktop:h-auto"
        />
        <img
          src="/features/Money.png"
          alt=""
          className="absolute -bottom-10 -right-2 h-24 w-24 sm:-right-10 lg:right-8 lg:top-0 lg:h-auto lg:w-auto lg:scale-75 desktop:scale-100"
        />
      </FeatureCard>
    </section>
  );
}
