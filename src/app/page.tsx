import CallToAction from "@/components/CallToAction";
import MeetTheTeam from "@/components/meet the team";
import HeroSection from "./heroSection";
import FeaturesSection from "../components/Features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MeetTheTeam />
      <CallToAction />
    </>
  );
}
