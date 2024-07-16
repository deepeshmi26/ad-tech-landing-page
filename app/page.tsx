import LandingSection from "@/pages/LandingSection";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import FeatureSection from "@/pages/FeatureSection";
import SolutionSection from "@/pages/SolutionSection";
import CaseStudySection from "@/pages/CaseStudySection";
import TestimonialsSection from "@/pages/TestimonialsSection";

export default function Home() {
  return (
    <div className=" min-h-screen pb-10 ">
      <Navbar />
      <LandingSection />
      <FeatureSection />
      <SolutionSection />
      <CaseStudySection />
      <TestimonialsSection />
    </div>
  );
}
