"use client";

import { AnimatePresence } from "framer-motion";

import Icon from "@/components/utils/icon";
import { useState } from "react";
import IconLink from "./icon-link";
import { link_list } from "@/constance";
import { SOCIALType } from "@/types";
import { cn } from "@/lib/utils";

const CallWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='fixed -z-10 bottom-5 right-5 md:right-20'>
      <div
        onClick={() => setOpen(!open)}
        className=' w-14 h-14 relative flex cursor-pointer'
      >
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75",
            !open && "animate-ping"
          )}
        ></span>
        <span className='relative inline-flex rounded-full w-14 h-14 bg-sky-500'>
          <Icon
            variant='chat'
            className='absolute fill-mwhite top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8'
          />
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {link_list.map((e: SOCIALType, index) => (
              <IconLink key={e.icon} index={index} link={e} />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CallWidget;
