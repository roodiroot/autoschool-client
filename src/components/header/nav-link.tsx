"use client";

import useScrollElement from "@/hooks/useScrollElement";
import { MenuLinkType } from "@/types";
import { useEffect, useRef } from "react";

const NavLink: React.FC<{ link: MenuLinkType }> = ({ link }) => {
  const { addElement } = useScrollElement();
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    addElement({ ref, name: link.name });
  }, []);
  const hendleClick = () => {
    if (ref?.current) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={hendleClick}
      className='cursor-pointer transition text-xs lg:text-sm py-3 px-1 whitespace-nowrap hover:text-mgreen'
    >
      {link.text}
    </div>
  );
};

export default NavLink;
