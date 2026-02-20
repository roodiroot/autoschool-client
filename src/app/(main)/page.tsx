import Advantages from "@/components/advantages/advantages";
import Categories from "@/components/categories/categories";
import Container from "@/components/container";
import FeedbackForm from "@/components/feedback-form/feedback-form";

import Instructors from "@/components/instructors/instructors";
import MainScreen from "@/components/main-screen/main-screen";
import Presents from "@/components/presents/presents";
import Questions from "@/components/questions/questions";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <>
      <MainScreen />
      <Advantages className="mb-16 sm:mb-32" />
      <Categories className="mb-16 sm:mb-40" />
      <Presents className="mb-16 sm:mb-40" />
      <Instructors className="mb-16 sm:mb-40" />
      <Reviews className="mb-16 sm:mb-40" />
      <Container className="mb-60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-14 md:gap-8 ">
          <FeedbackForm />
          <Questions />
        </div>
      </Container>
    </>
  );
}
