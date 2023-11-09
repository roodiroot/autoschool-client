"use client";

import { cn } from "@/lib/utils";
import { advantagesList } from "@/constance";
import { AdvantagesType } from "@/types";
import useScrollElement from "@/hooks/useScrollElement";
import AdvItem from "./adv-item";

const Advantages: React.FC<{ className: string }> = ({ className }) => {
  const { element } = useScrollElement();
  return (
    <div
      ref={element.advantages}
      className={cn(
        "relative w-full max-w-7xl mx-auto",
        "before:absolute before:rounded-full before:top-[50%] before:left-[-20%]  before:bg-mgreen/10 before:w-[300px]  before:h-[300px] md:before:left-[-30%] md:before:w-[512px] md:before:h-[512px]",
        className
      )}
    >
      <div className='px-14 py-7 bg-mwhite/80 rounded-4xl -mx-12'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3'>
          {advantagesList.map((i: AdvantagesType) => (
            <AdvItem key={i.id} icon={i.icon} description={i.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
