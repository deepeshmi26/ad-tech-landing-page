import React from "react";

type Props = {};

const StatsSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-12 bg-[#EDEDEF] py-12 px-12">
      <div className=" font-semibold text-5xl text-Mardi-Gras ">Our reach</div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 w-full justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-primary font-semibold">100M+</div>
          <div className="font-medium text-lg">
            Impressions served per month
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-primary font-semibold">800+</div>
          <div className="font-medium text-lg">
            Properties monetized till date
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-primary font-semibold">50+</div>
          <div className="font-medium text-lg">Happy clients</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
