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
        <div className="w-full flex flex-col md:flex-row gap-6">
          <NextLink className="basis-1/3 min-w-40 w-2/5 md:w-auto" href="#home">
            <Image src="/logo.png" width={275} height={87} alt="Adyugo" />
          </NextLink>
          <div className=" basis-2/3 max-w-[1220px] w-full flex flex-col  justify-end gap-6">
            <h1 className="text-xl">Get in touch with us</h1>
            <div className="flex flex-col   gap-6">
              <span>
                Email:{" "}
                <a
                  href="mailto:webmaster@example.com"
                  className="underline decoration-accent"
                >
                  business@adyugo.com
                </a>
              </span>
              <span>
                Mobile:{" "}
                <span className="underline decoration-accent">
                  +91 9380275215
                </span>
              </span>
            </div>

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
                    <img
                      height={35}
                      width={35}
                      src="social-icons/linkedin.png"
                    />
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
                    <img
                      height={35}
                      width={35}
                      src="social-icons/facebook.png"
                    />
                  </NextLink>
                </Button>
              </div>
            </section>
          </div>
        </div>
        <div className="text-xs">
          Copyright © 2024 - 2034 Adyugo Media LLP. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default FooterSection;
