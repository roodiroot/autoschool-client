"use client";

import { motion } from "framer-motion";

import Form from "@/components/form";
import Icon from "@/components/utils/icon";
import { transitionObjectVariants } from "@/lib/transition-variant";

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, zIndex: 2 }}
      animate={{ opacity: 1, zIndex: 2 }}
      exit={{ opacity: 0, zIndex: 2 }}
      transition={transitionObjectVariants}
      className='fixed z-50 inset-0 bg-shadow/[85%] flex justify-center items-center p-4'
    >
      <motion.div
        initial={{
          opacity: 0,
          translateY: "-100%",
        }}
        animate={{ opacity: 1, zIndex: 20, translateY: "0%" }}
        exit={{ opacity: 0, zIndex: 20, translateY: "-100%" }}
        transition={transitionObjectVariants}
        className='relative w-full min-h-full rounded-3.5xl p-6 bg-mwhite sm:h-auto sm:min-h-fit sm:max-w-[510px] flex items-center sm:p-12'
      >
        <div
          onClick={onClose}
          className='block absolute top-0  p-4 cursor-pointer left-0 sm:left-[unset] sm:-right-12'
        >
          <Icon variant='ex' className='fill-slate-950/80 sm:fill-mwhite' />
        </div>
        <Form />
      </motion.div>
    </motion.div>
  );
};

export default Popup;
