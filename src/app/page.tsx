import CallToAction from "@/components/CallToAction";
import MeetTheTeam from "@/components/meet the team";
import HeroSection from "../components/heroSection";
import FeaturesSection from "../components/Features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-12" />
      <FeaturesSection />
      <div className="h-12" />
      <MeetTheTeam />
      <div className="h-12" />
      <CallToAction />
    </>
  );
}
