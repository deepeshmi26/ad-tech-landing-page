import LandingSection from "@/pages/LandingSection";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import FeatureSection from "@/pages/FeatureSection";
import SolutionSection from "@/pages/SolutionSection";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <Navbar />
      <LandingSection />
      <FeatureSection />
      <SolutionSection />
    </div>
  );
}
