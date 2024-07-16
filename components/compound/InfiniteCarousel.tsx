import { cn } from "@/lib/utils";
import { ReactElement, ReactNode } from "react";

type InfiniteCarouselItem = {
  items: ReactNode[];
  className?: string;
};
const InfinteCarousel: React.FC<InfiniteCarouselItem> = ({
  className,
  items,
}) => {
  return (
    <div
      className={cn("flex flex-row gap-32 overflow-hidden w-full", className)}
    >
      <div className="flex  flex-row gap-32 translate-x-14 animate-[scroll_10s_linear_infinite] justify-between">
        {items.map((item, index) => (
          <div className="" key={"1" + index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-32 translate-x-14 animate-[scroll_10s_linear_infinite] justify-between">
        {items.map((item, index) => (
          <div className="" key={"1" + index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex  flex-row gap-32 translate-x-14 animate-[scroll_10s_linear_infinite] justify-between">
        {items.map((item, index) => (
          <div className="" key={"1" + index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex  flex-row gap-32 translate-x-14 animate-[scroll_10s_linear_infinite] justify-between">
        {items.map((item, index) => (
          <div className="" key={"1" + index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinteCarousel;
