import LandingSection from "@/pages/LandingSection";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import FeatureSection from "@/pages/FeatureSection";
import SolutionSection from "@/pages/SolutionSection";
import CaseStudySection from "@/pages/CaseStudySection";
import TestimonialsSection from "@/pages/TestimonialsSection";
import FooterSection from "@/pages/FooterSection";
import StatsSection from "@/pages/StatsSection";
import FormSection from "@/pages/FormSection";

export default function Home() {
  return (
    <div className="h-screen overflow-auto">
      <Navbar />
      <div className="overflow-scroll">
        <LandingSection />
        <FeatureSection />
        <StatsSection />
        {/* <SolutionSection /> */}
        {/* <CaseStudySection /> */}
        <TestimonialsSection />
        <FormSection />
        <FooterSection />
      </div>
    </div>
  );
}
