function FeatureCard({
  active = false,
  index,
  heading,
  paragraph,
  className,
  textClassName,
  children,
}: {
  active?: boolean;
  heading: string | React.ReactNode;
  paragraph: string;
  index: number;
  className: string;
  textClassName: string;
  children: React.ReactNode;
}) {
  const alignment =
    index % 2 === 0 ? "desktop:justify-start" : "desktop:justify-end";

  return (
    <div
      className={`w-full relative flex items-center py-12 desktop:py-28 justify-center ${alignment}`}
    >
      <div
        className={`w-full h-full max-w-[1038px] desktop:h-[556px] max-h-[556px] grid place-items-center p-1 rounded-2xl desktop:rounded-[42px] ${
          active ? "animate-gradient-x" : "bg-surface-secondary"
        }`}
        style={
          (active && {
            backgroundImage:
              "linear-gradient(90deg, rgba(88, 58, 254, 0.56) 0%, rgba(234, 0, 56, 0.56) 50%, rgba(88, 58, 254, 0.56) 100%)",
            backgroundSize: "200% 100%",
          }) ||
          undefined
        }
      >
        <div
          className={`w-full h-full border-white border-5 desktop:rounded-4xl rounded-2xl flex desktop:p-16 z-10 ${className}`}
        >
          {children}
          <div className="flex flex-col gap-4 w-full text-white max-w-[500px] relative">
            <span
              className={`absolute -z-10 font-semibold desktop:text-[240px]/[240px] text-[152px]/[152px ${textClassName}`}
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
        active
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
    </section>
  );
}
