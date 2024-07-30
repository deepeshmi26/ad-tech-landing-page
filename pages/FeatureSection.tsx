import FeatureCard from "@/components/compound/cards/FeatureCard";
import React from "react";

type Props = {};

const features = [
  {
    heading: "Unified marketplace with a",
    highlightedHeading: "Global Reach",
    subheading:
      "Connect with buyers and suppliers through our comprehensive ad-tech solutions available across all formats.",
    list: [
      "Partner with top DSPs, Ad exchanges, and trading desks",
      "Access premium brand demand beyond open auctions",
      "Monetize a global audience",
    ],
    img: "/feature-1.svg",
  },
  {
    heading: "Yield optimization across",
    highlightedHeading: "All screens",
    subheading:
      "Monetize your inventory from desktop, mobile, OTT, and connected TV devices with our global programmatic ad network.",
    list: [
      "Enable display, video, and native ad inventory",
      "Support for all ad formats",
    ],
    img: "/feature-2.svg",
  },
  {
    heading: "Ease of",
    highlightedHeading: "Integration",
    subheading:
      "Publishers have the flexibility to integrate with either Prebid SDK or No-SDK.",
    list: [
      "Supports Google AdExchange",
      "Integration with Open RTB",
      "Header Bidding Adapter",
    ],
    img: "/feature-3.svg",
  },
];
const FeatureSection = (props: Props) => {
  return (
    <div
      id="features"
      className="flex flex-col mx-auto items-center justify-center px-8 max-w-[1500px]"
    >
      <h2 className="my-24 max-w-[1000px] text-4xl lg:text-5xl text-center leading-[3rem] tracking-tight font-semibold  ">
        <span className=" text-accent">What we offer</span>
        {/* <span className="text-primary">What we offer&nbsp;</span> */}
      </h2>
      <div className="flex flex-col gap-[120px]">
        {features.map((feature) => (
          <FeatureCard {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
