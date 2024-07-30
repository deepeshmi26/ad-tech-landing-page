"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import React, { useState } from "react";

type Props = {};

const FormSection = (props: Props) => {
  return (
    <div id="contact-us" className="flex items-center justify-center">
      <div className="flex flex-col mx-8 mt-40 mb-20 py-8 rounded-2xl items-center justify-center  bg-gradient-to-r from-blue-800 to-indigo-900 px-8  w-full max-w-[900px]">
        <h1 className="text-white text-5xl md:text-6xl mb-5 font-bold md:leading-[70px] ">
          Contact us
        </h1>
        <Form />
      </div>
    </div>
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
        <label htmlFor="name" className="block text-2xl font-medium text-white">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block font-medium  text-2xl text-white"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="website"
          className="block font-medium  text-2xl text-white"
        >
          Website
        </label>
        <input
          type="string"
          placeholder="Enter your website address"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          required
        />
      </div>
      <div className="my-8">
        <Button
          variant={"standout"}
          type="submit"
          className="w-full"
          // className="w-full px-4 py-2 font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default FormSection;
