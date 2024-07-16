"use client";
import FeatureCard from "@/components/compound/cards/FeatureCard";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/image_loader";
import Image from "next/image";
import React from "react";
type Props = {};

const TestimonialCard = (props: Props) => {
  return (
    <div className="flex flex-row gap-[120px] px-12 py-4 rounded-3xl border border-Electric-Violet">
      <div className=" flex flex-col gap-8">
        <Image
          loader={imageLoader}
          height={48}
          className="rounded-full"
          width={100}
          alt="profile pic"
          src={"https://placehold.co/100x48"}
        />
        <p className=" text-lg">
          Smartlys Gen AI has been a game changer as it enables the
          personalization of the lower funnel creatives and provides a
          consistent creative approach across the full funnel
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
      </div>
    </div>
  );
};

export default TestimonialCard;
