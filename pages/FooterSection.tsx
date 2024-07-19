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
        className="bg-Black-Russian px-8 py-16 text-white mt-8 gap-8 flex flex-col w-full"
      >
        <div className=" max-w-[1220px] w-full mx-auto flex flex-col md:flex-row gap-8">
          <section className="flex flex-col gap-8 basis-1/3">
            <NextLink href="#home">
              <div>Logo</div>
              <div>SMARTLY</div>
            </NextLink>
          </section>
          <div className="basis-2/3 ">
            <h1 className="text-5xl md:text-6xl mb-5 font-bold md:leading-[70px]">
              Contact us
            </h1>
            <Form />
          </div>
        </div>
        <div>
          Copyright © 2013- 2024 Smartly.io Solutions Oy. All rights reserved.
        </div>
      </div>
    </>
  );
};

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        applink: formData.website,
      }),
    };

    try {
      const response = await fetch(
        "http://54.84.51.72/query/create/",
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        toast({
          description:
            "Your message has been sent. We will contact you shortly",
        });
      } else {
        toast({
          description: (
            <div className="text-red-500">
              Failed to send message. Please try again.
            </div>
          ),
        });
      }
    } catch (error) {
      toast({
        description: (
          <div className="text-red-500">
            Failed to send message. Please try again.
          </div>
        ),
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto shadow-md border border-Turbo rounded-2xl p-4"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="website"
          className="block text-sm font-medium text-white"
        >
          Website
        </label>
        <input
          type="string"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-primary"
          required
        />
      </div>
      <div className="my-8">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-Turbo text-primary font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FooterSection;
