"use client";

import { questions_list } from "@/constance";
import AccordionQuestions from "./accordion-questions";
import useScrollElement from "@/hooks/useScrollElement";
import { cn } from "@/lib/utils";
import { russo } from "@/fonts";

const Questions = () => {
  const { element } = useScrollElement();
  return (
    <div
      ref={element.feedback}
      className='w-full max-w-[680px] h-[600px]   mx-auto md:mx-0'
    >
      <div className='w-full text-center'>
        <h3
          className={cn(russo.className, "text-xl font-bold sm:text-2xl mb-5")}
        >
          Часто задаваемые вопросы
        </h3>
        <AccordionQuestions questionsList={questions_list} />
      </div>
    </div>
  );
};

export default Questions;
