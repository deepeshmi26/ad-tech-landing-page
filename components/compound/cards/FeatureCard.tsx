"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const imageLoader = ({ src }: { src: string }) => {
  return src;
};

const FeatureCard = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse gap-8">
      <div className="flex basis-1/2 flex-col gap-4 text-xl">
        <h2 className="max-w-[1000px] text-5xl text-left leading-[3rem] tracking-tight font-semibold  ">
          <span className="text-Mardi-Gras">
            Quickly Generate and Optimize{" "}
          </span>
          <span className="text-Electric-Violet">Creative</span>
        </h2>
        <p className="">
          Automate your creative production with Gen AI and offer personalized
          experiences on social media, video and display that will engage your
          target audience.
        </p>
        <ul
          role="list"
          className="c-paragraph is--font-color-ffffff hero-list-item l-margin-bottom-35px is--font-color--1c002c star-purple"
        >
          <li className="mb-1 bg-[url('https://cdn.prod.website-files.com/63d671dfba7daa79b745ce98/65fc91088ae18748f6b701ad_purple-star.svg')] bg-[length:24px_24px] bg-no-repeat pl-8 narrow product-bullets purple-star purple-star sdfsf bullet-purple">
            Image and video templates
          </li>
          <li className="mb-1  bg-[url('https://cdn.prod.website-files.com/63d671dfba7daa79b745ce98/65fc91088ae18748f6b701ad_purple-star.svg')] bg-[length:24px_24px] bg-no-repeat pl-8 narrow product-bullets purple-star purple-star sdfsf bullet-purple">
            Dynamic creative optimization
          </li>
          <li className="mb-1 bg-[url('https://cdn.prod.website-files.com/63d671dfba7daa79b745ce98/65fc91088ae18748f6b701ad_purple-star.svg')] bg-[length:24px_24px] bg-no-repeat pl-8 narrow product-bullets purple-star purple-star sdfsf bullet-purple">
            Build, scale and repurpose creative across channels and formats
          </li>
        </ul>
        <div>
          <Button className=" bg-Purple text-secondary rounded-full h-full px-7 py-4 font-grotesk font-semibold text-base">
            Learn more
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

export default FeatureCard;
