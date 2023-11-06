"use client";

import { useEffect, useRef } from "react";

import useScrollElement from "@/hooks/useScrollElement";
import { MenuLinkType } from "@/types";

const MobilNavLink: React.FC<{
  link: MenuLinkType;
  menuOpen: (open: boolean) => void;
}> = ({ link, menuOpen }) => {
  const { addElement } = useScrollElement();
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    addElement({ ref, name: link.name });
  }, []);
  const hendleClick = () => {
    if (ref?.current) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
    menuOpen(false);
  };
  return (
    <div
      onClick={hendleClick}
      className='relative z-50 cursor-pointer transition font-bold py-3 px-6 hover:text-mgreen'
    >
      {link.text}
    </div>
  );
};

export default MobilNavLink;
