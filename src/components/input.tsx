"use client";

import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./form";
import { cn } from "@/lib/utils";

interface InputProps {
  placeholder: string;
  title: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: FieldError | undefined;
  type?: "email" | "tel";
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  title,
  register,
  required,
  error,
  type,
}) => {
  let pattern = undefined;
  if (type === "email") {
    pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/i;
  }
  if (type === "tel") {
    pattern = /^((\+7|7|8|9)+([0-9]){10})$/;
  }
  return (
    <div className='w-full'>
      <div
        className={cn(
          "px-5 py-1 text-base sm:text-lg transition",
          error ? "text-rose-500" : "text-mgreen"
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          "relative h-12 w-full rounded-full bg-mgray overflow-hidden after:w-4 after:h-4 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:right-4",
          error ? "after:bg-rose-500" : "after:bg-mgreen"
        )}
      >
        <input
          {...register(label, { required, pattern })}
          placeholder={placeholder}
          type='text'
          className={cn(
            "w-full h-full bg-inherit px-5 py-3 rounded-full ",
            error ? "focus:outline-rose-500" : "focus:outline-mgreen"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
