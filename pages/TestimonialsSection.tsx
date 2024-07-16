import CaseStudyBigCard from "@/components/compound/cards/CaseStudyBigCard";
import FeatureCard from "@/components/compound/cards/FeatureCard";
import TestimonialCard from "@/components/compound/cards/TestimonialCard";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/image_loader";
import Image from "next/image";
import React from "react";

type Props = {};

const TestimonialsSection = (props: Props) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center px-8 max-w-[1500px]">
      <h2 className="my-24 max-w-[1000px] text-4xl lg:text-5xl text-center leading-[3rem] tracking-tight font-semibold  ">
        <span className="text-Mardi-Gras">
          Discover How Smartly Can Elevate Your Team’s Creative Innovation
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialsSection;
