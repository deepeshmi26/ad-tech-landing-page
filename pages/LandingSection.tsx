"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import InfinteCarousel from "../components/compound/InfiniteCarousel";
type Props = {};

const LandingSection = (props: Props) => {
  return (
    <>
      <div className="bg-Black-Russian px-8 py-16 w-full text-white ">
        <div className=" max-w-[1220px] mx-auto grid  md:grid-cols-2">
          <section className="flex flex-col gap-8 justify-center max-w-[500px]">
            {/* <div>Social links</div> */}
            <h1 className="text-6xl mb-5 font-bold leading-[70px]">
              <span>Be where your consumers are</span>{" "}
              <TextCarousel className="text-Turbo" />
            </h1>
            <div className="text-xl">
              With Smartly, you can launch multiple campaigns and ad groups 3.3x
              faster than native platform tools* across digital channels with
              automated workflows — all powered by Smartly AI.
            </div>
            <div>
              <Button className=" bg-Turbo text-primary rounded-full h-full px-7 py-4 font-grotesk font-medium text-xl">
                Book a demo
              </Button>
            </div>
          </section>
          <div>
            <Image
              src={"/landing_page_icon.jpg"}
              width={593}
              height={593}
              alt={"Landing page icon"}
            />
          </div>
        </div>
      </div>
      <InfinteCarousel
        className=" bg-Jacarta py-8 text-white"
        items={["Item1", "Item2"]}
      />
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
