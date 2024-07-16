import AccordionCard from "@/components/compound/cards/AccordionCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type Props = {};

const SolutionSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <h2 className="my-24 max-w-[1000px] text-4xl lg:text-5xl text-center leading-[3rem] tracking-tight font-semibold  ">
        <span className="text-Mardi-Gras">See how we solve&nbsp;</span>
        advertisers biggest challenges
      </h2>
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-Electric-Violet rounded-2xl px-4 md:px-[8%]  text-secondary"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="py-20 text-4xl text-Turbo font-semibold flex items-center justify-center">
                Manul workload stalls innovation
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionCard />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="py-20 text-4xl text-Turbo font-semibold flex items-center justify-center">
                Tap into the Power of Gen AI for Creative
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionCard />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="py-20 text-4xl text-Turbo font-semibold flex items-center justify-center">
                Data discrepancies hinder performance
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionCard />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button className=" my-24 bg-Electric-Violet rounded-none rounded-tr-3xl hover:bg-Turbo hover:text-primary transition-all rounded-bl-3xl hover:rounded-3xl h-full px-7 py-4 font-grotesk_wide text-base font-semibold">
        Get Demo
      </Button>
    </div>
  );
};

export default SolutionSection;
