"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Video from "./video";

const VideoWidget = () => {
  const [open, setOpen] = useState(true);
  return (
    <motion.div
      onClick={() => setOpen(!open)}
      initial={{ translateX: "0%" }}
      animate={{
        translateX: open ? "0%" : "-70%",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      className='fixed -z-10 -left-4 bottom-4 before:w-[2px] before:h-10 before:bg-slate-950/20 before:absolute before:top-1/2 before:-right-2 before:-translate-y-1/2 before:rounded-full cursor-pointer'
    >
      <div className='rounded-3xl w-[200px] md:w-[280px] aspect-[16/9] bg-slate-400 shadow-m2 overflow-hidden ring-1 ring-gray-300'>
        <Video />
      </div>
    </motion.div>
  );
};

export default VideoWidget;
