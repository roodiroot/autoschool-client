"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { instructors_array } from "@/constance";
import Container from "@/components/container";
import TitleElement from "@/components/title-element";
import InstructorsDescriptionBlock from "@/components/instructors/instructors-description-block";
import InstructorsSlider from "@/components/instructors/instructors-slider";
import { Button } from "@/components/ui/button";
import NextPrevButton from "@/components/instructors/next-prev-button";
import useScrollElement from "@/hooks/useScrollElement";
import usePopap from "@/hooks/usePopap";
import { cn } from "@/lib/utils";

const Instructors: React.FC<{ className: string }> = ({ className }) => {
  const { onOpen } = usePopap();
  const { element } = useScrollElement();
  const [position, setPosition] = useState(2);
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [disabledRight, setDisabledRight] = useState(false);

  const onRight = () => {
    if (position < instructors_array.length - 1) {
      setDisabledRight(false);
      setPosition(position + 1);
    }
    if (position === instructors_array.length - 2) {
      console.log("s");
      setDisabledLeft(true);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      setDisabledLeft(false);
      setPosition(position - 1);
    }
    if (position === 1) {
      console.log("s");
      setDisabledRight(true);
    }
  };

  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === "Left") {
        onRight();
      }
      if (dir === "Right") {
        onLeft();
      }
    },
  });

  return (
    <Container className={className}>
      <TitleElement ref={element.instructors}>Наши инструктора</TitleElement>
      <div
        className={cn(
          "relative w-full flex flex-col md:flex-row lg:gap-5 xl:gap-12 justify-between items-center mb-7 lg:mb-12",
          "before:pointer-events-none before:absolute before:-z-0 before:rounded-full before:top-[-20%] before:left-[-20%] before:border-[30px]  before:border-mgreen/10 before:w-[400px]  before:h-[400px] md:before:left-[-20%] md:before:w-[512px] md:before:h-[512px]"
        )}
      >
        <InstructorsDescriptionBlock />
        <InstructorsSlider
          handlers={handlers}
          instructorsList={instructors_array}
          position={position}
        />
      </div>
      <div className='relative z-10 flex gap-7 items-center'>
        <Button
          onClick={onOpen}
          variant='mfull'
          className='w-full max-w-[280px]'
        >
          Подробнее
        </Button>
        <div className='flex gap-1 items-center'>
          <NextPrevButton
            disabled={disabledLeft}
            onClick={onRight}
            type='left'
          />
          <NextPrevButton
            disabled={disabledRight}
            onClick={onLeft}
            type='right'
          />
        </div>
      </div>
    </Container>
  );
};

export default Instructors;
