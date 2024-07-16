"use client";
import FeatureCard from "@/components/compound/cards/FeatureCard";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/image_loader";
import Image from "next/image";
import React from "react";
type Props = {};

const CaseStudyBigCard = (props: Props) => {
  return (
    <div className="flex flex-row gap-[120px] px-12 py-4 rounded-3xl border border-Electric-Violet">
      <div className="basis-2/3 flex flex-col gap-10">
        <h2 className="max-w-[1000px] text-5xl text-left leading-[3rem] tracking-tight font-semibold  ">
          <span className="text-Mardi-Gras">
            Quickly Generate and Optimize{" "}
          </span>
          <span className="text-Electric-Violet">Creative</span>
        </h2>
        <p className="text-xl">
          "Smartly’s Gen AI has been a game changer as it enables the
          personalization of the lower funnel creatives and provides a
          consistent creative approach across the full funnel.”
        </p>
        <div className="flex flex-row gap-2">
          <div>
            <Image
              loader={imageLoader}
              height={48}
              className="rounded-full"
              width={48}
              alt="profile pic"
              src={"https://placehold.co/48x48"}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-Electric-Violet font-semibold">
              Deepesh Mitra
            </div>
            <div className="text-sm">Software engineer 2</div>
          </div>
        </div>
        <div>
          <Button className="bg-Electric-Violet rounded-full h-full px-7 py-4 font-grotesk text-base font-semibold">
            View case study
          </Button>
        </div>
      </div>
      <div className="basis-1/3">
        <Image
          loader={imageLoader}
          height={1200}
          width={1200}
          className="h-full w-full"
          alt="profile pic"
          src={"https://placehold.co/1200x1200"}
        />
      </div>
    </div>
  );
};

export default CaseStudyBigCard;
