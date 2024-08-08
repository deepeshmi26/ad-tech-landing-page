"use client";
import FeatureCard from "@/components/compound/cards/FeatureCard";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/image_loader";
import Image from "next/image";
import React from "react";
type Props = {};

type TestimonialProps = {
  text?: string;
  name?: string;
  designation?: string;
  img?: string;
};

const TestimonialCard = ({
  text,
  name,
  designation,
  img,
}: TestimonialProps) => {
  return (
    <div className="flex flex-1 flex-row gap-[120px] px-8  lg:px-12 py-4 rounded-3xl border border-Electric-Violet md:max-w-[450px]">
      <div className=" flex flex-col gap-8">
        {/* <Image
          loader={imageLoader}
          height={48}
          className="rounded-full"
          width={100}
          alt="profile pic"
          src={"https://placehold.co/100x48"}
        /> */}
        {text && <p className=" text-lg">{text}</p>}
        <div className="flex flex-row gap-2">
          {img && (
            <div>
              <Image
                loader={imageLoader}
                height={48}
                className="rounded-full"
                width={48}
                alt="profile pic"
                src={img}
              />
            </div>
          )}
          <div className="flex flex-col justify-center">
            {name && <div className="text-primary font-semibold">{name}</div>}
            {designation && <div className="text-sm">{designation}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
