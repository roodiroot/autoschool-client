"use client";

import { AnimatePresence, motion } from "framer-motion";

import BurgerButton from "./burger-button";
import { transitionObjectVariants } from "@/lib/transition-variant";
import { MenuLinkType } from "@/types";
import MobilNavLink from "./mobil-nav-link";

const MobilMenu: React.FC<{
  setOpen: (value: boolean) => void;
  links: MenuLinkType[];
}> = ({ links, setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transitionObjectVariants}
      className='block md:hidden fixed inset-0 bg-slate-950/80 z-10'
    >
      <motion.div
        initial={{
          opacity: 0,
          translateY: "-100%",
        }}
        animate={{ opacity: 1, translateY: "-10%" }}
        exit={{ opacity: 0, translateY: "-100%" }}
        transition={transitionObjectVariants}
        className='fixed min-h-[250px] top-0 left-0 w-full h-auto rounded-4xl bg-mwhite z-20'
      >
        <BurgerButton
          open
          onClick={() => setOpen(false)}
          className='absolute  top-14 right-5 z-[101]'
        />

        <div className='relative pt-16 px-8 pb-8 flex flex-col gap-10 z-[100]'>
          <div className='flex flex-col'>
            {links.map((i: MenuLinkType) => (
              <MobilNavLink key={i.id} link={i} menuOpen={setOpen} />
            ))}
          </div>
          <a
            href='tel:88345164141'
            className='block py-3 font-bold bg-mgreen text-mwhite rounded-full  px-8 shadow-m whitespace-nowrap text-lg text-center'
          >
            8 ( 83451 ) 6 - 41 - 41
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobilMenu;
