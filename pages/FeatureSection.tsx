import FeatureCard from "@/components/compound/cards/FeatureCard";
import React from "react";

type Props = {};

const FeatureSection = (props: Props) => {
  return (
    <div
      id="features"
      className="flex flex-col mx-auto items-center justify-center px-8 max-w-[1500px]"
    >
      <h2 className="my-24 max-w-[1000px] text-4xl lg:text-5xl text-center leading-[3rem] tracking-tight font-semibold  ">
        <span className="text-Mardi-Gras">
          Achieve better campaign performance and business results{" "}
        </span>
        <span className="text-Electric-Violet">
          with a single workflow.&nbsp;
        </span>
      </h2>
      <div className="flex flex-col gap-[120px]">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default FeatureSection;
