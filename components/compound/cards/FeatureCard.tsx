"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const imageLoader = ({ src }: { src: string }) => {
  return src;
};

type FeatureCardProps = {
  heading?: string;
  highlightedHeading?: string;
  subheading?: string;
  list?: string[];
  img?: string;
};
const FeatureCard = ({
  heading,
  subheading,
  highlightedHeading,
  list,
  img,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse gap-8">
      <div className="flex basis-1/2 flex-col gap-4 text-xl">
        <h2 className="max-w-[1000px] text-5xl text-left leading-[3rem] tracking-tight font-semibold  ">
          {heading && <span className="text-Mardi-Gras">{heading} </span>}
          {highlightedHeading && (
            <span className="text-primary">{highlightedHeading}</span>
          )}
        </h2>
        {subheading && <p className="">{subheading}</p>}
        <ul
          role="list"
          className="c-paragraph is--font-color-ffffff hero-list-item l-margin-bottom-35px is--font-color--1c002c star-purple"
        >
          {list?.map((item) => (
            <li className="mb-1 bg-[url('https://cdn.prod.website-files.com/63d671dfba7daa79b745ce98/65fc91088ae18748f6b701ad_purple-star.svg')] bg-[length:24px_24px] bg-no-repeat pl-8 narrow product-bullets purple-star purple-star sdfsf bullet-purple">
              {item}
            </li>
          ))}
        </ul>
        {/* <div>
          <Button className=" bg-Purple text-secondary rounded-full h-full px-7 py-4 font-grotesk font-semibold text-base">
            Learn more
          </Button>
        </div> */}
      </div>
      {img && (
        <div className="m-auto basis-1/2 flex items-center justify-center">
          <img
            // loader={imageLoader}
            src={img}
            width={400}
            //   fill={true}
            height={600}
            //   sizes=""
            // objectFit="cover"
            alt={"placeholder"}
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
