import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "../utils/icon";
import { InsructorsType } from "@/types";
import { cn } from "@/lib/utils";

const InstructorCard: React.FC<{
  instructor: InsructorsType;
  position: number;
  index: number;
  className?: string;
}> = ({ instructor, className, index, position }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: index === position || index === position + 1 ? 1 : 0,
        translateX: `${(index - position) * 120}%`,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "w-full max-w-[280px]  md:max-w-[314px] rounded-3.5xl shadow-m overflow-hidden bg-mwhite",
        className
      )}
    >
      <div className='relative w-full aspect-[5/4] '>
        <Image
          loading='lazy'
          width='400'
          height='400'
          decoding='async'
          data-nimg='1'
          src={instructor.img}
          alt='instructor'
          className='absolute w-full h-full inset-0 object-cover'
        />
      </div>
      <div className='pt-6 px-9 pb-9 aspect-[5/4] flex flex-col justify-between'>
        <div className=''>
          <div className='mb-1 leading-7'>{instructor.name}</div>
          <div className='mb-2 text-zinc-400'>{instructor.experience}</div>
        </div>
        <div className='w-full flex justify-between items-end'>
          <div className=''>Рейтинг инструктора</div>
          <div className='whitespace-nowrap flex gap-1 '>
            <Icon variant='star' />
            <span>4,9</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
