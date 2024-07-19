"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const imageLoader = ({ src }: { src: string }) => {
  return src;
};

const AccordionCard = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row  gap-8">
      <div className="flex basis-1/2 flex-col gap-4 text-2xl">
        <p className=" font-semibold">
          Repetitive campaign management tasks across multiple platforms
          prevents brands from engaging in higher-value initiatives such as
          executing new ideas, testing new advertising solutions or strategies,
          etc.
        </p>

        <p className="">
          Repetitive campaign management tasks across multiple platforms
          prevents brands from engaging in higher-value initiatives such as
          executing new ideas, testing new advertising solutions or strategies,
          etc.
        </p>
        <div>
          <Button className=" border border-white bg-Purple text-secondary rounded-full h-full px-7 py-4 font-grotesk font-semibold text-base">
            See solution
          </Button>
        </div>
      </div>
      <div className="m-auto basis-1/2 flex items-center justify-center">
        <Image
          loader={imageLoader}
          src={"https://placehold.co/1400x1000"}
          width={400}
          //   fill={true}
          height={600}
          //   sizes=""
          objectFit="cover"
          alt={"placeholder"}
        />
      </div>
    </div>
  );
};

export default AccordionCard;
