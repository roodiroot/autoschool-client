import { cn } from "@/lib/utils";
import Container from "../container";
import TitleElement from "../title-element";
import PhotoCarusel from "./photoCarusel";
import { reviews_list } from "@/constance";

const Reviews: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn("w-full", className)}>
      <Container>
        <TitleElement className='text-center'>
          Фото наших студентов
        </TitleElement>
        <PhotoCarusel list={reviews_list} />
      </Container>
    </div>
  );
};

export default Reviews;
