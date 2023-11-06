"use client";

import { step_list } from "@/constance";
import Container from "@/components/container";
import TitleElement from "@/components/title-element";
import StepPresent from "@/components/presents/step-present";

import type { StepType } from "@/types";

const Presents: React.FC<{ className: string }> = ({ className }) => {
  return (
    <Container className={className}>
      <TitleElement className='text-center'>
        Как мы доведем вас до результата:
      </TitleElement>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {step_list.map((e: StepType) => (
          <StepPresent key={e.id} info={e} />
        ))}
      </div>
    </Container>
  );
};

export default Presents;
