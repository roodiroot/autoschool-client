import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuestionType } from "@/types";

const AccordionQuestions: React.FC<{ questionsList: QuestionType[] }> = ({
  questionsList,
}) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {questionsList.map((q, index) => (
        <AccordionItem key={q.question} value={`item-${index}`}>
          <AccordionTrigger className='text-xs sm:text-sm lg:text-base font-bold'>
            {q.question}
          </AccordionTrigger>
          <AccordionContent className='text-xs sm:text-sm'>
            {q.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionQuestions;
