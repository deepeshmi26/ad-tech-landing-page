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
    href: "/",
    name: "About me",
    id: "about-me",
  },
  {
    href: "#projects",
    name: "Projects",
    id: "projects",
  },
  {
    href: "#experience",
    name: "Experience",
    id: "experience",
  },
  {
    href: "#skills",
    name: "Skills",
    id: "skills",
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
    <nav className="py-4 px-8 h-20 ">
      <div className="gap-8 flex flex-row justify-between items-center h-full">
        <div>
          <div>Logo</div>
          <div>SMARTLY</div>
        </div>
        <div className="flex flex-row gap-8 font-semibold">
          <div>Solutions</div>
          <div>Platform</div>
          <div>Testimonials</div>
        </div>
        <div className="h-full">
          <Button className="bg-Electric-Violet rounded-full h-full px-7 py-4 font-grotesk_wide text-base font-semibold">
            Get Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
