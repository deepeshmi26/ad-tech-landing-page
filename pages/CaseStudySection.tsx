import CaseStudyBigCard from "@/components/compound/cards/CaseStudyBigCard";
import FeatureCard from "@/components/compound/cards/FeatureCard";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/image_loader";
import Image from "next/image";
import React from "react";

type Props = {};

const CaseStudySection = (props: Props) => {
  return (
    <div
      id="caseStudy"
      className="flex flex-col mx-auto items-center justify-center px-8 max-w-[1500px] mb-28"
    >
      <h2 className="my-24 max-w-[1000px] text-4xl lg:text-5xl text-center leading-[3rem] tracking-tight font-semibold  ">
        <span className="text-Mardi-Gras">
          Powering Beautifully Effective Ads Across Vertical&nbsp;
        </span>
      </h2>
      <CaseStudyBigCard />
    </div>
  );
};

export default CaseStudySection;
