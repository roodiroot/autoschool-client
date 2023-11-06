import { cn } from "@/lib/utils";
import Logo from "./logo";

const LogoWrapper = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn(
        className,
        "bg-mwhite rounded-full shadow-m w-36 h-36 md:w-40 md:h-40 xl:w-60 xl:h-60 "
      )}
    >
      <Logo />
    </div>
  );
};

export default LogoWrapper;
