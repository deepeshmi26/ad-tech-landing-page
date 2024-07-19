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
  {
    href: "#solutions",
    name: "Solutions",
    id: "solutions",
  },
  {
    href: "#caseStudy",
    name: "Case study",
    id: "caseStudy",
  },
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

  const handleScroll = () => {
    let lastActiveElement = null;
    Links.forEach((link) => {
      const element = document.getElementById(link.id);
      let elememtOffset = element?.offsetTop;
      const scrollPosition = window.scrollY;
      if (elememtOffset != null && scrollPosition > elememtOffset) {
        lastActiveElement = link.href;
      }
    });
    if (lastActiveElement) setActiveSection(lastActiveElement);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full z-[100] bg-white">
      <nav className="hidden md:flex py-4 px-8 h-20 ">
        <div className=" gap-8 flex flex-row justify-between items-center h-full">
          <div>
            <div>Logo</div>
            <div>SMARTLY</div>
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
                      ? "bg-purple-50 text-purple-600"
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
            <Button className="bg-Electric-Violet rounded-full h-full px-7 py-4 font-grotesk_wide text-base font-semibold">
              Get Demo
            </Button>
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden w-full py-4 px-8 h-12 ">
        <div className="w-full  gap-8 flex flex-row justify-between items-center h-full">
          <div>
            <div>Small Logo</div>
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
                            ? "bg-purple-50 text-purple-600"
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
                  <Button className="bg-Electric-Violet rounded-full h-full px-7 py-4 font-grotesk_wide text-base font-semibold">
                    Get Demo
                  </Button>
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
