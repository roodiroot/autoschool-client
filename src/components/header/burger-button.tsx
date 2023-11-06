import { cn } from "@/lib/utils";
import Icon from "../utils/icon";

interface BurgerProps {
  onClick: () => void;
  open?: boolean;
  className?: string;
}

const BurgerButton: React.FC<BurgerProps> = ({
  onClick,
  open = false,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative block md:hidden shadow-m w-16 h-16 rounded-full bg-mwhite cursor-pointer",
        className
      )}
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {open ? <Icon variant='ex' className="fill-slate-950" /> : <Icon variant='burger' />}
      </div>
    </div>
  );
};

export default BurgerButton;
