"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import InfinteCarousel from "../components/compound/InfiniteCarousel";
import NextLink from "next/link";
import { toast } from "@/components/ui/use-toast";
type Props = {};

const FooterSection = (props: Props) => {
  return (
    <>
      <div
        id={"home"}
        className="bg-gradient-to-r from-blue-800 to-indigo-900 px-8 py-8  text-white mt-8 gap-8 flex-col flex items-center justify-center w-full"
      >
        <NextLink href="#home">
          <Image src="/logo.png" width={275 / 2} height={87 / 2} alt="Adyugo" />
        </NextLink>
        <div className=" max-w-[1220px] w-full flex flex-col items-center justify-center md:flex-row gap-8">
          <section className="flex flex-col gap-8">
            <div className="flex flex-row gap-6 ">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-gray-700 hover:text-primary"
              >
                <NextLink
                  href={"https://www.linkedin.com/company/adyugo-media/"}
                >
                  <img height={35} width={35} src="social-icons/linkedin.png" />
                </NextLink>
              </Button>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-gray-700 hover:text-primary"
              >
                <NextLink href={"https://www.instagram.com/adyugomedia/"}>
                  <img
                    height={35}
                    width={35}
                    src="social-icons/instagram.webp"
                  />
                </NextLink>
              </Button>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-gray-700 hover:text-primary"
              >
                <NextLink
                  href={
                    "https://www.facebook.com/share/kKmVHDvRp9T45D2D/?mibextid=LQQJ4d"
                  }
                >
                  <img height={35} width={35} src="social-icons/facebook.png" />
                </NextLink>
              </Button>
            </div>
          </section>
        </div>
        <div>
          Copyright © 2024 - 2034 Adyugo Media LLP. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default FooterSection;
