"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
const Links = [
  {
    href: "#features",
    name: "Features",
    id: "features",
  },
  // {
  //   href: "#solutions",
  //   name: "Solutions",
  //   id: "solutions",
  // },
  // {
  //   href: "#caseStudy",
  //   name: "Case study",
  //   id: "caseStudy",
  // },
  {
    href: "#testimonials",
    name: "Testimonials",
    id: "testimonials",
  },
];
const Navbar: FC = () => {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState(Links[0].href);
  // const isActive = (path: string) => pathname === path;

  // const handleScroll = () => {
  //   let lastActiveElement = null;
  //   Links.forEach((link) => {
  //     const element = document.getElementById(link.id);
  //     let elememtOffset = element?.offsetTop;
  //     const scrollPosition = window.scrollY;
  //     if (elememtOffset != null && scrollPosition > elememtOffset) {
  //       lastActiveElement = link.href;
  //     }
  //   });
  //   if (lastActiveElement) setActiveSection(lastActiveElement);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full z-10 bg-white shadow-xl">
      <nav className="hidden md:flex py-4 px-8 h-20 ">
        <div className=" gap-8 flex flex-row w-full justify-between items-center h-full">
          <div>
            <NextLink href="#home">
              <Image
                src="/logo.png"
                width={275 / 2}
                height={87 / 2}
                alt="Adyugo"
              />
            </NextLink>
          </div>
          <div className="flex flex-row gap-8 font-semibold">
            {Links.map((item, index) => (
              <NextLink
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-semibold p-2 rounded-lg",
                  `${
                    activeSection == item.href
                      ? "bg-primary-light text-primary"
                      : ""
                  }`
                )}
                passHref
                onClick={() => setActiveSection(item.href)}
              >
                {item.name}
              </NextLink>
            ))}
          </div>
          <div className="h-full">
            <NextLink href="#contact-us">
              <Button
                variant={"standout"}
                className="rounded-full h-full px-7 py-4 font-medium text-xl"
              >
                Get Started
              </Button>
            </NextLink>
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden w-full py-4 px-8 h-16">
        <div className="w-full  gap-8 flex flex-row justify-between items-center h-full">
          <div>
            <NextLink href="#home">
              <Image
                src="/logo.png"
                width={275 / 2}
                height={87 / 2}
                alt="Adyugo"
              />
              {/* <div>Small Logo</div> */}
            </NextLink>
          </div>
          <Sheet
            open={isDrawerOpen}
            onOpenChange={() => setIsDrawerOpen((val) => !val)}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Image src="/hamburger.png" alt="menu" width={20} height={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[200px] sm:w-[200px]" side={"right"}>
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col">
                  {Links.map((item, index) => (
                    <NextLink
                      key={index}
                      href={item.href}
                      className={cn(
                        "text-sm font-semibold p-2 rounded-lg",
                        `${
                          activeSection == item.href
                            ? "bg-primary-light text-primary"
                            : ""
                        }`
                      )}
                      passHref
                      onClick={() => {
                        setActiveSection(item.href);
                        setIsDrawerOpen(false);
                      }}
                    >
                      {item.name}
                    </NextLink>
                  ))}
                </div>
                <div className="">
                  <NextLink href="#contact-us">
                    <Button
                      variant={"standout"}
                      className="rounded-full h-full px-7 py-4 font-medium text-xl"
                    >
                      Get Started
                    </Button>
                  </NextLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
