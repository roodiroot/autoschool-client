"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { russo } from "@/fonts";

const TitleElement: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  {
    children: React.ReactNode;
    className?: string;
  }
> = ({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        russo.className,
        "w-full py-2 mb-6 text-xl md:text-2xl lg:text-3xl font-bold",
        className
      )}
    >
      {children}
    </div>
  );
};

export default forwardRef(TitleElement);
