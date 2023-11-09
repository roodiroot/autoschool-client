import AbsoluteComponents from "@/components/absolut-components/absolute-components";
import Advantages from "@/components/advantages/advantages";
import Categories from "@/components/categories/categories";
import Container from "@/components/container";
import FeedbackForm from "@/components/feedback-form/feedback-form";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Instructors from "@/components/instructors/instructors";
import MainScreen from "@/components/main-screen/main-screen";
import Matryoshka from "@/components/matryoshka";
import Presents from "@/components/presents/presents";
import Questions from "@/components/questions/questions";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <div
      className='
    relative w-full h-full overflow-x-hidden 
    before:pointer-events-none before:absolute before:-z-0 before:rounded-full before:bottom-[0%] before:right-[-20%]  before:bg-mgreen/10 before:w-[400px]  before:h-[400px] md:before:right-[0%] md:before:w-[512px] md:before:h-[512px]
    '
    >
      <Header />
      <MainScreen />
      <Advantages className='mb-16 sm:mb-32' />
      <Categories className='mb-16 sm:mb-40' />
      <Presents className='mb-16 sm:mb-40' />
      <Instructors className='mb-16 sm:mb-40' />
      <Reviews className='mb-16 sm:mb-40' />
      <Container className='mb-60'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-14 md:gap-8 '>
          <FeedbackForm />
          <Questions />
        </div>
      </Container>
      <Footer />
      <Container>
        <div className='flex justify-between items-center'>
          <div className='text-sm'>
            © АНПОО «Автошкола Плюс», 2023 <br />
            ИНН1324002715
            <br />
            ОГРН1181326004969
          </div>
          <Matryoshka />
        </div>
      </Container>
      <AbsoluteComponents />
    </div>
  );
}
