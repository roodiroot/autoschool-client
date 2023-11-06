"use client";

import { SocialLinkType } from "@/types";
import Icon from "../utils/icon";

const SocialLink: React.FC<{ element: SocialLinkType }> = ({ element }) => {
  return (
    <a
      href={element.link}
      target='_blank'
      className='w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center cursor-pointer'
    >
      <Icon variant={element.element} className='w-5 h-5' />
    </a>
  );
};

export default SocialLink;
