import { cn } from "@/lib/utils";
import Icon from "../utils/icon";

const NextPrevButton: React.FC<{
  type: "left" | "right";
  disabled: boolean;
  onClick?: () => void;
}> = ({ type, onClick, disabled }) => {
  return (
    <div
      onClick={() => {
        if (!disabled && onClick) {
          onClick();
        }
      }}
      className={cn(
        "w-12 h-12 rounded-2xl border relative",
        disabled
          ? "border-zinc-400"
          : "border-mgreen hover:bg-mgreen/20 transition cursor-pointer "
      )}
    >
      <Icon
        variant={type}
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          disabled ? "fill-zinc-400" : "fill-mgreen"
        )}
      />
    </div>
  );
};

export default NextPrevButton;
