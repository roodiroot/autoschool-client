"use client";

import Link from "next/link";
import ChekInput from "../chek-input";
import Input from "../input";
import { Button } from "../ui/button";
import Form from "../form";
import { cn } from "@/lib/utils";
import { russo } from "@/fonts";

const FeedbackForm = () => {
  return (
    <div className='w-full max-w-[423px] mx-auto md:mx-0'>
      <div className='w-full max-w-[300px] mx-auto text-center mb-5'>
        <h3
          className={cn(
            russo.className,
            "text-xl sm:text-2xl md:text-3xl mb-2"
          )}
        >
          Обратная связь
        </h3>
        <p className='text-sm sm:text-base'>
          Нужна консультация? Оставьте свои контактные данные
        </p>
      </div>
      <Form />
    </div>
  );
};

export default FeedbackForm;
