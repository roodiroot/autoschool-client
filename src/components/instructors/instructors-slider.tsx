"use client";
"use client";
import type { InsructorsType } from "@/types";
import InstructorCard from "./instructor-card";

const InstructorsSlider: React.FC<{
  instructorsList: InsructorsType[];
  handlers: any;
  position: number;
}> = ({ instructorsList, position, handlers }) => {
  return (
    <div
      {...handlers}
      className=' w-full h-[480px] sm:h-[583px] relative flex gap-10 py-10 md:overflow-hidden'
    >
      {instructorsList.map((e, index) => (
        <InstructorCard
          key={index}
          position={position}
          instructor={e}
          className='absolute left-0 sm:left-10'
          index={index}
        />
      ))}
    </div>
  );
};

export default InstructorsSlider;
