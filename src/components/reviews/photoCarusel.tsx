"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ReviewsListType } from "@/types";
import Image from "next/image";

const PhotoCarusel: React.FC<{ list: ReviewsListType[] }> = ({ list }) => {
  const [width, setWidth] = useState(0);
  const carusel = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (carusel.current)
      setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);
  return (
    <motion.div
      ref={carusel}
      whileTap={{ cursor: "grabbing" }}
      className='w-full cursor-grab'
    >
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className='flex'
      >
        {list.map((e, index) => (
          <motion.div
            key={index}
            className='min-w-[320px]  aspect-[2/3] p-4 md:min-w-[380px]'
          >
            <div className='relative w-full h-full bg-slate-200 shadow-m rounded-3.5xl pointer-events-none overflow-hidden'>
              <Image
                loading='lazy'
                decoding='async'
                data-nimg='1'
                src={e}
                alt='review'
                width={320}
                height={510}
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PhotoCarusel;
