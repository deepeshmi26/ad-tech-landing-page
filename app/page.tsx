import LandingSection from "@/pages/LandingSection";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import FeatureSection from "@/pages/FeatureSection";
import SolutionSection from "@/pages/SolutionSection";
import CaseStudySection from "@/pages/CaseStudySection";
import TestimonialsSection from "@/pages/TestimonialsSection";
import FooterSection from "@/pages/FooterSection";

export default function Home() {
  return (
    <div className="h-screen overflow-auto">
      <Navbar />
      <div className="overflow-scroll">
        <LandingSection />
        <FeatureSection />
        <SolutionSection />
        <CaseStudySection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </div>
  );
}
