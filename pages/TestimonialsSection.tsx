import CaseStudyBigCard from "@/components/compound/cards/CaseStudyBigCard";
import FeatureCard from "@/components/compound/cards/FeatureCard";
import TestimonialCard from "@/components/compound/cards/TestimonialCard";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/image_loader";
import Image from "next/image";
import React from "react";

type Props = {};

const testimonial = [
  {
    text: "It’s been nice working with AdYugo. They opened more demand sources to increase our inventory yield without SDK integration. We are hopeful the business will keep the momentum in months and years to follow.",
    name: "Kaushik Patel",
    img: "/testimonial-1.jpeg",
    designation: "Co-founder, Tathastu Technologies",
  },
];

const TestimonialsSection = (props: Props) => {
  return (
    <div
      id="testimonials"
      className="flex flex-col mx-auto items-center justify-center px-8 max-w-[1500px]"
    >
      <h2 className="my-24 max-w-[1000px] text-4xl lg:text-5xl text-center leading-[3rem] tracking-tight font-semibold  ">
        <span className="text-Mardi-Gras">What our client says</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {testimonial.map((val) => (
          <TestimonialCard {...val} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
