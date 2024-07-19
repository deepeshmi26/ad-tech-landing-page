import AccordionCard from "@/components/compound/cards/AccordionCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ServerInsertedHTMLContext } from "next/navigation";

type Props = {};

const solutionsSectionData = [
  {
    cta: " Manul workload stalls innovation",
  },
  {
    cta: " Manul workload stalls innovation",
  },
  {
    cta: " Manul workload stalls innovation",
  },
];
const SolutionSection = (props: Props) => {
  return (
    <div
      id="solutions"
      className="flex flex-col items-center justify-center px-8"
    >
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
          {solutionsSectionData.map((data, index) => (
            <AccordionItem key={index} value={String(index)}>
              <AccordionTrigger>
                <div className="py-10 md:py-20 text-4xl text-Turbo font-semibold flex items-center justify-center">
                  {data.cta}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <AccordionCard />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Button className=" my-12 bg-Electric-Violet rounded-none rounded-tr-3xl hover:bg-Turbo hover:text-primary transition-all rounded-bl-3xl hover:rounded-3xl h-full px-7 py-4 font-grotesk_wide text-base font-semibold">
        Get Demo
      </Button>
    </div>
  );
};

export default SolutionSection;
