"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const Logo: React.FC<{ big?: boolean }> = ({ big }) => {
  return (
    <Link href='/'>
      <Image
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
          big ? "w-24 md:w-52" : "w-24 md:w-28 xl:w-32"
        )}
        width='150'
        height='150'
        decoding='async'
        data-nimg='1'
        src='/photo/logo/LOGO3.png'
        alt='logo'
        priority
      />
    </Link>
  );
};

export default Logo;
