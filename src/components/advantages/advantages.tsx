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
      className={cn("w-full max-w-7xl mx-auto", className)}
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
