import { cn } from "@/lib/utils";
import Container from "../container";
import TitleElement from "../title-element";
import PhotoCarusel from "./photoCarusel";
import { reviews_list } from "@/constance";

const Reviews: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn("w-full", className)}>
      <Container>
        <div
          className='
        pointer-events-none
        before:absolute before:-z-0 before:rounded-full before:top-[-20%] before:right-[-20%]  before:bg-mgreen/10 before:w-[400px]  before:h-[400px] md:before:right-[-10%] md:before:w-[600px] md:before:h-[600px]
        after:absolute after:-z-0 after:rounded-full after:top-[80%] after:left-[-20%] after:border-[30px]  after:border-mgreen/10 after:w-[400px]  after:h-[400px] md:after:top-[60%] md:after:right-[-30%] md:after:w-[512px] md:after:h-[512px]
        '
        ></div>
        <TitleElement className='text-center'>
          Фото наших студентов
        </TitleElement>
        <PhotoCarusel list={reviews_list} />
      </Container>
    </div>
  );
};

export default Reviews;
