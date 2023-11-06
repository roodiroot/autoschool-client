import { cn } from "@/lib/utils";

const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
