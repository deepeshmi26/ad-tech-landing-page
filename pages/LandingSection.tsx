"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import NextLink from "next/link";
import InfinteCarousel from "../components/compound/InfiniteCarousel";
type Props = {};

const LandingSection = (props: Props) => {
  return (
    <>
      <div
        id={"home"}
        className="bg-gradient-to-r from-blue-800 to-indigo-900 px-8 py-16 w-full text-white "
      >
        <div className=" max-w-[1220px] mx-auto grid  md:grid-cols-2">
          <section className="flex flex-col gap-8 justify-center max-w-[500px]">
            {/* <div>Social links</div> */}
            <h1 className="text-5xl md:text-6xl mb-5 font-bold md:leading-[70px]">
              <span>Transform your digital inventory into</span>{" "}
              <div className="text-accent">profitable business</div>
            </h1>
            <div className="text-xl">
              Monetize your audience across Mobile, Video, and Display with
              premium demand and higher eCPM.
            </div>
            <div>
              <NextLink href="#contact-us">
                <Button
                  variant={"standout"}
                  className="rounded-full h-full px-7 py-4 font-medium text-xl"
                >
                  Get Started
                </Button>
              </NextLink>
            </div>
          </section>
          <div>
            <Image
              src={"/landing_page_icon.png"}
              width={593}
              height={593}
              alt={"Landing page icon"}
            />
          </div>
        </div>
      </div>
      {/* <InfinteCarousel
        className=" bg-Jacarta py-8 text-white"
        items={["Item1", "Item2"]}
      /> */}
    </>
  );
};

const textItems = ["Creatively.", "Automatically.", "Smartly."];

type TextCarouselProps = {
  className: string;
};
const TextCarousel: React.FC<TextCarouselProps> = ({ className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"h-[1.5rem] relative"}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(className, "w-full absolute")}
        >
          {textItems[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandingSection;
