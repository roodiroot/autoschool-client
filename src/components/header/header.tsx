"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Icon from "../utils/icon";
import LogoWrapper from "./logo-wrapper";
import BurgerButton from "./burger-button";
import MobilMenu from "./mobil-menu";
import NavLink from "./nav-link";
import { navLinks } from "@/constance";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {open && <MobilMenu links={navLinks} setOpen={setOpen} />}
      </AnimatePresence>
      <div className='absolute top-0 inset-x-0'>
        <div className='relative w-fill mx-auto max-w-7xl flex items-center px-2 sm:px-5 gap-5 pt-8 md:pt-10 xl:pt-14'>
          <nav className='relative h-11 rounded-full bg-mwhite shadow-m flex-1 pl-36 md:pl-40 xl:pl-60'>
            <LogoWrapper className='absolute top-1/2 -translate-y-1/2 left-0 xl:-left-10' />
            <div className='hidden md:flex w-full h-full gap-6 justify-center pl-4 pr-20 items-center'>
              {navLinks.map((i) => (
                <NavLink key={i.id} link={i} />
              ))}
            </div>
            <div className='absolute right-0 top-1/2 -translate-y-1/2 flex gap-4'>
              <a
                href='tel:88345164141'
                className='relative block lg:hidden shadow-m w-16 h-16 rounded-full bg-mwhite'
              >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Icon variant='call' />
                </div>
              </a>
              <BurgerButton onClick={() => setOpen(true)} />
            </div>
          </nav>
          <a
            href='tel:88345164141'
            className='hidden lg:block py-3 font-bold text-mgreen bg-mwhite rounded-full  px-8 shadow-m whitespace-nowrap text-sm'
          >
            8 ( 83451 ) 6 - 41 - 41
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
