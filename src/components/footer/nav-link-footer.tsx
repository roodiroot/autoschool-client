"use client";

import useScrollElement from "@/hooks/useScrollElement";
import { MenuLinkType } from "@/types";

const NavLinkFooter: React.FC<{ link: MenuLinkType }> = ({ link }) => {
  const { element } = useScrollElement();
  const hendleClick = () => {
    if (element[link.name]?.current) {
      element[link.name]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <li
      onClick={hendleClick}
      className='cursor-pointer hover:text-mgreen traansition'
    >
      {link.text}
    </li>
  );
};

export default NavLinkFooter;
